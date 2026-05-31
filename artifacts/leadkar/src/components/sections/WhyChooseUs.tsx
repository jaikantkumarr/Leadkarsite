import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, DollarSign, Headphones, BarChart3, TrendingUp, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    icon: Target,
    title: "Result Driven Strategy",
    description: "Every campaign is built around your specific business goals. We measure success by leads generated and revenue grown — not vanity metrics.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Enterprise-level marketing without enterprise-level costs. Flexible plans designed for businesses at every stage of growth.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "A dedicated account manager for your business. Direct access, fast responses, and proactive communication — always.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "No black boxes. Monthly reports showing exactly where your money goes, what's working, and the ROI on every campaign.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: TrendingUp,
    title: "ROI Focused Campaigns",
    description: "We optimize every rupee of your ad spend to maximize return. Continuous A/B testing, audience refinement, and conversion optimization.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: Cpu,
    title: "Latest Marketing Technology",
    description: "AI-powered targeting, advanced CRM integrations, and marketing automation tools used by the world's top brands.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-muted/30" ref={ref} data-testid="why-choose-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">Why Leadkar</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Why Businesses Choose{" "}
            <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not just another agency. We're your growth partner, committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              data-testid={`why-card-${i}`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${reason.bg} ${reason.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
