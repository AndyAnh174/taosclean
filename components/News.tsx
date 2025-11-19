const newsItems = [
  {
    title: "Quy trình 4 bước tháo dỡ nhà cũ an toàn đúng kỹ thuật",
    description: "Thi công tháo dỡ nhà là quá trình thực hiện các bước kỹ thuật và đảm bảo an toàn để phá hủy, loại bỏ hoặc di chuyển một phần hoặc toàn bộ cấu trúc của một công trình đang tồn tại.",
    date: "21/10/2025",
    category: "Tin tức",
    imageSize: "400x250",
  },
  {
    title: "5 lý do bạn nên thuê dịch vụ chăm cây định kỳ",
    description: "Cây xanh không chỉ tạo mỹ quan mà còn mang lại lợi ích về sức khỏe, môi trường và giá trị thương hiệu cho mỗi không gian. Tuy nhiên, để cây luôn xanh tốt, đẹp mắt quanh năm, việc chăm sóc định kỳ là vô cùng quan trọng.",
    date: "21/10/2025",
    category: "Tin tức",
    imageSize: "400x250",
  },
  {
    title: "Tạp vụ văn phòng là gì? Công việc bao gồm những gì?",
    description: "Dịch vụ tạp vụ văn phòng không còn gì xa lạ đã trở nên phổ biến hiện nay, đặc biệt là tại các thành phố lớn, có nền kinh tế – xã hội phát triển. Vậy thực chất tạp vụ văn phòng là gì?",
    date: "21/10/2025",
    category: "Tin tức",
    imageSize: "400x250",
  },
];

export default function News() {
  return (
    <section id="tin-tuc" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* News Image - Placeholder */}
              <div className="relative w-full h-48 bg-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-xs font-semibold">{item.title}</p>
                  <p className="text-xs">{item.imageSize}</p>
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded text-xs font-semibold">
                  {item.category}
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center gap-1"
                  >
                    xem chi tiết →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

