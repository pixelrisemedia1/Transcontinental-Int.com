import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function DomesticSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-3 block">
              Domestic & Coastal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comprehensive domestic and coastal freight options
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Our domestic and coastal freight services interlink with core freight offerings to optimize delivery costs and timings. These services encompass coastal sea freight options coupled with land-based services such as road or rail.
            </p>
            <Link
              to={createPageUrl("Services")}
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 font-semibold text-sm mt-6 transition-colors"
            >
              View more about Domestic & Coastal Shipping <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=800&q=80"
              alt="Coastal shipping"
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}