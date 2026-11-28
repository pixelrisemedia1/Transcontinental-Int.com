import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#111827] px-4">
      <div className="text-center">
        <h1 className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 leading-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-3 max-w-md mx-auto">
          The page you are looking for doesn't exist. Return to the homepage to find what you're looking for.
        </p>
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-xl font-semibold mt-8 transition-all"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}