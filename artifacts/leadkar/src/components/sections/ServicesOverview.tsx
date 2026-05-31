import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGoogle, FaFacebook, FaChartLine, FaCode, FaMapMarkerAlt, FaBullhorn } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: FaGoogle,
    title: "Google Ads Management",
    description: "Search, Display, Shopping, YouTube ads with precise targeting to capture high-intent buyers ready to convert.",
    badge: "Most Popular",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
  },
  {
    icon: FaFacebook,
    title: "Meta Ads Management",
    description: "Facebook & Instagram campaigns that reach your ideal customers through powerful audience targeting.",
    badge: null,
    color: "from-indigo-500/20 to-indigo-600/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: FaChartLine,
    title: "SEO Services",
    description: "Local SEO, technical optimization, and content strategy to dominate search rankings long-term.",
    badge: null,
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
  },
  {
    icon: FaCode,
    title: "Website Development",
    description: "High-converting business websites, landing pages, and e-commerce stores built for results.",
    badge: null,
    color: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-400",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Google Business Profile",
    description: "Setup, verification, and optimization to improve your local presence and search rankings.",
    badge: null,
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
  },
  {
    icon: FaBullhorn,
    title: "Lead Generation",
    description: "End-to-end lead funnels with landing pages, CRM integration, and automated follow-up sequences.",
    badge: null,
    color: "from-rose-500/20 to-rose-600/10",
    iconColor: "text-rose-400",
  },
];

export default function ServicesOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background" ref={ref} data-testid="services-overview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">What We Do</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Services Built to{" "}
            <span className="text-primary">Generate Leads</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every service is engineered around one goal: delivering measurable business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-testid={`service-card-${i}`}
            >
              <Card className="group h-full relative overflow-hidden border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-default">
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardContent className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-muted ${svc.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <svc.icon size={22} />
                    </div>
                    {svc.badge && (
                      <Badge className="text-xs">{svc.badge}</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold font-heading mb-2 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer" data-testid="services-view-all">
              View All Services
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
