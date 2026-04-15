"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function WhoWeAreSection() {
  const img1 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774534492/Desain_Interior_Kantor_Modern_Profesional_2_d0tbv5.jpg";

  const img2 =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540464/rumahtinggal6_mgzbdp.png";

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= GRID ARSITEKTUR ================= */}
        <div className="grid grid-cols-12 gap-10 items-start">

          {/* ================= LEFT (TEXT) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5"
          >

            {/* LABEL */}
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Who We Are
            </p>

            {/* TITLE */}
            <h2 className="h2 mb-5">
              Profesionalisme untuk Pembangunan Bangsa
            </h2>

            {/* CONTENT */}
            <p className="text-[rgb(var(--color-muted))] body leading-[1.8] mb-5">
              PT. Bangun Cipta Solusi hadir sebagai pusat kolaborasi tenaga ahli
              arsitektur, teknik sipil, mekanikal elektrikal plumbing, dan disiplin lainnya
              yang berkomitmen menghadirkan solusi yang terukur, akuntabel, dan berkelanjutan.
            </p>

            <p className="text-[rgb(var(--color-muted))] body leading-[1.8] mb-10">
              Sinergi antara profesional muda yang adaptif dengan tenaga senior berpengalaman
              menjadi fondasi utama dalam setiap proyek yang kami tangani.
            </p>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-2 gap-6">

              <div>
                <p className="text-[32px] font-semibold text-[rgb(var(--color-primary))]">
                  250+
                </p>
                <p className="text-[12px] text-[rgb(var(--color-muted))]">
                  Proyek Selesai
                </p>
              </div>

              <div>
                <p className="text-[32px] font-semibold text-[rgb(var(--color-primary))]">
                  12
                </p>
                <p className="text-[12px] text-[rgb(var(--color-muted))]">
                  Tenaga Ahli Profesional
                </p>
              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT (IMAGE COMPOSITION) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-7"
          >

            <div className="grid grid-cols-12 gap-4">

              {/* IMAGE 1 (BESAR) */}
              <div className="col-span-12 md:col-span-7 relative h-[320px] md:h-[420px] rounded-[var(--radius-lg)] overflow-hidden">

                <Image
                  src={cloudinaryImage(img1, "banner")}
                  alt="Project Engineering"
                  fill
                  sizes="(max-width:768px) 100vw, 58vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/10" />

              </div>

              {/* IMAGE 2 (SMALL) */}
              <div className="col-span-12 md:col-span-5 relative h-[200px] md:h-[420px] rounded-[var(--radius-lg)] overflow-hidden">

                <Image
                  src={cloudinaryImage(img2, "banner")}
                  alt="Spatial Planning"
                  fill
                  sizes="(max-width:768px) 100vw, 42vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/10" />

              </div>

            </div>

            {/* ================= QUOTE ================= */}
            <div className="mt-6 max-w-[520px]">

              <p className="text-[14px] italic text-[rgb(var(--color-text))] leading-[1.7]">
                {"Design is not just what it looks like, it's how it works."}
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}