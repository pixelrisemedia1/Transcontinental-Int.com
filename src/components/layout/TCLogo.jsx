import React from "react";

// SVG-based TransContinental logo matching the provided brand assets
export default function TCLogo({ dark = false, size = "md" }) {
  const sizes = { sm: { text: "text-sm", sub: "text-[9px]", icon: 32 }, md: { text: "text-base", sub: "text-[10px]", icon: 38 }, lg: { text: "text-xl", sub: "text-xs", icon: 48 } };
  const s = sizes[size] || sizes.md;
  const textColor = dark ? "text-gray-900" : "text-white";
  const subColor = dark ? "text-gray-600" : "text-gray-300";

  return (
    <div className="flex items-center gap-2">
      {/* TC Icon */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* T shape */}
        <rect x="2" y="4" width="22" height="6" rx="1" fill={dark ? "#111827" : "white"} />
        <rect x="9" y="4" width="6" height="26" rx="1" fill={dark ? "#111827" : "white"} />
        {/* C arc using path */}
        <path
          d="M34 8 C28 8 23 13 23 20 C23 27 28 32 34 32 C38 32 41 30 43 27 L43 33 C40.5 36 37 38 34 38 C24 38 16 30 16 20 C16 10 24 2 34 2 C37 2 40.5 4 43 7 L43 13 C41 10 38 8 34 8 Z"
          fill="#38bdf8"
        />
      </svg>

      <div className="leading-tight">
        <div className={`font-bold tracking-wide ${s.text} ${textColor}`}>
          <span>TransContinental</span>
        </div>
        <div className={`font-semibold tracking-wider ${s.sub} ${subColor}`}>
          Group International Limited
        </div>
      </div>
    </div>
  );
}