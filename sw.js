// Tiene l'app sull'iPad per usarla senza rete (cantine, seminterrati).
// Cambiare VERSIONE a ogni pubblicazione, così l'iPad scarica la nuova.
const VERSIONE = "rilievo-v0.1";
const FILE = ["./", "./index.html", "./manifest.webmanifest", "./icona.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(FILE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(n => n !== VERSIONE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
