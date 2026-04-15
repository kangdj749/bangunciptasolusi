"use client";

import { FiClipboard, FiUsers, FiSettings, FiCreditCard } from "react-icons/fi";

export default function IntegratedWorkflowSection() {
  const divisions = [
    {
      name: "Administrasi",
      description: "Pengelolaan dokumen lelang, administrasi proyek, serta arsip legalitas.",
      icon: <FiClipboard size={36} className="text-[rgb(var(--color-primary))]" />,
    },
    {
      name: "Sumber Daya Manusia",
      description: "Rekrutmen dan pengembangan tenaga ahli untuk memastikan kualitas tim proyek.",
      icon: <FiUsers size={36} className="text-[rgb(var(--color-primary))]" />,
    },
    {
      name: "Teknik",
      description: "Pelaksanaan pekerjaan teknis sesuai disiplin masing-masing dengan pengawasan mutu.",
      icon: <FiSettings size={36} className="text-[rgb(var(--color-primary))]" />,
    },
    {
      name: "Keuangan",
      description: "Pengelolaan pajak, kas, invoice, dan laporan keuangan proyek secara akuntabel.",
      icon: <FiCreditCard size={36} className="text-[rgb(var(--color-primary))]" />,
    },
  ];

  return (
    <section className="relative py-10 md:py-20 bg-white">
      <div className="container-main">

        {/* Headline */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-3">
            Sistem Kerja
          </p>
          <div className="w-16 h-[3px] bg-[rgb(var(--color-primary))] mb-6 mx-auto rounded" />
          <h2 className="text-[28px] md:text-[36px] font-semibold leading-[1.3] tracking-[0.2px]">
            Koordinasi Lintas Divisi yang Terstruktur
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.75] text-muted mt-4">
            Struktur organisasi kami memastikan setiap proyek dikelola secara rapi, terdokumentasi, dan terkontrol melalui empat divisi utama perusahaan.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((div, idx) => (
            <div
              key={idx}
              className="bg-[rgb(var(--color-secondary))/5] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{div.icon}</div>
              <h3 className="text-[rgb(var(--color-primary))] font-semibold text-lg mb-2">{div.name}</h3>
              <p className="text-[14px] text-muted leading-[1.6]">{div.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}