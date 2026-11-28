import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Calendar, Clock, Tag, ArrowRight, Plus, X, Upload, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

const STATIC_POSTS = [
  {
    id: "s1",
    title: "The Future of Sea Freight: Mega-Ships, Port Congestion, and the Race to Decarbonize",
    category: "Sea Freight",
    created_date: "2026-02-10",
    read_time: "9 min read",
    image_url: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&q=80",
    excerpt: "The ocean freight industry is undergoing one of its most profound transformations in decades.",
    content: `<h2>The Era of the Mega-Ship</h2><p>The ocean freight industry is undergoing one of its most profound transformations in decades. As shipping lines commission ever-larger ultra-large container vessels (ULCVs), port infrastructure struggles to keep pace — and the entire industry faces a defining pressure to decarbonize by 2050.</p><p>Today's largest container ships can carry more than 24,000 twenty-foot equivalent units (TEUs). These vessels offer enormous economies of scale, reducing the cost per container significantly. However, they also create immense pressure on ports, which must invest billions in deepening berths, upgrading cranes, and expanding terminal capacity.</p><h2>Port Congestion: A Systemic Problem</h2><p>The COVID-19 pandemic exposed just how fragile the global shipping network really is. At the height of the disruptions in 2021–2022, container ships were queuing for weeks outside the ports of Los Angeles, Long Beach, Felixstowe, and Yantian. These backlogs sent freight rates spiraling to record highs — at peak, the cost of shipping a 40-foot container from Shanghai to Los Angeles exceeded $20,000.</p><h2>The Decarbonization Imperative</h2><p>Perhaps the most significant long-term challenge for the sea freight industry is decarbonization. The International Maritime Organization (IMO) has set ambitious targets: a 40% reduction in carbon intensity by 2030 compared to 2008 levels, and net-zero greenhouse gas emissions by or around 2050.</p><p>The most promising alternative fuels include LNG as a transition fuel, green ammonia, green methanol, and hydrogen. Wind-assisted propulsion is also gaining traction as a supplementary technology.</p><h2>Outlook for 2026 and Beyond</h2><p>The sea freight market in 2026 is navigating a complex environment. Overcapacity is putting downward pressure on spot freight rates, while geopolitical tensions continue to add a risk premium to certain trade lanes. For forwarders like TransContinental, the opportunity lies in adding genuine value through expertise and carrier relationships.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s2",
    title: "Rail Freight on the New Silk Road: The Europe-Asia Corridor's Remarkable Rise",
    category: "Rail Freight",
    created_date: "2026-01-22",
    read_time: "8 min read",
    image_url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
    excerpt: "The China-Europe Railway Express connects over 100 Chinese cities to more than 200 destinations across Europe.",
    content: `<h2>From Concept to Corridor</h2><p>When China launched the Belt and Road Initiative (BRI) in 2013, few in the logistics industry predicted that rail freight would become one of its most remarkable success stories. Today, the China-Europe Railway Express (CR Express) connects over 100 Chinese cities to more than 200 destinations across Europe, with transit times that comfortably beat ocean freight while costing a fraction of air cargo rates.</p><h2>Why Rail?</h2><p>Rail sits uniquely in the middle: faster than sea (typically 12–16 days from China to Central Europe versus 30–40 days by sea), and dramatically cheaper than air (typically 60–80% less expensive per kilogram). This sweet spot has made rail particularly attractive for high-value electronics, automotive parts, pharmaceutical products, and fashion goods.</p><h2>Route Diversity</h2><p>The CR Express operates across three main corridors: the Northern Corridor through Russia and Belarus, the Central Corridor via Kazakhstan and the Caspian (the growing Middle Corridor), and the Southern Corridor through Central Asia, Iran, and Turkey. The rerouting away from Russia since 2022 has been one of the most significant shifts in the rail freight landscape.</p><h2>TransContinental's Rail Capability</h2><p>At TransContinental, we have been actively involved in the Europe-Asia rail corridor since its emergence as a commercially viable alternative to sea and air. We provide block train services, consolidated LCL rail solutions, and intermodal rail-sea and rail-road combinations tailored to each client's specific requirements.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s3",
    title: "Customs Clearance in a World of Changing Trade Rules",
    category: "Customs & Trade",
    created_date: "2026-01-05",
    read_time: "7 min read",
    image_url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    excerpt: "Getting customs clearance right has never been more important — or more complex.",
    content: `<h2>The Customs Clearance Challenge</h2><p>Customs clearance has always been one of the most operationally sensitive elements of international trade. A single error in a declaration — a misclassified tariff code, an incorrect valuation, a missing certificate of origin — can result in delays, fines, cargo seizure, or even criminal liability.</p><h2>The Tariff Code: Getting Classification Right</h2><p>The Harmonized System (HS) runs to over 5,000 six-digit commodity codes. Getting the classification right matters enormously — tariff rates, import duties, VAT, anti-dumping duties, and licensing requirements are all tied to the HS code. With tariff wars between major trading blocs, classification decisions have become increasingly strategic.</p><h2>Rules of Origin</h2><p>In a world of free trade agreements, the origin of goods can mean the difference between zero duty and a 20%+ tariff. The EU alone has FTAs with over 70 countries. But accessing these preferences requires proving origin — and that requires meticulous supply chain documentation.</p><h2>Working with a Trusted Customs Partner</h2><p>At TransContinental, our customs clearance team operates across multiple jurisdictions with deep expertise in tariff classification, preferential origin management, sanctions screening, and the rapidly evolving digital customs landscape. Getting customs right isn't just about compliance — it's a genuine competitive advantage.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s4",
    title: "Carbon Neutral Logistics: How the Freight Industry Is Confronting Its Climate Responsibility",
    category: "Sustainability",
    created_date: "2025-12-15",
    read_time: "8 min read",
    image_url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    excerpt: "The global logistics industry is responsible for approximately 8% of total global greenhouse gas emissions.",
    content: `<h2>The Scale of Logistics Emissions</h2><p>The global logistics industry is responsible for approximately 8% of total global greenhouse gas emissions. As governments, consumers, and investors apply increasing pressure to reduce these emissions, the freight industry faces an unavoidable reckoning with its climate responsibility.</p><h2>Modal Shift: The Single Most Impactful Lever</h2><p>The most powerful tool available to reduce logistics emissions is modal shift. Air Freight emits ~500–800g CO₂ per tonne-km; Road Freight ~60–100g; Rail Freight ~20–40g; and Sea Freight ~10–20g. A company that shifts even a fraction of its air freight to sea or rail can dramatically reduce its total logistics carbon footprint.</p><h2>Alternative Fuels</h2><p>Battery-electric trucks are commercially available for urban distribution. For ocean shipping, LNG serves as a transition fuel with longer-term bets on green ammonia and green methanol. Sustainable Aviation Fuel (SAF) can reduce lifecycle emissions by up to 80% compared to conventional jet fuel.</p><h2>TransContinental's Commitment</h2><p>At TransContinental, we offer our clients emissions reporting for all freight we manage, allow them to select lower-emission routing and modal options, and provide certified carbon offsetting for shipments where direct emission reduction is not yet achievable.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s5",
    title: "Commodity Trading in 2026: Navigating Volatility in Timber and Metals Markets",
    category: "Trading",
    created_date: "2025-11-28",
    read_time: "9 min read",
    image_url: "https://images.unsplash.com/photo-1565793979169-ee7c33d6a741?w=1200&q=80",
    excerpt: "Commodity markets in 2025 and 2026 are characterized by a particular intensity of volatility.",
    content: `<h2>A New Era of Commodity Volatility</h2><p>Commodity trading has always been cyclical. But the commodity markets of 2025 and 2026 are characterized by a particular intensity of volatility driven by geopolitics, the energy transition, and supply chain fragmentation.</p><h2>Timber Markets</h2><p>Russia's 2022 ban on log exports removed a significant source of softwood logs from the global market. The EU Deforestation Regulation (EUDR), in full effect since late 2024, has added significant compliance requirements. Companies with robust supply chain documentation and FSC/PEFC certified suppliers have a genuine competitive advantage.</p><h2>Metals Markets: The Energy Transition Supercycle</h2><p>The shift from fossil fuels to renewable energy requires vast quantities of metals. Copper demand from clean energy alone is expected to reach 4.7 million tonnes per year by 2030. Rare earth elements — essential for electric motors and wind turbines — have become strategically critical, with China controlling ~70% of global production.</p><h2>The Logistics of Commodity Trading</h2><p>At TransContinental, our combination of commodity trading expertise and integrated logistics capability allows us to offer clients a genuinely differentiated service — from source to destination, with full documentation and compliance management at every stage.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s6",
    title: "Air Freight in 2026: Capacity Crunch, E-Commerce Surge, and the Premium of Speed",
    category: "Air Freight",
    created_date: "2026-03-18",
    read_time: "7 min read",
    image_url: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=80",
    excerpt: "Air freight demand is outpacing belly capacity as e-commerce and pharma shipments reshape global air cargo networks.",
    content: `<h2>The Air Cargo Market in 2026</h2><p>The global air freight market in 2026 is navigating a tightening capacity environment driven by booming e-commerce cross-border volumes, pharmaceutical cold-chain demand, and the structural reduction in belly cargo capacity caused by the slow recovery of long-haul passenger routes.</p><h2>E-Commerce: The Structural Driver</h2><p>The rise of Asian e-commerce platforms shipping directly to consumers in Europe and North America has fundamentally reshaped air cargo flows. Platforms now account for a significant share of all lightweight express air shipments on transpacific and Asia-Europe routes. This demand is largely price-inelastic and time-sensitive, which has kept yields elevated.</p><h2>Pharmaceutical Cold Chain</h2><p>The COVID-19 pandemic permanently elevated the pharmaceutical industry's expectations of air freight. Temperature-controlled shipments of biologics, vaccines, and clinical trial materials now represent a premium, fast-growing segment. IATA's CEIV Pharma certification has become a baseline requirement for handling agents on major pharma lanes.</p><h2>What This Means for Shippers</h2><p>Shippers that rely on spot air freight are increasingly exposed to capacity spikes and rate volatility. Securing space via annual contracts with preferred carriers, working with experienced forwarders who have carrier relationships, and building flexibility into supply chains are the key strategies for managing air freight risk in 2026.</p><h2>TransContinental's Air Freight Capability</h2><p>Our air freight team maintains space allocations with leading all-cargo carriers and combination airlines on key trade lanes. Whether you need express next-day delivery or a cost-optimised deferred service, we provide the routing, documentation, customs pre-clearance, and door-to-door management that your time-sensitive cargo demands.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s7",
    title: "Project Logistics: Moving the Unmovable — Heavy Lift and Oversized Cargo Solutions",
    category: "Project Logistics",
    created_date: "2026-04-05",
    read_time: "8 min read",
    image_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    excerpt: "When conventional freight methods simply won't work, project logistics specialists step in to engineer bespoke transport solutions.",
    content: `<h2>What is Project Logistics?</h2><p>Project logistics — sometimes called heavy lift, out-of-gauge (OOG) or engineered transport — covers the movement of cargo that cannot be handled by conventional means. This includes power generation equipment, oil & gas modules, wind turbine components, mining machinery, and large industrial plant.</p><h2>The Planning Process</h2><p>Every project shipment begins with a detailed engineering survey. Weight, dimensions, centre of gravity, and fragility all inform the choice of transport mode, equipment, and routing. A single oversized transformer might require a multi-modal solution: sea freight on a heavy-lift vessel, river barge to an inland port, and a multi-axle hydraulic platform trailer for the final overland leg.</p><h2>Route Surveys and Permits</h2><p>Before an oversized load moves on public roads, a detailed route survey must be completed to identify low bridges, weak road surfaces, overhead power lines, and tight bends. In most jurisdictions, movement permits must be obtained from local and national transport authorities — a process that can take weeks or even months.</p><h2>Risk Management</h2><p>The insurance requirements for project cargo are significantly more complex than standard freight. Specialist marine and project cargo insurers assess each shipment individually, considering factors such as vessel age, route risk, handling equipment, and the shipper's claims history.</p><h2>TransContinental's Project Capability</h2><p>Our project logistics team has successfully delivered complex heavy-lift and OOG shipments across Africa, the Middle East, Central Asia, and Southeast Asia. We combine engineering expertise, established relationships with specialist carriers, and rigorous risk management to deliver your most challenging projects on time and within budget.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s8",
    title: "4PL Logistics: When Managing Your Supply Chain Needs a Supply Chain Manager",
    category: "Supply Chain",
    created_date: "2026-05-12",
    read_time: "6 min read",
    image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    excerpt: "The 4PL model offers companies a single point of accountability across their entire logistics network — from carrier selection to last-mile delivery.",
    content: `<h2>3PL vs 4PL: Understanding the Difference</h2><p>A third-party logistics provider (3PL) executes specific logistics functions — warehousing, transportation, customs clearance — on behalf of a shipper. A fourth-party logistics provider (4PL) takes a step back: rather than executing logistics itself, a 4PL designs, manages, and optimises the entire supply chain, coordinating multiple 3PLs, technology platforms, and service providers under a single contract and point of accountability.</p><h2>Why Companies Choose 4PL</h2><p>For companies with complex, multi-modal, multi-geography supply chains, managing a portfolio of 3PLs becomes a significant management overhead. The 4PL model transfers this complexity to a specialist provider with the technology, expertise, and network to drive continuous improvement. The result is typically lower total logistics cost, better visibility, and more agile responses to disruption.</p><h2>Technology at the Core</h2><p>Modern 4PL is underpinned by supply chain visibility platforms, transport management systems (TMS), warehouse management systems (WMS), and increasingly, AI-powered demand forecasting and dynamic routing tools. The 4PL provider integrates these systems across the entire network, giving the shipper a single dashboard view of their global supply chain.</p><h2>TransContinental as Your 4PL Partner</h2><p>Our 4PL capability is built on years of experience managing complex multi-modal supply chains for clients in the energy, manufacturing, retail, and commodities sectors. We bring carrier-agnostic network design, technology integration, and dedicated supply chain management teams to deliver measurable improvements in cost, lead time, and resilience.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
  {
    id: "s9",
    title: "Domestic & Coastal Shipping: The Unsung Backbone of National Supply Chains",
    category: "Domestic Logistics",
    created_date: "2026-06-02",
    read_time: "5 min read",
    image_url: "https://images.unsplash.com/photo-1566422972567-39dbc8b67b13?w=1200&q=80",
    excerpt: "Coastal and domestic shipping solutions are increasingly critical for reducing congestion and emissions in national logistics networks.",
    content: `<h2>Why Domestic Shipping Matters</h2><p>While international freight commands most of the headlines, domestic and coastal shipping forms the backbone of national supply chains. Short-sea shipping, river barges, and coastal feeder services move vast quantities of goods between ports within a single country or region, often at a fraction of the cost and carbon footprint of road or rail alternatives.</p><h2>The Environmental Advantage</h2><p>Coastal shipping produces significantly lower emissions per tonne-kilometer than road transport. As governments worldwide introduce carbon pricing and tighten emissions standards, coastal shipping is emerging as a strategic alternative for moving bulk commodities, construction materials, and containerized goods along coastal corridors.</p><h2>Multimodal Integration</h2><p>The real power of domestic shipping lies in its integration with other modes. A typical domestic supply chain might combine deep-sea import at a major hub port, coastal feeder to a regional terminal, and final delivery by truck — each leg optimized for cost, speed, and environmental impact.</p><h2>TransContinental's Domestic Capability</h2><p>Our domestic and coastal shipping services connect major economic corridors with reliable schedules and flexible capacity. Whether you need bulk cargo moved along the coast or containerized goods delivered to regional distribution centers, we provide the routing, documentation, and operational management to keep your domestic supply chain running smoothly.</p>`,
    published: true,
    author: "TransContinental Editorial"
  },
];

function PostCard({ post, onClick }) {
  const dateStr = post.created_date ? new Date(post.created_date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";
  return (
    <div onClick={onClick} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-cyan-200 transition-all cursor-pointer group">
      <div className="h-44 overflow-hidden bg-gray-100">
        {post.image_url && <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
      </div>
      <div className="p-5">
        <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">{post.category || "General"}</span>
        <h3 className="font-bold text-gray-900 text-sm mt-3 leading-tight group-hover:text-cyan-600 transition-colors line-clamp-3">{post.title}</h3>
        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
          {dateStr && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{dateStr}</span>}
          {post.read_time && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read_time}</span>}
        </div>
        <span className="inline-flex items-center gap-1.5 text-cyan-600 text-xs font-medium mt-4 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-3.5 h-3.5" /></span>
      </div>
    </div>
  );
}

function WritePostModal({ onClose, onSaved }) {
  const [form, setForm] = useState({ title: "", category: "", excerpt: "", content: "", image_url: "", read_time: "", author: "" });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, image_url: file_url }));
    setUploading(false);
  };

  const handleSave = async () => {
    if (!form.title || !form.content) return;
    setSaving(true);
    await base44.entities.BlogPost.create({ ...form, published: true });
    setSaving(false);
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="text-lg font-bold text-gray-900">Write New Blog Post</h2>
          <button onClick={onClose}><X className="w-5 h-5 text-gray-400 hover:text-gray-600" /></button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Title *</label>
            <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Article title..." />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Category</label>
              <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} placeholder="e.g. Sea Freight" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Read Time</label>
              <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.read_time} onChange={e => setForm(f => ({ ...f, read_time: e.target.value }))} placeholder="e.g. 5 min read" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Author</label>
            <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400" value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Excerpt</label>
            <textarea className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400 h-20 resize-none" value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Short description..." />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Cover Image</label>
            <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-cyan-400 transition-colors">
              {uploading ? <Loader2 className="w-4 h-4 animate-spin text-cyan-500" /> : <Upload className="w-4 h-4 text-gray-400" />}
              <span className="text-sm text-gray-500">{form.image_url ? "Image uploaded ✓" : "Upload cover image"}</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
            </label>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Content * (HTML supported)</label>
            <textarea className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-400 h-48 resize-none font-mono" value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} placeholder="Write your article here. You can use HTML tags like <h2>, <p>, <ul>, <li>, <strong>..." />
          </div>
          <button onClick={handleSave} disabled={saving || !form.title || !form.content} className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-white py-3 rounded-xl font-semibold transition-all">
            {saving ? "Publishing..." : "Publish Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const navigate = useNavigate();
  const [dbPosts, setDbPosts] = useState([]);
  const [showWrite, setShowWrite] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const goToPost = (id) => navigate(`${createPageUrl("BlogPostPage")}?id=${id}`);

  useEffect(() => {
    loadPosts();
    base44.auth.isAuthenticated().then(async auth => {
      if (auth) { const u = await base44.auth.me(); setIsAdmin(u?.role === "admin"); }
    });
  }, []);

  const loadPosts = async () => {
    const posts = await base44.entities.BlogPost.filter({ published: true }, "-created_date");
    setDbPosts(posts);
  };

  const allPosts = [...STATIC_POSTS, ...dbPosts];
  const [featured, ...rest] = allPosts;

  return (
    <div>
      <PageHero title="Industry Blog" subtitle="Expert insights on global logistics, freight, commodity trading, and supply chain trends." image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80" />
      {showWrite && <WritePostModal onClose={() => setShowWrite(false)} onSaved={() => { setShowWrite(false); loadPosts(); }} />}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {isAdmin && (
            <div className="flex justify-end mb-8">
              <button onClick={() => setShowWrite(true)} className="flex items-center gap-2 bg-[#111827] hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                <Plus className="w-4 h-4" /> Write New Article
              </button>
            </div>
          )}
          {/* Featured */}
          {featured && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-16 cursor-pointer group" onClick={() => goToPost(featured.id)}>
              <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="h-64 lg:h-auto overflow-hidden bg-gray-100">
                  {featured.image_url && <img src={featured.image_url} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-4"><Tag className="w-3 h-3" />{featured.category || "General"}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors leading-tight">{featured.title}</h2>
                  <p className="text-gray-500 mt-4 leading-relaxed">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm mt-6 group-hover:gap-3 transition-all">Read Full Article <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </motion.div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <PostCard post={post} onClick={() => goToPost(post.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}