'use client';

import { useEffect } from 'react';
import { KURUM_APPLICATION_URL } from '../../lib/links';

// Kurum başvuruları artık Airtable formu üzerinden alınıyor.
// Statik dışa aktarımda sunucu tarafı yönlendirme yapılamadığı için istemci
// tarafında yönlendiriyor; JS çalışmazsa görünen bağlantı devrede kalır.
export default function KurumBasvurusuPage() {
  useEffect(() => {
    window.location.replace(KURUM_APPLICATION_URL);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] px-6 text-center gap-3">
      <p className="text-gray-500">Kurum başvuru formuna yönlendiriliyorsunuz…</p>
      <a
        href={KURUM_APPLICATION_URL}
        className="text-sm font-bold uppercase tracking-wider text-zemin-orange hover:text-zemin-purple transition-colors"
      >
        Form açılmadıysa tıklayın →
      </a>
    </div>
  );
}
