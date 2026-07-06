import type { ReactNode } from "react";
import Link from "next/link";

interface PageHeroProps {
  label: string;
  title: string;
  description?: ReactNode;
  cta?: { href: string; label: string };
}

export default function PageHero({ label, title, description, cta }: PageHeroProps) {
  return (
    <section className="bg-zemin-blue text-white py-14 md:py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-purple-200 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 border-l-2 border-white/30 pl-3">
          {label}
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">{title}</h1>
        {description && (
          <div className="text-base md:text-lg text-purple-200 font-light max-w-2xl leading-relaxed mb-8">
            {description}
          </div>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="inline-block bg-zemin-orange text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-zemin-blue transition-colors"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
