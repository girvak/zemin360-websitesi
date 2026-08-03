#!/usr/bin/env bash
# Zemin360 — statik siteyi derleyip sunucudaki nginx kök dizinine yayınlar.
#
# Kullanım (proje kökünden):
#   ./deploy/deploy.sh                 # yerel Node ile derler
#   BUILD_IN_DOCKER=1 ./deploy/deploy.sh   # derlemeyi konteynerde yapar (Node kurulu olmasa da)
#   WEBROOT=/var/www/zemin360 ./deploy/deploy.sh
#
# Yayınlama atomik: önce yeni sürüm yanına açılır, sonra symlink çevrilir.
# Böylece kullanıcı yarı kopyalanmış bir siteyi asla görmez ve geri alma tek komut.

set -euo pipefail

WEBROOT="${WEBROOT:-/var/www/zemin360}"
RELEASES="${RELEASES:-/var/www/zemin360-releases}"
KEEP="${KEEP:-5}"
BUILD_IN_DOCKER="${BUILD_IN_DOCKER:-0}"

cd "$(dirname "$0")/.."
STAMP="$(date +%Y%m%d-%H%M%S)"

echo "==> Derleniyor (BUILD_IN_DOCKER=$BUILD_IN_DOCKER)"
if [ "$BUILD_IN_DOCKER" = "1" ]; then
  # Yalnızca derleme için konteyner; çalışma zamanında konteyner kullanılmıyor.
  docker run --rm -v "$PWD":/app -w /app node:22-alpine \
    sh -c 'npm ci && NEXT_TELEMETRY_DISABLED=1 npm run build'
else
  npm ci
  NEXT_TELEMETRY_DISABLED=1 npm run build
fi

[ -d out ] || { echo "HATA: out/ üretilmedi. next.config.ts'te output: \"export\" olmalı." >&2; exit 1; }
[ -f out/index.html ] || { echo "HATA: out/index.html yok, derleme eksik." >&2; exit 1; }

echo "==> Yayınlanıyor: $RELEASES/$STAMP"
sudo mkdir -p "$RELEASES"
sudo rm -rf "$RELEASES/$STAMP"
sudo cp -a out "$RELEASES/$STAMP"
sudo chown -R www-data:www-data "$RELEASES/$STAMP" 2>/dev/null \
  || sudo chown -R nginx:nginx "$RELEASES/$STAMP" 2>/dev/null \
  || echo "  (uyarı: web kullanıcısı bulunamadı, sahiplik değişmedi)"

# WEBROOT bir symlink ise atomik çevir; değilse (ilk kurulum) symlink'e dönüştür.
if [ -L "$WEBROOT" ] || [ ! -e "$WEBROOT" ]; then
  sudo ln -sfn "$RELEASES/$STAMP" "$WEBROOT.tmp"
  sudo mv -Tf "$WEBROOT.tmp" "$WEBROOT"
else
  echo "==> $WEBROOT bir dizin; symlink düzenine geçiriliyor (yedek: $WEBROOT.bak-$STAMP)"
  sudo mv "$WEBROOT" "$WEBROOT.bak-$STAMP"
  sudo ln -sfn "$RELEASES/$STAMP" "$WEBROOT"
fi

echo "==> nginx yapılandırması denetleniyor"
sudo nginx -t
sudo systemctl reload nginx

# Eski sürümleri buda
cd "$RELEASES"
ls -1dt */ 2>/dev/null | tail -n "+$((KEEP+1))" | xargs -r sudo rm -rf

echo "==> Bitti. Yayında: $(readlink -f "$WEBROOT")"
echo "    Geri almak için:  sudo ln -sfn $RELEASES/<eski-damga> $WEBROOT && sudo systemctl reload nginx"
