import type { Metadata } from "next";

import AboutHeroSection from "@/components/Tentang/AboutHeroSection";
import CompanyPositioningSection from "@/components/Tentang/CompanyPositioningSection";
import CTASection from "@/components/Tentang/CTASection";
import GrowthDirectionSection from "@/components/Tentang/GrowthDirectionSection";
import LegalComplianceSection from "@/components/Tentang/LegalComplianceSection";
import VisionValuesSection from "@/components/Tentang/VisionValuesSection";

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  title: "Tentang PT Bangun Cipta Solusi",
  description:
    "PT Bangun Cipta Solusi adalah perusahaan konsultan arsitektur dan engineering yang berfokus pada solusi pembangunan profesional dan berkelanjutan.",

  alternates: {
    canonical: "https://bangun-in.com/tentang",
  },
};

/* ============================= */
/* STRUCTURED DATA */
/* ============================= */

const companySchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringService",
  name: "PT Bangun Cipta Solusi",
  url: "https://bangun-in.com",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Perjuangan No. 88",
    addressLocality: "Jakarta Barat",
    addressCountry: "Indonesia",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companySchema),
        }}
      />

      <main className="relative">

        <AboutHeroSection />

        <CompanyPositioningSection />

        <VisionValuesSection />

        <LegalComplianceSection />

        <GrowthDirectionSection />

        <CTASection />

      </main>
    </>
  );
}