"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiMenu } from "react-icons/fi"

import MobileMenu from "@/components/layout/MobileMenu"
import { menuItems } from "@/data/menuItems"
import type { BlogPost } from "@/types/blog"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

interface Props {
  posts: BlogPost[]
}

export default function NavbarClient({ posts }: Props) {
  const logo =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774017311/1_BANGUN.IN_zzdfs7.png"

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleOpen = useCallback(() => setMobileOpen(true), [])
  const handleClose = useCallback(() => setMobileOpen(false), [])

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50
          transition-all duration-300

          ${
            scrolled
              ? "bg-[rgb(var(--color-bg))]/90 backdrop-blur-md shadow-[var(--shadow-soft)] border-b border-[rgb(var(--color-border))]"
              : "bg-transparent"
          }
        `}
      >
        <div className="container-main">

          <div className="grid grid-cols-12 items-center h-[72px] gap-4">

            {/* LOGO */}
            <div className="col-span-6 md:col-span-3 flex items-center">
              <Link href="/">
                <Image
                  src={cloudinaryImage(logo, "logo")}
                  alt="Bangun.in"
                  width={140}
                  height={36}
                  priority
                  className="h-[28px] w-auto object-contain"
                />
              </Link>
            </div>

            {/* MENU */}
            <div className="hidden md:flex col-span-6 justify-center">

              <ul className="flex items-center gap-10 text-[13.5px]">

                {menuItems.map((item) => (
                  <li key={item.label} className="relative group">

                    <Link
                      href={item.href}
                      className="
                        text-[rgb(var(--color-text))]
                        opacity-80
                        hover:opacity-100
                        transition
                      "
                    >
                      {item.label}
                    </Link>

                    {/* underline effect */}
                    <span
                      className="
                        absolute left-0 bottom-[-6px]
                        w-0 h-[1px]
                        bg-[rgb(var(--color-primary))]
                        transition-all duration-300
                        group-hover:w-full
                      "
                    />

                    {/* SUBMENU */}
                    {item.children && (
                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-full mt-6
                          w-[260px]

                          bg-[rgb(var(--color-surface))]
                          border border-[rgb(var(--color-border))]
                          rounded-[var(--radius-lg)]
                          shadow-[var(--shadow-elevated)]

                          opacity-0 invisible
                          translate-y-2
                          group-hover:opacity-100
                          group-hover:visible
                          group-hover:translate-y-0

                          transition-all duration-200
                        "
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="
                              block px-5 py-3
                              text-[13px]
                              text-[rgb(var(--color-text))]
                              hover:bg-[rgb(var(--color-soft))]
                              transition
                            "
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}

                  </li>
                ))}

              </ul>

            </div>

            {/* CTA */}
            <div className="hidden md:flex col-span-3 justify-end">

              <Link
                href="/kontak"
                className="
                  text-[13px]
                  px-4 py-2
                  border
                  border-[rgb(var(--color-border))]
                  rounded-[var(--radius-md)]
                  text-[rgb(var(--color-text))]
                  hover:border-[rgb(var(--color-primary))]
                  hover:text-[rgb(var(--color-primary))]
                  transition
                "
              >
                Konsultasi
              </Link>

            </div>

            {/* MOBILE */}
            <div className="col-span-6 md:hidden flex justify-end">

              <button
                onClick={handleOpen}
                className="
                  p-2
                  rounded-[var(--radius-sm)]
                  border border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-surface))]
                  text-[rgb(var(--color-text))]
                  hover:bg-[rgb(var(--color-soft))]
                  transition
                "
              >
                <FiMenu size={20} />
              </button>

            </div>

          </div>

        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={handleClose}
        posts={posts}
      />
    </>
  )
}