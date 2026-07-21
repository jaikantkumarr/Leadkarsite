import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Target, Eye, Rocket, Users, Award, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    icon: Target,
    title: "Results Above All",
    description: "Every strategy is measured by one thing: did it grow your business? Vanity metrics don't interest us.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your business goals drive every decision we make. We act as an extension of your team, not just a vendor.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Award,
    title: "Transparency",
    description: "No hidden fees, no confusing reports. Clear communication and honest results — always.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We stay ahead of algorithm changes and platform updates so your campaigns never fall behind.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: Globe,
    title: "Accessible Growth",
    description: "World-class marketing strategies shouldn't be reserved for large corporations. We democratize growth.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Eye,
    title: "Data-Driven",
    description: "Every recommendation is backed by real data. We test, measure, and optimize — not guess.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

const team = [
  {
    name: "Jaikant Kumar",
    role: "Founder & CEO",
    expertise: "Google Ads, Meta Ads & Growth Strategy",
    avatar: "JK",
    color: "bg-blue-400/10 text-blue-400",
  },
  {
    name: "Mukul Ranjan",
    role: "Sales Head",
    expertise: "Business Development, Client Acquisition & Revenue Growth",
    avatar: "MR",
    color: "bg-violet-400/10 text-violet-400",
  },
  {
    name: "Rohit Kumar",
    role: "SEO Director",
    expertise: "Technical & SEO",
    avatar: "RK",
    color: "bg-green-400/10 text-green-400",
  },
  {
    name: "Meena Sharma",
    role: "Web Development Lead",
    expertise: "Conversion-Focused Design & Dev",
    avatar: "MS",
    color: "bg-amber-400/10 text-amber-400",
  },
];

function SectionRef({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background" data-testid="page-about">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/5" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <SectionRef>
              <Badge variant="secondary" className="mb-4">About Leadkar</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
                We're on a Mission to{" "}
                <span className="text-primary">Grow India's Businesses</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Leadkar is a digital marketing agency built for the next generation of Indian businesses. We combine data-driven strategies with deep local market knowledge to deliver results that matter.
              </p>
            </SectionRef>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SectionRef>
                <Badge variant="secondary" className="mb-4">Our Story</Badge>
                <h2 className="text-3xl font-bold font-heading mb-6">
                  Built for Businesses That Want to Win
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Leadkar was founded with one simple observation: most small and medium businesses in India have incredible products and services, but struggle to find the right customers online.
                  </p>
                  <p>
                    We saw agencies charging huge fees for poor results, and businesses left confused about where their marketing budget was going. We decided to build something different — an agency that prioritizes results, transparency, and genuine partnership.
                  </p>
                  <p>
                    Today, we've helped 100+ businesses across India generate over 1 million qualified leads, manage 500+ campaigns, and achieve real, measurable growth.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button data-testid="about-cta">Start Your Growth Journey</Button>
                  </Link>
                </div>
              </SectionRef>

              {/* Mission & Vision cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    label: "Our Mission",
                    text: "To help businesses grow online through affordable and effective marketing solutions that deliver measurable, real-world results.",
                    color: "text-primary",
                    bg: "bg-primary/10",
                  },
                  {
                    icon: Eye,
                    label: "Our Vision",
                    text: "To become India's most trusted digital growth partner — the agency that businesses credit for transforming their revenue.",
                    color: "text-violet-400",
                    bg: "bg-violet-400/10",
                  },
                ].map(({ icon: Icon, label, text, color, bg }) => {
                  const ref = useRef<HTMLDivElement>(null);
                  const inView = useInView(ref, { once: true });
                  return (
                    <motion.div
                      key={label}
                      ref={ref}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5 }}
                      className="p-6 rounded-2xl bg-card border border-border"
                      data-testid={`about-${label.toLowerCase().replace(" ", "-")}`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bg} ${color} mb-4`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold font-heading mb-2">{label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionRef className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Values</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
                The Principles That{" "}
                <span className="text-primary">Drive Us</span>
              </h2>
            </SectionRef>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => {
                const ref = useRef<HTMLDivElement>(null);
                const inView = useInView(ref, { once: true, margin: "-50px" });
                return (
                  <motion.div
                    key={value.title}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                    data-testid={`value-card-${i}`}
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${value.bg} ${value.color} mb-4`}>
                      <value.icon size={18} />
                    </div>
                    <h3 className="font-semibold font-heading mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionRef className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Team</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
                Meet the{" "}
                <span className="text-primary">Growth Experts</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Experienced specialists who are obsessed with results.
              </p>
            </SectionRef>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => {
                const ref = useRef<HTMLDivElement>(null);
                const inView = useInView(ref, { once: true, margin: "-50px" });
                return (
                  <motion.div
                    key={member.name}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                    data-testid={`team-card-${i}`}
                  >
                    <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full ${member.color} text-xl font-bold font-heading mb-4`}>
                      {member.avatar}
                    </div>
                    <h3 className="font-semibold font-heading">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-2">{member.expertise}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
