export interface Portfolio {
  id: string
  title: string
  slug: string
  excerpt: string
  description: string
  category: string
  tags: string
  location: string
  year: string
  client: string
  cover_image: string

  gallery_images: string[]   // ✅ ARRAY
  related_slugs: string[]    // ✅ ARRAY

  challenge: string
  solution: string
  result: string

  status: string
  meta_title: string
  meta_description: string
  focus_keyword: string

  published_date: string
  last_updated: string
}