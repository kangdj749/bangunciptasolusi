import type { Portfolio } from "@/types/portfolio"

const SHEET_ID = process.env.GOOGLE_SHEET_ID_LP as string
const TAB_NAME = "portfolio"

const URL = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`

// ===============================
// NORMALIZER
// ===============================
function normalize(row: Record<string, unknown>): Portfolio {
  return {
    id: String(row.id ?? ""),
    title: String(row.title ?? ""),
    slug: String(row.slug ?? ""),
    excerpt: String(row.excerpt ?? ""),
    description: String(row.description ?? ""),
    category: String(row.category ?? ""),
    tags: String(row.tags ?? ""),
    location: String(row.location ?? ""),
    year: String(row.year ?? ""),
    client: String(row.client ?? ""),
    cover_image: String(row.cover_image ?? ""),

    // ✅ FIX ARRAY PARSING
    gallery_images: String(row.gallery_images ?? "")
      .split("|")
      .map((i) => i.trim())
      .filter(Boolean),

    related_slugs: String(row.related_slugs ?? "")
      .split("|")
      .map((i) => i.trim())
      .filter(Boolean),

    challenge: String(row.challenge ?? ""),
    solution: String(row.solution ?? ""),
    result: String(row.result ?? ""),

    status: String(row.status ?? "draft"),
    meta_title: String(row.meta_title ?? ""),
    meta_description: String(row.meta_description ?? ""),
    focus_keyword: String(row.focus_keyword ?? ""),

    published_date: String(row.published_date ?? ""),
    last_updated: String(row.last_updated ?? ""),
  }
}

// ===============================
// FETCH ALL
// ===============================
export async function getPortfolios(): Promise<Portfolio[]> {
  try {
    const res = await fetch(URL, {
      next: { revalidate: 300, tags: ["portfolio"] },
    })

    if (!res.ok) return []

    const data = await res.json()

    return data
      .map((row: Record<string, unknown>) => normalize(row))
      .filter((p: Portfolio) => p.status === "published")

  } catch (err) {
    console.error("getPortfolios error:", err)
    return []
  }
}

// ===============================
// GET BY SLUG (🔥 penting)
// ===============================
export async function getPortfolioBySlug(slug: string) {
  const data = await getPortfolios()
  return data.find((p) => p.slug === slug)
}