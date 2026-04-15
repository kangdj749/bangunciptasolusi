"use client";

import { motion } from "framer-motion";

export default function ProblemTopografi() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main max-w-[760px]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="h2 mb-6"
        >
          Kesalahan di Awal Bisa Berujung Biaya Besar di Akhir
        </motion.h2>

        <p className="body text-muted mb-6">
          Banyak proyek gagal bukan karena desain, tetapi karena data awal
          yang tidak akurat.
        </p>

        <ul className="space-y-3 text-muted">
          {[
            "Desain tidak sesuai kondisi lapangan",
            "Pemilihan pondasi tidak optimal",
            "Risiko penurunan tanah",
            "Rework mahal dan memakan waktu",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 font-medium text-[rgb(var(--color-text))]">
          Tanpa data presisi, setiap keputusan teknis adalah asumsi.
        </p>

      </div>
    </section>
  );
}