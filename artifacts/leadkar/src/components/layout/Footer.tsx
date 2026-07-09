import { Link } from "wouter";
import { motion } from "framer-motion";
import { Mail, Phone, Zap } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
  Services: [
    { label: "Google Ads", href: "/services" },
    { label: "Meta Ads", href: "/services" },
    { label: "SEO Services", href: "/services" },
    { label: "Website Development", href: "/services" },
    { label: "Lead Generation", href: "/services" },
  ],
};

const socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61590412395126", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/leadkar.in/", label: "Instagram" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                  <Zap size={16} className="text-primary-foreground" fill="currentColor" />
                </div>
                <span className="text-xl font-bold font-heading tracking-tight">
                  Lead<span className="text-primary">kar</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Drive more leads and grow your business faster with India's trusted digital growth partner. Data-driven strategies that deliver real results.
            </p>
            <div className="space-y-2 mb-6">
              <a
                href="mailto:leadkar.in@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-email"
              >
                <Mail size={14} />
                leadkar.in@gmail.com
              </a>
              <a
                href="tel:+917808740233"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-phone"
              >
                <Phone size={14} />
                +91 7808740233
              </a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3" data-testid="footer-socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="flex items-center justify-center w-9 h-9 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Leadkar. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed to Drive More Leads &amp; Grow Faster
          </p>
        </div>
      </div>
    </footer>
  );
}
