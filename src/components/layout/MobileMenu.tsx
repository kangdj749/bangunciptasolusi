"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { FiChevronRight, FiX } from "react-icons/fi"

import { menuItems } from "@/data/menuItems"
import NavbarSearch from "@/components/search/NavbarSearch"

import type { BlogPost } from "@/types/blog"

interface Props {
  isOpen: boolean
  onClose: () => void
  posts: BlogPost[]
}

export default function MobileMenu({ isOpen, onClose, posts }: Props) {

  const pathname = usePathname()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  /* auto close saat route change */

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
        fixed inset-0 z-40
        bg-[rgb(var(--color-dark))]/25
        transition-opacity duration-200
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      />

      {/* Drawer */}
      <aside
        className={`
        fixed top-0 right-0 z-50 h-full w-[280px]
        bg-[rgb(var(--color-surface))]
        border-l border-[rgb(var(--color-secondary))]/20
        flex flex-col
        transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >

        {/* Header */}
        <div className="flex items-center justify-between h-[56px] px-4 border-b border-[rgb(var(--color-secondary))]/20">

          <span className="text-[11px] font-semibold tracking-[1px] uppercase text-[rgb(var(--color-text))]">
            Menu
          </span>

          <button
            onClick={onClose}
            className="p-1.5 hover:text-[rgb(var(--color-primary))]"
          >
            <FiX size={16} />
          </button>

        </div>

        {/* SEARCH */}
        <div className="px-4 py-3 border-b border-[rgb(var(--color-secondary))]/10">
          <NavbarSearch posts={posts} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">

          <div className="px-4 py-1 text-[9px] tracking-[1.2px] uppercase text-[rgb(var(--color-muted))]">
            Navigasi
          </div>

          {menuItems.map((item, index) => {

            const isActive = pathname === item.href

            return (
              <div key={index} className="border-b border-[rgb(var(--color-secondary))]/10">

                <div className="flex items-center justify-between px-4">

                  <Link
                    href={item.href}
                    className={`
                    flex-1 py-2.5 text-[12px] font-medium
                    ${isActive
                      ? "text-[rgb(var(--color-primary))]"
                      : "text-[rgb(var(--color-text))]"
                    }
                  `}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="py-2"
                    >
                      <FiChevronRight
                        size={14}
                        className={`
                        transition-transform
                        ${openIndex === index ? "rotate-90" : ""}
                      `}
                      />
                    </button>
                  )}

                </div>

                {item.children && (

                  <div
                    className={`
                    overflow-hidden transition-all duration-200
                    ${openIndex === index
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                      }
                  `}
                  >

                    <div className="pl-6 pr-4 pb-2 space-y-1">

                      {item.children.map((child, childIndex) => {

                        const isChildActive = pathname === child.href

                        return (
                          <Link
                            key={childIndex}
                            href={child.href}
                            className={`
                            block py-1.5 text-[11.5px]
                            ${isChildActive
                                ? "text-[rgb(var(--color-primary))]"
                                : "text-[rgb(var(--color-text))]/80"
                              }
                          `}
                          >
                            {child.label}
                          </Link>
                        )

                      })}

                    </div>

                  </div>

                )}

              </div>
            )

          })}

        </nav>

        {/* Footer */}
        <div className="border-t border-[rgb(var(--color-secondary))]/20 px-4 py-3 text-[10.5px] text-[rgb(var(--color-muted))]">

          <div className="font-medium text-[rgb(var(--color-text))] mb-1">
            PT Bangun Cipta Solusi
          </div>

          Jakarta, Indonesia
          <br />
          bangunciptasolusi01@gmail.com

        </div>

      </aside>
    </>
  )
}