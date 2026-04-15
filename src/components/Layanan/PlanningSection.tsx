"use client";

export default function PlanningSection() {
  const services = [
    {
      title: "Strategic Regional Planning",
      description:
        "Perencanaan wilayah berbasis data dan regulasi yang terukur, mendukung pengembangan kawasan secara sistematis dan berorientasi jangka panjang.",
    },
    {
      title: "Urban Design & Planning",
      description:
        "Perancangan kota modern yang memperhatikan fungsi, mobilitas, serta kualitas ruang publik.",
    },
    {
      title: "Landscape & Environmental Planning",
      description:
        "Integrasi lanskap dan lingkungan untuk menciptakan harmoni antara struktur bangunan dan ekosistem sekitar.",
    },
    {
      title: "Spatial Utilization Optimization",
      description:
        "Optimalisasi pemanfaatan ruang yang tepat guna dan bernilai tinggi.",
    },
  ];

  return (
    <section id="penataan-ruang" className="relative py-8 md:py-12">
      <div className="container-main">

        {/* Headline */}
        <div className="max-w-xl mb-10">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Bidang Layanan
          </p>
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />
          <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-4">
            Penataan Ruang & Pengembangan Wilayah
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
            BANGUN.IN memandang penataan ruang sebagai fondasi utama pembangunan berkelanjutan. Kami menghadirkan pendekatan integratif dalam perencanaan wilayah dan pengelolaan ruang guna menciptakan tata lingkungan yang efisien, estetis, serta bernilai ekonomi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="card-premium p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="h3 text-[rgb(var(--color-primary))] mb-2">{service.title}</h3>
              <p className="body text-muted">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Optional Note for Eco-tourism */}
        <p className="mt-8 text-[14px] md:text-[15px] text-muted">
          Kami juga memiliki pengalaman dalam perencanaan kawasan ekowisata yang mengedepankan prinsip keberlanjutan.
        </p>

      </div>
    </section>
  );
}