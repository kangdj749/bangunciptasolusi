import type { Metadata } from "next"
import Link from "next/link"
import {
  generateCityMetadata,
  generateCitySchemas,
} from "@/lib/seo/cityPage"
import { cities } from "@/lib/seo/cities"
import { generateAIContent } from "@/lib/seo/contentAI"

/* ============================= */
/* TYPES */
/* ============================= */

type PageProps = {
  params: {
    service: string
    city: string
  }
}

/* ============================= */
/* METADATA */
/* ============================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = params.service.replace(/-/g, " ")
  const city = params.city

  return generateCityMetadata({
    city,
    service,
    slug: params.service,
    description: `Layanan ${service} profesional di ${city} untuk perencanaan dan konstruksi proyek Anda.`,
  })
}

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page({ params }: PageProps) {
  const city = params.city
  const cleanService = params.service.replace(/-/g, " ")

  const ai = generateAIContent({
    city,
    service: cleanService,
  })

  const { serviceSchema, breadcrumbSchema } = generateCitySchemas({
    city,
    service: cleanService,
    slug: params.service,
    description: ai.intro,
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* HERO */}
      <section className="section-tight bg-[rgb(var(--color-soft))]">
        <div className="container-main max-w-[820px]">

          <p className="caption-label text-[rgb(var(--color-primary))] mb-2">
            Layanan di {city}
          </p>

          <h1 className="h1 mb-3">
            {cleanService} Profesional di {city}
          </h1>

          <p className="body text-[rgb(var(--color-muted))]">
            {ai.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontak" className="btn btn-primary">
              Konsultasi Sekarang
            </Link>

            <Link href="/portfolio" className="btn btn-outline">
              Lihat Portfolio
            </Link>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="section-tight">
        <div className="container-main grid md:grid-cols-2 gap-6">

          <div className="card-premium">
            <h2 className="h3 mb-3">Tantangan Proyek di {city}</h2>
            <p className="text-[13px] text-[rgb(var(--color-muted))]">
              {ai.problem}
            </p>
          </div>

          <div className="card-premium">
            <h2 className="h3 mb-3">Solusi {cleanService}</h2>
            <p className="text-[13px] text-[rgb(var(--color-muted))]">
              {ai.solution}
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-tight bg-[rgb(var(--color-soft))]">
        <div className="container-main max-w-[720px] text-center">

          <h2 className="h2 mb-3">
            Konsultasi {cleanService} di {city}
          </h2>

          <p className="caption mb-6">
            {ai.closing}
          </p>

          <Link href="/kontak" className="btn btn-primary">
            Hubungi Kami
          </Link>

        </div>
      </section>

      {/* INTERNAL LINK */}
      <section className="section-tight">
        <div className="container-main">

          <h3 className="h3 mb-4">Layanan Terkait</h3>

          <div className="flex flex-wrap gap-3">
            <Link href="/layanan/arsitektur" className="btn btn-soft">
              Jasa Arsitektur
            </Link>

            <Link href="/layanan/rekayasa-teknik" className="btn btn-soft">
              Rekayasa Teknik
            </Link>

            <Link href="/layanan/penataan-ruang" className="btn btn-soft">
              Penataan Ruang
            </Link>

            <Link href="/layanan/topografi-geoteknik" className="btn btn-soft">
              Topografi & Geoteknik
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}

/* ============================= */
/* STATIC GENERATION */
/* ============================= */

export async function generateStaticParams() {
  const services = [
    "arsitektur",
    "penataan-ruang",
    "rekayasa-teknik",
    "topografi-geoteknik",
  ]

  return services.flatMap((service) =>
    cities.map((city) => ({
      service,
      city: city.toLowerCase().replace(/\s+/g, "-"),
    }))
  )
}