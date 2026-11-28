import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, image }) {
  const [imgBroken, setImgBroken] = useState(false);
  return (
    <div className="relative h-[320px] md:h-[400px] overflow-hidden bg-[#111827]">
      {image && !imgBroken && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          onError={() => setImgBroken(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-300 text-lg mt-4 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}