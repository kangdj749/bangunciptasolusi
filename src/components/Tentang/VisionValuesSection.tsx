"use client";

import { motion } from "framer-motion";
import { FiUsers, FiShield, FiZap, FiTrendingUp } from "react-icons/fi";

export default function VisionValuesSection() {
  const coreValues = [
    {
      label: "SYNERGY",
      description:
        "Kolaborasi tim terintegrasi untuk menghasilkan solusi optimal.",
      icon: <FiUsers size={20} />,
    },
    {
      label: "INTEGRITY",
      description:
        "Transparansi dan akuntabilitas sebagai fondasi profesionalisme.",
      icon: <FiShield size={20} />,
    },
    {
      label: "INNOVATION",
      description:
        "Pendekatan adaptif terhadap tantangan rekayasa modern.",
      icon: <FiZap size={20} />,
    },
    {
      label: "IMPACT",
      description:
        "Memberikan hasil berkelanjutan dan berdampak nyata.",
      icon: <FiTrendingUp size={20} />,
    },
  ];

  return (
    <section id="visi" className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-[520px] mb-10">

          <p className="caption uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] mb-3">
            Visi & Nilai
          </p>

          <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-4" />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h2 text-[rgb(var(--color-text))] mb-4"
          >
            Fondasi Nilai untuk
            <span className="block text-[rgb(var(--color-primary))]">
              Kinerja Profesional
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="body text-[rgb(var(--color-muted))]"
          >
            Menjadi pusat konsultasi arsitektur dan rekayasa teknik yang
            menghadirkan solusi profesional, terukur, dan berkelanjutan
            bagi pembangunan nasional.
          </motion.p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">

          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * idx }}
              className="card-premium text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-[rgb(var(--color-primary))]">
                {value.icon}
              </div>

              {/* Label */}
              <h3 className="h3 text-[rgb(var(--color-text))] mb-2 tracking-[0.4px]">
                {value.label}
              </h3>

              {/* Description */}
              <p className="caption leading-[1.6]">
                {value.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}