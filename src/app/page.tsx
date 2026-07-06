import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "../components/HomeHero";
import SectionIntro from "../components/ui/SectionIntro";
import AccentPanel from "../components/ui/AccentPanel";
import BenefitColumns from "../components/ui/BenefitColumns";
import StatStrip from "../components/ui/StatStrip";

export const metadata: Metadata = {
  title: { absolute: "Zemin360 | Kurumsal Şirketler ve Startuplar İçin İş Birliği Programı" },
  description: "İstanbul'un inovasyon potansiyelini harekete geçiriyoruz. Startupların çevikliğini kurumsal şirketlerin gücüyle birleştiren Zemin360 programına başvurun.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zemin360 | Kurumsal Şirketler ve Startuplar İçin İş Birliği Programı",
    description: "İstanbul'un inovasyon potansiyelini harekete geçiriyoruz. Startupların çevikliğini kurumsal şirketlerin gücüyle birleştiren Zemin360 programına başvurun.",
    url: "https://zemin360.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zemin360" }],
  },
  twitter: {
    title: "Zemin360 | Kurumsal Şirketler ve Startuplar İçin İş Birliği Programı",
    description: "İstanbul'un inovasyon potansiyelini harekete geçiriyoruz. Startupların çevikliğini kurumsal şirketlerin gücüyle birleştiren Zemin360 programına başvurun.",
    images: ["/og-image.png"],
  },
};

const goals = [
  {
    numClass: "text-zemin-purple",
    text: "Kurumsal şirketlerin startuplarla çalışma kapasitesini artırarak inovasyon dönüşümünü başlatmak.",
  },
  {
    numClass: "text-zemin-orange",
    text: "Startupların kurumsal yapılara satış yapabilen olgunluğa erişmesini sağlamak.",
  },
  {
    numClass: "text-zemin-turquoise",
    text: "Dijital bir eşleşme ve takip platformu ile iş birliği süreçlerini şeffaf ve sürdürülebilir kılmak.",
  },
];

const kurumBenefits = [
  "Stratejik önceliklerinize doğrudan karşılık veren, ihtiyaç temelli eşleşmelerle doğru girişimlere erişim.",
  "Geleneksel tedarik modelinin ötesine geçerek çevik iş birlikleri geliştirme.",
  "Kurum içinde inovasyon yaklaşımını güçlendirme ve sürdürülebilir bir iş birliği yapısı oluşturma.",
];

