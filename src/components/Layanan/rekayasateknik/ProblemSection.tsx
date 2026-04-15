"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  const items = [
    "Perhitungan struktur yang tidak presisi",
    "Sistem air tidak terintegrasi",
    "Perencanaan transportasi tidak efisien",
    "Instalasi MEP kurang optimal",
  ];

  return (
    <section className="section">
      <div className="container-main">

        <div className="max-w-[640px] mb-10">
          <p className="caption-label text-subtle mb-3">
            Tantangan
          </p>
          <h2 className="text-[26px] font-semibold mb-4">
            Tantangan dalam Perencanaan Rekayasa
          </h2>
          <p className="text-muted">
            Banyak proyek menghadapi risiko karena kurangnya perencanaan teknis yang matang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="card-premium"
            >
              <p className="text-[14px]">{item}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}