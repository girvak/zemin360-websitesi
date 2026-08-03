import type { EcosystemEntry } from "../../data/ecosystem";
import AccentPanel from "./AccentPanel";

function formatUrl(url: string) {
  if (!url || url === "#") return "#";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
}

interface DirectoryListProps {
  items: EcosystemEntry[];
  accent: "turquoise" | "orange";
  emptyHref: string;
  emptyLabel: string;
  fallbackIcon: string;
}

export default function DirectoryList({
  items,
  accent,
  emptyHref,
  emptyLabel,
  fallbackIcon,
}: DirectoryListProps) {
  const accentText = accent === "turquoise" ? "text-zemin-turquoise" : "text-zemin-orange";
  const accentBorder = accent === "turquoise" ? "border-l-zemin-turquoise" : "border-l-zemin-orange";

  if (items.length === 0) {
    return (
      <AccentPanel className="text-center">
        <p className="text-gray-600 mb-6 leading-relaxed">
          Katılımcılar yakında açıklanacaktır. Siz de ekosisteme dahil olmak istiyorsanız başvurun.
        </p>
        <a
          href={emptyHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block text-sm font-bold uppercase tracking-wider ${accentText} hover:text-zemin-purple transition-colors`}
        >
          {emptyLabel} →
        </a>
      </AccentPanel>
    );
  }

  return (
    <div className="border border-gray-200 bg-white">
      {items.map((item, index) => (
        <a
          key={index}
          href={formatUrl(item.webSitesi)}
          target="_blank"
          rel="noopener noreferrer"
          className={`z-directory-row group border-l-4 ${accentBorder} pl-4`}
        >
          <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-zemin-light border border-gray-100">
            {item.logo ? (
              <img src={item.logo} alt={item.isim} className="max-h-12 max-w-12 object-contain" />
            ) : (
              <img src={fallbackIcon} alt="" className="w-8 h-8 opacity-60" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-zemin-dark">{item.isim}</h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">{item.aciklama}</p>
          </div>
          <span className={`z-link-arrow ${accentText} opacity-0 group-hover:opacity-100 transition-opacity shrink-0 hidden sm:inline-flex`}>
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}
