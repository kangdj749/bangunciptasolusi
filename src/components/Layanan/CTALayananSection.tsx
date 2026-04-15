"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Section7CTA() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">

      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            border
            border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            bg-[rgb(var(--color-surface))]
            p-6
            sm:p-8
            shadow-[var(--shadow-sm)]
          "
        >

          <div className="max-w-[560px]">

            {/* Headline */}
            <h2 className="h2 text-[rgb(var(--color-primary))] mb-3">
              Diskusikan Lingkup Proyek Anda
            </h2>

            {/* Description */}
            <p className="
              text-[12px]
              leading-[1.6]
              text-[rgb(var(--color-muted))]
              mb-5
              max-w-[460px]
            ">
              Tim kami siap membantu merumuskan kebutuhan perencanaan,
              desain, maupun kajian teknis proyek Anda secara profesional
              dan terintegrasi.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">

              <Link
                href="/kontak"
                className="btn btn-primary"
              >
                Konsultasi Proyek
              </Link>

              <Link
                href="/portfolio"
                className="btn btn-outline"
              >
                Lihat Portofolio
              </Link>

            </div>

            {/* Contact meta */}
            <div className="
              mt-4
              text-[11px]
              text-[rgb(var(--color-muted))]
            ">
              Tim kami akan segera menindaklanjuti kebutuhan Anda secara profesional.
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}