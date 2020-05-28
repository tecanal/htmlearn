const CACHE_NAME = "v2.9.1";
const URLS_TO_CACHE = [
    "../index.html",

    "../codemirror/codemirror.css",
    "../css/style.css",

    "../codemirror/codemirror.js",

    "../codemirror/mode/javascript/css.js",
    "../codemirror/mode/javascript/xml.js",

    "../codemirror/addon/fold/foldcode.js",
    "../codemirror/addon/fold/foldgutter.js",

    "../codemirror/addon/selection/active-line.js",

    "./jquery-resizable.min.js",
    "./jquery.slim.min.js",

    "./lzma.js",
    "./lzma_worker.js",

    "./editor.js"
];

/**
 * This event runs when the service worker first gets registered and installed.
 */
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
    );
});

/**
 * This event runs when the ServiceWorker is updated.
 */
self.addEventListener("activate", event => {
    const cacheWhitelist = [];
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1)
                        return caches.delete(cacheName);
                })
            );
        })
    );
});

/**
 * Intercept network calls. Send from cache or network.
 */
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});