"use client";

import Link from "next/link";

export default function ServicesPreviewSection() {
  const services = [
    {
      title: "Penataan Ruang",
      description:
        "Perencanaan wilayah visioner, urban design modern, pengelolaan lanskap, hingga optimalisasi pemanfaatan ruang secara berkelanjutan.",
      href: "/layanan/penataan-ruang",
    },
    {
      title: "Arsitektur",
      description:
        "Perencanaan dan desain bangunan pendidikan, perkantoran, rumah sakit, masjid, hunian, hingga interior dengan pendekatan fungsional dan estetika.",
      href: "/layanan/arsitektur",
    },
    {
      title: "Perencanaan Rekayasa",
      description:
        "Solusi teknik komprehensif meliputi struktur, pondasi, water engineering, drainase, transportasi, mekanikal dan elektrikal.",
      href: "/layanan/rekayasa-teknik",
    },
    {
      title: "Topografi & Soil Investigasi",
      description:
        "Layanan survei topografi dan investigasi tanah (Sondir, Boring, SPT, Laboratorium) untuk memastikan fondasi proyek yang presisi dan aman.",
      href: "/layanan/topografi-soil",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from [rgb(var(--color-secondary))]/15 via-white to [rgb(var(--color-secondary))]/15">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />
          <h2 className="text-[22px] md:text-[30px] font-semibold leading-[1.35]">
            Lingkup{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Layanan Profesional
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative border border-[rgb(var(--color-secondary))] rounded-lg p-6 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-sm"
            >
              {/* Subtle Top Accent */}
              <div className="w-8 h-[2px] bg-[rgb(var(--color-primary))] mb-5 transition-all duration-300 group-hover:w-12" />

              <h3 className="text-[15px] font-semibold mb-4 leading-[1.4]">
                {service.title}
              </h3>

              <p className="text-[13.5px] leading-[1.7] text-muted">
                {service.description}
              </p>

              {/* Bottom subtle line animation */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[rgb(var(--color-primary))] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

        </div>

        {/* CTA Bottom */}
        <div className="mt-14 text-center">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[rgb(var(--color-primary))] border-b border-[rgb(var(--color-primary))] pb-1 transition hover:opacity-80"
          >
            Lihat Detail Layanan
            <span className="text-base leading-none">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}