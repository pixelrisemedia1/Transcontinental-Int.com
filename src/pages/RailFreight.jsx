import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SiteImg from "../components/shared/SiteImg";
import { Train, CheckCircle, Globe, Clock, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Standard, bulk, and project rail freight",
  "Block train services & dedicated rail charters",
  "Europe–Asia corridor (New Silk Road)",
  "Heavy machinery and oversized cargo rail transport",
  "Intermodal rail-sea and rail-road solutions",
  "Temperature-controlled rail options",
  "Customs clearance at borders",
  "End-to-end shipment visibility",
];

const STATS = [
  { icon: Train, value: "1,200+", label: "Rail Shipments" },
  { icon: Globe, value: "30+", label: "Countries Connected" },
  { icon: Leaf, value: "40%", label: "Lower Emissions vs Road" },
  { icon: Clock, value: "On-Time", label: "Delivery Record" },
];

export default function RailFreight() {
  return (
    <div>
      <PageHero
        title="Rail Freight"
        subtitle="High-speed, cost-effective rail logistics connecting Europe and Asia across major corridors."
        image="https://images.unsplash.com/photo-1501704163333-86d3832cd4ea?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-4">
              <SiteImg imageKey="rail_freight_1" fallback="https://images.unsplash.com/photo-1622340973965-6370cd932bd7?w=800&q=80" alt="Railroad tracks" className="rounded-2xl w-full h-64 object-cover" />
              <SiteImg imageKey="rail_freight_3" fallback="https://images.unsplash.com/photo-1596245296613-cfcdd8490086?w=800&q=80" alt="Railroad tracks through trees" className="rounded-2xl w-full h-64 object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Rail Logistics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Reach Target Markets Faster</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Rail freight is integral to the global supply chain. TransContinental provides a comprehensive range of high-speed interlinking rail logistics services to deliver maximum efficiency. Our rail solutions bridge the speed of air freight with the cost-effectiveness of sea freight.</p>
              <p className="text-gray-500 leading-relaxed mb-8">We handle standard rail freight, bulk and project freight, including the movement of large and complex machinery — especially across the growing Europe-China rail corridor.</p>
              <ul className="space-y-3">
                {FEATURES.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center">
                <s.icon className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#111827] rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Explore Rail Freight Options</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Contact our rail logistics specialists to discuss your Europe-Asia or domestic rail requirements.</p>
            <Link to={createPageUrl("GetQuote")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Get A Rail Freight Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}