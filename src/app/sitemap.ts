import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://zemin360.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/hackathon`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/program`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/kurumlar-girisimler`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Başvuru sayfaları Airtable formlarına yönlendirdiği için site haritasına dahil edilmez.
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
