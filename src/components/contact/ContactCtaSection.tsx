"use client";

import { motion } from "framer-motion";

export default function ContactCtaSection() {
  return (
    <section className="relative section-tight overflow-hidden bg-primary text-[rgb(var(--color-white))]">

      {/* Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-dark))]/30 pointer-events-none" />

      {/* Soft Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.10),transparent_55%)] pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-[rgb(var(--color-primary))]" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-[520px]"
        >

          {/* Eyebrow */}
          <p className="text-[10px] tracking-[1.6px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
            Kolaborasi Profesional
          </p>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-[rgb(var(--color-white))]/70 mb-4" />

          {/* Heading */}
          <h2 className="h2 text-[rgb(var(--color-white))] mb-3">
            Mari Wujudkan Proyek
            <span className="block">
              Berkualitas Bersama
            </span>
          </h2>

          {/* Description */}
          <p className="body text-[rgb(var(--color-white))]/80 max-w-[460px] mb-6">
            Setiap pembangunan yang berkualitas dimulai dari perencanaan yang
            matang dan kolaborasi yang profesional. Tim kami siap membantu
            merancang solusi teknik yang terukur, efisien, dan akuntabel.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">

            {/* Primary */}
            <a
              href="#consultation-form"
              className="
                btn
                btn-primary-dark
                
              "
            >
              Ajukan Konsultasi
            </a>

            {/* Secondary */}
            <a
              href="/kontak"
              className="
                btn
                outline
              "
            >
              Hubungi Kami
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}