"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-dark))] text-[rgb(var(--color-white))]">

      <div className="container-main section-tight">

        {/* ================= GRID ARSITEKTUR ================= */}
        <div className="grid grid-cols-12 gap-8">

          {/* BRAND (lebih dominan) */}
          <div className="col-span-12 md:col-span-5">

            <h3 className="text-[16px] font-semibold tracking-[0.5px]">
              BANGUN.IN
            </h3>

            <p className="text-[13px] leading-[1.7] text-[rgb(var(--color-white))]/75 max-w-[320px]">
              Konsultan arsitektur, rekayasa teknik, dan manajemen konstruksi
              terintegrasi untuk proyek profesional berstandar nasional.
            </p>

          </div>

          {/* LAYANAN */}
          <div className="col-span-12 sm:col-span-6 md:col-span-2">

            <h4 className="caption-label text-[rgb(var(--color-white))]/50">
              Layanan
            </h4>

            <ul className="space-y-2 text-[13px]">
              {[
                { label: "Desain Interior", href: "/layanan/desain-interior" },
                { label: "Desain Arsitektur", href: "/layanan/desain-arsitektur" },
                { label: "Rekayasa Konstruksi", href: "/layanan/rekayasa-konstruksi" },
                { label: "Survey Topografi", href: "/layanan/survey-topografi" },
                { label: "Soil Investigasi", href: "/layanan/soil-investigasi" },
                { label: "Manajemen Konstrukksi", href: "/layanan/manajemen-konstruksi" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[rgb(var(--color-white))]/75 hover:text-[rgb(var(--color-primary))] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* KONTAK */}
          <div className="col-span-6 md:col-span-3">

            <h4 className="caption-label text-[rgb(var(--color-white))]/50">
              Kontak
            </h4>

            <div className="text-[13px] leading-[1.7] text-[rgb(var(--color-white))]/75">
              <p>Jakarta Barat, Indonesia</p>
              <p>+62 877 6550 5935</p>
              <p>bangunciptasolusi01@gmail.com</p>
            </div>

          </div>

          {/* CTA */}
          <div className="col-span-12 md:col-span-2">

            <div className="space-y-3">

              <h4 className="caption-label text-[rgb(var(--color-white))]/50">
                Konsultasi
              </h4>

              <Link
                href="/kontak#consultation-form"
                className="
                  inline-block
                  px-4 py-2
                  text-[12.5px]
                  font-medium
                  rounded-[var(--radius-sm)]
                  border border-[rgb(var(--color-white))]/30
                  text-[rgb(var(--color-white))]
                  hover:bg-[rgb(var(--color-white))]
                  hover:text-[rgb(var(--color-dark))]
                  transition
                "
              >
                Ajukan Konsultasi
              </Link>

            </div>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 h-px bg-[rgb(var(--color-white))]/10" />

        {/* ================= BOTTOM ================= */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-[rgb(var(--color-white))]/60">

          <p>
            © {new Date().getFullYear()} PT Bangun Cipta Solusi
          </p>

          <div className="flex gap-6">

            <Link href="/kebijakan-privasi" className="hover:text-white transition">
              Kebijakan Privasi
            </Link>

            <Link href="/syarat-ketentuan" className="hover:text-white transition">
              Syarat & Ketentuan
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}