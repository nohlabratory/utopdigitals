import { motion } from "motion/react";
import { Users, Target, BarChart3 } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { label: "Brands Working With Us", value: "17+" },
    { label: "ETB Generated", value: "15.6M+" },
    { label: "Leads Delivered", value: "130K+" },
  ];

  return (
    <section className="py-20 bg-[#E6E9EC] border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <p className="text-center text-gray-600 font-semibold mb-8">Trusted by</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <span className="text-gray-500 font-medium italic">Industry Leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
}
