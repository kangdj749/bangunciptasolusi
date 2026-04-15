// ==============================
// APPROACH SECTION (TIMELINE STYLE)
// ==============================

export function SpatialApproachSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        <div className="max-w-[560px] mb-10">
          
          <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">PENDEKATAN</p>
              {/* Accent Line */}
          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />
          <h2 className="h2 mb-3">Pendekatan yang Sistematis dan Terukur</h2>
          <p className="body text-[rgb(var(--color-muted))]">
            Setiap proyek kami kerjakan melalui tahapan yang jelas dan terstruktur.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Studi & Analisis",
            "Konsep & Strategi",
            "Desain & Perencanaan",
            "Validasi Teknis",
            "Implementasi",
          ].map((step, idx) => (
            <div key={idx} className="p-4 border border-[rgb(var(--color-border))] rounded-[var(--radius-md)] bg-[rgb(var(--color-white))]">
              <p className="text-[12px] text-[rgb(var(--color-subtle))] mb-1">
                0{idx + 1}
              </p>
              <p className="text-[13px] font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-[640px]">
          <p className="body">
            Pendekatan ini memastikan solusi yang dihasilkan tidak hanya ideal, tetapi juga realistis untuk diwujudkan.
          </p>
        </div>

      </div>
    </section>
  );
}
