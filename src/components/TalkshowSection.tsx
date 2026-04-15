"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

export default function TalkshowSection() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  }

  // ✅ GANTI URL INI dengan URL asli dari Cloudinary kamu
  const speakerRaw =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772196325/SECTION-IMAGE-TALKSHOW_xqzxnx.png"

  const speakerImage = cloudinaryImage(speakerRaw, "portrait")

  return (
    <section className="py-14 md:py-16 bg-gradient-to-b from-white via-[#f4f8ff] to-white">
      <div className="w-full max-w-[1020px] mx-auto px-5 md:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >

          {/* LEFT CONTENT */}
          <motion.div
            variants={item}
            className="space-y-6 text-center md:text-left"
          >

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-[clamp(1.3rem,3vw,1.9rem)] font-semibold text-[#032b83] tracking-tight">
                Talkshow Inspiratif & Dakwah Kreatif
              </h2>

              <div className="w-16 h-[2px] bg-[#d6f605] mx-auto md:mx-0 rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">

              <p>
                Remaja tidak hanya butuh kompetisi.
                Mereka membutuhkan arah, teladan, dan inspirasi.
              </p>

              <p>
                Akan hadir para pembicara inspiratif nasional:
              </p>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-medium text-[#032b83]">
                  <p>• Elly Risman Musa</p>
                  <p>• Wirda Mansyur</p>
                  <p>• Tim Dakwah Wayang</p>
                  <p>• Pemateri Inspiratif Lainnya</p>
                </div>

                <p className="text-xs text-gray-500 italic">
                  *(Dalam proses konfirmasi)
                </p>
              </div>

              <div className="pt-3 space-y-2">
                <p className="font-medium text-gray-800">
                  Peserta akan mendapatkan:
                </p>

                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✔ Motivasi membangun masa depan</li>
                  <li>✔ Penguatan karakter Qurani</li>
                  <li>✔ Inspirasi memilih jalur pendidikan</li>
                  <li>✔ Teladan nyata dari figur berpengaruh</li>
                </ul>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div variants={item}>
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">

              <Image
                src={speakerImage}
                alt="Pembicara Talkshow dan Dakwah"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}