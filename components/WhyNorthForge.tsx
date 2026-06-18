"use client";

import { motion } from "motion/react";

const reasons = [
  {
    title: "We work exclusively with hospitality and local businesses",
    body: "We are not a generalist agency taking any project that comes in. We know what a restaurant website needs because that is all we build.",
  },
  {
    title: "No templates. No page builders.",
    body: "Every site is hand-built with clean code. That means faster load times, better SEO performance, and a site that does not look like ten other restaurants in your city.",
  },
  {
    title: "You will actually hear from us",
    body: "When you reach out, you talk to the person building your site. Clear timelines, honest updates, no middlemen.",
  },
  {
    title: "We design for your guests, not for ourselves",
    body: "The goal of your website is to get people in the door. Every design decision we make is built around that.",
  },
];

function reveal(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

export function WhyNorthForge() {
  return (
    <section
      id="why"
      style={{
        background: "#080808",
        padding: "7rem 0",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Asymmetric layout: large image + content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "6rem",
          }}
          className="why-layout"
        >
          {/* Left: image */}
          <motion.div
            {...reveal(0)}
            style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
            }}
          >
            <img
              src="https://picsum.photos/seed/northforge-studio-laptop/700/900"
              alt="NorthForge design studio"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.65) saturate(0.75)",
              }}
            />
            {/* Gold frame accent */}
            <div
              style={{
                position: "absolute",
                top: "-1rem",
                left: "-1rem",
                width: "60%",
                height: "60%",
                border: "1px solid rgba(200,169,110,0.2)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Right: heading + reasons */}
          <div>
            <motion.h2
              {...reveal(0)}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "3rem",
              }}
            >
              Why restaurants choose{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#c8a96e",
                  lineHeight: 1.15,
                  display: "inline-block",
                  paddingBottom: "0.05em",
                }}
              >
                NorthForge
              </em>
            </motion.h2>

            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                {...reveal(i + 1)}
                style={{
                  padding: "1.5rem 0",
                  borderTop: "1px solid rgba(200,169,110,0.1)",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "1.5rem",
                    height: "1px",
                    background: "#c8a96e",
                    marginTop: "0.7rem",
                    flexShrink: 0,
                    display: "block",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      color: "#f2ede4",
                      lineHeight: 1.25,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(242,237,228,0.52)",
                      lineHeight: 1.75,
                    }}
                  >
                    {r.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Horizontal quote strip */}
        <motion.div
          {...reveal(0)}
          style={{
            borderTop: "1px solid rgba(200,169,110,0.15)",
            borderBottom: "1px solid rgba(200,169,110,0.15)",
            padding: "3.5rem 0",
            textAlign: "center",
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#f2ede4",
              lineHeight: 1.4,
              maxWidth: "700px",
              margin: "0 auto",
              letterSpacing: "0.01em",
            }}
          >
            "A great website is the best employee a restaurant can hire. It
            works 24 hours a day and never calls in sick."
          </blockquote>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c8a96e",
              fontWeight: 500,
            }}
          >
            NorthForge
          </p>
        </motion.div>
      </div>
    </section>
  );
}

