import { getBlogPosts } from "@/lib/googleSheetsBlog"
import { getPostsByTag } from "@/lib/blogHelpers"
import BlogCard from "@/components/blog/BlogCard"
import type { BlogPost } from "@/types/blog"

interface TagPageProps {
  params: {
    tag: string
  }
}

/* --------------------------------
   Static Tag Pages
-------------------------------- */

export async function generateStaticParams() {

  const posts: BlogPost[] = await getBlogPosts()

  const tags = [
    ...new Set(
      posts.flatMap((post) =>
        post.tags
          .split(",")
          .map((t) => t.trim())
      )
    )
  ]

  return tags.map((tag) => ({
    tag: tag
      .toLowerCase()
      .replace(/\s+/g, "-")
  }))

}

/* --------------------------------
   Tag Page
-------------------------------- */

export default async function TagPage({ params }: TagPageProps) {

  const posts: BlogPost[] = await getBlogPosts()

  const tagSlug = params.tag

  const tagPosts: BlogPost[] =
    getPostsByTag(posts, tagSlug)

  const tagName =
    tagSlug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())

  return (

    <main
      className="
      mx-auto
      max-w-[var(--container-max)]
      px-4
      py-8
      "
    >

      <header
        className="
        mb-6
        space-y-1
        "
      >

        <h1
          className="
          text-[16px]
          font-semibold
          tracking-tight
          text-[rgb(var(--color-text))]
          "
        >
          Artikel Tag: {tagName}
        </h1>

        <p
          className="
          text-[12px]
          text-[rgb(var(--color-muted))]
          "
        >
          Kumpulan artikel dengan topik {tagName}
        </p>

      </header>

      {tagPosts.length > 0 ? (

        <section
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          "
        >

          {tagPosts.map((post) => (

            <BlogCard
              key={post.slug}
              post={post}
            />

          ))}

        </section>

      ) : (

        <div
          className="
          rounded-[var(--radius-lg)]
          border
          border-[rgb(var(--color-border))]
          bg-[rgb(var(--color-surface))]
          p-6
          text-center
          shadow-[var(--shadow-soft)]
          "
        >

          <p
            className="
            text-[12px]
            text-[rgb(var(--color-muted))]
            "
          >
            Belum ada artikel untuk tag ini.
          </p>

        </div>

      )}

    </main>

  )

}