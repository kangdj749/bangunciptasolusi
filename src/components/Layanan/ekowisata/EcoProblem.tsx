export function EcoProblem() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main max-w-[720px]">

        <p className="caption mb-2">Tantangan</p>

        <h2 className="h2 mb-4">
          Banyak Kawasan Wisata Tumbuh Tanpa Perencanaan yang Tepat
        </h2>

        <p className="body text-[rgb(var(--color-muted))] mb-6">
          Pengembangan wisata yang tidak terarah seringkali justru merusak potensi alam
          dan tidak memberikan dampak ekonomi yang berkelanjutan.
        </p>

        <div className="grid gap-3">
          {[
            "Kerusakan lingkungan akibat over development",
            "Minimnya perencanaan berbasis daya dukung kawasan",
            "Kurangnya integrasi dengan masyarakat lokal",
            "Nilai ekonomi tidak optimal",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[rgb(var(--color-primary))]" />
              <p className="text-[13px]">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}