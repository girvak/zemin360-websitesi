import AccentPanel from "./AccentPanel";

interface BenefitColumnsProps {
  girisimItems: string[];
  kurumItems: string[];
  kurumFirst?: boolean;
}

function BenefitPanel({
  label,
  items,
  labelClass,
  numClass,
}: {
  label: string;
  items: string[];
  labelClass: string;
  numClass: string;
}) {
  return (
    <AccentPanel className="h-full">
      <div className="mb-8 pb-5 border-b border-gray-200">
        <h3 className={`z-panel-title ${labelClass}`}>{label}</h3>
      </div>
      <ol className="space-y-6">
        {items.map((text, i) => (
          <li key={i} className="flex gap-4 items-start">
            <span className={`text-sm font-extrabold tabular-nums shrink-0 pt-0.5 ${numClass}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-gray-600 leading-relaxed">{text}</span>
          </li>
        ))}
      </ol>
    </AccentPanel>
  );
}

export default function BenefitColumns({ girisimItems, kurumItems, kurumFirst = false }: BenefitColumnsProps) {
  const kurumPanel = (
    <BenefitPanel
      label="Kurumlar"
      items={kurumItems}
      labelClass="text-zemin-orange"
      numClass="text-zemin-orange"
    />
  );

  const girisimPanel = (
    <BenefitPanel
      label="Girişimler"
      items={girisimItems}
      labelClass="text-zemin-turquoise"
      numClass="text-zemin-turquoise"
    />
  );

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {kurumFirst ? (
        <>
          {kurumPanel}
          {girisimPanel}
        </>
      ) : (
        <>
          {girisimPanel}
          {kurumPanel}
        </>
      )}
    </div>
  );
}
