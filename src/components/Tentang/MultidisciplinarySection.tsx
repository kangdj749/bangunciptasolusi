"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function MultidisciplinarySection() {
  const teamImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772196325/SECTION-IMAGE-TALKSHOW_xqzxnx.png";

  const institutions = [
    "Institut Teknologi Bandung",
    "Universitas Gadjah Mada",
    "Universitas Padjadjaran",
  ];

  return (
    <section className="relative py-10 md:py-20 overflow-hidden">

      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/10 via-white to-white pointer-events-none" />

      <div className="container-main relative">

        <div className="grid md:grid-cols-[1.05fr_auto_0.95fr] gap-10 md:gap-14 items-start">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* Micro Label */}
            <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
              Kolaborasi Akademik & Praktisi Profesional
            </p>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

            {/* Headline */}
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
              Sinergi Keahlian Multidisiplin
            </h2>

            {/* Narasi */}
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4">
              Kekuatan utama PT. Bangun Cipta Solusi terletak pada sinergi antara tenaga ahli muda yang adaptif terhadap perkembangan teknologi dengan profesional senior yang matang dalam pengalaman lapangan.
            </p>

            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4">
              Tim kami didukung oleh latar belakang akademik dari berbagai institusi terkemuka di Indonesia, termasuk:
            </p>

            {/* Institutions List */}
            <ul className="list-disc list-inside text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4 space-y-1">
              {institutions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ul>

            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
              Kolaborasi ini memungkinkan kami menghadirkan solusi yang tidak hanya aplikatif secara praktik, tetapi juga relevan dengan perkembangan keilmuan dan standar profesional terkini.
            </p>

            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mt-4">
              Selain itu, kami menjalin kemitraan strategis dengan berbagai konsultan dan tenaga ahli bersertifikasi untuk memastikan kapasitas teknis yang memadai dalam menangani proyek berskala regional maupun nasional.
            </p>
          </div>

          {/* Vertical Executive Divider (Desktop Only) */}
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-[rgb(var(--color-secondary))] to-transparent" />

          {/* RIGHT IMAGE */}
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden border border-[rgb(var(--color-secondary))] shadow-sm">

            <Image
              src={cloudinaryImage(teamImage, "portrait")}
              alt="PT Bangun Cipta Solusi - Multidisciplinary Team"
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