export function SpatialProblemSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="max-w-[560px] mb-10">
          <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">Permasalahan</p>
           
            {/* Accent Line */}
          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />

          <h2 className="h2 mb-3">Tantangan dalam Penataan Ruang Modern</h2>
          <p className="body text-[rgb(var(--color-muted))]">
            Banyak wilayah berkembang tanpa arah yang jelas, menyebabkan ketidakseimbangan antara pembangunan dan keberlanjutan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-3 max-w-[480px]">
            <p className="body">
              Perencanaan yang tidak terintegrasi sering menimbulkan berbagai masalah yang berdampak langsung pada kualitas ruang.
            </p>
            <p className="body text-[rgb(var(--color-muted))]">
              Tanpa pendekatan sistematis, potensi wilayah tidak termanfaatkan optimal.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Pemanfaatan lahan yang tidak optimal",
              "Konflik kepentingan antar sektor",
              "Ketidaksesuaian dengan regulasi",
              "Penurunan kualitas lingkungan",
            ].map((item, idx) => (
              <div key={idx} className="card-premium flex items-start gap-3 p-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[rgb(var(--color-primary))]" />
                <p className="text-[13px] leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
