import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zemin360",
    short_name: "Zemin360",
    description:
      "Kurumsal şirketler ile teknoloji tabanlı startuplar arasındaki stratejik iş birliklerini sistematik hale getiren İstanbul merkezli inovasyon programı.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6451E7",
    lang: "tr",
    icons: [
      { src: "/icons/icon_360.png", sizes: "any", type: "image/png", purpose: "any" },
    ],
  };
}
