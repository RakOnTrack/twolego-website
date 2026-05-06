import type { Metadata } from "next";
import GradientMesh from "@/components/ui/GradientMesh";
import FadeUp from "@/components/animations/FadeUp";
import CTABand from "@/components/sections/CTABand";
import { Shield, Globe, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "TwoLego has been Toronto's leading SAP implementation partner since 1999. Learn about our history, team, and commitment to transforming business.",
};

const timeline = [
  { year: "1999", title: "Founded in Toronto", description: "TwoLego established as a SAP consulting firm, with a focus on Canadian mid-market businesses." },
  { year: "2003", title: "SAP Gold Partnership", description: "Achieved SAP Gold Partner status, recognizing our depth of expertise and customer success." },
  { year: "2008", title: "International Expansion", description: "Extended delivery capabilities to 30+ countries, supporting global SAP rollouts for Canadian multinationals." },
  { year: "2012", title: "SAP Business One Specialization", description: "Became one of Canada's leading SAP Business One implementers, serving 500+ SME customers." },
  { year: "2016", title: "Cloud & SuccessFactors Practice", description: "Launched dedicated cloud ERP and SAP SuccessFactors HR transformation practice." },
  { year: "2020", title: "S/4HANA Migration Practice", description: "Established dedicated SAP S/4HANA migration team, helping enterprise clients move off legacy ECC." },
  { year: "2024", title: "6,000+ Customers", description: "Reached milestone of 6,000+ customers served across 70+ countries, cementing position as Canada's most experienced SAP partner." },
];

const values = [
  {
    icon: Shield,
    title: "Trust First",
    description: "We earn long-term partnerships by delivering what we promise — on time, on budget, and on scope.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Local expertise with global delivery capability. We understand how business works in 70+ markets.",
  },
  {
    icon: Users,
    title: "People-Centric",
    description: "Technology is only as good as adoption. We invest in change management and training, not just configuration.",
  },
  {
    icon: Award,
    title: "SAP Mastery",
    description: "Deep, certified expertise across the entire SAP portfolio — from Business One to S/4HANA to SuccessFactors.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{ background: "var(--bg)" }}
      >
        <GradientMesh />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <FadeUp>
            <p className="section-label mb-4">Our Story</p>
            <h1
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ color: "var(--ink)" }}
            >
              Built on 25 Years of
              <br />
              <span className="teal-text">Doing This Right</span>
            </h1>
            <p
              className="text-lg lg:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              We started TwoLego in Toronto in 1999 with a single belief: that SAP implementations succeed when the partner is as invested in your outcome as you are.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label mb-4">Our Mission</p>
              <h2
                className="text-4xl font-bold tracking-tight mb-6"
                style={{ color: "var(--ink)" }}
              >
                We Are All About <span className="teal-text">YOU</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--muted)" }}
              >
                That&apos;s not a tagline — it&apos;s how we operate. Every engagement starts with your business goals, not a predefined methodology. We listen first, then build a solution that fits.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                With offices in Toronto and delivery capabilities across North America, Europe, and Asia-Pacific, we bring enterprise-grade expertise to businesses of every size — from 10-person startups to Fortune 500 multinationals.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "25+", l: "Years" },
                  { n: "70+", l: "Countries" },
                  { n: "6,000+", l: "Customers" },
                  { n: "99%", l: "Retention" },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold teal-text mb-1">{s.n}</div>
                    <div className="text-sm" style={{ color: "var(--muted)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="section-label mb-3">Our Journey</p>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-16"
              style={{ color: "var(--ink)" }}
            >
              A Quarter Century of
              <br />
              <span className="teal-text">SAP Excellence</span>
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, var(--teal), transparent)" }}
            />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <FadeUp key={item.year} delay={i * 0.07}>
                  <div className="md:pl-16 relative">
                    {/* Dot */}
                    <div
                      className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center"
                      style={{
                        borderColor: "var(--teal)",
                        background: "var(--bg)",
                        boxShadow: "0 0 8px rgba(0,212,170,0.4)",
                        transform: "translateX(-50%)",
                      }}
                    />
                    <div className="glass rounded-2xl p-6">
                      <div
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "var(--teal)" }}
                      >
                        {item.year}
                      </div>
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ color: "var(--ink)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="section-label mb-3">What We Stand For</p>
              <h2
                className="text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                Our Core Values
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(0,212,170,0.08)",
                      border: "1px solid rgba(0,212,170,0.15)",
                    }}
                  >
                    <v.icon size={22} style={{ color: "var(--teal)" }} />
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--ink)" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {v.description}
                  </p>
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
