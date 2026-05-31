import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "How long does it take to see results from Google Ads?",
    a: "Google Ads can start generating leads within the first week of going live. However, optimal performance is typically achieved after 30–60 days of data collection, testing, and optimization. We continuously refine your campaigns to improve ROI over time.",
  },
  {
    q: "What is the minimum budget needed for Google Ads?",
    a: "We recommend a minimum ad spend of ₹15,000–₹20,000/month to see meaningful results. The ideal budget depends on your industry, competition, and goals. We'll help you allocate your budget efficiently for maximum ROI.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. You can typically expect to see initial improvements in rankings within 3–4 months, with significant traffic growth in 6–12 months. Local SEO can show faster results, often within 4–8 weeks.",
  },
  {
    q: "What is Local SEO and do I need it?",
    a: "Local SEO optimizes your online presence to attract customers in your geographic area. If you serve customers in a specific city or region, Local SEO is essential. It helps you appear in Google Maps, local search results, and 'near me' searches.",
  },
  {
    q: "What's the difference between Facebook Ads and Google Ads?",
    a: "Google Ads target people actively searching for your product or service (intent-based). Meta Ads (Facebook/Instagram) target people based on interests and demographics — excellent for brand awareness and generating demand. Both work best together.",
  },
  {
    q: "Do you offer retargeting campaigns?",
    a: "Yes. Retargeting is one of the most cost-effective strategies we use. We set up pixel-based retargeting on both Google and Meta to re-engage visitors who showed interest but didn't convert the first time.",
  },
  {
    q: "How much does website development cost?",
    a: "Our website packages vary based on complexity. A professional business website starts from ₹25,000, a landing page from ₹10,000, and e-commerce websites from ₹50,000. Every site is built for speed, conversion, and SEO from day one.",
  },
  {
    q: "What is CRM Integration and why does my business need it?",
    a: "CRM (Customer Relationship Management) integration connects your lead sources to a centralized system where you can track, manage, and follow up with every lead automatically. It prevents leads from slipping through the cracks and increases conversion rates significantly.",
  },
  {
    q: "Do you provide monthly reports?",
    a: "Absolutely. Every client receives a detailed monthly performance report covering campaign metrics, lead volume, cost per lead, website traffic, keyword rankings, and actionable recommendations for the next month.",
  },
  {
    q: "How do I get started with Leadkar?",
    a: "Simply fill out the contact form or call/WhatsApp us at +91 7808740233. We'll schedule a free 30-minute consultation to understand your business goals and recommend the right strategy for you.",
  },
  {
    q: "Can you help with WhatsApp Marketing for my business?",
    a: "Yes! We set up WhatsApp Business accounts, build automated message flows for lead nurturing, and create bulk messaging campaigns for announcements, offers, and follow-ups. WhatsApp has one of the highest open rates of any marketing channel.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Absolutely. We specialize in helping local businesses, startups, and SMEs grow without enterprise-level budgets. Our Starter plan is specifically designed for businesses just starting their digital marketing journey.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across all industries including real estate, healthcare, education, retail, e-commerce, restaurants, professional services, manufacturing, and more. Our strategies are always tailored to your specific industry and target audience.",
  },
  {
    q: "How do you track the quality of leads generated?",
    a: "We implement conversion tracking on all campaigns and work with you to define what constitutes a 'qualified lead.' We track form submissions, phone calls, WhatsApp messages, and purchases to measure true business impact — not just clicks.",
  },
  {
    q: "What is Google Business Profile and how can it help?",
    a: "Google Business Profile (formerly Google My Business) is your free business listing on Google. An optimized profile significantly increases your visibility in local search and Google Maps, helping nearby customers find and contact you easily.",
  },
  {
    q: "Do you offer one-time projects or only ongoing retainers?",
    a: "We offer both. Website development and one-time SEO audits are project-based. Google Ads, Meta Ads, SEO, and Lead Generation work best on monthly retainers for consistent optimization and results.",
  },
  {
    q: "How do Meta Ads generate leads for B2B businesses?",
    a: "Meta's Lead Ads allow B2B businesses to collect contact information directly within the platform. Combined with LinkedIn-style professional targeting options on Facebook, we can effectively reach decision-makers and business owners.",
  },
  {
    q: "What is a sales funnel and do you build them?",
    a: "A sales funnel is the journey from a stranger discovering your business to becoming a paying customer. Yes, we build complete funnels including landing pages, lead magnets, email sequences, retargeting campaigns, and CRM automations.",
  },
  {
    q: "Is my business too small for digital marketing?",
    a: "No business is too small. In fact, digital marketing is the great equalizer — it allows small businesses to compete with large corporations. Our Starter plan is specifically designed for businesses beginning their growth journey.",
  },
  {
    q: "Can I see examples of campaigns you've run?",
    a: "We share case studies and relevant industry examples during our free consultation. Due to client confidentiality, we don't publicly display specific campaign data, but we're happy to walk you through results in detail on a call.",
  },
];

interface FAQProps {
  limit?: number;
}

export default function FAQ({ limit }: FAQProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-24 bg-muted/20" ref={ref} data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know about growing your business with Leadkar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3" data-testid="faq-accordion">
            {displayedFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-primary/30 transition-colors"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
