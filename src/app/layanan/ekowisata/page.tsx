import type { Metadata } from "next";


import EcoHero from "@/components/Layanan/ekowisata/EcoHero";
import { EcoProblem } from "@/components/Layanan/ekowisata/EcoProblem";
import { EcoInsight } from "@/components/Layanan/ekowisata/EcoInsight";
import { EcoSolution } from "@/components/Layanan/ekowisata/EcoSolution";
import { EcoValue } from "@/components/Layanan/ekowisata/EcoValue";
import { EcoCTA } from "@/components/Layanan/ekowisata/EcoCTA";

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  title: "Layanan Konsultan Arsitektur & Engineering",
  description:
    "Bangun.in menyediakan layanan konsultan arsitektur, engineering, perencanaan wilayah, topografi, dan geoteknik untuk mendukung pembangunan yang terencana dan profesional.",

  alternates: {
    canonical: "https://bangunciptasolusi.com/layanan",
  },

  openGraph: {
    title: "Layanan Engineering Consultant | Bangun.in",
    description:
      "Layanan profesional konsultan arsitektur, engineering, geoteknik, dan topografi.",
    url: "https://bangunciptasolusi.com/layanan",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Layanan Engineering Consultant | Bangun.in",
    description:
      "Solusi profesional untuk arsitektur, engineering, dan konstruksi.",
  },
};

/* ============================= */
/* STRUCTURED DATA */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringService",
  name: "Bangun.in Engineering Consultant",
  url: "https://bangunciptasolusi.com/layanan",
  serviceType: [
    "Architecture Design",
    "Engineering Consultant",
    "Urban Planning",
    "Geotechnical Engineering",
    "Topography Survey",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja layanan yang disediakan Bangun.in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bangun.in menyediakan layanan arsitektur, engineering, perencanaan wilayah, topografi, dan geoteknik.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Bangun.in melayani proyek di seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan konsultansi kami dapat mendukung proyek di berbagai wilayah Indonesia.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://bangunciptasolusi.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://bangunin.com/layanan",
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON LD */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="relative">

      <EcoHero />
      <EcoProblem />
      <EcoInsight />
      <EcoSolution />
      <EcoValue />
      <EcoCTA />
        {/* SEO INTERNAL LINK */}
     </main>
    </>
  );
}