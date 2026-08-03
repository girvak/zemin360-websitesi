'use client';

import { useState } from 'react';
import PageHero from '../../components/ui/PageHero';
import SectionIntro from '../../components/ui/SectionIntro';
import { FormField, FormInput, FormTextarea } from '../../components/ui/FormField';
import { CONTACT_EMAIL, openMailto } from '../../lib/mailto';

export default function IletisimForm() {
  const [formData, setFormData] = useState({ ad: '', email: '', kurum: '', mesaj: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      `Ad Soyad: ${formData.ad}`,
      `E-posta: ${formData.email}`,
      formData.kurum ? `Kurum / Girişim: ${formData.kurum}` : null,
      '',
      'Mesaj:',
      formData.mesaj,
    ].filter(Boolean).join('\n');

    openMailto('Zemin360 İletişim', body);
    setStatus('success');
    setFormData({ ad: '', email: '', kurum: '', mesaj: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const contactItems = [
    {
      label: "Adres",
      accent: "text-zemin-purple",
      content: (
        <>
          <strong className="text-zemin-dark block mb-1">Türkiye Girişimcilik Vakfı (GİRVAK)</strong>
          Esentepe, Ferko Signature<br />
          Büyükdere Cd. No:175<br />
          34340 Beşiktaş / İstanbul
        </>
      ),
    },
    {
      label: "E-posta",
      accent: "text-zemin-orange",
      content: (
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-zemin-orange transition-colors">
          {CONTACT_EMAIL}
        </a>
      ),
    },
    {
      label: "Telefon",
      accent: "text-zemin-turquoise",
      content: (
        <a href="tel:+902122811014" className="hover:text-zemin-turquoise transition-colors">
          +90 212 281 10 14
        </a>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        label="İletişim"
        title="Bize Ulaşın"
        description="Zemin360 projesi ile ilgili tüm sorularınız ve iş birliği önerileriniz için bizimle iletişime geçebilirsiniz."
      />

      <section className="z-section bg-zemin-light">
        <div className="z-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 bg-white border border-gray-200 p-8 md:p-12">
              <SectionIntro
                index="01"
                label="Mesaj"
                title="İletişim Formu"
                description="Formu doldurduktan sonra e-posta uygulamanız açılır."
                accent="purple"
              />

              <form onSubmit={handleSubmit} className="space-y-8 mt-2">
                <FormField label="Ad Soyad" htmlFor="ad" required>
                  <FormInput required type="text" id="ad" value={formData.ad} onChange={handleChange} placeholder="Adınız Soyadınız" />
                </FormField>

                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField label="E-posta" htmlFor="email" required>
                    <FormInput required type="email" id="email" value={formData.email} onChange={handleChange} placeholder="ornek@sirket.com" />
                  </FormField>
                  <FormField label="Kurum / Girişim" htmlFor="kurum">
                    <FormInput type="text" id="kurum" value={formData.kurum} onChange={handleChange} placeholder="Şirketiniz" />
                  </FormField>
                </div>

                <FormField label="Mesajınız" htmlFor="mesaj" required>
                  <FormTextarea required id="mesaj" value={formData.mesaj} onChange={handleChange} rows={5} placeholder="Size nasıl yardımcı olabiliriz?" />
                </FormField>

                <button
                  type="submit"
                  className={`w-full sm:w-auto px-10 py-4 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer
                    ${status === 'idle' ? 'bg-zemin-orange text-white hover:bg-zemin-purple' : 'bg-green-600 text-white'}
                  `}
                >
                  {status === 'idle' ? 'E-posta ile Gönder' : 'E-posta uygulamanız açıldı'}
                </button>

                <p className="text-xs text-gray-500">
                  Gönder butonuna bastığınızda varsayılan e-posta uygulamanız açılır ve mesajınız {CONTACT_EMAIL} adresine yönlendirilir.
                </p>
              </form>
            </div>

            <div className="lg:col-span-5">
              <SectionIntro
                index="02"
                label="Lokasyon"
                title="Adres & İletişim"
                accent="purple"
              />

              <div className="space-y-0 border-t border-gray-200">
                {contactItems.map((item) => (
                  <div key={item.label} className="py-6 border-b border-gray-200">
                    <p className={`z-label mb-2 ${item.accent}`}>{item.label}</p>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.content}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-56 md:h-72 border border-gray-200 overflow-hidden relative">
                <iframe
                  src="https://maps.google.com/maps?q=Ferko%20Signature,%20B%C3%BCy%C3%BCkdere%20Cd.%20No:175,%20Be%C5%9Fikta%C5%9F/%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[30%] contrast-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
