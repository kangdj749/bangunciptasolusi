import Image from "next/image";
import Link from "next/link";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { getPortfolios } from "@/lib/portfolio";
import type { Portfolio } from "@/types/portfolio";

// ==============================
// CONFIG
// ==============================
const PER_PAGE = 6;

// ==============================
// PAGE (SERVER COMPONENT)
// ==============================
export default async function PortfolioPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page || 1);

  const allProjects: Portfolio[] = await getPortfolios();

  const total = allProjects.length;
  const totalPages = Math.ceil(total / PER_PAGE);

  const projects = allProjects.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <main className="bg-[rgb(var(--color-bg))]">

      {/* ================= HEADER ================= */}
      <section className="section-tight border-b border-[rgb(var(--color-border))]">
        <div className="container-main">

          <p className="caption-subtle mb-3">
            <Link href="/">Home</Link> / Portfolio
          </p>

          <div className="max-w-[620px]">
            <h1 className="h1 mb-3">
              Portofolio Proyek
            </h1>

            <p className="body text-muted">
              Beberapa proyek yang telah kami kerjakan mencerminkan
              pendekatan desain yang terukur, profesional, dan adaptif
              terhadap kebutuhan klien.
            </p>
          </div>

        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="section">
        <div className="container-main">

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:border-[rgb(var(--color-border-strong))]">

                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cloudinaryImage(item.cover_image, "card")}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/0 group-hover:bg-[rgb(var(--color-dark))]/10 transition duration-300" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <h3 className="h3 mb-2 leading-snug transition-all duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="caption">
                      {item.location} • {item.year}
                    </p>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <section className="section-tight pt-0">
          <div className="container-main flex justify-center">

            <div className="flex items-center gap-2">

              <Link
                href={`/portfolio?page=${page - 1}`}
                className={`btn btn-outline ${
                  page <= 1 ? "opacity-40 pointer-events-none" : ""
                }`}
              >
                Prev
              </Link>

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const active = p === page;

                return (
                  <Link
                    key={p}
                    href={`/portfolio?page=${p}`}
                    className={`btn ${
                      active
                        ? "bg-primary text-white"
                        : "btn-outline"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}

              <Link
                href={`/portfolio?page=${page + 1}`}
                className={`btn btn-outline ${
                  page >= totalPages
                    ? "opacity-40 pointer-events-none"
                    : ""
                }`}
              >
                Next
              </Link>

            </div>

          </div>
        </section>
      )}

    </main>
  );
}