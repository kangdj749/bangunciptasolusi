"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

const services = [
  {
    title: "Bangunan Pendidikan",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774022434/facade_gedung_unjani_v3_dz36a6.jpg",
  },
  {
    title: "Perkantoran",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774140162/EKSTERIOR_SDA_V1__gp0dxz.jpg",
  },
  {
    title: "Masjid",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774021503/masjid_unjani_v11_tq8jo4.jpg",
  },
  {
    title: "Rumah Sakit",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537967/rumahsakit1_u2gqpt.png",
  },
  {
    title: "Klinik",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773539244/klinik6_jwaekg.png",
  },
  {
    title: "Rumah Tinggal",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540468/rumahtinggal4_yxdr44.png",
  },
  {
    title: "Interior",
    img: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774140085/1_dyspwj.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-soft">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] mb-12">
          <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
            Layanan
          </p>

          <h2 className="h2 mb-4">
            Cakupan Layanan Arsitektur Profesional
          </h2>

          <p className="body text-muted">
            Pendekatan desain yang terintegrasi untuk berbagai jenis bangunan,
            dengan fokus pada kualitas, fungsi, dan keberlanjutan.
          </p>
        </div>

        {/* GRID SERAGAM */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="relative h-[220px] md:h-[260px] rounded-[var(--radius-lg)] overflow-hidden">

                {/* IMAGE */}
                <Image
                  src={cloudinaryImage(s.img, "card")}
                  alt={s.title}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/25 group-hover:bg-[rgb(var(--color-dark))]/40 transition" />

                {/* GRADIENT */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />

                {/* TEXT INSIDE */}
                <div className="absolute bottom-0 left-0 right-0 p-4">

                  <h3 className="
                    text-[15px]
                    md:text-[16px]
                    font-semibold
                    text-[rgb(var(--color-white))]
                  ">
                    {s.title}
                  </h3>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}