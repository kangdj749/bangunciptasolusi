import { MetadataRoute } from "next"
import { cities } from "@/lib/seo/cities"
import { getBlogPosts } from "@/lib/googleSheetsBlog"
import { getPortfolios } from "@/lib/portfolio"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://bangunin.com"
  const now = new Date()

  const services = [
    "arsitektur",
    "penataan-ruang",
    "rekayasa-teknik",
    "topografi-geoteknik",
  ]

  const formatDate = (date?: string) => {
    if (!date) return now
    const d = new Date(date)
    return isNaN(d.getTime()) ? now : d
  }

  /* =============================
     STATIC CORE (HIGH PRIORITY)
  ============================= */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
  ]

  /* =============================
     SERVICE HUB
  ============================= */

  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/layanan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/layanan/${service}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.88,
    })),
  ]

  /* =============================
     MONEY PAGES (CITY SEO)
  ============================= */

  const cityPages: MetadataRoute.Sitemap = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${baseUrl}/layanan/${service}/${city
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }))
  )

  /* =============================
     BLOG (SEO ENGINE)
  ============================= */

  const posts = await getBlogPosts()

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: formatDate(
      post.last_updated ?? post.published_date
    ),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  /* =============================
     PORTFOLIO (TRUST SIGNAL)
  ============================= */

  const portfolios = await getPortfolios()

  const portfolioPages: MetadataRoute.Sitemap = portfolios.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: formatDate(item.last_updated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  /* =============================
     FINAL MERGE
  ============================= */

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...blogPages,
    ...portfolioPages,
  ]
}