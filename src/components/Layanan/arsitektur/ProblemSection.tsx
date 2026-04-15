export default function ProblemSection() {
  return (
    <section className="section-tight">
      <div className="container-main">

        <h2 className="h2 text-primary mb-4">
          Tantangan dalam Perencanaan Arsitektur
        </h2>

        <p className="body max-w-xl mb-8 text-muted">
          Banyak proyek mengalami kendala sejak tahap perencanaan akibat desain
          yang tidak matang dan kurang terintegrasi.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Desain tidak efisien dan sulit direalisasikan",
            "Biaya membengkak akibat revisi",
            "Tidak sesuai standar regulasi",
            "Kurang sinkron dengan teknis lapangan",
          ].map((item, i) => (
            <div key={i} className="card-premium">
              <p className="body">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}