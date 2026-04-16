"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { sizes } from "@/lib/utils/imageSizes";

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
    <section className="section bg-[rgb(var(--color-bg))] overflow-hidden">
      <div className="container-main">

        {/* ================= MOBILE FIRST ================= */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-10">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full md:col-span-7"
          >

            {/* MOBILE → portrait */}
            <div className="md:hidden relative w-full h-[260px] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src={cloudinaryImage(image, "portrait")}
                alt="Ekowisata"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* DESKTOP → landscape */}
            <div className="hidden md:block relative h-[420px] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src={cloudinaryImage(image, "banner")}
                alt="Ekowisata"
                fill
                sizes={sizes.col7}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/10" />
            </div>

          </motion.div>

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full md:col-span-5"
          >

            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Ekowisata
            </p>

            <h2 className="h2 mb-4">
              Perencanaan Ekowisata Berkelanjutan
            </h2>

            <p className="body text-[rgb(var(--color-muted))] mb-5 leading-[1.8]">
              Kami merancang kawasan ekowisata yang tidak hanya menarik secara visual,
              tetapi juga menjaga keseimbangan antara potensi ekonomi,
              pelestarian lingkungan, dan pemberdayaan masyarakat lokal.
            </p>

            <p className="body text-[rgb(var(--color-subtle))] mb-6 leading-[1.8]">
              Setiap kawasan dirancang dengan pendekatan kontekstual untuk memastikan
              keberlanjutan jangka panjang.
            </p>

            {/* POINTS */}
            <div className="space-y-3 mb-8">

              {points.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">

                  <div className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[rgb(var(--color-primary))]" />

                  <p className="text-[13px] text-[rgb(var(--color-text))] leading-[1.7]">
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