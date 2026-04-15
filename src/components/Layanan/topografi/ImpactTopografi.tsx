export default function ImpactTopografi() {
  const items = [
    "Perencanaan lebih presisi",
    "Struktur lebih aman",
    "Efisiensi biaya",
    "Risiko terkendali",
  ];

  return (
    <section className="section bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        <h2 className="h2 mb-8 text-center">
          Keputusan Lebih Tepat, Risiko Lebih Rendah
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i} className="card-premium text-center">
              <p className="body">{i}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}