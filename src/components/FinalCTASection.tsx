"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ClosingCTA() {
  const backgroundImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774021753/masjid_unjani_v20_zhdjue.jpg";

  return (
    <section className="relative overflow-hidden border-t border-[rgb(var(--color-border))]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(backgroundImage, "banner")}
          alt="Konsultasi Profesional"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* overlay layers */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 section">

        <div className="container-main">

          <div className="grid grid-cols-12 gap-8 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-7 max-w-[720px]"
            >

              {/* LABEL */}
              <p className="caption-light caption-label mb-4">
                Konsultasi Profesional
              </p>

              {/* HEADLINE */}
              <h2 className="
                text-[28px]
                md:text-[40px]
                lg:text-[46px]
                font-semibold
                leading-[1.15]
                text-[rgb(var(--color-white))]
                mb-5
              ">
                Mitra Strategis untuk Proyek Arsitektur & Rekayasa Anda
              </h2>

              {/* DESCRIPTION */}
              <p className="
                text-[15px]
                md:text-[16px]
                leading-[1.8]
                text-[rgb(var(--color-white))]/85
                max-w-[560px]
                mb-8
              ">
                Pendekatan terintegrasi dalam perencanaan, pengawasan, dan
                manajemen konstruksi untuk memastikan setiap proyek berjalan
                presisi, efisien, dan sesuai standar profesional.
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

            {/* EMPTY SPACE (VISUAL BALANCE) */}
            <div className="hidden md:block md:col-span-5" />

          </div>

        </div>

      </div>

    </section>
  );
}