"use client";

import { motion } from "motion/react";
import { Envelope, Phone, InstagramLogo, ArrowRight } from "@phosphor-icons/react";

function reveal(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0d0d0d",
        padding: "7rem 0",
        borderTop: "1px solid rgba(200,169,110,0.1)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Left */}
          <div>
            <motion.h2
              {...reveal(0)}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "1.25rem",
              }}
            >
              Let's build something{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#c8a96e",
                  lineHeight: 1.15,
                  display: "inline-block",
                  paddingBottom: "0.05em",
                }}
              >
                great.
              </em>
            </motion.h2>

            <motion.p
              {...reveal(1)}
              style={{
                fontSize: "0.95rem",
                color: "rgba(242,237,228,0.55)",
                lineHeight: 1.75,
                maxWidth: "360px",
                marginBottom: "3rem",
              }}
            >
              Book a free 20-minute call and we will walk through what you
              need, what it costs, and what we can build together.
            </motion.p>

            {/* Contact info */}
            <motion.div {...reveal(2)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <a
                href="mailto:northforge.design@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  color: "rgba(242,237,228,0.65)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.65)")}
              >
                <Envelope size={16} style={{ color: "#c8a96e", flexShrink: 0 }} />
                northforge.design@gmail.com
              </a>
              <a
                href="tel:5199810659"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  color: "rgba(242,237,228,0.65)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.65)")}
              >
                <Phone size={16} style={{ color: "#c8a96e", flexShrink: 0 }} />
                519-981-0659
              </a>
              <a
                href="https://www.instagram.com/northforge.web"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  color: "rgba(242,237,228,0.65)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.65)")}
              >
                <InstagramLogo size={16} style={{ color: "#c8a96e", flexShrink: 0 }} />
                @northforge.web
              </a>
            </motion.div>
          </div>

          {/* Right: Netlify form */}
          <motion.div {...reveal(1)}>
            <form
              name="northforge-contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <input type="hidden" name="form-name" value="northforge-contact" />
              <input type="hidden" name="bot-field" style={{ display: "none" }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    htmlFor="name"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(242,237,228,0.5)",
                      fontWeight: 500,
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="James O'Brien"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    htmlFor="business"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(242,237,228,0.5)",
                      fontWeight: 500,
                    }}
                  >
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    required
                    placeholder="The Ember Room"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(242,237,228,0.5)",
                    fontWeight: 500,
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@yourbusiness.com"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="service"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(242,237,228,0.5)",
                    fontWeight: 500,
                  }}
                >
                  What are you looking for?
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  style={{ ...inputStyle, appearance: "none" as const }}
                  onFocus={(e) => Object.assign(e.currentTarget.style, { ...inputStyle, ...inputFocusStyle })}
                  onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                >
                  <option value="">Select a package</option>
                  <option value="starter">Starter Website - from $299</option>
                  <option value="business">Business Website - from $599</option>
                  <option value="premium">Premium Custom Experience</option>
                  <option value="support">Monthly Support Plan</option>
                  <option value="other">Not sure yet</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(242,237,228,0.5)",
                    fontWeight: 500,
                  }}
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What does your business do, and what do you need from a website?"
                  style={{ ...inputStyle, resize: "vertical" as const, minHeight: "120px" }}
                  onFocus={(e) => Object.assign(e.currentTarget.style, { ...inputStyle, ...inputFocusStyle, resize: "vertical", minHeight: "120px" })}
                  onBlur={(e) => Object.assign(e.currentTarget.style, { ...inputStyle, resize: "vertical", minHeight: "120px" })}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "1rem 2rem",
                  background: "#c8a96e",
                  color: "#080808",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d9be8f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a96e")}
              >
                Send Message
                <ArrowRight size={14} weight="bold" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(200,169,110,0.18)",
  color: "#f2ede4",
  padding: "0.85rem 1rem",
  fontSize: "0.9rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const inputFocusStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(200,169,110,0.55)",
  color: "#f2ede4",
  padding: "0.85rem 1rem",
  fontSize: "0.9rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

