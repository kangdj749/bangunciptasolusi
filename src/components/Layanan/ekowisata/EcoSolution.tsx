export function EcoSolution() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="max-w-[560px] mb-10">
          <p className="caption mb-2">Solusi Kami</p>
          <h2 className="h2 mb-3">
            Pendekatan Terintegrasi dalam Perencanaan Ekowisata
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {[
            "Analisis potensi dan daya dukung kawasan",
            "Perencanaan zonasi wisata berbasis konservasi",
            "Pengembangan konsep pengalaman wisata",
            "Integrasi dengan ekonomi dan masyarakat lokal",
          ].map((item, i) => (
            <div key={i} className="card-premium p-5">
              <p className="text-[13px] leading-[1.6]">{item}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}