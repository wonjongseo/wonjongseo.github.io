'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "573ac32140530d1f065cdbabc1b17a69",
"assets/assets/fonts/CircularStd-Black.ttf": "c885948f6112a185e0e6c79963826882",
"assets/assets/fonts/CircularStd-Bold.ttf": "ce2a6c4154de87815e8971d21a987403",
"assets/assets/fonts/CircularStd-Book.ttf": "c43e9feb9ca817ae86afb47fd0ee4f94",
"assets/assets/fonts/CircularStd-Medium.ttf": "46d551dfd0caa61f1332d7c477f584c2",
"assets/assets/images/1.png": "62d1abaeb382f0a49d5e0db4e5a1e235",
"assets/assets/images/10.png": "03e957fdf7a7e3fdc2686c4e69d08eed",
"assets/assets/images/11.png": "74ea050a189f2c9b5b018b06a49ef46d",
"assets/assets/images/12.png": "ff97f7bd4a440c25ba1a2642a731dea2",
"assets/assets/images/13.png": "ee6fed4d9624b955a4c9449c2cc5b4ad",
"assets/assets/images/14.png": "330fbfdba71ea4f3790dac9b64dd0cc9",
"assets/assets/images/15.png": "bab41d88d0031d2339e8792d6bc0d8a7",
"assets/assets/images/16.png": "df4b5dea2db4d7ee26588b3d2a20a95e",
"assets/assets/images/17.png": "3c0166e0481d4fcf34796c2e4e7ef548",
"assets/assets/images/18.png": "fe1404d54129e89ba7a6effd22bb05ca",
"assets/assets/images/19.png": "cd1c1c2295832e63b0454b0f2d9222b4",
"assets/assets/images/2.png": "19b10119035ebf58e08ac2ece4466c59",
"assets/assets/images/20.png": "a6b7c8ad9a596d0eba95728dec69194f",
"assets/assets/images/21.png": "cc2c501be0e07b75d14a23e378e1a88e",
"assets/assets/images/22.png": "e233ae4a7d4264c56548b3ac633c290c",
"assets/assets/images/23.png": "ddf8d677bae388d24019f5871fb8f9f7",
"assets/assets/images/24.png": "d08ddd2eaacbcf506e085435bf5a1252",
"assets/assets/images/25.png": "619bb71c7f7362da80353c4341160f76",
"assets/assets/images/26.png": "ca803b8da3c82e52adb15a1db56c7fb2",
"assets/assets/images/3.png": "daf37d2423d5cd13f20800bde44c0977",
"assets/assets/images/4-2.png": "dfa1bdb06705583b7f8ba9bfc89466b7",
"assets/assets/images/4.png": "895a0bb0e74cf3e739bab3915ad4f0b0",
"assets/assets/images/5.png": "7b8d7c23b3331bcf8c24460499c72bcf",
"assets/assets/images/6.png": "9a2fcd64022e257956f9da936429121c",
"assets/assets/images/7.png": "d2d55f126429b9a21197b933899c056b",
"assets/assets/images/8.png": "5f9fc183ae7957ceb744460b9e53df88",
"assets/assets/images/9.png": "33d36404f982fdcdf744bb4acc88585b",
"assets/assets/svg/book.svg": "de2a1e59c3aa63af1d3df7c39fed134b",
"assets/assets/svg/calender.svg": "c2338fd95e4c72a239547da13b40896f",
"assets/assets/svg/eye.svg": "1181a6646a384c1feb26874c3bf288e5",
"assets/assets/svg/hiragana_book.svg": "ccb64163e2636be9c0316557fbbb188e",
"assets/assets/svg/pencil.svg": "8a2afc38e6c303045350f92ce9c830c8",
"assets/assets/svg/profile.svg": "888c80ed51f9e4b5af40aea149b42ada",
"assets/assets/svg/save.svg": "3dc244a14593d191ac9c7b9100279ec7",
"assets/assets/svg/speaker.svg": "5823d554525dd61c818cd8c6bcef30d5",
"assets/assets/svg/star_boder.svg": "3a00b0f9bccafb3167522c9598d5e7d0",
"assets/assets/svg/star_full.svg": "5701d6691e653bf85678ae1aa23ee263",
"assets/FontManifest.json": "c74fc6a79cfa9fd6484ca88cb6b84da9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7e9dbeb7a1ddbcd00357b5db1662737e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "1b75bb553299d2c74125e4d076fa550a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "682339a4f2178297b8ee2ce51cf0ce08",
"/": "682339a4f2178297b8ee2ce51cf0ce08",
"main.dart.js": "f116410c6927891acffd093ac5bb2c70",
"manifest.json": "82f03740f01b5bf7b988ce85b9e97d2f",
"version.json": "d022b45b1ca912d42fa7689efd2d2d6b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
