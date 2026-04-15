import type { Metadata } from "next"
import Link from "next/link"

import SpatialHero from "@/components/Layanan/SpatialHero"
import { SpatialProblemSection } from "@/components/Layanan/SpatialProblemSection"
import { SpatialAgitationSection } from "@/components/Layanan/SpatialAgitationSection"
import { SpatialSolutionSection } from "@/components/Layanan/SpatialSolutionSection"
import { SpatialServicesSection } from "@/components/Layanan/SpatialServicesSection"
import { SpatialApproachSection } from "@/components/Layanan/SpatialApproachSection"
import { SpatialTrustSection } from "@/components/Layanan/SpatialTrustSection"
import SpatialCTASection from "@/components/Layanan/SpatialCTASection"
import CityServiceList from "@/components/Layanan/LinkCitySection"


/* ============================= */
/* SEO METADATA (ADVANCED) */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bangunin.com"),

  title:
    "Jasa Penataan Ruang & Urban Planning Indonesia | RTRW, RDTR Profesional",

  description:
    "Layanan jasa penataan ruang, urban planning, RTRW & RDTR profesional untuk perencanaan wilayah, kota, dan kawasan berkelanjutan di seluruh Indonesia.",

  keywords: [
    "jasa penataan ruang",
    "konsultan tata ruang",
    "urban planning indonesia",
    "jasa rdtr",
    "jasa rtrw",
    "perencanaan wilayah",
  ],

  alternates: {
    canonical: "/layanan/penataan-ruang",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Jasa Penataan Ruang & Urban Planning - Bangun.in",
    description:
      "Perencanaan wilayah, kota, dan kawasan berkelanjutan di Indonesia.",
    url: "https://bangunin.com/layanan/penataan-ruang",
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Penataan Ruang - Bangun.in",
    description:
      "Solusi perencanaan wilayah dan tata ruang profesional.",
  },
}

/* ============================= */
/* JSON-LD */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Penataan Ruang",
  provider: {
    "@type": "Organization",
    name: "Bangun.in",
    url: "https://bangunin.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: "Urban Planning",
  url: "https://bangunin.com/layanan/penataan-ruang",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://bangunin.com" },
    { "@type": "ListItem", position: 2, name: "Layanan", item: "https://bangunin.com/layanan" },
    { "@type": "ListItem", position: 3, name: "Penataan Ruang", item: "https://bangunin.com/layanan/penataan-ruang" },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bangun.in",
  url: "https://bangunin.com",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu jasa penataan ruang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Layanan perencanaan wilayah untuk mengatur penggunaan lahan secara optimal dan berkelanjutan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah melayani seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan tersedia di berbagai kota di Indonesia.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>

        <SpatialHero />

        

        <SpatialProblemSection />
        <SpatialAgitationSection />
        <SpatialSolutionSection />
        <SpatialServicesSection />
        <SpatialApproachSection />
        <SpatialTrustSection />

        {/* ============================= */}
        {/* SEO INTRO (VERY IMPORTANT) */}
        {/* ============================= */}

        <section className="section-tight">
          <div className="container-main max-w-[760px]">

            <h1 className="h2 mb-3">
              Jasa Penataan Ruang & Perencanaan Wilayah di Indonesia
            </h1>

            <p className="text-muted">
              Kami menyediakan layanan jasa penataan ruang profesional untuk berbagai kebutuhan
              perencanaan wilayah, kota, kawasan industri, hingga pengembangan properti.
              Mulai dari penyusunan RTRW, RDTR, hingga masterplan kawasan,
              semua dirancang dengan pendekatan strategis, terukur, dan berkelanjutan.
            </p>

            <p className="text-muted mt-3">
              Dengan pengalaman di berbagai proyek skala nasional, kami membantu klien
              memastikan setiap perencanaan memiliki arah yang jelas, efisien,
              serta sesuai regulasi dan kebutuhan jangka panjang.
            </p>

          </div>
        </section>

        {/* ============================= */}
        {/* CITY SEO GRID (POWER SEO) */}
        {/* ============================= */}

         <CityServiceList service="penataan-ruang" />
        {/* ============================= */}
        {/* RELATED SERVICES */}
        {/* ============================= */}

        <section className="section-tight">
          <div className="container-main">

            <h3 className="h3 mb-4">
              Layanan Terkait
            </h3>

            <div className="flex flex-wrap gap-3 text-[13px]">

              <Link href="/layanan/arsitektur" className="btn btn-outline">
                Arsitektur
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

        <SpatialCTASection />

      </main>
    </>
  )
}