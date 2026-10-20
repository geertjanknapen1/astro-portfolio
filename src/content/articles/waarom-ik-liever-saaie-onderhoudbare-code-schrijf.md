---
title: 'Waarom ik liever saaie, onderhoudbare code schrijf'
description: 'Over voorspelbare code, onnodige complexiteit en waarom onderhoudbaarheid óók een feature is.'
publishedAt: 2026-10-20
category: 'Techniek'
tags:
  - PHP
  - Softwareontwikkeling
  - Onderhoudbaarheid
  - Codekwaliteit
draft: false
disclaimer: "Dit artikel is geschreven met ondersteuning van AI. De ervaringen, technische keuzes en meningen zijn van mijzelf. AI is gebruikt om de tekst te structureren en aan te scherpen."
---

Ik houd van technische puzzels. Geef me een interessant backendprobleem en ik ben voorlopig wel even zoet. Toch heb ik door de jaren heen steeds meer waardering gekregen voor iets wat misschien wat minder spannend klinkt: saaie code.

Niet saai omdat er geen denkwerk in zit. Juist niet. Ik bedoel code die doet wat ze belooft, waarvan je redelijk snel begrijpt wat er gebeurt en die je kunt aanpassen zonder eerst een halve speurtocht door je IDE te ondernemen.

Code die niet probeert indruk op je te maken. Code die gewoon haar werk doet.

## Van mooie theorie naar bestaande codebases

Toen ik begon met programmeren, stond ik minder stil bij onderhoudbaarheid dan nu. Dat veranderde vooral door werkervaring. In bestaande codebases kom je soms constructies tegen waarvan je je oprecht afvraagt waarom iets zo ingewikkeld is geworden.

En dat merk je pas echt wanneer je er iets aan moet veranderen.

Een kleine aanpassing op papier kan zomaar een flinke zoektocht worden. Je opent een methode, klikt door naar een andere, vervolgens naar nóg een service en probeert ondertussen te onthouden waar het eigenlijk om ging. Voor je het weet ben je tien keer verder en heb je nog geen regel aangepast.

Daarom ben ik het KISS-principe steeds bewuster gaan toepassen: *Keep It Simple, Stupid*. Niet als excuus om overal de kortste weg te kiezen, maar als herinnering dat een oplossing niet ingewikkelder hoeft te zijn dan nodig.

## Een winkelwagen die wel heel veel kan

Neem een methode met de naam `updateCart()`. Je verwacht dat die een winkelwagen bijwerkt. Maar stel dat diezelfde methode ook zelf de belastingberekening uitvoert, kortingsregels toepast en allerlei andere zaken afhandelt.

Dan is de naam ineens een stuk minder behulpzaam.

Het probleem is niet dat het bijwerken van een winkelwagen invloed heeft op belastingen en kortingen. Natuurlijk kan dat zo zijn. Het probleem ontstaat wanneer één methode al die verantwoordelijkheden zelf bezit, met allerlei verborgen bijwerkingen als gevolg.

Dan wordt het lastig om te overzien wat een wijziging precies raakt. En nog lastiger om er zeker van te zijn dat je niets anders kapotmaakt.

Een methode die een belastingberekening *aanroept*, hoeft niet verkeerd te zijn. Een methode die ook nog eens alle belastingregels *implementeert*, is een ander verhaal. Dat onderscheid vind ik belangrijker dan een willekeurige grens aan het aantal regels.

## Een methode van 200 regels. En nu?

Als ik een methode van tweehonderd regels tegenkom, is mijn eerste reactie niet om alles onmiddellijk in losse stukjes te hakken. Ik wil eerst begrijpen wat de bestaande code doet.

Daarna kijk ik naar de verantwoordelijkheden. Doet de methode één duidelijk afgebakend ding? Of zijn er meerdere zaken bij elkaar beland die eigenlijk niet bij elkaar horen? Vervolgens probeer ik de hoeveelheid informatie die je tegelijk in je hoofd moet houden te verminderen.

Maar de context telt ook mee.

Als er een serieus productieprobleem speelt en iets dringend gerepareerd moet worden, ga ik niet eerst een grote refactor uitvoeren omdat de code mooier kan. Dan wil ik begrijpen wat er misgaat, het probleem oplossen en de risico's beperken.

Niet iedere gelegenheid om code te verbeteren is automatisch het juiste moment om dat te doen.

## Een extra service is niet altijd de oplossing

Ik werk graag met duidelijke verantwoordelijkheden. Als een stuk bedrijfslogica een eigen, afgebakende plek verdient en niet logisch in bestaande code past, kan een aparte service een prima keuze zijn.

Maar ook daar kun je in doorslaan.

Een methode opsplitsen over tien services maakt de code niet vanzelf eenvoudiger. Soms verplaats je de complexiteit alleen maar, waarna je nóg vaker moet doorklikken om de volledige flow te begrijpen.

