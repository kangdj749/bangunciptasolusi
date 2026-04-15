export function EcoValue() {
  return (
    <section className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main max-w-[720px]">

        <p className="caption mb-2">Nilai</p>

        <h2 className="h2 mb-4">
          Nilai yang Dihasilkan
        </h2>

        <div className="grid gap-3">
          {[
            "Pelestarian lingkungan tetap terjaga",
            "Pengalaman wisata yang berkualitas",
            "Peningkatan nilai ekonomi kawasan",
            "Keberlanjutan jangka panjang",
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