import HackathonCountdown from "./HackathonCountdown";
import ParticleField from "./ParticleField";
import { HACKATHON_APPLICATION_URL } from "../lib/links";
import { HACKATHON_DEADLINE, HACKATHON_EVENT_DATES } from "../lib/hackathon";

/**
 * Hero kompozisyonunun alt satırı — turkuaz kutu.
 * Üst kenarın ortasından taşan yuvarlak başvuru sticker'ı taşımak için kök
 * öğede overflow-hidden yok; dekoratif katmanlar kendi kırpılan sarmalında.
 */
export default function HackathonStrip() {
  return (
    // pt-[104px]: sticker'ın kutu içinde kalan ~101px'i metnin üstüne binmesin
    // diye. Yalnızca xl'den itibaren metin solda / sayaç sağda dizildiği için
    // sticker ortadaki boşluğa düşüyor ve ek boşluk gerekmiyor.
    <div className="relative bg-zemin-turquoise text-zemin-dark rounded-3xl px-6 md:px-10 pt-[104px] xl:pt-8 pb-7 md:pb-8">
      {/* dekoratif katmanlar kutunun içinde kırpılır */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="z-dots-anim absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at center, #1F2937 0, #1F2937 2px, transparent 2.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <ParticleField />
        <div className="absolute -bottom-32 -right-20 w-[320px] h-[320px] rounded-full bg-zemin-purple/20 blur-3xl" />
      </div>

      {/* Yuvarlak başvuru sticker'ı — üst kenardan taşar */}
      <a
        href={HACKATHON_APPLICATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hemen hackathona başvur"
        className="group absolute left-1/2 -top-6 md:-top-9 z-20 -translate-x-1/2 grid place-items-center
                   w-28 h-28 md:w-36 md:h-36 rounded-full bg-zemin-orange text-white
                   ring-4 ring-white/85 shadow-xl shadow-zemin-dark/25
                   [text-shadow:0_1px_2px_rgb(31_41_55_/_0.35)]
                   rotate-[-8deg] transition-transform duration-300 ease-out
                   hover:rotate-0 hover:scale-105 focus-visible:outline-none focus-visible:rotate-0 focus-visible:scale-105"
      >
        {/* dikkat çeken nabız halkası */}
        <span aria-hidden className="z-badge-pulse pointer-events-none absolute inset-0 rounded-full" />
        {/* yavaş dönen kesikli halka */}
        <span
          aria-hidden
          className="z-badge-ring pointer-events-none absolute inset-[7px] rounded-full border-2 border-dashed border-white/55"
        />
        <span className="relative flex flex-col items-center leading-none">
          {/* tam beyaz: white/75 bu boyutta 3.42:1 kalıyordu, hiyerarşiyi
              punto ve harf aralığı taşıyor */}
          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.22em] text-white">
            Hemen
          </span>
          <span className="mt-1 text-[10px] md:text-xs font-extrabold uppercase tracking-tight text-white">
            Hackathona
          </span>
          <span className="mt-0.5 text-sm md:text-xl font-extrabold uppercase tracking-tight text-white">
            Başvur
          </span>
          {/* ince, yuvarlak uçlu ok — metin glifi yerine SVG */}
          <svg
            aria-hidden
            viewBox="0 0 26 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-2 w-5 md:w-6 text-white/90 transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            <path d="M1 4h23M20.5 1 24 4l-3.5 3" />
          </svg>
        </span>
      </a>

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
        <div className="min-w-0">
          <p className="text-zemin-dark/70 text-[11px] font-bold uppercase tracking-[0.2em] mb-2.5 border-l-2 border-zemin-dark/40 pl-3">
            Hackathon · {HACKATHON_EVENT_DATES} · İstanbul
          </p>
          <h2 className="text-lg md:text-2xl font-extrabold tracking-tight leading-snug">
            200.000 TL platform geliştirme bütçesi
          </h2>
          <p className="text-zemin-dark/70 text-sm leading-relaxed mt-2 max-w-lg">
            Üç gün, açık kaynak bir platform ve gerçek bir ürünü hayata geçirme fırsatı.
          </p>
        </div>

        {/* sayaç sağ kenara sabit */}
        <div className="w-full sm:w-[320px] shrink-0">
          <HackathonCountdown
            target={HACKATHON_DEADLINE}
            label="Son başvuruya"
            passedText="Başvurular kapandı"
            compact
            tone="light"
          />
        </div>
      </div>
    </div>
  );
}
