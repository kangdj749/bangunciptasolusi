"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LegalComplianceSection() {
  const legalDocs = [
    { title: "NIB OSS", number: "1601260070145" },
    { title: "SIUJK", number: "1601260070145" },
    { title: "Akta & SK", number: "AHU-0001581.AH.01.01.TAHUN 2026" },
  ];

  const documentImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773565509/legal_jz8hzg.jpg";

  return (
    <section id="legalitas" className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main grid gap-10 md:gap-14 md:grid-cols-2 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[520px]"
        >
          {/* Label */}
          <p className="caption uppercase tracking-[1.4px] text-primary mb-3">
            Legalitas Perusahaan
          </p>

          {/* Heading */}
          <h2 className="h2 text-primary mb-4">
            Legalitas Resmi & Terverifikasi
          </h2>

          {/* Description */}
          <p className="body text-muted leading-[1.7]">
            Perusahaan beroperasi secara sah dan efektif berdasarkan
            perizinan resmi Pemerintah Republik Indonesia melalui sistem
            Online Single Submission (OSS), serta memenuhi ketentuan
            regulasi yang berlaku.
          </p>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-col gap-4"
        >

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {legalDocs.map((doc, idx) => (
              <div
                key={idx}
                className="
                  border border-[rgb(var(--color-border))]
                  rounded-[var(--radius-lg)]
                  p-4
                  bg-[rgb(var(--color-surface))]
                  shadow-[var(--shadow-soft)]
                  hover:shadow-[var(--shadow-medium)]
                  hover:border-[rgb(var(--color-border-strong))]
                  transition-all duration-300
                "
              >
                <p className="text-[11px] font-medium text-[rgb(var(--color-subtle))] mb-1 tracking-[0.4px]">
                  {doc.title}
                </p>

                <p className="text-[13.5px] font-medium text-[rgb(var(--color-text))] leading-[1.5]">
                  {doc.number}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full h-40 md:h-48 rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] shadow-[var(--shadow-soft)]">
            <Image
              src={documentImage}
              alt="Dokumen legal perusahaan"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            {/* Overlay biar lebih premium */}
            <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/10" />
          </div>

        </motion.div>

      </div>
    </section>
  );
}