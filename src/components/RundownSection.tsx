"use client"

import { motion } from "framer-motion"

export default function ActivitiesSection() {
  const activities = [
    {
      title: "Lomba & Panggung Bakat",
      desc: "Ajang bagi remaja untuk menampilkan kreativitas terbaiknya dalam suasana positif dan inspiratif."
    },
    {
      title: "Talkshow Inspiratif",
      desc: "Sesi bersama pembicara muda yang membahas pengembangan diri, kepercayaan diri, dan makna Ramadhan."
    },
    {
      title: "Festival Komunitas",
      desc: "Ruang kolaborasi antar sekolah, komunitas, dan keluarga untuk mempererat silaturahmi."
    },
    {
      title: "Program Sosial Ramadhan",
      desc: "Aksi nyata berbagi dan kepedulian sosial sebagai wujud nilai kebaikan di bulan suci."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
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
            Bentuk Kegiatan Ramadhan Festiva
          </h2>

          <div className="w-16 h-[3px] bg-[#d6f605] mx-auto rounded-full" />

          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Dirancang untuk menggabungkan kreativitas, spiritualitas,
            dan kebersamaan dalam satu pengalaman yang bermakna.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="border border-[#e5e8ff] rounded-2xl p-6"
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