import HackathonStrip from "./HackathonStrip";
import HeroActions from "./HeroActions";
import ParticleField from "./ParticleField";

/**
 * Ana sayfa açılış kompozisyonu — tek ızgara, dört kutu:
 *   banner (iki satır) · başlık kutusu (mor) · eylem kutusu (turuncu)
 *   alt satırda hackathon kutusu (turkuaz, iki kolon)
 * Markanın üç rengi böylece kompozisyonun üç ayrı kutusuna dağılıyor.
 */
export default function HomeHero() {
  return (
    <section className="p-4 md:p-6 md:min-h-[80vh] grid gap-4 md:gap-6 md:grid-cols-[minmax(130px,15%)_1fr_minmax(230px,23%)] md:grid-rows-[1fr_auto]">
      {/* Banner 700x2150 (oran ~0.33). Kolon genişliği bu orana yakın tutulur ki
          object-cover kırpması en aza insin; kalan kırpma object-center ile
          iki yana eşit dağılır — object-left tek taraftan kesip kaydırıyordu. */}
      <div className="hidden md:block md:row-span-2 bg-white rounded-3xl overflow-hidden">
        <img
          src="/icons/banner_dikey4.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Başlık kutusu — mor tonlar */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zemin-blue via-zemin-blue to-zemin-purple flex flex-col justify-center px-6 md:px-12 lg:px-14 py-14 md:py-16">
        <div
          aria-hidden
          className="z-dots-anim pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #fff 0, #fff 2px, transparent 2.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <ParticleField />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-24 w-[380px] h-[380px] rounded-full bg-zemin-turquoise/20 blur-3xl"
        />

        <h1 className="relative text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-2xl mb-6">
          Kurumsal Şirketler ve Startuplar İçin Yeni Nesil İş Birliği Zemini
        </h1>
        <p className="relative text-base md:text-lg text-purple-200 font-light leading-relaxed max-w-xl">
          İstanbul&apos;un inovasyon potansiyelini harekete geçiriyoruz. Startupların çevikliğini kurumsal
          şirketlerin gücüyle birleştirerek sürdürülebilir ve ölçülebilir başarı hikayeleri yaratıyoruz.
        </p>
      </div>

      {/* Eylem kutusu — turuncu tonlar */}
      <HeroActions />

      {/* Hackathon kutusu — turkuaz, alt satırın tamamı */}
      <div className="md:col-span-2">
        <HackathonStrip />
      </div>
    </section>
  );
}
