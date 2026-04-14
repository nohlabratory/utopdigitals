import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[#E6E9EC] text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(26,115,232,0.15),_transparent_70%)]" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Scale Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
              To The Moon.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Utop Digitals is the elite partner for brands demanding explosive growth through high-retention content, automation, and precision-targeted ads.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-[#1A73E8] hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-all">
              Book a Call
            </button>
            <button className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-full text-lg font-semibold transition-all flex items-center gap-2">
              Learn More <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
