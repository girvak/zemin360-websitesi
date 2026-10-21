# Cloudflare Workers ile yayın

Site tamamen statik (`next.config.ts` → `output: "export"`), çıktı `out/` dizinine yazılır ve
Cloudflare Workers'ın statik varlık servisiyle yayınlanır (Worker kodu yok). Ayarlar `wrangler.toml`'da;
başlıklar `public/_headers`, yönlendirmeler `public/_redirects` dosyasındadır.

## A) Git entegrasyonu (önerilen)

Cloudflare panel → Workers & Pages → Create → Import a repository → bu depo:

| Ayar | Değer |
| --- | --- |
| Project name | `zemin360` (`wrangler.toml` içindeki `name` ile aynı olmalı) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Production branch | `main` |
| Build ortam değişkeni (isteğe bağlı) | `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` |

Node sürümü `.node-version` dosyasından (22) okunur. `main`'e her push yayına alınır.

## B) Komut satırından

```bash
npx wrangler login      # bir kez
npm run deploy          # derler ve out/'u yükler
npm run preview         # yerelde açar (http://localhost:8787)
```

## Alan adı

Worker → Settings → Domains & Routes → Custom domain: `zemin360.com` ve `www.zemin360.com`.
`www` → apex yönlendirmesi için: Rules → Redirect Rules, `www.zemin360.com/*` → `https://zemin360.com/${1}`, 301.
`_redirects` alan adına göre yönlendirme yapamaz, bu yüzden bu kural panelden verilir.
