import type { Metadata } from "next"
import Link from "next/link"


import HeroTopografi from "@/components/Layanan/topografi/HeroTopografi"
import ProblemTopografi from "@/components/Layanan/topografi/ProblemTopografi"
import SolutionTopografi from "@/components/Layanan/topografi/SolutionTopografi"
import ServicesTopografi from "@/components/Layanan/topografi/ServicesTopografi"
import SubServicesTopografi from "@/components/Layanan/topografi/SubServicesTopografi"
import WhyTopografi from "@/components/Layanan/topografi/WhyTopografi"
import ImpactTopografi from "@/components/Layanan/topografi/ImpactTopografi"
import CTATopografi from "@/components/Layanan/topografi/CTATopografi"
import FieldGallerySection from "@/components/Layanan/topografi/FieldGallerySection"
import CityServiceList from "@/components/Layanan/LinkCitySection"
/* =================================
   SEO CONFIG
================================= */

const baseUrl = "https://bangunciptasolusi.com"
const service = "topografi-geoteknik"
const pageUrl = `${baseUrl}/layanan/${service}`

const title =
  "Jasa Survey Topografi & Soil Investigation | Geoteknik Profesional"

const description =
  "Bangun.in menyediakan jasa survey topografi, soil investigation, dan geoteknik profesional untuk memastikan proyek konstruksi berdiri di atas data akurat, presisi, dan terpercaya di seluruh Indonesia."

/* =================================
   METADATA
================================= */

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title,
  description,

  keywords: [
    "survey topografi",
    "soil investigation",
    "jasa sondir",
    "uji tanah SPT",
    "geoteknik indonesia",
    "jasa topografi",
  ],

  alternates: {
    canonical: `/layanan/${service}`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

/* =================================
   PAGE
================================= */

export default function TopografiPage() {
  /* =================================
     SCHEMA JSON-LD
  ================================== */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Survey Topografi & Soil Investigation",
    description,
    provider: {
      "@type": "Organization",
      name: "Bangun.in",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: [
      "Survey Topografi",
      "Soil Investigation",
      "Geotechnical Engineering",
    ],
    url: pageUrl,
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bangun.in",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Layanan",
        item: `${baseUrl}/layanan`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Topografi & Geoteknik",
        item: pageUrl,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu survey topografi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Survey topografi adalah proses pengukuran kondisi permukaan tanah untuk mendapatkan data elevasi, kontur, dan posisi yang akurat.",
        },
      },
      {
        "@type": "Question",
        name: "Apa itu soil investigation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Soil investigation adalah proses investigasi kondisi tanah melalui pengujian seperti sondir dan SPT untuk mengetahui daya dukung tanah.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah layanan tersedia di seluruh Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami melayani survey topografi dan geoteknik di berbagai kota di Indonesia.",
        },
      },
    ],
  }

  return (
    <>
      {/* ================= JSON LD ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= CONTENT ================= */}

      <main className="bg-[rgb(var(--color-bg))]">

        <HeroTopografi />
        <ProblemTopografi />
        <SolutionTopografi />
        <FieldGallerySection />
        <ServicesTopografi />
        <SubServicesTopografi />
        <WhyTopografi />
        <ImpactTopografi />

        {/* ================= SEO TEXT ================= */}

        <section className="section-tight">
          <div className="container-main max-w-[760px]">

            <h2 className="h2 mb-3">
              Jasa Survey Topografi & Geoteknik Profesional
            </h2>

            <p className="text-[rgb(var(--color-muted))] body">
              Layanan survey topografi dan geoteknik kami dirancang untuk memberikan
              data lapangan yang akurat sebagai dasar pengambilan keputusan dalam
              proyek konstruksi. Dengan metode pengukuran modern dan tim berpengalaman,
              kami memastikan setiap data yang dihasilkan presisi, dapat dipertanggungjawabkan,
              serta mendukung efisiensi dan keamanan proyek dalam jangka panjang.
            </p>

          </div>
        </section>

        {/* ================= CITY SEO ================= */}

        <CityServiceList service="soil-investigasi" />

        {/* ================= INTERNAL LINK ================= */}

        <section className="section-tight">
          <div className="container-main">

            <h3 className="h3 mb-4">
              Layanan Terkait
            </h3>

            <div className="flex flex-wrap gap-3 text-[13px]">

              <Link href="/layanan/desain-interior" className="btn btn-outline">
                Desain Interior
              </Link>

              <Link href="/layanan/desain-arsitektur" className="btn btn-outline">
                Desain Arsitektur
              </Link>

              <Link href="/layanan/manajemen-konstruksi" className="btn btn-outline">
                Manajemen Kontruksi
              </Link>

              <Link href="/layanan/rekayasa-konstruksi" className="btn btn-outline">
                Rekayasa Konstruksi
              </Link>
              <Link href="/layanan/survey-topografi" className="btn btn-outline">
                Survey Topografi
              </Link>


            </div>

          </div>
        </section>

        <CTATopografi />

      </main>
    </>
  )
}