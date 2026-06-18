"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10%",
          y: imgY,
        }}
      >
        <img
          src="https://picsum.photos/seed/northforge-restaurant-hero/1600/1100"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.28) saturate(0.7)",
          }}
        />
      </motion.div>

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.25) 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          paddingTop: "7rem",
          paddingBottom: "5rem",
          width: "100%",
          y: textY,
          opacity,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              display: "block",
              marginBottom: "1.5rem",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c8a96e",
              fontWeight: 500,
            }}
          >
            Web Design Studio
          </span>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#f2ede4",
              maxWidth: "700px",
              marginBottom: "1.75rem",
            }}
          >
            Websites that{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#c8a96e",
                paddingBottom: "0.05em",
                display: "inline-block",
                lineHeight: 1.1,
              }}
            >
              fill tables.
            </em>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "rgba(242,237,228,0.72)",
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            NorthForge builds premium websites for restaurants, hospitality
            brands, and local businesses that deserve to look as good online as
            they do in person.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "#c8a96e",
                color: "#080808",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d9be8f")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a96e")}
            >
              Book a Free Call
              <ArrowRight weight="bold" size={14} />
            </a>
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "transparent",
                color: "#f2ede4",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(242,237,228,0.25)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c8a96e";
                e.currentTarget.style.color = "#c8a96e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(242,237,228,0.25)";
                e.currentTarget.style.color = "#f2ede4";
              }}
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c8a96e 50%, transparent)",
        }}
      />
    </section>
  );
}
