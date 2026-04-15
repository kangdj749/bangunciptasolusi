"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiDroplet,
  FiTruck,
  FiTool,
} from "react-icons/fi";
import type { ReactNode } from "react";

import { cloudinaryImage } from "@/lib/cloudinaryImage";

type Service = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export default function EngineeringSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561465/rekayasa_d37iob.png";

  const services: Service[] = [
    {
      title: "Pondasi & Struktur",
      desc: "Perencanaan struktur bangunan yang aman, efisien, dan sesuai standar rekayasa teknik.",
      icon: <FiLayers size={18} />,
    },
    {
      title: "Water Engineering",
      desc: "Perancangan sistem sumber daya air, drainase, dan pengelolaan lingkungan berkelanjutan.",
      icon: <FiDroplet size={18} />,
    },
    {
      title: "Transportasi & Infrastruktur",
      desc: "Perencanaan jalan, kawasan, dan sistem infrastruktur untuk konektivitas wilayah.",
      icon: <FiTruck size={18} />,
    },
    {
      title: "Mechanical Electrical Plumbing",
      desc: "Integrasi sistem mekanikal, elektrikal, dan plumbing untuk efisiensi operasional bangunan.",
      icon: <FiTool size={18} />,
    },
  ];

  return (
    <section
      id="rekayasa"
      className="relative section-tight bg-[rgb(var(--color-soft))]"
    >
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-[560px]"
        >
          <p className="caption-label text-[rgb(var(--color-primary))]/70 mb-2">
            Engineering Services
          </p>

          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />

          <h2 className="h2 text-[rgb(var(--color-text))] mb-3">
            Rekayasa Teknik Terintegrasi
          </h2>

          <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))]">
            Pendekatan rekayasa teknik yang sistematis dan berbasis analisis
            untuk memastikan setiap proyek memiliki fondasi struktural yang kuat,
            efisien, dan berkelanjutan.
          </p>
        </motion.div>

        {/* ================= HERO VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            w-full
            h-[220px]
            md:h-[320px]
            rounded-[var(--radius-lg)]
            overflow-hidden
            border
            border-[rgb(var(--color-border))]
            shadow-[var(--shadow-soft)]
            mb-12
          "
        >
          <Image
            src={cloudinaryImage(heroImage, "banner")}
            alt="Rekayasa Teknik"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/25" />

          {/* subtle gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-[rgb(var(--color-soft))] to-transparent" />
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="
                group
                relative
                rounded-[var(--radius-md)]
                border
                border-[rgb(var(--color-border))]
                bg-[rgb(var(--color-surface))]
                p-4
                transition-all
                duration-300
                hover:-translate-y-[3px]
                hover:shadow-[var(--shadow-medium)]
              "
            >
              {/* top accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[rgb(var(--color-primary))]/70 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* icon */}
              <div
                className="
                  w-[36px]
                  h-[36px]
                  flex
                  items-center
                  justify-center
                  rounded-[var(--radius-sm)]
                  bg-[rgb(var(--color-primary))]/10
                  text-[rgb(var(--color-primary))]
                  mb-3
                "
              >
                {service.icon}
              </div>

              {/* title */}
              <h3 className="text-[13px] font-semibold text-[rgb(var(--color-text))] mb-1">
                {service.title}
              </h3>

              {/* desc */}
              <p className="text-[11.5px] leading-[1.6] text-[rgb(var(--color-muted))]">
                {service.desc}
              </p>

              {/* hover subtle effect */}
              <div className="absolute inset-0 rounded-[var(--radius-md)] border border-transparent group-hover:border-[rgb(var(--color-border-strong))] transition-all" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}