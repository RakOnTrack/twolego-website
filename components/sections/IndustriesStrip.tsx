"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import { industries } from "@/lib/data/industries";
import { ArrowRight } from "lucide-react";

export default function IndustriesStrip() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-3">Industries</p>
              <h2
                className="text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                Deep Expertise Across
                <br />
                <span className="teal-text">7 Industry Verticals</span>
              </h2>
            </div>
            <Link
              href="/industries"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm shrink-0"
            >
              Explore Industries <ArrowRight size={16} />
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: (i % 4) * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link href="/industries" className="block group">
                <div
                  className="glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:translate-y-[-2px] relative overflow-hidden"
                >
                  {/* Subtle teal accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(90deg, transparent, var(--teal), transparent)",
                    }}
                  />

                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3
                    className="text-base font-semibold mb-2 transition-colors duration-200 group-hover:text-teal-DEFAULT"
                    style={{ color: "var(--ink)" }}
                  >
                    {industry.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "var(--muted)" }}
                  >
                    {industry.painPoint}
                  </p>

                  <div
                    className="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "var(--teal)" }}
                  >
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
