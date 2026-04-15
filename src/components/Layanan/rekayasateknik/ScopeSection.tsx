"use client";

export default function ScopeSection() {
  const data = [
    {
      title: "Pondasi & Struktur",
      desc: "Menjamin keamanan bangunan dari pondasi hingga struktur atas.",
    },
    {
      title: "Water Engineering",
      desc: "Manajemen sumber daya air berkelanjutan.",
    },
    {
      title: "Transportasi",
      desc: "Meningkatkan konektivitas infrastruktur.",
    },
    {
      title: "MEP",
      desc: "Instalasi mekanikal dan elektrikal yang optimal.",
    },
  ];

  return (
    <section className="section bg-soft">
      <div className="container-main">

        <h2 className="h2 text-primary mb-8">
          Cakupan Keahlian
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {data.map((d, i) => (
            <div key={i} className="card-premium">
              <h3 className="h3 mb-2">{d.title}</h3>
              <p className="caption">{d.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}