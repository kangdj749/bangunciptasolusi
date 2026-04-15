"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function PhilosophySection() {
  const philosophyImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772196325/SECTION-IMAGE-TALKSHOW_xqzxnx.png";

  const approachPoints = [
    "Studi kelayakan dan analisis kebutuhan secara menyeluruh",
    "Perencanaan berbasis data dan regulasi yang berlaku",
    "Manajemen risiko pada setiap tahapan pekerjaan",
    "Koordinasi lintas disiplin untuk meminimalkan potensi konflik desain",
    "Pengendalian mutu melalui sistem evaluasi internal",
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
              Pendekatan Profesional yang Terukur
            </p>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

            {/* Headline */}
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
              Filosofi & Pendekatan Kerja
            </h2>

            {/* Narasi */}
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-6">
              Dalam setiap proyek, kami mengedepankan pendekatan berbasis analisis teknis yang komprehensif dan terstruktur. Proses kerja kami mencakup:
            </p>

            {/* Approach List */}
            <ul className="list-disc list-inside text-[14px] md:text-[15px] leading-[1.75] text-muted mb-6 space-y-2">
              {approachPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
              Kami percaya bahwa keberhasilan proyek tidak hanya ditentukan oleh kualitas desain, tetapi juga oleh ketepatan metodologi, akurasi perhitungan teknis, serta efektivitas koordinasi antar pemangku kepentingan.
            </p>

            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mt-4">
              Dengan sistem kerja yang terstandarisasi, kami memastikan setiap solusi yang dihasilkan dapat diimplementasikan secara efisien dan bertanggung jawab.
            </p>
          </div>

          {/* Vertical Executive Divider (Desktop Only) */}
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-[rgb(var(--color-secondary))] to-transparent" />

          {/* RIGHT IMAGE */}
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden border border-[rgb(var(--color-secondary))] shadow-sm">

            <Image
              src={cloudinaryImage(philosophyImage, "portrait")}
              alt="PT Bangun Cipta Solusi - Filosofi dan Pendekatan Kerja"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
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