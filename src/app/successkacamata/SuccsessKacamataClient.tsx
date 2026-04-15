"use client";

import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";

export default function PremiumSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") ?? "Peserta";

  const registrationNumber = useMemo(() => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `RF-${new Date().getFullYear()}-${random}`;
  }, []);

  const ADMIN_NUMBER = "6281322817712";

  const message = `Assalamu'alaikum Admin 🙏

Saya ${name}
Nomor Registrasi: ${registrationNumber}

Sudah melakukan Pengajuan Kacamata Gratis.
Mohon info selanjutnya 🤍`;

  const waLink = `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  const [seconds, setSeconds] = useState<number>(25);
  const [autoRedirect, setAutoRedirect] = useState<boolean>(true);

  useEffect(() => {
    if (!autoRedirect) return;

    if (seconds <= 0) {
      window.location.href = waLink;
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, autoRedirect, waLink]);

  return (
    <div className="section-spacing relative overflow-hidden">
      <Confetti recycle={false} numberOfPieces={220} />

      <div className="container-premium flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="card-premium shadow-premium max-w-xl w-full text-center space-y-6"
        >
          <h1 className="heading-1">
            🎉 Pengajuan Berhasil
          </h1>

          <p className="text-muted">
            Terima kasih <span className="font-semibold">{name}</span>,
            Pengajuan kamu sudah kami terima.
          </p>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-muted">Nomor Registrasi</p>
            <p className="text-lg font-semibold mt-1 text-primary">
              {registrationNumber}
            </p>
          </div>

          <div className="border rounded-xl p-5 space-y-4">
            <h3 className="heading-3">💛 Infak Sukarela</h3>

            <p className="text-sm text-muted">
              Jika ingin memberikan infak sukarela untuk mendukung kegiatan ini,
              silakan scan QRIS berikut. Tidak wajib 🤍
            </p>

            <div className="relative w-full h-48">
              <Image
                src="/qris-ramadhan.jpg"
                alt="QRIS"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs text-muted">
              Terima kasih atas kebaikan dan dukungannya.
            </p>
          </div>

          <motion.a
            whileTap={{ scale: 0.97 }}
            href={waLink}
            className="btn-primary w-full block text-center"
          >
            Konfirmasi via WhatsApp
          </motion.a>

          <div className="text-sm text-muted space-y-2">
            {autoRedirect ? (
              <>
                <p>
                  Mengarahkan otomatis dalam{" "}
                  <span className="font-semibold text-primary">
                    {seconds}
                  </span>{" "}
                  detik...
                </p>

                <button
                  onClick={() => setAutoRedirect(false)}
                  className="underline text-primary"
                >
                  ⏸ Hentikan Redirect
                </button>
              </>
            ) : (
              <button
                onClick={() => setAutoRedirect(true)}
                className="underline text-primary"
              >
                ▶ Aktifkan Auto Redirect
              </button>
            )}
          </div>

          <button
            onClick={() => router.push("/")}
            className="text-xs underline text-muted mt-4"
          >
            Kembali ke Halaman Utama
          </button>
        </motion.div>
      </div>
    </div>
  );
}