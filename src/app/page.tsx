import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import PortfolioPreview from "@/components/PortfolioPreview";
import EcoTourismSection from "@/components/EcoTourismSection";
import FinalCTASection from "@/components/FinalCTASection";
/* ================================
   SEO METADATA
================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://bangunciptasolusi.com"),

  title: "Bangun.in | Konsultan Arsitektur & Engineering Profesional",
  description:
    "Bangun.in adalah konsultan arsitektur, engineering, rekayasa konstruksi, topografi, soil investigasi dan geoteknik profesional di Indonesia.",

  keywords: [
    "konsultan arsitektur",
    "konsultan interior",
    "konsultan engineering",
    "jasa geoteknik",
    "konsultan topografi",
    "konsultan rekayasa konstruksi",
    "konsultan soil investigasi",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bangun.in | Konsultan Arsitektur & Engineering Profesional",
    description:
      "Solusi perencanaan arsitektur dan engineering profesional.",
    url: "/",
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bangun.in | Konsultan Arsitektur & Engineering",
    description: "Konsultan profesional untuk proyek konstruksi.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
/* ================================
   PAGE
================================ */

export default function Page() {
  return (
    <>
      <HomeClient />

      {/* ✅ TARUH DI SINI (SERVER ZONE) */}
      <PortfolioPreview />
      <EcoTourismSection />
      <FinalCTASection />
    </>
  );
}