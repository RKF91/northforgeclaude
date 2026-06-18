import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NorthForge — Web Design for Restaurants & Hospitality",
  description:
    "NorthForge builds premium websites for restaurants, hospitality brands, and local businesses. Polished design, real results. Based in Ontario.",
  keywords: [
    "restaurant website design",
    "hospitality web design",
    "local business websites",
    "Ontario web design",
    "NorthForge",
  ],
  openGraph: {
    title: "NorthForge — Web Design for Restaurants & Hospitality",
    description:
      "We build websites that make restaurants and local businesses look as good online as they do in person.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
