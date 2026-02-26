self.addEventListener('install', (e) => {
  console.log('Installed');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
