
// ==============================
// SERVICES SECTION (COMPACT PREMIUM)
// ==============================

export function SpatialServicesSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="max-w-[560px] mb-10">
          <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">KEAHLIAN</p>
              {/* Accent Line */}
          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />
          <h2 className="h2 mb-3">Empat Pilar Keahlian Kami</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Strategic Regional Planning",
              desc: "Perencanaan wilayah yang visioner dan terukur untuk mendukung pertumbuhan jangka panjang."
            },
            {
              title: "Urban Design & Planning",
              desc: "Perancangan kota yang modern, cerdas, dan fungsional dengan mempertimbangkan kebutuhan masyarakat."
            },
            {
              title: "Landscape & Environment",
              desc: "Keseimbangan antara estetika, fungsi, dan keberlanjutan lingkungan."
            },
            {
              title: "Spatial Utilization",
              desc: "Optimalisasi pemanfaatan ruang agar memberikan nilai maksimal secara ekonomi dan sosial."
            }
          ].map((item, idx) => (
            <div key={idx} className="card-premium p-5">
              <h3 className="text-[14px] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] text-[rgb(var(--color-muted))] leading-[1.6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



