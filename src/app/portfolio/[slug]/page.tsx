
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { cloudinaryImage } from "@/lib/cloudinaryImage"
import { getPortfolios } from "@/lib/portfolio"
import Gallery from "./Gallery" // ⬅️ import client component

/* ==============================
   STATIC PARAMS
============================== */
export async function generateStaticParams() {
  const projects = await getPortfolios()

  return projects.map((p) => ({
    slug: p.slug,
  }))
}

/* ==============================
   SERVICES
============================== */
const services = [
  { name: "Penataan Ruang", href: "/layanan/penataan-ruang" },
  { name: "Arsitektur", href: "/layanan/arsitektur" },
  { name: "Rekayasa Teknik", href: "/layanan/rekayasa-teknik" },
  { name: "Topografi & Geoteknik", href: "/layanan/topografi-geoteknik" },
]

/* ==============================
   PAGE
============================== */
export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const projects = await getPortfolios()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  const related = project.related_slugs.length
    ? projects.filter((p) => project.related_slugs.includes(p.slug))
    : projects
        .filter(
          (p) =>
            p.slug !== project.slug &&
            p.category === project.category
        )
        .slice(0, 3)

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        <div className="relative h-[340px] md:h-[420px]">
          <Image
            src={cloudinaryImage(project.cover_image, "banner")}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/40" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container-main">
            <div className="max-w-[720px] text-[rgb(var(--color-white))]">

              <p className="caption-light mb-3">
                <Link href="/">Home</Link> /{" "}
                <Link href="/portfolio">Portfolio</Link>
              </p>

              <p className="caption-light uppercase tracking-wider mb-2">
                {project.category}
              </p>

              <h1 className="h1 mb-3">
                {project.title}
              </h1>

              <p className="caption-light">
                {project.location} • {project.year}
              </p>

            </div>
          </div>
        </div>

      </section>

      {/* ================= CONTENT ================= */}
      <section className="section">
        <div className="container-main grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-10">

            {/* DESCRIPTION */}
            <div>
              <h2 className="h2 mb-3">Deskripsi Proyek</h2>
              <p className="body text-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* GRID INFO (BIAR RINGKAS) */}
            <div className="grid sm:grid-cols-2 gap-6">

              {project.challenge && (
                <div className="card-premium">
                  <h3 className="h3 mb-2">Tantangan</h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="card-premium">
                  <h3 className="h3 mb-2">Solusi</h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

            </div>

            {project.result && (
              <div className="card-premium">
                <h3 className="h3 mb-2">Hasil</h3>
                <p className="text-muted text-[13px] leading-relaxed">
                  {project.result}
                </p>
              </div>
            )}

            {/* ================= GALLERY ================= */}
            {project.gallery_images.length > 0 && (
              <Gallery images={project.gallery_images} />
            )}

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="card-premium sticky top-24">

              <h3 className="h3 mb-4">Informasi Proyek</h3>

              <div className="grid grid-cols-2 gap-y-3 text-[13px]">

                <span className="text-subtle">Client</span>
                <span>{project.client}</span>

                <span className="text-subtle">Kategori</span>
                <span>{project.category}</span>

                <span className="text-subtle">Lokasi</span>
                <span>{project.location}</span>

                <span className="text-subtle">Tahun</span>
                <span>{project.year}</span>

              </div>

              <Link
                href="/kontak"
                className="btn btn-primary w-full mt-6"
              >
                Konsultasi Proyek
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ================= INTERNAL LINK ================= */}
      <section className="section-tight">
        <div className="container-main max-w-[760px]">

          <h2 className="h2 mb-3">
            Layanan Terintegrasi
          </h2>

          <p className="text-muted mb-5">
            Proyek ini merupakan bagian dari sistem kerja terintegrasi
            yang mencakup arsitektur, rekayasa teknik, dan manajemen
            konstruksi untuk menghasilkan solusi yang presisi dan efisien.
          </p>

          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="btn btn-outline">
                {s.name}
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= RELATED ================= */}
      <section className="section-tight bg-soft">
        <div className="container-main">

          <h2 className="h2 mb-6">Proyek Terkait</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group block border rounded-[var(--radius-lg)] overflow-hidden"
              >
                <div className="relative h-40">
                  <Image
                    src={cloudinaryImage(item.cover_image, "card")}
                    alt={item.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <p className="caption text-muted">
                    {item.category}
                  </p>

                  <h3 className="text-[13px] font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}

