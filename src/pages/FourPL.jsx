import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Globe, CheckCircle, BarChart3, Settings, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const PILLARS = [
  { icon: Settings, title: "Supply Chain Design", desc: "We analyze and redesign your supply chain from the ground up, identifying inefficiencies and implementing optimized processes." },
  { icon: Globe, title: "Global Carrier Management", desc: "Single point of contact for all your global carriers — sea, air, road, rail — with performance monitoring and rate negotiation." },
  { icon: BarChart3, title: "Visibility & Analytics", desc: "Real-time dashboards and data analytics provide end-to-end shipment visibility and actionable business intelligence." },
  { icon: Users, title: "Dedicated Account Team", desc: "A dedicated team of supply chain experts acts as an extension of your business, managing all logistics on your behalf." },
];

const FEATURES = [
  "Single integrated 4PL management platform",
  "Carrier procurement and contract management",
  "KPI monitoring and quarterly business reviews",
  "Continuous improvement programs",
  "Sustainability and carbon reporting",
  "Technology integration with your ERP/WMS",
  "Vendor and supplier management",
  "Risk management and business continuity planning",
];

export default function FourPL() {
  return (
    <div>
      <PageHero
        title="4PL Logistics"
        subtitle="Fully integrated fourth-party logistics management delivering end-to-end supply chain oversight."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Supply Chain Management</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Your Complete Supply Chain Partner</h2>
              <p className="text-gray-500 leading-relaxed mb-4">As a fully integrated 4PL provider, TransContinental delivers a dedicated logistics ecosystem that maximizes value through leading-edge technology, a global partner network, and deep supply chain expertise.</p>
              <p className="text-gray-500 leading-relaxed mb-8">We take complete ownership of your logistics operations — from strategy and planning to execution and performance reporting — freeing you to focus on your core business.</p>
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
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Supply chain management" className="rounded-2xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Analytics dashboard" className="rounded-2xl w-full h-64 object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PILLARS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <p.icon className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#111827] rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Transform Your Supply Chain</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Talk to our 4PL specialists about how we can take ownership of your entire logistics operation.</p>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Speak to a 4PL Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}