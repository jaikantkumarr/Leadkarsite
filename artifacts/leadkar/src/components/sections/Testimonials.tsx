import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner",
    company: "Sharma Electronics, Jaipur",
    text: "Leadkar transformed our local business. Within 3 months of their Google Ads campaign, our monthly leads increased by 400%. Best investment we've made.",
    stars: 5,
    avatar: "RS",
    service: "Google Ads",
  },
  {
    name: "Priya Mehta",
    role: "Founder",
    company: "PM Realty, Mumbai",
    text: "Our real estate business generates 50+ qualified leads every month from Meta Ads. The quality of leads is exceptional — people who actually want to buy.",
    stars: 5,
    avatar: "PM",
    service: "Meta Ads",
  },
  {
    name: "Anil Verma",
    role: "Director",
    company: "Verma Academy, Delhi",
    text: "SEO results are outstanding. Our coaching center now ranks #1 for all major keywords in Delhi. Inquiries have doubled in 6 months.",
    stars: 5,
    avatar: "AV",
    service: "SEO",
  },
  {
    name: "Sunita Reddy",
    role: "Owner",
    company: "Reddy Clinic, Hyderabad",
    text: "They built our website and set up Google Business Profile. Patient inquiries increased by 300%. The team is professional, responsive, and genuinely invested.",
    stars: 5,
    avatar: "SR",
    service: "Website + GBP",
  },
  {
    name: "Vikram Joshi",
    role: "Co-Founder",
    company: "Joshi Exports, Surat",
    text: "Our e-commerce store's revenue doubled after Leadkar took over our digital marketing. Clear reporting, proactive communication — they deliver what they promise.",
    stars: 5,
    avatar: "VJ",
    service: "E-commerce Growth",
  },
  {
    name: "Kavya Nair",
    role: "Owner",
    company: "Nair Boutique, Bengaluru",
    text: "The WhatsApp marketing automation they set up for us is incredible. We close 40% of our leads directly through WhatsApp. Revenue grew 5x in one year.",
    stars: 5,
    avatar: "KN",
    service: "WhatsApp Marketing",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background" ref={ref} data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">Client Stories</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Real Businesses,{" "}
            <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-testid={`testimonial-card-${i}`}
            >
              <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Stars count={t.stars} />
                    <Quote size={20} className="text-primary/30" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading shrink-0">
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.role}, {t.company}</p>
                    </div>
                    <Badge variant="secondary" className="ml-auto text-xs shrink-0">{t.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
