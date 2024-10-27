import { useState } from 'react';
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  title: string;
  description: string;
  type?: "generate" | "pricing";
}

export function Modal({ isOpen, onClose, onSubmit, title, description, type = "generate" }: ModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");

    if (type === "generate") {
      setShowError(true);
    } else {
      setShowSuccess(true);
    }
  };

  if (showError) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-[35px] p-6 w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Almost there!</h3>
          <p className="text-gray-600 mb-6">Stay tuned, we'll notify you when it's done!</p>
          <button onClick={onClose} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-[18px] transition duration-150">
            Ok
          </button>
        </div>
      </div>
    );
  }

  if (showSuccess) {
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

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-4 py-3 rounded-[18px] border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="you@example.com" 
              required 
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-[18px] transition duration-150">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}