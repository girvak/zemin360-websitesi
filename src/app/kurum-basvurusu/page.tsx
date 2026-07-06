import type { Metadata } from "next";
import KurumForm from "./KurumForm";

export const metadata: Metadata = {
  title: "Kurum Başvurusu",
  description: "Zemin360 programına kurumsal şirket olarak başvurun. Startuplarla güçlü iş birlikleri kurun.",
  alternates: { canonical: "/kurum-basvurusu" },
  openGraph: {
    title: "Kurum Başvurusu | Zemin360",
    description: "Zemin360 programına kurumsal şirket olarak başvurun. Startuplarla güçlü iş birlikleri kurun.",
    url: "https://zemin360.com/kurum-basvurusu",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zemin360" }],
  },
  twitter: {
    title: "Kurum Başvurusu | Zemin360",
    description: "Zemin360 programına kurumsal şirket olarak başvurun. Startuplarla güçlü iş birlikleri kurun.",
    images: ["/og-image.png"],
  },
};

export default function KurumBasvurusuPage() {
  return <KurumForm />;
}
