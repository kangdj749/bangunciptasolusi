"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiHome,
  FiGrid,
  FiTool,
  FiMap,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

/* ============================= */
/* DATA */
/* ============================= */

type Item = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const services: Item[] = [
  {
    title: "Desain Arsitektur",
    desc: "Perancangan eksterior ikonik yang menggabungkan estetika modern dengan fungsionalitas ruang.",
    icon: <FiHome size={22} />,
  },
  {
    title: "Desain Interior",
    desc: "Kurasi ruang dalam yang personal dan mewah dengan harmoni material dan pencahayaan.",
    icon: <FiGrid size={22} />,
  },
  {
    title: "Rekayasa Konstruksi",
    desc: "Perhitungan struktur presisi untuk menjamin keamanan dan efisiensi bangunan.",
    icon: <FiTool size={22} />,
  },
  {
    title: "Survey Topografi",
    desc: "Pengukuran lahan akurat untuk pemetaan kontur dan batas wilayah proyek.",
    icon: <FiMap size={22} />,
  },
  {
    title: "Soil Investigasi",
    desc: "Analisis daya dukung tanah untuk menentukan sistem pondasi terbaik.",
    icon: <FiLayers size={22} />,
  },
  {
    title: "Manajemen Konstruksi",
    desc: "Pengawasan profesional agar proyek tepat waktu dan sesuai standar.",
    icon: <FiCheckCircle size={22} />,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function SpecializationSection() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-12 gap-6 mb-14">

          <div className="col-span-12 md:col-span-5">
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Specialization
            </p>

            <h2 className="h2">
              Layanan Eksklusif Kami
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 flex items-end">
            <p className="body text-muted max-w-[520px]">
              Solusi teknik dan desain komprehensif untuk setiap tahap pembangunan Anda.
            </p>
          </div>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-12 gap-6">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="col-span-12 sm:col-span-6 lg:col-span-4 group"
            >

              <div
                className="
                  h-full
                  p-6
                  rounded-[var(--radius-lg)]
                  border border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-surface))]
                  transition-all duration-300

                  hover:bg-[rgb(var(--color-dark))]
                  hover:border-[rgb(var(--color-dark))]
                  hover:shadow-[var(--shadow-elevated)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-10 h-10
                    flex items-center justify-center
                    rounded-[var(--radius-md)]
                    bg-[rgb(var(--color-primary))]/10
                    text-[rgb(var(--color-primary))]
                    mb-4

                    group-hover:bg-[rgb(var(--color-white))]/10
                    group-hover:text-[rgb(var(--color-white))]
                    transition
                  "
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[16px]
                    font-semibold
                    mb-2
                    text-[rgb(var(--color-text))]

                    group-hover:text-[rgb(var(--color-white))]
                    transition
                  "
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    text-[13px]
                    leading-[1.7]
                    text-[rgb(var(--color-muted))]
                    mb-6

                    group-hover:text-[rgb(var(--color-white))]/80
                    transition
                  "
                >
                  {item.desc}
                </p>

                {/* LINK */}
                <Link
                  href="/layanan"
                  className="
                    text-[12px]
                    uppercase
                    tracking-[0.15em]
                    text-[rgb(var(--color-primary))]

                    group-hover:text-[rgb(var(--color-white))]
                    transition
                  "
                >
                  Selengkapnya →
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}