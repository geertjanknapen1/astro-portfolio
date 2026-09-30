
# Achter de schermen

Mijn persoonlijke portfolio, gebouwd met Astro.

Ik ben Geert-Jan Knapen, backenddeveloper met een voorliefde voor PHP, Symfony, Laravel en software die gewoon goed werkt.

Met deze website laat ik niet alleen zien aan welke projecten ik heb gewerkt, maar vertel ik ook het verhaal achter die projecten. Welke technische keuzes zijn er gemaakt? Wat was mijn bijdrage? En wat heb ik ervan geleerd?

**[Bekijk mijn portfolio](https://geertjanknapen1.github.io/astro-portfolio/)**

## Over dit project

Een portfolio is natuurlijk ook een project op zichzelf.

Ik wilde geen standaard developerportfolio vol animaties en ingewikkelde technische oplossingen. Het moest een persoonlijke, overzichtelijke website worden waarop mijn werk en verhaal centraal staan.

Daarom heb ik gekozen voor een relatief eenvoudige technische basis, met aandacht voor vormgeving, toegankelijkheid en prestaties.

## Technologie

De website is gebouwd met:

- **Astro** voor het genereren van statische pagina's.
- **TypeScript** voor aanvullende functionaliteit.
- **CSS** voor de vormgeving, zonder uitgebreid UI-framework.
- **Astro Content Collections** voor het beheren van projectinformatie.
- **GitHub Pages** voor de hosting.

Daarnaast gebruik ik de sitemapintegratie van Astro om zoekmachines te helpen de website te indexeren.

## Functionaliteiten

De website bevat onder andere:

- Een persoonlijke introductie en informatie over mijn werkervaring.
- Een projectoverzicht met filters.
- Uitgebreide projectpagina's met achtergrondinformatie en technische keuzes.
- Ondersteuning voor een licht en donker thema.
- Responsive navigatie voor verschillende schermformaten.
- Een sticky header en een knop om terug naar boven te scrollen.
- Metadata en social previews voor het delen van pagina's.

Bij de ontwikkeling houd ik rekening met toegankelijkheid, prestaties en bezoekers die minder beweging op hun scherm willen.

## Lokaal draaien

Voor dit project heb je Node.js 22.12.0 of nieuwer nodig.

Clone de repository:

```bash
git clone https://github.com/geertjanknapen1/astro-portfolio.git
cd astro-portfolio
```

Installeer de dependencies:

```bash
npm install
```

Start vervolgens de ontwikkelserver:

```bash
npm run dev
```

De website is standaard beschikbaar op `http://localhost:4321/astro-portfolio/`.

### Beschikbare commando's

| Commando | Beschrijving |
| --- | --- |
| `npm run dev` | Start de lokale ontwikkelserver. |
| `npm run build` | Genereert de productieversie in `dist/`. |
| `npm run preview` | Toont een lokale preview van de productieversie. |
| `npm run astro -- check` | Controleert Astro- en TypeScript-bestanden. |

## Projecten toevoegen

Projectinformatie wordt beheerd met Astro Content Collections.

De projectbestanden staan in:

`src/content/projects/`

Elk project heeft een eigen Markdown-bestand met metadata, waaronder de titel, beschrijving, gebruikte technologieën en projectstatus.

De inhoud van deze bestanden wordt gebruikt om zowel het projectoverzicht als de individuele projectpagina's op te bouwen.

## Hosting

De website is ingericht voor GitHub Pages.

In `astro.config.mjs` zijn het publieke domein en het basispad van de repository vastgelegd. Astro genereert een statische website die zonder aparte applicatieserver kan worden gehost.

## AI-gebruik

Bij het ontwikkelen van software maak ik soms gebruik van AI als ondersteunend hulpmiddel, bijvoorbeeld voor het onderzoeken van technische mogelijkheden, het bespreken van oplossingen en het verbeteren van code of teksten.

Ik blijf zelf verantwoordelijk voor het beoordelen van suggesties en de uiteindelijke technische keuzes.

Meer informatie over mijn werkwijze is te vinden op mijn portfolio.

## Contact

Meer weten over mij of mijn werk?

Neem gerust een kijkje op mijn [portfolio](https://geertjanknapen1.github.io/astro-portfolio/).

---

Met aandacht gebouwd door Geert-Jan.
En ja, ook de achterkant werkt.
(README.md gegenereerd door AI)