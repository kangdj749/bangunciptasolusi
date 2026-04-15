import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="
      group
      h-full
      flex
      flex-col
      rounded-[var(--radius-lg)]
      border
      border-[rgb(var(--color-border))]
      bg-[rgb(var(--color-surface))]
      overflow-hidden
      shadow-[var(--shadow-soft)]
      transition-all
      duration-300
      hover:-translate-y-[3px]
      hover:shadow-[var(--shadow-elevated)]
      hover:border-[rgb(var(--color-border-strong))]
      "
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        
        {/* Cover */}
        <div
          className="
          relative
          w-full
          h-[160px]
          overflow-hidden
          "
        >
          <Image
            src={post.cover_image}
            alt={`Artikel ${post.title} - Bangun.in`}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.06]
            "
            priority={false}
          />

          {/* subtle overlay for premium feel */}
          <div
            className="
            absolute inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
            "
          />
        </div>

        {/* Content */}
        <div
          className="
          flex flex-col
          flex-1
          p-4
          gap-2.5
          "
        >
          {/* Date */}
          <time
            className="
            caption-subtle
            "
          >
            {post.published_date}
          </time>

          {/* Title */}
          <h3
            className="
            text-[14.5px]
            font-semibold
            leading-snug
            tracking-tight
            text-[rgb(var(--color-text))]
            transition-colors
            line-clamp-2
            group-hover:text-[rgb(var(--color-primary))]
            "
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className="
            text-[13px]
            leading-relaxed
            text-[rgb(var(--color-muted))]
            line-clamp-3
            "
          >
            {post.excerpt}
          </p>

          {/* Spacer biar rapi */}
          <div className="flex-1" />

          {/* CTA subtle */}
          <span
            className="
            text-[12.5px]
            font-medium
            text-[rgb(var(--color-primary))]
            opacity-0
            translate-y-[4px]
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
            "
          >
            Baca selengkapnya →
          </span>
        </div>
      </Link>
    </article>
  )
}