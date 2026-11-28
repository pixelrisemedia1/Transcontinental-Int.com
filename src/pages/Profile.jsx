import React, { useState, useEffect } from "react";
import { siteServices } from "@/api/localClient";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { User, Building, Phone, Mail, Globe, Eye, Cookie, Bell, Clock, Package, MessageSquare, Save, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TABS = [
  { id: "profile", label: "My Profile", icon: User },
  { id: "accessibility", label: "Accessibility", icon: Eye },
  { id: "requests", label: "My Requests", icon: Package },
];

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [form, setForm] = useState({ full_name: "", email: "", company: "", phone: "", language: "en", position: "" });
  const [quotes, setQuotes] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let savedProfile = {};
    try { savedProfile = JSON.parse(localStorage.getItem("tcl-profile") || "{}"); } catch {}
    setUser(savedProfile);
    setForm(current => ({ ...current, ...savedProfile }));
    siteServices.entities.QuoteRequest.list().then(setQuotes).catch(() => setQuotes([]));
    setLoading(false);
  }, []);

  // Check if we should open accessibility tab from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "accessibility") setActiveTab("accessibility");
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const next = { ...form }; localStorage.setItem("tcl-profile", JSON.stringify(next)); setUser(next);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
    </div>
  );

  return (
    <div>
      <PageHero title="My Account" subtitle="Manage your profile, preferences, and shipment history." image="/Transcontinental-Int.com/assets/unsplash/photo-1497366216548-37526070297c.jpg" />

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-gray-200 bg-white rounded-t-2xl px-4 overflow-x-auto">
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === t.id ? "border-cyan-500 text-cyan-600" : "border-transparent text-gray-500 hover:text-gray-800"}`}>
                <t.icon className="w-4 h-4" />
                {t.label}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-b-2xl rounded-tr-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Personal & Company Information</h2>
              <p className="text-sm text-gray-500 mb-6">This information is saved in this browser only. There is no online account or server sync. All fields are optional.</p>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Full Name</label>
                  <Input value={form.full_name} disabled className="bg-gray-50 text-gray-500" placeholder="From your account" />
                  <p className="text-xs text-gray-400 mt-1">Saved in this browser only</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Email</label>
                  <Input value={form.email} disabled className="bg-gray-50 text-gray-500" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Company / Organisation</label>
                  <Input value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Your company name" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Position / Role</label>
                  <Input value={form.position} onChange={e => setForm({...form, position: e.target.value})} placeholder="e.g. Logistics Manager" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Phone Number</label>
                  <Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 555 000 0000" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Preferred Language</label>
                  <select value={form.language} onChange={e => setForm({...form, language: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    {[["en","English"],["zh","中文"],["es","Español"],["fr","Français"],["de","Deutsch"],["ar","العربية"],["ru","Русский"],["ja","日本語"]].map(([v,l]) => (
                      <option key={v} value={v}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Button onClick={handleSave} disabled={saving} className="bg-cyan-500 hover:bg-cyan-400 text-white px-8">
                  {saving ? <><Loader2 className="w-4 h-4 animate-spin mr-2" />Saving...</> : <><Save className="w-4 h-4 mr-2" />Save Profile</>}
                </Button>
                {saved && <span className="text-green-600 text-sm font-medium">✓ Saved!</span>}
              </div>
            </motion.div>
          )}

          {/* Accessibility Tab */}
          {activeTab === "accessibility" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-b-2xl rounded-tr-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Accessibility Preferences</h2>
              <p className="text-gray-500 text-sm mb-6">Your accessibility preferences are saved in your browser. Use the Accessibility Widget (eye icon) on any page to customize your experience in real-time.</p>
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6 flex items-start gap-4">
                <Eye className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Accessibility Widget</h3>
                  <p className="text-sm text-gray-600 mb-4">Click the eye icon (floating on the bottom-right of the page) to access 20+ accessibility settings including font size, contrast, color blind modes, language, and more. Changes are saved automatically to your browser.</p>
                  <button onClick={() => {
                    const evt = new CustomEvent("openAccessibility");
                    window.dispatchEvent(evt);
                  }} className="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                    Open Accessibility Widget
                  </button>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Cookie className="w-4 h-4 text-cyan-500" />Cookie Preferences</h3>
                <p className="text-sm text-gray-500 mb-4">Manage your cookie consent preferences. Accepting all cookies enables the best experience including analytics and personalization.</p>
                <button onClick={() => { localStorage.removeItem("tc_cookie_consent"); window.location.reload(); }}
                  className="border border-gray-300 text-gray-600 hover:bg-gray-100 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                  Reset Cookie Preferences
                </button>
              </div>
            </motion.div>
          )}

          {/* Requests Tab */}
          {activeTab === "requests" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-b-2xl rounded-tr-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Quote Requests</h2>
              {quotes.length === 0 ? (
                <div className="text-center py-16">
                  <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No quote requests yet.</p>
                  <Link to={createPageUrl("GetQuote")} className="inline-flex mt-4 bg-cyan-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-cyan-400 transition-all">
                    Request a Quote
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {quotes.map((q, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-gray-900">{q.service_type?.replace(/_/g," ").replace(/\b\w/g,l=>l.toUpperCase())}</p>
                          <p className="text-sm text-gray-500 mt-1">{q.origin} → {q.destination}</p>
                          {q.cargo_description && <p className="text-xs text-gray-400 mt-1">{q.cargo_description}</p>}
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${
                          q.status === "quoted" ? "bg-green-100 text-green-700" :
                          q.status === "accepted" ? "bg-blue-100 text-blue-700" :
                          q.status === "declined" ? "bg-red-100 text-red-700" :
                          "bg-yellow-100 text-yellow-700"}`}>
                          {q.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(q.created_date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}