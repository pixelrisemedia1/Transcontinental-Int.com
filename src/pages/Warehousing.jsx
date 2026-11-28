import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Warehouse, CheckCircle, Globe, Shield, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Short and long-term warehousing solutions",
  "Temperature-controlled cold storage",
  "Pick & pack and fulfillment services",
  "Cross-docking and transshipment",
  "Inventory management & WMS integration",
  "Hazardous materials storage",
  "Bonded warehouse facilities",
  "24/7 security monitoring",
];

const STATS = [
  { icon: Warehouse, value: "50K+", label: "sqm Managed" },
  { icon: Globe, value: "Global", label: "Network" },
  { icon: Shield, value: "24/7", label: "Security" },
  { icon: BarChart3, value: "99.9%", label: "Inventory Accuracy" },
];

export default function Warehousing() {
  return (
    <div>
      <PageHero
        title="Warehousing"
        subtitle="Strategically located warehouses worldwide providing secure, efficient storage and distribution."
        image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Storage & Distribution</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Smart Warehousing for Global Supply Chains</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Supported by a network of strategically located warehouses throughout the globe, TransContinental provides safe and secure storage for goods and equipment, together with unloading and offloading solutions, and complete fulfillment capabilities.</p>
              <p className="text-gray-500 leading-relaxed mb-8">Our warehousing solutions are designed to scale with your business — from a single pallet to full distribution center management.</p>
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
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" alt="Warehouse interior" className="rounded-2xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80" alt="Warehouse operations" className="rounded-2xl w-full h-64 object-cover" />
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
            <h3 className="text-3xl font-bold text-white mb-4">Discuss Your Storage Needs</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our warehousing specialists will design a storage solution that fits your supply chain perfectly.</p>
            <Link to={createPageUrl("GetQuote")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Get A Warehousing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}