// One marquee per page — between Work and Services
export function Marquee() {
  const items = [
    "Custom Web Design",
    "Restaurant Websites",
    "Hospitality Brands",
    "Local SEO",
    "Mobile-First Builds",
    "Reservation Flows",
    "Online Menus",
    "Monthly Support",
    "NorthForge Studio",
  ];

  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(200,169,110,0.12)",
        borderBottom: "1px solid rgba(200,169,110,0.12)",
        overflow: "hidden",
        padding: "1.1rem 0",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {all.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              paddingRight: "3rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: i % 2 === 0 ? "rgba(242,237,228,0.35)" : "#c8a96e",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(200,169,110,0.4)",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
