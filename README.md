
# Introduksjon

Siden to av gruppemedlemmene har vært svært syk hadde vi bare effektivt en uke
til å fullføre prosjektet. Dette la noen føringer på bruk av teknologi,
løsninger og hvor mye React det var mulig å lære seg. Med bakgrunn i dette var
vår førsteprioritet å fullføre alle kravene til funksjonalitet siden vår skulle
ha.

Dette gjorde f.eks at vi glemte / ikke hadde tid til å være strukturerte på git.
Grunnet tidspress valgte vi å heller fokusere på å få opp en fungerende side, og
jobbe langt mer strukturert på git under neste prosjekt.

Vi jobbet med nettsiden med mobile-first i tankene. Dette gjør at utseende på
siden er noe haltende på PC, men fungerer på stort sett alle plattformer. Vi
bestemte oss tidlig for å ha en meny på siden som kunne vises og skjules.
Hensikten med dette var først og fremst å gjøre siden vår mer responsiv, og
enklere å bruke på mobil. I første omgang var denne sidemenyen plassert til
venstre, men etter testing på mobil, ble denne menyen flyttet til høyre side av
nettsiden. Da det var langt enklere å nå den med tommelen.

Andre valg som ble tatt tidlig var bruken av CSS Grid Layout og Flexbox Grid.
Dette var igjen gjort fordi vi ville ha en responsiv side. Hoveddesignet ble
gjort via CSS Grid, mens knappene for å åpne de ulike utstillingene ble lagt i
en Flexbox. Når sidebaren åpner og lukker seg, valgte vi å endre bredden på
kolonnene i CSS Grid Layouten.

Vi vurderte først å vise alle utstillingene samtidig, men bestemte oss
etterhvert for å skjule de andre utstillingene for å være i tråd med
kravspesifikasjonene. Vi valgte å gå for ett modalvindu, både for å teste
hvordan dette fungerte, men og fordi vi tenkte det ville være en god idè. Siden
dette er en kunstutstilling, vil et vindu som dukker opp være moderne og kult.
For å gjøre det intuitivt for brukeren lukkes vinduet igjen dersom en klikker,
eller trykker på esc knappen på tastaturet.

Vi har gjort et forsøk på å gjøre siden vår så intuitiv som mulig, ved å ha
default checked radio buttons, for at brukeren skal lett skjønne hva han skal
gjøre for å få se andre kombinasjoner av kategorier. Samt hover-effekter for å
hjelpe til å ikke “miste” musa.

Vi har valgt å holde designet til siden ganske minimalistisk, for å få bedre tid
til at alt skal fungere slik vi ønsket, selv om det ikke alltid er like
intuitivt hvordan du skal exite kunstmodalen på mobil, i og med den mangler et
kryss, men dette tenker vi ikke gjør noe, fordi folk er vant til at det bare er
å klikke en gang til på en modal for å lukke den når de er på mobil. Vi anså
dette som standard practice, og ønsket at siden skulle være så ren som mulig.

Siden vår består i utgangspunktet av tre hovedkomponenter: Sidebar, Cards og
Modal, samt rotkomponenten App. State blir for det meste holdt styr på av App,
siden det kreves at vi sender info fram og tilbake mellom de forskjellige
komponentene.

Sidebar håndterer når de forskjellige kategoriene blir trykket på, og gir info
om de forskjellige dikt/sanger/bilder(svg) som er hentet, som igjen sender dette
til Cards som rendrer x antall (4 hver gang i dette tilfellet) cards. Når vi
trykker på et card, vil dette sende data videre til Modal, og åpne den, og vise
kunstverket til sluttbrukeren. Siden er laget for å kunne utvides mtp mengde
data, men ajax lasting av bilder er litt kronglete siden vi ikke fant en god
måte å vite hva hvert bilde het, og måtte legge inn navnene på hvert bilde i et
javascript object (JSON). Dette kan på en måte ses på som en liten noSQL
database, selv om vi ikke har en server, men om vi hadde hatt det ville det
fungert noenlunde likt, og ville gjort det enklere å utvide databasen.

Sidebaren var modifisert og endret noe slik at den passer på alle mobiler i
devTools.

Testingen på siden ble gjort relativt grundig, da hver person på gruppa bruker
sitt eget operativsystem. Slik at nettsiden ble testet både på Linux, Windows og
Mac, samt de mest vanlige nettleserne: Chrome, Chromium, Vivaldi, Firefox, Edge,
Safari. Linux har hatt noe problemer med å laste inn bildene, dette var grunnet
en HTTP 206 feilmelding, men grunnet at dette ble oppdaget rett før fristen var
det ikke mulig å fikse. På Mac og Windows fungerte derimot nettsiden ypperlig.
Her ble hver utstilling sjekket, samt hvordan den oppførte seg på mindre
skjermer. Siden menyen kan minimeres, fungerer siden bra selv på svært små
skjermer.

I testfasen fant vi en rekke bugs, bla at nederste biten av sidebaren ikke vises
på små skjermer. Eller at lyden fortsatte å spille av selv etter at vi hadde
lukket modal vinduet. Så for oss var det svært nyttig med grundig testing av
nettsiden før release.

Siden ble testet jevnlig underveis.

På tross av litt vanskeligheter med ajax i starten, og at vi kom litt senere i
gang med prosjektet enn vi skulle ønske føler vi at vi har lært mye, og mot
slutten føler vi at vi ble litt stødige i barebones React.

