"use client";

import { motion } from "framer-motion";

type Item = {
  title: string;
  desc: string;
};

const items: Item[] = [
  { title: "Bathymetri", desc: "Pengukuran dasar perairan akurat." },
  { title: "Topografi", desc: "Data kontur dan elevasi presisi." },
  { title: "Deep Boring & SPT", desc: "Analisis lapisan tanah dalam." },
  { title: "Sondir (CPT)", desc: "Uji daya dukung cepat." },
  { title: "Hand Boring", desc: "Investigasi manual fleksibel." },
  { title: "Soil Laboratorium", desc: "Uji parameter tanah detail." },
];

export default function SubServicesTopografi() {
  return (
    <section className="section bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="card-premium"
            >
              <h3 className="h3 mb-2">{item.title}</h3>
              <p className="caption">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}