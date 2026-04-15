"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Masalah Dimulai dari Perencanaan",
    desc: "Banyak proyek gagal bukan karena desain, tapi karena perencanaan teknis yang tidak matang.",
  },
  {
    title: "Risiko Terus Membesar",
    desc: "Kesalahan kecil di awal berdampak besar pada biaya dan keselamatan.",
  },
  {
    title: "Pendekatan Terintegrasi Dibutuhkan",
    desc: "Solusi harus menyatukan berbagai disiplin teknik secara menyeluruh.",
  },
];

export default function StickyStorySection() {
  return (
    <section className="section bg-soft">
      <div className="container-main grid md:grid-cols-2 gap-12">

        {/* LEFT STICKY */}
        <div className="sticky top-28 h-fit">
          <h2 className="text-[28px] font-semibold leading-[1.3]">
            Tantangan dalam Perencanaan Rekayasa
          </h2>
        </div>

        {/* RIGHT FLOW */}
        <div className="space-y-20">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-[420px]"
            >
              <h3 className="text-[18px] font-semibold mb-3">
                {s.title}
              </h3>
              <p className="text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}