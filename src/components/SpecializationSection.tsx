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
  href: string;
};

const services: Item[] = [
  {
    title: "Desain Arsitektur",
    desc: "Perancangan eksterior ikonik dengan keseimbangan estetika dan fungsi ruang.",
    icon: <FiHome size={22} />,
    href: "/layanan/desain-arsitektur",
  },
  {
    title: "Desain Interior",
    desc: "Kurasi ruang dalam yang personal dan mewah dengan harmoni material.",
    icon: <FiGrid size={22} />,
    href: "/layanan/desain-interior",
  },
  {
    title: "Rekayasa Konstruksi",
    desc: "Perhitungan struktur presisi untuk keamanan dan efisiensi bangunan.",
    icon: <FiTool size={22} />,
    href: "/layanan/rekayasa-konstruksi",
  },
  {
    title: "Survey Topografi",
    desc: "Pengukuran lahan akurat untuk pemetaan kontur proyek.",
    icon: <FiMap size={22} />,
    href: "/layanan/survey-topografi",
  },
  {
    title: "Soil Investigasi",
    desc: "Analisis daya dukung tanah untuk pondasi optimal.",
    icon: <FiLayers size={22} />,
    href: "/layanan/soil-investigasi",
  },
  {
    title: "Manajemen Konstruksi",
    desc: "Pengawasan profesional untuk memastikan kualitas proyek.",
    icon: <FiCheckCircle size={22} />,
    href: "/layanan/manajemen-konstruksi",
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
        <div className="flex flex-col gap-4 mb-12 md:grid md:grid-cols-12 md:gap-6">

          <div className="md:col-span-5">
            <p className="caption-label text-[rgb(var(--color-gold))] mb-2">
              Specialization
            </p>

            <h2 className="h2">
              Layanan Eksklusif Kami
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="body text-[rgb(var(--color-muted))] max-w-[520px]">
              Solusi teknik dan desain komprehensif untuk setiap tahap pembangunan,
              dirancang secara profesional dan terstruktur.
            </p>
          </div>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid gap-5 md:grid-cols-12">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="md:col-span-6 lg:col-span-4 group"
            >

              <Link href={item.href} className="block h-full">

                <div
                  className="
                    h-full
                    p-5
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
                      mb-3
                      text-[rgb(var(--color-gold))]
                      group-hover:text-[rgb(var(--color-white))]
                      transition
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-[15px]
                      font-semibold
                      mb-2
                      text-[rgb(var(--color-text))]
                      group-hover:text-[rgb(var(--color-white))]
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
                      mb-5
                      group-hover:text-[rgb(var(--color-white))]/80
                    "
                  >
                    {item.desc}
                  </p>

                  {/* LINK */}
                  <span
                    className="
                      text-[12px]
                      uppercase
                      tracking-[0.15em]
                      text-[rgb(var(--color-primary))]
                      group-hover:text-[rgb(var(--color-white))]
                    "
                  >
                    Selengkapnya →
                  </span>

                </div>

              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}