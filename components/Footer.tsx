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
        padding: "4rem 0 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(200,169,110,0.1)",
            alignItems: "start",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.35rem",
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
              style={{
                fontSize: "0.85rem",
                color: "rgba(242,237,228,0.45)",
                lineHeight: 1.75,
                maxWidth: "240px",
              }}
            >
              Premium web design for restaurants, hospitality brands, and local
              businesses in Ontario and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c8a96e",
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              Navigation
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(242,237,228,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.5)")}
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
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c8a96e",
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              Get in touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a
                href="mailto:northforge.design@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  fontSize: "0.875rem",
                  color: "rgba(242,237,228,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.5)")}
              >
                <Envelope size={14} style={{ color: "#c8a96e", flexShrink: 0 }} />
                northforge.design@gmail.com
              </a>
              <a
                href="tel:5199810659"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  fontSize: "0.875rem",
                  color: "rgba(242,237,228,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.5)")}
              >
                <Phone size={14} style={{ color: "#c8a96e", flexShrink: 0 }} />
                519-981-0659
              </a>
              <a
                href="https://www.instagram.com/northforge.web"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  fontSize: "0.875rem",
                  color: "rgba(242,237,228,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.5)")}
              >
                <InstagramLogo size={14} style={{ color: "#c8a96e", flexShrink: 0 }} />
                @northforge.web
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: "1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(242,237,228,0.3)",
            }}
          >
            &copy; {new Date().getFullYear()} NorthForge. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(242,237,228,0.3)",
            }}
          >
            Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
