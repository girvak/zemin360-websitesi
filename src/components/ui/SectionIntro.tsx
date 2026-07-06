import type { ReactNode } from "react";

type Accent = "purple" | "orange" | "turquoise" | "blue";

const accentMap: Record<Accent, string> = {
  purple: "text-zemin-purple border-zemin-purple",
  orange: "text-zemin-orange border-zemin-orange",
  turquoise: "text-zemin-turquoise border-zemin-turquoise",
  blue: "text-zemin-blue border-zemin-blue",
};

interface SectionIntroProps {
  index?: string;
  label: string;
  title: string;
  description?: ReactNode;
  accent?: Accent;
  compact?: boolean;
}

export default function SectionIntro({
  index,
  label,
  title,
  description,
  accent = "purple",
  compact = false,
}: SectionIntroProps) {
  return (
    <div className={`max-w-3xl ${compact ? "mb-8" : "mb-12 md:mb-16"}`}>
      <div className="flex items-center gap-4 mb-5">
        {index && (
          <span className={`font-extrabold text-4xl md:text-5xl leading-none opacity-20 ${accentMap[accent].split(" ")[0]}`}>
            {index}
          </span>
        )}
        <span className={`z-label border-l-2 pl-3 ${accentMap[accent]}`}>{label}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-zemin-dark tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
