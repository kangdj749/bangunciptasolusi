"use client";

import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <section className="section">
      <div className="container-main grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="caption-label text-subtle mb-3">
            Solusi
          </p>
          <h2 className="text-[28px] font-semibold mb-5">
            Pendekatan Rekayasa Terintegrasi
          </h2>
          <p className="text-muted">
            Kami menghadirkan solusi teknik berbasis analisis mendalam dan integrasi multidisiplin.
          </p>
        </motion.div>

        <motion.div className="space-y-4">
          {[
            "Analisis kondisi lapangan",
            "Perencanaan berbasis data",
            "Integrasi antar disiplin",
            "Efisiensi & keberlanjutan",
          ].map((item, i) => (
            <div key={i} className="card-premium">
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}