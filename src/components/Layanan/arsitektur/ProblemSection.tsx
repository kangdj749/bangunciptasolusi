export default function ProblemSection() {
  const problems = [
    "Desain tidak efisien dan sulit direalisasikan",
    "Biaya membengkak akibat revisi berulang",
    "Tidak sesuai standar regulasi yang berlaku",
    "Kurang sinkron dengan kondisi teknis lapangan",
  ];

  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="grid-arch mb-14">

          <div className="col-span-12 md:col-span-5">

            <p className="caption-label text-[rgb(var(--color-gold))] mb-3">
              Tantangan
            </p>

            <h2 className="h2 mb-4">
              Kompleksitas dalam
              <span className="block text-[rgb(var(--color-text))]">
                Perencanaan Arsitektur
              </span>
            </h2>

          </div>

          <div className="col-span-12 md:col-span-7 flex items-end">

            <p className="body text-[rgb(var(--color-muted))] max-w-[520px]">
              Banyak proyek mengalami kendala sejak tahap awal akibat desain
              yang tidak terintegrasi secara menyeluruh, sehingga berdampak
              pada efisiensi, biaya, dan kualitas pembangunan.
            </p>

          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid-arch items-start">

          {/* LEFT LINE (VISUAL STRUCTURE) */}
          <div className="hidden md:block md:col-span-2 relative">

            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[rgb(var(--color-border))]" />

            {/* GOLD DOT TOP */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-[rgb(var(--color-gold))]" />

          </div>

          {/* LIST */}
          <div className="col-span-12 md:col-span-10 space-y-6">

            {problems.map((item, i) => (
              <div
                key={i}
                className="
                  group
                  flex items-start gap-5
                  p-5 md:p-6
                  rounded-[var(--radius-lg)]
                  border border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-surface))]
                  transition-all duration-300

                  hover:bg-[rgb(var(--color-dark))]
                  hover:border-[rgb(var(--color-dark))]
                  hover:shadow-[var(--shadow-elevated)]
                "
              >

                {/* NUMBER */}
                <div
                  className="
                    min-w-[42px] h-[42px]
                    flex items-center justify-center
                    rounded-full
                    text-[13px]
                    font-semibold

                    bg-[rgb(var(--color-gold))]/15
                    text-[rgb(var(--color-gold-dark))]

                    group-hover:bg-[rgb(var(--color-white))]/10
                    group-hover:text-[rgb(var(--color-white))]
                    transition
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* TEXT */}
                <p
                  className="
                    body
                    text-[rgb(var(--color-text))]
                    leading-[1.7]

                    group-hover:text-[rgb(var(--color-white))]/85
                    transition
                  "
                >
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}