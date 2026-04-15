// =============================
// TYPES
// =============================

export type CitySEOConfig = {
  city: string
  service: string
  slug: string
  description: string
}

// =============================
// METADATA GENERATOR
// =============================

export function generateCityMetadata(config: CitySEOConfig) {
  const { city, service, slug, description } = config

  const url = `https://bangunin.com/layanan/${slug}/${city.toLowerCase()}`

  return {
    title: `${service} ${city} Profesional`,
    description: `${service} di ${city}. ${description}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service} ${city} | Bangun.in`,
      description: `${service} profesional di ${city}.`,
      url,
      type: "website",
    },
  }
}

// =============================
// SCHEMA GENERATOR
// =============================

export function generateCitySchemas(config: CitySEOConfig) {
  const { city, service, slug, description } = config

  const url = `https://bangunin.com/layanan/${slug}/${city.toLowerCase()}`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service} ${city}`,
    areaServed: {
      "@type": "City",
      name: city,
    },
    provider: {
      "@type": "Organization",
      name: "Bangun.in",
      url: "https://bangunin.com",
    },
    description,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://bangunin.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Layanan",
        item: "https://bangunin.com/layanan",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service,
        item: `https://bangunin.com/layanan/${slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: city,
        item: url,
      },
    ],
  }

  return { serviceSchema, breadcrumbSchema }
}