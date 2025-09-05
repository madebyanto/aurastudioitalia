const CACHE_NAME = 'aura-offline-cache-v1';
const OFFLINE_URL = '/offline.html';

// Durante l’installazione, salva la pagina offline
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll([OFFLINE_URL]))
    );
});

// Intercetta le richieste e mostra offline se non c’è connessione
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
});