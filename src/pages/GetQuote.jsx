import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import CaptchaField from "../components/shared/CaptchaField";
import { siteServices } from "@/api/localClient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

const SERVICE_OPTIONS = [
  { value: "sea_freight", label: "Sea Freight" },
  { value: "air_freight", label: "Air Freight" },
  { value: "road_freight", label: "Road Freight" },
  { value: "rail_freight", label: "Rail Freight" },
  { value: "warehousing", label: "Warehousing" },
  { value: "wood_trading", label: "Wood Trading" },
  { value: "metals_trading", label: "Metals Trading" },
  { value: "customs_clearance", label: "Customs Clearance" },
  { value: "project_logistics", label: "Project Logistics" },
  { value: "other", label: "Other" },
];

export default function GetQuote() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    first_name: "", last_name: "", company: "", phone: "", email: "",
    service_type: "", origin: "", destination: "", cargo_description: "",
    weight_kg: "", dimensions: "", notes: "",
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    siteServices.auth.isAuthenticated().then(async auth => {
      if (auth) {
        const u = await siteServices.auth.me();
        setForm(f => ({
          ...f,
          first_name: u.full_name?.split(" ")[0] || f.first_name,
          last_name: u.full_name?.split(" ").slice(1).join(" ") || f.last_name,
          email: u.email || f.email,
          phone: u.phone || f.phone,
          company: u.company || f.company,
        }));
      }
    });
  }, []);

  const update = (key, val) => setForm(p => ({ ...p, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) return;
    setSending(true);
    const data = { ...form };
    if (data.weight_kg) data.weight_kg = parseFloat(data.weight_kg);
    else delete data.weight_kg;
    await siteServices.entities.QuoteRequest.create(data);
    const body = Object.entries(data).map(([key, value]) => key.replaceAll("_", " ") + ": " + value).join("\n");
    const mailto = new URL("mailto:tcl@transcontinental-int.com");
    mailto.searchParams.set("subject", "Freight quote request");
    mailto.searchParams.set("body", body);
    window.location.href = mailto.toString();
    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <PageHero title="Quote Submitted" image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80" />
        <div className="py-24 text-center max-w-xl mx-auto px-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mt-6">Thank You!</h2>
          <p className="text-gray-500 mt-4 text-lg">Your email app should open with your quote request ready. Send the email to complete your request.</p>
          <Button onClick={() => { setSubmitted(false); setStep(1); setForm({ first_name: "", last_name: "", company: "", phone: "", email: "", service_type: "", origin: "", destination: "", cargo_description: "", weight_kg: "", dimensions: "", notes: "" }); }} variant="outline" className="mt-8">
            Submit Another Quote
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        title={`Get a Quote (Step ${step}/3)`}
        subtitle="Fill in the details below and we'll provide you with a competitive quote."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map(s => (
              <React.Fragment key={s}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  s <= step ? "bg-cyan-500 text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-0.5 ${s < step ? "bg-cyan-500" : "bg-gray-200"}`} />}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">General Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">First Name *</label>
                    <Input required value={form.first_name} onChange={e => update("first_name", e.target.value)} placeholder="First Name" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Last Name</label>
                    <Input value={form.last_name} onChange={e => update("last_name", e.target.value)} placeholder="Last Name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Company</label>
                    <Input value={form.company} onChange={e => update("company", e.target.value)} placeholder="Your company" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Phone</label>
                    <Input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="Phone number" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Email *</label>
                  <Input required type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="your@email.com" />
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="button" onClick={() => setStep(2)} className="bg-cyan-500 hover:bg-cyan-400 text-white gap-2">
                    Next Step <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Shipment Details</h3>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Service Type *</label>
                  <Select value={form.service_type} onValueChange={v => update("service_type", v)}>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Origin</label>
                    <Input value={form.origin} onChange={e => update("origin", e.target.value)} placeholder="City / Port" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Destination</label>
                    <Input value={form.destination} onChange={e => update("destination", e.target.value)} placeholder="City / Port" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Cargo Description</label>
                  <Textarea value={form.cargo_description} onChange={e => update("cargo_description", e.target.value)} placeholder="Describe your cargo..." className="min-h-[100px]" />
                </div>
                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="bg-cyan-500 hover:bg-cyan-400 text-white gap-2">
                    Next Step <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Weight (kg)</label>
                    <Input type="number" value={form.weight_kg} onChange={e => update("weight_kg", e.target.value)} placeholder="Approximate weight" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Dimensions</label>
                    <Input value={form.dimensions} onChange={e => update("dimensions", e.target.value)} placeholder="L x W x H (cm)" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Additional Notes</label>
                  <Textarea value={form.notes} onChange={e => update("notes", e.target.value)} placeholder="Any special requirements..." className="min-h-[100px]" />
                </div>
                <CaptchaField onVerify={setCaptchaValid} />
                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!captchaValid || sending}
                    className="bg-cyan-500 hover:bg-cyan-400 text-white gap-2"
                  >
                    {sending ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}