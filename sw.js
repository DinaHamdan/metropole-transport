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
    '/asset/img/logo1.avif',
    '/asset/img/logo2.avif',
    '/asset/img/logo3.avif',
    '/asset/img/logo3bis.avif',
    '/asset/img/logo4.avif',
    '/asset/img/logo5.avif',
    '/asset/img/logo6.avif',
    '/asset/img/logo7.avif',
    '/asset/img/logo8.avif',
    '/asset/img/logo9.avif',
    '/asset/img/logo9bis.avif',
    '/asset/img/logo10.avif',
    '/asset/img/logo11.avif',
    '/asset/img/logo12.avif',
    '/asset/img/logo13.avif',
    '/asset/img/logo14.avif',
    '/asset/img/logo15.avif',
    '/asset/img/logo16.avif',
    '/asset/img/logo17.avif',
    '/asset/img/more.avif',
    '/asset/img/card.avif',
    '/asset/img/correct.avif',
    '/asset/img/cross.avif',
    '/asset/img/down-arrow.avif',
    '/asset/img/hour-glass.avif',
    '/asset/img/icon.avif',
    '/asset/img/left-chevron.avif',
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