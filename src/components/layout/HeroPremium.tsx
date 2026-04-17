"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "./HeroSlide";

export default function HeroUltraPremium() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      6500
    );
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[index];

  const words = slide.title.split(" ");
  const mid = Math.ceil(words.length / 2);

  const line1 = words.slice(0, mid).join(" ");
  const line2 = words.slice(mid).join(" ");

  return (
    <section
      className="
        relative
        h-[100vh]
        min-h-[720px]

        /* 🔥 ini kunci biar nempel ke navbar */
        -mt-[72px]
        pt-[72px]

        overflow-hidden
        bg-[rgb(var(--color-dark))]
      "
    >

      {/* ================= BACKGROUND ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ================= OVERLAY ================= */}

      {/* 🔥 FOKUS KE AREA TEXT (KIRI) */}
      <div
        className="
          absolute inset-0
          pointer-events-none

          bg-gradient-to-r
          from-[rgb(var(--color-dark))]/80
          via-[rgb(var(--color-dark))]/35
          to-transparent
        "
      />

      {/* 🔥 DEPTH BAWAH (biar blend ke section berikutnya) */}
      <div
        className="
          absolute inset-0
          pointer-events-none

          bg-gradient-to-t
          from-[rgb(var(--color-dark))]/50
          via-transparent
          to-transparent
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-main">

          <div className="grid grid-cols-12 gap-8">

            {/* TEXT */}
            <div className="col-span-12 md:col-span-7 max-w-[900px]">

              {/* LABEL */}
              <motion.p
                key={`label-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  text-[11px]
                  tracking-[0.45em]
                  uppercase
                  font-semibold
                  text-[rgb(var(--color-gold))]
                  mb-6
                "
              >
                {slide.label}
              </motion.p>

              {/* HEADLINE */}
              <motion.h1
                key={slide.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  text-4xl sm:text-5xl md:text-7xl lg:text-8xl
                  leading-[1.05]
                  tracking-[-0.02em]
                  mb-8
                "
                style={{
                  textShadow: "0 6px 30px rgba(0,0,0,0.45)",
                }}
              >
                <span className="block text-[rgb(var(--color-white))] font-serif font-bold">
                  {line1}
                </span>

                <span
                  className="
                    block
                    text-[rgb(var(--color-gold))]
                    italic
                    font-semibold
                  "
                >
                  {line2}.
                </span>
              </motion.h1>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <Link
                  href="/kontak"
                  className="btn btn-primary-hero"
                >
                  {slide.ctaPrimary}
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    text-[rgb(var(--color-white))]/80
                    text-[13px]
                    uppercase
                    tracking-[0.15em]

                    border-b border-[rgb(var(--color-white))]/30

                    hover:text-[rgb(var(--color-gold))]
                    hover:border-[rgb(var(--color-gold))]
                    transition
                  "
                >
                  {slide.ctaSecondary}
                </Link>
              </motion.div>

            </div>

            {/* EMPTY */}
            <div className="hidden md:block md:col-span-5" />

          </div>

        </div>
      </div>
    </section>
  );
}