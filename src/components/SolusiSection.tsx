"use client"

import { motion } from "framer-motion"

export default function SolusiSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  }

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
          className="text-center space-y-7"
        >
          {/* Heading */}
          <motion.div variants={item} className="space-y-3">
            <h2 className="text-[clamp(1.3rem,3vw,1.9rem)] font-semibold text-[#032b83] tracking-tight">
              Inilah Wadah yang Mereka Butuhkan
            </h2>

            <div className="w-14 h-[2px] bg-[#d6f605] mx-auto rounded-full" />

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Ruang bertumbuh yang terarah, inspiratif,
              dan berdampak nyata bagi generasi muda.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={item}
            className="max-w-2xl mx-auto space-y-5 text-sm text-gray-700 leading-relaxed"
          >
            <p>
              Ramadhan Festiva menggabungkan prestasi, inspirasi,
              dan kepedulian dalam satu momentum Ramadhan
              yang membangun arah masa depan.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Kompetisi Prestasi Islami",
                "Youth Motivation Talkshow",
                "Education Fair & Informasi Beasiswa",
                "Aksi Sosial & Santunan Yatim",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="py-3 px-4 rounded-lg border border-gray-100 bg-white text-gray-700 text-left md:text-center transition-all duration-300 hover:border-[#032b83]/20"
                >
                  {feature}
                </div>
              ))}
            </div>

            <p className="text-[#032b83] font-semibold">
              Satu event. Satu panggung. Satu momentum perubahan.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}