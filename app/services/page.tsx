import type { Metadata } from "next";
import Link from "next/link";
import GradientMesh from "@/components/ui/GradientMesh";
import FadeUp from "@/components/animations/FadeUp";
import CTABand from "@/components/sections/CTABand";
import { services } from "@/lib/data/services";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full SAP implementation services: S/4HANA, Business One, Business ByDesign, SuccessFactors, supply chain, analytics, cloud, CRM, and Canadian payroll.",
};

export default function ServicesPage() {
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
            <p className="section-label mb-4">What We Deliver</p>
            <h1
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ color: "var(--ink)" }}
            >
              SAP Solutions for
              <br />
              <span className="teal-text">Every Business Size</span>
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              From rapid SME deployments to complex enterprise migrations, we have the certified expertise to implement the right SAP solution for where your business is today — and where it&apos;s going.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <FadeUp key={service.id} delay={0}>
                <div
                  className="glass rounded-2xl p-8 lg:p-10 group transition-all duration-300 hover:translate-y-[-1px]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-start">
                    {/* Icon + title */}
                    <div className="flex items-start gap-5">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                        style={{
                          background: "rgba(0,112,242,0.08)",
                          border: "1px solid rgba(0,112,242,0.15)",
                        }}
                      >
                        {service.icon}
                      </div>
                      <div className="lg:hidden">
                        <div
                          className="text-xs font-semibold tracking-widest uppercase mb-1"
                          style={{ color: "var(--teal)" }}
                        >
                          {service.category.toUpperCase()}
                        </div>
                        <h2
                          className="text-xl font-bold"
                          style={{ color: "var(--ink)" }}
                        >
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="hidden lg:block">
                        <div
                          className="text-xs font-semibold tracking-widest uppercase mb-1"
                          style={{ color: "var(--teal)" }}
                        >
                          {service.category.toUpperCase()}
                        </div>
                        <h2
                          className="text-xl font-bold mb-3"
                          style={{ color: "var(--ink)" }}
                        >
                          {service.title}
                        </h2>
                      </div>
                      <p
                        className="text-sm leading-relaxed mb-6 mt-2 lg:mt-0"
                        style={{ color: "var(--muted)" }}
                      >
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0"
                              style={{ color: "var(--teal)" }}
                            />
                            <span className="text-sm" style={{ color: "var(--muted)" }}>
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm shrink-0 self-start opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      Inquire <ArrowRight size={14} />
                    </Link>
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
