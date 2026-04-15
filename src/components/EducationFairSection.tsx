"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

export default function EducationFairSection() {
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
  const educationRaw =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png"

  const educationImage = cloudinaryImage(educationRaw, "natural")

  return (
    <section className="relative py-14 md:py-16 bg-gradient-to-b from-white via-[#f8faff] to-white overflow-hidden">

      {/* Subtle Brand Glow */}
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
                src={educationImage}
                alt="Education Fair Ramadhan Festiva"
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
                Temukan Kampus & Beasiswa Impianmu
              </h2>

              <div className="w-16 h-[2px] bg-[#d6f605] mx-auto md:mx-0 rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">

              <p>
                Ramadhan Festiva juga menghadirkan Education Fair yang
                mempertemukan peserta dengan berbagai institusi pendidikan
                dan program unggulan.
              </p>

              <div className="space-y-2 text-sm font-medium text-[#032b83]">
                <p>• Kampus dan sekolah tinggi dalam & luar negeri</p>
                <p>• Informasi beasiswa termasuk LPDP</p>
                <p>• Konseling pendidikan & karier</p>
                <p>• Tes minat dan bakat</p>
                <p>• Program pesantren beasiswa luar negeri</p>
              </div>

              <div className="pt-3">
                <p className="text-base font-semibold text-[#032b83]">
                  Ini bukan sekadar event.
                </p>
                <p className="text-base font-semibold text-[#032b83]">
                  Ini adalah jembatan menuju masa depan.
                </p>
              </div>

            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}