Design patterns en principes als SOLID en DRY zijn waardevol. Ze geven je handvatten om software logisch op te bouwen. Zeker als beginnende developer is het goed om ze te leren kennen en te begrijpen waarom ze bestaan.

Alleen moet een design pattern geen doel op zich worden. Je code hoeft geen ingewikkelde constructie te krijgen enkel omdat je daarmee netjes een patroon kunt afvinken.

Eerst moet de oplossing een doel dienen. Daarna moet ze logisch, begrijpelijk en aanpasbaar zijn.

## De praktijk is geen perfect codevoorbeeld

In een ideale wereld heb je voor iedere verbetering alle tijd. In de praktijk is dat natuurlijk niet altijd zo.

Als ik in een pull request zie dat iets eenvoudiger kan, zal ik dat benoemen. Maar ik maak er niet automatisch een harde eis van als de code naar behoren werkt en het vooral een kwestie van netter of mooier schrijven is.

Soms ontbreekt simpelweg de tijd om alles aan te pakken. Dan probeer ik waar mogelijk de code iets beter achter te laten dan ik haar aantrof. Een beetje het boyscout-principe.

Dat betekent niet dat alles door de review mag. Als er zoveel 'magic' in een oplossing zit dat niet meer duidelijk is wat er precies gebeurt, vind ik dat een serieus probleem. Dan gaat het niet meer om persoonlijke voorkeur, maar om begrijpelijkheid en het risico van toekomstige wijzigingen.

Er zit wat mij betreft een groot verschil tussen code die nóg mooier zou kunnen en code waarvan niemand goed kan uitleggen wat ze doet.

## Tests geven vertrouwen, geen vrijbrief

Onderhoudbaarheid gaat voor mij ook over veilig kunnen aanpassen.

Tests zijn daarin gigantisch belangrijk. Ze helpen controleren of bestaande bedrijfslogica zich na een wijziging nog gedraagt zoals bedoeld. Vooral bij refactoring is dat waardevol: je wilt de structuur verbeteren zonder ongemerkt het gedrag te veranderen.

Kunnen goede tests complexe code acceptabel maken? Soms wel. Dat hangt er vooral van af *waarom* de code complex is.

Technische beperkingen kunnen je dwingen tot een oplossing die minder elegant is dan je zou willen. Maar ingewikkelde bedrijfsregels vind ik op zichzelf geen reden om de implementatie ook onnodig ingewikkeld te maken. Je kunt complexe regels vaak opdelen in kleinere, begrijpelijke onderdelen.

Tests maken een ondoorzichtige constructie bovendien niet ineens leesbaar. Ze geven vertrouwen in het gedrag dat ze afdekken, maar nemen het belang van duidelijke code niet weg.

## Saai betekent niet dat het schrijven saai is

Je zou kunnen denken dat ik programmeren hiermee vooral heel braaf wil maken. Maar ik vind juist het zoeken naar een goede, eenvoudige oplossing leuk.

Eerst zorgen dat iets doet wat het moet doen. Daarna nadenken over hoe het logischer, netter en beter aanpasbaar kan. Daar zit voor mij genoeg uitdaging in.

En er blijft altijd iets te leren. Nieuwe technieken, andere inzichten of simpelweg ontdekken dat een oplossing waar je eerst tevreden mee was toch eenvoudiger had gekund.

Het doel is niet om alle interessante problemen uit softwareontwikkeling te halen. Het doel is om die problemen niet onnodig door te schuiven naar de volgende developer. Die heeft waarschijnlijk al genoeg te doen.

## Onderhoudbaarheid is ook een feature

De eindgebruiker ziet meestal niet of een methode netjes is opgezet, of verantwoordelijkheden logisch zijn verdeeld of hoeveel denkwerk er in een refactor is gaan zitten.

Maar de gevolgen merkt die gebruiker uiteindelijk wel.

Onderhoudbare software maakt het makkelijker om problemen op te lossen en nieuwe functionaliteit toe te voegen. Niet omdat iedere wijziging dan vanzelf eenvoudig is, maar omdat je minder tijd kwijt bent aan het ontwarren van oude constructies voordat je überhaupt kunt beginnen.

Daarom zie ik onderhoudbaarheid als een feature. Misschien niet eentje die je op een productpagina zet, maar wel eentje waar je op de lange termijn voortdurend profijt van hebt.

Mijn favoriete code is dan ook niet per se de code waar iemand bewonderend naar kijkt. Het is code die een collega over een halfjaar opent en zonder uitgebreide uitleg begrijpt.

**De beste code is code die je niet hoeft uit te leggen.**

Of in ieder geval: code waarbij je niet eerst hoeft uit te leggen waarom het zo ingewikkeld is gemaakt.
