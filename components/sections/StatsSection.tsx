"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const stats = [
  { value: 25, suffix: "+", label: "Years of SAP Expertise", description: "Founded in 1999, we've grown alongside SAP's entire modern product portfolio" },
  { value: 70, suffix: "+", label: "Countries Served", description: "Global delivery capability with deep understanding of local business requirements" },
  { value: 6000, suffix: "+", label: "Customers Worldwide", description: "From SMEs to multinational enterprises, we scale to match your ambition" },
  { value: 99, suffix: "%", label: "Client Retention", description: "Long-term partnerships built on delivery excellence and ongoing support" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="teal-text text-5xl lg:text-6xl font-bold tracking-tight tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
      ref={ref}
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 170, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="section-label mb-3">By The Numbers</p>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Results That Speak
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 text-center h-full">
                <CountUp target={stat.value} suffix={stat.suffix} active={isInView} />
                <h3
                  className="text-sm font-semibold mt-3 mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {stat.label}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {stat.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
