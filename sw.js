const CACHE="affiches-marche-v2-11-a4-corrige-20260726";
const ASSETS=["./","index.html","sw.js","logo-igp-officiel.jpg","logo-aop-officiel.jpg","logo-label-rouge-officiel.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));