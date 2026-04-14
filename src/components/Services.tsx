import { motion } from "motion/react";
import { Zap, Target, BarChart3, Palette, Bot, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Content Creation",
      description: "High-retention videos & graphics that stop the scroll.",
      icon: Palette,
    },
    {
      title: "Telegram Growth",
      description: "Strategic systems to build and monetize your community.",
      icon: Users,
    },
    {
      title: "Paid Ads (Meta)",
      description: "Data-driven campaigns that maximize ROI.",
      icon: Target,
    },
    {
      title: "Social Media Mgmt",
      description: "Consistent, authority-building presence.",
      icon: BarChart3,
    },
    {
      title: "Automation Systems",
      description: "Scale your operations without the manual work.",
      icon: Bot,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#E6E9EC]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Our <span className="text-[#1A73E8]">Growth Systems</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500/50 transition-colors"
            >
              <service.icon className="w-10 h-10 text-[#1A73E8] mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
