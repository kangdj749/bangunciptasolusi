"use client";

import { motion, Variants } from "framer-motion";
import {
  FiClipboard,
  FiUsers,
  FiTool,
  FiDollarSign,
} from "react-icons/fi";
import { ReactNode } from "react";

type Pillar = {
  title: string;
  icon: ReactNode;
  items: string[];
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

export default function SistemKerjaSection() {
  const pillars: Pillar[] = [
    {
      title: "Administrasi Proyek",
      icon: <FiClipboard size={16} />,
      items: [
        "Perencanaan jadwal pekerjaan",
        "Dokumentasi teknis proyek",
        "Koordinasi dengan stakeholder",
        "Pengelolaan dokumen kontrak",
      ],
    },
    {
      title: "Manajemen SDM",
      icon: <FiUsers size={16} />,
      items: [
        "Tim ahli multidisiplin",
        "Distribusi tugas profesional",
        "Pengawasan kualitas pekerjaan",
        "Koordinasi tim lapangan",
      ],
    },
    {
      title: "Pelaksanaan Teknis",
      icon: <FiTool size={16} />,
      items: [
        "Survey dan analisis teknis",
        "Perencanaan desain detail",
        "Pengujian lapangan",
        "Validasi hasil perencanaan",
      ],
    },
    {
      title: "Kontrol Keuangan",
      icon: <FiDollarSign size={16} />,
      items: [
        "Perencanaan anggaran proyek",
        "Monitoring biaya pekerjaan",
        "Efisiensi penggunaan dana",
        "Pelaporan keuangan proyek",
      ],
    },
  ];

  return (
    <section
      id="sistem-kerja"
      className="section-tight bg-[rgb(var(--color-surface))]"
    >
      <div className="container-main">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 max-w-[640px]"
        >
          {/* Label */}
          <p className="caption caption-label text-[rgb(var(--color-primary))] mb-3">
            Sistem Kerja
          </p>

          <h2 className="h2 text-[rgb(var(--color-text))] mb-4">
            Sistem Kerja Profesional & Terstruktur
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Setiap proyek dikelola melalui pendekatan sistematis yang
            mengintegrasikan administrasi, sumber daya manusia,
            pelaksanaan teknis, serta kontrol keuangan untuk memastikan
            hasil yang akurat, efisien, dan dapat dipertanggungjawabkan.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
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
                bg-[rgb(var(--color-bg))]
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
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[rgb(var(--color-primary))]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
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
                    transition-all
                    duration-300
                    group-hover:bg-[rgb(var(--color-primary))]
                    group-hover:text-[rgb(var(--color-white))]
                  "
                >
                  {pillar.icon}
                </div>

                <h3 className="text-[14px] font-semibold text-[rgb(var(--color-text))]">
                  {pillar.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {pillar.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[12px] leading-[1.6] text-[rgb(var(--color-muted))]"
                  >
                    <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-[rgb(var(--color-primary))]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}