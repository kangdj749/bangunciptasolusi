"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function HeroSpatialPlanning() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138404/masjid_unjani_v18_qopors.jpg";

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
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={cloudinaryImage(image, "banner")}
          alt="Penataan Ruang"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* overlay layers */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(var(--color-bg))] to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 section">
        <div className="container-main">

          <div className="grid grid-cols-12 gap-8 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-7 max-w-[720px]"
            >

              {/* Label */}
              <p className="caption-light caption-label mb-5">
                Bidang Penataan Ruang
              </p>

              {/* Headline */}
              <h1 className="
                text-[34px]
                md:text-[48px]
                lg:text-[56px]
                font-semibold
                leading-[1.08]
                text-[rgb(var(--color-white))]
                mb-6
              ">
                Penataan Ruang yang Terencana, Terukur, dan Berkelanjutan
              </h1>

              {/* Description */}
              <p className="
                text-[16px]
                md:text-[18px]
                leading-[1.8]
                text-[rgb(var(--color-white))]/85
                max-w-[600px]
                mb-10
              ">
                Kami membantu pemerintah, pengembang, dan institusi dalam merancang
                tata ruang yang tidak hanya fungsional, tetapi juga menciptakan
                nilai jangka panjang melalui pendekatan strategis dan kontekstual.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">

                <Link
                  href="/kontak"
                  className="btn btn-primary-hero"
                >
                  Konsultasi Proyek
                </Link>

                <Link
                  href="/portfolio"
                  className="btn btn-outline-hero"
                >
                  Lihat Portofolio
                </Link>

              </div>

            </motion.div>

            {/* EMPTY (visual balance) */}
            <div className="hidden md:block md:col-span-5" />

          </div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgb(var(--color-white))]/60 text-[10px] tracking-[2px]"
      >
        SCROLL
      </motion.div>

    </section>
  );
}