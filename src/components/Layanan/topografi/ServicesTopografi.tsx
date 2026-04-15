export default function ServicesTopografi() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main grid md:grid-cols-2 gap-8">

        <div className="card-premium">
          <h3 className="h3 mb-3">Survey Topografi</h3>
          <p className="text-muted">
            Pemetaan kondisi permukaan tanah secara detail untuk mendukung
            perencanaan yang presisi.
          </p>
        </div>

        <div className="card-premium">
          <h3 className="h3 mb-3">Soil Investigasi (Geoteknik)</h3>
          <p className="text-muted">
            Analisis karakteristik tanah untuk menentukan pondasi yang aman
            dan efisien.
          </p>
        </div>

      </div>
    </section>
  );
}