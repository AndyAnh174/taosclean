"use client";

import { Mail, Facebook, Phone } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="fixed right-2 sm:right-4 bottom-2 transform z-40 flex flex-col gap-2 sm:gap-3">
      <a
        href="mailto:thaithanhtien3007@gmail.com"
        className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110"
        aria-label="Email"
        title="Email: thaithanhtien3007@gmail.com"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <a
        href="https://www.facebook.com/taosclean?rdid=bK3BIFsBJkJTDp2O&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BY1Rk819T%2F#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110"
        aria-label="Facebook"
        title="Facebook"
      >
        <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <a
        href="https://zalo.me/0846123414"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110"
        aria-label="Zalo"
        title="Zalo: 0846 123 414"
      >
        <span className="text-base sm:text-lg font-bold">Z</span>
      </a>
      <a
        href="tel:0846123414"
        className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110"
        aria-label="Phone"
        title="Hotline: 0846 123 414"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
}

