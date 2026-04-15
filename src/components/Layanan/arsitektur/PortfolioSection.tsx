"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

const portfolios = [
  {
    image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774138866/facade_gedung_unjani_v20_eww52u.jpg",
    title: "Bangunan Pendidikan",
    category: "Arsitektur",
  },
  {
    image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774140162/EKSTERIOR_SDA_V5__t8dqbl.jpg",
    title: "Gedung Perkantoran",
    category: "Arsitektur",
  },
  {
    image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774021859/masjid_unjani_v7_avkhbq.jpg",
    title: "Masjid & Fasilitas Ibadah",
    category: "Arsitektur",
  },
  {
    image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537967/rumahsakit1_u2gqpt.png",
    title: "Rumah Sakit",
    category: "Kesehatan",
  },
  {
    image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773539244/klinik6_jwaekg.png",
    title: "Klinik Modern",
    category: "Kesehatan",
  },
  {
    image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774140171/EKSTERIOR_SDA_V24_qehcag.jpg",
    title: "Hunian Premium",
    category: "Residensial",
  },
];

export default function PortfolioSection() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-[520px] mb-10">
          <p className="caption-label text-muted mb-3">
            Portofolio
          </p>

          <h2 className="h2 text-primary mb-3">
            Rekam Jejak Proyek Kami
          </h2>

          <p className="caption leading-[1.6]">
            Berbagai proyek yang telah kami tangani mencerminkan komitmen kami
            terhadap kualitas desain, ketepatan teknis, dan keberlanjutan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">

          {portfolios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="
                group relative
                rounded-[var(--radius-lg)]
                overflow-hidden
                border border-[rgb(var(--color-border))]
                bg-[rgb(var(--color-surface))]
              "
            >

              {/* Image */}
              <div className="relative h-56 md:h-60 overflow-hidden">
                <Image
                  src={cloudinaryImage(item.image, "gallery")}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.06]
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60 via-black/20 to-transparent
                  opacity-80
                  group-hover:opacity-90
                  transition
                " />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
                <p className="caption-light text-[rgb(var(--color-white))]/70">
                  {item.category}
                </p>

                <h3 className="
                  text-[14px] md:text-[15px]
                  font-semibold
                  text-[rgb(var(--color-white))]
                  leading-[1.4]
                ">
                  {item.title}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="
                pointer-events-none
                absolute inset-0
                border border-transparent
                group-hover:border-[rgb(var(--color-border-strong))]
                transition
                rounded-[var(--radius-lg)]
              " />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}