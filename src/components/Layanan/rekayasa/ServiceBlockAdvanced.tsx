"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function ServiceBlockAdvanced({
  title,
  desc,
  image,
  reverse,
}: {
  title: string;
  desc: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <section className="section">
      <div className={`container-main grid md:grid-cols-12 gap-8 items-center`}>

        {/* IMAGE */}
        <motion.div
          className={`relative h-[340px] rounded-[var(--radius-lg)] overflow-hidden md:col-span-7 ${reverse ? "md:order-2" : ""}`}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={cloudinaryImage(image, "detail")}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />
        </motion.div>

        {/* TEXT */}
        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          <h2 className="text-[24px] font-semibold mb-4">
            {title}
          </h2>
          <p className="text-muted mb-6">
            {desc}
          </p>

          <div className="flex items-center gap-2 text-primary text-[13px] font-medium group cursor-pointer">
            Pelajari lebih lanjut
            <span className="group-hover:translate-x-1 transition">→</span>
          </div>
        </div>

      </div>
    </section>
  );
}