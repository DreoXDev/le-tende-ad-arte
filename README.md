# Le Tende ad Arte — Sito Vetrina Premium

![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages_/_Aruba-222?style=for-the-badge&logo=github&logoColor=white)

Sito vetrina moderno, performante e ottimizzato SEO per **Le Tende ad Arte** (Abbiategrasso, MI). Costruito con un design premium e animazioni fluide per un'esperienza utente di alto livello su ogni dispositivo.

**Stack:** Astro v6 (Static Site Generator) · Tailwind CSS v4 · GSAP + ScrollTrigger · TypeScript · FormSubmit (email form) · Google Analytics 4 con Consent Mode v2

---

## 🚀 Quick Start (Per Sviluppatori)

**Prerequisiti:** [Node.js](https://nodejs.org/) `>=22.12.0`

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo locale
npm run dev
# → http://localhost:4321/

# 3. Build di produzione (per Aruba o altro hosting)
npm run build
# → genera la cartella /dist pronta per FTP

# 4. Preview della build locale
npm run preview
```

---

## 🗂️ Mappa del Progetto

```
Shop Website/
│
├── public/                    # File statici (copiati invariati nella dist)
│   ├── images/                # Tutte le immagini del sito
│   │   ├── logo.png           # Logo principale
│   │   ├── hero_bg.jpg        # Immagine di sfondo della Hero section
│   │   ├── interior_blinds.png
│   │   └── prodotti/          # Immagini delle pagine prodotto
│   │       ├── tende-interno-hero.jpg
│   │       ├── tende-interno/foto1.jpg ... foto10.jpg
│   │       ├── scorritenda-hero.png
│   │       ├── scorritenda/foto1.jpg ... foto10.jpg
│   │       └── ... (stessa struttura per ogni prodotto)
│   ├── .htaccess              # Config Apache per hosting Aruba
│   ├── favicon.ico / favicon-32.png / apple-touch-icon.png
│   ├── manifest.webmanifest   # PWA manifest
│   └── robots.txt             # Config crawler SEO
│
├── src/
│   ├── data/
│   │   └── products.ts        # ⭐ PANNELLO DI CONTROLLO PRODOTTI
│   │
│   ├── layouts/
│   │   └── Layout.astro       # Layout base (SEO, font, GA, cookie banner)
│   │
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── privacy.astro      # Pagina Privacy & Cookie Policy
│   │   ├── 404.astro          # Pagina errore personalizzata
│   │   └── prodotti/
│   │       └── [slug].astro   # Template dinamico pagine prodotto
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro   # Barra di navigazione (desktop + mobile)
│   │   │   └── Footer.astro   # Piè di pagina
│   │   ├── sections/
│   │   │   ├── Hero.astro     # Sezione principale homepage
│   │   │   ├── Solutions.astro # Griglia prodotti homepage
│   │   │   ├── About.astro    # Sezione "Il Nostro Metodo"
│   │   │   ├── CTA.astro      # Sezione form preventivo
│   │   │   └── Contact.astro  # Sezione contatti con mappa
│   │   └── ui/
│   │       ├── Preloader.astro # Schermata di caricamento iniziale
│   │       ├── CookieBanner.astro # Banner GDPR cookie
│   │       ├── ProductCard.astro  # Card prodotto riusabile
│   │       └── Lightbox.astro     # Viewer foto a schermo intero
│   │
│   ├── lib/
│   │   └── asset.ts           # Helper asset() e link() per base path
│   │
│   └── styles/
│       └── global.css         # Stili globali e design tokens
│
├── .github/workflows/
│   └── deploy.yml             # CI/CD per GitHub Pages
│
├── .env.example               # Template variabili d'ambiente
├── astro.config.mjs           # Configurazione Astro (base path, integrazioni)
└── README.md                  # Questo file
```

---

## 💡 Guida Manutenzione

### ⭐ Come modificare i Prodotti

Il file **`src/data/products.ts`** è il pannello di controllo centrale. Ogni modifica qui si propaga automaticamente su: navbar, homepage (griglia), e pagine di dettaglio prodotto.

**Struttura di un prodotto:**
```typescript
{
  slug: "nome-url",                    // URL della pagina: /prodotti/nome-url
  title: "Nome Visibile",              // Titolo mostrato ovunque
  subtitle: "Sottotitolo breve",       // Mostrato nella pagina dettaglio
  description: "Descrizione lunga...", // Testo principale della pagina
  types: [                             // Lista di tipologie/varianti
    "Tipo 1",
    "Tipo 2",
  ],
  heroImage: "/images/prodotti/nome-hero.jpg",  // Immagine hero pagina
  galleryPath: "/images/prodotti/nome/",         // Cartella galleria
  imageCount: 10                                 // Numero foto in galleria (foto1.jpg → foto10.jpg)
}
```

**Per aggiungere un nuovo prodotto:**
1. Aggiungere un nuovo oggetto nell'array `products` in `products.ts`
2. Caricare le immagini in `public/images/prodotti/[slug]/` con nomi `foto1.jpg`, `foto2.jpg`, ...
3. Caricare l'immagine hero come `public/images/prodotti/[slug]-hero.jpg`

---

### 🖼️ Come aggiornare le Immagini

| Immagine | Percorso |
|----------|----------|
| Logo | `public/images/logo.png` |
| Hero homepage | `public/images/hero_bg.jpg` |
| Foto sezione "Chi siamo" | `public/images/interior_blinds.png` |
| Foto card prodotto homepage | `public/images/[nome-file].jpg` (configurato in `Solutions.astro`) |
| Hero pagina prodotto | `public/images/prodotti/[slug]-hero.jpg` |
| Galleria pagina prodotto | `public/images/prodotti/[slug]/foto1.jpg` ... `fotoN.jpg` |

**Formato consigliato:** JPG per foto, PNG per elementi con trasparenza. Dimensioni massime: 2000px lato lungo per performance ottimale.

---

### 📧 Come collegare il Form Preventivo

Il form di contatto usa [FormSubmit](https://formsubmit.co) — nessun backend necessario.

1. Aprire `src/components/sections/CTA.astro`
2. Trovare la riga: `action="https://formsubmit.co/ajax/letendeadarte@gmail.com"`
3. Sostituire `letendeadarte@gmail.com` con l'email del cliente
4. Fare il build e mettere online il sito
5. Compilare il form come test → il cliente riceve un'email di attivazione da FormSubmit
6. Il cliente clicca "Attiva" nell'email ricevuta → da quel momento le richieste arrivano regolarmente

**Personalizzazione email ricevuta:** modificare il campo `_subject` e `_autoresponse` nella stessa sezione.

---

### 📊 Come attivare Google Analytics 4

Il tracking è già implementato con **Google Consent Mode v2** (GDPR compliant). GA non traccia nulla finché l'utente non accetta i cookie.

#### In locale (sviluppo):
1. Creare il file `.env.local` nella root del progetto (non viene caricato su Git)
2. Aggiungere: `PUBLIC_GA_ID=G-XXXXXXXXXX` (il tuo ID reale da Google Analytics)

#### Su GitHub Pages (produzione):
1. Andare su GitHub → Repo → **Settings** → **Secrets and variables** → **Actions**
2. Cliccare **"New repository secret"**
3. Nome: `GA_MEASUREMENT_ID`  |  Valore: `G-XXXXXXXXXX` (ID reale)
4. Salvare e fare un nuovo push → il build includerà automaticamente l'ID

**Come ottenere l'ID GA:** Google Analytics → ⚙️ Amministrazione → Flussi di dati → Web → Misura ID (formato `G-XXXXXXXXXX`)

#### Su Aruba (FTP, produzione):
Eseguire il build con la variabile impostata:
```bash
$env:PUBLIC_GA_ID="G-XXXXXXXXXX"  # PowerShell Windows
npm run build
# Caricare /dist su Aruba via FTP
```

---

### 📝 Come modificare i Testi delle Sezioni

| Sezione | File da modificare |
|---------|-------------------|
| Titolo e sottotitolo Hero | `src/components/sections/Hero.astro` righe 22-28 |
| Testo "La Nostra Storia" | `src/components/sections/About.astro` righe 25-52 |
| Testi card prodotti homepage | `src/components/sections/Solutions.astro` oggetti `products[]` |
| Testo sezione preventivo | `src/components/sections/CTA.astro` righe 10-27 |
| Indirizzo, telefono, email | `src/components/sections/Contact.astro` righe 21-60 |
| Dati strutturati SEO (schema.org) | `src/layouts/Layout.astro` blocco `ld+json` |
| Link social (Instagram, Facebook, WhatsApp) | `src/components/sections/Hero.astro` righe 39-47 |

---

### 🚀 Come eseguire il Deploy

#### GitHub Pages (per anteprima/test)
1. Fare commit di tutte le modifiche da VS Code
2. Fare Push → GitHub Actions inizia automaticamente il build
3. Dopo ~1 minuto il sito è aggiornato su `https://dreoxdev.github.io/le-tende-ad-arte/`

#### Aruba (per il cliente, produzione)
1. Assicurarsi che `PUBLIC_GA_ID` sia impostato (opzionale ma consigliato)
2. Eseguire `npm run build` — genera la cartella `/dist`
3. Caricare **tutto il contenuto** di `/dist` nella cartella root del dominio su Aruba (di solito `public_html/` o `htdocs/`) tramite FTP
4. Verificare che SSL sia attivo nel pannello Aruba
5. **Opzionale:** decommentare le righe `RewriteCond %{HTTPS}` nel file `.htaccess` per forzare HTTPS

---

## 🛠 Stack Tecnico

| Tecnologia | Versione | Uso |
|------------|---------|-----|
| [Astro](https://astro.build) | v6 | Framework SSG, routing, build |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling utility-first |
| [GSAP + ScrollTrigger](https://gsap.com) | v3 | Animazioni e parallasse |
| [TypeScript](https://typescriptlang.org) | v5 | Type safety |
| [Lucide Astro](https://lucide.dev) | Latest | Icone |
| [FormSubmit](https://formsubmit.co) | — | Form email (no backend) |
| Google Analytics 4 | — | Analytics con Consent Mode v2 |

---

## ⚠️ Note Importanti

- Il sito è **100% statico** — non richiede PHP, database o Node.js sul server
- Le **animazioni GSAP** si attivano su scroll e al caricamento pagina tramite `astro:page-load`
- Il **sistema di routing** per GitHub Pages usa `base: '/le-tende-ad-arte'` impostato automaticamente dalla variabile `GITHUB_ACTIONS` nel CI. In locale e per Aruba il base è `/`
- I **cookie analytics** sono bloccati di default (GDPR) e si attivano solo al consenso esplicito dell'utente
