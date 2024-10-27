"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { submitEmail } from "../app/actions/submitEmail";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    type?: "generate" | "pricing";
}

export function Modal({ isOpen, onClose, title, description, type = "generate" }: ModalProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ email: string }>();
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

    if (!isOpen) return null;

    const onSubmit = async (data: { email: string }) => {
        setStatus("loading");
        try {
            await submitEmail(data.email, type);
            setStatus("success");
        } catch (error) {
            console.error("Error submitting email:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-[35px] p-6 w-full max-w-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Success!</h3>
                    <p className="text-gray-600 mb-6">Thank you for your submission. We'll be in touch soon!</p>
                    <button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-[18px] transition duration-150">
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-[35px] p-6 w-full max-w-md relative">
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors">
                    <X className="h-5 w-5" />
                </button>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

                <p className="text-gray-600 mb-6">{description}</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-[18px] border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    <button type="submit" disabled={status === "loading"} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-[18px] transition duration-150 disabled:opacity-50">
                        {status === "loading" ? "Submitting..." : "Continue"}
                    </button>
                </form>

                {status === "error" && <p className="mt-4 text-sm text-red-600">An error occurred. Please try again.</p>}
            </div>
        </div>
    );
}
