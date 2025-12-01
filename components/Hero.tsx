"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HeroImage = {
  src: string;
  mobileSrc?: string;
  alt: string;
};

export default function Hero() {
  const images: HeroImage[] = [
    {
      src: "/assets/banner/banner0.jpg",
      mobileSrc: "/mobile/banner1.png",
      alt: "Banner Kim Ngọc - Dịch vụ vệ sinh công nghiệp chuyên nghiệp",
    },
    {
      src: "/assets/banner/banner1.jpg",
      mobileSrc: "/mobile/banner2.png",
      alt: "Banner 1",
    },
    {
      src: "/assets/banner/banner2.jpg",
      alt: "Banner 1",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          src={
            isMobile && images[current].mobileSrc
              ? images[current].mobileSrc
              : images[current].src
          }
          alt={images[current].alt}
          fill
          className="w-full h-full object-cover object-top sm:object-center"
          priority={current === 0 && !isMobile}
          sizes={isMobile ? "(max-width: 640px) 100vw" : "100vw"}
          quality={isMobile ? 60 : 80}
          loading={current === 0 ? "eager" : "lazy"}
        />
      </div>

      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto h-full px-4 flex flex-col justify-center">
          <div className="max-w-3xl text-white space-y-4">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-600/90 text-xs sm:text-sm font-medium shadow-lg">
              Tiên phong trong dịch vụ vệ sinh công nghiệp
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
              TAOS CLEAN - Dịch vụ vệ sinh công nghiệp
              <br className="hidden sm:block" />
              chuyên nghiệp tại TP.HCM
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl drop-shadow">
              Cung cấp giải pháp vệ sinh văn phòng, nhà xưởng, tòa nhà và chăm sóc
              cảnh quan môi trường với đội ngũ chuyên nghiệp, quy trình chuẩn và
              thiết bị hiện đại.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#lien-he"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-sm sm:text-base font-semibold text-gray-900 shadow-lg transition-colors"
              >
                Tìm hiểu thêm
              </a>
              <span className="text-xs sm:text-sm text-gray-100/90">
                Hotline hỗ trợ 24/7:{" "}
                <a href="tel:0903116000" className="font-semibold underline-offset-2 hover:underline">
                  0903 116 000
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Nút chuyển ảnh */}
      <button
        onClick={prevImage}
        className="hidden sm:flex absolute left-10 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full border border-white/40 backdrop-blur-md hover:bg-white/30 transition z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextImage}
        className="hidden sm:flex absolute right-10 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full border border-white/40 backdrop-blur-md hover:bg-white/30 transition z-10"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
