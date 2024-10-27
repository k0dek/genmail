import { UserCircle2, Code2, Download } from "lucide-react";

export function HowItWorks() {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
                    <p className="text-lg text-gray-600">Generate beautiful HTML emails in three simple steps</p>
                </div>
                <div className="mb-20">
                    <div className="rounded-2xl h-fill w-fill overflow-hidden aspect-video bg-gray-100">
                        <iframe src="/demo.mp4" title="Product Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ backgroundColor: "transparent" }} allowFullScreen className="w-full bg-white h-full"></iframe>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-indigo-100 p-4 rounded-xl">
                                <UserCircle2 className="h-8 w-8 text-indigo-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Sign Up</h3>
                        <p className="text-gray-600">Join our platform quickly to start making email HTML.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-indigo-100 p-4 rounded-xl">
                                <Code2 className="h-8 w-8 text-indigo-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Make HTML</h3>
                        <p className="text-gray-600">Tell us what you want your email to look like. Our tool turns your ideas into HTML code.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-indigo-100 p-4 rounded-xl">
                                <Download className="h-8 w-8 text-indigo-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Get Your Code</h3>
                        <p className="text-gray-600">Check the HTML code. If it looks good, download it and use it in your emails.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
