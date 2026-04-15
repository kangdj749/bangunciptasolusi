type Input = {
  city: string
  service: string
}

/* =============================
   DATA OTAK (SIMULASI AI)
============================= */

const cityContext: Record<string, string[]> = {
  jakarta: [
    "kawasan urban padat dengan kebutuhan pembangunan tinggi",
    "pusat bisnis dengan tekanan lahan yang kompleks",
  ],
  bandung: [
    "kota kreatif dengan perkembangan hunian dan komersial",
    "wilayah dengan pertumbuhan properti yang pesat",
  ],
  surabaya: [
    "kota industri dengan kebutuhan infrastruktur kuat",
  ],
}

const problems = [
  "perencanaan yang tidak matang dapat meningkatkan biaya proyek",
  "kurangnya analisis teknis menyebabkan risiko konstruksi",
  "desain yang tidak optimal berdampak pada efisiensi bangunan",
]

const solutions = [
  "pendekatan berbasis analisis dan perencanaan terintegrasi",
  "tim profesional dengan pengalaman lintas proyek",
  "proses kerja sistematis dari konsep hingga implementasi",
]

const closingCTA = [
  "Konsultasikan proyek Anda sekarang bersama tim kami.",
  "Diskusikan kebutuhan proyek Anda bersama konsultan kami.",
  "Mulai perencanaan proyek Anda dengan pendekatan profesional.",
]

/* =============================
   GENERATOR
============================= */

export function generateAIContent({ city, service }: Input) {
  const lowerCity = city.toLowerCase()

  const context =
    cityContext[lowerCity]?.[
      Math.floor(Math.random() * cityContext[lowerCity].length)
    ] ||
    "wilayah berkembang dengan kebutuhan pembangunan yang terus meningkat"

  const problem = problems[Math.floor(Math.random() * problems.length)]
  const solution = solutions[Math.floor(Math.random() * solutions.length)]
  const cta = closingCTA[Math.floor(Math.random() * closingCTA.length)]

  return {
    intro: `Di ${city}, ${context}. Layanan ${service} menjadi bagian penting dalam memastikan proyek berjalan optimal dan efisien.`,

    problem: `Dalam banyak proyek di ${city}, ${problem}. Hal ini sering terjadi tanpa perencanaan yang tepat sejak awal.`,

    solution: `Melalui layanan ${service} kami di ${city}, kami menghadirkan ${solution} untuk memastikan hasil yang maksimal.`,

    closing: `${cta} Kami siap membantu kebutuhan ${service} Anda di ${city}.`,
  }
}