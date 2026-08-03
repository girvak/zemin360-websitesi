'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HACKATHON_APPLICATION_URL } from '../lib/links';
import BasvurLink from './BasvurLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-12 w-44 overflow-hidden relative">
            <img src="/logos/zemin360.png" alt="Zemin360 Logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-auto" />
          </div>
        </Link>
        
        {/* Masaüstü Menü */}
        <nav className="hidden md:flex gap-6 font-medium text-sm text-zemin-dark">
          <Link href="/" className="hover:text-zemin-purple transition-colors">Ana Sayfa</Link>
          <Link href="/program" className="hover:text-zemin-purple transition-colors">Program</Link>
          <Link href="/hackathon" className="hover:text-zemin-purple transition-colors">Hackathon</Link>
          <Link href="/kurumlar-girisimler" className="hover:text-zemin-purple transition-colors">Kurumlar & Girişimler</Link>
          <Link href="/iletisim" className="hover:text-zemin-purple transition-colors">İletişim</Link>
        </nav>

        {/* Masaüstü Başvur Butonları & Mobil Hamburger İkonu */}
        <div className="flex items-center gap-3">
          <a href={HACKATHON_APPLICATION_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block bg-zemin-orange text-white px-4 py-2 font-bold text-xs uppercase tracking-wider hover:bg-zemin-purple transition-colors shadow-md">
            Hackathon Başvur
          </a>
          <BasvurLink className="hidden lg:inline-block border border-zemin-purple text-zemin-purple px-4 py-2 font-bold text-xs uppercase tracking-wider hover:bg-zemin-purple hover:text-white transition-colors">
            Programa Başvur
          </BasvurLink>
          
          {/* Mobil Menü Aç/Kapat Butonu (Sadece telefonda görünür) */}
          <button 
            className="md:hidden text-zemin-dark focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü (Tıklanınca aşağı doğru açılır) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl absolute w-full left-0 transition-all">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-zemin-dark hover:text-zemin-purple block py-2">Ana Sayfa</Link>
          <Link href="/program" onClick={() => setIsOpen(false)} className="font-bold text-zemin-dark hover:text-zemin-purple block py-2">Program</Link>
          <Link href="/hackathon" onClick={() => setIsOpen(false)} className="font-bold text-zemin-dark hover:text-zemin-purple block py-2">Hackathon</Link>
          <Link href="/kurumlar-girisimler" onClick={() => setIsOpen(false)} className="font-bold text-zemin-dark hover:text-zemin-purple block py-2">Kurumlar & Girişimler</Link>
          <Link href="/iletisim" onClick={() => setIsOpen(false)} className="font-bold text-zemin-dark hover:text-zemin-purple block py-2">İletişim</Link>
          
          <a href={HACKATHON_APPLICATION_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-zemin-orange text-white text-center px-5 py-3 font-bold text-sm uppercase tracking-wider mt-2 shadow-md">
            Hackathon Başvur
          </a>
          <BasvurLink onNavigate={() => setIsOpen(false)} className="border border-zemin-purple text-zemin-purple text-center px-5 py-3 font-bold text-sm uppercase tracking-wider shadow-sm">
            Programa Başvur
          </BasvurLink>
        </div>
      )}
    </header>
  );
}