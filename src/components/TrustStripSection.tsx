"use client";

import {
  FiUsers,
  FiShield,
  FiMapPin,
  FiBookOpen,
} from "react-icons/fi";

type Item = {
  label: string;
  icon: React.ReactNode;
};

export default function TrustStrip() {
  const items: Item[] = [
    {
      label: "Multidisiplin Engineering Team",
      icon: <FiUsers size={18} />,
    },
    {
      label: "Legalitas Lengkap & Aktif",
      icon: <FiShield size={18} />,
    },
    {
      label: "Cakupan Proyek Nasional",
      icon: <FiMapPin size={18} />,
    },
    {
      label: "Pendekatan Akademik & Praktis",
      icon: <FiBookOpen size={18} />,
    },
  ];

  return (
    <section className="section-tight bg-[rgb(var(--color-bg))] border-t border-[rgb(var(--color-border))]">

      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="max-w-[640px] mb-12">
          <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
            Kredibilitas
          </p>

          <h2 className="h2 mb-4">
            Sistem Kerja Profesional & Terpercaya
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Kami menggabungkan pendekatan teknis, pengalaman lapangan,
            dan standar profesional untuk memastikan setiap proyek
            berjalan secara terstruktur dan akuntabel.
          </p>
        </div>

        {/* ================= GRID ARSITEKTUR ================= */}
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-12">

          {items.map((item, index) => (
            <div
              key={index}
              className="
                col-span-12
                md:col-span-6
                lg:col-span-3
                flex flex-col items-start
              "
            >

              {/* ICON */}
              <div className="mb-4">
                <div
                  className="
                    w-[42px] h-[42px]
                    flex items-center justify-center
                    rounded-[var(--radius-md)]
                    border border-[rgb(var(--color-border))]
                    bg-[rgb(var(--color-surface))]
                    text-[rgb(var(--color-primary))]
                  "
                >
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-[14.5px] font-semibold leading-[1.5] text-[rgb(var(--color-text))]">
                {item.label}
              </h3>

            </div>
          ))}

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-14 h-px bg-[rgb(var(--color-border))]" />

        {/* ================= FOOTNOTE ================= */}
        <div className="mt-6 max-w-[640px]">

          <p className="text-[12.5px] leading-[1.7] text-[rgb(var(--color-muted))]">
            Didukung tenaga ahli dari berbagai institusi teknik terkemuka serta
            pengalaman proyek skala nasional di berbagai sektor pembangunan.
          </p>

        </div>

      </div>

    </section>
  );
}