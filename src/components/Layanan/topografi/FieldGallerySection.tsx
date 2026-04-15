"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { easeOut, type Variants } from "framer-motion";

// ==============================
// TYPES
// ==============================
type FieldImage = {
  src: string;
  title: string;
  subtitle?: string;
};

// ==============================
// DATA (GANTI SESUAI FOTO KAMU)
// ==============================
const images: FieldImage[] = [
  {
    src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562430/topografi2_a65shu.png",
    title: "Survey Topografi",
    subtitle: "Pemetaan kontur & elevasi lahan",
  },
  {
    src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562169/topografi4_vhzcyc.png",
    title: "Pengujian Sondir",
    subtitle: "Analisis daya dukung tanah",
  },
  {
    src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562399/topografi3_qcmk5e.png",
    title: "Deep Boring & SPT",
    subtitle: "Identifikasi lapisan tanah",
  },
  {
    src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561867/topografi_lkvr8d.png",
    title: "Pengujian Lapangan",
    subtitle: "Proses investigasi teknis",
  },
];

// ==============================
// ANIMATION
// ==============================
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// ==============================
// COMPONENT
// ==============================
export default function FieldGallerySection() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="max-w-[640px] mb-12">

          <p className="caption-label text-primary mb-3">
            Field Execution
          </p>

          <h2 className="h2 mb-4">
            Bukan Sekadar Data — Kami Turun Langsung ke Lapangan
          </h2>

          <p className="body text-muted">
            Setiap data yang kami hasilkan berasal dari proses pengukuran langsung di lapangan dengan standar operasional yang ketat. 
            Didukung tenaga ahli dan peralatan terkalibrasi, kami memastikan setiap hasil dapat dipertanggungjawabkan secara teknis.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* LEFT BIG */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="md:col-span-2 relative group overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))]"
          >
            <div className="relative h-[260px] md:h-[420px]">
              <Image
                src={cloudinaryImage(images[0].src, "gallery")}
                alt={images[0].title}
                fill
                sizes="(max-width:768px) 100vw, 66vw"
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/40 group-hover:bg-[rgb(var(--color-dark))]/50 transition" />

              {/* TEXT */}
              <div className="absolute bottom-0 p-5">
                <p className="caption-light mb-1">
                  {images[0].subtitle}
                </p>
                <h3 className="text-[rgb(var(--color-white))] font-semibold text-[15px]">
                  {images[0].title}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-5">

            {images.slice(1).map((img, i) => (
              <motion.div
                key={img.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i + 1}
                className="relative group overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))]"
              >
                <div className="relative h-[120px] md:h-[130px]">
                  <Image
                    src={cloudinaryImage(img.src, "gallery")}
                    alt={img.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/35 group-hover:bg-[rgb(var(--color-dark))]/50 transition" />

                  {/* TEXT */}
                  <div className="absolute bottom-0 p-3">
                    <p className="caption-light mb-1">
                      {img.subtitle}
                    </p>
                    <h3 className="text-[rgb(var(--color-white))] font-medium text-[13px] leading-snug">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}