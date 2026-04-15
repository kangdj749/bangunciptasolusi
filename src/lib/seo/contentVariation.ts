const openings = [
  "Kami menyediakan layanan {service} profesional di {city}.",
  "Butuh layanan {service} di {city}? Kami siap membantu.",
  "Layanan {service} terpercaya kini tersedia di {city}.",
  "{service} di {city} dengan pendekatan profesional dan modern.",
]

const closings = [
  "Solusi kami dirancang untuk efisiensi dan hasil maksimal.",
  "Kami mengutamakan kualitas dan ketepatan dalam setiap proyek.",
  "Didukung tim ahli berpengalaman di bidangnya.",
  "Cocok untuk proyek skala kecil hingga besar.",
]

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateDynamicContent(service: string, city: string) {
  const open = randomItem(openings)
    .replaceAll("{service}", service)
    .replaceAll("{city}", city)

  const close = randomItem(closings)

  return `${open} ${close}`
}