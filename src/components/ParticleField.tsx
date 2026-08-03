type Particle = {
  left: string;
  top: string;
  size: number;
  dx: string;
  dy: string;
  dur: string;
  delay: string;
  color: Renk;
  opacity: number;
};

type Renk = "turkuaz" | "mor" | "turuncu" | "beyaz";

// Markanın üç rengi (+ renkli zeminlerde kullanılan beyaz).
const RENK: Record<Renk, string> = {
  turkuaz: "var(--color-zemin-turquoise)",
  mor: "var(--color-zemin-purple)",
  turuncu: "var(--color-zemin-orange)",
  beyaz: "#ffffff",
};

// Sabit liste: Math.random() sunucu/istemci uyuşmazlığı yaratacağı için
// konumlar elle dağıtıldı. Süreler birbirine bölünmeyen değerler ki
// parçacıklar aynı anda tekrarlamasın.
const PARTICLES: Particle[] = [
  { left: "6%", top: "72%", size: 7, dx: "18px", dy: "-150px", dur: "17s", delay: "0s", color: "turkuaz", opacity: 0.55 },
  { left: "13%", top: "88%", size: 4, dx: "-14px", dy: "-190px", dur: "23s", delay: "2.4s", color: "mor", opacity: 0.5 },
  { left: "21%", top: "64%", size: 10, dx: "26px", dy: "-120px", dur: "19s", delay: "5.1s", color: "turuncu", opacity: 0.32 },
  { left: "28%", top: "92%", size: 5, dx: "10px", dy: "-210px", dur: "26s", delay: "1.2s", color: "turkuaz", opacity: 0.6 },
  { left: "35%", top: "58%", size: 6, dx: "-22px", dy: "-140px", dur: "21s", delay: "7.3s", color: "mor", opacity: 0.45 },
  { left: "43%", top: "80%", size: 8, dx: "16px", dy: "-170px", dur: "18s", delay: "3.6s", color: "turkuaz", opacity: 0.5 },
  { left: "50%", top: "95%", size: 4, dx: "-12px", dy: "-200px", dur: "24s", delay: "9.8s", color: "turuncu", opacity: 0.35 },
  { left: "57%", top: "68%", size: 9, dx: "22px", dy: "-130px", dur: "20s", delay: "0.7s", color: "mor", opacity: 0.42 },
  { left: "64%", top: "86%", size: 5, dx: "-18px", dy: "-180px", dur: "27s", delay: "4.9s", color: "turkuaz", opacity: 0.58 },
  { left: "71%", top: "60%", size: 7, dx: "14px", dy: "-155px", dur: "22s", delay: "8.2s", color: "turuncu", opacity: 0.3 },
  { left: "78%", top: "90%", size: 6, dx: "-20px", dy: "-195px", dur: "19s", delay: "2.1s", color: "mor", opacity: 0.48 },
  { left: "85%", top: "70%", size: 11, dx: "24px", dy: "-125px", dur: "25s", delay: "6.4s", color: "turkuaz", opacity: 0.4 },
  { left: "92%", top: "84%", size: 4, dx: "-10px", dy: "-175px", dur: "23s", delay: "10.6s", color: "mor", opacity: 0.52 },
  { left: "17%", top: "50%", size: 5, dx: "20px", dy: "-110px", dur: "28s", delay: "5.8s", color: "turkuaz", opacity: 0.35 },
  { left: "46%", top: "46%", size: 4, dx: "-16px", dy: "-100px", dur: "26s", delay: "11.4s", color: "turuncu", opacity: 0.26 },
  { left: "74%", top: "48%", size: 6, dx: "12px", dy: "-115px", dur: "24s", delay: "3.1s", color: "mor", opacity: 0.33 },
];

/**
 * Kart zeminine yerleşen dekoratif parçacık katmanı.
 * pointer-events-none: tıklamaları engellemez. Hareket hassasiyeti açık olan
 * kullanıcılarda globals.css'teki prefers-reduced-motion bloğu animasyonu durdurur.
 */
export default function ParticleField({
  className = "",
  palette,
}: {
  className?: string;
  /** Zemine göre renk seti; verilmezse parçacığın kendi rengi kullanılır.
   *  Örn. turuncu kutuda turuncu parçacık kaybolacağı için palet verilir. */
  palette?: Renk[];
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {PARTICLES.map((p, i) => {
        const renk = RENK[palette ? palette[i % palette.length] : p.color];
        return (
        <span
          key={i}
          className="z-particle"
          style={
            {
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: renk,
              boxShadow: `0 0 ${p.size * 2}px ${renk}`,
              "--p-dx": p.dx,
              "--p-dy": p.dy,
              "--p-dur": p.dur,
              "--p-delay": p.delay,
              "--p-opacity": p.opacity,
            } as React.CSSProperties
          }
        />
        );
      })}
    </div>
  );
}
