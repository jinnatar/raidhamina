// service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'raidhamina',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for all shortlinked pages
workbox.routing.registerRoute(
    new RegExp('/^[^.]+$/'),
    workbox.strategies.networkFirst()
);

// use `networkFirst` strategy for Matomo
workbox.routing.registerRoute(
    /^https?:\/\/matomo.nocturnal.fi/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// local cdn
workbox.routing.registerRoute(
    /^https?:\/\/cdn.nocturnal.fi/,
    workbox.strategies.staleWhileRevalidate()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.jsdelivr.net/,
    workbox.strategies.staleWhileRevalidate()
);
