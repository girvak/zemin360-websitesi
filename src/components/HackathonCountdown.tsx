"use client";

import { useEffect, useState } from "react";

interface HackathonCountdownProps {
  /** Hedef tarih (ISO) — örn. "2026-07-24T00:00:00+03:00" */
  target: string;
  /** Geri sayım üstündeki küçük etiket */
  label: string;
  /** Hedef tarih geçince gösterilecek metin */
  passedText: string;
  /** Hero içine gömülen küçük varyant */
  compact?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diff(target: number): TimeLeft | null {
  const total = target - Date.now();
  if (total <= 0) return null;
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function HackathonCountdown({ target, label, passedText, compact = false }: HackathonCountdownProps) {
  const targetMs = new Date(target).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(diff(targetMs));
    const id = setInterval(() => setTimeLeft(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const units = [
    { value: timeLeft?.days, label: "Gün" },
    { value: timeLeft?.hours, label: "Saat" },
    { value: timeLeft?.minutes, label: "Dakika" },
    { value: timeLeft?.seconds, label: "Saniye" },
  ];

  if (compact) {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-sm p-4 sm:p-6 shadow-2xl shadow-black/20">
        {mounted && !timeLeft ? (
          <p className="text-xl font-extrabold text-white text-center py-4">{passedText}</p>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {units.map((u) => (
              <div key={u.label} className="flex flex-col items-center">
                <div className="w-full rounded-xl bg-white/10 py-3 sm:py-4">
                  <span className="block text-center text-2xl sm:text-4xl font-extrabold text-white tabular-nums leading-none">
                    {mounted ? String(u.value ?? 0).padStart(2, "0") : "--"}
                  </span>
                </div>
                <span className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-purple-200">
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
