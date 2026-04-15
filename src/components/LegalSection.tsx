"use client";

export default function LegalSection() {
  const legalItems = [
    {
      label: "Nomor Induk Berusaha (NIB OSS)",
      value: "1601260070145",
    },
    {
      label: "SIUJK OSS",
      value: "1601260070145",
    },
    {
      label: "Akta Pendirian",
      value: "No. 70, 08 Januari 2026",
    },
    {
      label: "SK Kemenkumham",
      value: "AHU-0001581.AH.01.01.TAHUN 2026",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          <h2 className="text-[22px] md:text-[30px] font-semibold leading-[1.35] mb-6">
            Legalitas{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Resmi & Terverifikasi
            </span>
          </h2>

          <p className="text-[14px] md:text-[15px] leading-[1.8] text-muted">
            PT. Bangun Cipta Solusi beroperasi secara sah dan efektif berdasarkan
            ketentuan hukum yang berlaku serta telah memenuhi komitmen perizinan
            resmi dari Pemerintah Republik Indonesia.
          </p>
        </div>

        {/* Legal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

          {legalItems.map((item, index) => (
            <div
              key={index}
              className="group border border-[rgb(var(--color-secondary))] rounded-lg p-6 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-sm"
            >
              <div className="w-8 h-[2px] bg-[rgb(var(--color-primary))] mb-4 transition-all duration-300 group-hover:w-12" />

              <p className="text-[13px] text-muted mb-2">
                {item.label}
              </p>

              <p className="text-[14px] font-semibold tracking-[0.3px]">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* Status Highlight */}
        <div className="border border-[rgb(var(--color-secondary))] rounded-lg p-6 mb-12 bg-[rgb(var(--color-secondary))]/10">
          <p className="text-[13px] text-muted mb-2">
            Status Izin Usaha
          </p>

          <p className="text-[15px] font-semibold text-[rgb(var(--color-primary))]">
            Telah Memenuhi Komitmen / Efektif
          </p>
        </div>

        {/* Importance Block */}
        <div className="max-w-3xl">

          <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          <h3 className="text-[16px] font-semibold mb-6">
            Legalitas ini penting untuk:
          </h3>

          <ul className="space-y-3 text-[14px] text-muted leading-[1.7]">
            <li>✔ Tender pemerintah</li>
            <li>✔ Proyek institusi</li>
            <li>✔ Mitra strategis</li>
          </ul>

        </div>

      </div>
    </section>
  );
}