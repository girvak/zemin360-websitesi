'use client';

import { useState } from 'react';
import PageHero from '../../components/ui/PageHero';
import SectionIntro from '../../components/ui/SectionIntro';
import { FormField, FormInput, FormTextarea } from '../../components/ui/FormField';
import { openMailto } from '../../lib/mailto';

export default function GirisimForm() {
  const [formData, setFormData] = useState({
    girisimAdi: '',
    adSoyad: '',
    email: '',
    webSitesi: '',
    faturaKeser: false,
    aciklama: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      'Zemin360 Girişim Başvurusu',
      '',
      `Girişim Adı: ${formData.girisimAdi}`,
      `Web Sitesi: ${formData.webSitesi}`,
      `İlgili Kişi: ${formData.adSoyad}`,
      `E-Posta: ${formData.email}`,
      `Fatura Kesebiliyor mu?: ${formData.faturaKeser ? 'Evet' : 'Hayır'}`,
      '',
      'Çözüm / Ürün:',
      formData.aciklama,
    ].join('\n');

    openMailto('Zemin360 Girişim Başvurusu', body);
    setStatus('success');
    setFormData({ girisimAdi: '', adSoyad: '', email: '', webSitesi: '', faturaKeser: false, aciklama: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        label="Başvuru"
        title="Girişim Başvurusu"
        description="Çözümünüzü kurumsal şirketlerin gücüyle buluşturun, B2B pazarında ölçeklenme fırsatı yakalayın."
      />

      <section className="z-section bg-zemin-light flex-grow">
        <div className="z-container max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <SectionIntro
                index="01"
                label="Başvuru"
                title="Girişiminizi tanıtın"
                description="Formu doldurduktan sonra e-posta uygulamanız açılır. Mesajı göndererek başvurunuzu iletebilirsiniz."
                accent="purple"
                compact
              />
              <ol className="space-y-4 border-t border-gray-200 pt-6">
                {[
                  "Girişim ve iletişim bilgilerinizi doldurun",
                  "Çözümünüzü kısaca açıklayın",
                  "E-posta ile başvurunuzu gönderin",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="z-step-num">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </aside>

            <div className="lg:col-span-8 bg-white border border-gray-200 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField label="Girişim Adı" htmlFor="girisimAdi" required>
                    <FormInput required type="text" id="girisimAdi" value={formData.girisimAdi} onChange={handleChange} placeholder="Girişiminizin adı" />
                  </FormField>
                  <FormField label="Web Sitesi" htmlFor="webSitesi" required>
                    <FormInput required type="text" id="webSitesi" value={formData.webSitesi} onChange={handleChange} placeholder="www.girisiminiz.com" />
                  </FormField>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField label="İlgili Kişi" htmlFor="adSoyad" required>
                    <FormInput required type="text" id="adSoyad" value={formData.adSoyad} onChange={handleChange} placeholder="Ad Soyad" />
                  </FormField>
                  <FormField label="E-Posta" htmlFor="email" required>
                    <FormInput required type="email" id="email" value={formData.email} onChange={handleChange} placeholder="ornek@girisiminiz.com" />
                  </FormField>
                </div>

                <FormField
                  label="Fatura Kesme Yetkinliği"
                  htmlFor="faturaKeser"
                  required
                  hint="Kurumsal POC ve satın alma süreçleri için fatura kesebilme yetkinliği gereklidir."
                >
                  <label htmlFor="faturaKeser" className="flex items-start gap-3 cursor-pointer select-none pt-1">
                    <input
                      type="checkbox"
                      id="faturaKeser"
                      checked={formData.faturaKeser}
                      onChange={(e) => setFormData(prev => ({ ...prev, faturaKeser: e.target.checked }))}
                      className="w-4 h-4 mt-0.5 rounded border-gray-300 text-zemin-turquoise focus:ring-zemin-turquoise cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      Evet, şirketimiz var ve fatura kesebiliyoruz.
                    </span>
                  </label>
                </FormField>

                <FormField label="Çözüm / Ürün Açıklaması" htmlFor="aciklama" required>
                  <FormTextarea
                    required
                    id="aciklama"
                    value={formData.aciklama}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hangi problemi çözüyorsunuz? Kurumsal şirketlere sunduğunuz değer önerisi nedir?"
                  />
                </FormField>

                <button
                  type="submit"
                  className={`w-full sm:w-auto px-10 py-4 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer
                    ${status === 'idle' ? 'bg-zemin-turquoise text-white hover:bg-zemin-dark' : 'bg-green-600 text-white'}
                  `}
                >
                  {status === 'idle' ? 'E-posta ile Başvur' : 'E-posta uygulamanız açıldı'}
                </button>

                {status === 'success' && (
                  <p className="text-sm text-green-700 font-medium">
                    E-posta uygulamanızdan mesajı göndererek başvurunuzu tamamlayın.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
