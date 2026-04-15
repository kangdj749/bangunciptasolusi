export default function ProcessSection() {
  const steps = [
    "Konsultasi & Kebutuhan",
    "Konsep Desain",
    "Pengembangan",
    "Finalisasi Teknis",
  ];

  return (
    <section className="section-tight bg-soft">
      <div className="container-main">

        <h2 className="h2 text-primary mb-6">
          Tahapan Perencanaan
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="card-premium text-center">
              <p className="caption mb-2">0{i+1}</p>
              <p className="body">{s}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}