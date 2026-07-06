import type { Metadata } from "next";
import GirisimForm from "./GirisimForm";

export const metadata: Metadata = {
  title: "Girişim Başvurusu",
  description: "Zemin360 programına girişim olarak başvurun. Çözümünüzü kurumsal şirketlerin gücüyle buluşturun.",
  alternates: { canonical: "/girisim-basvurusu" },
  openGraph: {
    title: "Girişim Başvurusu | Zemin360",
    description: "Zemin360 programına girişim olarak başvurun. Çözümünüzü kurumsal şirketlerin gücüyle buluşturun.",
    url: "https://zemin360.com/girisim-basvurusu",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zemin360" }],
  },
  twitter: {
    title: "Girişim Başvurusu | Zemin360",
    description: "Zemin360 programına girişim olarak başvurun. Çözümünüzü kurumsal şirketlerin gücüyle buluşturun.",
    images: ["/og-image.png"],
  },
};

export default function GirisimBasvurusuPage() {
  return <GirisimForm />;
}
