"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function CompanyPositioningSection() {
  const positioningImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773565282/sinergy_l0dwjh.jpg";

  return (
    <section
      id="sinergi"
      className="section-tight bg-[rgb(var(--color-bg))] overflow-hidden"
    >
      <div className="container-main">

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Image */}
          <div
            className="
              relative
              w-full md:w-1/2
              h-[220px] sm:h-[260px] md:h-[300px]
              rounded-[var(--radius-lg)]
              overflow-hidden
              border border-[rgb(var(--color-border))]
              shadow-[var(--shadow-soft)]
            "
          >
            <Image
              src={cloudinaryImage(positioningImage, "banner")}
              alt="Tim diskusi teknis / site visit"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* subtle overlay biar lebih premium */}
            <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 max-w-[520px]"
          >
            {/* Eyebrow */}
            <p className="caption uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] mb-3">
              Positioning Perusahaan
            </p>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-4" />

            {/* Headline */}
            <h2 className="h2 text-[rgb(var(--color-text))] mb-4">
              Sinergi Profesionalisme
              <span className="block text-[rgb(var(--color-primary))]">
                untuk Pembangunan Bangsa
              </span>
            </h2>

            {/* Body */}
            <div className="space-y-3 body text-[rgb(var(--color-muted))]">
              <p>
                PT. Bangun Cipta Solusi hadir sebagai pusat kolaborasi tenaga ahli
                arsitektur dan rekayasa teknik yang berkomitmen menghadirkan solusi
                terukur, akuntabel, dan berkelanjutan.
              </p>

              <p>
                Sinergi antara profesional muda yang adaptif dengan tenaga senior
                berpengalaman menjadi fondasi utama dalam setiap proyek yang kami
                tangani.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}