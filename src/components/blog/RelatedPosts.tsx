import BlogCard from "./BlogCard"
import type { BlogPost } from "@/types/blog"

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {

  if (!posts || posts.length === 0) return null

  return (

    <section
      className="
      mt-16
      pt-10
      border-t
      border-[rgb(var(--color-border))]
      "
      aria-labelledby="related-posts-title"
    >

      {/* ======================
         HEADER (SEO + UX)
      ====================== */}

      <header className="mb-6 max-w-[560px]">

        <h2
          id="related-posts-title"
          className="
          text-[17px]
          font-semibold
          tracking-tight
          text-[rgb(var(--color-text))]
          "
        >
          Artikel Terkait
        </h2>

        <p
          className="
          mt-1
          text-[13px]
          leading-relaxed
          text-[rgb(var(--color-muted))]
          "
        >
          Referensi lanjutan seputar arsitektur, rekayasa teknik,
          dan manajemen konstruksi yang relevan dengan topik ini.
        </p>

      </header>

      {/* ======================
         GRID (COMPACT & CLEAN)
      ====================== */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-4
        "
      >

        {posts.map((post) => (

          <BlogCard
            key={post.slug}
            post={post}
          />

        ))}

      </div>

    </section>

  )

}