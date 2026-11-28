import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Package, ChevronDown, LogIn, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteServices } from "@/api/localClient";
import TCLogo from "./TCLogo";
import NavSearch from "./NavSearch";

const NAV_ITEMS = [
  { label: "Home", page: "Home" },
  {
    label: "Services & Trading",
    page: "Services",
    children: [
      { label: "── Freight ──", page: null, divider: true },
      { label: "Sea Freight", page: "SeaFreight" },
      { label: "Air Freight", page: "AirFreight" },
      { label: "Road Freight", page: "RoadFreight" },
      { label: "Rail Freight", page: "RailFreight" },
      { label: "Warehousing", page: "Warehousing" },
      { label: "4PL Logistics", page: "FourPL" },
      { label: "Project Logistics", page: "ProjectLogistics" },
      { label: "Domestic & Coastal", page: "DomesticShipping" },
      { label: "Customs Clearance", page: "CustomsClearance" },
      { label: "Carbon Neutral", page: "CarbonNeutral" },
      { label: "── Trading ──", page: null, divider: true },
      { label: "Wood Trading", page: "WoodTrading" },
      { label: "Metals Trading", page: "MetalsTrading" },
    ],
  },
  {
    label: "Company",
    page: "Company",
    children: [
      { label: "About Us", page: "Company" },
      { label: "Global Network", page: "GlobalNetwork" },
      { label: "Message from COO", page: "CEOMessage" },
      { label: "Blog", page: "Blog" },
      { label: "Testimonials", page: "Testimonials" },
    ],
  },
  {
    label: "Documents",
    page: "Documents",
    children: [
      { label: "All Documents", page: "Documents" },
      { label: "2022-2023 Audit", page: "DocumentAudit2023" },
      { label: "2024 Audit", page: "DocumentAudit2024" },
      { label: "2025 Audit", page: "DocumentAudit2025" },
      { label: "Compliance Policy", page: "DocumentCompliance" },
      { label: "AML Policy", page: "DocumentAML" },
      { label: "Prohibited Cargo", page: "DocumentProhibited" },
      { label: "Risk Assessment", page: "DocumentRisk" },
      { label: "Sanctions Policy", page: "DocumentSanctions" },
      { label: "── Legal ──", page: null, divider: true },
      { label: "Privacy Policy", page: "PrivacyPolicy" },
      { label: "Cookies Policy", page: "CookiesPolicy" },
    ],
  },
  {
    label: "More",
    page: null,
    children: [
      { label: "Track Order", page: "TrackOrder" },
      { label: "Get A Quote", page: "GetQuote" },
      { label: "Contact Us", page: "Contact" },
      { label: "Accessibility", page: "Accessibility" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navContainerRef = useRef(null);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "") || "Home";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    siteServices.auth.isAuthenticated().then(async (auth) => {
      setIsAuthenticated(auth);
      if (auth) { try { const u = await siteServices.auth.me(); setUser(u); } catch (_) {} }
    });
  }, []);

  // Traveling indicator
  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;
    const activeEl = container.querySelector(`[data-active="true"]`);
    if (activeEl) {
      const cr = container.getBoundingClientRect();
      const er = activeEl.getBoundingClientRect();
      setIndicatorStyle({ left: er.left - cr.left, width: er.width, opacity: 1 });
    } else {
      setIndicatorStyle(s => ({ ...s, opacity: 0 }));
    }
  }, [currentPage, location]);

  const isPageActive = (item) => {
    if (item.page === currentPage) return true;
    if (item.children) return item.children.some(c => c.page === currentPage);
    return false;
  };

  const handleMouseEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0d1321]/98 backdrop-blur-md shadow-xl" : "bg-[#111827]"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to={createPageUrl("Home")} className="flex-shrink-0">
          <TCLogo size="md" />
        </Link>

        {/* Search bar — second after logo */}
        <div className="hidden lg:block flex-shrink-0">
          <NavSearch />
        </div>

        {/* Desktop nav */}
        <div ref={navContainerRef} className="hidden lg:flex items-center gap-1 relative">
...
          <motion.div
            className="absolute bottom-0 h-0.5 bg-cyan-400 rounded-full pointer-events-none"
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />

          {NAV_ITEMS.map(item => {
            const active = isPageActive(item);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                {item.page ? (
                  <Link
                    to={createPageUrl(item.page)}
                    data-active={active ? "true" : undefined}
                    className={`flex items-center gap-1 px-4 py-6 text-sm font-medium transition-all duration-200 ${active ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3" />}
                  </Link>
                ) : (
                  <button
                    data-active={active ? "true" : undefined}
                    className={`flex items-center gap-1 px-4 py-6 text-sm font-medium transition-colors ${active ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-0 mt-0 w-56 bg-[#1a2540] border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden py-1.5 z-10"
                    >
                      {item.children.map((child, i) => (
                        child.divider ? (
                          <div key={i} className="px-4 py-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-t border-gray-700/50 mt-1">
                            {child.label.replaceAll("─", "").trim()}
                          </div>
                        ) : (
                          <Link
                            key={i}
                            to={createPageUrl(child.page)}
                            className={`block px-4 py-2.5 text-sm transition-colors ${currentPage === child.page ? "text-cyan-400 bg-white/5" : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"}`}
                          >
                            {child.label}
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right side — Login only */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white transition-all"
                >
                  <User className="w-4 h-4 text-cyan-400" />
                  <span className="max-w-[100px] truncate">{user?.full_name || "Account"}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute right-0 top-full mt-2 w-52 bg-[#1a2540] border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-20"
                    >
                      <div className="px-4 py-3 border-b border-gray-700">
                        <p className="text-white text-sm font-semibold truncate">{user?.full_name}</p>
                        <p className="text-gray-400 text-xs truncate">{user?.email}</p>
                      </div>
                      <Link
                        to={createPageUrl("Profile")}
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        <User className="w-4 h-4" /> My Account
                      </Link>
                      <Link
                        to={createPageUrl("Profile") + "?tab=accessibility"}
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        <Package className="w-4 h-4" /> Preferences
                      </Link>
                      <button
                        onClick={() => siteServices.auth.logout()}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-white/5 transition-colors border-t border-gray-700"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link to={createPageUrl("Profile")} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white transition-all">
                <LogIn className="w-4 h-4 text-cyan-400" />
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#111827] border-t border-gray-800 overflow-auto max-h-[80vh]"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map(item => (
                <div key={item.label}>
                  {item.page ? (
                    <Link
                      to={createPageUrl(item.page)}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium ${isPageActive(item) ? "text-cyan-400 bg-cyan-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest mt-3">{item.label}</div>
                  )}
                  {item.children && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.children.filter(c => !c.divider).map((child, i) => (
                      <Link key={i} to={createPageUrl(child.page)} onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-800 space-y-2">
                {!isAuthenticated ? (
                  <Link to={createPageUrl("Profile")} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm px-4 py-2 w-full">
                    <LogIn className="w-4 h-4" /> Login / Sign Up
                  </Link>
                ) : (
                  <>
                    <Link to={createPageUrl("Profile")} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm px-4 py-2">
                      <User className="w-4 h-4" /> My Account
                    </Link>
                    <button onClick={() => siteServices.auth.logout()} className="flex items-center gap-2 text-red-400 text-sm px-4 py-2 w-full">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}