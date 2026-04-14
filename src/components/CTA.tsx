import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-20 bg-[#E6E9EC]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
        >
          Ready to scale your brand?
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1A73E8] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
        >
          Book a Strategy Call
        </motion.button>
      </div>
    </section>
  );
}
