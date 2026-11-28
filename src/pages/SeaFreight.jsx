import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SiteImg from "../components/shared/SiteImg";
import { Ship, CheckCircle, Globe, Clock, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Full Container Load (FCL) & Less-than-Container Load (LCL)",
  "Dedicated container ships for bulk cargo",
  "Real-time shipment tracking",
  "Hazardous goods handling & documentation",
  "Reefer container solutions for temperature-sensitive cargo",
  "Break bulk & project cargo services",
  "Port-to-port and door-to-door delivery",
  "Customs clearance coordination",
];

const STATS = [
  { icon: Ship, value: "3,000+", label: "Containers Shipped" },
  { icon: Globe, value: "80+", label: "Global Ports" },
  { icon: Clock, value: "24/7", label: "Operations" },
  { icon: Shield, value: "100%", label: "Cargo Insurance Available" },
];

export default function SeaFreight() {
  return (
    <div>
      <PageHero
        title="Sea Freight"
        subtitle="World-class container shipping solutions connecting every major trade route globally."
        image="/Transcontinental-Int.com/assets/unsplash/photo-1724597500306-a4cbb7d1324e.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Ocean Logistics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Container Shipping at the Core of What We Do</h2>
              <p className="text-gray-500 leading-relaxed mb-4">We work with the world's largest international carriers to provide robust and efficient sea freight services. Our dedicated sea logistics division partners with leading international carriers to deliver tailored solutions that combine the best rates with reliable schedules.</p>
              <p className="text-gray-500 leading-relaxed mb-8">Whether you need FCL, LCL, or specialized project cargo solutions, our team of experts ensures your shipment arrives safely and on time — every time.</p>
              <ul className="space-y-3">
                {FEATURES.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <SiteImg imageKey="sea_freight_3" fallback="/Transcontinental-Int.com/assets/unsplash/photo-1696287146802-af8ccce45601.jpg" alt="Large cargo ship in open ocean" className="rounded-2xl w-full h-64 object-cover" />
              <SiteImg imageKey="sea_freight_4" fallback="/Transcontinental-Int.com/assets/unsplash/photo-1494412574643-ff11b0a5c1c3.jpg" alt="Intermodal containers on dock" className="rounded-2xl w-full h-64 object-cover" />
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
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Ship by Sea?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a competitive sea freight quote from our team of ocean logistics experts today.</p>
            <Link to={createPageUrl("GetQuote")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Get A Sea Freight Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}