"use client"

import { motion } from "framer-motion"

export default function EmotionalHookSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-14 md:py-16 bg-gradient-to-b from-white to-[#f7f9ff]">
      <div className="w-full max-w-[1020px] mx-auto px-5 md:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <motion.div variants={item} className="space-y-3">
            <h2 className="text-[clamp(1.3rem,3vw,1.8rem)] font-semibold text-[#032b83] tracking-tight">
              Apakah Generasi Kita Sudah Punya Arah?
            </h2>

            <div className="w-14 h-[2px] bg-[#d6f605] mx-auto rounded-full" />

            <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
              Potensi besar membutuhkan ruang untuk tumbuh dan panggung untuk bersinar.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={item}
            className="max-w-2xl mx-auto space-y-6 text-sm text-gray-700 leading-relaxed"
          >
            <p>
              Banyak remaja memiliki kemampuan luar biasa,
              namun belum semua mendapatkan lingkungan yang mendorong mereka berkembang.
            </p>

            {/* Problem Points – Compact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left md:text-center">
              <div className="py-3 px-4 rounded-lg border border-gray-100 bg-white">
                Waktu habis untuk scroll tanpa arah.
              </div>
              <div className="py-3 px-4 rounded-lg border border-gray-100 bg-white">
                Percaya diri perlahan menurun.
              </div>
              <div className="py-3 px-4 rounded-lg border border-gray-100 bg-white">
                Minim panggung untuk menunjukkan bakat.
              </div>
              <div className="py-3 px-4 rounded-lg border border-gray-100 bg-white">
                Kurang motivasi untuk melangkah lebih jauh.
              </div>
            </div>

            <p className="text-gray-800 font-medium">
              Bakat besar tanpa kesempatan akan tetap menjadi potensi yang tertidur.
            </p>

            <p className="text-[#032b83] font-semibold">
              Ramadhan adalah momentum perubahan.
            </p>

            <p className="text-gray-700">
              Bukan sekadar rutinitas ibadah,
              tetapi waktu terbaik membangun arah dan masa depan.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}