import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Package, CheckCircle, Globe, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const FEATURES = [
  "Heavy lift and out-of-gauge (OOG) cargo",
  "Industrial plant & machinery relocation",
  "Offshore and energy sector logistics",
  "Multi-modal route planning & optimization",
  "Permit and regulatory compliance management",
  "Risk assessment & contingency planning",
  "On-site supervision and project management",
  "Turnkey project logistics solutions",
];

export default function ProjectLogistics() {
  return (
    <div>
      <PageHero
        title="Project Logistics"
        subtitle="Complex cargo movements managed end-to-end by dedicated project logistics specialists."
        image="/Transcontinental-Int.com/assets/unsplash/photo-1541888946425-d81bb19240f5.jpg"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Complex Cargo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">When the Cargo Is Complicated, We Deliver</h2>
              <p className="text-gray-500 leading-relaxed mb-4">We specialize in moving complex and oversized shipments along challenging routes, providing the essential equipment, expertise, and global network to manage risk and ensure your project's success.</p>
              <p className="text-gray-500 leading-relaxed mb-8">From mining equipment and oil refinery components to wind turbine blades and industrial plant machinery — our project logistics team has the experience to handle it all.</p>
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
              <img src="/Transcontinental-Int.com/assets/unsplash/photo-1504307651254-35680f356dfd.jpg" alt="Heavy machinery logistics" className="rounded-2xl w-full h-64 object-cover" />
              <img src="/Transcontinental-Int.com/assets/unsplash/photo-1541888946425-d81bb19240f5.jpg" alt="Large scale construction project cargo" className="rounded-2xl w-full h-64 object-cover" />
            </div>
          </div>
          <div className="bg-[#111827] rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Have a Complex Project?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our project logistics experts are ready to assess your requirements and deliver a tailored solution.</p>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Speak to a Specialist <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}