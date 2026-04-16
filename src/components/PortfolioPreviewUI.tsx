"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import type { Portfolio } from "@/types/portfolio";
import { sizes } from "@/lib/utils/imageSizes";

/* ============================== */
/* TYPES */
/* ============================== */
interface Props {
  projects: Portfolio[];
}

/* ============================== */
/* ANIMATION */
/* ============================== */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* ============================== */
/* COMPONENT */
/* ============================== */
export default function PortfolioPreviewUI({ projects }: Props) {
  const featured = projects[0];
  const rest = projects.slice(1, 5);

  return (
    <section className="section bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-12 mb-12 gap-6 items-end">

          <div className="col-span-12 md:col-span-6">
            <p className="caption-label text-[rgb(var(--color-gold))] mb-3">
              Portofolio
            </p>

            <h2 className="h2 mb-3">
              Proyek Nyata & Implementasi Profesional
            </h2>

            <p className="body text-muted max-w-[520px]">
              Setiap proyek mencerminkan pendekatan terstruktur dan terukur,
              mengintegrasikan arsitektur, rekayasa teknik, dan manajemen konstruksi.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 flex md:justify-end">
            <Link href="/portfolio" className="btn btn-outline">
              Lihat Semua Proyek
            </Link>
          </div>

        </div>

        {/* ================= GRID ARSITEKTUR ================= */}
        <div className="grid grid-cols-12 gap-6">

          {/* FEATURED */}
          {featured && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="col-span-12 md:col-span-7 group"
            >
              <Link href={`/portfolio/${featured.slug}`}>
                <div className="relative h-[320px] md:h-[420px] rounded-[var(--radius-lg)] overflow-hidden">

                  <Image
                    src={cloudinaryImage(featured.cover_image, "banner")}
                    alt={featured.title}
                    fill
                    sizes={sizes.col7}
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <p className="caption-light mb-2">
                      {featured.location} • {featured.year}
                    </p>

                    <h3 className="text-[20px] md:text-[24px] font-semibold text-white">
                      {featured.title}
                    </h3>

                  </div>

                </div>
              </Link>
            </motion.div>
          )}

          {/* SIDE STACK */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-12 gap-6">

            {rest.map((item, i) => (
              <motion.div
                key={item.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="col-span-12 group"
              >
                <Link href={`/portfolio/${item.slug}`}>

                  <div className="flex gap-4 items-center">

                    <div className="relative w-[120px] h-[90px] rounded-[var(--radius-md)] overflow-hidden shrink-0">

                      <Image
                        src={cloudinaryImage(item.cover_image, "card")}
                        alt={item.title}
                        fill
                        sizes={sizes.col3}
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                    </div>

                    <div>

                      <p className="caption mb-1">
                        {item.location} • {item.year}
                      </p>

                      <h3 className="text-[14px] font-semibold text-[rgb(var(--color-primary))] leading-snug group-hover:text-primary transition">
                        {item.title}
                      </h3>

                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}