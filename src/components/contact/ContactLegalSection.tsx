"use client";

export default function ContactLegalSection() {
  return (
    <section className="section-tight bg-soft">

      <div className="container-main">

        {/* Header */}
        <div className="max-w-[560px] mb-10">

          {/* Eyebrow */}
          <p className="caption text-primary uppercase tracking-[1.6px] mb-3">
            Legalitas Perusahaan
          </p>

          {/* Accent */}
          <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-4" />

          {/* Title */}
          <h2 className="h2 text-[rgb(var(--color-text))]">
            Legalitas & Perizinan Usaha
          </h2>

        </div>

        {/* Card Wrapper */}
        <div className="card-premium">

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">

            {/* Item */}
            <div>
              <p className="caption text-subtle mb-1">NIB OSS</p>
              <p className="body font-medium text-[rgb(var(--color-text))]">
                1601260070145
              </p>
            </div>

            <div>
              <p className="caption text-subtle mb-1">SIUJK OSS</p>
              <p className="body font-medium text-[rgb(var(--color-text))]">
                1601260070145
              </p>
            </div>

            <div>
              <p className="caption text-subtle mb-1">Status Izin</p>
              <p className="body font-medium text-[rgb(var(--color-text))]">
                Telah Memenuhi Komitmen / Efektif
              </p>
            </div>

            <div>
              <p className="caption text-subtle mb-1">Akta Pendirian</p>
              <p className="body font-medium text-[rgb(var(--color-text))]">
                No. 70 — 08 Januari 2026
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="caption text-subtle mb-1">SK Kemenkumham</p>
              <p className="body font-medium text-[rgb(var(--color-text))]">
                AHU-0001581.AH.01.01.TAHUN 2026
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="mt-8 pt-6 border-t border-[rgb(var(--color-border))]" />

          {/* Note */}
          <p className="caption leading-[1.7] max-w-[720px]">
            Perizinan usaha diterbitkan oleh Pemerintah Republik Indonesia melalui
            sistem Online Single Submission (OSS) dan telah berlaku secara efektif
            sesuai ketentuan perundang-undangan yang berlaku.
          </p>

        </div>

      </div>

    </section>
  );
}