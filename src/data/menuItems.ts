
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
  { label: "Portfolio", href: "/portfolio" },
  
  { label: "Kontak", href: "/kontak" },
  { label: "Blog", href: "/blog" },
];