"use client";

import { motion } from "framer-motion";

export default function SolutionTopografi() {
  const points: string[] = [
    "Data presisi tinggi untuk desain yang tepat",
    "Analisis tanah untuk struktur yang aman",
    "Mengurangi risiko teknis",
    "Efisiensi sejak tahap awal",
  ];

  return (
    <section className="section bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        <div className="max-w-[720px] mb-10">
          <h2 className="h2 mb-4">
            Pendekatan Berbasis Data untuk Menghilangkan Ketidakpastian
          </h2>
          <p className="text-muted">
            Kami membantu Anda memulai proyek dengan fondasi data yang kuat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <motion.div
              key={p}
              whileHover={{ y: -3 }}
              className="card-premium"
            >
              <p className="body">{p}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}