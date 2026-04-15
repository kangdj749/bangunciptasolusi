"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function SpatialHero() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138404/masjid_unjani_v18_qopors.jpg";

  return (
    <section className="relative min-h-[500px] md:min-h-[640px] flex items-center overflow-hidden w-full bg-[rgb(var(--color-bg))]">

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Architecture Engineering Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay (improved readability) */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/60" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px] py-16 md:py-20"
        >

          {/* Micro Label */}
          <p className="text-[10px] tracking-[1.8px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
            Engineering Consultant
          </p>

          {/* Headline */}
          <h1 className="h1 text-[rgb(var(--color-white))] mb-4">
            Integrated Architecture,
            <span className="block">
              Engineering & Construction
            </span>
          </h1>

          {/* Subheadline */}
          <p className="body text-[rgb(var(--color-white))]/85 mb-7 max-w-[520px]">
            Konsultan teknik independen yang menghadirkan solusi terintegrasi untuk perencanaan, desain, dan manajemen konstruksi secara profesional.

          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">

            <a
              href="/kontak#consultation-form"
              className="btn btn-primary-dark"
            >
              Konsultasi
            </a>

            <button
              className="
                btn btn-outline-light
              "
            >
              Portofolio
            </button>

          </div>

        </motion.div>
      </div>

    </section>
  );
}