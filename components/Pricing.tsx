"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Modal } from "./Modal";

export function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"free" | "enterprise">("free");

    const handleButtonClick = (type: "free" | "enterprise") => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const handleEmailSubmit = (email: string) => {
        setIsModalOpen(false);
    };

    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
                    <p className="text-lg text-gray-600">Choose the plan that's right for you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-7xl mx-auto">
                    <div className="bg-white flex flex-col justify-between rounded-[35px] shadow-lg p-8 relative border border-gray-100">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                            <p className="text-gray-600 mb-6">Perfect for getting started</p>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold text-gray-900">$0</span>
                                <span className="text-gray-600 ml-2">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Generate up to 5 emails per day</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Basic email templates</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Standard support</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Community access</span>
                                </li>
                            </ul>
                        </div>
                        <button onClick={() => handleButtonClick("free")} className="w-full py-3 px-6 rounded-[18px] bg-white text-indigo-600 font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition duration-150">
                            Get Started
                        </button>
                    </div>

                    <div className="bg-white rounded-[35px] flex flex-col justify-between shadow-lg p-8 relative border border-gray-100">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Owner</h3>
                            <p className="text-gray-600 mb-6">All-in-one and more</p>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold text-gray-900">$20</span>
                                <span className="text-gray-600 ml-2">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Generate up to 100 emails per day</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Premium email templates</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Standard support</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Community access</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-600 mr-3" />
                                    <span>Private community access</span>
                                </li>
                            </ul>
                        </div>
                        <button onClick={() => handleButtonClick("free")} className="w-full py-3 px-6 rounded-[18px] bg-white text-indigo-600 font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition duration-150">
                            Get Started
                        </button>
                    </div>

                    <div className="bg-indigo-600 flex flex-col justify-between rounded-[35px] shadow-lg p-8 relative text-white">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                            <p className="text-indigo-200 mb-6">For teams and businesses</p>
                            <div className="flex items-baseline mb-8">
                                <span className="text-2xl font-bold">Let's Chat</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-200 mr-3" />
                                    <span>Unlimited email generation</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-200 mr-3" />
                                    <span>Advanced customization</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-200 mr-3" />
                                    <span>Priority support</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-5 w-5 text-indigo-200 mr-3" />
                                    <span>Custom integrations</span>
                                </li>
                            </ul>
                        </div>
                        <button onClick={() => handleButtonClick("enterprise")} className="w-full rounded-[18px] py-3 px-6 bg-white text-indigo-600 font-semibold hover:bg-gray-50 transition duration-150">
                            Contact Sales
                        </button>
                    </div>
                </div>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Generate Your Email HTML" description="Enter your email to receive your generated HTML template. You can generate up to 5 emails per day with a free account." type="pricing" />
            </div>
        </div>
    );
}
