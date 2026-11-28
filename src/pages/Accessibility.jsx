import React from "react";
import PageHero from "../components/shared/PageHero";
import { Eye, Keyboard, Monitor, Volume2, MousePointer, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const ITEMS = [
  { icon: Eye, title: "Visual Accessibility", desc: "High contrast text, scalable fonts, and clear color differentiation throughout the interface. All images include descriptive alt text." },
  { icon: Keyboard, title: "Keyboard Navigation", desc: "Full keyboard navigation support. All interactive elements are accessible via Tab, Enter, and Arrow keys." },
  { icon: Monitor, title: "Screen Reader Support", desc: "Semantic HTML structure and ARIA labels ensure compatibility with popular screen readers like JAWS, NVDA, and VoiceOver." },
  { icon: Volume2, title: "Audio Alternatives", desc: "All audio and video content includes text-based alternatives such as captions and transcripts." },
  { icon: MousePointer, title: "Touch Friendly", desc: "Large touch targets and responsive design ensure the site works well on all devices and input methods." },
  { icon: Globe, title: "Standards Compliance", desc: "We strive to conform to WCAG 2.1 AA standards and continuously improve our accessibility features." },
];

export default function Accessibility() {
  return (
    <div>
      <PageHero
        title="Accessibility"
        subtitle="We are committed to ensuring our website is accessible to everyone."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Statement</h2>
          <p className="text-gray-500 leading-relaxed mb-12">
            TransContinental Group International Limited is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {ITEMS.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all">
                <item.icon className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Live Accessibility Widget link */}
          <div className="mt-12 p-8 bg-cyan-50 border border-cyan-200 rounded-2xl flex items-start gap-4">
            <Eye className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customize Your Experience Right Now</h3>
              <p className="text-gray-600 text-sm mb-4">Use our built-in Accessibility Widget to personalize font size, contrast, color blind modes, language translation, and more — without leaving this page.</p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openAccessibility"))}
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                Open Accessibility Settings
              </button>
            </div>
          </div>

          <div className="mt-8 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Feedback</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We welcome your feedback on the accessibility of the TransContinental website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>Email: <a href="mailto:tcl@transcontinental-int.com" className="text-cyan-500 hover:underline">tcl@transcontinental-int.com</a></li>
              <li>Phone (HK): <a href="tel:+85251401536" className="text-cyan-500 hover:underline">+852 5140 1536</a></li>
              <li>Phone (USA): <a href="tel:+19179305172" className="text-cyan-500 hover:underline">+1 917-930-5172</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}