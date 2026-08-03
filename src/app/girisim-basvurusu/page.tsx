'use client';

import { useEffect } from 'react';
import { GIRISIM_APPLICATION_URL } from '../../lib/links';

// Girişim başvuruları artık Airtable formu üzerinden alınıyor.
// Statik dışa aktarımda sunucu tarafı yönlendirme yapılamadığı için istemci
// tarafında yönlendiriyor; JS çalışmazsa görünen bağlantı devrede kalır.
export default function GirisimBasvurusuPage() {
  useEffect(() => {
    window.location.replace(GIRISIM_APPLICATION_URL);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] px-6 text-center gap-3">
      <p className="text-gray-500">Girişim başvuru formuna yönlendiriliyorsunuz…</p>
      <a
        href={GIRISIM_APPLICATION_URL}
        className="text-sm font-bold uppercase tracking-wider text-zemin-turquoise hover:text-zemin-purple transition-colors"
      >
        Form açılmadıysa tıklayın →
      </a>
    </div>
  );
}
