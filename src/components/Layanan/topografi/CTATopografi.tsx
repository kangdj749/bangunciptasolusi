"use client";

import Link from "next/link";

export default function CTATopografi() {
  return (
    <section className="section bg-primary text-center">
      <div className="container-main max-w-[640px]">

        <h2 className="h2 text-[rgb(var(--color-white))] mb-4">
          Mulai Proyek Anda dengan Data yang Bisa Dipercaya
        </h2>

        <p className="text-[rgb(var(--color-white))]/80 mb-6">
          Diskusikan kebutuhan Anda bersama tim kami.
        </p>

        <div className="flex justify-center gap-3">
          <Link href="/kontak" className="btn btn-primary">
            Konsultasi Sekarang
          </Link>
         
        </div>

      </div>
    </section>
  );
}