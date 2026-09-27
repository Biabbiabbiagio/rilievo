# Rilievo — app per iPad

App web per misurare con il Leica DISTO sopra il ricalco dello stato legittimo. Tutto resta sull'iPad:
l'app non manda dati a nessun server.

## Uso (versione 0.1)

1. In studio: `python3 strumenti/ricalca.py "basi/<caso>"` produce `ricalco.json`, che si mette in
   iCloud Drive.
2. Sull'iPad: **Apri ricalco** → si sceglie `ricalco.json`. Resta in memoria anche chiudendo l'app.
3. Si tocca una linea: diventa blu e il cursore va nella casella. Si preme il DISTO, in modalità
   tastiera, oppure si scrive il valore e si dà Invio.
4. Accanto alla linea compare la misura, colorata secondo lo scarto dal disegno: verde fino al 2%,
   arancio fino al 5%, rosso oltre. Lo scarto è contro il **disegno in scala**, non ancora contro le
   quote scritte del titolo (passo 2 del vettorializzatore).
5. **Diagonale**: si tocca un angolo, poi l'altro, e si misura.
6. **Dubbia** segna l'ultima misura; **Annulla ultima** la barra senza cancellarla.
7. **Esporta** salva `<caso>_piano<N>_misure_<data>.json` in File, e quindi in iCloud.

L'unità del DISTO (m, cm o mm) si sceglie in alto. Un valore sotto i 2 cm o sopra i 60 m viene
rifiutato come sospetto.

## Da verificare sull'iPad vero

- [ ] Il DISTO in modalità tastiera scrive nella casella, e con che tasto finisce (Invio o Tab:
      l'app li accetta entrambi).
- [ ] Il cursore entra nella casella al tocco (Safari su iOS è restrittivo).
- [ ] Pinza per lo zoom e trascinamento con un dito.
- [ ] Riconoscimento «disto» o «manuale»: si basa sulla velocità di battitura, non verificabile senza
      il laser.
- [ ] Apertura da iCloud Drive ed esportazione in File.
- [ ] Uso senza rete, dopo la prima apertura.

## Pubblicazione

L'app si pubblica su GitHub Pages (repository pubblico `rilievo`, vedi PROGETTO.md §Dove vive l'app).
Nel repository va **solo questa cartella**: `index.html`, `sw.js`, `manifest.webmanifest`,
`icona.svg`, `README.md`. Mai ricalchi, misure o altri dati dei casi. A ogni pubblicazione si cambia
`VERSIONE` in `sw.js`, così l'iPad scarica la versione nuova.

## Prova in locale sul Mac

```bash
python3 -m http.server 8765 --bind 127.0.0.1 --directory "<cartella del progetto>"
```

Poi si apre `http://localhost:8765/app/`.
