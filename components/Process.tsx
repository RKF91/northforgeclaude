"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "We start with a 20-minute call to learn about your business, your goals, and what you need from your website. No pressure, no pitch. Just a real conversation.",
  },
  {
    num: "02",
    title: "Design Proposal",
    body: "Within a few days, we send you a custom proposal with design direction, page structure, and timeline. You approve it before we touch a pixel.",
  },
  {
    num: "03",
    title: "Build & Review",
    body: "We design and build your site with your brand, photos, and copy. You review a live preview and we refine until it is exactly right.",
  },
  {
    num: "04",
    title: "Launch",
    body: "We handle deployment, domain setup, and final testing. Your site goes live with zero hassle on your end.",
  },
  {
    num: "05",
    title: "Ongoing Support",
    body: "We stick around. Menu updates, new photos, seasonal changes. Your site stays current because your business never stands still.",
  },
];

function reveal(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

export function Process() {
  return (
    <section
      id="process"
      style={{
        background: "#0a0a0a",
        padding: "7rem 0",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="process-layout"
        >
          {/* Left: heading */}
          <motion.div {...reveal(0)} style={{ position: "sticky", top: "6rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              How we{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#c8a96e",
                  lineHeight: 1.15,
                  display: "inline-block",
                  paddingBottom: "0.05em",
                }}
              >
                work
              </em>
            </h2>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                color: "rgba(242,237,228,0.5)",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              A clear, simple process so you always know where your project
              stands.
            </p>
          </motion.div>

          {/* Right: steps */}
          <div>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...reveal(i + 1)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "4rem 1fr",
                  gap: "1.5rem",
                  alignItems: "start",
                  padding: "2rem 0",
                  borderBottom:
                    i < steps.length - 1
                      ? "1px solid rgba(200,169,110,0.1)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "rgba(200,169,110,0.4)",
                    lineHeight: 1,
                    paddingTop: "0.1rem",
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.65rem",
                      fontWeight: 500,
                      color: "#f2ede4",
                      marginBottom: "0.6rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(242,237,228,0.55)",
                      lineHeight: 1.75,
                      maxWidth: "520px",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

