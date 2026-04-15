"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiMap, FiActivity, FiTool, FiBarChart2 } from "react-icons/fi";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { ReactNode } from "react";

type Service = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TopographyGeotechSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561867/topografi_lkvr8d.png";

  const gallery: string[] = [
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562430/topografi2_a65shu.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562399/topografi3_qcmk5e.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562169/topografi4_vhzcyc.png",
  ];

  const services: Service[] = [
    {
      title: "Survey Topografi",
      desc: "Pengukuran kontur, elevasi, dan kondisi lahan secara presisi sebagai dasar perencanaan teknis.",
      icon: <FiMap size={16} />,
    },
    {
      title: "Soil Investigation",
      desc: "Analisis karakteristik tanah untuk menentukan sistem fondasi yang aman dan efisien.",
      icon: <FiActivity size={16} />,
    },
    {
      title: "Sondir Test",
      desc: "Pengujian penetrasi tanah untuk mengetahui daya dukung secara cepat dan akurat.",
      icon: <FiTool size={16} />,
    },
    {
      title: "Analisis Geoteknik",
      desc: "Evaluasi stabilitas tanah dan rekomendasi desain fondasi berbasis data teknis.",
      icon: <FiBarChart2 size={16} />,
    },
  ];

  return (
    <section id="topogeo" className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 max-w-[640px]"
        >
          <p className="caption caption-label text-[rgb(var(--color-primary))] mb-3">
            Topografi & Geoteknik
          </p>

          <h2 className="h2 text-[rgb(var(--color-text))] mb-4">
            Fondasi Data untuk Keputusan Teknik yang Presisi
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Investigasi kondisi lahan dan karakteristik tanah untuk memastikan
            setiap perencanaan konstruksi memiliki dasar teknis yang akurat,
            aman, dan dapat dipertanggungjawabkan sejak tahap awal.
          </p>
        </motion.div>

        {/* ================= HERO IMAGE ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            relative
            w-full
            h-[240px]
            md:h-[340px]
            rounded-[var(--radius-lg)]
            overflow-hidden
            border
            border-[rgb(var(--color-border))]
            shadow-[var(--shadow-soft)]
            mb-12
            group
          "
        >
          <Image
            src={cloudinaryImage(heroImage, "banner")}
            alt="Survey Topografi dan Geoteknik"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/25" />

          {/* subtle gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[rgb(var(--color-dark))]/50" />
        </motion.div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="
                group
                relative
                rounded-[var(--radius-lg)]
                border
                border-[rgb(var(--color-border))]
                bg-[rgb(var(--color-surface))]
                p-5
                shadow-[var(--shadow-soft)]
                transition-all
                duration-300
                hover:-translate-y-[3px]
                hover:shadow-[var(--shadow-medium)]
                hover:border-[rgb(var(--color-border-strong))]
              "
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[rgb(var(--color-primary))]/70 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div
                className="
                  w-[36px]
                  h-[36px]
                  flex
                  items-center
                  justify-center
                  rounded-[var(--radius-md)]
                  bg-[rgb(var(--color-primary))]/10
                  text-[rgb(var(--color-primary))]
                  mb-4
                  transition-all
                  duration-300
                  group-hover:bg-[rgb(var(--color-primary))]
                  group-hover:text-[rgb(var(--color-white))]
                "
              >
                {service.icon}
              </div>

              <h3 className="text-[13px] font-semibold text-[rgb(var(--color-text))] mb-2">
                {service.title}
              </h3>

              <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= FIELD WORK ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section header */}
          <div className="mb-6">
            <p className="caption text-[rgb(var(--color-primary))] mb-2">
              Dokumentasi Lapangan
            </p>

            <h3 className="h3 text-[rgb(var(--color-text))]">
              Aktivitas Survey & Investigasi di Lapangan
            </h3>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-3 gap-3">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="
                  group
                  relative
                  h-[100px]
                  md:h-[130px]
                  rounded-[var(--radius-md)]
                  overflow-hidden
                  border
                  border-[rgb(var(--color-border))]
                  shadow-[var(--shadow-soft)]
                "
              >
                <Image
                  src={cloudinaryImage(img, "gallery")}
                  alt="Dokumentasi pekerjaan lapangan"
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/10 group-hover:bg-[rgb(var(--color-dark))]/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}