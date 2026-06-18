"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Star } from "@phosphor-icons/react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const websitePackages = [
  {
    name: "Starter",
    price: "$299",
    note: "Starting at",
    tagline: "Get online fast.",
    features: [
      "Up to 4 pages",
      "Mobile-responsive design",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "1 revision round",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$599",
    note: "Starting at",
    tagline: "The complete package.",
    features: [
      "Up to 8 pages",
      "Custom design from scratch",
      "Menu or services page",
      "Photo gallery",
      "Reservation or booking link",
      "Full SEO setup",
      "Social media links",
      "2 revision rounds",
      "30-day post-launch support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom",
    note: "Pricing",
    tagline: "Full creative vision.",
    features: [
      "Unlimited pages",
      "Brand identity alignment",
      "Advanced animations",
      "Online ordering or booking",
      "Blog or news section",
      "Advanced local SEO",
      "Priority support",
      "Unlimited revisions",
    ],
    popular: false,
  },
];

const supportPlans = [
  {
    name: "Basic Care",
    price: "$49",
    note: "Monthly",
    period: "/month",
    features: [
      "Monthly content updates",
      "Plugin & security updates",
      "Uptime monitoring",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Plus Management",
    price: "$79",
    note: "Monthly",
    period: "/month",
    features: [
      "Everything in Basic Care",
      "Weekly content changes",
      "Speed optimization checks",
      "Monthly performance report",
      "Priority email support",
    ],
    popular: true,
  },
  {
    name: "Premium Partnership",
    price: "$149",
    note: "Monthly",
    period: "/month",
    features: [
      "Everything in Plus",
      "Unlimited content edits",
      "Monthly strategy call",
      "Google Analytics review",
      "New page builds included",
      "Same-day support",
    ],
    popular: false,
  },
];

function PricingCard({
  name,
  price,
  note,
  tagline,
  features,
  popular,
  index,
  period,
}: {
  name: string;
  price: string;
  note: string;
  tagline?: string;
  features: string[];
  popular: boolean;
  index: number;
  period?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="pricing-snap-card flex flex-col relative"
      style={{
        background: popular ? "#1a1510" : "#0d0d0d",
        border: popular
          ? "1px solid rgba(200,169,110,0.45)"
          : "1px solid rgba(200,169,110,0.1)",
        padding: "2.25rem 2rem",
        minWidth: "min(280px, 85vw)",
      }}
    >
      {popular && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "1.5rem",
            background: "#c8a96e",
            color: "#080808",
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "0.28rem 0.72rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Star size={8} weight="fill" />
          {period ? "Recommended" : "Most Popular"}
        </div>
      )}

      <div style={{ marginBottom: "1.5rem", marginTop: popular ? "0.75rem" : 0 }}>
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c8a96e",
            marginBottom: "0.4rem",
            fontWeight: 500,
          }}
        >
          {note}
        </p>
        <div className="flex items-baseline gap-1">
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "2.8rem",
              fontWeight: 500,
              color: "#f2ede4",
              lineHeight: 1,
            }}
          >
            {price}
          </span>
          {period && (
            <span style={{ fontSize: "0.85rem", color: "rgba(242,237,228,0.45)" }}>
              {period}
            </span>
          )}
        </div>
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "#f2ede4",
            marginTop: "0.35rem",
          }}
        >
          {name}
        </p>
        {tagline && (
          <p style={{ fontSize: "0.82rem", color: "rgba(242,237,228,0.45)", marginTop: "0.25rem" }}>
            {tagline}
          </p>
        )}
      </div>

      <ul className="flex-1" style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem" }}>
        {features.map((f) => (
          <li
            key={f}
            className="flex gap-3 items-start"
            style={{
              padding: "0.5rem 0",
              borderBottom: "1px solid rgba(200,169,110,0.07)",
              fontSize: "0.875rem",
              color: "rgba(242,237,228,0.72)",
              lineHeight: 1.5,
            }}
          >
            <Check
              size={13}
              weight="bold"
              style={{ color: "#c8a96e", marginTop: "0.22rem", flexShrink: 0 }}
            />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="btn-push block text-center"
        style={{
          padding: "0.85rem 1.5rem",
          background: popular ? "#c8a96e" : "transparent",
          color: popular ? "#080808" : "#c8a96e",
          border: popular ? "none" : "1px solid rgba(200,169,110,0.35)",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = popular
            ? "#d9be8f"
            : "rgba(200,169,110,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = popular
            ? "#c8a96e"
            : "transparent";
        }}
      >
        {price === "Custom" ? "Let's Talk" : "Get Started"}
      </a>
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
      className="mb-10"
    >
      {children}
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: "#080808",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Website Packages */}
        <SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 400,
              color: "#f2ede4",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "0.6rem",
            }}
            className="text-[2.1rem] sm:text-[3rem] md:text-[3.5rem]"
          >
            Website Packages
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(242,237,228,0.46)", lineHeight: 1.7 }}>
            One-time investment. Delivered in 2-4 weeks. No hidden fees.
          </p>
        </SectionLabel>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-[1px] mb-20"
          style={{ background: "rgba(200,169,110,0.08)" }}
        >
          {websitePackages.map((pkg, i) => (
            <PricingCard key={pkg.name} {...pkg} index={i} />
          ))}
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="md:hidden pricing-scroll-wrap mb-16">
          <div className="flex gap-4" style={{ paddingRight: "1.25rem" }}>
            {websitePackages.map((pkg, i) => (
              <PricingCard key={pkg.name} {...pkg} index={i} />
            ))}
          </div>
        </div>

        {/* Support Plans */}
        <SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 400,
              color: "#f2ede4",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "0.6rem",
            }}
            className="text-[2.1rem] sm:text-[3rem] md:text-[3.5rem]"
          >
            Monthly Support Plans
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(242,237,228,0.46)", lineHeight: 1.7 }}>
            Keep your site fresh without touching a line of code.
          </p>
        </SectionLabel>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-[1px]"
          style={{ background: "rgba(200,169,110,0.08)" }}
        >
          {supportPlans.map((plan, i) => (
            <PricingCard key={plan.name} {...plan} index={i} tagline="" />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden pricing-scroll-wrap">
          <div className="flex gap-4" style={{ paddingRight: "1.25rem" }}>
            {supportPlans.map((plan, i) => (
              <PricingCard key={plan.name} {...plan} index={i} tagline="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
