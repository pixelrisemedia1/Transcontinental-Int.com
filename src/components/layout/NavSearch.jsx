import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

const SEARCH_INDEX = [
  { label: "Home", page: "Home", keywords: "home main landing" },
  { label: "All Services", page: "Services", keywords: "services logistics freight overview" },
  { label: "Sea Freight", page: "SeaFreight", keywords: "sea ocean container shipping FCL LCL port cargo vessel" },
  { label: "Air Freight", page: "AirFreight", keywords: "air cargo aircraft express fast shipping flight" },
  { label: "Road Freight", page: "RoadFreight", keywords: "road truck FTL LTL highway trucking transport" },
  { label: "Rail Freight", page: "RailFreight", keywords: "rail train europe asia silk road corridor" },
  { label: "Warehousing", page: "Warehousing", keywords: "warehouse storage distribution fulfillment inventory" },
  { label: "4PL Logistics", page: "FourPL", keywords: "4PL supply chain management outsource" },
  { label: "Project Logistics", page: "ProjectLogistics", keywords: "project heavy lift oversized OOG special cargo" },
  { label: "Domestic & Coastal Shipping", page: "DomesticShipping", keywords: "domestic coastal local shipping island" },
  { label: "Customs Clearance", page: "CustomsClearance", keywords: "customs clearance import export duty tariff compliance" },
  { label: "Carbon Neutral Shipping", page: "CarbonNeutral", keywords: "carbon green sustainable environment offset emissions" },
  { label: "Wood Trading", page: "WoodTrading", keywords: "wood timber lumber FSC hardwood softwood plywood" },
  { label: "Metals Trading", page: "MetalsTrading", keywords: "metals steel aluminum copper iron alloy trading" },
  { label: "About Us / Company", page: "Company", keywords: "about company history values team transcontinental" },
  { label: "Global Network", page: "GlobalNetwork", keywords: "global network countries offices partners" },
  { label: "Message from COO", page: "CEOMessage", keywords: "COO message Nikolai Belov operations leadership" },
  { label: "Blog", page: "Blog", keywords: "blog articles news industry insights" },
  { label: "Testimonials", page: "Testimonials", keywords: "testimonials reviews clients feedback" },
  { label: "Documents", page: "Documents", keywords: "documents policies compliance audit reports" },
  { label: "2023 Audit Report", page: "DocumentAudit2023", keywords: "audit 2023 report financial" },
  { label: "2024 Audit Report", page: "DocumentAudit2024", keywords: "audit 2024 report financial" },
  { label: "Compliance Policy", page: "DocumentCompliance", keywords: "compliance policy regulations ethics" },
  { label: "AML Policy", page: "DocumentAML", keywords: "AML anti money laundering policy" },
  { label: "Prohibited Cargo Policy", page: "DocumentProhibited", keywords: "prohibited cargo restricted banned" },
  { label: "Risk Assessment Policy", page: "DocumentRisk", keywords: "risk assessment policy safety" },
  { label: "Sanctions Policy", page: "DocumentSanctions", keywords: "sanctions policy compliance OFAC EU" },
  { label: "Privacy Policy", page: "PrivacyPolicy", keywords: "privacy data GDPR personal information" },
  { label: "Cookies Policy", page: "CookiesPolicy", keywords: "cookies policy consent tracking" },
  { label: "Track Order", page: "TrackOrder", keywords: "track order shipment tracking status" },
  { label: "Get A Quote", page: "GetQuote", keywords: "quote price estimate request freight" },
  { label: "Contact Us", page: "Contact", keywords: "contact phone email address support" },
  { label: "Accessibility", page: "Accessibility", keywords: "accessibility disability font contrast" },
  { label: "My Account / Profile", page: "Profile", keywords: "account profile settings user" },
];

export default function NavSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim().length > 1
    ? SEARCH_INDEX.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const go = (page) => {
    setOpen(false);
    setQuery("");
    navigate(createPageUrl(page));
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white transition-all"
        title="Search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden xl:block text-xs">Search...</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search pages, services, documents..."
                className="flex-1 text-sm outline-none text-gray-900 placeholder-gray-400"
                onKeyDown={e => e.key === "Enter" && results[0] && go(results[0].page)}
              />
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            {query.trim().length < 2 ? (
              <div className="px-4 py-6 text-center text-sm text-gray-400">
                Type at least 2 characters to search all pages and services
              </div>
            ) : results.length === 0 ? (
              <div className="px-4 py-6 text-center text-sm text-gray-400">No results for "{query}"</div>
            ) : (
              <ul className="py-2 max-h-80 overflow-y-auto">
                {results.map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => go(item.page)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-cyan-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Search className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50 text-xs text-gray-400 flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs">↵</kbd> to go
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs ml-2">Esc</kbd> to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}