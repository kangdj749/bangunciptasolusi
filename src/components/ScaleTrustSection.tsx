"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1600
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function ScaleTrustSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const stats = [
    { value: 500, label: "Peserta Lomba" },
    { value: 5000, label: "Pengunjung" },
    { value: 500000, label: "Digital Reach" },
    { value: 250, label: "Anak Yatim Terbantu" },
  ]

  return (
    <section className="relative py-14 md:py-16 bg-gradient-to-b from-white via-[#f8faff] to-white overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#d6f605]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[1020px] mx-auto px-5 md:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >

          <motion.div variants={fadeItem} className="space-y-3">
            <h2 className="text-[clamp(1.3rem,3vw,1.9rem)] font-semibold text-[#032b83] tracking-tight">
              Event Besar, Dampak Lebih Besar
            </h2>

            <div className="w-16 h-[2px] bg-[#d6f605] mx-auto rounded-full" />

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Diselenggarakan secara profesional dan terpercaya,
              menghadirkan dampak nyata bagi generasi muda Jawa Barat.
            </p>
          </motion.div>

          <motion.div
            variants={fadeItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="py-6 px-4 rounded-lg border border-gray-100 bg-white text-center shadow-sm transition-all duration-300 hover:border-[#032b83]/20"
              >
                <p className="text-[clamp(1.2rem,3vw,1.8rem)] font-semibold text-[#032b83] tracking-tight">
                  <Counter target={stat.value} />+
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeItem}>
            <p className="text-sm text-[#032b83] font-semibold">
              Diselenggarakan oleh LAZ Graha Dhuafa Indonesia.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}