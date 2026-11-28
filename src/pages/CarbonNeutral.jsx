import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Leaf, CheckCircle, Globe, BarChart3, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Automatic carbon emission calculation per shipment",
  "Certified carbon offset projects (Gold Standard)",
  "Scope 1, 2, and 3 emissions reporting",
  "Sustainability certificates for each shipment",
  "Partnership with Trace for verified offsets",
  "Mode optimization for lowest carbon routing",
  "Annual sustainability reports for clients",
  "ESG compliance documentation support",
];

const PROJECTS = [
  { name: "Amazon Rainforest Conservation", country: "Brazil", type: "Forest Protection" },
  { name: "Wind Energy Farm", country: "India", type: "Renewable Energy" },
  { name: "Cookstove Distribution", country: "Kenya", type: "Clean Energy" },
  { name: "Mangrove Restoration", country: "Indonesia", type: "Blue Carbon" },
];

export default function CarbonNeutral() {
  return (
    <div>
      <PageHero
        title="Carbon Neutral Shipping"
        subtitle="Offsetting the environmental impact of your logistics with certified carbon reduction programs."
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Sustainability</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Ship Green, Grow Responsibly</h2>
              <p className="text-gray-500 leading-relaxed mb-4">In partnership with Trace, TransContinental offers full carbon offsetting for your logistics operations. Our integrated tools automatically calculate the emissions of every shipment and match them with verified, high-quality carbon offset projects worldwide.</p>
              <p className="text-gray-500 leading-relaxed mb-8">With increasing regulatory pressure and growing stakeholder expectations around ESG, our carbon-neutral shipping program helps your business meet its sustainability commitments without compromising on service or cost.</p>
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
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80" alt="Sustainable logistics" className="rounded-2xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" alt="Forest conservation" className="rounded-2xl w-full h-64 object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Offset Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <Leaf className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-bold text-gray-900 text-sm mb-1">{p.name}</h4>
                <p className="text-xs text-gray-500">{p.country}</p>
                <span className="mt-3 inline-block text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{p.type}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-green-900 rounded-3xl p-10 md:p-16 text-center">
            <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Start Shipping Carbon-Neutral</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Add carbon offsetting to any of your shipments. Contact us to learn about our green logistics program.</p>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Learn About Green Shipping <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}