import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { Globe, MapPin, Users, Building, Ship, Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const REGIONS = [
  {
    name: "Asia Pacific",
    hq: "Hong Kong SAR",
    offices: ["Hong Kong", "Shanghai", "Singapore", "Tokyo"],
    image: "/Transcontinental-Int.com/assets/unsplash/photo-1536599018102-9f803c140fc1.jpg",
    desc: "Our Asia Pacific hub is headquartered in Hong Kong, serving as the command center for all Far East operations, sea freight management, and commodity trading.",
  },
  {
    name: "North America",
    hq: "New York, USA",
    offices: ["New York", "Los Angeles", "Chicago"],
    image: "/Transcontinental-Int.com/assets/unsplash/photo-1485871981521-5b1fd3805eee.jpg",
    desc: "Our North American presence handles trans-Pacific and trans-Atlantic trade lanes, supporting both import and export freight for US-based clients.",
  },
  {
    name: "Europe",
    hq: "London, UK",
    offices: ["London", "Amsterdam", "Frankfurt", "Warsaw"],
    image: "/Transcontinental-Int.com/assets/unsplash/photo-1467269204594-9661b134dd2b.jpg",
    desc: "Our European network covers major trade corridors between Europe and Asia, supporting rail freight on the New Silk Road and sea freight across the Atlantic.",
  },
  {
    name: "Middle East & Africa",
    hq: "Dubai, UAE",
    offices: ["Dubai", "Nairobi", "Johannesburg"],
    image: "/Transcontinental-Int.com/assets/unsplash/photo-1512453979798-5ea266f8880c.jpg",
    desc: "Growing presence in MENA and Sub-Saharan Africa serving emerging trade routes with commodities, project cargo, and general freight solutions.",
  },
];

const STATS = [
  { icon: Globe, value: "20+", label: "Countries" },
  { icon: Building, value: "15+", label: "Office Locations" },
  { icon: Users, value: "200+", label: "Partner Agents" },
  { icon: Ship, value: "80+", label: "Port Connections" },
];

export default function GlobalNetwork() {
  return (
    <div>
      <PageHero
        title="Global Network"
        subtitle="Offices on four continents and a partner network spanning over 20 countries worldwide."
        image="/Transcontinental-Int.com/assets/unsplash/photo-1451187580459-43490279c0fa.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Reach"
            title="A Truly Global Footprint"
            description="TransContinental's network spans four continents, with dedicated offices, agents, and partnerships ensuring seamless logistics coverage worldwide."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                <s.icon className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <p className="text-4xl font-bold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {REGIONS.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                <img src={r.image} alt={r.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                    <span className="flex items-center gap-1 text-xs text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      <MapPin className="w-3 h-3" /> {r.hq}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.offices.map((o, j) => (
                      <span key={j} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{o}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#111827] rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Partner With Us Globally</h3>
                <p className="text-gray-400 leading-relaxed">Whether you're shipping within a region or across continents, our global network ensures you have local expertise with international capability at every step of your supply chain.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link to={createPageUrl("GetQuote")} className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3.5 rounded-xl font-semibold transition-all">
                  Get A Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to={createPageUrl("Contact")} className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}