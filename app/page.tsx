import { Navbar } from "@/components/Navbar";
import { Generator } from "@/components/Generator";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen pt-[30px] bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <Navbar />
            <main>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[130px] lg:pb-[170px] sm:pb-[90px]">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Generate HTML Email Templates with AI</h1>
                        <p className="text-lg text-gray-600">Transform your ideas into professional HTML email templates in seconds</p>
                    </div>

                    <Generator />
                    <Features />
                </div>

                <HowItWorks />
                <Pricing />
            </main>

            <Footer />
        </div>
    );
}
