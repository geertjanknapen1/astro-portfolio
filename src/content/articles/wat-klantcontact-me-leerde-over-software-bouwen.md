---
title: "Wat klantcontact me leerde over software bouwen"
description: "Van alleen backendcode schrijven naar zelf met klanten communiceren: over doorvragen, de impact van kleine fouten en waarom luisteren niet hetzelfde is als overal ja op zeggen."
publishedAt: 2026-10-24
category: "Werk & samenwerking"
tags:
  - Klantcontact
  - Backend
  - Softwareontwikkeling
  - Samenwerking
draft: false
disclaimer: "Dit artikel is geschreven met ondersteuning van AI. De ervaringen, technische keuzes en meningen zijn van mijzelf. AI is gebruikt om de tekst te structureren en aan te scherpen."
---

Jarenlang werkte ik als developer vooral intern. Ik bouwde software, loste bugs op en dacht na over technische oplossingen. Rechtstreeks met klanten spreken deed ik niet. Niet omdat ik daar bewust voor wegbleef, maar omdat het simpelweg geen onderdeel van mijn werk was.

In mijn huidige functie is dat anders. Naast backendontwikkeling heb ik veel klantcontact. Daardoor kijk ik anders naar wat we bouwen, waarom we het bouwen en wat er gebeurt als iets niet werkt.

Dat betekent overigens niet dat ik het liefst de hele dag klanttickets afhandel. Daar kom ik nog op terug.

## De vraag is niet altijd het probleem

Een klant vroeg eens om een wijziging in een integratie. Op het eerste gezicht was dat geen kleine aanpassing: de wijziging zou behoorlijk wat impact hebben, mogelijk ook op andere klanten die dezelfde integratie gebruiken.

We hadden meteen kunnen gaan onderzoeken hoe we die wijziging technisch moesten realiseren en daar een flinke urenschatting voor kunnen maken. Maar eerst vroegen we door: wat wilde de klant nu precies bereiken?

Toen bleek dat het gewenste resultaat al mogelijk was door bestaande configuratie aan te passen.

Geen ingrijpende wijziging in de integratie. Geen grote rekening voor de klant. En geen extra complexiteit voor alle andere gebruikers van die koppeling.

Dat voorbeeld heeft voor mij een belangrijk verschil duidelijk gemaakt: **wat een klant vraagt, is niet altijd wat een klant nodig heeft.**

Vroeger deed ik als developer nogal eens aannames. Dat doe ik nog steeds, want zonder aannames kom je nergens. Alleen probeer ik ze nu eerst te bevestigen. Wat moet het eindresultaat zijn? Wat verwacht iemand dat er gebeurt? En welke haken en ogen kunnen dat in de weg zitten?

Dat hoeft geen urenlange vragenlijst te worden. Soms is één goede vervolgvraag voldoende om een hoop werk te voorkomen.

## Een kleine bug kan een groot probleem zijn

Vanuit de techniek is het verleidelijk om een probleem te beoordelen op hoe ingewikkeld de oplossing is. Een kleine aanpassing? Dan zal het probleem ook wel meevallen.

Zo werkt het niet altijd.

We hadden bijvoorbeeld een controle op geüploade bestanden die te streng was. Sommige PDF-bestanden bevatten intern afbeeldingsdata met tekencombinaties die door de controle als verdacht werden gezien. Daardoor werden bestanden onterecht geweigerd en konden gebruikers hun formulieren niet verzenden.

Technisch gezien was het probleem relatief klein. Voor iemand die een formulier moest indienen, lag het belangrijkste onderdeel van dat proces stil.

Ik merk in klantcontact ook dat de urgentie van een probleem anders wordt ervaren dan ik hem zelf in eerste instantie zou inschatten. Maar dat betekent niet dat iedere melding automatisch de hoogste prioriteit verdient.

Een website die niet bereikbaar is of een formulier dat niet kan worden verzonden, heeft voor mij een andere urgentie dan een stylingprobleem of iets waarvoor een goede workaround bestaat.

**Luisteren naar de impact is dus belangrijk. Maar de prioriteit moet je nog steeds zelf zorgvuldig beoordelen.**

## Als developers weten hoe het werkt, is dat nog geen gebruiksvriendelijkheid

Een ander voorbeeld is [PS Forms](/astro-portfolio/werk/ps-forms/).

In het begin werkte de applicatie voor ons als developers prima. We wisten hoe alles in elkaar zat en kenden de eigenaardigheden. Alleen hadden gebruikers die voorkennis niet.

