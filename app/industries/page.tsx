import type { Metadata } from "next";
import Link from "next/link";
import GradientMesh from "@/components/ui/GradientMesh";
import FadeUp from "@/components/animations/FadeUp";
import CTABand from "@/components/sections/CTABand";
import { industries } from "@/lib/data/industries";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TwoLego delivers SAP solutions across 7 industry verticals: manufacturing, distribution, retail, hospitality, entertainment, high-tech, and travel.",
};

export default function IndustriesPage() {
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
            <p className="section-label mb-4">Industries</p>
            <h1
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ color: "var(--ink)" }}
            >
              Industry Expertise
              <br />
              <span className="teal-text">That Goes Deep</span>
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Generic ERP implementations fail. Our industry-specific methodology means we arrive knowing your processes, your pain points, and the KPIs that matter to your business.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {industries.map((industry, i) => (
              <FadeUp key={industry.id} delay={0}>
                <div className="glass rounded-2xl overflow-hidden group transition-all duration-300 hover:translate-y-[-1px]">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                        style={{
                          background: "rgba(0,212,170,0.06)",
                          border: "1px solid rgba(0,212,170,0.12)",
                        }}
                      >
                        {industry.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h2
                          className="text-2xl font-bold mb-4 transition-colors duration-200 group-hover:text-teal-DEFAULT"
                          style={{ color: "var(--ink)" }}
                        >
                          {industry.name}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Challenge */}
                          <div>
                            <div
                              className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3"
                              style={{ color: "var(--muted-2)" }}
                            >
                              <AlertCircle size={12} />
                              The Challenge
                            </div>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--muted)" }}
                            >
                              {industry.painPoint}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <div
                              className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3"
                              style={{ color: "var(--teal)" }}
                            >
                              <CheckCircle2 size={12} />
                              Our Solution
                            </div>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--muted)" }}
                            >
                              {industry.solution}
                            </p>
                          </div>
                        </div>

                        {industry.clients && (
                          <div className="mt-5 pt-5 border-t" style={{ borderColor: "rgba(0,212,170,0.08)" }}>
                            <span
                              className="text-xs"
                              style={{ color: "var(--muted-2)" }}
                            >
                              Clients include:{" "}
                              <span style={{ color: "var(--muted)" }}>{industry.clients}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      <Link
                        href="/contact"
                        className="btn-ghost hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm shrink-0 self-start opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        Discuss Your Needs <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
