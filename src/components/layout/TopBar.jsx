import React from "react";
import { Mail, Headphones, Package, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function TopBar() {
  return (
    <div className="bg-[#0d1321] text-gray-400 text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-gray-800/60">
      <div className="flex items-center gap-4">
        <a href="mailto:tcl@transcontinental-int.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
          <Mail className="w-3 h-3" />
          <span className="hidden sm:inline">tcl@transcontinental-int.com</span>
        </a>
        <a href="tel:+85251401536" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
          <Phone className="w-3 h-3" />
          <span>+852 5140 1536</span>
        </a>
        <a href="tel:+19179305172" className="items-center gap-1.5 hover:text-cyan-400 transition-colors hidden md:flex">
          <Phone className="w-3 h-3" />
          <span>+1 917-930-5172</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Link to={createPageUrl("Contact")} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
          <Headphones className="w-3 h-3" />
          <span>Support 24/7</span>
        </Link>
        <Link to={createPageUrl("TrackOrder")} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
          <Package className="w-3 h-3" />
          <span>Track & Trace</span>
        </Link>
      </div>
    </div>
  );
}