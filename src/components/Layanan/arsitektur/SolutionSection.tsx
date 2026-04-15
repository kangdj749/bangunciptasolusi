export default function SolutionSection() {
  return (
    <section className="section">
      <div className="container-main">

        <h2 className="h2 text-primary mb-4">
          Pendekatan Arsitektur Terintegrasi
        </h2>

        <p className="body max-w-xl mb-10 text-muted">
          Kami menggabungkan estetika, fungsi, dan efisiensi teknis dalam satu
          sistem perencanaan yang terukur.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Analisis kebutuhan komprehensif",
            "Perencanaan berbasis fungsi",
            "Integrasi sistem teknis",
            "Kepatuhan regulasi",
            "Optimasi biaya",
            "Efisiensi pembangunan",
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