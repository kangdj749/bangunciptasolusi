"use client"

import { useState } from "react"
import Link from "next/link"
import { cities } from "@/lib/seo/cities"

export default function CityServiceList({ service }: { service: string }) {
  const [showAll, setShowAll] = useState(false)
  const [search, setSearch] = useState("")

  const filtered = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  )

  const visibleCities = showAll ? filtered : filtered.slice(0, 12)

  return (
    <section className="section-tight">
      <div className="container-main">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">

          <div>
            <h2 className="h3">
              Jangkauan Layanan di Berbagai Kota
            </h2>
            <p className="caption mt-1">
              Tersedia di berbagai wilayah Indonesia
            </p>
          </div>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Cari kota..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full md:w-[240px]
              px-3 py-2
              text-[13px]
              border rounded-[var(--radius-sm)]
              border-[rgb(var(--color-border))]
              focus:outline-none
              focus:border-[rgb(var(--color-primary))]
            "
          />

        </div>

        {/* LIST */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {visibleCities.map((city) => {
            const slug = city.toLowerCase().replace(/\s+/g, "-")

            return (
              <Link
                key={city}
                href={`/layanan/${service}/${slug}`}
                className="
                  text-[12px]
                  px-3 py-2
                  border
                  rounded-[var(--radius-sm)]
                  border-[rgb(var(--color-border))]
                  text-[rgb(var(--color-muted))]
                  hover:text-[rgb(var(--color-primary))]
                  hover:border-[rgb(var(--color-primary))]
                  transition
                "
              >
                {city}
              </Link>
            )
          })}

        </div>

        {/* ACTION */}
        {filtered.length > 12 && (
          <div className="mt-6 flex justify-center">

            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Kota"}
            </button>

          </div>
        )}

      </div>
    </section>
  )
}