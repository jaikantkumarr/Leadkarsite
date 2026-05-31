import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

const plans = [
  {
    name: "Starter",
    tagline: "For businesses starting their digital journey",
    price: "Custom",
    priceNote: "Based on your needs",
    popular: false,
    features: [
      "Google Business Profile setup & optimization",
      "Basic on-page SEO",
      "Monthly performance report",
      "Keyword research (up to 20 keywords)",
      "Local listing citations",
      "Email support",
    ],
    cta: "Get a Quote",
    color: "border-border",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale their lead generation",
    price: "Custom",
    priceNote: "Most popular choice",
    popular: true,
    features: [
      "Everything in Starter",
      "Google Ads management (Search + Display)",
      "Meta Ads management (Facebook + Instagram)",
      "Custom landing page design",
      "Lead tracking & conversion setup",
      "Retargeting campaigns",
      "WhatsApp lead notifications",
      "Bi-weekly performance calls",
    ],
    cta: "Get a Quote",
    color: "border-primary",
    highlight: true,
  },
  {
    name: "Premium",
    tagline: "For businesses that want complete digital dominance",
    price: "Custom",
    priceNote: "Full-service package",
    popular: false,
    features: [
      "Everything in Growth",
      "Complete SEO campaign (On-page + Off-page)",
      "Advanced Google Ads (Shopping + YouTube)",
      "CRM setup & integration",
      "Lead automation workflows",
      "WhatsApp marketing setup",
      "Monthly strategy calls with senior team",
      "Quarterly business growth review",
      "Priority support & dedicated account manager",
    ],
    cta: "Get a Quote",
    color: "border-border",
    highlight: false,
  },
];

const faqs = [
  { q: "Are there any setup fees?", a: "No hidden setup fees. Our pricing is straightforward and all costs are discussed upfront during the free consultation." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. We work with you to find the right fit as your business grows." },
  { q: "What is the minimum contract period?", a: "We recommend a 3-month minimum for digital marketing campaigns to see meaningful results, but we offer flexible terms." },
  { q: "Do you charge for ad spend separately?", a: "Yes. Our management fee is separate from your ad spend budget. We help you allocate your ad budget for maximum ROI." },
];

export default function Pricing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const plansInView = useInView(plansRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen flex flex-col bg-background" data-testid="page-pricing">
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
              <Badge variant="secondary" className="mb-4">Pricing</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
                Flexible Plans for{" "}
                <span className="text-primary">Every Stage of Growth</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                No hidden fees. No long-term lock-ins. Just results-driven marketing that grows with your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 pb-24" ref={plansRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={plansInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={plan.popular ? "lg:-mt-4 lg:mb-4" : ""}
                  data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
                >
                  <Card className={`h-full relative ${plan.highlight ? "border-primary shadow-xl shadow-primary/10" : "border-border"} transition-all`}>
                    {plan.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                          <Zap size={12} fill="currentColor" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    <CardHeader className="pb-0 pt-8 px-8">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold font-heading">{plan.name}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{plan.tagline}</p>
                      </div>
                      <div className="mb-6">
                        <div className="text-4xl font-bold font-heading text-foreground">
                          {plan.price === "Custom" ? (
                            <span>Custom <span className="text-lg font-normal text-muted-foreground">pricing</span></span>
                          ) : (
                            plan.price
                          )}
                        </div>
                        <p className="text-sm text-primary font-medium mt-1">{plan.priceNote}</p>
                      </div>
                      <Link href="/contact">
                        <Button
                          className={`w-full ${plan.highlight ? "" : "variant-outline"}`}
                          variant={plan.highlight ? "default" : "outline"}
                          data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                        >
                          {plan.cta}
                          <ArrowRight size={14} className="ml-1.5" />
                        </Button>
                      </Link>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 pt-6">
                      <div className="border-t border-border pt-6">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4">What's included</p>
                        <ul className="space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Reassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={plansInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground">
                All plans include a <span className="text-foreground font-medium">free 30-minute consultation</span> before you commit to anything.
                <Link href="/contact">
                  <span className="text-primary font-medium cursor-pointer ml-1 hover:underline">Book yours now.</span>
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-16 pb-24 bg-muted/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
                Pricing <span className="text-primary">FAQs</span>
              </h2>
              <p className="text-muted-foreground">Common questions about how our pricing works.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
