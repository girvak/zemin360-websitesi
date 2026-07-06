'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjeDetayiRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/program');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[40vh] px-6">
      <p className="text-gray-500">Program sayfasına yönlendiriliyorsunuz…</p>
    </div>
  );
}
