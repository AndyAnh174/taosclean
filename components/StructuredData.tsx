export default function StructuredData() {
  const baseUrl = "https://taosclean.vercel.app";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc",
    "alternateName": ["TAOS CLEAN", "Kim Ngọc"],
    "url": baseUrl,
    "logo": `${baseUrl}/assets/logo.png`,
    "image": `${baseUrl}/assets/banner.jpg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-903-116-000",
      "contactType": "customer service",
      "email": "thanhtp.kn@gmail.com",
      "areaServed": {
        "@type": "Country",
        "name": "Vietnam"
      },
      "availableLanguage": ["Vietnamese", "vi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "61/2 Đường số 2, Khu phố 30, Phường Hiệp Bình",
      "addressLocality": "TP Hồ Chí Minh",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "sameAs": [
      "https://facebook.com/taosclean"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TAOS CLEAN - Dịch Vụ Vệ Sinh Công Nghiệp",
    "image": `${baseUrl}/assets/banner.jpg`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+84-903-116-000",
    "email": "thanhtp.kn@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "61/2 Đường số 2, Khu phố 30, Phường Hiệp Bình",
      "addressLocality": "TP Hồ Chí Minh",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.8231",
      "longitude": "106.6297"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": "TP Hồ Chí Minh"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Vệ sinh công nghiệp",
    "provider": {
      "@type": "Organization",
      "name": "Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc"
    },
    "areaServed": {
      "@type": "City",
      "name": "TP Hồ Chí Minh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dịch vụ của Kim Ngọc",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vệ sinh công nghiệp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vệ sinh văn phòng"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dịch vụ chăm sóc cảnh quan môi trường"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kinh doanh vận tải đường bộ"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tháo dỡ công trình xây dựng"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tư vấn tài chính"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

