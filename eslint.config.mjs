import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Proje statik olarak dışa aktarılıyor (next.config.ts: output "export" +
      // images.unoptimized). Bu yapılandırmada next/image hiçbir optimizasyon
      // yapmaz; aynı src ile düz bir <img> üretir. Kuralın gerekçesi burada
      // geçerli olmadığı ve tüm görseller yerelde küçük logolar olduğu için
      // düz <img> kullanımını kapatıyoruz.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
