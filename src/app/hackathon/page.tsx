import type { Metadata } from "next";
import Link from "next/link";
import SectionIntro from "../../components/ui/SectionIntro";
import AccentPanel from "../../components/ui/AccentPanel";
import HackathonCountdown from "../../components/HackathonCountdown";
import JsonLd from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Hackathon",
  description:
    "Zemin360 Hackathon — 9–11 Ekim 2026, İstanbul. Gençlerin ve kurumların buluştuğu, sektörün gerçek problemlerine çözüm üreten açık kaynak platformun inşa edildiği etkinlik. Başvurular 24 Temmuz 2026'da açılıyor.",
  alternates: { canonical: "/hackathon" },
  keywords: [
    "Zemin360 Hackathon",
    "hackathon 2026",
    "İstanbul hackathon",
    "açık kaynak hackathon",
    "yazılım yarışması",
    "girişimcilik",
    "öğrenci hackathonu",
  ],
  openGraph: {
    title: "Zemin360 Hackathon",
    description:
      "9–11 Ekim 2026, İstanbul. Gençlerin ve kurumların buluştuğu, sektörün gerçek problemlerine çözüm üreten hackathon.",
    url: "https://zemin360.com/hackathon",
    images: [{ url: "/og-hackathon.png", width: 1200, height: 630, alt: "Zemin360 Hackathon" }],
  },
  twitter: {
    title: "Zemin360 Hackathon",
    description:
      "9–11 Ekim 2026, İstanbul. Gençlerin ve kurumların buluştuğu, sektörün gerçek problemlerine çözüm üreten hackathon.",
    images: ["/og-hackathon.png"],
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Zemin360 Hackathon",
  description:
    "Gençlerle kurumların aynı zeminde buluştuğu; sektörün gerçek problemlerine çözüm üreten açık kaynak platformun birlikte inşa edildiği hackathon.",
  startDate: "2026-10-09",
  endDate: "2026-10-11",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: ["https://zemin360.com/og-hackathon.png"],
  url: "https://zemin360.com/hackathon",
  location: {
    "@type": "Place",
    name: "İstanbul",
    address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
  },
  organizer: {
    "@type": "Organization",
    name: "Türkiye Girişimcilik Vakfı (GİRVAK)",
    url: "https://zemin360.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    availability: "https://schema.org/InStock",
    validFrom: "2026-07-24",
    url: "https://zemin360.com/hackathon",
  },
};

// 24 Temmuz 2026 — başvuruların açılışı (TSİ)
const APPLICATIONS_OPEN = "2026-07-24T00:00:00+03:00";

// Başvuru bağlantısı — başvuru formu/sayfası hazır olunca güncellenecek
const APPLICATION_URL = "#";

const problems = [
  {
    title: "Genç Yeteneklerin Keşfi",
    desc: "Sektördeki genç yeteneklerin doğru kanallarla görünür olamaması ve fırsatlara erişememesi.",
  },
  {
    title: "Profil & Portfolyo Doğruluğu",
    desc: "Kişilerin beyan ettiği deneyim, beceri ve portfolyonun güvenilir biçimde doğrulanamaması.",
  },
  {
    title: "Kurum–Kişi Eşleşmesi",
    desc: "Kurumların ihtiyaçları ile bireylerin ve girişimlerin yetkinliklerinin sağlıklı biçimde eşleştirilememesi.",
  },
  {
    title: "Yaşayan Bir Ağ",
    desc: "Bir kez kurulan bağlantıların sürdürülememesi; etkileşimin canlı kalmadığı statik ağlar.",
  },
  {
    title: "İhtiyaçların Net Tanımı",
    desc: "Kurumların gerçek problemlerini yapılandırılmış ve çözülebilir biçimde ifade edememesi.",
  },
  {
    title: "Şeffaf İş Birliği Takibi",
    desc: "İş birliği ve pilot süreçlerinin ilerleyişinin şeffaf ve ölçülebilir biçimde izlenememesi.",
  },
];

const conditions = [
  "18–30 yaş aralığında olmak",
  "Yazılım geliştirme, UI/UX tasarımı veya ürün geliştirme deneyimine sahip olmak",
  "3–5 kişilik takım halinde başvurmak",
  "Türkiye'nin her yerinden başvuruya açık",
  "9–11 Ekim tarihlerinde İstanbul'daki fiziksel hackathona katılabilmek",
];

