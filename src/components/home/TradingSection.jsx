import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { Trees, Gem, Shield, Globe, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const COMMODITIES = [
  {
    icon: Trees,
    title: "Wood Trading",
    page: "WoodTrading",
    desc: "We source and trade premium timber and lumber across global markets. From raw logs to processed wood products, we connect buyers and suppliers with reliable logistics.",
    items: ["Raw Timber & Logs", "Processed Lumber", "Plywood & Veneers", "Specialty Hardwoods"],
  },
  {
    icon: Gem,
    title: "Metals Trading",
    page: "MetalsTrading",
    desc: "Our metals trading division handles ferrous and non-ferrous metals worldwide. We ensure quality sourcing, secure transport, and compliance with international standards.",
    items: ["Steel & Iron", "Aluminum & Copper", "Zinc & Nickel", "Rare Earth Elements"],
  },
];

const FEATURES = [
  { icon: Shield, label: "Verified Sources" },
  { icon: Globe, label: "Global Network" },
  { icon: TrendingUp, label: "Competitive Pricing" },
  { icon: Award, label: "Quality Assured" },
];

export default function TradingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          label="Commodity Trading"
          title="Wood & Metals Trading"
          description="Leveraging our global logistics network, we facilitate international commodity trading with end-to-end supply chain management."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {COMMODITIES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {item.items.map((sub, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {sub}
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl(item.page)} className="inline-flex items-center gap-1.5 text-cyan-600 hover:text-cyan-500 text-sm font-semibold transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-500">
              <f.icon className="w-5 h-5 text-cyan-500" />
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}