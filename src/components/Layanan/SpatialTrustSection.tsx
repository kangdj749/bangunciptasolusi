// ==============================
// TRUST SECTION
// ==============================

export function SpatialTrustSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="max-w-[560px] mb-10">
          
          <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">KEPERCAYAAN</p>
              {/* Accent Line */}
          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />
          <h2 className="h2 mb-3">Mengapa Memilih Bangun.in</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Tim profesional berpengalaman",
            "Pendekatan berbasis data dan regulasi",
            "Fokus pada solusi jangka panjang",
            "Komitmen terhadap kualitas",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 border border-[rgb(var(--color-border))] rounded-[var(--radius-md)]">
              <div className="w-2 h-2 mt-1 rounded-full bg-[rgb(var(--color-primary))]" />
              <p className="text-[13px]">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    
  );
}
