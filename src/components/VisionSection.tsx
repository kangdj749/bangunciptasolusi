"use client";

export default function VisionSection() {
  const values = [
    {
      title: "SYNERGY",
      description: "Lintas disiplin, satu visi.",
    },
    {
      title: "INTEGRITY",
      description: "Menjunjung kode etik dan kejujuran teknis.",
    },
    {
      title: "INNOVATION",
      description: "Adaptif terhadap teknologi rekayasa terbaru.",
    },
    {
      title: "IMPACT",
      description: "Berorientasi pada kemajuan bangsa.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from [rgb(var(--color-secondary))]/20 via-white to-white">
      <div className="container-main">

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start">

          {/* LEFT — VISI */}
          <div className="max-w-xl">

            <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

            <h2 className="text-[22px] md:text-[30px] font-semibold mb-6">
              Visi{" "}
              <span className="text-[rgb(var(--color-primary))]">
                Kami
              </span>
            </h2>

            <p className="text-[14px] md:text-[15px] leading-[1.8] text-muted">
              Menjadi perusahaan konsultan arsitektur, engineering dan
              manajemen terkemuka yang menjadi pilar utama dalam percepatan
              pembangunan bangsa Indonesia yang berkelanjutan.
            </p>

          </div>

          {/* Vertical Divider Desktop */}
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-[rgb(var(--color-secondary))] to-transparent" />

          {/* RIGHT — CORE VALUES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {values.map((value, index) => (
              <div
                key={index}
                className="group border border-[rgb(var(--color-secondary))] rounded-lg p-6 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-sm bg-white"
              >
                {/* Accent */}
                <div className="w-8 h-[2px] bg-[rgb(var(--color-primary))] mb-4 transition-all duration-300 group-hover:w-12" />

                <h3 className="text-[14px] font-semibold tracking-[0.5px] mb-3">
                  {value.title}
                </h3>

                <p className="text-[13px] leading-[1.7] text-muted">
                  {value.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}