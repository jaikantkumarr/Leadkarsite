import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Clients Served", description: "Across India" },
  { value: 500, suffix: "+", label: "Campaigns Managed", description: "Google & Meta" },
  { value: 1, suffix: "M+", label: "Leads Generated", description: "Qualified & Verified" },
  { value: 99, suffix: "%", label: "Customer Satisfaction", description: "Verified Reviews" },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-primary relative overflow-hidden" ref={ref} data-testid="stats-section">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-testid={`stat-${i}`}
            >
              <div className="text-4xl sm:text-5xl font-bold font-heading text-white mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} start={inView} />
              </div>
              <div className="text-lg font-semibold text-white/90">{stat.label}</div>
              <div className="text-sm text-white/60 mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
