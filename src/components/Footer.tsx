import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#E6E9EC] border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold text-gray-900 mb-6">Utop Digitals</div>
        <div className="flex justify-center space-x-6 mb-8">
          <Instagram className="w-6 h-6 text-gray-600 hover:text-[#1A73E8] cursor-pointer" />
          <Twitter className="w-6 h-6 text-gray-600 hover:text-[#1A73E8] cursor-pointer" />
          <Linkedin className="w-6 h-6 text-gray-600 hover:text-[#1A73E8] cursor-pointer" />
          <Mail className="w-6 h-6 text-gray-600 hover:text-[#1A73E8] cursor-pointer" />
        </div>
        <p className="text-gray-500 text-sm">© 2026 Utop Digitals. All rights reserved.</p>
      </div>
    </footer>
  );
}
