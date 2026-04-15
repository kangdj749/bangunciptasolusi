interface BlogPost {
  slug: string
  title: string
  focus_keyword?: string
  secondary_keywords?: string
}

/* ==================================
   GENERATE INTERNAL LINKS
================================== */

export function generateInternalLinks(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
) {

  const keywords = [

    currentPost.focus_keyword ?? "",

    ...(currentPost.secondary_keywords
      ?.split(",")
      .map(k => k.trim())
      .filter(Boolean) ?? [])

  ]

  if (!keywords.length) return []

  const links = allPosts.filter((post) => {

    if (post.slug === currentPost.slug) return false

    const text = (
      post.title +
      " " +
      (post.focus_keyword ?? "")
    ).toLowerCase()

    return keywords.some(keyword =>

      text.includes(keyword.toLowerCase())

    )

  })

  return links.slice(0, limit)

}

/* ==================================
   INJECT INTERNAL LINKS INTO CONTENT
================================== */

export function injectInternalLinks(
  content: string,
  links: BlogPost[]
) {

  if (!content || !links?.length) return content

  let updated = content

  links.forEach((link) => {

    if (!link.focus_keyword) return

    const keyword =
      link.focus_keyword.trim()

    const regex = new RegExp(
      `\\b(${keyword})\\b`,
      "i"
    )

    if (regex.test(updated)) {

      updated = updated.replace(

        regex,

        `<a 
          href="/blog/${link.slug}" 
          class="
          text-[rgb(var(--color-primary))]
          font-medium
          hover:underline
          "
        >
          $1
        </a>`

      )

    }

  })

  return updated

}