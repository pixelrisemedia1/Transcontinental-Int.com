import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { Ship, Train, Plane, Truck, Warehouse, Users, Globe, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

const TABS_DATA = [
  { icon: Ship, label: "Sea Freight", desc: "Container shipping is at the core of what we do. We work with the world's largest international carriers." },
  { icon: Train, label: "Rail Freight", desc: "High-speed interlinking rail logistics services for standard, bulk, and project freight." },
  { icon: Plane, label: "Air Freight", desc: "Fast, flexible, efficient air freight forwarding services with global network coverage." },
  { icon: Truck, label: "Road Freight", desc: "Complete end-to-end freight solutions with both FTL and LTL options." },
  { icon: Warehouse, label: "Warehousing", desc: "Secure storage and distribution with strategically located warehouses globally." },
];

const VALUES = [
  { icon: Globe, title: "Global Reach", desc: "Operations across 5 continents with partners in 30+ countries." },
  { icon: Award, title: "Excellence", desc: "Decades of experience delivering integrated logistics solutions." },
  { icon: Users, title: "Dedicated Team", desc: "Expert professionals committed to your supply chain success." },
  { icon: Clock, title: "Reliability", desc: "On-time delivery with full compliance and cargo safety guaranteed." },
];

export default function Company() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Developing and implementing complex solutions in multimodal transportation since establishment."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
      />

      {/* Company Info */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Company</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            <strong className="text-gray-900">Transcontinental Group International Limited</strong> was established to develop and implement complex solutions in the field of multimodal transportation for export-import cargo. Our primary mission is to ensure the seamless integration of all elements within the transport and technological chain, guaranteeing the delivery of goods to any destination worldwide.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mt-4">
            We specialize in creating integrated logistics solutions that address the diverse commercial, organizational, technological, financial, economic, informational, and legal aspects of cargo delivery.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading label="Our Values" title="Why TransContinental" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <v.icon className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services we provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading label="What We Provide" title="Our Core Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TABS_DATA.map((t, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.label}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Quote */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-white italic">
            "We don't just move cargo; we move businesses forward."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img src="https://media.base44.com/images/public/69d1d2636276e47743e6d20c/443eedd56_TC_Nikolai_.png" alt="Nikolai Belov" className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30" />
            <div className="text-left">
              <p className="text-white font-semibold">Nikolai Belov</p>
              <p className="text-cyan-400 text-sm">Chief Operating Officer (COO)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900">We have all your needs covered</h2>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">Independent advice and the right fit for you.</p>
        <Link
          to={createPageUrl("Services")}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold mt-8 transition-all shadow-xl shadow-cyan-500/25"
        >
          View Our Services
        </Link>
      </section>
    </div>
  );
}