import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import CaptchaField from "../components/shared/CaptchaField";
import { siteServices } from "@/api/localClient";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) return;
    setSending(true);
    const body = "Name: " + form.name + "\nEmail: " + form.email + "\nSubject: " + form.subject + "\n\n" + form.message;
    const mailto = new URL("mailto:tcl@transcontinental-int.com");
    mailto.searchParams.set("subject", form.subject || "Website enquiry");
    mailto.searchParams.set("body", body);
    window.location.href = mailto.toString();
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, support, or partnerships."
        image="/Transcontinental-Int.com/assets/unsplash/photo-1423666639041-f56000c27a9a.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a href="tel:+85251401536" className="text-sm text-gray-500 hover:text-cyan-500 transition-colors block">
                        +852 5140 1536 (Hong Kong)
                      </a>
                      <a href="tel:+19179305172" className="text-sm text-gray-500 hover:text-cyan-500 transition-colors block">
                        +1 917-930-5172 (USA)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a href="mailto:tcl@transcontinental-int.com" className="text-sm text-gray-500 hover:text-cyan-500 transition-colors">
                        tcl@transcontinental-int.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-500">
                        Room 1006, 10/F, Po Yip Building<br />
                        23 Hing Yip Street, Kwun Tong<br />
                        Kowloon, Hong Kong
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Support</p>
                      <p className="text-sm text-gray-500">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-64">
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

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500 mt-2">We'll get back to you as soon as possible.</p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }} variant="outline" className="mt-6">
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Name *</label>
                      <Input
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Email *</label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Subject</label>
                    <Input
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="bg-white"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Message *</label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your needs..."
                      className="bg-white min-h-[140px]"
                    />
                  </div>
                  <div className="mb-6">
                    <CaptchaField onVerify={setCaptchaValid} />
                  </div>
                  <Button
                    type="submit"
                    disabled={!captchaValid || sending}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    {sending ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}