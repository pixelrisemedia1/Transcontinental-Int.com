import React from "react";

export default function SectionHeading({ label, title, description, light }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-gray-300" : "text-gray-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}