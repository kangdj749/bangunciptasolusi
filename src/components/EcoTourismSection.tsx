"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function EcoTourismSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544180/tataruang2_dptigc.png";

  const points = [
    "Menjaga keaslian dan karakter lingkungan",
    "Menghadirkan pengalaman wisata berkualitas",
    "Meningkatkan nilai ekonomi kawasan",
    "Mendukung keberlanjutan jangka panjang",
  ];

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= GRID ARSITEKTUR ================= */}
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* IMAGE (lebih dominan) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7"
          >
            <div className="relative h-[300px] md:h-[420px] rounded-[var(--radius-lg)] overflow-hidden">

              <Image
                src={cloudinaryImage(image, "banner")}
                alt="Perencanaan Ekowisata"
                fill
                className="object-cover"
              />

              {/* subtle cinematic overlay */}
              <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/15" />

              {/* gradient bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(var(--color-bg))] to-transparent" />

            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-5"
          >

            {/* Label */}
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Ekowisata
            </p>

            {/* Title */}
            <h2 className="h2 mb-4">
              Perencanaan Ekowisata Berkelanjutan
            </h2>

            {/* Description */}
            <p className="body text-[rgb(var(--color-muted))] mb-5">
              Kami merancang kawasan ekowisata yang tidak hanya menarik secara visual,
              tetapi juga menjaga keseimbangan antara potensi ekonomi,
              pelestarian lingkungan, dan pemberdayaan masyarakat lokal.
            </p>

            {/* Supporting */}
            <p className="body text-[rgb(var(--color-subtle))] mb-6">
              Setiap kawasan dirancang dengan pendekatan kontekstual,
              memastikan keberlanjutan jangka panjang dan pengalaman yang bernilai.
            </p>

            {/* Points (lebih clean) */}
            <div className="space-y-3 mb-8">
              {points.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">

                  <div className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[rgb(var(--color-primary))]" />

                  <p className="text-[13px] text-[rgb(var(--color-text))] leading-[1.6]">
                    {item}
                  </p>

                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/layanan/ekowisata"
              className="btn btn-outline"
            >
              Lihat Detail Perencanaan
            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
}