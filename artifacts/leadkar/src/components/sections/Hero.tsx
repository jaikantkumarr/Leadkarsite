import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const floatingBadges = [
  { icon: TrendingUp, text: "1M+ Leads Generated", x: "left-4 top-1/3", delay: 0.6 },
  { icon: Users, text: "100+ Clients Served", x: "right-4 top-1/4", delay: 0.8 },
  { icon: Target, text: "99% Satisfaction", x: "right-6 bottom-1/4", delay: 1.0 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" data-testid="hero-section">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-600/10 dark:from-primary/10 dark:to-purple-600/5" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating cards - hidden on mobile */}
      {floatingBadges.map(({ icon: Icon, text, x, delay }) => (
        <motion.div
          key={text}
          className={`absolute hidden lg:flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-lg ${x}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ delay, duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <Icon size={16} className="text-primary" />
          <span className="text-xs font-medium text-foreground">{text}</span>
        </motion.div>
      ))}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium" data-testid="hero-badge">
            India's Trusted Digital Growth Partner
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="hero-headline"
        >
          Get More{" "}
          <span className="relative inline-block">
            <span className="text-primary">Leads</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/40 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </span>{" "}
          &amp; Grow Your
          <br className="hidden sm:block" />
          {" "}Business Faster
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="hero-subheadline"
        >
          We help businesses generate quality leads through Google Ads, Meta Ads, SEO, Website Development, and Business Automation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              data-testid="hero-cta-primary"
            >
              Get Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold"
              data-testid="hero-cta-secondary"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {["Google Partner", "Meta Business Partner", "ISO Certified", "Trusted by 100+ Businesses"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
