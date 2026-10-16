# Chico Rossi Car Detail

Landing page da Chico Rossi Car Detail (estética automotiva em Bariri/SP), feita com [Astro](https://astro.build). O build gera HTML estático, pronto para o Cloudflare Pages.

O design original está em [`modelo/`](modelo/).

## Desenvolvimento

Requer Node.js 22.22 ou mais recente.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/ localmente
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone, WhatsApp, redes sociais, endereço, horários, marcas | `src/data/site.ts` |
| Vitrificação, serviços, insulfilm, etapas | `src/data/services.ts` |
| Cores e estilos globais | `src/styles/global.css` |
| Seções da página | `src/components/*.astro` |
| Logotipo | `src/assets/logo.png` (otimizado automaticamente no build) |

O status "Aberto agora / Fechado agora" e o destaque do dia são calculados no navegador, sempre no fuso `America/Sao_Paulo`, a partir dos horários em `src/data/site.ts`.

## Deploy no Cloudflare Pages

1. Em **Workers & Pages → Create → Pages → Connect to Git**, selecione este repositório.
2. Configuração de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Variáveis de ambiente:
   - `NODE_VERSION` = `22` (o `.nvmrc` também define isso)
   - `SITE_URL` = domínio final, ex.: `https://chicorossi.com.br` (usado na URL canônica e nas tags de compartilhamento)

Os cabeçalhos de segurança e de cache ficam em `public/_headers`.

## Acessibilidade

- Link "Pular para o conteúdo", foco visível em todos os elementos interativos e `lang="pt-BR"`.
- Menu de celular com `aria-expanded`, que fecha com Esc e devolve o foco ao botão. Sem JavaScript, os links aparecem abertos.
- Botões "Pedir orçamento" repetidos têm texto extra só para leitores de tela (ex.: "Pedir orçamento — Lavagem Nível 01").
- Hierarquia de títulos sem saltos, listas semânticas, `<address>` e mapa com `title` descritivo.
- Contraste de texto dentro do nível WCAG AA. Rolagem suave e transições desligadas com `prefers-reduced-motion`.
