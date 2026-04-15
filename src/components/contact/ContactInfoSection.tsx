"use client";

export default function ContactInfoSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">

      <div className="container-main">

        {/* Header */}
        <div className="max-w-[560px] mb-10">

          {/* Eyebrow */}
          <p className="caption text-primary uppercase tracking-[1.6px] mb-3">
            Informasi Perusahaan
          </p>

          {/* Accent */}
          <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-4" />

          {/* Title */}
          <h2 className="h2 text-[rgb(var(--color-text))]">
            Detail Kontak & Identitas Perusahaan
          </h2>

        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-12">

          {/* Left Column */}
          <div className="space-y-6">

            {/* Item */}
            <div>
              <p className="caption text-subtle mb-1">
                Nama Perusahaan
              </p>
              <p className="body text-[rgb(var(--color-text))] font-medium">
                PT. Bangun Cipta Solusi
              </p>
            </div>

            {/* Item */}
            <div>
              <p className="caption text-subtle mb-1">
                Status
              </p>
              <p className="body text-[rgb(var(--color-text))] font-medium">
                Kantor Pusat
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Address */}
            <div>
              <p className="caption text-subtle mb-1">
                Alamat Kantor
              </p>

              <p className="body text-[rgb(var(--color-text))] leading-[1.7]">
                Rukan Graha Kencana, Blok A<br />
                Jl. Perjuangan No. 88 RT.15/RW.10<br />
                Kel. Kebon Jeruk, Kec. Kebon Jeruk<br />
                Jakarta Barat 11530
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="caption text-subtle mb-1">
                Telepon / WhatsApp
              </p>
              <p className="body text-[rgb(var(--color-text))] font-medium">
                (+62) 877 6550 5935
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="caption text-subtle mb-1">
                Email
              </p>
              <p className="body text-[rgb(var(--color-text))] font-medium">
                bangunciptasolusi01@gmail.com
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}