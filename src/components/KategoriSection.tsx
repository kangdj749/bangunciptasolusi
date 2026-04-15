"use client"

import { motion } from "framer-motion"


export default function KategoriSection() {
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

  const categories = [
    {
      title: "Lomba Kaligrafi",
      icon: "🖋",
      desc: "Kompetisi menulis ayat Al-Qur’an dengan kaidah khat yang benar serta kreativitas hiasan yang memukau.",
    },
    {
      title: "Public Speaking (Inggris, Sunda, Arab)",
      icon: "🎤",
      desc: "Melatih keberanian berbicara, kepemimpinan, dan kemampuan komunikasi Islami di depan publik.",
    },
    {
      title: "Lomba Tahfidz",
      icon: "📖",
      desc: "Kompetisi hafalan Al-Qur’an dengan penilaian tajwid, kelancaran, dan adab tilawah.",
    },
    {
      title: "Lomba Konten Dakwah & Edukasi",
      icon: "📱",
      desc: "Saatnya Gen Z berdakwah secara kreatif melalui konten digital yang inspiratif dan berdampak luas.",
    },
  ]

  return (
    <section className="py-14 md:py-16 bg-white">
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
            <h2 className="text-[clamp(1.3rem,3vw,1.9rem)] font-semibold text-[#032b83] tracking-tight">
              Pilih Kategori Sesuai Bakatmu
            </h2>

            <div className="w-14 h-[2px] bg-[#d6f605] mx-auto rounded-full" />

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Tunjukkan potensi terbaikmu dan jadilah bagian dari generasi yang berprestasi.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-[#fafcff] p-5 transition-all duration-300 hover:border-[#032b83]/20"
              >
                <div className="flex items-start gap-3">
                  <div className="text-lg">{cat.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-[#032b83]">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="pt-2">
            <button
              className="bg-[#d6f605] hover:bg-lime-300 text-[#032b83] font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <a href="/registrasi">Saya Siap Jadi Peserta</a>
            </button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}