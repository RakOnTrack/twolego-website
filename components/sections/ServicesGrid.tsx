"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { services } from "@/lib/data/services";
import { ArrowUpRight } from "lucide-react";

const featured = services.slice(0, 9);

export default function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-3">What We Do</p>
              <h2
                className="text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                SAP Solutions for
                <br />
                <span className="teal-text">Every Layer of Your Business</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm shrink-0"
            >
              All Services <ArrowUpRight size={16} />
            </Link>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link href="/services" className="block group">
                <div className="glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:translate-y-[-2px]">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{
                        background: "rgba(0, 212, 170, 0.08)",
                        border: "1px solid rgba(0, 212, 170, 0.15)",
                      }}
                    >
                      {service.icon}
                    </div>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: "var(--teal)" }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <h3
                    className="text-base font-semibold mb-2 transition-colors duration-200 group-hover:text-teal-DEFAULT"
                    style={{ color: "var(--ink)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {service.shortDesc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
