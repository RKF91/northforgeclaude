"use client";

import { motion, useReducedMotion } from "motion/react";
import { Envelope, Phone, InstagramLogo, ArrowRight } from "@phosphor-icons/react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(200,169,110,0.18)",
  color: "#f2ede4",
  padding: "0.9rem 1rem",
  fontSize: "0.9rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
  borderRadius: 0,
  appearance: "none" as const,
  fontFamily: "var(--font-dm-sans), sans-serif",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[0.4rem]">
      <label
        style={{
          fontSize: "0.68rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(242,237,228,0.45)",
          fontWeight: 500,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      style={{
        background: "#0d0d0d",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(200,169,110,0.1)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease }}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                color: "#f2ede4",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "1.25rem",
              }}
              className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem]"
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
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-[0.93rem] max-w-sm mb-10"
              style={{ color: "rgba(242,237,228,0.5)", lineHeight: 1.75 }}
            >
              Book a free 20-minute call and we will walk through what you
              need, what it costs, and what we can build together.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="flex flex-col gap-5"
            >
              {[
                {
                  Icon: Envelope,
                  label: "northforge.design@gmail.com",
                  href: "mailto:northforge.design@gmail.com",
                },
                {
                  Icon: Phone,
                  label: "519-981-0659",
                  href: "tel:5199810659",
                },
                {
                  Icon: InstagramLogo,
                  label: "@northforge.web",
                  href: "https://www.instagram.com/northforge.web",
                  external: true,
                },
              ].map(({ Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 group"
                  style={{
                    color: "rgba(242,237,228,0.58)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8a96e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(242,237,228,0.58)")
                  }
                >
                  <Icon
                    size={15}
                    style={{ color: "#c8a96e", flexShrink: 0 }}
                  />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <form
              name="northforge-contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="form-name" value="northforge-contact" />
              <p style={{ display: "none" }}>
                <label>
                  Do not fill this out:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Your Name">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="James O'Brien"
                    style={inputBase}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(200,169,110,0.55)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(200,169,110,0.18)")
                    }
                  />
                </Field>
                <Field label="Business Name">
                  <input
                    name="business"
                    type="text"
                    required
                    placeholder="The Ember Room"
                    style={inputBase}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(200,169,110,0.55)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(200,169,110,0.18)")
                    }
                  />
                </Field>
              </div>

              <Field label="Email Address">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@yourbusiness.com"
                  style={inputBase}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(200,169,110,0.55)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(200,169,110,0.18)")
                  }
                />
              </Field>

              <Field label="What are you looking for?">
                <select
                  name="service"
                  required
                  style={inputBase}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(200,169,110,0.55)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(200,169,110,0.18)")
                  }
                >
                  <option value="">Select a package</option>
                  <option value="starter">Starter Website - from $299</option>
                  <option value="business">Business Website - from $599</option>
                  <option value="premium">Premium Custom Experience</option>
                  <option value="support">Monthly Support Plan</option>
                  <option value="other">Not sure yet</option>
                </select>
              </Field>

              <Field label="Tell us about your project">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What does your business do, and what do you need from a website?"
                  style={{ ...inputBase, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(200,169,110,0.55)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(200,169,110,0.18)")
                  }
                />
              </Field>

              <button
                type="submit"
                className="btn-push flex items-center justify-center gap-2 w-full"
                style={{
                  padding: "1rem 2rem",
                  background: "#c8a96e",
                  color: "#080808",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  transition: "background 0.2s",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#d9be8f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#c8a96e")
                }
              >
                Send Message
                <ArrowRight size={13} weight="bold" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