const girisimBenefits = [
  "Kurumsal şirketlere doğrudan erişim imkanı.",
  "Somut pilot proje (PoC) geliştirme ve kurumsal referans fırsatı.",
  "B2B ölçeklenme yolculuğunda yapısal ve mentorluk destekli ilerleme.",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <HomeHero />

      {/* PROGRAM NEDİR */}
      <section id="program" className="z-section bg-white scroll-mt-20">
        <div className="z-container">
          <SectionIntro
            index="01"
            label="Program"
            title="Zemin360 Nedir?"
            description="Kurumsal şirketler ile teknoloji tabanlı startuplar arasında sistematik iş birliği zemini."
            accent="purple"
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <AccentPanel className="h-full flex flex-col">
              <div className="mb-8 pb-5 border-b border-gray-200">
                <h3 className="z-panel-title text-zemin-purple">Program</h3>
              </div>
              <div className="flex flex-col justify-center space-y-5 flex-1">
                <p className="text-lg text-zemin-dark leading-relaxed">
                  Zemin360, <strong>Türkiye Girişimcilik Vakfı</strong> tarafından{" "}
                  <strong>İstanbul Kalkınma Ajansı (İSTKA)</strong> desteğiyle yürütülen; kurumsal şirketler ile
                  teknoloji tabanlı startuplar arasındaki stratejik iş birliklerini sistematik hale getirmeyi
                  amaçlayan bir programdır.
                </p>
                <p className="text-lg text-zemin-dark leading-relaxed">
                  Program; ihtiyaç analizi, kurum-startup iş birliği süreçlerini güçlendiren atölyeler, eşleştirme
                  ve POC hazırlıkları ile dijital inovasyon platformunun geliştirilmesini kapsar.
                </p>
                <Link
                  href="/program"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zemin-purple hover:text-zemin-orange transition-colors pt-2"
                >
                  12 aylık program akışını inceleyin →
                </Link>
              </div>
            </AccentPanel>

            <AccentPanel variant="muted" className="h-full flex flex-col">
              <div className="mb-8 pb-5 border-b border-gray-200">
                <h3 className="z-panel-title text-zemin-purple">Amacımız</h3>
              </div>
              <ol className="flex-1 flex flex-col justify-center space-y-7">
                {goals.map((goal, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className={`text-sm font-extrabold tabular-nums shrink-0 pt-0.5 ${goal.numClass}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-zemin-dark leading-relaxed">{goal.text}</span>
                  </li>
                ))}
              </ol>
            </AccentPanel>
          </div>
        </div>
      </section>

      {/* NEDEN KATILMALISINIZ */}
      <section id="deger" className="z-section bg-zemin-light z-divider scroll-mt-20">
        <div className="z-container max-w-5xl">
          <SectionIntro
            index="02"
            label="Değer Önerisi"
            title="Neden Katılmalısınız?"
            description="Program, kurumlar ve girişimler için farklı ama birbirini tamamlayan bir değer sunar."
            accent="purple"
          />
          <BenefitColumns girisimItems={girisimBenefits} kurumItems={kurumBenefits} kurumFirst />
        </div>
      </section>

      {/* KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="z-section bg-white scroll-mt-20">
        <div className="z-container max-w-5xl">
          <SectionIntro
            index="03"
            label="Uygunluk"
            title="Kimler Başvurabilir?"
            accent="blue"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <AccentPanel>
              <div className="mb-6 pb-4 border-b border-gray-200">
                <h3 className="z-panel-title text-zemin-orange">Kurumlar</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                İstanbul merkezli veya İstanbul&apos;da operasyonel etkisi bulunan, yenilikçi çözümlere ve
                girişimlerle somut iş birlikleri geliştirmeye açık yapılar.
              </p>
              <Link
                href="/kurum-basvurusu"
                className="text-sm font-bold uppercase tracking-wider text-zemin-orange hover:text-zemin-purple transition-colors"
              >
                Kurum başvurusu →
              </Link>
            </AccentPanel>

            <AccentPanel>
              <div className="mb-6 pb-4 border-b border-gray-200">
                <h3 className="z-panel-title text-zemin-turquoise">Girişimler</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Teknoloji tabanlı ürün veya hizmeti olan, MVP aşamasını tamamlamış ve kurumsal şirketlerle
                PoC çalışmasına hazır, tercihen B2B odaklı girişimler.
              </p>
              <Link
                href="/girisim-basvurusu"
                className="text-sm font-bold uppercase tracking-wider text-zemin-turquoise hover:text-zemin-purple transition-colors"
              >
                Girişim başvurusu →
              </Link>
            </AccentPanel>
          </div>
        </div>
      </section>

      {/* HEDEFLER / ETKİ */}
      <section id="etki" className="z-section bg-zemin-light z-divider scroll-mt-20">
        <div className="z-container max-w-5xl">
          <SectionIntro
            index="04"
            label="Etki"
            title="Hedeflerimiz"
            description={
              <>
                Program ilerledikçe bu hedefler somut etki verileriyle güncellenecektir.
                Katılımcı listesi için{" "}
                <Link href="/kurumlar-girisimler" className="text-zemin-purple font-bold hover:text-zemin-orange transition-colors">
                  Ekosistem
                </Link>{" "}
                sayfasına bakabilirsiniz.
              </>
            }
            accent="turquoise"
          />

          <div className="bg-white border border-gray-200">
            <StatStrip
              items={[
                { value: "10+", label: "Aktif Kurumsal Şirket", note: "Hedeflenen minimum katılım", accent: "orange" },
                { value: "20+", label: "Aktif Girişim", note: "Hedeflenen minimum katılım", accent: "turquoise" },
                { value: "10+", label: "Somut İş Ortaklığı", note: "POC, yatırım veya satış hedefi", accent: "purple" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* PARTNERLER */}
      <section id="partnerler" className="z-section bg-white z-divider scroll-mt-20">
        <div className="z-container">
          <SectionIntro
            index="05"
            label="Ekosistem"
            title="Paydaşlar"
            accent="orange"
          />

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 mb-8">
            <a
              href="https://www.sanayi.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zemin-light p-6 rounded-2xl hover:shadow-md transition-shadow flex items-center justify-center flex-1 min-h-40"
            >
              <img src="/logos/kagm.svg" alt="T.C. Sanayi ve Teknoloji Bakanlığı" className="w-auto object-contain" style={{ height: "57px" }} />
            </a>
            <a
              href="https://www.girisimcilikvakfi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zemin-light p-6 rounded-2xl hover:shadow-md transition-shadow flex items-center justify-center flex-1 min-h-40"
            >
              <img src="/logos/girvak.png" alt="Türkiye Girişimcilik Vakfı" className="h-14 w-auto object-contain" />
            </a>
            <a
              href="https://www.bilgi.edu.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zemin-light p-6 rounded-2xl hover:shadow-md transition-shadow flex items-center justify-center flex-1 min-h-40"
            >
              <img src="/logos/bilgi.png" alt="İstanbul Bilgi Üniversitesi" className="h-10 w-auto object-contain" />
            </a>
            <a
              href="https://www.istka.org.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zemin-light p-6 rounded-2xl hover:shadow-md transition-shadow flex items-center justify-center flex-1 min-h-40"
            >
              <img src="/logos/istka_TR.png" alt="İstanbul Kalkınma Ajansı" className="w-auto object-contain" style={{ height: "56px" }} />
            </a>
          </div>

          <div className="bg-zemin-light p-10 rounded-3xl">
            <h3 className="text-xl font-bold text-zemin-purple mb-8 uppercase tracking-wide text-center">İştirakçiler</h3>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center">
              <img src="/logos/gooinn.png" alt="GOOINN" className="h-12 w-auto object-contain" />
              <img src="/logos/yekpare.png" alt="Yekpare" className="h-12 w-auto object-contain" />
              <img src="/logos/esmiyor.png" alt="Esmiyor" className="h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
