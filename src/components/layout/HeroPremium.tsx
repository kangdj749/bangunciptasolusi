"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "./HeroSlide";

export default function HeroUltraPremium() {
  const [index, setIndex] = useState(0);
  const [y, setY] = useState(0); // parallax

  const raf = useRef<number | null>(null);

  // autoplay
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      8000
    );
    return () => clearInterval(t);
  }, []);

  // subtle parallax (requestAnimationFrame for smoothness)
  useEffect(() => {
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setY(window.scrollY * 0.15); // small factor → elegant
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[92vh] min-h-[640px] overflow-hidden bg-[rgb(var(--color-dark))]">

      {/* ===== BACKGROUND (crossfade + scale) ===== */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${y}px)` }} // parallax
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
      </AnimatePresence>

      {/* ===== OVERLAY (cinematic) ===== */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-main">

          <div className="max-w-[820px]">

            {/* Label */}
            <motion.p
              key={`label-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="caption-light caption-label mb-6"
            >
              Konsultan Arsitektur & Rekayasa Teknik
            </motion.p>

            {/* Headline (editorial scale) */}
            <motion.h1
              key={slide.title}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
                text-[36px]
                md:text-[56px]
                lg:text-[68px]
                font-semibold
                leading-[1.06]
                tracking-[-0.02em]
                text-[rgb(var(--color-white))]
                mb-6
              "
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={slide.subtitle}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05 }}
              className="
                text-[16px]
                md:text-[18px]
                leading-[1.8]
                text-[rgb(var(--color-white))]/85
                max-w-[640px]
                mb-10
              "
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA (elegant, not loud) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/kontak" className="btn btn-primary-hero">
                Konsultasi Proyek
              </Link>

              <Link href="/portfolio" className="btn btn-outline-hero">
                Lihat Portofolio
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ===== SLIDE PROGRESS (premium minimal indicator) ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-[3px]
              rounded-full
              transition-all duration-500
              ${i === index
                ? "w-12 bg-[rgb(var(--color-white))]"
                : "w-[10px] bg-[rgb(var(--color-white))]/40 hover:bg-[rgb(var(--color-white))]/70"}
            `}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ===== SCROLL HINT ===== */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] tracking-[3px] text-[rgb(var(--color-white))]/60">
        SCROLL
      </div>

    </section>
  );
}