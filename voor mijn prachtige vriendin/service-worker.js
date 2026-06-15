const CACHE_NAME = "jill-love-app-v1";
const FILES = [
  "./",
  "index.html",
  "reason.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icon.png"
];



self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});