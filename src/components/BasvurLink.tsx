'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

interface BasvurLinkProps {
  className?: string;
  children: ReactNode;
  /** Tıklamada ek iş (örn. mobil menüyü kapatmak) */
  onNavigate?: () => void;
}

/**
 * Footer'daki başvuru CTA'sına (#basvur) götüren bağlantı.
 * Ana sayfadayken yumuşak kaydırma yapar; başka sayfadayken normal gezinmeye bırakır.
 * next/link hash gezinmesinde CSS scroll-behavior'a güvenilmediği için kaydırmayı elle yapıyoruz.
 */
export default function BasvurLink({ className, children, onNavigate }: BasvurLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (window.location.pathname !== '/') return;
    const target = document.getElementById('basvur');
    if (!target) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    window.history.replaceState(null, '', '/#basvur');
  };

  return (
    <Link href="/#basvur" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
