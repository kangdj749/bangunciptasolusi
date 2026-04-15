
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function SpatialCTASection() {
  const backgroundImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774021753/masjid_unjani_v20_zhdjue.jpg";

  return (
    <section className="relative overflow-hidden border-t border-[rgb(var(--color-secondary))]/15">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(backgroundImage, "banner")}
          alt="Professional Engineering Consultation"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Clean Dark Overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/70" />

      <div className="relative z-10 section-tight">
        <div className="container-main">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            {/* Micro Label */}
            <p className="text-[9px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
              Konsultasi Profesional
            </p>

            {/* Accent Line */}
            <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />

            {/* Headline */}
            <h2 className="text-[18px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-white))] mb-4">
              Mulai Rencanakan Tata Ruang yang Lebih Baik
            </h2>

            {/* Description */}
            <p className="text-[12.5px] md:text-[13px] leading-[1.65] text-[rgb(var(--color-white))]/80 mb-6">
              Diskusikan kebutuhan proyek Anda bersama tim kami dan temukan solusi yang tepat dan berkelanjutan.
            </p>

            {/* CTA */}
            <button
              className="
                btn btn-primary-hero
              "
            >
            <a href="/kontak">Ajukan Konsultasi</a>
              
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}