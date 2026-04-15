"use client";

import { motion } from "framer-motion";

export default function AgitationSection() {
  const items = [
    "Pembengkakan biaya proyek",
    "Keterlambatan pembangunan",
    "Risiko kegagalan struktur",
    "Masalah operasional jangka panjang",
  ];

  return (
    <section className="section bg-soft">
      <div className="container-main">

        <div className="max-w-[640px] mb-10">
          <h2 className="text-[26px] font-semibold mb-4 text-primary">
            Dampak yang Sering Terjadi
          </h2>
          <p className="text-muted">
            Tanpa perencanaan rekayasa yang tepat, risiko proyek meningkat secara signifikan.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="card-premium text-center"
            >
              <p className="text-[14px]">{item}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}