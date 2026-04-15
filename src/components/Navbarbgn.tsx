"use client";

import { useState } from "react";
import Link from "next/link";
import { menuItems } from "@/lib/menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container-main flex items-center justify-between py-4 md:py-5">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-[rgb(var(--color-primary))] text-xl md:text-2xl">
            BANGUN.IN
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <Link
                href={item.href}
                className="hover:text-[rgb(var(--color-primary))] transition-colors duration-200"
              >
                {item.label}
              </Link>

              {/* Submenu */}
              {item.children && (
                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgb(var(--color-primary))]/10 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 rounded-xl text-[rgb(var(--color-white))] bg-[rgb(var(--color-primary))] hover:opacity-70 transition-all"
            >
              Konsultasi Sekarang
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-1 px-4 py-2">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block py-2 px-2 rounded hover:bg-[rgb(var(--color-primary))]/10"
                >
                  {item.label}
                </Link>

                {/* Submenu */}
                {item.children && (
                  <ul className="pl-4 flex flex-col gap-1">
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link
                          href={child.href}
                          className="block py-2 px-2 rounded hover:bg-[rgb(var(--color-primary))]/10"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}