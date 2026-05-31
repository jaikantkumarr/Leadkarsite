import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref} data-testid="cta-section">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Limited Spots Available This Month
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Ready to Grow Your{" "}
            <span className="text-primary">Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Book a free 30-minute consultation. We'll analyze your business, identify growth opportunities, and present a custom strategy — at no cost.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
                data-testid="cta-book-button"
              >
                Book Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+917808740233">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold"
                data-testid="cta-call-button"
              >
                <Phone size={18} className="mr-2" />
                Call Now: +91 78087 40233
              </Button>
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. No commitments. Just a conversation about your growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
