"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { sizes } from "@/lib/utils/imageSizes";

export default function HeroTopografi() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774597400/topografi_zaod2m.jpg";

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

      {/* BG */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={cloudinaryImage(image, "banner")}
          alt="Topografi"
          fill
          sizes={sizes.full}
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/60" />

      <div className="relative z-10 section flex items-center">
        <div className="container-main">

          <div className="max-w-[640px]">

            <p className="caption-light caption-label mb-4">
              Bidang Topografi & Geoteknik
            </p>

            <h1 className="h1 text-[rgb(var(--color-white))] mb-5">
              Fondasi Keputusan Proyek Dimulai dari Data yang Presisi
            </h1>

            <p className="body-lg text-[rgb(var(--color-white))]/85 mb-8">
              Layanan survey topografi dan investigasi tanah untuk memastikan
              setiap desain dan konstruksi berdiri di atas data yang akurat
              dan dapat dipertanggungjawabkan.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link href="/kontak" className="btn btn-primary-hero">
                Konsultasi Awal
              </Link>
              <Link href="/portfolio" className="btn btn-outline-hero">
                Lihat Portofolio
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}