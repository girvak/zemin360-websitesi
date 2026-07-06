import type { Metadata } from "next";
import { girisimler, kurumlar } from "../../data/ecosystem";
import PageHero from "../../components/ui/PageHero";
import SectionIntro from "../../components/ui/SectionIntro";
import DirectoryList from "../../components/ui/DirectoryList";
import BenefitColumns from "../../components/ui/BenefitColumns";

export const metadata: Metadata = {
  title: "Kurumlar & Girişimler",
  description: "Zemin360 programına katılan kurumsal şirketler ve startuplar. Geleneksel sınırları aşarak yenilikçi çözümleri ve kurumsal gücü aynı zeminde buluşturuyoruz.",
  alternates: { canonical: "/kurumlar-girisimler" },
  openGraph: {
    title: "Kurumlar & Girişimler | Zemin360",
    description: "Zemin360 programına katılan kurumsal şirketler ve startuplar. Geleneksel sınırları aşarak yenilikçi çözümleri ve kurumsal gücü aynı zeminde buluşturuyoruz.",
    url: "https://zemin360.com/kurumlar-girisimler",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zemin360" }],
  },
  twitter: {
    title: "Kurumlar & Girişimler | Zemin360",
    description: "Zemin360 programına katılan kurumsal şirketler ve startuplar. Geleneksel sınırları aşarak yenilikçi çözümleri ve kurumsal gücü aynı zeminde buluşturuyoruz.",
    images: ["/og-image.png"],
  },
};

const girisimBenefits = [
  "İlk kurumsal müşteriye erişim ve B2B ölçeklenme desteği.",
  "POC (Kavram Kanıtı) gerçekleştirme imkanı.",
  "Güçlü bir kurumsal referans elde etme fırsatı.",
];

const kurumBenefits = [
  "Geleneksel tedarikçi yapısının dışına çıkarak çevik ve inovatif çözümlere erişim.",
  "Karmaşık satın alma süreçlerinin iyileştirilmesi.",
  "Rekabet avantajı ve kurumsal kültürel dönüşüm.",
];

export default function KurumlarGirisimler() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        label="Ekosistem"
        title="Kurumlar & Girişimler"
        description="Geleneksel sınırları aşarak, yenilikçi çözümleri ve kurumsal gücü aynı zeminde buluşturuyoruz."
      />

      <section className="z-section bg-zemin-light">
        <div className="z-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionIntro
                index="01"
                label="Ekosistem"
                title="Girişimler"
                description="Programa kabul edilen teknoloji tabanlı startuplar."
                accent="turquoise"
              />
              <DirectoryList
                items={girisimler}
                accent="turquoise"
                emptyHref="/girisim-basvurusu"
                emptyLabel="Girişim olarak başvur"
                fallbackIcon="/icons/icon_pacman.png"
              />
            </div>
            <div>
              <SectionIntro
                index="02"
                label="Ekosistem"
                title="Kurumlar"
                description="İnovasyon yolculuğuna katılan kurumsal şirketler."
                accent="orange"
              />
              <DirectoryList
                items={kurumlar}
                accent="orange"
                emptyHref="/kurum-basvurusu"
                emptyLabel="Kurum olarak başvur"
                fallbackIcon="/icons/icon_m.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="z-section bg-white z-divider">
        <div className="z-container max-w-5xl">
          <SectionIntro index="03" label="Değer Önerisi" title="Neden Katılmalısınız?" accent="purple" />
          <BenefitColumns girisimItems={girisimBenefits} kurumItems={kurumBenefits} />
        </div>
      </section>
    </div>
  );
}
