import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import JsonLd from "../components/JsonLd";
import Analytics from "../components/Analytics";
import { GIRISIM_APPLICATION_URL, KURUM_APPLICATION_URL } from "../lib/links";

const SITE_URL = "https://zemin360.com";
const SITE_DESCRIPTION =
  "Kurumsal şirketler ile teknoloji tabanlı startuplar arasındaki stratejik iş birliklerini sistematik hale getiren İstanbul merkezli inovasyon programı.";
const ORG_NAME = "Türkiye Girişimcilik Vakfı (GİRVAK)";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zemin360 | Kurumsal Şirketler ve Startuplar İçin İş Birliği Programı",
    template: "%s | Zemin360",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Zemin360",
  keywords: [
    "Zemin360",
    "hackathon",
    "kurumsal inovasyon",
    "startup",
    "kurum-startup iş birliği",
    "açık inovasyon",
    "İstanbul",
    "GİRVAK",
    "İSTKA",
    "POC",
    "eşleştirme platformu",
  ],
  authors: [{ name: ORG_NAME, url: SITE_URL }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon_360.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/icon_360.png",
  },
  openGraph: {
    title: "Zemin360 | Kurumsal Şirketler ve Startuplar İçin İş Birliği Programı",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Zemin360",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zemin360" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zemin360 | Kurumsal Şirketler ve Startuplar İçin İş Birliği Programı",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#6451E7",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zemin360",
  alternateName: "Zemin360 Programı",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/zemin360.png`,
  description: SITE_DESCRIPTION,
  parentOrganization: {
    "@type": "Organization",
    name: ORG_NAME,
  },
  areaServed: "TR",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zemin360",
  url: SITE_URL,
  inLanguage: "tr-TR",
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-zemin-light text-zemin-dark flex flex-col min-h-screen">

        {/* Yapısal veri (SEO) */}
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />

        {/* Ziyaretçi ölçümü (NEXT_PUBLIC_GA_ID tanımlıysa) */}
        <Analytics />

        {/* YENİ AKILLI MENÜMÜZ */}
        <Navbar />

        {/* Değişen Sayfa İçerikleri Buraya Gelecek */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Yasal Uyarı */}
        <div className="bg-gray-100 border-t border-gray-200 py-4 px-6">
          <p className="container mx-auto max-w-6xl text-xs text-gray-500 text-center leading-relaxed">
            İstanbul Kalkınma Ajansı tarafından desteklenen Zemin360 Projesi kapsamında hazırlanan bu yayının içeriği İstanbul Kalkınma Ajansı veya Sanayi ve Teknoloji Bakanlığı&apos;nın görüşlerini yansıtmamakta olup, içerik ile ilgili tek sorumluluk Türkiye Girişimcilik Vakfı&apos;na aittir.
          </p>
        </div>

        {/* Alt Bilgi (Footer) */}
        <footer className="bg-zemin-dark text-white">

          {/* CTA Bölümü */}
          <div id="basvur" className="border-b border-white/10 py-16 px-6 scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zemin-orange mb-3">Başvuru</p>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Zemin360&apos;ta Yerinizi Alın</h2>
                  <p className="text-gray-400 max-w-lg leading-relaxed">
                    Kurum veya girişim olarak programa resmi başvurunuzu iletebilirsiniz.
                  </p>
                </div>
                <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
                  <a href={GIRISIM_APPLICATION_URL} target="_blank" rel="noopener noreferrer" className="border border-zemin-turquoise text-zemin-turquoise px-7 py-3 font-bold text-sm uppercase tracking-wider hover:bg-zemin-turquoise hover:text-white transition-colors text-center">
                    Girişim Başvurusu
                  </a>
                  <a href={KURUM_APPLICATION_URL} target="_blank" rel="noopener noreferrer" className="border border-zemin-orange text-zemin-orange px-7 py-3 font-bold text-sm uppercase tracking-wider hover:bg-zemin-orange hover:text-white transition-colors text-center">
                    Kurum Başvurusu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Alt Bilgi Satırı */}
          <div className="py-10 px-6">
            <div className="container mx-auto max-w-6xl grid md:grid-cols-12 gap-8">

              <div className="md:col-span-4">
                <div className="h-10 w-32 overflow-hidden relative mb-4">
                  <img src="/logos/zemin360.png" alt="Zemin360 Logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-auto brightness-0 invert" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Kurumsal şirketler ve startuplar arası iş birliği platformu.
                </p>
              </div>

              <div className="md:col-span-4">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Menü</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                  <li><Link href="/program" className="hover:text-white transition-colors">Program</Link></li>
                  <li><Link href="/hackathon" className="hover:text-white transition-colors">Hackathon</Link></li>
                  <li><Link href="/kurumlar-girisimler" className="hover:text-white transition-colors">Kurumlar & Girişimler</Link></li>
                  <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
                </ul>
              </div>

              <div className="md:col-span-4">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Paydaşlar</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Türkiye Girişimcilik Vakfı (GİRVAK)</li>
                  <li>İstanbul Kalkınma Ajansı (İSTKA)</li>
                  <li>İstanbul Bilgi Üniversitesi</li>
                </ul>
              </div>

            </div>
            <div className="container mx-auto max-w-6xl mt-8 pt-6 border-t border-gray-800 text-xs text-gray-600">
              © 2026 Zemin360. Tüm hakları saklıdır.
            </div>
          </div>

        </footer>

      </body>
    </html>
  );
}