"use client";

import { useSyncExternalStore } from "react";

interface HackathonCountdownProps {
  /** Hedef tarih (ISO) — örn. "2026-08-03T00:00:00+03:00" */
  target: string;
  /** Geri sayım üstündeki küçük etiket */
  label: string;
  /** Hedef tarih geçince gösterilecek metin */
  passedText: string;
  /** Hero içine gömülen küçük varyant */
  compact?: boolean;
  /** Yerleştiği zeminin tonu: koyu zeminde açık mürekkep, açık zeminde koyu. */
  tone?: "dark" | "light";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diff(target: number, now: number): TimeLeft | null {
  const total = target - now;
  if (total <= 0) return null;
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

/** Saniyede bir tetiklenen zaman kaynağı; sunucuda null döner (hydration uyumu için). */
function subscribeToSeconds(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}
const getSeconds = () => Math.floor(Date.now() / 1000);
const getServerSeconds = () => null;

export default function HackathonCountdown({
  target,
  label,
  passedText,
  compact = false,
  tone = "dark",
}: HackathonCountdownProps) {
  const targetMs = new Date(target).getTime();
  const nowSec = useSyncExternalStore<number | null>(subscribeToSeconds, getSeconds, getServerSeconds);

  // İlk sunucu render'ında ve hydration sırasında nowSec null olur; o anda "--" gösterilir.
  const mounted = nowSec !== null;
  const timeLeft = mounted ? diff(targetMs, nowSec * 1000) : null;

  const units = [
    { value: timeLeft?.days, label: "Gün" },
    { value: timeLeft?.hours, label: "Saat" },
    { value: timeLeft?.minutes, label: "Dakika" },
    { value: timeLeft?.seconds, label: "Saniye" },
  ];

  if (compact) {
    const light = tone === "light";
    const box = light
      ? "border-zemin-dark/10 bg-zemin-dark/[0.06]"
      : "border-white/15 bg-white/[0.07] shadow-2xl shadow-black/20";
    const cell = light ? "bg-zemin-dark/10" : "bg-white/10";
    const ink = light ? "text-zemin-dark" : "text-white";
    const muted = light ? "text-zemin-dark/60" : "text-purple-200";

    return (
      <div className={`rounded-2xl border backdrop-blur-sm p-4 sm:p-6 ${box}`}>
        <p className={`text-[10px] font-bold uppercase tracking-[0.18em] text-center mb-4 ${muted}`}>{label}</p>
        {mounted && !timeLeft ? (
          <p className={`text-xl font-extrabold text-center py-4 ${ink}`}>{passedText}</p>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {units.map((u) => (
              <div key={u.label} className="flex flex-col items-center">
                <div className={`w-full rounded-xl py-3 sm:py-4 ${cell}`}>
                  <span className={`block text-center text-2xl sm:text-4xl font-extrabold tabular-nums leading-none ${ink}`}>
                    {mounted ? String(u.value ?? 0).padStart(2, "0") : "--"}
                  </span>
                </div>
                <span className={`mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] ${muted}`}>
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-zemin-blue rounded-3xl px-6 py-12 md:py-16 text-center overflow-hidden">
      <p className="text-purple-200 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">{label}</p>

      {mounted && !timeLeft ? (
        <p className="text-2xl md:text-3xl font-extrabold text-white">{passedText}</p>
      ) : (
        <div className="flex justify-center gap-3 sm:gap-6">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tabular-nums leading-none">
                {mounted ? String(u.value ?? 0).padStart(2, "0") : "--"}
              </span>
              <span className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-purple-200">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
