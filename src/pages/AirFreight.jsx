import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Plane, CheckCircle, Clock, Globe, Shield, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Express, economy, and charter air freight",
  "Time-definite and next-flight-out options",
  "Door-to-door and airport-to-airport",
  "Perishables, pharmaceuticals & temperature-controlled",
  "Dangerous goods (DG) certified handling",
  "Oversized & heavy cargo solutions",
  "Customs clearance & documentation",
  "Real-time tracking with proactive updates",
];

const STATS = [
  { icon: Plane, value: "220K+", label: "Tons Delivered" },
  { icon: Globe, value: "150+", label: "Destinations" },
  { icon: Clock, value: "48hr", label: "Express Delivery" },
  { icon: Shield, value: "IATA", label: "Certified Partner" },
];

export default function AirFreight() {
  return (
    <div>
      <PageHero
        title="Air Freight"
        subtitle="Fast, flexible, and reliable air cargo solutions connecting the world's major trade hubs."
        image="https://images.unsplash.com/photo-1569154941061-e231b4aa8da2?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-4 order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80" alt="Air cargo loading" className="rounded-2xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80" alt="Cargo aircraft" className="rounded-2xl w-full h-64 object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Air Logistics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Time-Critical Cargo, Delivered Globally</h2>
              <p className="text-gray-500 leading-relaxed mb-4">With established relationships with the world's leading airlines and an extensive global agent network, TransContinental ensures your time-sensitive shipments arrive on time, every time. We offer the full spectrum of air freight solutions.</p>
              <p className="text-gray-500 leading-relaxed mb-8">Our air freight specialists are available around the clock to respond to urgent shipment requirements, including next-flight-out options for critical deliveries.</p>
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
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Need Urgent Air Freight?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our team is available 24/7 for time-critical shipments. Get a quote in minutes.</p>
            <Link to={createPageUrl("GetQuote")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Get An Air Freight Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}