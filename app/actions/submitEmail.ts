"use server"

import { z } from "zod"
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const schema = z.object({
  email: z.string().email(),
  type: z.enum(["generate", "pricing"])
})

export async function submitEmail(email: string, type: "generate" | "pricing") {
  const result = schema.safeParse({ email, type })

  if (!result.success) {
    throw new Error("Invalid input")
  }

  try {
    console.log(`Submitting email: ${email} for ${type}`)
    
    // Try to create a new user, or update if the email already exists
    const savedEmail = await prisma.user.upsert({
      where: { email },
      update: { type },
      create: { email, type },
    })

    await new Promise(resolve => setTimeout(resolve, 500))

    console.log('Email saved successfully:', savedEmail)

    return { success: true, data: savedEmail }
  } catch (error) {
    console.error('Error saving email:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle specific Prisma errors
      if (error.code === 'P2002') {
        throw new Error('This email is already registered')
      }
    }
    throw new Error('Failed to submit email')
  } finally {
    await prisma.$disconnect()
  }
}
