import { getBlogPosts } from "@/lib/googleSheetsBlog"
import { getPostsByCategory } from "@/lib/blogHelpers"
import BlogCard from "@/components/blog/BlogCard"
import type { BlogPost } from "@/types/blog"

interface CategoryPageProps {
  readonly params: {
    readonly category: string
  }
}

/* --------------------------------
   Static Params (SSG Categories)
-------------------------------- */

export async function generateStaticParams() {
  const posts: BlogPost[] = await getBlogPosts()

  const categories: string[] = Array.from(
    new Set(
      posts
        .map((post) => post.category?.trim())
        .filter((c): c is string => Boolean(c))
    )
  )

  return categories.map((category) => ({
    category: category
      .toLowerCase()
      .replace(/\s+/g, "-")
  }))
}

/* --------------------------------
   Category Page
-------------------------------- */

export default async function CategoryPage({
  params
}: CategoryPageProps) {

  const posts: BlogPost[] = await getBlogPosts()

  const categorySlug = params.category

  const categoryPosts: BlogPost[] =
    getPostsByCategory(posts, categorySlug)

  const categoryTitle =
    categorySlug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <main className="container-main section-tight">

      {/* ================= HEADER ================= */}

      <header className="mb-10 max-w-[680px] space-y-3">

        <div className="caption-label text-primary">
          Kategori Artikel
        </div>

        <h1 className="h2">
          {categoryTitle}
        </h1>

        <p className="body text-[rgb(var(--color-muted))]">
          Kumpulan artikel seputar{" "}
          <span className="text-[rgb(var(--color-text))] font-medium">
            {categoryTitle}
          </span>{" "}
          dalam konteks penataan ruang, integrasi arsitektur,
          rekayasa teknik, topografi, geoteknik, serta manajemen konstruksi
          yang terstruktur dan profesional.
        </p>

      </header>

      {/* ================= CONTENT ================= */}

      {categoryPosts.length === 0 ? (

        <div
          className="
          max-w-[520px]
          border
          border-[rgb(var(--color-border))]
          rounded-[var(--radius-lg)]
          bg-[rgb(var(--color-surface))]
          p-6
          shadow-[var(--shadow-soft)]
          "
        >

          <p className="body text-[rgb(var(--color-muted))]">
            Belum ada artikel pada kategori ini. Silakan cek kategori lain
            atau kembali ke halaman blog utama.
          </p>

        </div>

      ) : (

        <section
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
          "
        >

          {categoryPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
            />
          ))}

        </section>

      )}

    </main>
  )
}