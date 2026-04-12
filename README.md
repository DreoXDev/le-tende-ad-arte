# Le Tende ad Arte - Sito Vetrina Premium

Sito vetrina moderno, performante e ottimizzato in ottica SEO per l'attività aziendale **"Le Tende ad Arte"** (Abbiategrasso). Costruito con un design esclusivo e dinamico per garantire la massima fluidità e un'esperienza UX premium su ogni dispositivo (desktop, tablet, mobile).

---

## 💡 Informazioni per il Cliente e Manutenzione

Questo sito è stato sviluppato come **Static Site** (Sito Statico). Questa scelta garantisce velocità di caricamento pressoché istantanea, sicurezza ai massimi livelli e abbattimento di tutti i costi di manutenzione server e database (eliminando i classici colli di bottiglia stile WordPress).

### Come aggiornare i prodotti (Senza toccare il Codice Complicato)
Il sito è progettato in modo modulare. Per aggiungere un nuovo prodotto, modificare un testo o sistemare un errore di battitura, hai un singolo "pannello di controllo" centralizzato.
- **Dati testuali:** Per modificare nomi dei prodotti, i sottotitoli descrittivi, o i punti elencati (le caratteristiche) basta aprire il file: `src/data/products.ts`. Qualsiasi modifica letterale in questo file si auto-propagherà istantaneamente sulla Navbar, nella HomePage e nelle pagine interne di dettaglio prodotto, senza stravolgere la grafica.
- **Galleria e Immagini:** Tutte le foto si trovano all'interno della cartella `public/images/`. Ad esempio, le foto di dettaglio scorrevoli si trovano nella cartella organizzata `public/images/prodotti/`. Per aggiornarle ti basterà sovrascrivere o caricare file d'immagine con lo stesso nome indicato nei dati.
### GDPR e Modulo Contatti (Niente backend da mantenere!)
Essendo un sito statico ultra-veloce, non c'è alcun macchinoso database o codice backend Server da gestire per far funzionare i messaggi dei clienti. Il form del sito si appoggia nativamente al servizio gratuito e sicuro **FormSubmit**.
- **Come connetterlo per la prima volta al Cliente**:
  1. Apri il file `src/components/sections/CTA.astro`.
  2. Cerca la riga di codice `<form action="https://formsubmit.co/LA_TUA_EMAIL_QUI" method="POST"...`.
  3. Cambia `LA_TUA_EMAIL_QUI` con la vera email del cliente (es. `letendeadarte@gmail.com`).
  4. Metti online il sito. Manda un finto messaggio di test compilando il modulo tu stesso.
  5. Il cliente riceverà una primissima email di attivazione da FormSubmit. Gli basterà premere "Attiva questo Form" e da quel momento in poi tutte le lead arriveranno perfette come tabella ordinata! (Successivamente il cliente può anche attivare l'offuscamento dell'indirizzo email seguendo le istruzioni incluse nella prima mail, per evitare lo spam da bot).
- **Privacy Policy:** I testi legali sono facilmente localizzabili nel file base `src/pages/privacy.astro`.

### Hosting e Dominio (Messa in Pubblico)
Il sito è già configurato all'interno e pronto, ottimizzato in particolare per server Serverless / JAMstack gratuiti o economici come **Vercel** o **Netlify**. Le sue performance a 100/100 si accoppieranno perfettamente con l'effettivo dominio configurato globalmente per Google in `astro.config.mjs` (`https://letendeadarte.it`).

---

## 🛠 Assetto Tecnico (Per Sviluppatori Front-End)
- **Framework Principale:** [Astro v6](https://astro.build)
  - Abilitate le `Astro View Transitions` per ottenere un'esperienza SPA-like (senza the flash of unstyled content).
- **Librerie di Stile e Componenti UI:** 
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - Libreria modulare parziale [Shadcn/UI](https://ui.shadcn.com/) per bottoni solidi ed esteticamente puliti
  - [Lucide Icons](https://lucide.dev/) (pacchetto Astro-native)
- **Motore Animativo:** 
  - [GSAP (GreenSock) ed estensione ScrollTrigger](https://gsap.com/). Gestisce parallasse e transizioni in *Opacity/Ease PowerOut* guidate dallo scroll dell'utente ed incapsulate nei life-cycle (`astro:page-load`) degli eventi di Astro.

## 🚀 Guida all'installazione locale

Prerequisiti: E' richiesto [Node.js](https://nodejs.org/) (`>=22.12.0`).

### 1. Inizializzare le dipendenze progetto
```sh
npm install
```

### 2. Sviluppo & Test (Live-Server Privato)
Per testare e visualizzare il sito nel browser digita semplicemente questo comando; Astro aprirà un servizio live in background all'indirizzo `http://localhost:4321`.
```sh
npm run dev
```

### 3. Compilazione Finale in Produzione (Deploy Mode)
Per generare l'esportazione finale "minificata" ultra veloce e ottimizzata per i motori di ricerca:
```sh
npm run build
```
Quest'azione assembla una cartella dedicata denominata `/dist`, la quale contiene il sito puro in semplice HTML, CSS e file JS zippati. L'intero contenuto della cartella `dist` può essere teoricamente anche ospitato via banalissimo protocollo FTP su aruba o servizi simili.
