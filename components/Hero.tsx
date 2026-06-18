"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.22em" }}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: delay + i * 0.07, ease }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100dvh", background: "#080808" }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-12% 0",
          y: reduce ? 0 : imgY,
        }}
      >
        <img
          src="https://picsum.photos/seed/northforge-dark-restaurant/1800/1100"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.25) saturate(0.6)",
          }}
          fetchPriority="high"
        />
      </motion.div>

      {/* Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.3) 55%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,8,0.65) 0%, transparent 55%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          y: reduce ? 0 : textY,
          opacity: reduce ? 1 : opacity,
        }}
        className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-28 pb-20"
      >
        {/* Eyebrow */}
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          style={{
            display: "block",
            marginBottom: "1.75rem",
            fontSize: "0.68rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#c8a96e",
            fontWeight: 500,
          }}
        >
          Web Design Studio — Ontario, Canada
        </motion.span>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#f2ede4",
            marginBottom: "1.75rem",
          }}
          className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] max-w-[720px]"
        >
          <WordReveal text="Websites that" delay={0.2} />{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "#c8a96e",
              display: "inline-block",
              paddingBottom: "0.06em",
              lineHeight: 1.1,
            }}
          >
            <WordReveal text="fill tables." delay={0.42} />
          </em>
        </h1>

        {/* Sub */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="text-base sm:text-lg max-w-[460px]"
          style={{ lineHeight: 1.75, color: "rgba(242,237,228,0.68)", marginBottom: "2.5rem" }}
        >
          NorthForge builds premium websites for restaurants, hospitality brands,
          and local businesses that deserve to look as good online as they do in
          person.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#contact"
            className="btn-push inline-flex items-center justify-center gap-2"
            style={{
              padding: "0.9rem 2rem",
              background: "#c8a96e",
              color: "#080808",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d9be8f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a96e")}
          >
            Book a Free Call
            <ArrowRight weight="bold" size={13} />
          </a>
          <a
            href="#work"
            className="btn-push inline-flex items-center justify-center gap-2"
            style={{
              padding: "0.9rem 2rem",
              background: "transparent",
              color: "#f2ede4",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(242,237,228,0.22)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#c8a96e";
              e.currentTarget.style.color = "#c8a96e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(242,237,228,0.22)";
              e.currentTarget.style.color = "#f2ede4";
            }}
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Gold bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c8a96e 50%, transparent)",
        }}
      />
    </section>
  );
}
