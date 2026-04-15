"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

export default function SocialImpactSection() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  }

  const fadeItem = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  }

  // ✅ GANTI dengan URL Cloudinary asli kamu
  const socialRaw =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png"

  const socialImage = cloudinaryImage(socialRaw, "natural")

  return (
    <section className="relative py-14 md:py-16 bg-gradient-to-b from-white via-[#f8faff] to-white overflow-hidden">

      {/* Subtle Brand Glow (Consistent with SolusiSection) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#d6f605]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[1020px] mx-auto px-5 md:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >

          {/* LEFT — IMAGE */}
          <motion.div variants={fadeItem}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">

              <Image
                src={socialImage}
                alt="Santunan anak yatim Ramadhan Festiva"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            variants={fadeItem}
            className="space-y-6 text-center md:text-left"
          >

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-[clamp(1.3rem,3vw,1.9rem)] font-semibold text-[#032b83] tracking-tight">
                Setiap Kehadiranmu, Ada Senyum Yatim
              </h2>

              <div className="w-16 h-[2px] bg-[#d6f605] mx-auto md:mx-0 rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">

              <p>
                Ramadhan Festiva juga menyalurkan santunan kepada
                250 anak yatim, dhuafa, dan tahfidz.
              </p>

              <div className="space-y-2 text-sm font-medium text-[#032b83]">
                <p>Kamu tidak hanya berkembang.</p>
                <p>Kamu juga berbagi.</p>
              </div>

              <div className="pt-2">
                <p className="text-base font-semibold text-[#032b83]">
                  Momentum Ramadhan menjadi lebih bermakna.
                </p>
                <p className="text-base font-semibold text-[#032b83]">
                  Prestasi dan kepedulian berjalan berdampingan.
                </p>
              </div>

            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}