"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMap,
  FiGrid,
  FiFeather,
  FiMaximize,
} from "react-icons/fi";
import type { ReactNode } from "react";

import { cloudinaryImage } from "@/lib/cloudinaryImage";

type Service = {
  icon: ReactNode;
  title: string;
};

export default function SpatialPlanningSection() {
  const mainImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544179/tataruang1_wkdygs.png";

  const gallery: string[] = [
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544180/tataruang2_dptigc.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544181/tataruang3_oo8yik.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544179/tataruang1_wkdygs.png",
  ];

  const services: Service[] = [
    {
      icon: <FiMap size={16} />,
      title: "Strategic Regional Planning",
    },
    {
      icon: <FiGrid size={16} />,
      title: "Urban Design & Planning",
    },
    {
      icon: <FiFeather size={16} />,
      title: "Landscape & Environmental Planning",
    },
    {
      icon: <FiMaximize size={16} />,
      title: "Spatial Utilization Optimization",
    },
  ];

  return (
    <section
      id="penataan-ruang"
      className="relative section-tight bg-[rgb(var(--color-bg))]"
    >
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* ================= VISUAL SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div
              className="
                relative
                h-[220px]
                md:h-[300px]
                rounded-[var(--radius-lg)]
                overflow-hidden
                border
                border-[rgb(var(--color-border))]
                shadow-[var(--shadow-soft)]
              "
            >
              <Image
                src={cloudinaryImage(mainImage, "lcp")}
                alt="Perencanaan wilayah dan tata ruang"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />

              {/* bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-t from-[rgb(var(--color-bg))] to-transparent" />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="
                    group
                    relative
                    h-[75px]
                    md:h-[90px]
                    rounded-[var(--radius-md)]
                    overflow-hidden
                    border
                    border-[rgb(var(--color-border))]
                    shadow-[var(--shadow-soft)]
                  "
                >
                  <Image
                    src={cloudinaryImage(img, "thumb")}
                    alt="Proses perencanaan wilayah"
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/0 group-hover:bg-[rgb(var(--color-dark))]/15 transition-all" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= CONTENT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="max-w-[520px]">
              <p className="caption-label text-[rgb(var(--color-primary))]/70 mb-2">
                Spatial Planning
              </p>

              <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />

              <h2 className="h2 text-[rgb(var(--color-text))] mb-3">
                Penataan Ruang Berbasis Strategi & Data
              </h2>

              <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))]">
                Perencanaan tata ruang yang mengintegrasikan pendekatan strategis,
                analisis teknis, dan keberlanjutan lingkungan untuk menciptakan
                wilayah yang efisien, adaptif, dan berdaya saing.
              </p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">

              {services.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    p-3
                    rounded-[var(--radius-md)]
                    border
                    border-[rgb(var(--color-border))]
                    bg-[rgb(var(--color-surface))]
                    transition-all
                    duration-300
                    hover:border-[rgb(var(--color-border-strong))]
                    hover:bg-[rgb(var(--color-elevated))]
                  "
                >
                  {/* icon */}
                  <div
                    className="
                      w-[32px]
                      h-[32px]
                      flex
                      items-center
                      justify-center
                      rounded-[var(--radius-sm)]
                      bg-[rgb(var(--color-primary))]/10
                      text-[rgb(var(--color-primary))]
                      shrink-0
                    "
                  >
                    {item.icon}
                  </div>

                  {/* text */}
                  <p className="text-[12.5px] leading-[1.55] text-[rgb(var(--color-text))]">
                    {item.title}
                  </p>
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}