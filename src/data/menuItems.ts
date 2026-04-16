
export const menuItems = [
  { label: "Home", href: "/" },
  { 
    label: "Tentang Kami", 
    href: "/tentang",
    children: [
        { label: "Sinergi Profesionalisme", href: "/tentang#sinergi"},
        { label: "Visi Perusahaan", href: "/tentang#visi"},
        { label: "Legalitas Perusahaan", href: "/tentang#legalitas"},
        { label: "Arah Pertumbuhan", href: "/tentang#arah"},
    ]
},

  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "Desain Interior", href: "/layanan/desain-interior" },
      { label: "Desain Arsitektur", href: "/layanan/desain-arsitektur" },
      { label: "Rekayasa Kontruksi", href: "/layanan/rekayasa-konstruksi" },
      { label: "Survey Topografi", href: "/layanan/survey-topografi" },
      { label: "Manajemen Kontruksi", href: "/layanan#sistem-kerja" },
      { label: "Soil Investigasi", href: "/layanan/soil-investigasi" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Hunian Premium Bandung", href: "/portfolio/hunian-premium-bandung" },
      { label: "Mesjid Esa Kareem", href: "/portfolio/mesjid-esa-kareem" },
      { label: "Gedung Fakultas Teknik Unjani", href: "/portfolio/gedung-fakultas-teknik-unjani" },
      { label: "Kantor PSDA Ciliman", href: "/portfolio/kantor-psda-ciliman" },
      { label: "Masjid Unjani", href: "/portfolio/masjid-unjani" },
      { label: "Interior Gedung Perkantoran", href: "/portfolio/interior-gedung-perkantoran" },

    ],
  },
  { label: "Kontak", href: "/kontak" },
  { label: "Blog", href: "/blog" },
];