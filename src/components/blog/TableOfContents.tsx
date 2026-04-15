interface TOCItem {
  id: string
  text: string
  level?: 2 | 3
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({
  items
}: TableOfContentsProps) {

  if (!items || items.length === 0) return null

  return (

    <aside
      className="
      rounded-[var(--radius-lg)]
      border
      border-[rgb(var(--color-border))]
      bg-[rgb(var(--color-surface))]
      shadow-[var(--shadow-soft)]
      p-5
      "
    >

      {/* HEADER */}
      <div className="mb-4">

        <div className="caption-label text-[rgb(var(--color-subtle))]">
          Navigasi Artikel
        </div>

        <p className="text-[14px] font-semibold text-[rgb(var(--color-text))] mt-1">
          Daftar Isi
        </p>

      </div>

      {/* LIST */}
      <nav aria-label="Table of contents">

        <ul className="space-y-2">

          {items.map((item) => {

            const level = item.level ?? 2
            const isSub = level === 3

            return (

              <li
                key={item.id}
                className={`
                group
                relative
                ${isSub ? "ml-4 pl-4" : ""}
                `}
              >

                {/* INDICATOR LINE */}
                {isSub && (
                  <span
                    className="
                    absolute
                    left-0
                    top-1
                    bottom-1
                    w-[1px]
                    bg-[rgb(var(--color-border))]
                  "
                  />
                )}

                <a
                  href={`#${item.id}`}
                  className={`
                  block
                  text-[13.5px]
                  leading-relaxed
                  transition-all

                  ${isSub
                    ? "text-[rgb(var(--color-subtle))]"
                    : "text-[rgb(var(--color-muted))] font-medium"
                  }

                  hover:text-[rgb(var(--color-primary))]
                  `}
                >

                  {item.text}

                </a>

              </li>

            )

          })}

        </ul>

      </nav>

    </aside>

  )
}