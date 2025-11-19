const services = [
  {
    id: "ve-sinh-cong-nghiep",
    title: "Vệ sinh công nghiệp",
    description: "Chúng tôi cung cấp dịch vụ vệ sinh công nghiệp trọn gói, giúp doanh nghiệp giữ môi trường làm việc sạch sẽ, chuyên nghiệp và an toàn.",
    imageSize: "400x300",
  },
  {
    id: "ve-sinh-van-phong",
    title: "Vệ sinh văn phòng",
    description: "Chúng tôi cung cấp dịch vụ vệ sinh văn phòng chuyên nghiệp, giúp không gian làm việc luôn sạch sẽ, gọn gàng và tạo môi trường làm việc tích cực.",
    imageSize: "400x300",
  },
  {
    id: "cham-soc-canh-quan",
    title: "Dịch vụ chăm sóc cảnh quang môi trường",
    description: "Chúng tôi cung cấp dịch vụ chăm sóc cảnh quan và môi trường trọn gói: cắt tỉa cây xanh, chăm sóc hoa viên, bảo dưỡng cảnh quan.",
    imageSize: "400x300",
  },
  {
    id: "kinh-doanh",
    title: "Kinh doanh buôn bán tổng hợp",
    description: "Chúng tôi hoạt động trong lĩnh vực kinh doanh và buôn bán tổng hợp, cung cấp đa dạng sản phẩm và dịch vụ chất lượng cao.",
    imageSize: "400x300",
  },
  {
    id: "van-tai",
    title: "Kinh doanh vận tải đường bộ",
    description: "Chúng tôi cung cấp dịch vụ kinh doanh vận tải đường bộ uy tín, chuyên nhận vận chuyển hàng hóa an toàn, nhanh chóng và đúng hẹn.",
    imageSize: "400x300",
  },
  {
    id: "thao-do",
    title: "Tháo dở công trình xây dựng nhà phố",
    description: "Chúng tôi chuyên cung cấp dịch vụ tháo dỡ công trình, nhà phố, nhà xưởng uy tín, an toàn và đúng kỹ thuật.",
    imageSize: "400x300",
  },
  {
    id: "bat-dong-san",
    title: "Tư vấn mua bán, chuyển nhượng bất động sản",
    description: "Chúng tôi cung cấp dịch vụ tư vấn mua bán và chuyển nhượng bất động sản chuyên nghiệp, hỗ trợ khách hàng tìm kiếm và đầu tư BĐS hiệu quả.",
    imageSize: "400x300",
  },
  {
    id: "tu-van-tai-chinh",
    title: "Dịch vụ tư vấn tài chính cá nhân, doanh nghiệp",
    description: "Chuyên tư vấn tài chính cá nhân & doanh nghiệp – hỗ trợ lập kế hoạch, quản lý chi tiêu và đầu tư hiệu quả.",
    imageSize: "400x300",
  },
];

export default function Services() {
  return (
    <section id="dich-vu" className="py-8 sm:py-12 md:py-16 bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-gray-400"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-300 to-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md mb-4 shadow-lg">
            <span className="text-xs sm:text-sm font-bold drop-shadow-md">Our Service</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4">
            LĨNH VỰC HOẠT ĐỘNG CỦA CHÚNG TÔI
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-64 sm:h-72 md:h-80 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Service Image - Placeholder */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-sm font-semibold">{service.title}</p>
                  <p className="text-xs">{service.imageSize}</p>
                </div>
              </div>

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
                  {service.title}
                </h3>
                <p className="text-white/90 text-xs mb-3 line-clamp-2 min-h-[2.5rem]">
                  {service.description}
                </p>
                
                {/* View Details - Hidden by default, shown on hover */}
                <a
                  href={`#${service.id}`}
                  className="text-yellow-400 font-semibold text-xs inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Xem chi tiết →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

