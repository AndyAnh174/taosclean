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

export const metadata: Metadata = {
  title: "Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc | Dịch Vụ Vệ Sinh Chuyên Nghiệp",
  description: "Công ty Kim Ngọc chuyên cung cấp dịch vụ vệ sinh công nghiệp, vệ sinh văn phòng, chăm sóc cảnh quan môi trường, vận tải đường bộ, tháo dỡ công trình và tư vấn tài chính tại TP. Hồ Chí Minh. Uy tín - Chất lượng - Chuyên nghiệp.",
  keywords: "vệ sinh công nghiệp, vệ sinh văn phòng, chăm sóc cảnh quan, vận tải đường bộ, tháo dỡ công trình, tư vấn tài chính, Kim Ngọc, Hồ Chí Minh",
  authors: [{ name: "Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc" }],
  openGraph: {
    title: "Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc",
    description: "Dịch vụ vệ sinh công nghiệp, văn phòng chuyên nghiệp tại TP. Hồ Chí Minh",
    type: "website",
    locale: "vi_VN",
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
  },
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
