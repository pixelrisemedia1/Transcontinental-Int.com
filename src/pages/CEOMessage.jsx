import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Quote } from "lucide-react";

export default function CEOMessage() {
  return (
    <div>
      <PageHero
        title="Message from Our COO"
        subtitle="A personal message from Nikolai Belov, Chief Operating Officer (COO) of TransContinental Group International."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#111827] to-[#1a2540] rounded-3xl p-10 md:p-14 mb-16 text-center overflow-hidden"
          >
            <Quote className="w-16 h-16 text-cyan-500/30 absolute top-6 left-6" />
            <Quote className="w-16 h-16 text-cyan-500/30 absolute bottom-6 right-6 rotate-180" />
            <blockquote className="text-2xl md:text-3xl font-light text-white italic relative z-10 leading-relaxed">
              "We don't just move cargo; we move businesses forward."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img src="https://media.base44.com/images/public/69d1d2636276e47743e6d20c/443eedd56_TC_Nikolai_.png" alt="Nikolai Belov" className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30" />
              <div className="text-left">
                <p className="text-white font-semibold text-lg">Nikolai Belov</p>
                <p className="text-cyan-400 text-sm">Chief Operating Officer (COO), TransContinental Group International</p>
              </div>
            </div>
          </motion.div>

          {/* Full message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6"
          >
            <p>
              Dear Partners, Clients, and Friends,
            </p>
            <p>
              It is my honor and pleasure to welcome you to TransContinental Group International Limited. Since our founding, we have built this company on a single, unwavering promise: to deliver not just cargo, but confidence — the confidence that comes from knowing your goods are in expert hands, moving through a seamless, transparent, and reliable supply chain.
            </p>
            <p>
              The world of logistics is complex. Global trade routes shift, regulations evolve, and the demands placed on modern supply chains are greater than ever. Yet within this complexity lies opportunity — the opportunity to create genuine value for our clients by combining deep industry expertise with a relentless commitment to service excellence.
            </p>
            <p>
              At TransContinental, we have assembled a team of dedicated professionals who share this philosophy. From our sea freight specialists navigating the world's major container ports, to our rail logistics experts managing the growing Europe-Asia corridor, to our commodity traders sourcing premium timber and metals across global markets — every member of our team is driven by the same goal: your success.
            </p>
            <p>
              We understand that trust is earned, not given. That is why we invest continuously in our people, our technology, and our global partnerships. We operate with full transparency, uphold the highest compliance and ethical standards, and treat every shipment — whether it is a single pallet or a full project cargo movement — with the same level of care and attention.
            </p>
            <p>
              As we look ahead, we are excited about the opportunities that lie before us. The continued growth of global trade, the expansion of the New Silk Road rail corridors, the increasing importance of sustainable logistics — these are not challenges to be feared, but frontiers to be explored. TransContinental is positioned at the intersection of all of them.
            </p>
            <p>
              We are proud of what we have built, and we are committed to building much more — together with you.
            </p>
            <p>
              Thank you for your trust. Thank you for your partnership. We look forward to continuing this journey with you.
            </p>
            <p className="mt-8 not-italic">
              Warm regards,
            </p>
            <div className="mt-2">
              <p className="font-bold text-gray-900 text-xl">Nikolai Belov</p>
              <p className="text-cyan-600 font-medium">Chief Operating Officer (COO)</p>
              <p className="text-gray-500">TransContinental Group International Limited</p>
              <p className="text-gray-400 text-sm">Hong Kong</p>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Work with Us?</h3>
            <p className="text-gray-500 mb-6">Contact our team or request a quote to get started with TransContinental.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl("GetQuote")} className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-xl font-semibold transition-all">
                Get A Quote
              </Link>
              <Link to={createPageUrl("Contact")} className="border border-gray-300 hover:border-cyan-400 text-gray-700 hover:text-cyan-600 px-8 py-3 rounded-xl font-semibold transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}