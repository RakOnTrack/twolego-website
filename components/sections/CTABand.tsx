import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div
            className="relative rounded-3xl overflow-hidden p-12 lg:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0, 112, 242, 0.08) 0%, rgba(0, 61, 143, 0.05) 100%)",
              border: "1px solid rgba(0, 112, 242, 0.18)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,112,242,0.06) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <p className="section-label mb-4">Ready When You Are</p>
              <h2
                className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
                style={{ color: "var(--ink)" }}
              >
                Ready to Modernize
                <br />
                <span className="teal-text">Your ERP?</span>
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Whether you&apos;re replacing a legacy system, moving to the cloud, or
                implementing SAP for the first time — we&apos;ve done it hundreds of times
                and we know how to make it work for you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-teal inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
                >
                  Start a Conversation <ArrowRight size={18} />
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
