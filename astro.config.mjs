// @ts-check
import { defineConfig } from 'astro/config';

// Defina SITE_URL nas variáveis de ambiente do Cloudflare Pages quando o
// domínio final estiver pronto (ex.: https://chicorossi.com.br). Ele é usado
// para a URL canônica e as tags Open Graph.
export default defineConfig({
  site: process.env.SITE_URL || 'https://chico-rossi-detail.pages.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
