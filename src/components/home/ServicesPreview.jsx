import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import SiteImg from "../shared/SiteImg";
import { Ship, Train, Plane, Truck, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const TABS = [
  {
    id: "sea",
    label: "Sea Freight",
    page: "SeaFreight",
    icon: Ship,
    imageKey: "sea_freight_1",
    fallback: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80",
    title: "Container shipping is at the core of what we do.",
    desc: "We work with the world's largest international carriers to provide robust and efficient sea freight services. We specialize in delivering tailored services at the best available freight forwarding rates, combined with dependable sailing schedules from and to most major ports.",
  },
  {
    id: "rail",
    label: "Rail Freight",
    page: "RailFreight",
    icon: Train,
    imageKey: "rail_freight_1",
    fallback: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&q=80",
    title: "Reach target markets faster with high-speed rail solutions.",
    desc: "Rail freight is integral to the global supply chain. We provide a range of high-speed interlinking rail logistics services to deliver maximum efficiency. We handle standard rail freight, bulk and project freight, including the movement of large and complex machinery.",
  },
  {
    id: "air",
    label: "Air Freight",
    page: "AirFreight",
    icon: Plane,
    imageKey: "air_freight_home",
    fallback: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
    title: "Fast, flexible, efficient air freight forwarding services.",
    desc: "With relationships throughout the world and contracts with leading air cargo carriers, together with an extensive network of agents, we are able to meet any time-sensitive demand requiring air logistics.",
  },
  {
    id: "road",
    label: "Road Freight",
    page: "RoadFreight",
    icon: Truck,
    imageKey: "road_freight_1",
    fallback: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80",
    title: "Complete end-to-end road freight solutions.",
    desc: "Whatever you are looking to ship, our road freight service provides the integrated logistics solution to ensure your goods are delivered end to end. We provide both FTL and LTL freight options to our customers.",
  },
  {
    id: "warehouse",
    label: "Warehousing",
    page: "Warehousing",
    icon: Warehouse,
    imageKey: "warehousing_1",
    fallback: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    title: "Secure storage and distribution for international businesses.",
    desc: "Supported by a network of strategically located warehouses throughout the globe, we provide safe and secure storage for goods and equipment, together with unloading and offloading solutions.",
  },
];

export default function ServicesPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          label="What We Do"
          title="Comprehensive Logistics Solutions"
          description="From sea to sky, road to rail — we deliver your cargo with precision across every major trade route worldwide."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-[#111827] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <SiteImg
                imageKey={TABS[active].imageKey}
                fallback={TABS[active].fallback}
                alt={TABS[active].label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {TABS[active].title}
              </h3>
              <p className="text-gray-500 mt-4 leading-relaxed">
                {TABS[active].desc}
              </p>
              <Link
                to={createPageUrl(TABS[active].page)}
                className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 font-semibold text-sm mt-6 transition-colors"
              >
                Learn more about {TABS[active].label} →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}