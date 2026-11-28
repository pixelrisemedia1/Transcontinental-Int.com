import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Ship, Truck, Plane, Warehouse } from "lucide-react";

const SLIDES = [
  {
    title: "Bridge continents.\nDeliver opportunities.",
    subtitle: "Cost-efficient container shipping with reliable routes and worldwide partners.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80",
  },
  {
    title: "Fast and secure\ndelivery. Every time.",
    subtitle: "From door to door, we handle your packages with care and speed.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80",
  },
  {
    title: "Your cargo in\ntrusted hands.",
    subtitle: "Express air freight across continents with guaranteed safety and full compliance.",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1920&q=80",
  },
];

const STATS = [
  { icon: Ship, label: "Ocean Freight", value: "5,000+", sub: "containers shipped" },
  { icon: Truck, label: "Land Transport", value: "25,000", sub: "km routes" },
  { icon: Plane, label: "Air Freight", value: "350K+", sub: "tons delivered" },
  { icon: Warehouse, label: "Warehousing", value: "Global", sub: "network" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Main hero */}
      <div className="relative h-[90vh] min-h-[600px] overflow-hidden bg-[#111827]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={SLIDES[current].image}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 via-[#111827]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight whitespace-pre-line">
                  {SLIDES[current].title}
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-lg leading-relaxed">
                  {SLIDES[current].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to={createPageUrl("GetQuote")}
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-200 shadow-xl shadow-cyan-500/25"
              >
                Get A Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl("Services")}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-7 py-4 rounded-xl font-semibold border border-white/20 transition-all duration-200"
              >
                Our Services
              </Link>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-10">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current ? "w-10 bg-cyan-400" : "w-4 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <stat.icon className="w-6 h-6 text-cyan-500 mb-3" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}