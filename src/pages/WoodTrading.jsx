import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SiteImg from "../components/shared/SiteImg";
import { Trees, CheckCircle, Leaf, Globe, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const PRODUCTS = [
  { name: "Raw Timber & Logs", desc: "Hardwood and softwood logs from sustainably managed forests." },
  { name: "Processed Lumber", desc: "Kiln-dried, rough-sawn, and finished dimensional lumber." },
  { name: "Plywood & Veneers", desc: "Commercial and decorative-grade plywood, veneer sheets." },
  { name: "Specialty Hardwoods", desc: "Teak, oak, walnut, cherry, and exotic hardwood species." },
  { name: "MDF & Engineered Wood", desc: "Medium-density fibreboard and laminated wood products." },
  { name: "Bamboo Products", desc: "Sustainable bamboo flooring, panels, and construction materials." },
];

const FEATURES = [
  "Global sourcing from FSC-certified suppliers",
  "Quality inspection and certification",
  "Customs clearance and phytosanitary documentation",
  "Fumigation and treatment certificates",
  "Multimodal transport (sea, rail, road)",
  "Competitive pricing and market intelligence",
];

export default function WoodTrading() {
  return (
    <div>
      <PageHero
        title="Wood Trading"
        subtitle="Premium timber and wood product sourcing from global sustainable markets."
        image="/Transcontinental-Int.com/assets/unsplash/photo-1587371169587-0ad13dea4be2.jpg"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Timber & Wood Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Connecting Global Timber Markets</h2>
              <p className="text-gray-500 leading-relaxed mb-4">TransContinental sources and trades premium timber and wood products across global markets. Leveraging our extensive logistics network, we connect buyers and suppliers with reliable, cost-effective solutions — from raw logs to finished wood products.</p>
              <p className="text-gray-500 leading-relaxed mb-8">We prioritize sustainability, working only with certified suppliers and ensuring all phytosanitary and documentation requirements are met for seamless cross-border trade.</p>
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
              <SiteImg imageKey="wood_trading_3" fallback="/Transcontinental-Int.com/assets/unsplash/photo-1513836279014-a89f7a76ae86.jpg" alt="Forest timber trees" className="rounded-2xl w-full h-64 object-cover" />
              <SiteImg imageKey="wood_trading_6" fallback="/Transcontinental-Int.com/assets/unsplash/photo-1448375240586-882707db888b.jpg" alt="Pine forest timber" className="rounded-2xl w-full h-64 object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <Trees className="w-8 h-8 text-cyan-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#111827] rounded-3xl p-10 md:p-16 text-center">
            <Leaf className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Source Premium Wood Products</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Contact our commodity trading team to discuss your timber sourcing and logistics requirements.</p>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Enquire About Wood Trading <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}