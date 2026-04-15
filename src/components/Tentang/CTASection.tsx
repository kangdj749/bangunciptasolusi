"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="
            max-w-[720px]
            mx-auto
            text-center
            border border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            px-6 py-10 md:px-10 md:py-12
            bg-[rgb(var(--color-soft))]
            shadow-[var(--shadow-soft)]
          "
        >

          {/* Label */}
          <p className="caption uppercase tracking-[1.4px] text-subtle mb-3">
            Konsultasi Proyek
          </p>

          {/* Heading */}
          <h2 className="h2 text-primary mb-4">
            Diskusikan Kebutuhan Proyek Anda
          </h2>

          {/* Description */}
          <p className="body text-muted max-w-[560px] mx-auto mb-8">
            Tim kami siap membantu merencanakan dan merealisasikan proyek
            konstruksi secara profesional, terukur, serta sesuai dengan
            regulasi yang berlaku.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3">

            <Link href="/kontak" className="btn btn-primary">
              Jadwalkan Diskusi
            </Link>

            <Link href="/portfolio" className="btn btn-outline">
              Lihat Portofolio
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}