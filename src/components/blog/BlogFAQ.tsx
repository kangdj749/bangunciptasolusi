"use client"

import { useState } from "react"

interface FAQItem {
  q: string
  a: string
}

interface Props {
  items: FAQItem[]
}

export default function BlogFAQ({ items }: Props) {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0)

  if (!items || items.length === 0) return null

  return (

    <section
      className="
      mt-14
      pt-8
      border-t
      border-[rgb(var(--color-border))]
      "
    >

      {/* HEADER */}
      <header className="mb-6 max-w-[640px]">

        <div className="caption-label text-[rgb(var(--color-subtle))]">
          FAQ
        </div>

        <h2 className="h3 mt-1">
          Pertanyaan Umum
        </h2>

        <p className="caption mt-2">
          Ringkasan pertanyaan yang sering muncul terkait topik ini
          dalam konteks perencanaan, rekayasa, dan konstruksi.
        </p>

      </header>

      {/* LIST */}
      <div
        className="
        rounded-[var(--radius-lg)]
        border
        border-[rgb(var(--color-border))]
        bg-[rgb(var(--color-surface))]
        shadow-[var(--shadow-soft)]
        divide-y
        divide-[rgb(var(--color-border))]
        "
      >

        {items.map((faq, i) => {

          const open = openIndex === i

          return (

            <div key={i} className="group">

              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(open ? null : i)
                }
                className="
                w-full
                text-left
                px-5
                py-4
                flex
                items-start
                justify-between
                gap-4
                transition

                hover:bg-[rgb(var(--color-elevated))]
                "
              >

                <span
                  className="
                  text-[14px]
                  font-medium
                  leading-snug
                  text-[rgb(var(--color-text))]
                  "
                >
                  {faq.q}
                </span>

                {/* ICON */}
                <span
                  className={`
                  text-[rgb(var(--color-subtle))]
                  text-[14px]
                  transition-transform
                  duration-300
                  ${open ? "rotate-45" : ""}
                  `}
                >
                  +
                </span>

              </button>

              {/* ANSWER */}
              <div
                className={`
                overflow-hidden
                transition-all
                duration-300
                ${open ? "max-h-[500px]" : "max-h-0"}
                `}
              >

                <div
                  className="
                  px-5
                  pb-5
                  pr-8
                  text-[13.5px]
                  leading-[1.8]
                  text-[rgb(var(--color-muted))]
                  "
                >
                  {faq.a}
                </div>

              </div>

            </div>

          )

        })}

      </div>

    </section>

  )
}