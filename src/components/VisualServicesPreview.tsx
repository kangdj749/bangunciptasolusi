"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { sizes } from "@/lib/utils/imageSizes";

type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Penataan Ruang",
    slug: "penataan-ruang",
    description:
      "Perencanaan tata ruang berbasis regulasi dan analisis spasial.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544179/tataruang1_wkdygs.png",
  },
  {
    title: "Arsitektur",
    slug: "arsitektur",
    description:
      "Desain bangunan yang fungsional, estetis, dan berkelanjutan.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773533548/kantor2_ea9zdw.png",
  },
  {
    title: "Rekayasa Teknik",
    slug: "rekayasa-teknik",
    description:
      "Solusi struktur dan infrastruktur yang presisi dan terintegrasi.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561465/rekayasa_d37iob.png",
  },
  {
    title: "Topografi & Geoteknik",
    slug: "topografi-geoteknik",
    description:
      "Investigasi lahan berbasis data untuk keputusan teknis akurat.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561867/topografi_lkvr8d.png",
  },
];

export default function ServicesHomeSection() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-12 gap-6 mb-14">

          <div className="col-span-12 md:col-span-6">
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Layanan
            </p>

            <h2 className="h2 mb-4">
              Pendekatan Terintegrasi dalam Setiap Proyek
            </h2>
          </div>

          <div className="col-span-12 md:col-span-6 flex items-end">
            <p className="body text-muted max-w-[520px]">
              Kami menghadirkan solusi yang menghubungkan arsitektur,
              rekayasa teknik, dan perencanaan wilayah dalam satu sistem
              kerja yang terstruktur dan profesional.
            </p>
          </div>

        </div>

        {/* ================= GRID ARSITEKTUR ================= */}
        <div className="grid grid-cols-12 gap-6">

          {/* FEATURED SERVICE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-12 md:col-span-7 group"
          >
            <Link href={`/layanan/${featured.slug}`}>

              <div className="relative h-[320px] md:h-[420px] rounded-[var(--radius-lg)] overflow-hidden">

                <Image
                  src={cloudinaryImage(featured.image, "banner")}
                  alt={featured.title}
                  fill
                  sizes={sizes.col7}
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/30" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <h3 className="text-[22px] md:text-[26px] font-semibold text-white mb-2">
                    {featured.title}
                  </h3>

                  <p className="text-[rgb(var(--color-white))]/85 text-[14px] max-w-[420px]">
                    {featured.description}
                  </p>

                </div>

              </div>

            </Link>
          </motion.div>

          {/* SIDE SERVICES */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">

            {rest.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/layanan/${service.slug}`}>

                  <div className="flex gap-4 items-center">

                    {/* IMAGE */}
                    <div className="relative w-[110px] h-[90px] rounded-[var(--radius-md)] overflow-hidden shrink-0">

                      <Image
                        src={cloudinaryImage(service.image, "card")}
                        alt={service.title}
                        fill
                        sizes={sizes.col3}
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                    </div>

                    {/* TEXT */}
                    <div>

                      <h3 className="text-[14px] font-semibold text-[rgb(var(--color-text))] mb-1 group-hover:text-primary transition">
                        {service.title}
                      </h3>

                      <p className="text-[12px] text-[rgb(var(--color-muted))] leading-[1.6]">
                        {service.description}
                      </p>

                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-16 flex justify-between items-center flex-wrap gap-4">

          <p className="text-[13px] text-[rgb(var(--color-muted))]">
            Jelajahi seluruh layanan kami untuk memahami pendekatan yang kami terapkan.
          </p>

          <Link href="/layanan" className="btn btn-outline">
            Lihat Semua Layanan
          </Link>

        </div>

      </div>
    </section>
  );
}