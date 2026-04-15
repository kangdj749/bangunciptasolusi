import type { Metadata } from "next";

import ArchitectureSection from "@/components/Layanan/ArchitectureSection";
import CTALayananSection from "@/components/Layanan/CTALayananSection";
import EngineeringSection from "@/components/Layanan/EngineeringSection";
import ServicesHeroSection from "@/components/Layanan/ServicesHeroSection";
import SistemKerjaSection from "@/components/Layanan/SistemKerjaSection";
import SpatialPlanningSection from "@/components/Layanan/SpatialPlanningSection";
import TopographyGeotechSection from "@/components/Layanan/TopographyGeotechSection";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ServiceLink = {
  title: string;
  href: string;
  desc: string;
};

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bangunin.com"),

  title: "Layanan Konsultan Arsitektur, Engineering & Geoteknik",
  description:
    "Layanan lengkap konsultan arsitektur, rekayasa teknik, penataan ruang, dan geoteknik untuk proyek profesional.",

  alternates: {
    canonical: "/layanan",
  },

  openGraph: {
    title: "Layanan Konsultan | Bangun.in",
    description:
      "Layanan arsitektur, engineering, dan geoteknik profesional.",
    url: "/layanan",
    type: "website",
  },
};

/* ============================= */
/* STRUCTURED DATA */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bangun.in",
  url: "https://bangunin.com",
  areaServed: "Indonesia",
  serviceType: [
    "Jasa Arsitektur",
    "Rekayasa Teknik",
    "Penataan Ruang",
    "Geoteknik",
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
      item: "https://bangunin.com",
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
  const services: ServiceLink[] = [
    {
      title: "Arsitektur",
      href: "/layanan/arsitektur",
      desc: "Perencanaan desain bangunan modern dan fungsional.",
    },
    {
      title: "Penataan Ruang",
      href: "/layanan/penataan-ruang",
      desc: "Perencanaan wilayah berbasis analisis dan keberlanjutan.",
    },
    {
      title: "Rekayasa Teknik",
      href: "/layanan/rekayasa-teknik",
      desc: "Solusi engineering untuk struktur dan infrastruktur.",
    },
    {
      title: "Topografi & Geoteknik",
      href: "/layanan/topografi-geoteknik",
      desc: "Survey lapangan dan analisis kondisi tanah.",
    },
  ];

  return (
    <>
      {/* JSON LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="relative">

        <ServicesHeroSection />

        <SpatialPlanningSection />

        <ArchitectureSection />

        <EngineeringSection />

        <TopographyGeotechSection />

        <SistemKerjaSection />

        {/* ========================= */}
        {/* ENTERPRISE SERVICE NAV */}
        {/* ========================= */}

        <section className="section-tight bg-[rgb(var(--color-soft))]">
          <div className="container-main">

            {/* HEADER */}
            <div
              className="
                mb-10 
                max-w-[560px]
                opacity-0 
                translate-y-[10px]
                animate-[fadeUp_0.6s_ease_forwards]
              "
            >
              <p className="caption-label text-[rgb(var(--color-primary))] mb-2">
                Navigasi Layanan
              </p>

              <h2 className="h2 mb-2">
                Layanan Konsultan Kami
              </h2>

              <p className="caption text-[rgb(var(--color-muted))]">
                Jelajahi layanan kami secara lebih detail sesuai kebutuhan proyek Anda.
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

              {services.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    block
                    h-full
                    card-premium
                    p-[18px]
                    transition-all
                    duration-300
                    hover:-translate-y-[2px]
                    hover:shadow-[var(--shadow-elevated)]
                    opacity-0
                    translate-y-[10px]
                    animate-[fadeUp_0.6s_ease_forwards]
                  "
                  style={{
                    animationDelay: `${index * 0.06}s`,
                  }}
                >
                  {/* TITLE */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[13px] font-semibold text-[rgb(var(--color-text))]">
                      {item.title}
                    </h3>

                    <FiArrowUpRight
                      size={16}
                      className="
                        text-[rgb(var(--color-muted))]
                        group-hover:text-[rgb(var(--color-primary))]
                        transition-colors
                      "
                    />
                  </div>

                  {/* DESC */}
                  <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))]">
                    {item.desc}
                  </p>

                  {/* LINE */}
                  <div
                    className="
                      mt-4
                      h-[2px]
                      w-0
                      bg-[rgb(var(--color-primary))]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}

            </div>

          </div>
        </section>

        <CTALayananSection />

      </main>
    </>
  );
}