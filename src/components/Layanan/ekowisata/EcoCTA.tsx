"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export function EcoCTA() {
    const backgroundImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774021753/masjid_unjani_v20_zhdjue.jpg";

  return (
    <section className="relative overflow-hidden border-t border-[rgb(var(--color-secondary))]/15">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(backgroundImage, "banner")}
          alt="Professional Engineering Consultation"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Clean Dark Overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/70" />

      <div className="relative z-10 section-tight">
        <div className="container-main">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
          <h2 className="h2 text-[rgb(var(--color-white))] mb-4">
            Diskusikan Perencanaan Ekowisata Anda
          </h2>

          <p className="text-[13px] text-[rgb(var(--color-white))]/80 mb-6">
            Kami siap membantu merancang kawasan wisata yang berkelanjutan,
            bernilai, dan berdampak nyata.
          </p>

          <a href="/kontak" className="btn btn-primary">
            Konsultasi Sekarang
          </a>

        </motion.div>
        </div>

      </div>
    </section>
  );
}