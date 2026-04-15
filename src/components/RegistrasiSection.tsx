"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  birthPlace: string;
  birthDate: string;
  school: string;
  grade: string;
  city: string;
  phone: string;
  competitions: string[];
  visitActivities: string[];
  tourGallery: boolean | null;
};

const competitionsList: string[] = [
  "Lomba Tahfidz",
  "Lomba Kaligrafi",
  "Content Creator",
  "Public Speaking B. Arab",
  "Public Speaking B. Inggris",
  "Public Speaking B. Sunda",
];

const visitList: string[] = [
  "Talkshow Elly Risman",
  "Talkshow Wirda Mansyur",
  "Edu Fair",
  "Dakwah Wayang",
];

export default function RegistrationPage() {
  const router = useRouter();

  const { register, handleSubmit, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      competitions: [],
      visitActivities: [],
      tourGallery: null,
    },
  });

  const [submitting, setSubmitting] = useState(false);

  const selectedCompetitions = watch("competitions");
  const selectedVisits = watch("visitActivities");
  const tourValue = watch("tourGallery");

  const toggleMulti = useCallback(
    (
      value: string,
      field: "competitions" | "visitActivities",
      current: string[]
    ) => {
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      setValue(field, updated, { shouldValidate: true });
    },
    [setValue]
  );

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json: { success: boolean; error?: string } = await res.json();

      if (!res.ok || !json.success)
        throw new Error(json.error || "Gagal daftar");

      router.push(`/success?name=${encodeURIComponent(data.fullName)}`);
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Terjadi kesalahan"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const formFields = [
    { label: "Nama Lengkap", field: "fullName", type: "text" },
    { label: "Tempat Lahir", field: "birthPlace", type: "text" },
    { label: "Tanggal Lahir", field: "birthDate", type: "date" },
    { label: "Asal Sekolah", field: "school", type: "text" },
    { label: "Kelas", field: "grade", type: "text" },
    { label: "Kota / Kabupaten", field: "city", type: "text" },
    {
      label: "Nomor Telepon",
      field: "phone",
      type: "tel",
      placeholder: "08xxxxxxxxxx",
    },
  ];

  return (
    <section className="py-12 px-4 bg-[#f6f9ff]">
      <div className="w-full max-w-md mx-auto bg-white border border-blue-100 rounded-2xl shadow-sm p-6 space-y-6">
        <h1 className="text-xl font-bold text-center text-[#032b83]">
          Form Pendaftaran
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {formFields.map((item) => (
            <Input key={item.field} label={item.label}>
              <input
                {...register(item.field as keyof FormValues)}
                type={item.type}
                placeholder={item.placeholder}
                className="input-premium"
              />
            </Input>
          ))}

          {/* Lomba */}
          <MultiSelectSection
            label="Pilih Lomba (boleh lebih dari 1)"
            list={competitionsList}
            selected={selectedCompetitions}
            onToggle={(item) =>
              toggleMulti(item, "competitions", selectedCompetitions)
            }
          />

          {/* Tour */}
          <div>
            <Label>Ikut Tour Galeri Rasulullah?</Label>
            <div className="flex gap-2">
              <SelectableCard
                active={tourValue === true}
                onClick={() => setValue("tourGallery", true)}
              >
                Ya
              </SelectableCard>
              <SelectableCard
                active={tourValue === false}
                onClick={() => setValue("tourGallery", false)}
              >
                Tidak
              </SelectableCard>
            </div>
          </div>

          {/* Kunjungan */}
          <MultiSelectSection
            label="Pilihan Kunjungan (boleh lebih dari 1)"
            list={visitList}
            selected={selectedVisits}
            onToggle={(item) =>
              toggleMulti(item, "visitActivities", selectedVisits)
            }
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#032b83] text-white py-3 rounded-xl text-sm font-semibold transition disabled:opacity-50 hover:opacity-90"
          >
            {submitting ? "Memproses..." : "Daftar Sekarang"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .input-premium {
          width: 100%;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
        }

        .input-premium:focus {
          border-color: #032b83;
          box-shadow: 0 0 0 2px rgba(3, 43, 131, 0.1);
        }
      `}</style>
    </section>
  );
}

/* COMPONENTS */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium mb-2 text-[#032b83]">
      {children}
    </p>
  );
}

function Input({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function SelectableCard({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
        border
        ${
          active
            ? "bg-[#032b83] text-white border-[#032b83] shadow-sm"
            : "bg-white text-[#032b83] border-blue-200 hover:border-[#032b83]/50 hover:bg-blue-50"
        }
      `}
    >
      {children}
    </button>
  );
}

function MultiSelectSection({
  label,
  list,
  selected,
  onToggle,
}: {
  label: string;
  list: string[];
  selected: string[];
  onToggle: (item: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {list.map((item) => (
          <SelectableCard
            key={item}
            active={selected.includes(item)}
            onClick={() => onToggle(item)}
          >
            {item}
          </SelectableCard>
        ))}
      </div>
    </div>
  );
}