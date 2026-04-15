import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { getBlogPosts } from "@/lib/googleSheetsBlog"
import { generateTOC } from "@/lib/toc"
import { getRelatedPosts } from "@/lib/relatedPosts"

import { injectInternalLinks } from "@/lib/blog/internalLinking"
import { getPopularArticles } from "@/lib/blog/popularArticles"

import {
  generateBreadcrumbs,
  generateBreadcrumbSchema,
  type BreadcrumbItem
} from "@/lib/blog/breadcrumbs"

import TableOfContents from "@/components/blog/TableOfContents"
import RelatedPosts from "@/components/blog/RelatedPosts"
import BlogFAQ from "@/components/blog/BlogFAQ"

import { cloudinaryImage } from "@/lib/cloudinaryImage"
import { formatBlogContent } from "@/lib/formatBlogContent"

import type { BlogPost } from "@/types/blog"

interface PageProps {
  readonly params: {
    readonly slug: string
  }
}

interface FAQItem {
  q: string
  a: string
}

/* ================= SEO ================= */

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const posts = await getBlogPosts() as BlogPost[]

  const post = posts.find(
    (p) => p.slug === params.slug
  )

  if (!post) return {}

  return {
    title: post.meta_title ?? post.title,
    description:
      post.meta_description ??
      post.excerpt
  }
}

/* ================= PAGE ================= */

export default async function BlogDetailPage(
  { params }: PageProps
) {

  const posts = await getBlogPosts() as BlogPost[]

  const post = posts.find(
    (p) => p.slug === params.slug
  )

  if (!post) notFound()

  /* ===== CONTENT ===== */

  const formatted =
    formatBlogContent(post.content ?? "")

  const contentLinked =
    injectInternalLinks(formatted, post, posts)

  const { toc, content } =
    generateTOC(contentLinked)

  const related =
    getRelatedPosts(posts, post)

  const popular =
    getPopularArticles(posts, 5)

  const featuredImage =
    post.cover_image
      ? cloudinaryImage(post.cover_image, "natural")
      : ""

  const category =
    post.category?.trim()

  const tags =
    post.tags
      ?.split(",")
      .map((t) => t.trim())
      .filter(Boolean) ?? []

  /* ===== CATEGORY LIST (FIX ERROR) ===== */

  const categories: string[] = Array.from(
    new Set(
      posts
        .map((p) => p.category?.trim())
        .filter((c): c is string => Boolean(c))
    )
  )

  /* ===== FAQ ===== */

  let faqItems: FAQItem[] = []

  try {
    if (post.faq) {
      const parsed = JSON.parse(post.faq)
      if (Array.isArray(parsed)) {
        faqItems = parsed.filter(
          (item): item is FAQItem =>
            typeof item.q === "string" &&
            typeof item.a === "string"
        )
      }
    }
  } catch {}

  /* ===== SCHEMA ===== */

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? ""

  const breadcrumbs: BreadcrumbItem[] =
    generateBreadcrumbs(
      baseUrl,
      category ?? "Blog",
      post.title,
      post.slug
    )

  const breadcrumbSchema =
    generateBreadcrumbSchema(breadcrumbs)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": post.schema_type ?? "BlogPosting",
    headline: post.title,
    description:
      post.meta_description ?? post.excerpt,
    image: featuredImage,
    datePublished: post.published_date,
    dateModified:
      post.last_updated ?? post.published_date
  }

  return (
    <main className="container-main section-tight">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* ================= BREADCRUMB ================= */}

      <nav className="caption mb-6">

        {breadcrumbs.map((item, i) => (
          <span key={item.url}>
            <Link
              href={item.url}
              className="hover:text-[rgb(var(--color-primary))]"
            >
              {item.name}
            </Link>

            {i < breadcrumbs.length - 1 && (
              <span className="mx-2 text-[rgb(var(--color-subtle))]">
                /
              </span>
            )}
          </span>
        ))}

      </nav>

      <div className="grid lg:grid-cols-[1fr_280px] gap-10">

        {/* ================= ARTICLE ================= */}

        <article className="max-w-[720px]">

          <header className="space-y-3">

            {category && (
              <Link
                href={`/blog/kategori/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="caption-label text-primary"
              >
                {category}
              </Link>
            )}

            <h1 className="h2">
              {post.title}
            </h1>

            <time className="caption-subtle">
              {post.published_date}
            </time>

          </header>

          {featuredImage && (
            <div className="relative mt-6 h-[260px] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] shadow-[var(--shadow-soft)]">
              <Image
                src={featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* CONTENT */}
          <section
            className="
            mt-8
            space-y-5
            body

            [&_h2]:h3
            [&_h2]:mt-10

            [&_h3]:text-[15px]
            [&_h3]:font-semibold
            [&_h3]:mt-8

            [&_p]:text-[rgb(var(--color-muted))]
            [&_p]:leading-[1.8]

            [&_ul]:pl-5
            [&_li]:mb-1
            "
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />

          {faqItems.length > 0 && (
            <section className="mt-12">
              <BlogFAQ items={faqItems} />
            </section>
          )}

          {/* TAGS */}
          {tags.length > 0 && (
            <section className="mt-10 pt-6 border-t border-[rgb(var(--color-border))]">

              <div className="caption-label mb-3">
                Tags
              </div>

              <div className="flex flex-wrap gap-2">

                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="
                    text-[12px]
                    px-3 py-1
                    rounded-[var(--radius-sm)]
                    border
                    border-[rgb(var(--color-border))]
                    bg-[rgb(var(--color-soft))]
                    text-[rgb(var(--color-muted))]
                    hover:bg-[rgb(var(--color-primary)/0.08)]
                    hover:text-[rgb(var(--color-primary))]
                    transition
                    "
                  >
                    {tag}
                  </Link>
                ))}

              </div>
            </section>
          )}

          <section className="mt-14">
            <RelatedPosts posts={related} />
          </section>

        </article>

        {/* ================= SIDEBAR ================= */}

        <aside className="hidden lg:block">

          <div className="sticky top-24 space-y-6">

            <TableOfContents items={toc} />

            {/* POPULAR */}
            <div className="card-premium">

              <div className="caption-label mb-3">
                Popular Articles
              </div>

              <div className="space-y-2">
                {popular.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="
                    block
                    text-[13px]
                    text-[rgb(var(--color-muted))]
                    hover:text-[rgb(var(--color-primary))]
                    transition
                    "
                  >
                    {p.title}
                  </Link>
                ))}
              </div>

            </div>

            {/* CATEGORIES (FIXED) */}
            {categories.length > 0 && (
              <div className="card-premium">

                <div className="caption-label mb-3">
                  Kategori
                </div>

                <div className="flex flex-wrap gap-2">

                  {categories.map((cat) => {

                    const slug =
                      cat.toLowerCase().replace(/\s+/g, "-")

                    return (
                      <Link
                        key={cat}
                        href={`/blog/kategori/${slug}`}
                        className="
                        text-[12px]
                        px-3 py-1
                        rounded-[var(--radius-sm)]
                        border
                        border-[rgb(var(--color-border))]
                        bg-[rgb(var(--color-surface))]
                        text-[rgb(var(--color-muted))]
                        transition

                        hover:bg-[rgb(var(--color-primary)/0.08)]
                        hover:text-[rgb(var(--color-primary))]
                        "
                      >
                        {cat}
                      </Link>
                    )
                  })}

                </div>

              </div>
            )}

          </div>

        </aside>

      </div>

    </main>
  )
}