"use client"

import { motion } from "framer-motion"

export default function DetailAcaraSection() {
  return (
    <section className="py-14 md:py-16 bg-gradient-to-b from-white via-[#f4f8ff] to-white">
      <div className="w-full max-w-[1020px] mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >

          <div className="space-y-3">
            <h2 className="text-[clamp(1.3rem,3vw,1.9rem)] font-semibold text-[#032b83] tracking-tight">
              Detail Acara
            </h2>
            <div className="w-16 h-[2px] bg-[#d6f605] mx-auto rounded-full" />
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <p>📅 Sabtu–Minggu, 7–8 Maret 2026</p>
            <p>📍 Masjid Raya Al Jabbar, Bandung</p>
            <p>Terbuka untuk siswa SMA/sederajat</p>
          </div>

          <div className="p-5 rounded-xl border border-[#032b83]/10 bg-white shadow-sm max-w-md mx-auto">
            <p className="text-[#032b83] font-semibold">
              Tempat terbatas. Pastikan kamu tidak ketinggalan.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  )
}