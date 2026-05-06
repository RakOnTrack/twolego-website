"use client";

import { useState } from "react";
import GradientMesh from "@/components/ui/GradientMesh";
import FadeUp from "@/components/animations/FadeUp";
import CTABand from "@/components/sections/CTABand";
import { caseStudies } from "@/lib/data/caseStudies";
import { TrendingUp } from "lucide-react";

const industries = ["All", "Manufacturing", "Distribution", "Retail", "High Technology", "Service & Hospitality"];

export default function CaseStudiesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === active);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center overflow-hidden pt-16"
        style={{ background: "var(--bg)" }}
      >
        <GradientMesh />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <FadeUp>
            <p className="section-label mb-4">Proof Points</p>
            <h1
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ color: "var(--ink)" }}
            >
              Real Results,
              <br />
              <span className="teal-text">Real Businesses</span>
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Every engagement is different. These are a few of the outcomes we&apos;ve delivered — in your industry, with your challenges, using the SAP products you need.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter bar */}
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-12">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActive(ind)}
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: active === ind ? "var(--teal)" : "rgba(13,17,23,0.7)",
                    color: active === ind ? "#07090f" : "var(--muted)",
                    border: `1px solid ${active === ind ? "var(--teal)" : "rgba(0,212,170,0.12)"}`,
                  }}
                >
                  {ind}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, i) => (
              <FadeUp key={cs.id} delay={i * 0.07}>
                <div className="glass rounded-2xl p-6 h-full flex flex-col group transition-all duration-300 hover:translate-y-[-2px]">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span
                        className="inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md mb-2"
                        style={{
                          background: "rgba(0,212,170,0.1)",
                          color: "var(--teal)",
                          border: "1px solid rgba(0,212,170,0.15)",
                        }}
                      >
                        {cs.industry}
                      </span>
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--ink)" }}
                      >
                        {cs.company}
                      </h3>
                    </div>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(0,212,170,0.08)",
                        color: "var(--teal)",
                      }}
                    >
                      <TrendingUp size={14} />
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4 flex-1">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--muted-2)" }}
                    >
                      Challenge
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-5">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--muted-2)" }}
                    >
                      Solution
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {cs.solution}
                    </p>
                  </div>

                  {/* Result metric */}
                  <div
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{
                      background: "rgba(0,212,170,0.06)",
                      border: "1px solid rgba(0,212,170,0.15)",
                    }}
                  >
                    <div
                      className="text-xl font-bold tracking-tight teal-text"
                    >
                      {cs.resultMetric}
                    </div>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {cs.result}
                    </p>
                  </div>

                  <div
                    className="mt-4 pt-4 border-t text-xs"
                    style={{
                      borderColor: "rgba(0,212,170,0.08)",
                      color: "var(--muted-2)",
                    }}
                  >
                    Implemented with: <span style={{ color: "var(--teal)" }}>{cs.sapProduct}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {filtered.length === 0 && (
            <FadeUp>
              <div className="text-center py-20" style={{ color: "var(--muted)" }}>
                No case studies yet for this industry. <br />
                <span style={{ color: "var(--teal)" }}>Get in touch</span> — we&apos;d love to discuss your project.
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
