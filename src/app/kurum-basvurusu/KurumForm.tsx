'use client';

import { useState } from 'react';
import PageHero from '../../components/ui/PageHero';
import SectionIntro from '../../components/ui/SectionIntro';
import { FormField, FormInput, FormTextarea, FormSelect } from '../../components/ui/FormField';
import { openMailto } from '../../lib/mailto';

export default function KurumForm() {
  const [formData, setFormData] = useState({
    kurumAdi: '',
    adSoyad: '',
    email: '',
    webSitesi: '',
    departman: 'İnovasyon',
    mesaj: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      'Zemin360 Kurum Başvurusu',
      '',
      `Kurum Adı: ${formData.kurumAdi}`,
      `Web Sitesi: ${formData.webSitesi || '-'}`,
      `İlgili Kişi: ${formData.adSoyad}`,
      `E-Posta: ${formData.email}`,
      `Departman: ${formData.departman}`,
      '',
      'Programdan Beklenti:',
      formData.mesaj,
    ].join('\n');

    openMailto('Zemin360 Kurum Başvurusu', body);
    setStatus('success');
    setFormData({ kurumAdi: '', adSoyad: '', email: '', webSitesi: '', departman: 'İnovasyon', mesaj: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        label="Başvuru"
        title="Kurum Başvurusu"
        description="İnovasyon yolculuğunuzda startuplarla güçlü iş birlikleri kurmak için ilk adımı atın."
      />

      <section className="z-section bg-zemin-light flex-grow">
        <div className="z-container max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <SectionIntro
                index="01"
                label="Başvuru"
                title="Kurumunuzu programa dahil edin"
                description="Formu doldurduktan sonra e-posta uygulamanız açılır. Mesajı göndererek başvurunuzu iletebilirsiniz."
                accent="purple"
                compact
              />
              <ol className="space-y-4 border-t border-gray-200 pt-6">
                {[
                  "Kurum ve iletişim bilgilerinizi paylaşın",
                  "Programdan beklentilerinizi belirtin",
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
                  <FormField label="Kurum Adı" htmlFor="kurumAdi" required>
                    <FormInput required type="text" id="kurumAdi" value={formData.kurumAdi} onChange={handleChange} placeholder="Şirketinizin adı" />
                  </FormField>
                  <FormField label="Web Sitesi" htmlFor="webSitesi">
                    <FormInput type="text" id="webSitesi" value={formData.webSitesi} onChange={handleChange} placeholder="www.sirketiniz.com" />
                  </FormField>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField label="İlgili Kişi" htmlFor="adSoyad" required>
                    <FormInput required type="text" id="adSoyad" value={formData.adSoyad} onChange={handleChange} placeholder="Ad Soyad" />
                  </FormField>
                  <FormField label="E-Posta" htmlFor="email" required>
                    <FormInput required type="email" id="email" value={formData.email} onChange={handleChange} placeholder="ornek@sirketiniz.com" />
                  </FormField>
                </div>

                <FormField label="Departman" htmlFor="departman" required>
                  <FormSelect id="departman" value={formData.departman} onChange={handleChange}>
                    <option value="PR">PR / Kurumsal İletişim</option>
                    <option value="İnovasyon">İnovasyon</option>
                    <option value="Satın Alma">Satın Alma ve Tedarik Zinciri</option>
                    <option value="IK">People & Culture (IK)</option>
                    <option value="Etki ve Sürdürülebilirlik">Etki ve Sürdürülebilirlik</option>
                    <option value="Diğer">Diğer</option>
                  </FormSelect>
                </FormField>

                <FormField label="Programdan Beklentiniz" htmlFor="mesaj" required>
                  <FormTextarea
                    required
                    id="mesaj"
                    value={formData.mesaj}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hangi alanlarda inovasyona ihtiyaç duyuyorsunuz? Startuplarla çalışma hedefleriniz nelerdir?"
                  />
                </FormField>

                <button
                  type="submit"
                  className={`w-full sm:w-auto px-10 py-4 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer
                    ${status === 'idle' ? 'bg-zemin-orange text-white hover:bg-zemin-dark' : 'bg-green-600 text-white'}
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
