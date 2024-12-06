self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : '¡Nueva notificación desde la Tienda de Mascotas!',
        icon: 'perro.png', // Icono de la raíz
        badge: 'https://img.icons8.com/ios/452/dog.png', // Badge público
    };

    event.waitUntil(
        self.registration.showNotification('Tienda de Mascotas', options)
    );
});
const CACHE_NAME = 'travel-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/script.js',
  '/logo2-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
