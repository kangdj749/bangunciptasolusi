"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function BackgroundSection() {
  const backgroundImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png";

  return (
    <section className="relative py-10 md:py-20 overflow-hidden">

      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/10 via-white to-white pointer-events-none" />

      <div className="container-main relative">

        <div className="grid md:grid-cols-[1.05fr_auto_0.95fr] gap-10 md:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* Micro Label */}
            <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
              Awal Berdirinya Perusahaan
            </p>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

            {/* H2 / Headline */}
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
              Membangun Fondasi Keunggulan Profesional
            </h2>

            {/* Narasi */}
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-6">
              PT. Bangun Cipta Solusi didirikan atas kesadaran akan pentingnya integrasi lintas disiplin dalam setiap tahapan pembangunan. 
              Dalam praktiknya, banyak proyek menghadapi tantangan akibat kurangnya koordinasi antara perencanaan arsitektur, rekayasa teknik, dan pengelolaan konstruksi.
            </p>

            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-8">
              Kami melihat kebutuhan akan sebuah entitas profesional yang mampu menjembatani seluruh aspek tersebut secara terpadu, sehingga setiap keputusan desain dan teknis dapat dipertanggungjawabkan secara menyeluruh — dari tahap perencanaan hingga implementasi.
            </p>

            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
              Berangkat dari komitmen tersebut, BANGUN.IN dibentuk sebagai pusat kolaborasi tenaga ahli yang memiliki integritas, kompetensi, dan komitmen terhadap mutu.
            </p>

          </div>

          {/* Vertical Executive Divider (Desktop Only) */}
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-[rgb(var(--color-secondary))] to-transparent" />

          {/* RIGHT IMAGE */}
          <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-lg overflow-hidden border border-[rgb(var(--color-secondary))] shadow-sm">

            <Image
              src={cloudinaryImage(backgroundImage, "banner")}
              alt="PT Bangun Cipta Solusi - Tim dan Proses Kerja"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Soft Inner Ring */}
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}