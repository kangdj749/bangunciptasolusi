"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ServiceDetailBlock({
  title,
  desc,
  image,
  reverse = false,
}: {
  title: string;
  desc: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <section className="section">
      <div className={`container-main grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>

        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative h-[320px] rounded-[var(--radius-lg)] overflow-hidden"
        >
          <Image
            src={cloudinaryImage(image, "detail")}
            alt={title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20 hover:bg-[rgb(var(--color-dark))]/30 transition" />
        </motion.div>

        {/* TEXT */}
        <motion.div>
          <h2 className="h2 mb-4">{title}</h2>
          <p className="text-muted">{desc}</p>
        </motion.div>

      </div>
    </section>
  );
}