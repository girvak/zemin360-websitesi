# syntax=docker/dockerfile:1

# ---------- Aşama 1: statik siteyi derle ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Bağımlılıklar ayrı katmanda: kaynak değiştiğinde npm ci yeniden çalışmaz.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# next.config.ts → output: "export" olduğu için çıktı /app/out dizinine yazılır.
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


# ---------- Aşama 2: nginx ile servis et ----------
FROM nginx:1.29-alpine AS runner

# Node çalışma zamanına gerek yok; yalnızca üretilen statik dosyalar taşınır.
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

# 8080: root olmayan kullanıcıyla ve Cloud Run / Fly.io gibi platformlarla uyumlu.
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
