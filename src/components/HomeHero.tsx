import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="min-h-[70vh] md:min-h-[75vh] grid md:grid-cols-[minmax(128px,16%)_1fr] gap-4 md:gap-6 p-4 md:p-6">
      <div className="hidden md:block bg-white rounded-3xl overflow-hidden">
        <img
          src="/icons/banner_dikey4.webp"
          alt=""
          className="h-full w-full object-cover object-left"
        />
      </div>

      <div className="relative bg-zemin-blue rounded-3xl overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #fff 0, #fff 2px, transparent 2.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <h1 className="relative text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mb-6">
          Kurumsal Şirketler ve Startuplar İçin Yeni Nesil İş Birliği Zemini
        </h1>

        <p className="relative text-base md:text-lg text-purple-200 font-light leading-relaxed max-w-2xl mb-10">
          İstanbul&apos;un inovasyon potansiyelini harekete geçiriyoruz. Startupların çevikliğini kurumsal
          şirketlerin gücüyle birleştirerek sürdürülebilir ve ölçülebilir başarı hikayeleri yaratıyoruz.
        </p>

        <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            href="/#basvur"
            className="inline-block bg-zemin-orange text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-zemin-blue transition-colors text-center"
          >
            Programa Başvur
          </Link>
          <Link
            href="/program"
            className="inline-block border border-white/40 text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
          >
            Program Akışı
          </Link>
        </div>
      </div>
    </section>
  );
}
