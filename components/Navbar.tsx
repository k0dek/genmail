"use client";
import { Mail } from 'lucide-react';

export function Navbar() {
  return (
    <header className="w-full flex justify-center sticky top-[15px] z-10 px-[15px]">
      <nav className="bg-white shadow-xl max-w-7xl w-full mx-auto rounded-[20px]">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">EmailGen AI</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}