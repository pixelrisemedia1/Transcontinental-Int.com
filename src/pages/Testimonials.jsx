import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Star, Quote, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";

const STATIC_TESTIMONIALS = [
  { id: "s1", name: "Marcus Bauer", title: "Head of Supply Chain", company: "Bauer Industrial GmbH", location: "Munich, Germany", rating: 5, text: "We've been working with TransContinental for over three years for our China-to-Europe rail freight needs. What sets them apart is the level of transparency and communication throughout the entire transit. We always know exactly where our cargo is, and their team handles customs at the China-Kazakhstan border without any issues. Our transit times have improved by 20% compared to our previous forwarder. I recommend them without hesitation.", service: "Rail Freight" },
  { id: "s2", name: "Li Wei", title: "Logistics Director", company: "Pacific Timber International", location: "Shanghai, China", rating: 5, text: "TransContinental's wood trading team is simply exceptional. We source certified hardwoods from Southeast Asia and Europe, and the documentation requirements — FSC certificates, phytosanitary clearances, CITES permits — are incredibly complex. Their team handles everything seamlessly. In two years of working together, we have not had a single cargo held at customs. That track record speaks for itself.", service: "Wood Trading" },
  { id: "s3", name: "Elena Morozova", title: "Operations Manager", company: "Eastbridge Trading LLC", location: "Dubai, UAE", rating: 5, text: "As a metals trader dealing in copper cathodes and aluminum ingots, I need a logistics partner that understands the sensitivity of commodity shipments — insurance, quality inspection, LME documentation, and security of high-value cargo. TransContinental manages all of this with complete professionalism. Their team is available around the clock, which is essential when coordinating between time zones.", service: "Metals Trading" },
  { id: "s4", name: "James Osei", title: "General Manager", company: "AfriTrade Exports Ltd.", location: "Accra, Ghana", rating: 5, text: "We export cocoa, timber, and agricultural products from West Africa to Asian markets. TransContinental not only offered us the best sea freight rates we've found, but also guided us through phytosanitary certification and fumigation requirements. Our shipments now move faster and with far less stress.", service: "Sea Freight" },
  { id: "s5", name: "Natalia Kowalczyk", title: "Import Manager", company: "EuroMach Sp. z o.o.", location: "Warsaw, Poland", rating: 5, text: "We recently used TransContinental's project logistics service for an out-of-gauge shipment that required special flat-rack containers, crane coordination at both ends, and route surveys. Their project team was meticulous in their planning, and the shipment arrived on schedule without a single incident. We have since moved all our FCL and LCL business to them.", service: "Project Logistics" },
  { id: "s6", name: "David Chen", title: "CEO", company: "Guangzhou Electro Parts Co., Ltd.", location: "Guangzhou, China", rating: 5, text: "In our business, speed is everything. We supply electronic components to manufacturers across Europe and North America, and our clients expect just-in-time delivery. TransContinental's air freight team has been outstanding at securing space on tight lanes when capacity is scarce. In three years, they have never missed a critical delivery window for us.", service: "Air Freight" },
  { id: "s7", name: "Sophie Laurent", title: "Supply Chain Director", company: "Maison Laurent SAS", location: "Lyon, France", rating: 5, text: "We were struggling with customs clearance delays at French ports that were costing us thousands in demurrage fees. TransContinental's customs team audited our entire documentation process, identified classification errors we had been making for years, and set up a pre-clearance workflow that now clears our containers before they even dock. Our clearance time has dropped from an average of 5 days to under 24 hours.", service: "Customs Clearance" },
  { id: "s8", name: "Rahul Mehta", title: "VP Operations", company: "IndusTech Manufacturing", location: "Mumbai, India", rating: 5, text: "As a growing manufacturing company, our warehousing needs were evolving quickly. TransContinental designed a flexible 4PL solution that integrated warehousing across three locations with synchronized inventory management and just-in-time delivery to our production lines. The cost savings have been substantial, but the real value is the end-to-end visibility we now have over our entire supply chain.", service: "4PL Logistics" },
  { id: "s9", name: "Ahmed Al-Rashid", title: "Procurement Director", company: "Gulf Industrial Metals Co.", location: "Jeddah, Saudi Arabia", rating: 5, text: "Sourcing certified European steel and copper requires navigating complex export documentation, quality certifications, and multi-modal transport through the Suez Canal. TransContinental handles it all — from mill certification at origin to final delivery at our facility. Their commodity expertise and logistics capability under one roof is a rare combination that has genuinely simplified our procurement operations.", service: "Metals Trading" },
  { id: "s10", name: "Kim Min-jun", title: "Head of Logistics", company: "Seoul Precision Ltd.", location: "Seoul, South Korea", rating: 5, text: "We ship high-value semiconductor manufacturing equipment from Korea to Europe and North America. These are multi-million dollar shipments that require specialized handling, climate-controlled containers, and absolute reliability. TransContinental's project logistics team treats every shipment as if it were their own. Their attention to detail — from engineering surveys to real-time GPS tracking — gives us complete peace of mind.", service: "Project Logistics" },
  { id: "s11", name: "Diego Fernandez", title: "Trade Manager", company: "MaderaSelect S.L.", location: "Barcelona, Spain", rating: 5, text: "Our company sources FSC-certified oak and beech from European forests for export to furniture manufacturers in Vietnam and China. The chain of custody documentation is critically important — our buyers audit every shipment. TransContinental's wood trading team manages the entire process from forest certification verification to container loading to customs export clearance. Professional, reliable, and exceptionally knowledgeable.", service: "Wood Trading" },
  { id: "s12", name: "Catherine Okonkwo", title: "Managing Director", company: "WestBridge Logistics Ltd.", location: "Lagos, Nigeria", rating: 5, text: "We act as a local logistics partner in West Africa, and TransContinental has been our primary international freight forwarder for over five years. Their global network, carrier relationships, and documentation expertise are exceptional. What I appreciate most is their problem-solving culture — when a shipment faces an unexpected challenge, their team doesn't just report the problem, they present solutions. That's the mark of a true logistics partner.", service: "Sea Freight" },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: Math.min(count || 5, 5) }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <Stars count={t.rating} />
        {t.service && <span className="text-xs bg-cyan-50 text-cyan-700 font-medium px-2.5 py-1 rounded-full">{t.service}</span>}
      </div>
      <Quote className="w-8 h-8 text-cyan-200 mb-3 flex-shrink-0" />
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {t.name?.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
            <p className="text-xs text-gray-500">{t.title}{t.company ? `, ${t.company}` : ""}</p>
            {t.location && <p className="text-xs text-gray-400">{t.location}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function WriteTestimonialModal({ onClose, onSaved }) {
  const [form, setForm] = useState({ name: "", title: "", company: "", location: "", rating: 5, text: "", service: "" });
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!form.name || !form.text) return;
    setSaving(true);
    await base44.entities.Testimonial.create({ ...form, published: true });
    setSaving(false);
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="text-lg font-bold text-gray-900">Add Testimonial</h2>
          <button onClick={onClose}><X className="w-5 h-5 text-gray-400" /></button>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Client Name *</label><input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Full name" /></div>
            <div><label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Job Title</label><input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. CEO" /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Company</label><input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Company name" /></div>
            <div><label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Location</label><input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} placeholder="City, Country" /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Service Used</label><input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} placeholder="e.g. Sea Freight" /></div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Rating</label>
              <div className="flex gap-1 mt-2">
                {[1,2,3,4,5].map(n => (
                  <button key={n} type="button" onClick={() => setForm(f => ({ ...f, rating: n }))} className="focus:outline-none">
                    <Star className={`w-6 h-6 transition-colors ${n <= form.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div><label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Testimonial Text *</label><textarea className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400 h-32 resize-none" value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))} placeholder="Write the client's testimonial..." /></div>
          <button onClick={handleSave} disabled={saving || !form.name || !form.text} className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-white py-3 rounded-xl font-semibold transition-all">
            {saving ? "Publishing..." : "Publish Testimonial"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [dbTestimonials, setDbTestimonials] = useState([]);
  const [showWrite, setShowWrite] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    loadTestimonials();
    base44.auth.isAuthenticated().then(async auth => {
      if (auth) { const u = await base44.auth.me(); setIsAdmin(u?.role === "admin"); }
    });
  }, []);

  const loadTestimonials = async () => {
    const items = await base44.entities.Testimonial.filter({ published: true }, "-created_date");
    setDbTestimonials(items);
  };

  const allTestimonials = [...STATIC_TESTIMONIALS, ...dbTestimonials];

  return (
    <div>
      <PageHero title="Client Testimonials" subtitle="What our clients say about working with TransContinental Group International." image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80" />
      {showWrite && <WriteTestimonialModal onClose={() => setShowWrite(false)} onSaved={() => { setShowWrite(false); loadTestimonials(); }} />}

      <div className="bg-[#111827] py-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-3 gap-8 text-center">
          <div><p className="text-3xl font-bold text-white">4.9<span className="text-cyan-400">/5</span></p><p className="text-gray-400 text-sm mt-1">Average Rating</p></div>
          <div><p className="text-3xl font-bold text-white">350<span className="text-cyan-400">+</span></p><p className="text-gray-400 text-sm mt-1">Satisfied Clients</p></div>
          <div><p className="text-3xl font-bold text-white">30<span className="text-cyan-400">+</span></p><p className="text-gray-400 text-sm mt-1">Countries Served</p></div>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {isAdmin && (
            <div className="flex justify-end mb-8">
              <button onClick={() => setShowWrite(true)} className="flex items-center gap-2 bg-[#111827] hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                <Plus className="w-4 h-4" /> Add Testimonial
              </button>
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <TestimonialCard t={t} />
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Satisfied Clients?</h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Experience the TransContinental difference. Request a quote today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl("GetQuote")} className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/25">Get A Quote</Link>
              <Link to={createPageUrl("Contact")} className="border border-gray-300 hover:border-cyan-400 text-gray-700 hover:text-cyan-600 px-8 py-3.5 rounded-xl font-semibold transition-all">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}