import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Anchor, CheckCircle, Ship, Truck, Train, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Domestic sea and coastal freight services",
  "Integrated road-sea-rail multimodal solutions",
  "Island and remote destination delivery",
  "Bulk cargo and container coastal shipping",
  "Scheduled feeder services between ports",
  "Charter vessel options for large shipments",
  "Last-mile road delivery coordination",
  "Competitive domestic rates",
];

const MODES = [
  { icon: Ship, title: "Coastal Shipping", desc: "Regular scheduled services between major domestic ports with flexible container and bulk options." },
  { icon: Truck, title: "Road Delivery", desc: "Seamless road connections from ports to inland destinations for complete door-to-door service." },
  { icon: Train, title: "Rail Connections", desc: "Domestic rail options integrated with sea and road transport for optimized routing." },
  { icon: Globe, title: "Island Services", desc: "Dedicated feeder services to island destinations and remote coastal communities." },
];

export default function DomesticShipping() {
  return (
    <div>
      <PageHero
        title="Domestic & Coastal Shipping"
        subtitle="Integrated domestic freight solutions combining sea, road, and rail for comprehensive coverage."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Coastal & Domestic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Optimized Domestic Freight Networks</h2>
              <p className="text-gray-500 leading-relaxed mb-4">TransContinental provides coastal and land-based freight services that interlink to form optimized domestic solutions. We seamlessly combine sea, road, and rail transport to reduce costs and transit times for intra-country and regional shipments.</p>
              <p className="text-gray-500 leading-relaxed mb-8">From coastal cargo vessels serving island communities to integrated multimodal solutions for mainland distribution, our domestic shipping specialists design routes that maximize efficiency for your business.</p>
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
              <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" alt="Container dock port" className="rounded-2xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=80" alt="Domestic freight truck delivery" className="rounded-2xl w-full h-64 object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {MODES.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                <p className="text-sm text-gray-500">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#111827] rounded-3xl p-10 md:p-16 text-center">
            <Anchor className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Plan Your Domestic Shipment</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get in touch with our domestic shipping team for competitive rates and optimized routing solutions.</p>
            <Link to={createPageUrl("GetQuote")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Get A Domestic Freight Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}