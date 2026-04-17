"use client";

import { motion } from "framer-motion";

export default function ContactCtaSection() {
  return (
    <section className="relative section-tight overflow-hidden">

      {/* ================= BASE BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[rgb(var(--color-primary))]" />

      {/* ================= DEPTH GRADIENT ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[rgb(var(--color-primary))]
          via-[rgb(var(--color-primary))]
          to-[rgb(var(--color-dark))]/40
        "
      />

      {/* ================= GOLD ACCENT GLOW ================= */}
      <div
        className="
          pointer-events-none
          absolute top-[-120px] right-[-80px]
          w-[420px] h-[420px]
          rounded-full
          bg-[rgb(var(--color-gold))]/15
          blur-[140px]
        "
      />

      {/* ================= TEXT SAFE OVERLAY ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[rgb(var(--color-dark))]/60
          via-[rgb(var(--color-dark))]/30
          to-transparent
        "
      />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px]"
        >

          {/* ================= EYEBROW ================= */}
          <p
            className="
              caption-label
              text-[rgb(var(--color-gold-soft))]
              mb-4
            "
          >
            Kolaborasi Profesional
          </p>

          {/* ================= DIVIDER ================= */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[rgb(var(--color-gold))]" />
            <div className="w-4 h-[1px] bg-[rgb(var(--color-white))]/30" />
          </div>

          {/* ================= HEADING ================= */}
          <h2
            className="
              text-[26px] sm:text-[30px] md:text-[34px]
              font-semibold
              leading-[1.25]
              tracking-[-0.01em]
              text-[rgb(var(--color-white))]
              mb-4
            "
          >
            Mari Wujudkan Proyek
            <span className="block text-[rgb(var(--color-white))]">
              Berkualitas Bersama
            </span>
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              body
              text-[rgb(var(--color-white))]/80
              max-w-[500px]
              mb-8
            "
          >
            Setiap pembangunan berkualitas dimulai dari perencanaan yang matang
            dan kolaborasi yang profesional. Kami menghadirkan solusi teknik
            yang terukur, efisien, dan akuntabel.
          </p>

          {/* ================= CTA ================= */}
          <div className="flex flex-wrap items-center gap-4">

            {/* PRIMARY CTA */}
            <a
              href="#consultation-form"
              className="
                btn
                bg-[rgb(var(--color-white))]
                text-[rgb(var(--color-dark))]
                px-6 py-3

                shadow-[var(--shadow-medium)]

                hover:bg-[rgb(var(--color-white))]/90
                hover:shadow-[var(--shadow-elevated)]
                transition
              "
            >
              Ajukan Konsultasi
            </a>

            {/* SECONDARY CTA */}
            <a
              href="/kontak"
              className="
                text-[13px]
                uppercase
                tracking-[0.15em]
                text-[rgb(var(--color-white))]/80

                border-b
                border-[rgb(var(--color-white))]/30

                hover:text-[rgb(var(--color-gold))]
                hover:border-[rgb(var(--color-gold))]
                transition
              "
            >
              Hubungi Kami →
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}