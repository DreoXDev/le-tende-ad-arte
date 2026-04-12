export interface Product {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	types: string[];
	heroImage: string;
	galleryPath: string;
	imageCount: number;
}

export const products: Product[] = [
	{
		slug: "tende-da-interno",
		title: "Tende da Interno",
		subtitle: "Eleganza su misura per ogni ambiente",
		description: "Le nostre tende da interno sono realizzate su misura con tessuti di alta qualità, disponibili in una vasta gamma di colori, trame e stili. Ogni progetto viene studiato per integrarsi perfettamente con l’ambiente, valorizzando luce e spazi.",
		types: ["Tende a pacchetto", "Tende arricciate", "Tende a pannello", "Tende oscuranti", "Tende filtranti"],
		heroImage: "/images/prodotti/tende-interno-hero.jpg",
		galleryPath: "/images/prodotti/tende-interno/",
		imageCount: 10
	},
	{
		slug: "scorritenda",
		title: "Scorritenda",
		subtitle: "Il supporto perfetto per le tue tende",
		description: "I nostri scorritenda su misura rappresentano la soluzione ideale per completare e valorizzare ogni tipo di tenda. Realizzati con materiali resistenti e finiture eleganti, garantiscono scorrevolezza, stabilità e un perfetto equilibrio tra estetica e funzionalità.",
		types: ["Scorritenda a bastone", "Scorritenda con binario tecnico", "Scorritenda a soffitto o a parete", "Bastoni decorativi in acciaio, ottone, ferro o legno", "Terminali e accessori coordinati"],
		heroImage: "/images/prodotti/scorritenda-hero.png",
		galleryPath: "/images/prodotti/scorritenda/",
		imageCount: 10
	},
	{
		slug: "tende-tecniche",
		title: "Tende Tecniche",
		subtitle: "Controllo solare e design contemporaneo",
		description: "Le tende tecniche sono la soluzione ideale per chi desidera un controllo preciso della luce e del calore, senza rinunciare all'estetica. Perfette per uffici, ambienti professionali e abitazioni moderne.",
		types: ["Tende a rullo", "Tende verticali e softshade", "Tende plissettate", "Tende a rullo Twin", "Veneziane"],
		heroImage: "/images/prodotti/rulli-hero.jpg",
		galleryPath: "/images/prodotti/tende-tecniche/",
		imageCount: 10
	},
	{
		slug: "tessuti-per-divani",
		title: "Tessuti e Divani",
		subtitle: "Nuova vita ai tuoi arredi",
		description: "Proponiamo una selezione curata di tessuti per imbottiti, cuscini e complementi d’arredo, insieme a divani e poltrone personalizzabili. Ogni soluzione è pensata per unire estetica, comfort e durata nel tempo.",
		types: ["Tessuti per divani e poltrone", "Rivestimenti antimacchia e ad alta resistenza", "Tessuti antigraffio Dogs", "Tessuti naturali", "Coordinati tessili per l’intero ambiente"],
		heroImage: "/images/prodotti/tessuti-divani.jpg",
		galleryPath: "/images/prodotti/tessuti-divani/",
		imageCount: 10
	},
	{
		slug: "zanzariere",
		title: "Zanzariere",
		subtitle: "Protezione discreta ed efficace",
		description: "Le nostre zanzariere realizzate da Bettio garantiscono protezione efficace da insetti e polvere, mantenendo al tempo stesso il passaggio di aria e luce. Sono progettate per integrarsi perfettamente con infissi esistenti.",
		types: ["Zanzariere a rullo", "Zanzariere plissettate", "Zanzariere a battente", "Zanzariere scorrevoli", "Soluzioni per porte-finestre e grandi aperture"],
		heroImage: "/images/prodotti/zanzariere-hero.jpg",
		galleryPath: "/images/prodotti/zanzariere/",
		imageCount: 10
	}
];
