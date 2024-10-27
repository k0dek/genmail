"use client";
import { useState } from "react";
import { Code, Copy, CheckCheck, Wand2 } from "lucide-react";
import { Modal } from "./Modal";

export function Generator() {
    const [prompt, setPrompt] = useState("");
    const [generatedHtml, setGeneratedHtml] = useState("");
    const [copied, setCopied] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGenerate = () => {
        if (prompt.trim()) {
            setIsModalOpen(true);
        }
    };

    const handleEmailSubmit = (email: string) => {
        setIsModalOpen(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedHtml);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-[35px] shadow-md p-6 pt-[25px]">
                    <div className="mb-4">
                        <label htmlFor="prompt" className="block ml-[15px] text-[20px] font-bold text-gray-900 mb-[15px]">
                            Describe your email
                        </label>
                        <textarea id="prompt" rows={6} className="w-full resize-none px-4 py-3 rounded-[20px] border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Describe the email you want to generate..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                    </div>
                    <button onClick={handleGenerate} className="w-full rounded-[18px] flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 transition duration-150">
                        <Wand2 className="h-5 w-5" />
                        <span>Generate HTML</span>
                    </button>
                </div>

                <div className="bg-white rounded-[35px] shadow-md p-6 min-h-[200px]">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <Code className="h-5 w-5 text-gray-500" />
                            <h2 className="text-lg font-medium text-gray-900">Generated HTML</h2>
                        </div>
                        <button onClick={handleCopy} className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                            {copied ? <CheckCheck className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            <span>{copied ? "Copied!" : "Copy code"}</span>
                        </button>
                    </div>
                    <pre className="bg-gray-50 min-h-fit rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-gray-800">{generatedHtml}</code>
                    </pre>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Generate Your Email HTML" description="Enter your email to receive your generated HTML template. You can generate up to 5 emails per day with a free account." type="generate" />
        </>
    );
}
