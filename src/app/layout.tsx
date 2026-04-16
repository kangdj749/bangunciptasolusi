import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

/* ============================= */
/* GLOBAL SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bangunciptasolusi.com"),

  title: {
    default: "Bangun.in — Konsultan Arsitektur & Engineering Indonesia",
    template: "%s | Bangun.in",
  },

  description:
    "Bangun.in adalah konsultan arsitektur, engineering, topografi, dan geoteknik yang menyediakan solusi perencanaan dan konstruksi profesional di Indonesia.",

  keywords: [
    "konsultan arsitektur",
    "engineering consultant indonesia",
    "konsultan teknik",
    "jasa penataan ruang",
    "geoteknik",
    "topografi",
    "soil investigasi",
    "desain interior",
  ],

  openGraph: {
    title: "Bangun.in Engineering Consultant",
    description:
      "Konsultan arsitektur dan engineering profesional di Indonesia.",
    url: "https://bangunciptasolusi.com",
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bangun.in Engineering Consultant",
    description:
      "Konsultan arsitektur dan engineering profesional.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ============================= */
/* GLOBAL SCHEMA */
/* ============================= */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Bangun Cipta Solusi",
  url: "https://bangunciptasolusi.com",
  logo: "https://bangunciptasolusi.com/logo.png",
  email: "bangunciptasolusi01@gmail.com",
  telephone: "+6287765505935",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bangun.in",
  url: "https://bangunciptasolusi.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bangunciptasolusi.com/blog/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">

        {/* GLOBAL JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <ThemeProvider>
          <Navbar />

          <main className="pt-20">
            {children}
          </main>

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}