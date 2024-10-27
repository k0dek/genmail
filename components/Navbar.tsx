"use client";
import { Mail } from "lucide-react";

export function Navbar() {
    return (
        <header className="w-full flex justify-center sticky top-[15px] z-10 px-[15px]">
            <nav className="bg-white shadow-xl max-w-7xl w-full mx-auto rounded-[20px]">
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
