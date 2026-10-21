# Cloudflare Pages ile yayın

Site tamamen statik (`next.config.ts` → `output: "export"`), çıktı `out/` dizinine yazılır.
Başlıklar `public/_headers`, yönlendirmeler `public/_redirects` dosyasındadır; derlemede `out/`'a kopyalanırlar.

## A) Git entegrasyonu (önerilen)

Cloudflare panel → Workers & Pages → Create → Pages → Connect to Git → bu depo:

| Ayar | Değer |
| --- | --- |
| Framework preset | None (Next.js preset'i seçmeyin; o sunucu modunu hedefler) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Production branch | `main` |
| Ortam değişkeni (isteğe bağlı) | `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` |

Node sürümü `.node-version` dosyasından (22) okunur. `main`'e her push yayına, diğer dallar önizlemeye gider.

## B) Komut satırından

```bash
npx wrangler login      # bir kez
npm run deploy          # derler ve out/'u "zemin360" Pages projesine yükler
npm run preview         # Pages çalışma ortamını yerelde açar (http://localhost:8788)
```

## Alan adı

Pages projesi → Custom domains → `zemin360.com` ve `www.zemin360.com` ekleyin.
`www` → apex yönlendirmesi için: Rules → Redirect Rules (veya Bulk Redirects), `www.zemin360.com/*` → `https://zemin360.com/${1}`, 301.
`_redirects` alan adına göre yönlendirme yapamaz, bu yüzden bu kural panelden verilir.
