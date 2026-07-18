const CACHE_NAME = "ambulancias-v3";

const ARCHIVOS = [

    "./",
    "./index.html",

    "./css/estilos.css",
    "./css/variables.css",

    "./js/app.js",
    "./js/db.js",
    "./js/ui.js",
    "./js/jszip.min.js",

    "./manifest.json"

];

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ARCHIVOS))

    );

});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))

            );

        })

    );

    self.clients.claim();

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request);

            })

    );

});