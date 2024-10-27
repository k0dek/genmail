"use server"

import { z } from "zod"
import { PrismaClient } from '@prisma/client'

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
    // Log the attempt
    console.log(`Submitting email: ${email} for ${type}`)
    
    // Store in database using Prisma
    const savedEmail = await prisma.email.create({
      data: {
        email,
        type,
      },
    })

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Email saved successfully:', savedEmail)

    // In a real application, you might want to:
    // 1. Send a confirmation email to the user
    // 2. Add the user to your mailing list (with their consent)
    // 3. Trigger the email generation process if type is "generate"

    return { success: true, data: savedEmail }
  } catch (error) {
    console.error('Error saving email:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to submit email')
  } finally {
    // Clean up the Prisma connection
    await prisma.$disconnect()
  }
}