import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function CEOQuote() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111827]/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <Quote className="w-10 h-10 text-cyan-400 mx-auto mb-8 opacity-60" />
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-light text-white italic leading-relaxed"
        >
          "We don't just move cargo; we move businesses forward."
        </motion.blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <img src={import.meta.env.BASE_URL + "assets/TC_Nikolai.png"} alt="Nikolai Belov" className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30" />
          <div className="text-left">
            <p className="text-white font-semibold">Nikolai Belov</p>
            <p className="text-cyan-400 text-sm">Chief Operating Officer (COO)</p>
          </div>
        </div>
      </div>
    </section>
  );
}