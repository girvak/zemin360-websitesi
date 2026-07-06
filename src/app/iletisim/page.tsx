import type { Metadata } from "next";
import IletisimForm from "./IletisimForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Zemin360 projesi ile ilgili sorularınız ve iş birliği önerileriniz için bizimle iletişime geçin.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Zemin360",
    description: "Zemin360 projesi ile ilgili sorularınız ve iş birliği önerileriniz için bizimle iletişime geçin.",
    url: "https://zemin360.com/iletisim",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zemin360" }],
  },
  twitter: {
    title: "İletişim | Zemin360",
    description: "Zemin360 projesi ile ilgili sorularınız ve iş birliği önerileriniz için bizimle iletişime geçin.",
    images: ["/og-image.png"],
  },
};

export default function IletisimPage() {
  return <IletisimForm />;
}
