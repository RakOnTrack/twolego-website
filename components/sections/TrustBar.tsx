"use client";

import FadeUp from "@/components/animations/FadeUp";

const clients = ["Huawei", "Amazon", "Adobe", "CN Rail", "Deloitte"];

export default function TrustBar() {
  return (
    <section
      className="py-16 border-y"
      style={{
        background: "var(--surface)",
        borderColor: "rgba(0, 212, 170, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <p
            className="text-center text-xs font-semibold tracking-widest uppercase mb-10"
            style={{ color: "var(--muted-2)" }}
          >
            Trusted by industry leaders
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {clients.map((client) => (
              <div
                key={client}
                className="group cursor-default select-none transition-all duration-300"
              >
                <span
                  className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-teal-DEFAULT"
                  style={{ color: "var(--muted-2)" }}
                >
                  {client}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
