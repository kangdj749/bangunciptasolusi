"use client";

export default function GovernanceSection() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">

      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/15 via-white to-white pointer-events-none" />

      <div className="container-main relative">

        <div className="max-w-xl">

          {/* Micro Label */}
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Tata Kelola & Kepatuhan
          </p>

          {/* Accent Line */}
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          {/* H2 */}
          <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
            Integritas sebagai Fondasi Operasional
          </h2>

          {/* Paragraph */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4">
            PT. Bangun Cipta Solusi memahami bahwa tata kelola yang baik adalah prasyarat membangun kepercayaan jangka panjang. Kami menjalankan operasional perusahaan dengan prinsip profesional:
          </p>

          {/* List */}
          <ul className="list-disc list-inside text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4 space-y-2">
            <li>Transparansi dalam proses kerja & pelaporan</li>
            <li>Kepatuhan terhadap regulasi & standar teknis nasional</li>
            <li>Penegakan kode etik profesi</li>
            <li>Administrasi & legalitas yang akuntabel</li>
          </ul>

          {/* Closing Paragraph */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
            Komitmen ini menjadikan kami mitra yang dapat diandalkan, khususnya untuk proyek yang menuntut standar kepatuhan tinggi seperti tender pemerintah dan kerja sama institusional.
          </p>

        </div>

      </div>
    </section>
  );
}