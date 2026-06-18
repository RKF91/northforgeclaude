"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{
          background: scrolled ? "rgba(8,8,8,0.92)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          borderBottomColor: scrolled
            ? "rgba(200,169,110,0.14)"
            : "rgba(200,169,110,0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: "1px solid transparent",
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-5 sm:px-8 flex items-center justify-between"
          style={{ height: "68px" }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#f2ede4",
              textDecoration: "none",
            }}
          >
            NORTHFORGE
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(242,237,228,0.58)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(242,237,228,0.58)")
                }
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-push"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#080808",
                background: "#c8a96e",
                padding: "0.58rem 1.35rem",
                textDecoration: "none",
                fontWeight: 700,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#d9be8f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c8a96e")
              }
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              color: "#f2ede4",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} weight="bold" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <List size={22} weight="bold" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 49,
              background: "rgba(8,8,8,0.97)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "2.8rem",
                  fontWeight: 400,
                  color: "#f2ede4",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  padding: "0.4rem 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f2ede4")}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: links.length * 0.06 }}
              style={{
                marginTop: "2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#080808",
                background: "#c8a96e",
                padding: "0.85rem 2.5rem",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Book a Call
            </motion.a>

            {/* Contact in drawer */}
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{
                marginTop: "2.5rem",
                fontSize: "0.75rem",
                color: "rgba(242,237,228,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              519-981-0659
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
