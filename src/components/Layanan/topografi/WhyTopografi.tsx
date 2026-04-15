export default function WhyTopografi() {
  const points = [
    "Tenaga ahli berpengalaman",
    "Peralatan modern",
    "Output siap pakai",
    "Pendekatan terintegrasi",
  ];

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main max-w-[720px]">

        <h2 className="h2 mb-5">
          Lebih dari Sekadar Data — Kami Memberikan Kepastian
        </h2>

        <ul className="space-y-3">
          {points.map((p) => (
            <li key={p} className="flex gap-2 text-muted">
              <span className="text-primary">•</span>
              {p}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}