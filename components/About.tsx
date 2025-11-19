import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: "/assets/uy-tin.svg",
      title: "Uy tín",
      description: "Uy tín là nền tảng",
    },
    {
      icon: "/assets/chat-luong.svg",
      title: "Chất lượng",
      description: "Chất lượng là ưu tiên hàng đầu",
    },
    {
      icon: "/assets/hop-tac.svg",
      title: "Hợp tác",
      description: "Hợp tác để cùng phát triển",
    },
    {
      icon: "/assets/trach-nhiem.svg",
      title: "Trách nhiệm",
      description: "Trách nhiệm với khách hàng và cộng đồng",
    },
  ];

  return (
    <section id="gioi-thieu" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-t-lg mb-4">
              <span className="text-sm font-semibold">Về Chúng Tôi</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ KIM NGỌC
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Công ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc</strong> được thành lập với sứ mệnh mang đến những giải pháp đầu tư – thương mại – dịch vụ chuyên nghiệp, uy tín và bền vững, góp phần nâng tầm giá trị cho khách hàng, đối tác và cộng đồng.
              </p>
              <p>
                Trải qua quá trình hình thành và phát triển, Kim Ngọc đã không ngừng khẳng định vị thế của mình trên thị trường bằng chất lượng dịch vụ vượt trội, phong cách làm việc chuyên nghiệp và tinh thần sáng tạo không ngừng. Chúng tôi hoạt động đa lĩnh vực, bao gồm:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Đầu tư và phát triển dự án thương mại – dịch vụ</li>
                <li>Phân phối, thương mại hàng hóa và vật tư chất lượng cao</li>
                <li>Cung cấp các dịch vụ kinh doanh buôn bán, vệ sinh công nghiệp văn phòng, cảnh quang môi trường, tháo dỡ công trình xây dựng, tư vấn tài chính, hỗ trợ doanh nghiệp và khách hàng cá nhân</li>
              </ul>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 flex-shrink-0"
                    />
                    <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Logo */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/assets/logo-background.jpg"
                alt="Logo Kim Ngọc"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

