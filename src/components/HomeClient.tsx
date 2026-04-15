"use client";


import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA";


import HeroPremium from "./layout/HeroPremium";

import WhoWeAreSection from "./WhoWeAreSection";
import SpecializationSection from "./SpecializationSection";


/* ================================
   STRUCTURED DATA
================================ */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bangun.in",
  url: "https://bangunin.com",
  description:
    "Konsultan arsitektur, engineering dan geoteknik profesional di Indonesia.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringService",
  name: "Bangun.in Engineering Consultant",
  provider: {
    "@type": "Organization",
    name: "PT Bangun Cipta Solusi",
  },
  areaServed: "Indonesia",
  serviceType: [
    "Architecture Design",
    "Engineering Consultant",
    "Geotechnical Engineering",
    "Topography Survey",
  ],
};

export default function HomeClient() {
  return (
    <>
      {/* WebSite Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Service Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="relative">
        <HeroPremium />
        <WhoWeAreSection/>
        <SpecializationSection />
       
        <HybridWhatsAppCTA />
      </main>
    </>
  );
}