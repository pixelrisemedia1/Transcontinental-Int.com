import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function RoadCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 to-[#111827]/50" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Your trusted partner for fast, safe, and efficient road shipping
        </h2>
        <p className="text-gray-300 mt-6 text-lg max-w-xl leading-relaxed">
          More than just a carrier — we are your strategic ally on the road, offering customized solutions and dedicated support to keep your supply chain moving.
        </p>
        <Link
          to={createPageUrl("Services")}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-4 rounded-xl font-semibold mt-8 transition-all shadow-xl shadow-cyan-500/25"
        >
          Discover Our Services <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}