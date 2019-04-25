importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js"
);

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  new workbox.strategies.CacheFirst()
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/css/main.css",
    "revision": "7b1637e314076ef068ae4040a48cf234"
  },
  {
    "url": "assets/img/icons/icon_calendar_dark.svg",
    "revision": "20c05479c12ef60e693fbbc26cd34c8b"
  },
  {
    "url": "assets/img/icons/icon_calendar_light.svg",
    "revision": "1d7567566a43c2162de102403d92361c"
  },
  {
    "url": "assets/img/icons/icon_moon.svg",
    "revision": "3308ae70c71f5b0a50e012096809a865"
  },
  {
    "url": "assets/img/icons/icon_place_dark.svg",
    "revision": "fb09bfc6231898c6b22d6bcb603b3e50"
  },
  {
    "url": "assets/img/icons/icon_place_light.svg",
    "revision": "9c6abc51325b16390407863cfc4a1c8f"
  },
  {
    "url": "assets/img/icons/icon_speak.svg",
    "revision": "f75eb1c084d3b1cb10b2d15cc48f588b"
  },
  {
    "url": "assets/img/icons/icon_sun.svg",
    "revision": "1e9431cabf1305f9e51bd8e87fe8b1ac"
  },
  {
    "url": "assets/img/illustrations/illustrations.png",
    "revision": "17dbd3dd020f20e4c5ba8c9c61eb60d2"
  },
  {
    "url": "assets/img/meetings/image-daug.png",
    "revision": "9b5a8144711aff130a6123978e60e022"
  },
  {
    "url": "assets/img/meetings/image-dpjs.png",
    "revision": "000b5751318835f6a5085e861d49dd8d"
  },
  {
    "url": "assets/img/meetings/image-galsen-ai.png",
    "revision": "16850c321bc05ed0d39a54dd488e1bf1"
  },
  {
    "url": "assets/img/meetings/image-gdg.png",
    "revision": "17b050db8abaaca2a7346302b91dc7d6"
  },
  {
    "url": "assets/img/speakers/speaker-ciss.png",
    "revision": "30fa9e4a3d2bef9e1a652c9538910e6d"
  },
  {
    "url": "assets/img/speakers/speaker-leyla.png",
    "revision": "3220578c00b03c20e9b263f89e13ad02"
  },
  {
    "url": "assets/img/speakers/speaker-thierno.png",
    "revision": "174136fb3d57cc151ffed9994961bec5"
  },
  {
    "url": "assets/js/main.js",
    "revision": "bf14fe129c68e0e3f0541890dadd8b76"
  },
  {
    "url": "index.html",
    "revision": "e9469031a084b44b54a2492a4d6bde6e"
  }
], {});
