"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { sizes } from "@/lib/utils/imageSizes";

export default function HeroEngineeringSplit() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773565509/engineering.jpg";

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="caption-label text-subtle mb-4"
          >
            Bidang Rekayasa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[34px] md:text-[44px] font-semibold leading-[1.25] mb-6"
          >
            Perencanaan Rekayasa yang Presisi untuk Proyek yang Lebih Aman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="body-lg text-muted mb-8 max-w-[520px]"
          >
            Solusi teknik berbasis analisis mendalam dan pendekatan multidisiplin
            untuk memastikan efisiensi dan keberlanjutan proyek.
          </motion.p>

          <div className="flex gap-3">
            <Link href="/kontak" className="btn btn-primary-hero">
              Konsultasi Proyek
            </Link>
            <Link href="/portfolio" className="btn btn-outline-hero">
              Lihat Portofolio
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[420px] rounded-[var(--radius-lg)] overflow-hidden"
        >
          <Image
            src={cloudinaryImage(image, "banner")}
            alt="Engineering"
            fill
            sizes={sizes.full}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-dark))]/20 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}