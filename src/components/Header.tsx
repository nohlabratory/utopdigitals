import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E9EC]/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">Utop Digitals</Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="/#services" className="hover:text-[#1A73E8] transition-colors">Services</a>
          <a href="/#how-it-works" className="hover:text-[#1A73E8] transition-colors">Process</a>
          <a href="/#works" className="hover:text-[#1A73E8] transition-colors">Works</a>
          <Link to="/pricing" className="hover:text-[#1A73E8] transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#1A73E8] text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm">
            Book a Call
          </button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-gray-200"
        >
          <div className="flex flex-col p-6 gap-4 text-sm font-medium text-gray-600">
            <a href="/#services" onClick={() => setIsOpen(false)} className="hover:text-[#1A73E8] transition-colors">Services</a>
            <a href="/#how-it-works" onClick={() => setIsOpen(false)} className="hover:text-[#1A73E8] transition-colors">Process</a>
            <a href="/#works" onClick={() => setIsOpen(false)} className="hover:text-[#1A73E8] transition-colors">Works</a>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="hover:text-[#1A73E8] transition-colors">Pricing</Link>
            <button className="bg-[#1A73E8] text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm w-full">
              Book a Call
            </button>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
