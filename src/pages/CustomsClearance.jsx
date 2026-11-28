import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { FileCheck, CheckCircle, Globe, Clock, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Import and export customs declarations",
  "HS code classification & duty calculation",
  "Tariff and trade compliance advisory",
  "Free Trade Agreement (FTA) utilization",
  "Temporary import/export (ATA Carnet)",
  "Bonded warehouse & deferred duty options",
  "Customs audit support & document management",
  "Multi-country simultaneous clearance",
];

export default function CustomsClearance() {
  return (
    <div>
      <PageHero
        title="Customs Clearance"
        subtitle="Expert customs management ensuring your goods cross borders without delay."
        image="/Transcontinental-Int.com/assets/unsplash/photo-1450101499163-c8848c66ca85.jpg"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-4">
              <img src="/Transcontinental-Int.com/assets/unsplash/photo-1450101499163-c8848c66ca85.jpg" alt="Person signing customs documents" className="rounded-2xl w-full h-64 object-cover" />
              <img src="/Transcontinental-Int.com/assets/unsplash/photo-1554224155-8d04cb21cd6c.jpg" alt="Trade documents and paperwork" className="rounded-2xl w-full h-64 object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Border Compliance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Seamless Border Crossings, Every Time</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Our dedicated customs team provides turnkey clearance services, leveraging deep expertise and a powerful international network to ensure goods move across borders without delay or compliance risk.</p>
              <p className="text-gray-500 leading-relaxed mb-8">We navigate the complexities of global trade regulations so you don't have to — from classification and valuation to duty optimization and regulatory compliance.</p>
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
          <div className="bg-[#111827] rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Need Customs Support?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our customs specialists are on hand to ensure compliant, fast border clearance for your shipments.</p>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Contact Our Customs Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}