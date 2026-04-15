"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
type services = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
};

const services = [
    

  {
    title: "Desain Arsitektur",
    desc: "Perancangan eksterior ikonik dengan keseimbangan estetika dan fungsi.",
    icon: <FiHome size={22} />,
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774022434/facade_gedung_unjani_v3_dz36a6.jpg",
  },
  {
    title: "Desain Interior",
    desc: "Ruang dalam yang personal dan mewah melalui kurasi material.",
    icon: <FiGrid size={22} />,
  },
  {
    title: "Rekayasa Konstruksi",
    desc: "Struktur presisi untuk keamanan dan efisiensi bangunan.",
    icon: <FiTool size={22} />,
  },
  {
    title: "Survey Topografi",
    desc: "Pengukuran lahan akurat untuk pemetaan kontur proyek.",
    icon: <FiMap size={22} />,
  },
  {
    title: "Soil Investigasi",
    desc: "Analisis tanah untuk menentukan pondasi optimal.",
    icon: <FiLayers size={22} />,
  },
  {
    title: "Manajemen Konstruksi",
    desc: "Pengawasan profesional untuk memastikan kualitas dan waktu.",
    icon: <FiCheckCircle size={22} />,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function SpecializationFlagship() {
  const main = services[0];
  const rest = services.slice(1);

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-12 gap-6 mb-16">

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
              Solusi teknik dan desain komprehensif untuk setiap tahap pembangunan,
              dengan pendekatan yang terintegrasi dan profesional.
            </p>
          </div>

        </div>

        {/* ================= GRID ARSITEKTUR ================= */}
        <div className="grid grid-cols-12 gap-6">

          {/* HERO SERVICE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-12 md:col-span-7 group"
          >

            <div className="relative h-[360px] md:h-[460px] rounded-[var(--radius-lg)] overflow-hidden">

              <Image
                src={main.image || "/fallback.jpg"}
                alt={main.title}
                fill
                sizes="(max-width:768px) 100vw, 58vw"
                className="object-cover transition duration-700 group-hover:scale-[1.06]"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/30" />

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">

                <div className="mb-4 text-[rgb(var(--color-primary))]">
                  {main.icon}
                </div>

                <h3 className="text-[24px] md:text-[28px] font-semibold text-white mb-2">
                  {main.title}
                </h3>

                <p className="text-[rgb(var(--color-white))]/85 text-[14px] max-w-[420px] mb-5">
                  {main.desc}
                </p>

                <Link
                  href="/layanan"
                  className="text-[12px] uppercase tracking-[0.15em] text-white/80 hover:text-white"
                >
                  Selengkapnya →
                </Link>

              </div>

            </div>

          </motion.div>

          {/* SIDE GRID */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-12 gap-6">

            {rest.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="col-span-12 group"
              >

                <div className="
                  p-5
                  rounded-[var(--radius-lg)]
                  border border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-surface))]
                  transition-all duration-300

                  hover:bg-[rgb(var(--color-dark))]
                  hover:border-[rgb(var(--color-dark))]
                  hover:shadow-[var(--shadow-elevated)]
                ">

                  {/* ICON */}
                  <div className="
                    mb-3
                    text-[rgb(var(--color-primary))]
                    group-hover:text-white
                    transition
                  ">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="
                    text-[15px]
                    font-semibold
                    mb-2
                    text-[rgb(var(--color-text))]
                    group-hover:text-white
                  ">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="
                    text-[13px]
                    text-[rgb(var(--color-muted))]
                    leading-[1.7]
                    group-hover:text-white/80
                    transition
                  ">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}