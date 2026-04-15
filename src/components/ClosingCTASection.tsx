"use client"

import { motion } from "framer-motion"

export default function ClosingCTASection() {
  return (
    <section className="py-14 md:py-16 bg-[#032b83]">
      <div className="w-full max-w-[1020px] mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >

          <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold tracking-tight text-white">
            Jangan Biarkan Ramadhan Ini Berlalu Tanpa Makna
          </h2>

          <p className="text-sm text-white/90 max-w-md mx-auto leading-relaxed">
            Panggung besar menantimu. Inspirasi terbaik menunggumu.
            Kesempatan tidak datang dua kali.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-6 py-3 rounded-lg bg-[#d6f605] text-[#032b83] font-semibold text-sm shadow-sm hover:opacity-90 transition">
              <a href="/registrasi">Daftar Lomba Sekarang</a>
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/40 text-white text-sm hover:bg-white/10 transition">
              <a href="/registrasi">Amankan Slot Peserta</a>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  )
}