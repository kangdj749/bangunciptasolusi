export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { 
    label: "Layanan", 
    href: "/layanan",
    children: [
      { label: "Penataan Ruang", href: "/layanan#penataan-ruang" },
      { label: "Arsitektur", href: "/layanan#arsitektur" },
      { label: "Rekayasa Teknik", href: "/layanan#rekayasa" },
    ]
  },
  { label: "Kontak", href: "/kontak" },
];