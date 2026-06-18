"use client";

import { InstagramLogo, Envelope, Phone } from "@phosphor-icons/react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(200,169,110,0.12)",
        paddingTop: "3.5rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10"
          style={{ borderBottom: "1px solid rgba(200,169,110,0.1)" }}
        >
          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#f2ede4",
                display: "block",
                marginBottom: "0.85rem",
              }}
            >
              NORTHFORGE
            </span>
            <p
              className="text-sm max-w-[220px]"
              style={{ color: "rgba(242,237,228,0.4)", lineHeight: 1.75 }}
            >
              Premium web design for restaurants, hospitality brands, and local
              businesses in Ontario and beyond.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c8a96e",
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm"
                  style={{
                    color: "rgba(242,237,228,0.44)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(242,237,228,0.44)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c8a96e",
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              Get in touch
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  Icon: Envelope,
                  label: "northforge.design@gmail.com",
                  href: "mailto:northforge.design@gmail.com",
                },
                {
                  Icon: Phone,
                  label: "519-981-0659",
                  href: "tel:5199810659",
                },
                {
                  Icon: InstagramLogo,
                  label: "@northforge.web",
                  href: "https://www.instagram.com/northforge.web",
                  external: true,
                },
              ].map(({ Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-2 text-sm"
                  style={{
                    color: "rgba(242,237,228,0.44)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(242,237,228,0.44)")
                  }
                >
                  <Icon size={13} style={{ color: "#c8a96e", flexShrink: 0 }} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6"
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(242,237,228,0.28)" }}>
            &copy; {new Date().getFullYear()} NorthForge. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(242,237,228,0.28)" }}>
            Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
