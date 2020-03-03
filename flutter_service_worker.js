'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "c1e7125ad10a93160c4de6e5ec9ba22c",
"/manifest.json": "1f4009d2bf821c6eefe23e53b14a8104",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/assets/Open_Sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"/assets/assets/Open_Sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/FontManifest.json": "4a99d826192bd11ed386c03e7e604471",
"/assets/AssetManifest.json": "dc062c89eac055e7c88977bf82aa79a6",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/main.dart.js": "1fdc340cdffde80c6753d5d58d8aec81"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
