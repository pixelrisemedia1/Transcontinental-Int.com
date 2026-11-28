import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SiteImg from "../components/shared/SiteImg";
import { Gem, CheckCircle, Globe, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const METALS = [
  { name: "Steel & Iron", desc: "Structural steel, rebar, coils, plates, and iron ore for construction and manufacturing." },
  { name: "Aluminum", desc: "Primary and secondary aluminum in ingots, billets, sheets, and profiles." },
  { name: "Copper", desc: "Refined copper cathodes, wire rods, tubes, and copper alloys for industrial use." },
  { name: "Zinc & Nickel", desc: "Refined zinc ingots and nickel briquettes for galvanizing and alloy manufacturing." },
  { name: "Rare Earth Elements", desc: "Strategic rare earth metals supporting technology, energy, and defense industries." },
  { name: "Ferroalloys", desc: "Ferrochrome, ferromanganese, ferrosilicon for steel production and specialty alloys." },
];

const FEATURES = [
  "Direct sourcing from mines and smelters",
  "Quality assurance and third-party inspection",
  "SGS and Bureau Veritas certification",
  "REACH and RoHS compliance management",
  "Secure and insured transport solutions",
  "Competitive market pricing and hedging advice",
];

export default function MetalsTrading() {
  return (
    <div>
      <PageHero
        title="Metals Trading"
        subtitle="Global ferrous and non-ferrous metals trading with expert logistics and compliance."
        image="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-4">
              <SiteImg imageKey="metals_trading_1" fallback="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" alt="Steel rods and bars" className="rounded-2xl w-full h-64 object-cover" />
              <SiteImg imageKey="metals_trading_4" fallback="https://images.unsplash.com/photo-1528918652533-dfdb3f368093?w=800&q=80" alt="Person melting iron metal" className="rounded-2xl w-full h-64 object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Metals & Commodities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Global Metals Trading Expertise</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Our metals trading division handles ferrous and non-ferrous metals worldwide. From steel and aluminum to rare earth elements, we provide reliable sourcing, expert logistics, and compliance with all international standards.</p>
              <p className="text-gray-500 leading-relaxed mb-8">Leveraging our global supply chain capabilities, we connect buyers and sellers across 20+ countries with competitive pricing, rigorous quality control, and secure transportation.</p>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {METALS.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <Gem className="w-8 h-8 text-cyan-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#111827] rounded-3xl p-10 md:p-16 text-center">
            <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Trade Metals with Confidence</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our metals trading specialists offer market insight, reliable sourcing, and end-to-end logistics.</p>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Enquire About Metals Trading <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}