"use client";

import { useState } from "react";
import GradientMesh from "@/components/ui/GradientMesh";
import FadeUp from "@/components/animations/FadeUp";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const sapProducts = [
  "SAP S/4HANA",
  "SAP Business One",
  "SAP Business ByDesign",
  "SuccessFactors / HR",
  "Supply Chain Management",
  "Business Analytics",
  "Cloud Migration",
  "CRM / Customer Experience",
  "Canadian Payroll",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to Formspree, Resend, or your own API endpoint
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    await new Promise((r) => setTimeout(r, 1000)); // simulated delay
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-center overflow-hidden pt-16"
        style={{ background: "var(--bg)" }}
      >
        <GradientMesh />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <FadeUp>
            <p className="section-label mb-4">Let&apos;s Talk</p>
            <h1
              className="text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ color: "var(--ink)" }}
            >
              Start Your
              <br />
              <span className="teal-text">SAP Journey</span>
            </h1>
            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Tell us about your project. We&apos;ll get back to you within one business day with a straightforward assessment — no pressure, no sales pitch.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            {/* Left: info */}
            <FadeUp>
              <div>
                <h2
                  className="text-2xl font-bold mb-8"
                  style={{ color: "var(--ink)" }}
                >
                  Get In Touch
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(0,112,242,0.08)",
                        border: "1px solid rgba(0,112,242,0.15)",
                      }}
                    >
                      <MapPin size={18} style={{ color: "var(--teal)" }} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ color: "var(--ink)" }}
                      >
                        Office
                      </p>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>
                        1100 W Town and Country Rd Suite 1250<br />
                        Orange, CA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(0,112,242,0.08)",
                        border: "1px solid rgba(0,112,242,0.15)",
                      }}
                    >
                      <Phone size={18} style={{ color: "var(--teal)" }} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ color: "var(--ink)" }}
                      >
                        Phone
                      </p>
                      <a
                        href="tel:7149126405"
                        className="text-sm transition-colors"
                        style={{ color: "var(--muted)" }}
                      >
                        714-912-6405
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(0,112,242,0.08)",
                        border: "1px solid rgba(0,112,242,0.15)",
                      }}
                    >
                      <Mail size={18} style={{ color: "var(--teal)" }} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ color: "var(--ink)" }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:info@twolego.com"
                        className="text-sm transition-colors"
                        style={{ color: "var(--muted)" }}
                      >
                        info@twolego.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response time note */}
                <div
                  className="glass rounded-2xl p-5"
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "var(--teal)" }}
                  >
                    Response Time
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    We respond to all inquiries within one business day. For urgent matters, call us directly.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right: form */}
            <FadeUp delay={0.1}>
              <div
                className="glass rounded-2xl p-8"
                style={{
                  animation: "pulse-glow 4s ease-in-out infinite",
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: "rgba(0,112,242,0.1)",
                        border: "1px solid rgba(0,112,242,0.2)",
                      }}
                    >
                      <CheckCircle size={32} style={{ color: "var(--teal)" }} />
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "var(--ink)" }}
                    >
                      Message Received
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      We&apos;ll be in touch within one business day to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "var(--ink)" }}
                        >
                          Full Name *
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: "rgba(7,9,15,0.8)",
                            border: "1px solid rgba(0,112,242,0.12)",
                            color: "var(--ink)",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor = "rgba(0,112,242,0.4)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(0,112,242,0.12)")
                          }
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "var(--ink)" }}
                        >
                          Company *
                        </label>
                        <input
                          name="company"
                          type="text"
                          required
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: "rgba(7,9,15,0.8)",
                            border: "1px solid rgba(0,112,242,0.12)",
                            color: "var(--ink)",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor = "rgba(0,112,242,0.4)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(0,112,242,0.12)")
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--ink)" }}
                      >
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="jane@acmecorp.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(7,9,15,0.8)",
                          border: "1px solid rgba(0,112,242,0.12)",
                          color: "var(--ink)",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(0,112,242,0.4)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(0,112,242,0.12)")
                        }
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--ink)" }}
                      >
                        SAP Product of Interest
                      </label>
                      <select
                        name="product"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none"
                        style={{
                          background: "rgba(7,9,15,0.8)",
                          border: "1px solid rgba(0,112,242,0.12)",
                          color: "var(--muted)",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(0,112,242,0.4)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(0,112,242,0.12)")
                        }
                      >
                        <option value="">Select a product...</option>
                        {sapProducts.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--ink)" }}
                      >
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project, current system, and goals..."
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                        style={{
                          background: "rgba(7,9,15,0.8)",
                          border: "1px solid rgba(0,112,242,0.12)",
                          color: "var(--ink)",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(0,112,242,0.4)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(0,112,242,0.12)")
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-teal w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span
                            className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                            style={{ borderColor: "#FFFFFF", borderTopColor: "transparent" }}
                          />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
