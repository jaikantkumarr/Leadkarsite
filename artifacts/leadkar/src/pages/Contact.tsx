import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().min(10, "Enter a valid mobile number").max(15, "Mobile number is too long"),
  email: z.string().email("Enter a valid email address"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const services = [
  "Google Ads Management",
  "Meta Ads Management",
  "SEO Services",
  "Website Development",
  "Google Business Profile",
  "Lead Generation",
  "WhatsApp Marketing",
  "CRM Solutions",
  "Complete Digital Marketing Package",
  "Not Sure — Need Consultation",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "leadkar.in@gmail.com",
    href: "mailto:leadkar.in@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7840033212",
    href: "tel:+917840033212",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: FaWhatsapp as React.ElementType,
    label: "WhatsApp",
    value: "+91 7840033212",
    href: "https://wa.me/917840033212",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India — Serving businesses nationwide",
    href: "#",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll contact you within 24 hours.",
    });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background" data-testid="page-contact">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
                Let's Grow Your{" "}
                <span className="text-primary">Business Together</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book a free 30-minute consultation. We'll discuss your goals, analyze your current setup, and present a custom growth strategy — no commitment required.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact info */}
              <div className="lg:col-span-2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>

                  <div className="space-y-4">
                    {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                        data-testid={`contact-info-${label.toLowerCase().replace(" ", "-")}`}
                      >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${bg} ${color} shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                          <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Working hours */}
                  <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold font-heading mb-3 text-primary">Working Hours</h3>
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday – Saturday</span>
                        <span className="text-foreground font-medium">9:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-foreground font-medium">10:00 AM – 4:00 PM</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      WhatsApp support available 7 days a week
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3" ref={formRef}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold font-heading mb-2">Send Us a Message</h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          className="mt-1.5"
                          data-testid="input-name"
                          {...register("name")}
                        />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="mobile" className="text-sm font-medium">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          placeholder="+91 9876543210"
                          className="mt-1.5"
                          data-testid="input-mobile"
                          {...register("mobile")}
                        />
                        {errors.mobile && <p className="text-xs text-destructive mt-1">{errors.mobile.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@business.com"
                          className="mt-1.5"
                          data-testid="input-email"
                          {...register("email")}
                        />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="businessName" className="text-sm font-medium">Business Name *</Label>
                        <Input
                          id="businessName"
                          placeholder="Your business name"
                          className="mt-1.5"
                          data-testid="input-business-name"
                          {...register("businessName")}
                        />
                        {errors.businessName && <p className="text-xs text-destructive mt-1">{errors.businessName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-sm font-medium">Service Interested In *</Label>
                      <Select
                        onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
                      >
                        <SelectTrigger className="mt-1.5" data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business and what you're looking to achieve..."
                        className="mt-1.5 min-h-[120px]"
                        data-testid="input-message"
                        {...register("message")}
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="py-8 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden border border-border bg-card h-64 flex items-center justify-center" data-testid="map-section">
              <div className="text-center">
                <MapPin size={32} className="text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground">Leadkar — India</p>
                <p className="text-sm text-muted-foreground mt-1">Serving businesses across all states in India</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
