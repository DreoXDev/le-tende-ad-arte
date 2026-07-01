# Le Tende ad Arte

![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

Sito per **Le Tende ad Arte**, negozio di tende e tessuti d'arredo ad Abbiategrasso (MI). Realizzato con Astro in modalità statica, pronto per essere pubblicato su qualsiasi hosting tramite FTP.
Website deployed trough github pages during development, then adapted and hosted on Aruba.

**Stack:** Astro · Tailwind CSS · GSAP · TypeScript · Google Analytics 4

---

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build per produzione

```bash
npm run build
# output nella cartella /dist
```

Il contenuto di `/dist` va caricato nella root del dominio (es. `public_html/`) tramite FTP.
