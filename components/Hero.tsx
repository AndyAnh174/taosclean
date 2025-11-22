"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    {
      src: "/assets/banner/banner0.jpg",
      alt: "Banner Kim Ngọc - Dịch vụ vệ sinh công nghiệp chuyên nghiệp",
    },
    {
      src: "/assets/banner/banner1.jpg",
      alt: "Banner 1",
    },
    {
      src: "/assets/banner/banner2.jpg",
      alt: "Banner 1",
    },
  ];
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full hero-banner">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="w-full h-full"
          priority
          sizes="100vw"
        />
      </div>
      {/* Nút chuyển ảnh */}
      <button
        onClick={prevImage}
        className="absolute left-10 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-400 transition z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-10 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-400 transition z-10"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