const timeline = [
  {
    date: "24 Temmuz",
    accent: "border-zemin-orange text-zemin-orange",
    title: "Başvuruların Açılışı",
    desc: "Başvuru formu erişime açılıyor, kayıtlar başlıyor.",
  },
  {
    date: "7 Eylül",
    accent: "border-zemin-purple text-zemin-purple",
    title: "Başvuruların Kapanışı",
    desc: "Son başvuru tarihi; kayıtlar bu tarihte sona eriyor.",
  },
  {
    date: "16 Eylül",
    accent: "border-zemin-turquoise text-zemin-turquoise",
    title: "Değerlendirme Süreci",
    desc: "Başvurular jüri tarafından değerlendirilip sonuçlandırılıyor.",
  },
  {
    date: "18 Eylül",
    accent: "border-zemin-blue text-zemin-blue",
    title: "Takımların Açıklanması",
    desc: "Seçilen takımlar duyuruluyor ve online süreç başlıyor.",
  },
  {
    date: "18 Eylül – 7 Ekim",
    accent: "border-zemin-orange text-zemin-orange",
    title: "Online Geliştirme Dönemi",
    desc: "Takımlar 20 gün boyunca fiziksel hackathona hazırlık olarak uzaktan geliştirir.",
  },
  {
    date: "8 Ekim",
    accent: "border-zemin-turquoise text-zemin-turquoise",
    title: "Ulaşım Günü",
    desc: "Takımların İstanbul'a ulaşımı için ayrılan gün.",
  },
  {
    date: "9–11 Ekim",
    accent: "border-zemin-purple text-zemin-purple",
    title: "Fiziksel Hackathon",
    desc: "İstanbul'da Cuma–Pazar; Pazar günü takım sunumları ve kazananın açıklanması.",
  },
];

