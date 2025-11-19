export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ Kim Ngọc",
    "alternateName": "Kim Ngọc",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-903-116-000",
      "contactType": "customer service",
      "email": "thanhtp.kn@gmail.com",
      "areaServed": "VN",
      "availableLanguage": ["Vietnamese"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "61/2 Đường số 2, Khu phố 30, Phường Hiệp Bình",
      "addressLocality": "TP Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "sameAs": [
      "https://facebook.com/yourpage"
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

