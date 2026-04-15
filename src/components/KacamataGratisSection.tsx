"use client"

import { motion } from "framer-motion"

export default function KacamataGratisSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-white overflow-hidden">

      {/* Premium Islamic Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px]
          bg-gradient-to-r
          from-emerald-200/30
          via-yellow-100/25
          to-transparent
          blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-[1100px] mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-emerald-700 mb-4 font-medium"
        >
          Program Spesial untuk Orang Tua Peserta
        </motion.p>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              1.000 Kacamata Baca GRATIS
              <span className="block text-emerald-800 text-lg md:text-xl font-medium mt-3">
                untuk Orang Tua Peserta Ramadhan Festiva
              </span>
            </h2>

            <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
              Sebagai bentuk kepedulian terhadap kesehatan mata orang tua,
              Ramadhan Festiva menghadirkan program pembagian kacamata baca
              gratis dengan ukuran +1 hingga +2.5.
            </p>

            {/* Elegant Highlight Capsule */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-4
              bg-white border border-emerald-200
              rounded-full px-5 py-3 text-sm
              text-gray-800 shadow-md">

              <span className="font-medium">+1.0</span>
              <span className="font-medium">+1.5</span>
              <span className="font-medium">+2.0</span>
              <span className="font-medium">+2.5</span>

              <span className="text-emerald-300">|</span>

              <span className="font-semibold text-emerald-800">
                Kuota 1.000
              </span>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-gray-700 leading-relaxed">
              <li>
                • Orang tua siswa peserta Ramadhan Festiva (7–8 Maret 2026)
              </li>
              <li>
                • Wajib hadir Talkshow Bunda Elly Risman (8 Maret 2026,
                Masjid Raya Al-Jabbar, 12.30 WIB – selesai)
              </li>
              <li>• Usia 40–55 tahun</li>
              <li>• Pendaftaran dibuka mulai 27 Februari 2026</li>
            </ul>

            <div className="mt-8">
              <a
                href="/daftar-kacamata"
                className="inline-flex items-center justify-center rounded-xl
                bg-emerald-700 text-white
                text-sm font-medium px-7 py-3
                shadow-lg shadow-emerald-700/20
                hover:bg-emerald-800
                transition-all duration-300"
              >
                Daftar Program Kacamata Gratis
              </a>

              <p className="text-xs text-gray-500 mt-4">
                Data akan diverifikasi sebelum pengambilan di lokasi acara.
              </p>
            </div>
          </motion.div>

          {/* RIGHT PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-900
              text-white rounded-3xl p-12 text-center shadow-xl">

              {/* subtle gold glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40
                bg-yellow-200/20 blur-3xl rounded-full" />

              <div className="relative text-6xl font-semibold tracking-tight">
                1000
              </div>

              <p className="mt-3 text-sm tracking-widest uppercase text-emerald-200">
                Kacamata Baca Gratis
              </p>

              <div className="mt-6 text-xs text-emerald-300">
                Terbatas & Selama Kuota Tersedia
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}