"use client"

import { motion } from "framer-motion"

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Meningkatkan Percaya Diri",
      desc: "Tampil di depan publik dalam suasana suportif membantu peserta membangun keberanian dan rasa percaya diri."
    },
    {
      title: "Mengembangkan Potensi",
      desc: "Setiap individu memiliki bakat. Festival ini menjadi ruang untuk mengeksplorasi dan mengasah kemampuan tersebut."
    },
    {
      title: "Lingkungan Positif",
      desc: "Bertemu dengan komunitas yang memiliki semangat bertumbuh akan membentuk mindset yang lebih kuat dan optimis."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-[#f8f9ff]">
      <div className="w-full max-w-[1020px] mx-auto px-5 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-[#032b83] tracking-tight">
            Manfaat untuk Peserta
          </h2>

          <div className="w-16 h-[3px] bg-[#d6f605] mx-auto rounded-full" />

          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Lebih dari sekadar festival, ini adalah pengalaman yang
            membentuk karakter dan membuka peluang masa depan.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white border border-[#e5e8ff] rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#032b83] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}