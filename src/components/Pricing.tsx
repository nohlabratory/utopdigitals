import { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const plans = [
  {
    name: "Bronze",
    price: "8,000",
    features: [
      "4 High-Retention Videos",
      "8 Professional Graphics",
      "Full Scripting & Editing",
      "2,000 Telegram Members/mo",
      "Free Branding & Logo",
      "50 Resellers Support"
    ]
  },
  {
    name: "Silver",
    price: "24,000",
    features: [
      "8 High-Retention Videos",
      "16 Professional Graphics",
      "Full Scripting & Editing",
      "4,000 Telegram Members/mo",
      "Free Branding & Logo",
      "100 Resellers Support"
    ]
  },
  {
    name: "Gold",
    price: "48,000",
    features: [
      "12 High-Retention Videos",
      "24 Professional Graphics",
      "Full Scripting & Editing",
      "6,000 Telegram Members/mo",
      "Meta Ads Management",
      "Free Website + DB",
      "Free Branding & Logo",
      "Scripting & Storyboarding",
      "Carousel & Infographics",
      "Ad Creatives",
      "Comment & DM Management",
      "150 Resellers Support"
    ],
    popular: true
  },
  {
    name: "Platinum",
    price: "96,000",
    features: [
      "16 High-Retention Videos",
      "32 Professional Graphics",
      "Full Scripting & Editing",
      "8,000 Telegram Members/mo",
      "Meta Ads Management",
      "Free Website + DB",
      "Free Branding & Logo",
      "200 Resellers Support"
    ]
  },
  {
    name: "Enterprise",
    price: "159,000",
    features: [
      "28 High-Retention Videos",
      "56 Professional Graphics",
      "Full Scripting & Editing",
      "14,000 Telegram Members/mo",
      "Meta Ads Management",
      "Free Website + DB",
      "Free Branding & Logo",
      "Scripting & Storyboarding",
      "Carousel & Infographics",
      "Ad Creatives",
      "Comment & DM Management",
      "Contest & Giveaway Mgmt",
      "SEO Optimization",
      "Social Media Optimization",
      "Influencer Outreach",
      "Content Repurposing",
      "Advanced Automation",
      "350 Resellers Support"
    ]
  },
];

interface PricingCardProps {
  plan: typeof plans[0];
  delay: number;
  key?: number | string;
}

const PricingCard = ({ plan, delay }: PricingCardProps) => {
  const isBigPlan = ["Gold", "Platinum", "Enterprise"].includes(plan.name);
  const [isExpanded, setIsExpanded] = useState(!isBigPlan);
  const initialFeatures = plan.features.slice(0, 5);
  const hasMore = plan.features.length > 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`p-6 rounded-2xl border flex flex-col ${plan.popular ? "border-[#1A73E8] bg-white" : "border-gray-200 bg-white"}`}
    >
      {plan.popular && <div className="text-[#1A73E8] text-xs font-bold mb-2 uppercase">Most Popular</div>}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-6">
        {plan.price !== "Custom" && <span className="text-sm text-gray-500">ETB </span>}
        {plan.price}
      </div>
      <div className="flex-grow">
        <ul className="space-y-3 mb-4">
          {(isExpanded ? plan.features : initialFeatures).map((feature, j) => (
            <li key={j} className="flex items-center text-gray-600 text-sm">
              <Check className="w-4 h-4 text-[#1A73E8] mr-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        {isBigPlan && hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-[#1A73E8] font-semibold flex items-center gap-1 hover:text-blue-700 transition-colors"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        )}
      </div>
      {(!isBigPlan || isExpanded) && (
        <button className={`w-full py-3 rounded-lg font-semibold transition-colors mt-6 ${plan.popular ? "bg-[#1A73E8] text-white hover:bg-blue-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}>
          Choose Plan
        </button>
      )}
    </motion.div>
  );
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[#E6E9EC]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Choose Your <span className="text-[#1A73E8]">Growth Plan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
