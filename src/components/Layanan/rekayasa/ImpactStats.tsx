"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30%", label: "Efisiensi Biaya" },
  { value: "2x", label: "Percepatan Proyek" },
  { value: "100%", label: "Compliance Standar" },
];

export default function ImpactStats() {
  return (
    <section className="section">
      <div className="container-main grid md:grid-cols-3 gap-6 text-center">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="card-premium"
          >
            <div className="text-[28px] font-semibold text-primary mb-2">
              {s.value}
            </div>
            <div className="caption">{s.label}</div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}