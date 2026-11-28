import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { FileText, Shield, AlertTriangle, Search, Link as LinkIcon, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const DOCS = [
  {
    section: "Audits",
    desc: "At Transcontinental Group International, audits ensure every part of our logistics network meets the highest standards of quality, compliance, and sustainability.",
    icon: Search,
    items: [
      {
        title: "2022-2023 Audit",
        desc: "2022-2023 year audit report",
        page: "DocumentAudit2023",
        url: "https://media.base44.com/files/public/69d1d2636276e47743e6d20c/e01ff9332_HK_Audit_2023.pdf",
      },
      {
        title: "2024 Audit",
        desc: "2024-2025 year audit report",
        page: "DocumentAudit2024",
        url: "https://media.base44.com/files/public/69d1d2636276e47743e6d20c/0ac643c21_HK_Audit_2024.pdf",
      },
      {
        title: "2025 Audit",
        desc: "2025-2026 year audit report",
        page: "DocumentAudit2025",
        url: "https://media.base44.com/files/public/69d1d2636276e47743e6d20c/9ba48bd65_HK_Audit_2025.pdf",
      },
    ],
  },
  {
    section: "Compliance",
    desc: "We operate with full adherence to international trade laws, environmental regulations, and ethical business standards.",
    icon: Shield,
    items: [
      {
        title: "AML Policy",
        desc: "Anti-money laundering policy",
        page: "DocumentAML",
        url: "https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link",
      },
    ],
  },
  {
    section: "Risk & Safety",
    desc: "Our risk assessment and prohibited cargo policies safeguard integrity across all operations.",
    icon: AlertTriangle,
    items: [
      {
        title: "Prohibited Cargo Policy",
        desc: "List of restricted and prohibited materials",
        page: "DocumentProhibited",
        url: "https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link",
      },
      {
        title: "Risk Assessment Policy",
        desc: "Comprehensive risk evaluation framework",
        page: "DocumentRisk",
        url: "https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link",
      },
      {
        title: "Sanctions Compliance Policy",
        desc: "International sanctions adherence",
        page: "DocumentSanctions",
        url: "https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link",
      },
    ],
  },
  {
    section: "Legal",
    desc: "Our privacy and cookies policies explain how we collect, use, and protect your personal data and what cookies we use on this website.",
    icon: Scale,
    items: [
      { title: "Terms & Conditions", desc: "Terms governing use of our website and services", page: "TermsConditions", url: "" },
      { title: "Privacy Policy", desc: "How we collect and use your personal data", page: "PrivacyPolicy", url: "https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link" },
      { title: "Cookies Policy", desc: "How we use cookies and tracking technologies", page: "CookiesPolicy", url: "https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link" },
    ],
  },
];

export default function Documents() {
  return (
    <div>
      <PageHero
        title="Documents"
        subtitle="Transparency, compliance, and accountability across all global operations."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-20">
          {DOCS.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.section}</h2>
                  <p className="text-gray-500 mt-1">{section.desc}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 ml-16">
                {section.items.map((doc, j) => (
                  <div key={j} className="group border border-gray-100 rounded-xl hover:border-cyan-200 hover:shadow-md transition-all overflow-hidden">
                    <Link
                      to={createPageUrl(doc.page)}
                      className="flex items-center gap-4 p-5 cursor-pointer"
                    >
                      <FileText className="w-8 h-8 text-gray-300 group-hover:text-cyan-500 transition-colors flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm">{doc.title}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{doc.desc}</p>
                      </div>
                      <LinkIcon className="w-4 h-4 text-gray-300 group-hover:text-cyan-500 transition-colors flex-shrink-0" />
                    </Link>
                    <div className="border-t border-gray-100 px-5 py-2.5 bg-gray-50">
                      <span className="text-xs text-gray-400">Click to view full document</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}