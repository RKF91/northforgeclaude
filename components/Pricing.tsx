"use client";

import { motion } from "motion/react";
import { Check, Star } from "@phosphor-icons/react";

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
    cta: "Get Started",
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
    cta: "Most Popular",
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
      "Online ordering or booking system",
      "Blog or news section",
      "Advanced local SEO",
      "Priority support",
      "Unlimited revisions",
    ],
    popular: false,
    cta: "Let's Talk",
  },
];

const supportPlans = [
  {
    name: "Basic Care",
    price: "$49",
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

function reveal(i: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

function PricingCard({
  name,
  price,
  note,
  tagline,
  features,
  popular,
  cta,
  index,
}: (typeof websitePackages)[0] & { index: number }) {
  return (
    <motion.div
      {...reveal(index)}
      style={{
        position: "relative",
        background: popular ? "#1a1510" : "#0d0d0d",
        border: popular ? "1px solid rgba(200,169,110,0.45)" : "1px solid rgba(200,169,110,0.1)",
        padding: "2.25rem 2rem",
        display: "flex",
        flexDirection: "column",
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
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "0.3rem 0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Star size={9} weight="fill" />
          Most Popular
        </div>
      )}

      <div style={{ marginBottom: "1.5rem", marginTop: popular ? "0.75rem" : 0 }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c8a96e",
            marginBottom: "0.5rem",
            fontWeight: 500,
          }}
        >
          {note}
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "3rem",
              fontWeight: 500,
              color: "#f2ede4",
              lineHeight: 1,
            }}
          >
            {price}
          </span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.35rem",
            fontWeight: 400,
            color: "#f2ede4",
            marginTop: "0.4rem",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(242,237,228,0.5)",
            marginTop: "0.3rem",
          }}
        >
          {tagline}
        </p>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", flex: 1 }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              gap: "0.65rem",
              alignItems: "flex-start",
              padding: "0.55rem 0",
              borderBottom: "1px solid rgba(200,169,110,0.07)",
              fontSize: "0.875rem",
              color: "rgba(242,237,228,0.75)",
              lineHeight: 1.5,
            }}
          >
            <Check
              size={14}
              weight="bold"
              style={{ color: "#c8a96e", marginTop: "0.2rem", flexShrink: 0 }}
            />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          display: "block",
          textAlign: "center",
          padding: "0.8rem 1.5rem",
          background: popular ? "#c8a96e" : "transparent",
          color: popular ? "#080808" : "#c8a96e",
          border: popular ? "none" : "1px solid rgba(200,169,110,0.4)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          if (popular) {
            e.currentTarget.style.background = "#d9be8f";
          } else {
            e.currentTarget.style.background = "rgba(200,169,110,0.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (popular) {
            e.currentTarget.style.background = "#c8a96e";
          } else {
            e.currentTarget.style.background = "transparent";
          }
        }}
      >
        {cta}
      </a>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: "#080808",
        padding: "7rem 0",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Website Packages */}
        <motion.div {...reveal(0)} style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              color: "#f2ede4",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
            }}
          >
            Website Packages
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(242,237,228,0.5)",
              maxWidth: "400px",
              lineHeight: 1.7,
            }}
          >
            One-time investment. Delivered in 2-4 weeks. No hidden fees.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(200,169,110,0.08)",
            marginBottom: "6rem",
          }}
          className="pricing-grid"
        >
          {websitePackages.map((pkg, i) => (
            <PricingCard key={pkg.name} {...pkg} index={i} />
          ))}
        </div>

        {/* Support Plans */}
        <motion.div {...reveal(0)} style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              color: "#f2ede4",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
            }}
          >
            Monthly Support Plans
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(242,237,228,0.5)",
              maxWidth: "400px",
              lineHeight: 1.7,
            }}
          >
            Keep your site fresh without touching a line of code.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(200,169,110,0.08)",
          }}
          className="pricing-grid"
        >
          {supportPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...reveal(i)}
              style={{
                background: plan.popular ? "#1a1510" : "#0d0d0d",
                border: plan.popular
                  ? "1px solid rgba(200,169,110,0.45)"
                  : "1px solid rgba(200,169,110,0.1)",
                padding: "2.25rem 2rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "1.5rem",
                    background: "#c8a96e",
                    color: "#080808",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <Star size={9} weight="fill" />
                  Recommended
                </div>
              )}
              <div style={{ marginBottom: "1.5rem", marginTop: plan.popular ? "0.75rem" : 0 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "2.8rem",
                      fontWeight: 500,
                      color: "#f2ede4",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "rgba(242,237,228,0.5)" }}>
                    {plan.period}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: "#f2ede4",
                    marginTop: "0.4rem",
                  }}
                >
                  {plan.name}
                </p>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      gap: "0.65rem",
                      alignItems: "flex-start",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(200,169,110,0.07)",
                      fontSize: "0.875rem",
                      color: "rgba(242,237,228,0.75)",
                    }}
                  >
                    <Check
                      size={14}
                      weight="bold"
                      style={{ color: "#c8a96e", marginTop: "0.18rem", flexShrink: 0 }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.8rem 1.5rem",
                  background: plan.popular ? "#c8a96e" : "transparent",
                  color: plan.popular ? "#080808" : "#c8a96e",
                  border: plan.popular ? "none" : "1px solid rgba(200,169,110,0.4)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) e.currentTarget.style.background = "#d9be8f";
                  else e.currentTarget.style.background = "rgba(200,169,110,0.1)";
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) e.currentTarget.style.background = "#c8a96e";
                  else e.currentTarget.style.background = "transparent";
                }}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

