import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SiteImg from "../components/shared/SiteImg";
import { Truck, CheckCircle, Globe, Clock, Shield, ArrowRight, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Full Truck Load (FTL) and Less-than-Truck Load (LTL)",
  "Refrigerated and temperature-controlled transport",
  "Oversized, heavy-lift, and project cargo",
  "Cross-border and customs coordination",
  "Dedicated and shared fleet options",
  "Real-time GPS tracking",
  "Express and economy road freight",
  "Last-mile delivery solutions",
];

const STATS = [
  { icon: Truck, value: "5,000+", label: "Deliveries Completed" },
  { icon: Route, value: "15,000", label: "Km Routes Covered" },
  { icon: Clock, value: "24/7", label: "Driver Availability" },
  { icon: Shield, value: "Insured", label: "All Cargo" },
];

export default function RoadFreight() {
  return (
    <div>
      <PageHero
        title="Road Freight"
        subtitle="End-to-end road freight solutions connecting businesses across continents."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Road Logistics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Complete End-to-End Road Solutions</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Our road freight service forms a vital link in any supply chain. We provide integrated road logistics solutions to ensure your goods are delivered end to end with maximum efficiency and reliability. With both FTL and LTL options, we tailor each shipment to your exact needs.</p>
              <p className="text-gray-500 leading-relaxed mb-8">Our extensive partner network spans major highway corridors, enabling competitive transit times whether you're shipping within a region or across international borders.</p>
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
              <SiteImg imageKey="road_freight_1" fallback="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" alt="Semi truck fleet on highway" className="rounded-2xl w-full h-64 object-cover" />
              <SiteImg imageKey="road_freight_3" fallback="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80" alt="Cargo truck on open highway" className="rounded-2xl w-full h-64 object-cover" />
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
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Move Your Cargo by Road?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a competitive road freight quote tailored to your route and cargo requirements.</p>
            <Link to={createPageUrl("GetQuote")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Get A Road Freight Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}