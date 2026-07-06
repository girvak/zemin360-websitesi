// Sunucu bileşeni — yapısal veriyi (schema.org JSON-LD) sayfaya gömer.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
