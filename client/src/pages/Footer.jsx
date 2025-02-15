
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative w-full bg-black">
      <div className="w-full bg-black h-16 flex items-center justify-center sm:justify-between px-6 text-white">
        <div className="flex items-center gap-2">
          <FaCopyright className="h-5 w-5" />
          <span>2025 Your University. All rights reserved.</span>
        </div>

        {/* Additional Links (optional) */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="/privacy-policy" className="text-white hover:text-gray-400">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white hover:text-gray-400">Terms of Service</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
      </div>
    </div>
  );
}
