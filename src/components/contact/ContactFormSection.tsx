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

      const waURL = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(
        message
      )}`;

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
    <section id="consultation-form" className="section-tight">
      <div className="container-main">

        {/* ================= HEADER ================= */}

        <div className="max-w-[520px] mb-10">

          <p className="text-[10px] tracking-[1.6px] uppercase font-medium text-primary mb-3">
            Konsultasi Proyek
          </p>

          <div className="w-10 h-[2px] bg-primary mb-4" />

          <h2 className="h2 text-[rgb(var(--color-text))] mb-3">
            Ajukan Permohonan Konsultasi
          </h2>

          <p className="body text-muted max-w-[460px]">
            Sampaikan kebutuhan proyek Anda melalui formulir berikut. 
            Tim kami akan menghubungi Anda untuk diskusi awal dan 
            penjadwalan konsultasi.
          </p>

        </div>

        {/* ================= FORM ================= */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4 md:grid-cols-2"
        >

          {formFields.map((item) => (
            <div key={item.field} className="flex flex-col gap-1.5">

              <label className="text-[11px] font-medium text-[rgb(var(--color-text))]">
                {item.label}
              </label>

              <input
                type={item.type}
                {...register(item.field, { required: true })}
                className="
                  h-[36px]
                  px-3
                  rounded-[var(--radius-sm)]
                  border
                  border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-bg))]
                  text-[rgb(var(--color-text))]
                  text-[12.5px]
                  transition-all
                  duration-200

                  focus:outline-none
                  focus:border-[rgb(var(--color-primary))]
                  focus:ring-2
                  focus:ring-[rgb(var(--color-primary))]/15
                "
              />

            </div>
          ))}

          {/* TEXTAREA */}

          <div className="md:col-span-2 flex flex-col gap-1.5">

            <label className="text-[11px] font-medium text-[rgb(var(--color-text))]">
              Deskripsi Singkat Proyek
            </label>

            <textarea
              rows={4}
              {...register("deskripsi_singkat")}
              className="
                px-3 py-2
                rounded-[var(--radius-sm)]
                border
                border-[rgb(var(--color-border))]
                bg-[rgb(var(--color-bg))]
                text-[rgb(var(--color-text))]
                text-[12.5px]
                leading-[1.6]
                transition-all
                duration-200

                focus:outline-none
                focus:border-[rgb(var(--color-primary))]
                focus:ring-2
                focus:ring-[rgb(var(--color-primary))]/15
              "
            />

          </div>

          {/* BUTTON */}

          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="
                btn btn-primary
                
              "
            >
              {submitting ? "Mengirim..." : "Kirim Permohonan"}
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}