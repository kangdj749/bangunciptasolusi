"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type Project = {
  title: string;
  desc: string;
  image: string;
};

export default function ArchitectureSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774022434/facade_gedung_unjani_v3_dz36a6.jpg";

  /* ===== curated (ONLY REPRESENTATIVE) ===== */
  const projects: Project[] = [
    {
      title: "Bangunan Masjid",
      desc: "Perancangan masjid modern dan kawasan ibadah terpadu.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774569316/desain_masjid_kampus_modern_11_sjl7zd.jpg",
    },
    {
      title: "Fasilitas Pendidikan",
      desc: "Desain ruang belajar yang adaptif dan berkelanjutan.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774567948/desain_gedung_kampus_modern_2_tkgnnj.jpg",
    },
    {
      title: "Bangunan Kesehatan",
      desc: "Perencanaan rumah sakit dan klinik sesuai standar medis.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773537967/rumahsakit2_khiyw3.png",
    },
    {
      title: "Perkantoran",
      desc: "Ruang kerja profesional yang efisien dan representatif.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774568474/desain_kantor_teknis_pemerintah_4_kdf2fg.jpg",
    },
    {
      title: "Hunian",
      desc: "Desain rumah tinggal modern dengan pendekatan fungsional.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774531913/rumah_hunian_mbeuzg.jpg",
    },
    {
      title: "Interior",
      desc: "Penataan interior dengan estetika dan efisiensi ruang.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774534197/desain_interior_bank_modern1_rvehm3.jpg",
    },
  ];

  return (
    <section id="arsitektur" className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-[640px]"
        >
          <p className="caption-label text-[rgb(var(--color-primary))] mb-2">
            Architecture Services
          </p>

          <h2 className="h2 text-[rgb(var(--color-text))] mb-3">
            Layanan Arsitektur Profesional
          </h2>

          <p className="caption">
            Perencanaan arsitektur untuk berbagai kebutuhan bangunan dengan
            pendekatan fungsi, estetika, dan keberlanjutan. Eksplorasi
            portofolio kami untuk melihat implementasi nyata di berbagai proyek.
          </p>
        </motion.div>

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            w-full
            h-[200px]
            md:h-[300px]
            rounded-[var(--radius-lg)]
            overflow-hidden
            border border-[rgb(var(--color-border))]
            shadow-[var(--shadow-soft)]
            mb-10
          "
        >
          <Image
            src={cloudinaryImage(heroImage, "banner")}
            alt="Proyek arsitektur"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="
                group
                card-premium
                p-0
                overflow-hidden
              "
            >

              {/* image */}
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src={cloudinaryImage(project.image, "preview")}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.05]
                  "
                />
              </div>

              {/* content */}
              <div className="p-4">

                <h3 className="text-[13px] font-semibold text-[rgb(var(--color-text))] mb-1">
                  {project.title}
                </h3>

                <p className="text-[11.5px] leading-[1.55] text-[rgb(var(--color-muted))]">
                  {project.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-10 flex justify-start">
          <Link href="/portfolio" className="btn btn-primary">
            Lihat Portfolio Lengkap
          </Link>
        </div>

      </div>
    </section>
  );
}