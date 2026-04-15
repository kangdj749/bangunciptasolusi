"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

const logos = [
  { name: "Pemprov Jabar", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772325107/3-PEMPROV_JABAR_ATAS_dkiiy1.png" },
  { name: "Kemenag", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772325106/1-KEMENAG_gvrrwc.png" },
  { name: "DP3AKB", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772325106/4-DP3AKB_ATAS_r5cnbc.png" },
  { name: "Disdik Jabar", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772195355/new-disdikjabar_rf4seo.png" },
  { name: "Dinsos", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772359018/DINSOS_hhiwjz.png" },
  { name: "Diskominfo", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772325106/5-DISKOMINFO_y1zpnq.png" },
  { name: "Biro Kesra", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772325105/6-KESRA_JABAR_noebtq.png" },
  { name: "Biro Adpim", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772325105/7-ADPIM_yfwc5y.jpg" },
  { name: "Biro Umum", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772325105/8-BIRO_UMUM_offk8b.png" },
  { name: "Al-Jabbar", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772198935/aljabar_bvcre5.png" },
  { name: "APSAI", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772195355/Logo_Apsai_fekf9k.png" },
  { name: "LAZ GDI", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772146883/logo-laz-gdi_egmbci.png" },
  { name: "Rohis", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772353630/IMG-20260228-WA0066_smd4hy.jpg" },
  { name: "Lion", src: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772353630/IMG-20260228-WA0035_l0xtoh.jpg" },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
}

export default function DidukungOlehSection() {
  return (
    <section id="partners" className="relative w-full py-16 px-4 bg-white overflow-hidden">

      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1020px] h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

      <div className="max-w-[1020px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500 mb-2">
            Kolaborasi & Dukungan
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Didukung Oleh
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-6 items-center"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={item}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-center group"
            >
              <div
                className="
                  relative h-16 w-full
                  transition-all duration-300

                  /* Desktop Effect */
                  md:grayscale md:opacity-80
                  md:group-hover:grayscale-0
                  md:group-hover:opacity-100
                "
              >
                <Image
                  src={cloudinaryImage(logo.src, "sponsor")}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}