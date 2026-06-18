"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    title: "The Ember Room",
    category: "Restaurant",
    type: "Concept Work",
    description:
      "Dark, moody website for an upscale steakhouse. Full-bleed photography, online reservation flow, and seasonal menu presentation.",
    img: "https://picsum.photos/seed/northforge-ember-steakhouse/900/600",
    tags: ["Restaurant", "Reservations", "Menu"],
    wide: true,
  },
  {
    title: "CÃ´te Brasserie",
    category: "Brasserie",
    type: "Concept Work",
    description:
      "Elegant French brasserie identity. Bilingual site, OpenTable embed, and editorial food photography layout.",
    img: "https://picsum.photos/seed/northforge-cote-brasserie/700/700",
    tags: ["Brasserie", "Bilingual", "OpenTable"],
    wide: false,
  },
  {
    title: "Aldea Cantina",
    category: "Mexican Restaurant",
    type: "Concept Work",
    description:
      "Vibrant yet refined cantina site. Bold typography, delivery integrations, and a catering inquiry flow.",
    img: "https://picsum.photos/seed/northforge-aldea-cantina/700/700",
    tags: ["Restaurant", "Delivery", "Catering"],
    wide: false,
  },
  {
    title: "The Willow Hotel",
    category: "Boutique Hotel",
    type: "Concept Work",
    description:
      "Luxury boutique hotel with room showcase, spa booking, and local dining guide. Clean, editorial luxury feel.",
    img: "https://picsum.photos/seed/northforge-willow-hotel/900/600",
    tags: ["Hotel", "Bookings", "Hospitality"],
    wide: true,
  },
];

function reveal(i: number) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

export function FeaturedWork() {
  return (
    <section
      id="work"
      style={{ background: "#0d0d0d", padding: "7rem 0" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <motion.div {...reveal(0)} style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "#f2ede4",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              maxWidth: "480px",
            }}
          >
            Selected{" "}
            <em style={{ fontStyle: "italic", color: "#c8a96e", lineHeight: 1.15, display: "inline-block", paddingBottom: "0.05em" }}>
              concept
            </em>{" "}
            work
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.9rem",
              color: "rgba(242,237,228,0.52)",
              maxWidth: "380px",
              lineHeight: 1.7,
            }}
          >
            These projects are design concepts built to show our approach.
            Real client work available on request.
          </p>
        </motion.div>

        {/* Grid - alternating wide/narrow */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(200,169,110,0.1)",
          }}
          className="grid-work"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...reveal(i * 0.5)}
              style={{
                background: "#0d0d0d",
                overflow: "hidden",
                gridColumn: p.wide ? "span 2" : "span 1",
                cursor: "default",
              }}
              className="work-card"
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: p.wide ? "1fr 1fr" : "1fr",
                  gridTemplateRows: p.wide ? "auto" : "auto 1fr",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: p.wide ? "16/9" : "4/3",
                    overflow: "hidden",
                    background: "#111",
                    order: i % 4 === 2 ? 1 : 0,
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.75) saturate(0.8)",
                      transition: "transform 0.6s ease, filter 0.6s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                      (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.85) saturate(0.9)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.75) saturate(0.8)";
                    }}
                  />
                  {/* Concept badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "rgba(8,8,8,0.75)",
                      border: "1px solid rgba(200,169,110,0.3)",
                      color: "#c8a96e",
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {p.type}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "2rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: p.wide ? "auto" : "180px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#c8a96e",
                        marginBottom: "0.6rem",
                        fontWeight: 500,
                      }}
                    >
                      {p.category}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: p.wide ? "2rem" : "1.65rem",
                        fontWeight: 500,
                        color: "#f2ede4",
                        letterSpacing: "0.01em",
                        lineHeight: 1.15,
                        marginBottom: "0.85rem",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "rgba(242,237,228,0.55)",
                        lineHeight: 1.7,
                        maxWidth: "380px",
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: "1.5rem",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(242,237,228,0.45)",
                          border: "1px solid rgba(242,237,228,0.12)",
                          padding: "0.25rem 0.65rem",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...reveal(4)} style={{ marginTop: "3rem", textAlign: "center" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#c8a96e",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,169,110,0.4)",
              paddingBottom: "0.2rem",
              transition: "color 0.2s",
            }}
          >
            Start your project
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