We waren er onder andere van uitgegaan dat bepaalde verplichte velden bij iedere formuliersubmissie nodig waren en dat de opgehaalde accounts die gegevens altijd zouden bevatten. Dat bleek niet zo te zijn, het gezegde shit in, shit out, was van toepassing.

Gebruikers liepen daardoor tegen verplichte velden aan waarvoor ze niet altijd echte gegevens hadden. Sommigen vulden dummydata in om verder te kunnen en vervingen die later. Anderen gebruikten de applicatie niet.

Vanuit de code kon het gedrag verklaarbaar zijn. Vanuit het perspectief van de gebruiker was het vooral onhandig.

Dat vind ik een waardevolle les: **software kan technisch doen wat je hebt gebouwd en toch niet goed aansluiten op wat iemand probeert te doen.**

Juist wanneer je een systeem van binnen en van buiten kent, is het lastig om nog te zien welke aannames je ongemerkt van de gebruiker vraagt.

## Eén klant helpen zonder tien andere klanten lastig te vallen

Klantcontact heeft me ook anders laten kijken naar uitbreidingen en uitzonderingen in een SaaS-applicatie.

Een verzoek kan heel redelijk zijn voor één klant, maar dat betekent niet dat je het gedrag van een gedeelde integratie zomaar voor iedereen moet aanpassen.

Mijn uitgangspunt is inmiddels vrij praktisch:

- **Kan het met bestaande configuratie?** Dan heeft dat de voorkeur.
- **Komt de configuratie net tekort?** Dan kijk ik of we die gericht kunnen uitbreiden.
- **Maakt de wijziging het product beter voor meerdere klanten?** Dan is een algemene uitbreiding logisch.
- **Is de behoefte echt klantspecifiek, maar voegt ze wel waarde toe?** Dan kan maatwerk passend zijn, bijvoorbeeld afgeschermd met een feature flag.

Dat is geen universele beslisboom die ieder technisch vraagstuk oplost. Een feature flag brengt zelf ook onderhoud met zich mee, en niet iedere uitzondering verdient een eigen schakelaar.

Maar het dwingt me wel om verder te kijken dan het ticket dat voor me ligt. Wat betekent deze keuze voor andere klanten? Hoe houden we het gedrag begrijpelijk? En hoe leggen we een uitzondering zo vast dat een collega later niet hoeft te raden waarom die bestaat?

Documentatie en het bewust afhandelen van uitzonderingen zijn daardoor belangrijker voor me geworden.

## Klantcontact maakt me niet automatisch gelukkiger in mijn werk

Er zit ook een andere kant aan dit verhaal.

Ik vind contact met klanten op zichzelf leuk. Het helpt om beter te begrijpen voor wie je iets bouwt. Alleen merk ik dat ik mijn werkplezier vooral haal uit software ontwikkelen: een probleem uitzoeken, ergens echt induiken en vervolgens een goede oplossing bouwen.

Wanneer mijn dag vooral bestaat uit ticket na ticket, veel schakelen tussen onderwerpen en ondertussen verwachtingen managen, blijft er minder ruimte over voor die verdieping.

Dat voortdurende context switchen vind ik leuk, het houdt je werk dynamisch en veranderlijk. Echter zit er ook een nadeel aan, het kan de nadruk verschuiven van kwaliteit naar kwantiteit, en dat is niet hoe ik het liefst werk. 

Daarom zou ik klantcontact graag als onderdeel van mijn werk houden, maar niet als hoofdzaak. Die twee dingen spreken elkaar niet tegen. Je kunt iets waardevol vinden om te leren, zonder dat je het de hele dag wilt doen.

## Luister goed, maar zeg niet overal ja op

Als ik één advies mag geven aan developers die nog nooit direct met klanten hebben gesproken, dan is het om die gesprekken eens zelf te voeren. Samenwerken met collega's die klantcontact hebben helpt natuurlijk ook, maar zelf horen hoe iemand een probleem ervaart, maakt het concreter.

Behandel een klant daarbij zoals je zelf behandeld wilt worden: neem de vraag serieus, leg dingen begrijpelijk uit en wees duidelijk over wat wel en niet kan.

Maar neem een voorgestelde oplossing niet klakkeloos over. Vraag door. Toets je aannames. Kijk naar de impact. En durf uit te leggen waarom een andere oplossing verstandiger is, of waarom een melding niet bovenaan de stapel komt.

Ik ben door klantcontact niet minder developer geworden. Ik ben me juist bewuster geworden van wat er buiten mijn editor gebeurt.

**Goed luisteren naar klanten is belangrijk. Maar goed software bouwen betekent ook dat je ze niet altijd gelijk geeft.**
