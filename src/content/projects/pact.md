---
title: "Pact"
description: "Een Symfony-applicatie voor het vastleggen en goedkeuren van projectscopes. Een hobbyproject waarin ik mezelf uitdaag op het gebied van architectuur, autorisatie en workflows."
category: personal
status: in-progress
year: 2026
order: 3
featured: true
tags:
  - Symfony
  - PHP
  - PostgreSQL
  - Docker
coverImage: "images/projects/pact/pact-mockup.png"
coverAlt: "Conceptvisualisatie van Pact op een laptop."
coverCaption: "AI-gegenereerde conceptmockup van Pact, gebaseerd op het productontwerp en de geplande functionaliteiten. De afbeelding dient ter illustratie en is geen weergave van de daadwerkelijk ontwikkelde applicatie."
technicalIntro: "Met Pact kan ik de technische keuzes zelf maken. Ik gebruik een vertrouwde basis om me verder te verdiepen in architectuur, autorisatie, betrouwbaarheid en het ontwikkelen van een complete SaaS-applicatie."
technicalChoices:
  - title: "Symfony & PHP"
    description: "Symfony vormt de basis van Pact. Met de Workflow-component leg ik expliciet vast welke statussen een scope kan doorlopen en welke overgangen zijn toegestaan. Zo blijft de logica rondom goedkeuringen overzichtelijk en controleerbaar."
  - title: "PostgreSQL"
    description: "Gebruikers, bedrijven, klanten, scopes en goedkeuringen zijn relationeel met elkaar verbonden. PostgreSQL biedt een passende basis om die gegevens en hun onderlinge relaties vast te leggen."
  - title: "Docker"
    description: "Ik gebruik Docker om de ontwikkelomgeving reproduceerbaar te houden. Daarmee draaien de applicatie en de bijbehorende diensten in een consistente omgeving. Bovendien is het een mooie gelegenheid om mijn kennis van Docker verder uit te breiden."
  - title: "Geautomatiseerde tests"
    description: "Met geautomatiseerde tests controleer ik onder andere autorisatie, klantbeheer en de regels rondom goedkeuringen. Een scope mag immers niet zomaar vanuit iedere status worden aangepast of goedgekeurd."
---

## Van idee naar applicatie

Naast mijn dagelijkse werk vind ik het leuk om zelf software te ontwikkelen. Niet omdat er een klant op wacht, maar omdat ik mezelf technisch wil blijven ontwikkelen en uitdagen.

Dat is wat Pact is.

Pact is een applicatie waarmee freelancers en kleine bureaus de scope van hun projecten kunnen vastleggen en laten goedkeuren door hun klanten.

Het idee komt eigenlijk neer op een simpele vraag: *wat hebben we nou precies afgesproken?*

Door vooraf vast te leggen wat wel en niet binnen een project valt, wil ik die afspraken voor beide partijen inzichtelijk maken.

## Wat er inmiddels staat

Pact is nog volop in ontwikkeling, maar inmiddels is het meer dan alleen een idee.

De basis van de applicatie staat. Gebruikers kunnen een account aanmaken en binnen hun bedrijf klanten beheren. Daarbij is rekening gehouden met autorisatie: gebruikers mogen niet zomaar gegevens van een ander bedrijf bekijken of aanpassen.

Ook de scopebuilder is ontwikkeld. Daarmee kunnen projectscopes worden opgesteld met een beschrijving, onderdelen en eventuele subonderdelen. Daarnaast kunnen zaken die expliciet buiten de scope vallen worden vastgelegd.

Vervolgens kan een scope via een beveiligde publieke link met de klant worden gedeeld. Die kan de scope goedkeuren of om wijzigingen vragen, zonder daarvoor zelf een account nodig te hebben.

De bijbehorende goedkeuringsworkflow is eveneens geïmplementeerd. Daarmee is de basis gelegd voor het vastleggen en goedkeuren van projectafspraken.

## Een goedkeuringsproces is meer dan twee knoppen

Een van de interessantste technische onderdelen van Pact vind ik de goedkeuringsworkflow.

Op het eerste gezicht lijkt het vrij eenvoudig: je stuurt een klant een link en die klikt op 'Goedkeuren' of 'Wijzigingen aanvragen'.

Alleen komt er achter de schermen net wat meer bij kijken.

Een scope kan verschillende statussen hebben: concept, verzonden, goedgekeurd of wijzigingen aangevraagd.

Niet iedere actie mag in iedere status worden uitgevoerd. Een concept mag bijvoorbeeld worden bewerkt, terwijl een verzonden of goedgekeurde scope niet zomaar aangepast mag worden.

Om dat netjes te regelen, maak ik gebruik van de Workflow-component van Symfony. Daarmee leg ik expliciet vast welke overgangen tussen de verschillende statussen mogelijk zijn.

Dat vind ik een stuk overzichtelijker dan overal in de applicatie losse controles toevoegen om te bepalen wat wel en niet mag.

Met geautomatiseerde tests controleer ik vervolgens of die regels daadwerkelijk worden nageleefd.

## Niet alles is voor iedereen

Een ander belangrijk onderdeel is de scheiding tussen bedrijven.

Pact is opgezet met het idee dat meerdere bedrijven de applicatie kunnen gebruiken. Een gebruiker is daarom gekoppeld aan een bedrijf, en klanten en scopes horen eveneens bij dat bedrijf.

Dat betekent dat je niet alleen moet controleren of iemand is ingelogd, maar ook of diegene toegang mag hebben tot de betreffende gegevens.

Die controles zijn onderdeel van de applicatie en worden ook getest.

Misschien niet het spannendste onderdeel om over te vertellen, maar wel iets wat gewoon goed geregeld moet zijn.

## Meer dan alleen functionaliteit

Met Pact geef ik mezelf bewust een realistische casus.

Ik wil niet zomaar wat functionaliteiten verzinnen en bouwen, maar ervaren wat er komt kijken bij het ontwikkelen van een SaaS-applicatie. Van begin tot eind.

Juist doordat het project een herkenbaar probleem probeert op te lossen, word ik gedwongen om verder te kijken dan alleen de code die ik op dat moment schrijf.

Hoe richt ik de architectuur in? Hoe zorg ik ervoor dat de applicatie onderhoudbaar blijft? Hoe voorkom ik dat gebruikers bij gegevens kunnen die niet van hen zijn? En hoe zorg ik ervoor dat een goedkeuringsproces voorspelbaar blijft werken?

Dat zijn precies de vraagstukken waar ik me graag verder in verdiep.

## Wat er nog op de planning staat

Hoewel de basis en de goedkeuringsworkflow zijn gerealiseerd, is Pact nog niet af.

Een belangrijk volgend onderdeel is **immutable versioning en een audit trail**.

Het idee daarachter is dat goedgekeurde afspraken niet ongemerkt kunnen veranderen en dat achteraf inzichtelijk blijft wat er is gebeurd.

Die functionaliteit staat nog op de planning en maakt dus nog geen onderdeel uit van de afgeronde implementatie.

Ook daarna valt er ongetwijfeld nog genoeg te bouwen en te verbeteren.

## Een project om van te leren

Pact is voor mij in de eerste plaats een hobbyproject.

Ik heb de vrijheid om technische keuzes te onderzoeken, nieuwe ideeën uit te proberen en onderweg bij te leren. Zonder dat er meteen een klant op een opleverdatum zit te wachten.

Het doel is dan ook niet om zo snel mogelijk een product af te leveren, maar om iets te bouwen waar ik technisch achter sta.

En als ik daar onderweg een betere developer van word, is dat mooi meegenomen.
