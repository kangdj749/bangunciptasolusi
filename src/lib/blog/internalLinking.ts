import { BlogPost } from "@/types/blog"

interface KeywordTarget {
  keyword: string
  slug: string
  isPillar?: boolean
}

const MAX_LINKS = 5

function extractKeywords(post: BlogPost): string[] {
  const keywords: string[] = []

  if (post.focus_keyword) keywords.push(post.focus_keyword)

  if (post.secondary_keywords) {
    const secondary = post.secondary_keywords
      .split(",")
      .map(k => k.trim())
      .filter(Boolean)

    keywords.push(...secondary)
  }

  if (post.title) {
    keywords.push(post.title)
  }

  return keywords
}

function normalize(text: string) {
  return text.toLowerCase()
}

function createTargets(
  currentPost: BlogPost,
  allPosts: BlogPost[]
): KeywordTarget[] {

  const targets: KeywordTarget[] = []

  allPosts.forEach(post => {

    if (post.slug === currentPost.slug) return

    const keywords = extractKeywords(post)

    keywords.forEach(keyword => {

      if (!keyword) return

      targets.push({
        keyword,
        slug: post.slug,
        isPillar: post.tags?.includes("pilar") ?? false
      })

    })

  })

  return targets
}

function contextualMatch(content: string, keyword: string) {

  const words = keyword.split(" ")

  return words.some(word =>
    new RegExp(`\\b${word}\\b`, "i").test(content)
  )

}

export function injectInternalLinks(
  content: string,
  currentPost: BlogPost,
  allPosts: BlogPost[]
) {

  let updated = content

  const targets = createTargets(currentPost, allPosts)

  const usedKeywords = new Set<string>()
  let linkCount = 0

  targets.sort((a, b) => {

    if (a.isPillar && !b.isPillar) return -1
    if (!a.isPillar && b.isPillar) return 1
    return 0

  })

  for (const target of targets) {

    if (linkCount >= MAX_LINKS) break

    const keyword = target.keyword

    if (usedKeywords.has(keyword)) continue

    if (!contextualMatch(updated, keyword)) continue

    const regex = new RegExp(`\\b${keyword}\\b`, "i")

    if (!regex.test(updated)) continue

    updated = updated.replace(
      regex,
      `<a href="/blog/${target.slug}" class="text-primary underline">${keyword}</a>`
    )

    usedKeywords.add(keyword)
    linkCount++

  }

  return updated

}