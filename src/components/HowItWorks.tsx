import { motion } from "motion/react";

const steps = [
  { title: "Strategy", description: "We analyze your brand and goals." },
  { title: "Content Creation", description: "High-retention assets produced." },
  { title: "Growth & Ads", description: "Campaigns launched and optimized." },
  { title: "Scale & Optimize", description: "Data-driven scaling for maximum ROI." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#E6E9EC]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Our <span className="text-[#1A73E8]">Proven Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-white border border-gray-200"
            >
              <div className="text-4xl font-bold text-[#1A73E8]/20 mb-4">0{i + 1}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
