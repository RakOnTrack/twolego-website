"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GradientMesh from "@/components/ui/GradientMesh";
import StatChip from "@/components/ui/StatChip";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "25+", label: "Years" },
  { value: "70+", label: "Countries" },
  { value: "6,000+", label: "Customers" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: "var(--bg)" }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src="/hero-video.mp4"
      />

      {/* Fallback gradient mesh (visible when no video) */}
      <GradientMesh />

      {/* White overlay to keep text readable */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(255, 255, 255, 0.72)" }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div
            className="glass flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{ color: "var(--teal)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{
                background: "var(--teal)",
                boxShadow: "0 0 8px var(--teal)",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            />
            SAP Certified Partner · North America
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          style={{ color: "var(--ink)" }}
        >
          25 Years{" "}
          <br className="hidden sm:block" />
          <span className="teal-text">Transforming</span>
          <br />
          Business with SAP.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          North America&apos;s most trusted SAP implementation partner — from SME to
          enterprise, across 70+ countries. We don&apos;t just implement software;
          we transform how you operate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="btn-teal inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/case-studies"
            className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base"
          >
            View Our Work
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap gap-3"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
            >
              <StatChip value={s.value} label={s.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ color: "var(--muted-2)" }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
