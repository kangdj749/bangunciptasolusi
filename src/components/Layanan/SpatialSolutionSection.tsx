export function SpatialSolutionSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="max-w-[540px]">
            <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">SOLUSI</p>
              {/* Accent Line */}
          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />
            <h2 className="h2 mb-3">Pendekatan Terintegrasi dan Berbasis Visi</h2>

            <p className="body mb-3">
              Penataan ruang adalah proses strategis dalam menyelaraskan perencanaan, pemanfaatan, dan pengendalian ruang.
            </p>

            <p className="body text-[rgb(var(--color-muted))]">
              Kami memastikan setiap keputusan selaras dengan regulasi dan memberikan dampak jangka panjang.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Analisis potensi wilayah secara menyeluruh",
              "Kepatuhan terhadap regulasi",
              "Pendekatan keberlanjutan",
              "Optimalisasi nilai ekonomi dan sosial",
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