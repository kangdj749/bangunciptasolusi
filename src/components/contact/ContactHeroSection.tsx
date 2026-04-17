"use client";

export default function ContactHeroSection() {
  return (
    <section className="relative section-tight overflow-hidden bg-[rgb(var(--color-bg))]">

      {/* ================= BACKGROUND ACCENT ================= */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-br
          from-[rgb(var(--color-gold))]/6
          via-[rgb(var(--color-bg))]
          to-[rgb(var(--color-bg))]
        "
      />

      {/* subtle gold glow */}
      <div
        className="
          pointer-events-none
          absolute top-[-120px] right-[-80px]
          w-[420px] h-[420px]
          rounded-full
          bg-[rgb(var(--color-gold))]/10
          blur-[120px]
        "
      />

      <div className="container-main relative">

        <div className="max-w-[620px]">

          {/* ================= EYEBROW ================= */}
          <p
            className="
              caption-label
              text-[rgb(var(--color-gold-dark))]
              mb-4
            "
          >
            PT. Bangun Cipta Solusi
          </p>

          {/* ================= ACCENT LINE ================= */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1.5px] bg-[rgb(var(--color-gold))]" />
            <div className="w-4 h-[1px] bg-[rgb(var(--color-border))]" />
          </div>

          {/* ================= HEADLINE ================= */}
          <h1
            className="
              text-[24px] sm:text-[30px] md:text-[34px]
              font-semibold
              leading-[1.25]
              tracking-[-0.01em]
              text-[rgb(var(--color-text))]
              mb-5
            "
          >
            Hubungi Kami untuk
            <span
              className="
                block
                font-semibold
                text-[rgb(var(--color-black))]
              "
            >
              Kolaborasi Profesional
            </span>
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <div
            className="
              space-y-4
              body
              text-[rgb(var(--color-muted))]
              max-w-[560px]
            "
          >
            <p>
              PT. Bangun Cipta Solusi membuka ruang kolaborasi bagi instansi
              pemerintah, lembaga pendidikan, institusi swasta, maupun mitra
              strategis lainnya.
            </p>

            <p>
              Kami siap mendampingi kebutuhan perencanaan, rekayasa, dan
              manajemen konstruksi dengan pendekatan teknis yang terukur,
              profesional, dan akuntabel.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}