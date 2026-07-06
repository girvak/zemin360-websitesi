type Accent = "purple" | "orange" | "turquoise" | "blue";

const accentText: Record<Accent, string> = {
  purple: "text-zemin-purple",
  orange: "text-zemin-orange",
  turquoise: "text-zemin-turquoise",
  blue: "text-zemin-blue",
};

interface StatItem {
  value: string;
  label: string;
  note?: string;
  accent: Accent;
}

interface StatStripProps {
  items: StatItem[];
}

export default function StatStrip({ items }: StatStripProps) {
  return (
    <div className="grid sm:grid-cols-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
      {items.map((item) => (
        <div key={item.label} className="py-10 px-6 md:px-10">
          <div className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-2 ${accentText[item.accent]}`}>
            {item.value}
          </div>
          <div className="font-bold text-zemin-dark text-lg">{item.label}</div>
          {item.note && <div className="text-sm text-gray-500 mt-1">{item.note}</div>}
        </div>
      ))}
    </div>
  );
}
