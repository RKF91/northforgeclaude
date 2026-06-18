"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Using Picsum seeds that consistently produce atmospheric interiors/hospitality
const projects = [
  {
    title: "The Ember Room",
    category: "Fine Dining",
    type: "Concept Work",
    description:
      "Dark, moody steakhouse website. Full-bleed hero photography, online reservation flow, and seasonal menu presentation.",
    img: "https://picsum.photos/seed/ember-dark-dining-interior/1200/800",
    imgMobile: "https://picsum.photos/seed/ember-dark-dining-interior/800/600",
    tags: ["Fine Dining", "Reservations", "Menu"],
    wide: true,
    flip: false,
  },
  {
    title: "Côte Brasserie",
    category: "French Brasserie",
    type: "Concept Work",
    description:
      "Elegant French brasserie. Bilingual site, editorial food photography, and OpenTable integration.",
    img: "https://picsum.photos/seed/cote-brasserie-french-elegant/700/700",
    imgMobile: "https://picsum.photos/seed/cote-brasserie-french-elegant/700/500",
    tags: ["Brasserie", "Bilingual", "OpenTable"],
    wide: false,
    flip: false,
  },
  {
    title: "Aldea Cantina",
    category: "Mexican Restaurant",
    type: "Concept Work",
    description:
      "Vibrant yet refined cantina site with delivery integration and a catering inquiry flow.",
    img: "https://picsum.photos/seed/aldea-restaurant-warm-light/700/700",
    imgMobile: "https://picsum.photos/seed/aldea-restaurant-warm-light/700/500",
    tags: ["Restaurant", "Delivery", "Catering"],
    wide: false,
    flip: true,
  },
  {
    title: "The Willow Hotel",
    category: "Boutique Hotel",
    type: "Concept Work",
    description:
      "Luxury boutique hotel with room showcase, spa booking, and local dining guide.",
    img: "https://picsum.photos/seed/willow-hotel-luxury-interior/1200/800",
    imgMobile: "https://picsum.photos/seed/willow-hotel-luxury-interior/800/600",
    tags: ["Hotel", "Booking", "Hospitality"],
    wide: true,
    flip: false,
  },
];

export function FeaturedWork() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 48, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, gridRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="work"
      style={{ background: "#0d0d0d", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 400,
              color: "#f2ede4",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
            className="text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] max-w-[500px]"
          >
            Selected{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#c8a96e",
                lineHeight: 1.15,
                display: "inline-block",
                paddingBottom: "0.05em",
              }}
            >
              concept
            </em>{" "}
            work
          </h2>
          <p
            className="mt-3 text-sm max-w-[340px]"
            style={{ color: "rgba(242,237,228,0.48)", lineHeight: 1.7 }}
          >
            Design concepts built to show our approach. Real client work
            available on request.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-[1px]"
          style={{ background: "rgba(200,169,110,0.08)" }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className={`work-card bg-[#0d0d0d] overflow-hidden ${p.wide ? "md:col-span-2" : ""}`}
              style={{ opacity: 0 }} // GSAP animates this in
            >
              <div
                className={`${
                  p.wide
                    ? "grid grid-cols-1 md:grid-cols-2"
                    : "flex flex-col"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-[#111] ${
                    p.wide ? "aspect-video md:aspect-auto md:min-h-[320px]" : "aspect-[4/3]"
                  } ${p.flip ? "md:order-2" : ""}`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="img-zoom w-full h-full object-cover"
                    style={{ filter: "brightness(0.7) saturate(0.75)" }}
                    loading="lazy"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "rgba(8,8,8,0.78)",
                      border: "1px solid rgba(200,169,110,0.28)",
                      color: "#c8a96e",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "0.28rem 0.65rem",
                      fontWeight: 600,
                    }}
                  >
                    {p.type}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-between p-6 md:p-8 ${
                    p.flip ? "md:order-1" : ""
                  }`}
                  style={{ minHeight: p.wide ? "auto" : "200px" }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#c8a96e",
                        marginBottom: "0.55rem",
                        fontWeight: 500,
                      }}
                    >
                      {p.category}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: p.wide ? "2rem" : "1.6rem",
                        fontWeight: 500,
                        color: "#f2ede4",
                        letterSpacing: "0.01em",
                        lineHeight: 1.15,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(242,237,228,0.5)",
                        lineHeight: 1.75,
                        maxWidth: "360px",
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.62rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(242,237,228,0.4)",
                          border: "1px solid rgba(242,237,228,0.1)",
                          padding: "0.22rem 0.6rem",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#c8a96e",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,169,110,0.4)",
              paddingBottom: "0.2rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d9be8f")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c8a96e")}
          >
            Start your project
            <ArrowUpRight size={13} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
