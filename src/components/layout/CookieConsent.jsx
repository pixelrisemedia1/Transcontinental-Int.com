import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tc_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => { localStorage.setItem("tc_cookie_consent", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("tc_cookie_consent", "declined"); setVisible(false); };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-[480px] z-[200] bg-[#111827] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-5">
            <div className="flex items-start gap-3 mb-3">
              <Cookie className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">Cookie Policy</h3>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  TransContinental Group International Limited uses cookies in accordance with the Personal Data (Privacy) Ordinance (Cap. 486) of Hong Kong and applicable international regulations.
                </p>
              </div>
              <button onClick={decline} className="text-gray-500 hover:text-white transition-colors flex-shrink-0">
                <X className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 mb-3 transition-colors"
            >
              {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {expanded ? "Hide details" : "Read full cookie policy"}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="text-xs text-gray-400 leading-relaxed bg-white/5 rounded-xl p-4 mb-3 max-h-48 overflow-y-auto space-y-3">
                    <p><strong className="text-gray-200">Cookie Policy — TransContinental Group International Limited</strong><br />Effective Date: 1 January 2025 | Jurisdiction: Hong Kong SAR</p>
                    <p><strong className="text-gray-300">1. Introduction</strong><br />This Cookie Policy explains how TransContinental Group International Limited ("we", "us", "our"), a company incorporated in Hong Kong, uses cookies and similar tracking technologies on our website at transcontinental-int.com in compliance with the Personal Data (Privacy) Ordinance (Cap. 486) of the HKSAR and the EU General Data Protection Regulation (GDPR) where applicable.</p>
                    <p><strong className="text-gray-300">2. What Are Cookies?</strong><br />Cookies are small text files placed on your device when you visit our website. They help us provide a better experience by remembering your preferences, analyzing traffic patterns, and enabling essential functionality.</p>
                    <p><strong className="text-gray-300">3. Types of Cookies We Use</strong><br /><em>Essential Cookies:</em> Required for the website to function. They enable security features, session management, and navigation. These cannot be disabled.<br /><em>Functional Cookies:</em> Remember your preferences such as language, font size, accessibility settings, and region.<br /><em>Analytics Cookies:</em> Help us understand how visitors interact with our website using aggregated, anonymized data.<br /><em>Marketing Cookies:</em> Used to deliver relevant content and measure campaign effectiveness. We do not sell your data to third parties.</p>
                    <p><strong className="text-gray-300">4. Data Retention</strong><br />Session cookies expire when you close your browser. Persistent cookies remain for up to 12 months unless deleted earlier. You may clear cookies at any time through your browser settings.</p>
                    <p><strong className="text-gray-300">5. Third-Party Services</strong><br />We may use third-party services including Google Analytics, Google Maps, and AI-powered chat tools. These services may set their own cookies subject to their respective privacy policies.</p>
                    <p><strong className="text-gray-300">6. Your Rights Under PDPO</strong><br />As a data subject under Hong Kong law, you have the right to access and correct your personal data, request deletion, and withdraw consent at any time. To exercise these rights, contact us at: tcl@transcontinental-int.com.</p>
                    <p><strong className="text-gray-300">7. Managing Cookies</strong><br />You can control cookies via your browser settings. Disabling non-essential cookies may affect website functionality. You can also use our Accessibility widget to manage site preferences stored locally on your device.</p>
                    <p><strong className="text-gray-300">8. Policy Updates</strong><br />This policy may be updated periodically. Continued use of our website after changes constitutes acceptance of the revised policy.</p>
                    <p><strong className="text-gray-300">9. Contact</strong><br />TransContinental Group International Limited<br />Room 1006, 10/F, Po Yip Building, 23 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong<br />Email: tcl@transcontinental-int.com | Tel: +852 5140 1536</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mb-3 flex items-start gap-2 bg-white/5 rounded-xl px-3 py-2.5">
              <FileText className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-400 leading-relaxed">
                By continuing, you also agree to our{" "}
                <Link to="/TermsConditions" onClick={accept} className="text-cyan-400 hover:text-cyan-300 underline">Terms & Conditions</Link>
                {" "}and{" "}
                <Link to="/PrivacyPolicy" onClick={accept} className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</Link>.
              </p>
            </div>

            <div className="flex gap-3">
              <button onClick={decline} className="flex-1 py-2.5 border border-gray-700 text-gray-300 text-xs font-semibold rounded-xl hover:bg-white/5 transition-colors">
                Decline Non-Essential
              </button>
              <button onClick={accept} className="flex-1 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold rounded-xl transition-colors">
                Accept All Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}