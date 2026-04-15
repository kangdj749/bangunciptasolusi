"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function AboutSections() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  const institutions = [
    "Institut Teknologi Bandung",
    "Universitas Gadjah Mada",
    "Universitas Padjadjaran",
  ];

  return (
    <div className="space-y-32">
      {/* ========================= */}
      {/* SECTION 1 — HERO ABOUT */}
      {/* ========================= */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/20 via-white to-white pointer-events-none" />
        <div className="container-main relative">
          <div className="grid md:grid-cols-[1.05fr_auto_0.95fr] gap-10 md:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
                Membangun Fondasi Keunggulan Profesional
              </p>
              <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />
              <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-8">
                PT. Bangun Cipta Solusi (BANGUN.IN) adalah konsultan teknik independen
                yang mengintegrasikan arsitektur, rekayasa teknik, dan manajemen konstruksi
                dalam satu sistem kerja terstruktur, akuntabel, dan berorientasi hasil.
                Kami hadir sebagai mitra strategis bagi pemerintah, institusi, dan sektor
                swasta dalam merancang solusi pembangunan yang tepat secara teknis dan
                selaras dengan kebutuhan jangka panjang serta prinsip keberlanjutan.
              </p>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-[rgb(var(--color-secondary))] to-transparent" />

            {/* RIGHT IMAGE */}
            <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-lg overflow-hidden border border-[rgb(var(--color-secondary))] shadow-sm">
              <Image
                src={cloudinaryImage(heroImage, "banner")}
                alt="PT Bangun Cipta Solusi - Tentang Kami"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 2 — LATAR BELAKANG */}
      {/* ========================= */}
      <section className="py-16 md:py-24">
        <div className="container-main max-w-2xl">
          <h2 className="h2 text-[rgb(var(--color-primary))] mb-6">
            Awal Berdirinya Perusahaan
          </h2>
          <p className="body-lg mb-4">
            PT. Bangun Cipta Solusi didirikan untuk menjembatani perencanaan arsitektur,
            rekayasa teknik, dan manajemen konstruksi secara terpadu. Setiap keputusan
            desain dan teknis dapat dipertanggungjawabkan sepenuhnya.
          </p>
          <p className="body-lg">
            BANGUN.IN merupakan pusat kolaborasi tenaga ahli dengan integritas,
            kompetensi, dan komitmen tinggi terhadap mutu.
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 3 — FILOSOFI & PENDEKATAN KERJA */}
      {/* ========================= */}
      <section className="py-16 md:py-24 bg-[rgb(var(--color-secondary))]/10">
        <div className="container-main max-w-2xl">
          <h2 className="h2 text-[rgb(var(--color-primary))] mb-6">
            Pendekatan Profesional yang Terukur
          </h2>
          <ul className="list-disc list-inside space-y-2 body-lg mb-4">
            <li>Studi kelayakan & analisis kebutuhan</li>
            <li>Perencanaan berbasis data & regulasi</li>
            <li>Manajemen risiko di tiap tahapan</li>
            <li>Koordinasi lintas disiplin</li>
            <li>Pengendalian mutu internal</li>
          </ul>
          <p className="body-lg">
            Sistem kerja terstandarisasi memastikan setiap solusi dapat diimplementasikan
            efisien dan bertanggung jawab.
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 4 — SINERGI KEAHLIAN MULTIDISIPLIN */}
      {/* ========================= */}
      <section className="py-16 md:py-24">
        <div className="container-main max-w-2xl">
          <h2 className="h2 text-[rgb(var(--color-primary))] mb-6">
            Kolaborasi Akademik & Praktisi Profesional
          </h2>
          <p className="body-lg mb-4">
            Kekuatan BANGUN.IN terletak pada sinergi tenaga ahli muda adaptif
            dengan profesional senior berpengalaman.
          </p>
          <ul className="list-disc list-inside space-y-2 body-lg">
            {institutions.map((inst, idx) => (
              <li key={idx}>{inst}</li>
            ))}
          </ul>
          <p className="body-lg mt-4">
            Kemitraan strategis dan tenaga ahli bersertifikasi memastikan kapasitas
            teknis memadai untuk proyek berskala regional maupun nasional.
          </p>
        </div>
      </section>
    </div>
  );
}