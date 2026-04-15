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
    <section className="section bg-[rgb(var(--color-bg))] overflow-hidden">
      <div className="container-main">

        <div className="grid grid-cols-12 gap-10">

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-12 md:col-span-5"
          >

            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Who We Are
            </p>

            <h2 className="h2 mb-5">
              Profesionalisme untuk Pembangunan Bangsa
            </h2>

            <p className="body text-muted leading-[1.8] mb-5">
              PT. Bangun Cipta Solusi hadir sebagai pusat kolaborasi tenaga ahli
              arsitektur, teknik sipil, dan MEP yang menghadirkan solusi terukur.
            </p>

            <p className="body text-muted leading-[1.8] mb-8">
              Sinergi antara profesional muda dan senior menjadi fondasi
              dalam setiap proyek yang kami tangani.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">

              <div>
                <p className="text-[28px] md:text-[32px] font-semibold text-[rgb(var(--color-primary))]">
                  250+
                </p>
                <p className="text-[12px] text-muted">
                  Proyek Selesai
                </p>
              </div>

              <div>
                <p className="text-[28px] md:text-[32px] font-semibold text-[rgb(var(--color-primary))]">
                  12
                </p>
                <p className="text-[12px] text-muted">
                  Tenaga Ahli
                </p>
              </div>

            </div>

          </motion.div>

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-12 md:col-span-7"
          >

            {/* MOBILE VERSION */}
            <div className="flex flex-col gap-4 md:hidden">

              <div className="relative w-full h-[260px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src={cloudinaryImage(img1, "portrait")}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-[260px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src={cloudinaryImage(img2, "portrait")}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden md:flex flex-col gap-6">

              <div className="relative h-[420px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src={cloudinaryImage(img1, "banner")}
                  alt=""
                  fill
                  sizes="58vw"
                  className="object-cover"
                />
              </div>

              <div className="flex justify-end">
                <div className="relative w-[70%] h-[240px] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-elevated)]">
                  <Image
                    src={cloudinaryImage(img2, "banner")}
                    alt=""
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>

            {/* QUOTE */}
            <div className="mt-6 max-w-full md:max-w-[520px]">
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