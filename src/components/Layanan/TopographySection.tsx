"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

export default function TopographySection() {
  const topoServices = [
    {
      name: "Survey Topografi",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
      ],
    },
    {
      name: "Soil Investigasi (Geoteknik)",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
      ],
    },
  ];

  return (
    <section className="relative py-10 md:py-20 bg-white">
      <div className="container-main">

        {/* Headline */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-3">
            Layanan Spesialis
          </p>
          <div className="w-16 h-[3px] bg-[rgb(var(--color-primary))] mb-6 mx-auto rounded" />
          <h2 className="text-[28px] md:text-[36px] font-semibold leading-[1.3] tracking-[0.2px]">
            Presisi Data Lapangan sebagai Fondasi Pembangunan
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.75] text-muted mt-4">
            Keberhasilan pembangunan dimulai dari pemahaman menyeluruh terhadap kondisi lahan. BANGUN.IN menyediakan layanan topografi dan geoteknik untuk mendukung pondasi proyek yang aman dan tepat.
          </p>
        </div>

        {/* Topography Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {topoServices.map((service, idx) => (
            <ServiceCarousel key={idx} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCarousel({ service }: { service: { name: string; images: string[] } }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const child = container.children[index] as HTMLElement;
    container.scrollTo({
      left: child.offsetLeft - 8, // gap compensation
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const nextImage = () => scrollToIndex((activeIndex + 1) % service.images.length);
  const prevImage = () =>
    scrollToIndex((activeIndex - 1 + service.images.length) % service.images.length);

  return (
    <div className="relative">
      <h3 className="text-[rgb(var(--color-primary))] font-semibold text-lg mb-4">{service.name}</h3>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-4"
        >
          {service.images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full md:w-[400px] h-[220px] relative rounded-xl overflow-hidden shadow-lg snap-center"
            >
              <Image
                src={cloudinaryImage(img, "banner")}
                alt={`${service.name} contoh desain ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" />
            </div>
          ))}
        </div>

        {/* Arrows desktop */}
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 text-[rgb(var(--color-primary))] p-2 rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 text-[rgb(var(--color-primary))] p-2 rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      

      {/* Dots */}
      <div className="flex justify-center mt-2 gap-2">
        {service.images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === i
                ? "bg-[rgb(var(--color-primary))] scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}