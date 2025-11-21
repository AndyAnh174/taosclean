"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Search, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span>
                Hotline:{" "}
                <a
                  href="tel:0903116000"
                  className="font-semibold text-yellow-600"
                >
                  0903116000
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span>
                Email:{" "}
                <a
                  href="mailto:thanhtp.kn@gmail.com"
                  className="font-semibold text-yellow-600"
                >
                  thanhtp.kn@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="hidden lg:inline">
                61/2 Đường số 2, Khu phố 30, Phường Hiệp Bình, TP Hồ Chí Minh
              </span>
              <span className="lg:hidden">TP Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/assets/logo.png"
                alt="Logo Kim Ngọc"
                width={40}
                height={40}
                className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                KIM NGỌC
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#trang-chu"
                className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
              >
                TRANG CHỦ
              </a>
              <a
                href="#du-an"
                className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
              >
                DỰ ÁN
              </a>
              <a
                href="#gioi-thieu"
                className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
              >
                GIỚI THIỆU
              </a>
              <div className="relative group">
                <a
                  href="#dich-vu"
                  className="text-gray-800 hover:text-yellow-600 font-medium transition-colors flex items-center gap-1"
                >
                  DỊCH VỤ
                  <span className="text-xs">▼</span>
                </a>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <a
                      href="#ve-sinh-cong-nghiep"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Vệ sinh công nghiệp
                    </a>
                    <a
                      href="#ve-sinh-van-phong"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Vệ sinh văn phòng
                    </a>
                    <a
                      href="#cham-soc-canh-quan"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Chăm sóc cảnh quan môi trường
                    </a>
                    <a
                      href="#kinh-doanh"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Kinh doanh buôn bán tổng hợp
                    </a>
                    <a
                      href="#van-tai"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Kinh doanh vận tải đường bộ
                    </a>
                    <a
                      href="#thao-do"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Tháo dỡ công trình xây dựng
                    </a>
                    <a
                      href="#bat-dong-san"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Tư vấn mua bán BĐS
                    </a>
                    <a
                      href="#tu-van-tai-chinh"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      Tư vấn tài chính
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#tuyen-dung"
                className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
              >
                TUYỂN DỤNG
              </a>
              <a
                href="#tin-tuc"
                className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
              >
                LIÊN HỆ
              </a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nhập từ khóa cần tìm"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-48"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <>
          {/* Backdrop */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 lg:hidden
                        transform transition-transform duration-500 ease-in-out
                        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                      `}
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="text-lg font-bold text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Menu Items */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                <a
                  href="#trang-chu"
                  className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  TRANG CHỦ
                </a>
                <a
                  href="#du-an"
                  className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DỰ ÁN
                </a>
                <a
                  href="#gioi-thieu"
                  className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GIỚI THIỆU
                </a>
                <a
                  href="#dich-vu"
                  className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DỊCH VỤ
                </a>
                <a
                  href="#tuyen-dung"
                  className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  TUYỂN DỤNG
                </a>
                <a
                  href="#tin-tuc"
                  className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  TIN TỨC
                </a>
                <a
                  href="#lien-he"
                  className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LIÊN HỆ
                </a>
              </nav>
            </div>
          </div>
        </>
      </nav>
    </header>
  );
}

