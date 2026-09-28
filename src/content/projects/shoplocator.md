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
  - jQuery
  - JSON
  - Google API's
employer: "Bertels Holland B.V."
coverImage: "images/projects/shoplocator/plagron-shoplocator-altered.png"
coverAlt: "Aangepaste visualisatie van de Plagron-shoplocator met een interactieve kaart."
coverCaption: "AI-gegenereerde visualisatie op basis van de oorspronkelijke shoplocator. De afbeelding is aangepast om het project te illustreren zonder de originele website en het bijbehorende kaartmateriaal rechtstreeks over te nemen. Details kunnen afwijken van de daadwerkelijke implementatie."
technicalIntro: "De shoplocator bestond al toen ik bij het project betrokken raakte. Mijn werk draaide om het moderniseren van de bestaande frontend, hergebruik van functionaliteit en het bewaken van de architectuur van een nieuwe microservice."
technicalChoices:
  - title: "Microservice & JSON-cache"
    description: "De microservice haalt periodiek verkooppunten per land op uit Teamleader CRM en bewaart de resultaten als JSON-bestanden. Hierdoor hoeft de shoplocator niet bij iedere zoekopdracht de externe API aan te roepen en hoeven we de bedrijfsgegevens niet dubbel op te slaan in nog een eigen database. Ik bewaakte mede de architectuur en beoordeelde pull requests voor deze service; de toenmalige lead developer verzorgde voornamelijk de ontwikkeling."
  - title: "jQuery"
    description: "Ik heb de verouderde JavaScript van de bestaande shoplocator herschreven naar jQuery. Binnen deze bestaande website bood dat een manier om de interactie te vernieuwen zonder de hele frontend opnieuw op te zetten."
  - title: "Google Maps & MarkerClusterer"
    description: "Google Maps toont de verkooppunten op een interactieve kaart. Met MarkerClusterer kunnen nabijgelegen locaties gegroepeerd worden, zodat de kaart ook bij veel verkooppunten overzichtelijk blijft. Ik heb de integratie met de Google-API's bijgewerkt."
  - title: "Modulaire opzet"
    description: "De shoplocator moest op meerdere plaatsen binnen de website inzetbaar zijn. Ik heb de bestaande code gerefactord naar herbruikbare onderdelen, zodat we niet overal dezelfde functionaliteit hoefden te dupliceren."
---

## Het project

Tijdens mijn werk bij Bertels Holland heb ik gewerkt aan de shoplocator van Plagron. Met deze functionaliteit kunnen bezoekers via een interactieve kaart verkooppunten vinden waar producten van Plagron verkrijgbaar zijn.

De shoplocator is onderdeel van de Laravel-website van Plagron. Hoewel ik niet betrokken was bij de oorspronkelijke ontwikkeling, heb ik de grote refactors en verbeteringen aan deze functionaliteit uitgevoerd.

## Mijn bijdrage

Mijn werkzaamheden richtten zich voornamelijk op het verbeteren, moderniseren en verder ontwikkelen van de bestaande functionaliteit.

### Een microservice voor Teamleader CRM

Ik was betrokken bij de ontwikkeling van een nieuwe microservice in samenwerking met de toenmalige lead developer. Hij verzorgde voornamelijk de ontwikkeling, terwijl ik me richtte op het bewaken van de architectuur en het beoordelen van pull requests.

### Verouderde JavaScript moderniseren

De bestaande JavaScript achter de shoplocator was sterk verouderd. Ik heb deze code volledig herschreven naar jQuery en daarbij de integratie met de verschillende Google-API's bijgewerkt naar de destijds actuele versies.

### Van bestaande code naar een modulaire opzet

De shoplocator moest op meerdere plaatsen binnen de website gebruikt kunnen worden. Ik heb de bestaande code gerefactord naar een modulaire opzet, met het DRY-principe (Don't Repeat Yourself) als uitgangspunt.

Daardoor werd het eenvoudiger om de shoplocator op meerdere plaatsen in te zetten en toekomstige wijzigingen door te voeren.

## Meer dan alleen backendontwikkeling

Wat dit project voor mij interessant maakt, is de combinatie van verschillende technische verantwoordelijkheden. Naast het moderniseren van de frontend was ik betrokken bij de technische architectuur en code reviews van een nieuwe microservice.

De shoplocator laat daarmee zien dat mijn werkzaamheden verder gaan dan uitsluitend het schrijven van backendcode.
