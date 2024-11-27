'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ec543f4d74a0160a4d52d5f6d9f6a11e",
"version.json": "51d153e79ca629340fa6dbcc081bf236",
"splash/img/light-2x.png": "608be3286e52a72f2d3929bc872ccc91",
"splash/img/dark-4x.png": "82bf5f57c439ae8cd6c6a792d984265f",
"splash/img/light-3x.png": "881889e072a0e49ef2a1ddefa3ee11dd",
"splash/img/dark-3x.png": "881889e072a0e49ef2a1ddefa3ee11dd",
"splash/img/light-4x.png": "82bf5f57c439ae8cd6c6a792d984265f",
"splash/img/dark-2x.png": "608be3286e52a72f2d3929bc872ccc91",
"splash/img/dark-1x.png": "d8584df105c456cd7eaaf1eaaac7b012",
"splash/img/light-1x.png": "d8584df105c456cd7eaaf1eaaac7b012",
"index.html": "9c5886e41d3f2d5640cda797f9dfee1a",
"/": "9c5886e41d3f2d5640cda797f9dfee1a",
"main.dart.js": "37fbe3395a7c2f9e1d3a38d566d3ce3e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "ff0aaa6a04568e0691fd7ed9793061f2",
"icons/Icon-192.png": "1b2936302f459ab2e32c52e0ffa6e4f6",
"icons/Icon-maskable-192.png": "1b2936302f459ab2e32c52e0ffa6e4f6",
"icons/Icon-maskable-512.png": "3c48cc40547a257dd8b1332751f24676",
"icons/Icon-512.png": "3c48cc40547a257dd8b1332751f24676",
"manifest.json": "efd35c28dfbbc38f7463a6702fe09c82",
"assets/AssetManifest.json": "866af2b3c95d2cebfb339a2e4d491e0b",
"assets/NOTICES": "9da2f47d1f2891c00e64cdf7931932d4",
"assets/FontManifest.json": "647ab327e7be1dbe3cefa948e8858676",
"assets/AssetManifest.bin.json": "f7871a758f3442785eff32fb1d60b0a3",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ff2fc9b62f28909061bd4a20a589b3af",
"assets/fonts/MaterialIcons-Regular.otf": "938506f790336cd63d754955ff329975",
"assets/assets/images/old/spade.svg": "0e9084b4f1ed7968421899fc714a0f3b",
"assets/assets/images/old/spade.png": "356d481f19c031f660ee6fda6eb929b1",
"assets/assets/images/old/heart.png": "edd6e5c8cd2893f66dfbcc78e72d7e8c",
"assets/assets/images/old/club.svg": "ab6ce769a8b63817ae1cb26d1f01c6d7",
"assets/assets/images/old/diamond.png": "6dfa45e4d35e957f789a88a48847a249",
"assets/assets/images/old/diamond.svg": "d17633d14ed3b09fa2c149d873d1c152",
"assets/assets/images/old/club.png": "963b0715dc9742531c471c83aed889bb",
"assets/assets/images/old/heart.svg": "d28317ee5ce4adbaf6703e960059b1ee",
"assets/assets/images/alt/spade.svg": "a5921f89fb7ea8c2d8efbe09d2262189",
"assets/assets/images/alt/spade.png": "91319a1a4f81630b4cf3209a0bb716d8",
"assets/assets/images/alt/heart.png": "00130310d208c2519a911e306d412659",
"assets/assets/images/alt/club.svg": "314de3e5cf11a992f81a0745bac59d70",
"assets/assets/images/alt/diamond.png": "2fa81212f45b92a0c8185e97be572141",
"assets/assets/images/alt/diamond.svg": "2c8459329b13355a3e8bad3f1a488dda",
"assets/assets/images/alt/club.png": "3dd07cb5728c15cb3e5795da0684cfd0",
"assets/assets/images/alt/heart.svg": "c30d8a2c097dfbca6f39939ea5b7fd45",
"assets/assets/audio/card_pick.wav": "b5493d2158949ec62fd99622ab316540",
"assets/assets/audio/ui_error.wav": "e44b25eae33b3f1e84439d61bbfee643",
"assets/assets/audio/ui_hint.wav": "e3465c033327fa96bb8e051e1fb417bb",
"assets/assets/audio/card_flip_2.wav": "1e7d51941823b863f544269f2dff4545",
"assets/assets/audio/balloon_pop.mp3": "aa34af3aba2b4c636687cb5060d60eee",
"assets/assets/audio/card_flip_1.wav": "1a867e0f7e3fe7bd372cab5e17cd2bb0",
"assets/assets/audio/card_move_2.wav": "fa27cbe6d546071166d8cda00bd378bb",
"assets/assets/audio/card_move_1.wav": "ef31ccaa664564e7f753ce89f26dd7dd",
"assets/assets/audio/card_swipe.wav": "805998a98cc9043c2999b887291f18b0",
"assets/assets/fonts/CardSuitIcons.ttf": "fb724e804ee153813a83b892d8e412a2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
