"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappNumber = "6287765505935";
  const [waLink, setWaLink] = useState<string>("");

  useEffect(() => {
    const defaultMessage = `
Assalamu'alaikum,

Saya ingin berkonsultasi terkait layanan PT Bangun Cipta Solusi (BANGUN.IN).

Mohon informasi lebih lanjut.
    `.trim();

    setWaLink(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        defaultMessage
      )}`
    );
  }, []);

  if (!waLink) return null;

  return (
    <>
      {/* ================= MOBILE STICKY ================= */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div
          className="
            bg-[rgb(var(--color-surface))]
            border-t
            border-[rgb(var(--color-secondary))]/20
            px-4
            py-2.5
            flex
            items-center
            justify-between
          "
        >
          <span className="text-[11px] font-medium text-[rgb(var(--color-text))]">
            Konsultasi Profesional
          </span>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              btn btn-primary
            "
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>
      </motion.div>

      {/* ================= DESKTOP FLOAT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed bottom-6 right-6 z-50"
      >
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            text-[11px]
            font-medium
            rounded-[var(--radius-sm)]
            bg-[rgb(var(--color-primary))]
            text-[rgb(var(--color-white))]
            border
            border-[rgb(var(--color-primary))]/30
            transition-all
            duration-300
            hover:-translate-y-[1px]
          "
        >
          <MessageCircle className="w-4 h-4" />
          <span>Hubungi Konsultan</span>
        </a>
      </motion.div>
    </>
  );
}