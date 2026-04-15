"use client"

import Image from "next/image"
import {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

export default function Gallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const dragging = useRef(false)
  const start = useRef({ x: 0, y: 0 })

  const hasActive = activeIndex !== null

  /* ================= NAV ================= */
  const prev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length
    )
    resetTransform()
  }, [images.length])

  const next = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? i : (i + 1) % images.length
    )
    resetTransform()
  }, [images.length])

  const resetTransform = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  /* ================= KEYBOARD ================= */
  useEffect(() => {
    if (!hasActive) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null)
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [hasActive, next, prev])

  /* ================= ZOOM (WHEEL) ================= */
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()

    const delta = -e.deltaY * 0.0015
    setScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 4)
      return next
    })
  }

  /* ================= DRAG ================= */
  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    start.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || scale <= 1) return

    setPosition({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y,
    })
  }

  const handlePointerUp = () => {
    dragging.current = false
  }

  /* ================= DOUBLE CLICK RESET ================= */
  const handleDoubleClick = () => {
    resetTransform()
  }

  return (
    <div>
      <h2 className="h2 mb-5">Dokumentasi Proyek</h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative h-56 rounded-[var(--radius-lg)] overflow-hidden group border border-[rgb(var(--color-border))]"
          >
            <Image
              src={cloudinaryImage(img, "gallery")}
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {hasActive && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            {/* CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white text-xs opacity-70 hover:opacity-100"
            >
              CLOSE
            </button>

            {/* NAV */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-6 text-white text-3xl opacity-40 hover:opacity-100"
            >
              ‹
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-6 text-white text-3xl opacity-40 hover:opacity-100"
            >
              ›
            </button>

            {/* IMAGE CONTAINER */}
            <motion.div
              key={activeIndex}
              className="relative w-full max-w-[1500px] h-[85vh] cursor-grab active:cursor-grabbing"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              onWheel={handleWheel}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onDoubleClick={handleDoubleClick}
              style={{
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  scale,
                  x: position.x,
                  y: position.y,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="w-full h-full"
              >
                <Image
                  src={cloudinaryImage(images[activeIndex], "detail")}
                  alt=""
                  fill
                  priority
                  className="object-contain select-none pointer-events-none"
                />
              </motion.div>
            </motion.div>

            {/* INDEX */}
            <div className="absolute bottom-6 text-white text-xs opacity-70">
              {activeIndex + 1} / {images.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}