"use client";

export default function GrowthVisionSection() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">

      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/15 via-white to-white pointer-events-none" />

      <div className="container-main relative">
        <div className="max-w-xl">

          {/* Micro Label */}
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Pertumbuhan & Visi
          </p>

          {/* Accent Line */}
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          {/* H2 */}
          <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
            Kontribusi Nyata bagi Pembangunan Nasional
          </h2>

          {/* Paragraph */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4">
            PT. Bangun Cipta Solusi menargetkan pertumbuhan berkelanjutan melalui peningkatan kapasitas teknis, penguatan sistem manajemen internal, dan pemanfaatan teknologi modern.
          </p>

          {/* List */}
          <ul className="list-disc list-inside text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4 space-y-2">
            <li>Mendukung percepatan pembangunan infrastruktur nasional</li>
            <li>Mengembangkan desain yang ramah lingkungan dan berkelanjutan</li>
            <li>Mengintegrasikan digital engineering dalam setiap proyek</li>
            <li>Membangun reputasi sebagai konsultan teknik terpercaya di tingkat nasional</li>
          </ul>

          {/* Closing Paragraph */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
            Dengan visi ini, kami berharap dapat memberikan solusi pembangunan yang berkualitas, terukur, dan berdampak jangka panjang bagi masyarakat.
          </p>

        </div>
      </div>
    </section>
  );
}