import Link from "next/link";
import BasvurLink from "./BasvurLink";
import ParticleField from "./ParticleField";
import { HACKATHON_APPLICATION_URL } from "../lib/links";

// Mürekkep koyu: turuncu zeminde beyaz metin WCAG AA'yı geçmiyordu (2.71),
// koyu metin ~6.5:1 veriyor ve turkuaz kutuyla aynı dili kuruyor.
const ROW =
  "group relative flex items-center justify-between gap-4 py-4 border-b border-zemin-dark/25 last:border-b-0 " +
  "text-zemin-dark transition-colors duration-300 hover:border-zemin-dark/60 " +
  "focus-visible:outline-none focus-visible:border-zemin-dark";

// Soldan açılan vurgu zemini — satırın tıklanabilir olduğunu net gösterir.
const FILL =
  "pointer-events-none absolute -inset-x-3 inset-y-0.5 rounded-lg bg-zemin-dark/10 " +
  "origin-left scale-x-0 transition-transform duration-300 ease-out " +
  "group-hover:scale-x-100 group-focus-visible:scale-x-100";

// Metin ve ok birlikte sağa kayar; ok biraz daha ileri gider.
const TEXT = "relative transition-transform duration-300 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2";
const ARROW =
  "relative text-lg leading-none transition-transform duration-300 ease-out " +
  "group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5";

/**
 * Hero kompozisyonunun eylem kutusu — turuncu tonlarda, sayfanın tüm başvuru
 * çağrıları burada toplanır. Dolgulu blok yerine tipografik satırlar:
 * ince ayırıcı çizgi ve hover'da kayan ok.
 */
export default function HeroActions() {
  return (
    <div className="relative overflow-hidden bg-zemin-orange rounded-3xl px-6 md:px-8 py-7 md:py-8 flex flex-col justify-center">
      {/* yavaşça kayan nokta deseni — koyu mürekkebe uygun koyu noktalar */}
      <div
        aria-hidden
        className="z-dots-anim pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at center, #1F2937 0, #1F2937 2px, transparent 2.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* turuncu zeminde turuncu parçacık kaybolur; mor/turkuaz/beyaz kullanılır */}
      <ParticleField palette={["mor", "turkuaz", "beyaz"]} />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-16 w-[260px] h-[260px] rounded-full bg-white/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 w-[220px] h-[220px] rounded-full bg-zemin-purple/25 blur-3xl"
      />

      <div className="relative">
        <p className="text-zemin-dark/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          Başvuru
        </p>

        <a href={HACKATHON_APPLICATION_URL} target="_blank" rel="noopener noreferrer" className={ROW}>
          <span aria-hidden className={FILL} />
          <span className={`${TEXT} text-sm md:text-base font-extrabold uppercase tracking-wider`}>
            Hackathona Başvur
          </span>
          <span className={ARROW}>→</span>
        </a>

        <BasvurLink className={ROW}>
          <span aria-hidden className={FILL} />
          <span className={`${TEXT} text-sm md:text-base font-bold uppercase tracking-wider`}>
            Programa Başvur
          </span>
          <span className={ARROW}>→</span>
        </BasvurLink>

        <Link href="/hackathon" className={ROW}>
          <span aria-hidden className={FILL} />
          <span className={`${TEXT} text-xs md:text-sm font-bold uppercase tracking-wider text-zemin-dark/75`}>
            Hackathon Detayları
          </span>
          <span className={`${ARROW} text-zemin-dark/75`}>→</span>
        </Link>

        <Link href="/program" className={ROW}>
          <span aria-hidden className={FILL} />
          <span className={`${TEXT} text-xs md:text-sm font-bold uppercase tracking-wider text-zemin-dark/75`}>
            Program Akışı
          </span>
          <span className={`${ARROW} text-zemin-dark/75`}>→</span>
        </Link>
      </div>
    </div>
  );
}
