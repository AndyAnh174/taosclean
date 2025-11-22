import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://taosclean.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TAOS CLEAN - Dịch Vụ Vệ Sinh Công Nghiệp Chuyên Nghiệp Tại TP.HCM",
    template: "%s | TAOS CLEAN"
  },
  description: "TAOS CLEAN chuyên cung cấp dịch vụ vệ sinh công nghiệp, vệ sinh văn phòng, chăm sóc cảnh quan môi trường, vận tải đường bộ, tháo dỡ công trình và tư vấn tài chính tại TP. Hồ Chí Minh. Uy tín - Chất lượng - Chuyên nghiệp. Hotline: 0903116000",
  keywords: [
    "vệ sinh công nghiệp",
    "vệ sinh văn phòng",
    "dịch vụ vệ sinh",
    "chăm sóc cảnh quan",
    "vận tải đường bộ",
    "tháo dỡ công trình",
    "tư vấn tài chính",
    "TAOS CLEAN",
    "vệ sinh công nghiệp TP.HCM",
    "vệ sinh văn phòng Hồ Chí Minh",
    "dịch vụ vệ sinh chuyên nghiệp",
    "công ty vệ sinh công nghiệp",
    "vệ sinh công nghiệp giá rẻ",
    "dọn dẹp văn phòng",
    "vệ sinh nhà xưởng"
  ],
  authors: [{ name: "TAOS CLEAN - Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc" }],
  creator: "TAOS CLEAN",
  publisher: "TAOS CLEAN",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "TAOS CLEAN",
    title: "TAOS CLEAN - Dịch Vụ Vệ Sinh Công Nghiệp Chuyên Nghiệp",
    description: "Dịch vụ vệ sinh công nghiệp, văn phòng chuyên nghiệp tại TP. Hồ Chí Minh. Uy tín - Chất lượng - Chuyên nghiệp.",
    images: [
      {
        url: `${siteUrl}/assets/banner.jpg`,
        width: 1920,
        height: 700,
        alt: "TAOS CLEAN - Dịch vụ vệ sinh công nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAOS CLEAN - Dịch Vụ Vệ Sinh Công Nghiệp",
    description: "Dịch vụ vệ sinh công nghiệp, văn phòng chuyên nghiệp tại TP. Hồ Chí Minh",
    images: [`${siteUrl}/assets/banner.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Dịch vụ vệ sinh công nghiệp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
