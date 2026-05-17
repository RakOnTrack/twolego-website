import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, X } from "lucide-react";

const services = [
  "SAP S/4HANA",
  "SAP Business One",
  "SAP Business ByDesign",
  "SuccessFactors",
  "Supply Chain",
  "Business Analytics",
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{
        background: "var(--surface)",
        borderColor: "rgba(0, 112, 242, 0.1)",
      }}
    >
      {/* Shimmer line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(0,112,242,0.4) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="TwoLego" fill sizes="32px" className="object-contain" />
              </div>
              <span className="text-lg font-semibold" style={{ color: "var(--ink)" }}>
                TwoLego
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              North America&apos;s trusted SAP implementation partner. Transforming businesses since 1999.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center glass transition-colors"
                style={{ color: "var(--muted)" }}
                aria-label="LinkedIn"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center glass transition-colors"
                style={{ color: "var(--muted)" }}
                aria-label="Twitter"
              >
                <X size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-5" style={{ color: "var(--ink)" }}>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors hover:text-teal-DEFAULT"
                    style={{ color: "var(--muted)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-5" style={{ color: "var(--ink)" }}>
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm transition-colors hover:text-teal-DEFAULT"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-5" style={{ color: "var(--ink)" }}>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--teal)" }} />
                <span className="text-sm" style={{ color: "var(--muted)" }}>
                  1100 W Town and Country Rd Suite 1250<br />Orange, CA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" style={{ color: "var(--teal)" }} />
                <a
                  href="tel:7149126405"
                  className="text-sm transition-colors hover:text-teal-DEFAULT"
                  style={{ color: "var(--muted)" }}
                >
                  714-912-6405
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" style={{ color: "var(--teal)" }} />
                <a
                  href="mailto:dave@twolego.com"
                  className="text-sm transition-colors hover:text-teal-DEFAULT"
                  style={{ color: "var(--muted)" }}
                >
                  dave@twolego.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0, 112, 242, 0.1)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted-2)" }}>
            © {new Date().getFullYear()} TwoLego. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--muted-2)" }}>
            SAP Certified Partner · Founded 1999 · Orange County, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