export default function Hackathon() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={eventJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-zemin-blue text-white min-h-[calc(100svh-80px)] flex flex-col px-6">
        {/* dekoratif nokta deseni */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at center, #fff 0, #fff 2px, transparent 2.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* yumuşak ışıma */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-zemin-purple/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-32 w-[520px] h-[520px] rounded-full bg-zemin-turquoise/20 blur-3xl"
        />

        <div className="relative flex-1 flex items-center">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-center w-full py-12 md:py-16">
            <div>
              <p className="text-purple-200 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 border-l-2 border-white/30 pl-3">
                Hackathon · 9–11 Ekim 2026 · İstanbul
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
                Zemin360 Hackathon
              </h1>
              <div className="space-y-4 text-base md:text-lg text-purple-200 font-light max-w-2xl leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">Türkiye Girişimcilik Vakfı (GİRVAK)</strong> ve program
                  paydaşlarının iş birliğiyle düzenlenen; genç yeteneklerle kurumları ortak bir zeminde buluşturan bir
                  geliştirme etkinliği.
                </p>
                <p>
                  Katılımcılar üç gün boyunca, sektörün gerçek problemlerine çözüm üreten ve kurumların iş birliğiyle
                  hayata geçecek <strong className="text-white font-semibold">açık kaynak</strong> bir platformu
                  birlikte inşa eder.
                </p>
              </div>
            </div>

            <div className="w-full">
              <HackathonCountdown
                target={APPLICATIONS_OPEN}
                label="Başvuruların açılışına"
                passedText="Başvurular açıldı!"
                compact
              />
              <Link
                href={APPLICATION_URL}
                className="mt-4 block w-full text-center bg-zemin-orange text-white px-6 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-zemin-blue transition-colors"
              >
                Hemen Başvur
              </Link>
            </div>
          </div>
        </div>

        {/* Aşağı kaydırma yönlendirmesi */}
        <a
          href="#icerik"
          className="relative group pb-8 flex flex-col items-center gap-3 text-purple-200 hover:text-white transition-colors"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Detaylar için aşağı kaydır</span>
          <span className="flex flex-col items-center -space-y-2">
            {[0, 1, 2].map((i) => (
              <svg
                key={i}
                className="scroll-chevron w-6 h-6"
                style={{ animationDelay: `${i * 0.18}s` }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ))}
          </span>
        </a>
      </section>

      {/* ÇÖZÜLECEK PROBLEMLER */}
      <section id="icerik" className="z-section bg-zemin-light z-divider scroll-mt-20">
        <div className="z-container">
          <SectionIntro
            index="01"
            label="Görev"
            title="Çözülecek Problemler"
            description="Ekiplerden, aşağıdaki problemlerden bir veya daha fazlasını tek bir web hizmetinde çözmeleri beklenir. Bunlar kurum-girişim ekosisteminin sektördeki en kritik ihtiyaçlarıdır."
            accent="orange"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <AccentPanel key={p.title}>
                <span className="text-sm font-extrabold tabular-nums text-zemin-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-zemin-dark mt-2 mb-2">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </AccentPanel>
            ))}
          </div>
        </div>
      </section>

      {/* KİMLER KATILABİLİR */}
      <section className="z-section bg-white z-divider scroll-mt-20">
        <div className="z-container max-w-3xl">
          <SectionIntro index="02" label="Uygunluk" title="Kimler Katılabilir?" accent="blue" />
          <ul className="space-y-5">
            {conditions.map((c, i) => (
              <li key={i} className="flex gap-5 items-start border-b border-gray-200 pb-5">
                <span className="text-sm font-extrabold tabular-nums text-zemin-blue shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-zemin-dark leading-relaxed text-lg">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TAKVİM */}
      <section className="z-section bg-zemin-light z-divider scroll-mt-20">
        <div className="z-container">
          <SectionIntro
            index="03"
            label="Takvim"
            title="Süreç Takvimi"
            description="Başvurudan fiziksel hackathona kadar tüm önemli tarihler."
            accent="purple"
          />
          <div className="relative max-w-3xl">
            {/* sürekli dikey çizgi */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200" aria-hidden />
            {timeline.map((t) => (
              <div key={t.date} className="relative flex gap-6 pb-10 last:pb-0">
                <span
                  className={`relative z-10 mt-1.5 shrink-0 w-4 h-4 rounded-full bg-white border-[3px] ${t.accent.split(" ")[0]}`}
                  aria-hidden
                />
                <div className="flex-1">
                  <span className={`block text-sm font-extrabold uppercase tracking-wider mb-1 ${t.accent.split(" ")[1]}`}>
                    {t.date}
                  </span>
                  <h3 className="text-lg font-bold text-zemin-dark">{t.title}</h3>
                  <p className="text-gray-600 leading-relaxed mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÜYÜK ÖDÜL */}
      <section className="z-section bg-zemin-blue text-white scroll-mt-20 overflow-hidden">
        <div className="z-container">
          <p className="text-purple-200 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 border-l-2 border-white/30 pl-3">
            Büyük Ödül
          </p>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">200.000 TL</div>
              <div className="text-purple-200 font-bold uppercase tracking-wider text-sm mt-3">Proje Geliştirme Fonu</div>
            </div>
            <div className="md:col-span-7 text-base md:text-lg text-purple-100 leading-relaxed">
              <p>
                200.000 TL'lik destek, fikrinizi gerçek bir ürüne dönüştürmeniz için ayrılan bir{" "}
                <strong className="text-white">geliştirme fonudur</strong>; sunucu ve altyapı gibi ek maliyetler de{" "}
                <strong className="text-white">GİRVAK</strong> tarafından karşılanır. Böylece tek odağınız en iyi
                ürünü inşa etmek olur. Geliştirdiğiniz <strong className="text-white">açık kaynak</strong> platform,
                Türkiye&apos;nin teknolojik dönüşümünde önemli bir adım olacak ve sürecin her aşamasında{" "}
                <strong className="text-white">sizin imzanızı</strong> taşıyacak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENTÖRLER & DESTEK */}
      <section className="z-section bg-white z-divider scroll-mt-20">
        <div className="z-container">
          <SectionIntro index="04" label="Mentörler" title="Mentörler & Destek" accent="turquoise" />
          <AccentPanel variant="muted" className="flex flex-col items-center justify-center text-center py-16">
            <p className="text-2xl font-extrabold text-zemin-dark mb-3">Mentörlerimiz yakında açıklanacak</p>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              Mentor, jüri ve davetli konuşmacı profilleri kişiler netleştikçe bu bölümde paylaşılacaktır.
            </p>
          </AccentPanel>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zemin-blue text-white py-16 md:py-20 px-6">
        <div className="z-container text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">Hackathona Hazır mısın?</h2>
          <p className="text-purple-200 max-w-xl mx-auto leading-relaxed mb-8">
            Fikrini gerçek bir ürüne dönüştürmek ve geliştirdiğin çözüme imzanı atmak için takımını kur, yerini al.
          </p>
          <Link
            href={APPLICATION_URL}
            className="inline-block bg-zemin-orange text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-zemin-blue transition-colors"
          >
            Hemen Başvur
          </Link>
        </div>
      </section>
    </div>
  );
}
