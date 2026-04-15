export function SpatialAgitationSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="max-w-[520px]">
            <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">DAMPAK</p>
            {/* Accent Line */}
            <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />

            <h2 className="h2 mb-3">Ketika Perencanaan Tidak Tepat</h2>
            <p className="body text-[rgb(var(--color-muted))]">
              Tanpa pendekatan berbasis data, penataan ruang dapat menjadi masalah jangka panjang.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Menghambat pertumbuhan ekonomi",
              "Biaya koreksi tinggi di masa depan",
              "Menurunkan daya tarik investasi",
              "Menurunkan kualitas hidup masyarakat",
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-[var(--radius-md)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-white))]">
                <p className="text-[13px] leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-10 max-w-[640px]">
          <p className="body">
            Penataan ruang yang kurang tepat hari ini dapat menjadi beban besar di masa depan.
          </p>
        </div>

      </div>
    </section>
  );
}