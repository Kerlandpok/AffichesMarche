const CACHE="affiches-marche-v2-promos-images";
const ASSETS=["./", "index.html", "sw.js", "logo-igp.svg", "logo-aop.svg", "logo-label-rouge.svg", "images/pomme.svg", "images/poire.svg", "images/banane.svg", "images/orange.svg", "images/citron.svg", "images/fraise.svg", "images/tomate.svg", "images/carotte.svg", "images/courgette.svg", "images/aubergine.svg", "images/poivron.svg", "images/pomme-de-terre.svg", "images/avocat.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));