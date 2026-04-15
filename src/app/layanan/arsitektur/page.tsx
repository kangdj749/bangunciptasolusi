import type { Metadata } from "next"
import Link from "next/link"

import HeroArchitecture from "@/components/Layanan/arsitektur/HeroArchitecture"
import ProblemSection from "@/components/Layanan/arsitektur/ProblemSection"
import AgitationSection from "@/components/Layanan/arsitektur/AgitationSection"
import SolutionSection from "@/components/Layanan/arsitektur/SolutionSection"
import PortfolioSection from "@/components/Layanan/arsitektur/PortfolioSection"
import ProcessSection from "@/components/Layanan/arsitektur/ProcessSection"
import TrustSection from "@/components/Layanan/arsitektur/TrustSection"
import CTASection from "@/components/Layanan/arsitektur/CTASection"
import ServicesSection from "@/components/Layanan/arsitektur/ServicesSection"

import CityServiceList from "@/components/Layanan/LinkCitySection"
import { cities } from "@/lib/seo/cities"

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bangunin.com"),

  title:
    "Jasa Arsitek Profesional Indonesia | Desain Rumah & Bangunan Modern",

  description:
    "Jasa arsitek profesional untuk desain rumah, bangunan komersial, dan proyek konstruksi di seluruh Indonesia. Desain modern, fungsional, dan efisien.",

  keywords: [
    "jasa arsitek",
    "arsitek indonesia",
    "desain rumah modern",
    "jasa desain rumah",
    "arsitek profesional",
  ],

  alternates: {
    canonical: "/layanan/arsitektur",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Jasa Arsitek Profesional - Bangun.in",
    description:
      "Desain rumah dan bangunan modern dengan pendekatan arsitektur profesional.",
    url: "https://bangunin.com/layanan/arsitektur",
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Arsitek Profesional - Bangun.in",
    description:
      "Solusi desain arsitektur modern dan profesional.",
  },
}

/* ============================= */
/* JSON-LD */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Arsitektur",
  provider: {
    "@type": "Organization",
    name: "Bangun.in",
    url: "https://bangunin.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: "Architectural Design",
  url: "https://bangunin.com/layanan/arsitektur",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://bangunin.com" },
    { "@type": "ListItem", position: 2, name: "Layanan", item: "https://bangunin.com/layanan" },
    { "@type": "ListItem", position: 3, name: "Arsitektur", item: "https://bangunin.com/layanan/arsitektur" },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bangun.in",
  url: "https://bangunin.com",
}

/* 🔥 ADVANCED SEO — CITY LIST */
const cityListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cities.map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Jasa Arsitek ${city}`,
    url: `https://bangunin.com/layanan/arsitektur/${city
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
  })),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu jasa arsitek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jasa arsitek adalah layanan profesional untuk merancang bangunan mulai dari konsep hingga gambar kerja.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah melayani seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami melayani berbagai kota di Indonesia.",
      },
    },
  ],
}

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[rgb(var(--color-bg))]">

        {/* HERO */}
        <HeroArchitecture />

        {/* CORE CONTENT */}
        <ProblemSection />
        <AgitationSection />
        <SolutionSection />
        <ServicesSection />

        {/* ============================= */}
        {/* SEO INTRO (HIGH VALUE) */}
        {/* ============================= */}

        <section className="section-tight">
          <div className="container-main max-w-[760px]">

            <h1 className="h2 mb-4">
              Jasa Arsitek Profesional untuk Rumah & Bangunan Modern
            </h1>

            <p className="body text-muted">
              Kami menyediakan jasa arsitek profesional untuk berbagai kebutuhan,
              mulai dari desain rumah tinggal, bangunan komersial,
              hingga proyek skala besar. Setiap desain dirancang
              dengan pendekatan yang menggabungkan estetika,
              fungsi ruang, serta efisiensi biaya konstruksi.
            </p>

            <p className="body text-muted mt-3">
              Dengan pengalaman menangani proyek di berbagai kota di Indonesia,
              kami memastikan setiap rancangan tidak hanya menarik secara visual,
              tetapi juga nyaman digunakan, efisien, dan siap berkembang
              dalam jangka panjang.
            </p>

          </div>
        </section>

        {/* ============================= */}
        {/* CITY LIST (SEO + UX BALANCED) */}
        {/* ============================= */}

        <CityServiceList service="arsitektur" />

        {/* ============================= */}
        {/* PORTFOLIO & TRUST */}
        {/* ============================= */}

        <PortfolioSection />
        <ProcessSection />
        <TrustSection />

        {/* ============================= */}
        {/* RELATED SERVICES */}
        {/* ============================= */}

        <section className="section-tight bg-[rgb(var(--color-soft))]">
          <div className="container-main">

            <h3 className="h3 mb-4">
              Layanan Terkait
            </h3>

            <div className="flex flex-wrap gap-3">

              <Link href="/layanan/penataan-ruang" className="btn btn-outline">
                Penataan Ruang
              </Link>

              <Link href="/layanan/rekayasa-teknik" className="btn btn-outline">
                Rekayasa Teknik
              </Link>

              <Link href="/layanan/topografi-geoteknik" className="btn btn-outline">
                Topografi & Geoteknik
              </Link>

            </div>

          </div>
        </section>

        {/* CTA */}
        <CTASection />

      </main>
    </>
  )
}