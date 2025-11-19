import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full hero-banner">
        <Image
          src="/assets/banner.jpg"
          alt="Banner Kim Ngọc - Dịch vụ vệ sinh công nghiệp chuyên nghiệp"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
          style={{ 
            objectFit: 'cover', 
            width: '100%', 
            height: '100%'
          }}
        />
      </div>
    </section>
  );
}

