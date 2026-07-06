import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import SectionIntro from "../../components/ui/SectionIntro";

export const metadata: Metadata = {
  title: "Program",
  description: "Zemin360 programının 12 aylık faaliyet planı ve etkinlik takvimi.",
  alternates: { canonical: "/program" },
  openGraph: {
    title: "Program | Zemin360",
    description: "Zemin360 programının 12 aylık faaliyet planı ve etkinlik takvimi.",
    url: "https://zemin360.com/program",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zemin360" }],
  },
  twitter: {
    title: "Program | Zemin360",
    description: "Zemin360 programının 12 aylık faaliyet planı ve etkinlik takvimi.",
    images: ["/og-image.png"],
  },
};

const timelineItems = [
  { no: "01", accent: "text-zemin-orange border-zemin-orange", title: "İhtiyaç Analizi & Durum Tespiti", desc: "Paydaşların inovasyon ve iş birliği olgunluk düzeylerinin ölçülmesi ve raporlanması." },
  { no: "02", accent: "text-zemin-purple border-zemin-purple", title: "Kurumsal Hazırlık Atölyeleri", desc: "Satın alma ve inovasyon birimlerine yönelik startup odaklı kapasite geliştirme seansları." },
  { no: "03", accent: "text-zemin-turquoise border-zemin-turquoise", title: "Startup Hazırlık Atölyeleri", desc: "Kurumsal satış, POC yönetimi ve protokol hazırlama eğitimleri." },
  { no: "04", accent: "text-zemin-blue border-zemin-blue", title: "Needs & Leads Etkinlikleri", desc: "Kurumsal sorunlar ile startup çözümlerinin buluştuğu interaktif eşleşme oturumları." },
  { no: "05", accent: "text-zemin-orange border-zemin-orange", title: "Zemin360 Hackathon", desc: "İnovasyon ve iş birliği platformunun prototiplendiği yoğun geliştirme süreci." },
  { no: "06", accent: "text-zemin-purple border-zemin-purple", title: "İstanbul İş Birliği Etkinliği", desc: "Başarı hikayelerinin paylaşıldığı ve yeni ağların kurulduğu final lansmanı." },
];

export default function Program() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        label="Program"
        title="Program Akışı"
        description={
          <>
            Kurumları ve startupları ortak bir zeminde buluşturan yapılandırılmış sürecimiz. Program hakkında
            genel bilgi için{" "}
            <Link href="/#program" className="underline hover:text-white transition-colors">
              ana sayfaya
            </Link>{" "}
            dönebilirsiniz.
          </>
        }
      />

      <section className="z-section bg-white">
        <div className="z-container">
          <SectionIntro
            index="01"
            label="Takvim"
            title="Faaliyet Planı"
            description="Program boyunca gerçekleştirilecek ana etkinlikler."
            accent="purple"
          />

          <div className="border-t border-gray-200">
            {timelineItems.map((item) => (
              <div key={item.no} className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-gray-200">
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
                  <span className={`text-4xl md:text-5xl font-extrabold leading-none ${item.accent.split(" ")[0]}`}>
                    {item.no}
                  </span>
                </div>
                <div className={`md:col-span-10 md:border-l-2 md:pl-8 ${item.accent.split(" ")[1]}`}>
                  <h3 className="text-xl font-bold text-zemin-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
