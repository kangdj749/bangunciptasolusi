"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  instansi: string;
  jenis_proyek: string;
  lokasi_proyek: string;
  deskripsi_singkat: string;
  phone: string;
};

export default function ContactFormSection() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [submitting, setSubmitting] = useState(false);

  const ADMIN_WA = "6287765505935";

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Gagal mengirim data");
      }

      const message = `
Halo Admin,

Ada permohonan konsultasi baru.

Nama : ${data.fullName}
Instansi : ${data.instansi}
Jenis Proyek : ${data.jenis_proyek}
Lokasi Proyek : ${data.lokasi_proyek}

Deskripsi :
${data.deskripsi_singkat}

Kontak Client :
${data.phone}
      `;

      const waURL = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`;

      reset();
      window.location.href = waURL;
    } catch (error) {
      alert(error instanceof Error ? error.message : "Terjadi kesalahan");
    } finally {
      setSubmitting(false);
    }
  };

  const formFields: Array<{
    label: string;
    field: keyof FormValues;
    type: string;
  }> = [
    { label: "Nama Lengkap", field: "fullName", type: "text" },
    { label: "Instansi / Perusahaan", field: "instansi", type: "text" },
    { label: "Jenis Proyek", field: "jenis_proyek", type: "text" },
    { label: "Lokasi Proyek", field: "lokasi_proyek", type: "text" },
    { label: "Nomor Kontak", field: "phone", type: "tel" },
  ];

  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="max-w-[560px] mb-14">

          <p className="caption-label text-[rgb(var(--color-gold))] mb-3">
            Konsultasi Proyek
          </p>

          <div className="w-12 h-[2px] bg-[rgb(var(--color-gold))] mb-5" />

          <h2 className="h2 mb-4">
            Ajukan Permohonan
            <span className="block text-[rgb(var(--color-gold-dark))]">
              Konsultasi Profesional
            </span>
          </h2>

          <p className="body text-[rgb(var(--color-muted))] max-w-[480px]">
            Sampaikan kebutuhan proyek Anda secara ringkas. Tim kami akan
            menghubungi Anda untuk diskusi awal dan penyusunan pendekatan teknis.
          </p>

        </div>

        {/* ================= FORM WRAPPER ================= */}
        <div
          className="
            border border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            bg-[rgb(var(--color-surface))]
            shadow-[var(--shadow-soft)]
            p-6 md:p-8
          "
        >

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-5"
          >

            {formFields.map((item) => (
              <div
                key={item.field}
                className="col-span-12 md:col-span-6 flex flex-col gap-2"
              >

                <label className="text-[11px] font-medium text-[rgb(var(--color-subtle))]">
                  {item.label}
                </label>

                <input
                  type={item.type}
                  {...register(item.field, { required: true })}
                  className="
                    h-[44px]
                    px-4
                    rounded-[var(--radius-md)]
                    border border-[rgb(var(--color-border))]
                    bg-[rgb(var(--color-bg))]
                    text-[rgb(var(--color-text))]
                    text-[13px]

                    transition-all duration-200

                    focus:outline-none
                    focus:border-[rgb(var(--color-gold))]
                    focus:ring-2
                    focus:ring-[rgb(var(--color-gold))]/15
                  "
                />

              </div>
            ))}

            {/* TEXTAREA */}
            <div className="col-span-12 flex flex-col gap-2">

              <label className="text-[11px] font-medium text-[rgb(var(--color-subtle))]">
                Deskripsi Singkat Proyek
              </label>

              <textarea
                rows={5}
                {...register("deskripsi_singkat")}
                className="
                  px-4 py-3
                  rounded-[var(--radius-md)]
                  border border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-bg))]
                  text-[rgb(var(--color-text))]
                  text-[13px]
                  leading-[1.7]

                  transition-all duration-200

                  focus:outline-none
                  focus:border-[rgb(var(--color-gold))]
                  focus:ring-2
                  focus:ring-[rgb(var(--color-gold))]/15
                "
              />

            </div>

            {/* CTA */}
            <div className="col-span-12 pt-4 flex items-center justify-between flex-wrap gap-4">

              {/* Note kecil biar terasa “enterprise” */}
              <p className="text-[11px] text-[rgb(var(--color-subtle))]">
                * Tim kami akan merespon dalam 1×24 jam kerja
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="
                  btn
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]
                  px-6 py-3

                  shadow-[var(--shadow-soft)]

                  hover:bg-[rgb(var(--color-primary))]/90
                  hover:shadow-[var(--shadow-medium)]
                  transition
                "
              >
                {submitting ? "Mengirim..." : "Kirim Permohonan"}
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}