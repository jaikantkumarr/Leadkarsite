import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  FaGoogle, FaFacebook, FaChartLine, FaCode,
  FaMapMarkerAlt, FaBullhorn, FaWhatsapp, FaCogs
} from "react-icons/fa";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    icon: FaGoogle,
    title: "Google Ads Management",
    description: "Capture high-intent buyers exactly when they're searching for your products or services. Our certified Google Ads specialists build and optimize campaigns that maximize your return on every rupee spent.",
    subServices: [
      "Search Ads — Target people actively searching for your services",
      "Display Ads — Visual banner campaigns across the web",
      "Shopping Ads — Showcase products directly in search results",
      "YouTube Ads — Video advertising to reach and engage audiences",
      "Lead Generation Campaigns — Purpose-built campaigns for lead capture",
      "Conversion Tracking — Full attribution from click to customer",
    ],
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    badge: "Most In-Demand",
  },
  {
    icon: FaFacebook,
    title: "Meta Ads Management",
    description: "Reach your ideal customers on Facebook and Instagram with laser-targeted campaigns. We build awareness, generate leads, and drive sales through Meta's powerful advertising ecosystem.",
    subServices: [
      "Facebook Ads — Reach billions of users with precision targeting",
      "Instagram Ads — Visual-first campaigns for product and brand promotion",
      "Retargeting Campaigns — Re-engage visitors who didn't convert",
      "Lead Generation — Collect leads directly within the platform",
      "Sales Campaigns — Drive direct purchases and conversions",
    ],
    color: "from-indigo-500/20 to-indigo-600/5",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-400/10",
    badge: null,
  },
  {
    icon: FaChartLine,
    title: "SEO Services",
    description: "Build sustainable organic visibility that drives traffic 24/7 without ongoing ad spend. Our comprehensive SEO approach covers every aspect of search engine optimization for lasting results.",
    subServices: [
      "Local SEO — Dominate search results in your city or region",
      "Technical SEO — Fix crawlability, speed, and indexing issues",
      "On-Page SEO — Optimize content, meta tags, and page structure",
      "Off-Page SEO — Build authority through quality link acquisition",
      "Keyword Research — Find the exact terms your customers search",
      "Competitor Analysis — Understand and outrank your competition",
    ],
    color: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-400",
    iconBg: "bg-green-400/10",
    badge: null,
  },
  {
    icon: FaCode,
    title: "Website Development",
    description: "Your website is your #1 sales tool. We build fast, mobile-responsive, SEO-optimized websites designed to convert visitors into leads and customers from day one.",
    subServices: [
      "Business Website — Professional multi-page websites for your brand",
      "Landing Page — High-converting single pages for campaigns",
      "E-commerce Website — Full online stores with payment integration",
      "Portfolio Website — Showcase your work and attract clients",
      "Custom Development — Tailored solutions for unique requirements",
    ],
    color: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    badge: null,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Google Business Profile",
    description: "Your Google Business Profile is often the first thing customers see. We optimize it to maximize your visibility in local search and Google Maps, driving more calls and visits.",
    subServices: [
      "Profile Setup — Complete and accurate profile creation",
      "Verification Support — Navigate Google's verification process",
      "Optimization — Photos, posts, Q&A, and attribute optimization",
      "Local Ranking Improvement — Strategies to rank higher in Maps",
      "Review Management — Respond to reviews and build reputation",
    ],
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    badge: null,
  },
  {
    icon: FaBullhorn,
    title: "Lead Generation",
    description: "End-to-end lead generation systems that attract, capture, qualify, and nurture prospects automatically — so your sales team only talks to people who are ready to buy.",
    subServices: [
      "Landing Pages — Conversion-optimized pages for lead capture",
      "Funnel Building — Multi-step funnels that nurture and convert",
      "CRM Integration — Connect your leads to your sales workflow",
      "Lead Automation — Automated qualification and follow-up",
    ],
    color: "from-rose-500/20 to-rose-600/5",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-400/10",
    badge: null,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Marketing",
    description: "WhatsApp has 95%+ open rates — higher than email or SMS. We help you leverage this channel for lead nurturing, customer support, and promotional campaigns.",
    subServices: [
      "WhatsApp Business Setup — Professional account configuration",
      "Automation — Set up automated responses and drip sequences",
      "Bulk Messaging — Promotional and transactional broadcasts",
      "Customer Support Integration — Handle inquiries at scale",
    ],
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    badge: null,
  },
  {
    icon: FaCogs,
    title: "CRM Solutions",
    description: "Stop losing leads in spreadsheets. We implement and configure CRM systems that give you full visibility into your pipeline, automate follow-ups, and help your team close more deals.",
    subServices: [
      "Lead Management — Capture and organize every lead automatically",
      "Customer Tracking — Monitor every interaction and touchpoint",
      "Sales Pipeline — Visual pipeline from lead to closed deal",
      "Automated Follow-up — Timely automated messages to nurture leads",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    badge: null,
  },
];

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${svc.color} p-8`}
      data-testid={`service-detail-card-${index}`}
    >
      {svc.badge && (
        <div className="absolute top-4 right-4">
          <Badge>{svc.badge}</Badge>
        </div>
      )}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${svc.iconBg} ${svc.iconColor} mb-5`}>
        <svc.icon size={26} />
      </div>
      <h3 className="text-2xl font-bold font-heading mb-3">{svc.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{svc.description}</p>
      <ul className="space-y-2.5">
        {svc.subServices.map((sub) => (
          <li key={sub} className="flex items-start gap-3 text-sm text-muted-foreground">
            <CheckCircle2 size={16} className={`${svc.iconColor} mt-0.5 shrink-0`} />
            <span>{sub}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/contact">
          <Button variant="outline" size="sm" className="group">
            Get a Quote
            <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background" data-testid="page-services">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background relative overflow-hidden" ref={heroRef}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">Our Services</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
                Everything You Need to{" "}
                <span className="text-primary">Dominate Online</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From targeted ads to complete digital ecosystems — every service we offer is engineered to generate more leads and grow your revenue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((svc, i) => (
                <ServiceCard key={svc.title} svc={svc} index={i} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
