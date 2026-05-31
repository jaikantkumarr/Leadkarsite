import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("leadkar_popup_seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("leadkar_popup_seen", "1");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-border bg-card" data-testid="lead-popup">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <Rocket className="text-primary" size={20} />
            </div>
            <DialogTitle className="text-xl">Get a Free Growth Consultation</DialogTitle>
          </div>
          <DialogDescription className="text-sm text-muted-foreground">
            Enter your email and our team will reach out within 24 hours with a custom lead generation strategy for your business.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-6"
          >
            <div className="text-4xl mb-3">🎯</div>
            <p className="font-semibold text-foreground">You're on the list!</p>
            <p className="text-sm text-muted-foreground mt-1">We'll be in touch shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="popup-email" className="text-sm font-medium">Business Email</Label>
              <Input
                id="popup-email"
                type="email"
                placeholder="you@yourbusiness.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1.5"
                data-testid="popup-email-input"
              />
            </div>
            <Button type="submit" className="w-full" size="lg" data-testid="popup-submit">
              Get Free Consultation
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
