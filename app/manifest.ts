import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TAOS CLEAN - Dịch Vụ Vệ Sinh Công Nghiệp',
    short_name: 'TAOS CLEAN',
    description: 'Dịch vụ vệ sinh công nghiệp, văn phòng chuyên nghiệp tại TP. Hồ Chí Minh',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#eab308',
    icons: [
      {
        src: '/assets/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

