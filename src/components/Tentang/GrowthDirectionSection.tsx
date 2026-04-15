"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  TrendingUp,
  Settings,
} from "lucide-react";

export default function GrowthDirectionSection() {
  const growthPoints = [
    {
      title: "Digital Engineering Integration",
      icon: Cpu,
      desc: "Integrasi teknologi digital dalam proses perencanaan dan eksekusi proyek.",
    },
    {
      title: "Sustainable Design Approach",
      icon: TrendingUp,
      desc: "Pendekatan desain berkelanjutan dengan efisiensi energi dan material.",
    },
    {
      title: "Penguatan Sistem Manajemen Internal",
      icon: Settings,
      desc: "Optimalisasi SOP, kontrol mutu, dan tata kelola organisasi.",
    },
  ];

  return (
    <section id="arah" className="section-tight bg-soft">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[560px] mb-8">

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="caption uppercase tracking-[1.4px] text-primary mb-3"
          >
            Strategi Perusahaan
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="h2 text-primary mb-4"
          >
            Arah Pertumbuhan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="body text-muted"
          >
            Strategi pengembangan difokuskan pada peningkatan kapabilitas teknis,
            penguatan sistem manajemen modern, serta adaptasi terhadap dinamika
            industri konstruksi yang terus berkembang.
          </motion.p>

        </div>

        {/* LIST */}
        <div className="space-y-4">

          {growthPoints.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * idx }}
                className="
                  relative
                  border border-[rgb(var(--color-border))]
                  rounded-[var(--radius-lg)]
                  p-5
                  bg-[rgb(var(--color-surface))]
                  shadow-[var(--shadow-soft)]
                  hover:shadow-[var(--shadow-medium)]
                  hover:border-[rgb(var(--color-border-strong))]
                  transition-all duration-300
                "
              >

                {/* Accent */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-primary rounded-l-[var(--radius-lg)]" />

                <div className="flex items-start gap-4 pl-2">

                  {/* Icon */}
                  <div className="text-primary mt-[2px]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h3 className="h3 text-[rgb(var(--color-text))] mb-2">
                      {item.title}
                    </h3>

                    <p className="caption leading-[1.65] text-muted">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}