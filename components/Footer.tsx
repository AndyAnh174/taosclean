import { Phone, Mail, MapPin } from "lucide-react";

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
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-800" />
                <span>
                  Địa chỉ: 61/2 Đường số 2, Khu phố 30, Phường Hiệp Bình, TP Hồ Chí Minh, Việt Nam
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Mã số thuế:</span>
                <span>0319169219</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-800" />
                <a href="tel:0903116000" className="hover:text-gray-700 transition-colors font-semibold">
                  Hotline: 0903116000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-800" />
                <a href="mailto:thanhtp.kn@gmail.com" className="hover:text-gray-700 transition-colors font-semibold">
                  Mail: thanhtp.kn@gmail.com
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
            <div className="relative w-full h-48 sm:h-64 bg-gray-300 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-sm font-semibold">Google Maps</p>
                  <p className="text-xs">400 x 300px</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-gray-800 hover:text-gray-700 font-semibold transition-colors"
            >
              Xem bản đồ lớn hơn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-yellow-600 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
            Copyright © 2025 CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ KIM NGỌC. Thiết kế bởi LifeTecch-media
          </p>
        </div>
      </div>
    </footer>
  );
}

