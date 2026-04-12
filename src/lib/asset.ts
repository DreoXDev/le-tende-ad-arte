/**
 * Helper per risolvere i percorsi delle immagini statiche (nella cartella /public)
 * in modo compatibile con qualsiasi base path (GitHub Pages, Vercel, etc.)
 *
 * Uso: asset('/images/logo.png') → '/le-tende-ad-arte/images/logo.png'
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function asset(path: string): string {
	return `${base}${path}`;
}

/**
 * Helper per i link interni di navigazione.
 * Uso: link('/privacy') → '/le-tende-ad-arte/privacy'
 *      link('/#prodotti') → '/le-tende-ad-arte/#prodotti'
 */
export function link(path: string): string {
	// Anchor-only links (#section) non vanno prefissati
	if (path.startsWith("#")) return path;
	return `${base}${path}`;
}
