import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import TCLogo from "./TCLogo";

const LINKS = [
  { label: "About Us", page: "Company" },
  { label: "Our Services", page: "Services" },
  { label: "Documents", page: "Documents" },
  { label: "Get a Quote", page: "GetQuote" },
  { label: "Contact", page: "Contact" },
  { label: "Accessibility", page: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1729] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <TCLogo dark={false} size="md" />
            </div>
            <p className="text-sm leading-relaxed mt-4">
              Bridging continents and delivering opportunities through cost-efficient multimodal logistics solutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Our Info</h4>
            <ul className="space-y-3">
              {LINKS.map(link => (
                <li key={link.page}>
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Support Center</h4>
            <div className="space-y-4">
              <a href="tel:+85251401536" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+852 5140 1536</span>
              </a>
              <a href="tel:+19179305172" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 917-930-5172</span>
              </a>
              <a href="mailto:tcl@transcontinental-int.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">tcl@transcontinental-int.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">
                  Room 1006, 10/F, Po Yip Building<br />
                  23 Hing Yip Street, Kwun Tong<br />
                  Kowloon, Hong Kong
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Find Us</h4>
            <div className="rounded-xl overflow-hidden h-48 border border-gray-800">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.5!2d114.2239!3d22.3108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040150ded4aec9%3A0x1!2s23+Hing+Yip+St%2C+Kwun+Tong%2C+Hong+Kong!5e0!3m2!1sen!2s!4v1700000000001"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TransContinental Group International Limited. All rights reserved.
          </p>
          <Link to={createPageUrl("Accessibility")} className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
            Accessibility Statement
          </Link>
        </div>
      </div>
    </footer>
  );
}