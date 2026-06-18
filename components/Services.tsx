"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Storefront,
  DeviceMobile,
  MagnifyingGlass,
  ArrowsClockwise,
  CalendarCheck,
  PaintBrush,
} from "@phosphor-icons/react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    icon: PaintBrush,
    title: "Custom Website Design",
    body: "Every site designed from scratch to match your brand. No templates. No copy-paste layouts. A website that actually looks like your restaurant.",
  },
  {
    icon: DeviceMobile,
    title: "Mobile-First Build",
    body: "Most guests find you on their phone. We build mobile-first so your site looks sharp on every screen, from iPhone to desktop.",
  },
  {
    icon: Storefront,
    title: "Restaurant & Hospitality Focus",
    body: "We know what restaurants need: menus, reservations, hours, gallery, online ordering. Built-in, not bolted on.",
  },
  {
    icon: MagnifyingGlass,
    title: "Local SEO Setup",
    body: "We configure your site so Google knows exactly where you are and what you serve. More local visibility means more walk-ins.",
  },
  {
    icon: CalendarCheck,
    title: "Reservation & Contact Flows",
    body: "OpenTable embeds, contact forms, or direct booking links. We make it frictionless for guests to take the next step.",
  },
  {
    icon: ArrowsClockwise,
    title: "Ongoing Monthly Support",
    body: "Menus change. Hours change. Photos need updating. Our support plans keep your site current so you never touch code.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      style={{
        background: "#080808",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-14 md:items-end">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
              className="text-[2.2rem] sm:text-[3rem] md:text-[3.6rem]"
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
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-[0.9rem] max-w-sm"
            style={{ color: "rgba(242,237,228,0.5)", lineHeight: 1.75 }}
          >
            From first design call to launch day, we handle everything. You
            focus on running your business.
          </motion.p>
        </div>

        {/* Service grid */}
        <motion.div
          variants={reduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]"
          style={{ background: "rgba(200,169,110,0.08)" }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={reduce ? {} : cardVariants}
                style={{
                  background: "#080808",
                  padding: "2.25rem 2rem",
                  transition: "background 0.3s",
                }}
                whileHover={{ backgroundColor: "#0d0d0d" } as never}
              >
                <Icon
                  size={24}
                  weight="light"
                  style={{ color: "#c8a96e", marginBottom: "1.25rem" }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "#f2ede4",
                    marginBottom: "0.7rem",
                    letterSpacing: "0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(242,237,228,0.5)",
                    lineHeight: 1.75,
                  }}
                >
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
