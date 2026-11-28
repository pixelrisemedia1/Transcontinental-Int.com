import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function QuoteCallout() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111827]/80" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Get a Quick Quote
        </h2>
        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Getting a delivery quote is simple. Fill out our form with the service you need, your cargo details, and we'll get back to you with an approximate price.
        </p>
        <Link
          to={createPageUrl("GetQuote")}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold mt-10 transition-all duration-200 shadow-xl shadow-cyan-500/25"
        >
          Get A Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}