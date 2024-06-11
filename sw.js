//Checking if navigator supports the API
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
            // registration worked
            console.log('registration succeeded');
        }).catch((error) => {
            // registration failed
            console.log('Error : ' + error);
        });
}

//fillingthe content
var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/asset/img',
    '/styles/styles.css',
    '/js/main.js'];
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});
/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    })
    );
});