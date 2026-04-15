import type { Metadata } from "next"
import Link from "next/link"


import HeroEngineering from "@/components/Layanan/rekayasateknik/HeroEngineering"
import ProblemSection from "@/components/Layanan/rekayasateknik/ProblemSection"
import AgitationSection from "@/components/Layanan/rekayasateknik/AgitationSection"
import SolutionSection from "@/components/Layanan/rekayasateknik/SolutionSection"
import ScopeSection from "@/components/Layanan/rekayasateknik/ScopeSection"
import ServiceBlockAdvanced from "@/components/Layanan/rekayasa/ServiceBlockAdvanced"
import CityServiceList from "@/components/Layanan/LinkCitySection"
/* =================================
   SEO CONFIG
================================= */

const baseUrl = "https://bangunin.com"
const service = "rekayasa-teknik"
const pageUrl = `${baseUrl}/layanan/${service}`

const title =
  "Jasa Rekayasa Teknik Profesional | Civil, Struktur, MEP & Infrastruktur"

const description =
  "Bangun.in menyediakan jasa rekayasa teknik profesional untuk proyek konstruksi, industri, dan infrastruktur. Spesialis civil engineering, struktur, drainase, HVAC, dan sistem mekanikal elektrikal di seluruh Indonesia."

/* =================================
   METADATA
================================= */

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title,
  description,

  keywords: [
    "jasa rekayasa teknik",
    "konsultan civil engineering",
    "jasa struktur bangunan",
    "konsultan MEP",
    "jasa drainase",
    "jasa HVAC",
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

export default function Page() {
  /* =================================
     SCHEMA JSON-LD
  ================================== */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Rekayasa Teknik",
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
      "Civil Engineering",
      "Structural Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Drainase Engineering",
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
        name: "Rekayasa Teknik",
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
        name: "Apa itu jasa rekayasa teknik?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jasa rekayasa teknik adalah layanan perencanaan dan desain teknis untuk memastikan bangunan dan infrastruktur aman, efisien, dan sesuai standar.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani seluruh Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami melayani berbagai kota di Indonesia untuk proyek skala kecil hingga besar.",
        },
      },
      {
        "@type": "Question",
        name: "Apa saja layanan rekayasa teknik?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meliputi civil engineering, struktur, mekanikal, elektrikal, HVAC, dan sistem drainase.",
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

      <main className="relative">

        <HeroEngineering />
        <ProblemSection />
        <AgitationSection />
        <SolutionSection />
        <ScopeSection />

        {/* ================= SERVICES ================= */}

        <ServiceBlockAdvanced
          title="Perencanaan Pabrik & Warehouse"
          desc="Perencanaan fasilitas industri yang efisien, scalable, dan siap berkembang dengan pendekatan sistem produksi dan logistik terintegrasi."
          image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
        />

        <ServiceBlockAdvanced
          reverse
          title="Perencanaan Struktur Rumah Ibadah"
          desc="Perancangan struktur yang kokoh, aman, dan mampu mengakomodasi bentang besar serta kenyamanan jamaah."
          image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
        />

        <ServiceBlockAdvanced
          title="Water Engineering - Drainase"
          desc="Sistem drainase terpadu untuk mengurangi genangan dan menjaga kualitas lingkungan."
          image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
        />

        <ServiceBlockAdvanced
          reverse
          title="Water Engineering - Pengendalian Banjir"
          desc="Solusi komprehensif dari analisis hidrologi hingga desain sistem pengendalian banjir."
          image="https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138852/facade_gedung_unjani_v4_ronjyt.jpg"
        />

        {/* ================= SEO TEXT ================= */}

        <section className="section-tight">
          <div className="container-main max-w-[760px]">

            <h2 className="h2 mb-3">
              Jasa Rekayasa Teknik Terintegrasi & Profesional
            </h2>

            <p className="text-[rgb(var(--color-muted))] body">
              Layanan rekayasa teknik kami mencakup berbagai aspek penting dalam pembangunan,
              mulai dari perencanaan struktur, sistem mekanikal elektrikal, hingga pengelolaan
              air dan lingkungan. Dengan pendekatan berbasis data dan pengalaman proyek nyata,
              kami membantu memastikan setiap proyek berjalan efisien, aman, dan berkelanjutan
              dalam jangka panjang.
            </p>

          </div>
        </section>

        {/* ================= CITY SEO ================= */}

        <CityServiceList service="rekayasa-teknik" />
        {/* ================= INTERNAL LINK ================= */}

        <section className="section-tight">
          <div className="container-main">

            <h3 className="h3 mb-4">
              Layanan Terkait
            </h3>

            <div className="flex flex-wrap gap-3 text-[13px]">

              <Link href="/layanan/penataan-ruang" className="btn btn-outline">
                Penataan Ruang
              </Link>

              <Link href="/layanan/arsitektur" className="btn btn-outline">
                Arsitektur
              </Link>

              <Link href="/layanan/topografi-geoteknik" className="btn btn-outline">
                Topografi & Geoteknik
              </Link>

            </div>

          </div>
        </section>

      </main>
    </>
  )
}