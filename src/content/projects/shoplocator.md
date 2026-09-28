---
title: "Shoplocator"
description: "Een interactieve shoplocator voor Plagron, waarbij ik aan zowel de backend als de frontend heb gewerkt."
category: professional
status: completed
year: 2025
order: 3
featured: true
tags:
  - PHP
employer: "Bertels Holland B.V."
coverImage: "images/projects/shoplocator/plagron-shoplocator-altered.png"
coverAlt: "Aangepaste visualisatie van de Plagron-shoplocator met een interactieve kaart."
coverCaption: "AI-gegenereerde visualisatie op basis van de oorspronkelijke shoplocator. De afbeelding is aangepast om het project te illustreren zonder de originele website en het bijbehorende kaartmateriaal rechtstreeks over te nemen. Details kunnen afwijken van de daadwerkelijke implementatie."
---

## Het project

Tijdens mijn werk bij Bertels Holland heb ik
gewerkt aan de shoplocator van Plagron.

Met deze functionaliteit kunnen bezoekers
via een interactieve kaart verkooppunten
vinden waar producten van Plagron
verkrijgbaar zijn.

De shoplocator is onderdeel van de
Laravel-website van Plagron en combineert
verschillende technieken: van een eigen
microservice voor het ophalen van
winkelgegevens tot een interactieve
kaart met Google Maps.

Hoewel ik niet betrokken was bij de
oorspronkelijke ontwikkeling, heb ik
de grote refactors en verbeteringen
aan deze functionaliteit uitgevoerd.

## Achter de schermen

De winkelgegevens zijn afkomstig uit
Teamleader CRM.

Om te voorkomen dat de shoplocator
bij ieder bezoek opnieuw verzoeken
naar de Teamleader API moet versturen,
maken we gebruik van een eigen
microservice.

Deze microservice haalt periodiek
de verkooppunten per land op en
slaat de resultaten op in
JSON-bestanden.

De frontend haalt deze gegevens
vervolgens op met behulp van jQuery.

Via Google Maps en de MarkerClusterer API
worden de verkooppunten weergegeven
op een interactieve kaart.

Door deze opzet beperken we het
aantal verzoeken naar de externe API
en zijn de winkelgegevens beschikbaar
zonder dat Teamleader bij iedere
zoekopdracht opnieuw geraadpleegd
hoeft te worden.

## Mijn bijdrage

De oorspronkelijke shoplocator bestond
al toen ik bij het project betrokken
raakte.

Mijn werkzaamheden richtten zich
voornamelijk op het verbeteren,
moderniseren en verder ontwikkelen
van de bestaande functionaliteit.

Daarnaast was ik betrokken bij de
ontwikkeling van een nieuwe microservice,
waarbij mijn verantwoordelijkheid
vooral lag bij het bewaken van
de architectuur en het beoordelen
van pull requests.

### Een microservice voor Teamleader CRM

Een belangrijk onderdeel van het
project was de ontwikkeling van
een nieuwe microservice voor de
integratie met Teamleader CRM.

Deze microservice is tot stand
gekomen in samenwerking met
de toenmalige lead developer.

Hij verzorgde voornamelijk de
ontwikkeling, terwijl ik me
richtte op het bewaken van
de architectuur en het
beoordelen van pull requests.

De microservice haalt periodiek
winkelgegevens per land op
via de Teamleader API en
slaat deze op in JSON-bestanden.

Deze bestanden dienen als
cachinglaag voor de shoplocator.
Hierdoor hoeven we niet bij
iedere zoekopdracht opnieuw
een verzoek naar de externe
API te versturen.

Mijn rol bij dit onderdeel
lag daarmee vooral bij het
bewaken van de technische
opzet en de codekwaliteit.

### Verouderde JavaScript moderniseren

De bestaande JavaScript achter
de shoplocator was sterk verouderd.

Ik heb deze code volledig
herschreven naar jQuery en
daarbij de integratie met
de verschillende Google API's
bijgewerkt naar de destijds
actuele versies.

Hiermee heb ik de frontend
van de shoplocator vernieuwd
en de bestaande functionaliteit
verder verbeterd.

### Van bestaande code naar een modulaire opzet

De shoplocator moest op meerdere
plaatsen binnen de website
gebruikt kunnen worden.

In plaats van dezelfde
functionaliteit op verschillende
plekken te dupliceren, heb ik
de bestaande code gerefactord
naar een modulaire opzet.

Hierbij stond het DRY-principe
(Don't Repeat Yourself) centraal.

Door de functionaliteit
herbruikbaar te maken, werd
het eenvoudiger om de
shoplocator op meerdere
plaatsen in te zetten en
toekomstige wijzigingen
door te voeren.

## Meer dan alleen backendontwikkeling

Wat dit project voor mij
interessant maakt, is de
combinatie van verschillende
technische verantwoordelijkheden.

Naast het moderniseren van
de frontend en het modulair
opzetten van de bestaande
functionaliteit, was ik
betrokken bij de technische
architectuur en code reviews
van een nieuwe microservice.

Hierdoor kon ik niet alleen
zelf verbeteringen ontwikkelen,
maar ook bijdragen aan de
technische kwaliteit van
andermans code.

De shoplocator laat daarmee
zien dat mijn werkzaamheden
verder gaan dan uitsluitend
het schrijven van backendcode.