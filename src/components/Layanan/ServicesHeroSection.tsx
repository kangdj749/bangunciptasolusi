"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ServicesHeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773549685/Flag_map_of_Indonesia_w6ofjn.svg";

  return (
    <section className="
        relative
        h-[100vh]
        min-h-[720px]

        /* 🔥 ini kunci biar nempel ke navbar */
        -mt-[72px]
        pt-[72px]

        overflow-hidden
        bg-[rgb(var(--color-dark))]
      ">

      {/* ================= BACKGROUND ================= */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
        className="absolute inset-0"
      >
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Layanan arsitektur, rekayasa teknik, dan topografi"
          fill
          priority
          sizes="100vw"
          className="object-cover will-change-transform"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/70" />

      {/* Subtle gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 section flex items-center">
        <div className="container-main">

          <div className="max-w-[640px]">

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="caption-light caption-label mb-4"
            >
              Lingkup Layanan
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="h1 text-[rgb(var(--color-white))] mb-5"
            >
              Solusi Profesional Terintegrasi untuk Setiap Tahapan Proyek
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="body-lg text-[rgb(var(--color-white))]/85 mb-8 max-w-[560px]"
            >
              Menghadirkan layanan arsitektur, rekayasa teknik, dan
              perencanaan berbasis data untuk memastikan setiap proyek
              berjalan lebih presisi, efisien, dan terukur sejak tahap awal.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/kontak"
                className="btn btn-primary-dark hover:scale-[1.02] active:scale-[0.98]"
              >
                Konsultasi Proyek
              </Link>

              <Link
                href="/portfolio"
                className="btn btn-outline-light hover:bg-[rgb(var(--color-white))]/10"
              >
                Lihat Portofolio
              </Link>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgb(var(--color-white))]/70 text-[10px] tracking-[2px]"
      >
        SCROLL
      </motion.div>

    </section>
  );
}