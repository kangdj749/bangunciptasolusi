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
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1776396374/3_BANGUN.IN_px3xu3_qkhb0s.png"

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleOpen = useCallback(() => setMobileOpen(true), [])
  const handleClose = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50
          transition-all duration-500 ease-out

          ${
            scrolled
              ? `
                bg-[rgb(var(--color-dark))]/95
                backdrop-blur-xl
                shadow-[var(--shadow-medium)]
                border-b border-[rgb(var(--color-white))]/5
              `
              : `
                bg-transparent
              `
          }
        `}
      >
        {/* 🔥 subtle gradient ONLY when hero active */}
        {!scrolled && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        )}

        <div className="container-main relative">

          <div className="grid grid-cols-12 items-center h-[74px]">

            {/* LOGO */}
            <div className="col-span-6 md:col-span-3 flex items-center">
              <Link href="/">
                <Image
                  src={cloudinaryImage(logo, "logo")}
                  alt="Bangun.in"
                  width={140}
                  height={36}
                  className="h-[28px] w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* MENU */}
            <div className="hidden md:flex col-span-6 justify-center">
              <ul className="flex items-center gap-10">

                {menuItems.map((item) => (
                  <li key={item.label} className="relative group">

                    <Link
                      href={item.href}
                      className="
                        whitespace-nowrap
                        text-[12px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-[rgb(var(--color-white))]/85
                        hover:text-[rgb(var(--color-white))]
                        transition
                      "
                    >
                      {item.label}
                    </Link>

                    {/* GOLD LINE */}
                    <span
                      className="
                        absolute left-0 bottom-[-10px]
                        w-0 h-[2px]
                        bg-[rgb(var(--color-gold))]
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

                          bg-[rgb(var(--color-dark))]/95
                          backdrop-blur-xl

                          border border-[rgb(var(--color-white))]/10
                          rounded-[var(--radius-lg)]
                          shadow-[var(--shadow-elevated)]

                          opacity-0 invisible
                          translate-y-2
                          group-hover:opacity-100
                          group-hover:visible
                          group-hover:translate-y-0

                          transition-all duration-300
                        "
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="
                              block px-5 py-3
                              text-[12.5px]

                              text-[rgb(var(--color-white))]/80
                              hover:text-[rgb(var(--color-white))]

                              hover:bg-[rgb(var(--color-white))]/5
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
                  btn
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]

                  hover:bg-[rgb(var(--color-primary))]/90
                  shadow-[var(--shadow-soft)]
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
                  border border-[rgb(var(--color-white))]/20
                  text-[rgb(var(--color-white))]
                  hover:bg-[rgb(var(--color-white))]/10
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