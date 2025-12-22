# VakaCloud Documentation & Updates

Tämä repositorio sisältää VakaCloud-palvelun julkisen dokumentaation, tiedotteiden ja päivityslokin lähdekoodin. Sivusto on rakennettu [Docusaurus 3](https://docusaurus.io/) -alustalla.

**HUOMIO: Tämä on julkinen repositorio.**
Älä koskaan tallenna tähän repoon salasanoja, API-avaimia, asiakastietoja tai tarkkoja teknisiä kuvauksia sisäisestä infrastruktuurista.

---

## Aloitusopas

### Esivaatimukset
Varmista, että koneellesi on asennettu:
- [Node.js](https://nodejs.org/en/download/) (versio 18 tai uudempi)
- npm (tulee Node.js:n mukana)

### Asennus
Kloonaa repositorio ja asenna riippuvuudet:

1. Siirry projektikansioon:
   `cd vakacloud-docs`

2. Asenna riippuvuudet:
   `npm install`

### Paikallinen kehitys (Local Development)
Tämä komento käynnistää paikallisen kehityspalvelimen ja avaa sivuston selaimeen.

`npm start`

Sivusto aukeaa osoitteeseen: http://localhost:3000

### Build (Tuotantoversio)
Tämä komento luo staattiset tiedostot `build/` -kansioon.

`npm run build`

---

## Sisällöntuotanto

Sivusto toimii ensisijaisesti tiedotuskanavana (Blog/News). Uudet julkaisut lisätään `blog/` -kansioon Markdown-tiedostoina (`.md`).

### Uuden julkaisun luominen

1. Luo uusi tiedosto kansioon `blog/`.
2. Nimeä tiedosto päivämäärän mukaan, esim: `2025-12-15-joulutervehdys.md`.
3. Lisää tiedoston alkuun **Front Matter** -metadata:

---
title: "Otsikko tähän lainausmerkeissä"
date: 2025-12-15
authors: ["julkaisija"]
tags: [news, updates, maintenance]
---

Tähän tulee ingressi eli lyhyt johdanto.

Tähän tulee varsinainen leipäteksti.

### Tärkeät huomiot:
* **Otsikot:** Käytä aina lainausmerkkejä (`" "`) otsikossa, jos se sisältää erikoismerkkejä (kuten kaksoispisteitä).
* **Tagit:**
    * `news` (Yleiset uutiset)
    * `updates` (Tekniset päivitykset)
    * `maintenance` (Huoltokatkot)

---

## Ulkoasu

Sivusto on brändätty VakaCloudin ilmeen mukaiseksi.
* **Pääväri:** Vihreä (#16A34A)
* **Teema:** Pakotettu vaalea teema (Light Mode only).

Tyylitiedostot: `src/css/custom.css`

---

## Rakenne

* `/blog` - Tiedotteet ja päivityslokit
* `/src` - React-komponentit ja sivut
* `/static` - Kuvat ja logot
* `docusaurus.config.js` - Pääasetukset

---

Copyright © 2025 Hanhinen.net Consulting Oy.