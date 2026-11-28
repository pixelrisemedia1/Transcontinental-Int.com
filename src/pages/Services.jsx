import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { Ship, Plane, Truck, Train, Warehouse, Globe, Package, FileCheck, Leaf, Trees, Gem, Anchor, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

const MAIN_SERVICES = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Global air freight solutions for time-sensitive cargo. Leveraging our worldwide network and partnerships with leading airlines, we deliver reliable air logistics to meet your most urgent deadlines.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Our dedicated sea logistics division, with decades of experience, partners with leading international carriers. We deliver tailored solutions that combine the best rates with reliable schedules.",
  },
  {
    icon: Truck,
    title: "Road Freight",
    desc: "As a vital link in any supply chain, our road freight service ensures seamless end-to-end delivery. We provide tailored FTL and LTL options to meet your shipping needs.",
  },
  {
    icon: Train,
    title: "Rail Freight",
    desc: "High-speed rail logistics deliver maximum efficiency for standard, bulk, and specialized project cargo. We expertly handle large and complex machinery movements.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Our strategically located warehouses worldwide provide secure storage and professional handling. We offer complete solutions empowering you to expand your delivery capabilities.",
  },
  {
    icon: Globe,
    title: "4PL Logistics",
    desc: "As a fully integrated 4PL provider, we deliver a dedicated logistics ecosystem that maximizes value through leading-edge technology for complete control and efficiency.",
  },
  {
    icon: Package,
    title: "Project Logistics",
    desc: "We specialize in moving complex shipments along challenging routes, providing essential equipment, expertise, and global network to manage risk and ensure project success.",
  },
  {
    icon: Anchor,
    title: "Domestic & Coastal Shipping",
    desc: "Coastal and land-based freight services interlinked to form optimized domestic solutions. We seamlessly combine sea, road, and rail transport to reduce costs.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Our dedicated customs team provides turnkey clearance services, leveraging expertise and a powerful network to ensure goods move across international borders without delay.",
  },
  {
    icon: Leaf,
    title: "Carbon Neutral Shipping",
    desc: "In partnership with Trace, we offer full carbon offsetting for your logistics. Our integrated tools calculate emissions automatically for every order.",
  },
  {
    icon: Trees,
    title: "Wood Trading",
    desc: "We source and trade premium timber, lumber, plywood, and specialty hardwoods across global markets with reliable logistics and quality assurance.",
  },
  {
    icon: Gem,
    title: "Metals Trading",
    desc: "Our metals trading division handles ferrous and non-ferrous metals worldwide — steel, aluminum, copper, zinc, nickel, and rare earth elements.",
  },
];

const STATS = [
  { value: "6,900+", label: "Container shipments managed" },
  { value: "80M+", label: "Tonnes of cargo per year" },
  { value: "3,400+", label: "Successful deliveries" },
  { value: "20+", label: "Countries served" },
];

export default function Services() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive freight and trading solutions spanning every major trade route worldwide."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80"
      />

      {/* Commercial Cargo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=800&q=80"
                alt="Cargo"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Commercial Cargo Solutions
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                We deliver optimized freight costs and secure cargo handling for domestic and international trade. Our specialists offer expert logistics support, from ocean shipping and customs clearance to project logistics and exports. Partner with TransContinental for reliable, end-to-end freight management.
              </p>
            </div>
          </div>

          <SectionHeading
            label="Services & Solutions"
            title="Everything You Need"
            description="From freight forwarding to commodity trading, we provide comprehensive solutions for global trade."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-cyan-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-cyan-50 flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            light
            title="Your Global Freight Forwarding Partner"
            description="With offices on four continents and a partner network spanning 20+ countries, we deliver seamless shipping anywhere in the world."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-cyan-400">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Ship?</h2>
          <p className="text-gray-500 mt-4">Get a personalized quote for your freight needs today.</p>
          <Link
            to={createPageUrl("GetQuote")}
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold mt-8 transition-all shadow-xl shadow-cyan-500/25"
          >
            Get A Quote
          </Link>
        </div>
      </section>
    </div>
  );
}