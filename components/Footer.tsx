import { Phone, Mail, MapPin, Tag } from "lucide-react";

export default function Footer() {
  const services1 = [
    "Vệ sinh công nghiệp",
    "Vệ sinh văn phòng",
    "Dịch vụ chăm sóc cảnh quan môi trường",
    "Kinh doanh buôn bán tổng hợp",
    "Kinh doanh vận tải đường bộ",
  ];

  const services2 = [
    "Tháo dỡ công trình xây dựng nhà phố",
    "Tư vấn mua bán, chuyển nhượng bất động sản.",
    "Dịch vụ tư vấn tài chính cá nhân, doanh nghiệp.",
  ];

  return (
    <footer id="lien-he" className="bg-yellow-500 text-gray-900">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">
              CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ KIM NGỌC
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-800" />
                <span>
                  <span className="font-bold">Địa chỉ:</span> 477/75A Nơ Trang
                  Long, Phường Bình Lợi Trung, TP Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 flex-shrink-0 text-gray-800" />
                <span className="font-bold">Mã số thuế:</span>
                <span>0319169219</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-800" />
                <a
                  href="tel:0846123414"
                  className="hover:text-gray-700 transition-colors font-bold"
                >
                  Hotline: 0846 123 414
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-800" />
                <a
                  href="mailto:thaithanhtien3007@gmail.com"
                  className="hover:text-gray-700 transition-colors font-bold"
                >
                  Mail: thaithanhtien3007@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Column 1 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services1.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-700 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services2.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-700 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Bản đồ</h3>

            <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=477/75A+Nơ+Trang+Long,+Bình+Lợi+Trung,+Hồ+Chí+Minh&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-yellow-600 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
            Copyright © 2025 CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ KIM NGỌC.
            Thiết kế bởi LifeTecch-media
          </p>
        </div>
      </div>
    </footer>
  );
}
