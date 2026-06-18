"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "A 20-minute call to learn about your business, goals, and what you need from your website. No pressure, no pitch. Just a real conversation.",
  },
  {
    num: "02",
    title: "Design Proposal",
    body: "Within a few days, we send a custom proposal with design direction, page structure, and timeline. You approve before we touch a pixel.",
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

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Animate each step line/content on scroll
  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      const stepEls = gsap.utils.toArray<HTMLElement>(".process-step");
      stepEls.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              once: true,
            },
          }
        );
        // Animate the step number
        const numEl = step.querySelector(".step-num");
        if (numEl) {
          gsap.fromTo(
            numEl,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              delay: i * 0.08,
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        background: "#0a0a0a",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: sticky heading (desktop only) */}
          <motion.div
            ref={leftRef}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="lg:sticky lg:top-24"
          >
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
              className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem]"
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
              className="mt-4 text-sm max-w-[260px]"
              style={{ color: "rgba(242,237,228,0.46)", lineHeight: 1.7 }}
            >
              A clear, transparent process so you always know where your
              project stands.
            </p>

            {/* Decorative image */}
            <div
              className="hidden lg:block mt-10 relative overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="https://picsum.photos/seed/northforge-process-workspace/600/450"
                alt="NorthForge design process"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.55) saturate(0.65)" }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "linear-gradient(to top, #0a0a0a, transparent)",
                }}
              />
            </div>
          </motion.div>

          {/* Right: steps */}
          <div>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="process-step grid gap-4 sm:gap-6 py-7 sm:py-8"
                style={{
                  gridTemplateColumns: "3.5rem 1fr",
                  borderBottom:
                    i < steps.length - 1
                      ? "1px solid rgba(200,169,110,0.1)"
                      : "none",
                  opacity: 0, // GSAP animates in
                }}
              >
                <span
                  className="step-num"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "rgba(200,169,110,0.35)",
                    lineHeight: 1,
                    paddingTop: "0.15rem",
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      color: "#f2ede4",
                      marginBottom: "0.55rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm max-w-[500px]"
                    style={{ color: "rgba(242,237,228,0.52)", lineHeight: 1.75 }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA after steps */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="pt-8"
            >
              <a
                href="#contact"
                className="btn-push inline-flex items-center gap-2"
                style={{
                  padding: "0.85rem 2rem",
                  background: "#c8a96e",
                  color: "#080808",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d9be8f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a96e")}
              >
                Start with a free call
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
