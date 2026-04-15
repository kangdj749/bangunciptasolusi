"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { FiSearch } from "react-icons/fi"

import type { BlogPost } from "@/types/blog"

interface Props {
  posts: BlogPost[]
}

export default function NavbarSearch({ posts }: Props) {

  const router = useRouter()
  const pathname = usePathname()

  const wrapperRef = useRef<HTMLDivElement>(null)

  const [query, setQuery] = useState("")
  const [focus, setFocus] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  /* reset saat route change */

  useEffect(() => {

    setQuery("")
    setFocus(false)
    setActiveIndex(-1)

  }, [pathname])


  /* click outside */

  useEffect(() => {

    function handleClick(e: MouseEvent) {

      if (!wrapperRef.current?.contains(e.target as Node)) {
        setFocus(false)
      }

    }

    document.addEventListener("mousedown", handleClick)

    return () => document.removeEventListener("mousedown", handleClick)

  }, [])


  /* filter result */

  const results = useMemo(() => {

    if (!query) return []

    const q = query.toLowerCase()

    return posts
      .filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.toLowerCase().includes(q)
      )
      .slice(0, 6)

  }, [query, posts])


  /* reset index saat query berubah */

  useEffect(() => {

    setActiveIndex(-1)

  }, [query])


  /* keyboard navigation */

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {

    if (!results.length) return

    if (e.key === "ArrowDown") {

      e.preventDefault()

      setActiveIndex(prev =>
        prev < results.length - 1 ? prev + 1 : 0
      )

    }

    if (e.key === "ArrowUp") {

      e.preventDefault()

      setActiveIndex(prev =>
        prev > 0 ? prev - 1 : results.length - 1
      )

    }

    if (e.key === "Enter") {

      e.preventDefault()

      if (activeIndex >= 0) {

        router.push(`/blog/${results[activeIndex].slug}`)

      } else {

        router.push(`/blog?q=${query}`)

      }

      setFocus(false)

    }

    if (e.key === "Escape") {

      setFocus(false)

    }

  }

  return (

    <div ref={wrapperRef} className="relative w-full">

      {/* INPUT */}

      <div
        className="
        flex items-center
        border border-[rgb(var(--color-border))]
        rounded px-3 h-[36px]
      "
      >

        <FiSearch size={16} className="mr-2 opacity-60" />

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setFocus(true)
          }}
          onFocus={() => setFocus(true)}
          onKeyDown={handleKeyDown}
          placeholder="Cari artikel..."
          className="w-full text-[12px] bg-transparent outline-none"
        />

      </div>

      {/* DROPDOWN */}

      {focus && query && (

        <div
          className="
          absolute top-full mt-2 w-full
          bg-[rgb(var(--color-surface))]
          border border-[rgb(var(--color-border))]
          shadow rounded z-50
        "
        >

          {results.length > 0 ? (

            <ul>

              {results.map((post, i) => (

                <li key={post.id}>

                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={() => setFocus(false)}
                    className={`
                      block px-4 py-2 text-[12px]
                      transition-colors
                      ${i === activeIndex
                        ? "bg-[rgb(var(--color-secondary))]/20 text-[rgb(var(--color-primary))]"
                        : "hover:bg-[rgb(var(--color-secondary))]/10"
                      }
                    `}
                  >
                    {post.title}
                  </Link>

                </li>

              ))}

            </ul>

          ) : (

            <div className="px-4 py-3 text-[11px] opacity-60">
              Tidak ditemukan
            </div>

          )}

        </div>

      )}

    </div>

  )

}