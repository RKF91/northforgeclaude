"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reasons = [
  {
    title: "We work exclusively with hospitality and local businesses",
    body: "Not a generalist agency taking any project. We know what a restaurant website needs because that is all we build.",
  },
  {
    title: "No templates. No page builders.",
    body: "Every site is hand-built with clean code. Faster load times, better SEO, and a site that does not look like ten others in your city.",
  },
  {
    title: "You will actually hear from us",
    body: "When you reach out, you talk to the person building your site. Clear timelines, honest updates, no middlemen.",
  },
  {
    title: "We design for your guests, not for ourselves",
    body: "The goal of your website is to get people in the door. Every design decision is built around that.",
  },
];

export function WhyNorthForge() {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="why"
      style={{
        background: "#080808",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Two-col: image left + content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image with parallax */}
          <motion.div
            ref={imgRef}
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden"
            style={{ aspectRatio: "3/4", maxHeight: "580px" }}
          >
            <motion.img
              src="https://picsum.photos/seed/northforge-studio-design/700/900"
              alt="NorthForge design studio"
              style={{
                width: "100%",
                height: "115%",
                objectFit: "cover",
                filter: "brightness(0.6) saturate(0.7)",
                y: reduce ? 0 : imgY,
              }}
            />
            {/* Corner frame accent */}
            <div
              style={{
                position: "absolute",
                top: "-0.75rem",
                left: "-0.75rem",
                width: "55%",
                height: "55%",
                border: "1px solid rgba(200,169,110,0.18)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-0.75rem",
                right: "-0.75rem",
                width: "40%",
                height: "40%",
                border: "1px solid rgba(200,169,110,0.1)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease }}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "2.5rem",
              }}
              className="text-[2.1rem] sm:text-[2.8rem] md:text-[3.2rem]"
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
                initial={reduce ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="flex gap-4 items-start py-5"
                style={{ borderTop: "1px solid rgba(200,169,110,0.1)" }}
              >
                <span
                  className="gold-line mt-[0.6rem]"
                  style={{ width: "1.25rem" }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: "#f2ede4",
                      lineHeight: 1.25,
                      marginBottom: "0.45rem",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(242,237,228,0.5)", lineHeight: 1.75 }}
                  >
                    {r.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          style={{
            borderTop: "1px solid rgba(200,169,110,0.14)",
            borderBottom: "1px solid rgba(200,169,110,0.14)",
            padding: "3.5rem 0",
            textAlign: "center",
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#f2ede4",
              lineHeight: 1.45,
              maxWidth: "660px",
              margin: "0 auto",
              letterSpacing: "0.01em",
            }}
            className="text-[1.4rem] sm:text-[2rem] md:text-[2.25rem]"
          >
            "A great website is the best employee a restaurant can hire. It
            works 24 hours a day and never calls in sick."
          </blockquote>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
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
