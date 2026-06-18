"use client";

import { motion } from "motion/react";
import {
  Storefront,
  DeviceMobile,
  MagnifyingGlass,
  ArrowsClockwise,
  CalendarCheck,
  PaintBrush,
} from "@phosphor-icons/react";

const services = [
  {
    icon: PaintBrush,
    title: "Custom Website Design",
    body: "Every site is designed from scratch to match your brand. No templates. No copy-paste layouts. A website that actually looks like your restaurant.",
  },
  {
    icon: DeviceMobile,
    title: "Mobile-First Build",
    body: "Most of your guests will find you on a phone. We build mobile-first so your site looks sharp on every screen, from iPhone to desktop.",
  },
  {
    icon: Storefront,
    title: "Restaurant & Hospitality Focus",
    body: "We know what restaurants need: menus, reservations, hours, gallery, online ordering. We build these seamlessly, not as afterthoughts.",
  },
  {
    icon: MagnifyingGlass,
    title: "Local SEO Setup",
    body: "We set up your site so Google knows exactly where you are and what you serve. More local search visibility means more walk-ins.",
  },
  {
    icon: CalendarCheck,
    title: "Reservation & Contact Flows",
    body: "OpenTable embeds, contact forms, or direct booking links. We make it easy for guests to take the next step without friction.",
  },
  {
    icon: ArrowsClockwise,
    title: "Ongoing Monthly Support",
    body: "Menus change. Hours change. Photos need updating. Our support plans keep your site current so you never have to touch code.",
  },
];

function reveal(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

export function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#080808",
        padding: "7rem 0",
        borderTop: "1px solid rgba(200,169,110,0.1)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "4rem",
            alignItems: "end",
          }}
          className="services-header"
        >
          <motion.div {...reveal(0)}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              What we{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#c8a96e",
                  lineHeight: 1.15,
                  display: "inline-block",
                  paddingBottom: "0.05em",
                }}
              >
                build
              </em>
            </h2>
          </motion.div>
          <motion.p
            {...reveal(1)}
            style={{
              fontSize: "0.95rem",
              color: "rgba(242,237,228,0.55)",
              lineHeight: 1.75,
              maxWidth: "360px",
            }}
          >
            From first design call to launch day, we handle everything. You
            focus on running your business.
          </motion.p>
        </div>

        {/* Service grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(200,169,110,0.08)",
          }}
          className="services-grid"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                {...reveal(i + 1)}
                style={{
                  background: "#080808",
                  padding: "2.25rem 2rem",
                  transition: "background 0.3s",
                }}
                onHoverStart={(e) => {
                  (e.target as HTMLElement).style.background = "#0d0d0d";
                }}
                onHoverEnd={(e) => {
                  (e.target as HTMLElement).style.background = "#080808";
                }}
              >
                <Icon
                  size={26}
                  weight="light"
                  style={{ color: "#c8a96e", marginBottom: "1.25rem" }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.45rem",
                    fontWeight: 500,
                    color: "#f2ede4",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(242,237,228,0.52)",
                    lineHeight: 1.75,
                  }}
                >
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

