'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "31d5a282cb7b1bd5ab45aa67d99477fb",
".git/config": "8b6df09b2f25e25506943c3f81b7e52b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1a006458ce27b121139b198560304334",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c5be6e20c2390d14b0c165592df582ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e6c3ca8ce066fbfa212f7c35afaa6f54",
".git/logs/refs/heads/master": "e6c3ca8ce066fbfa212f7c35afaa6f54",
".git/logs/refs/remotes/origin/HEAD": "e5bfc421911b9f93505de453da8b0e34",
".git/logs/refs/remotes/origin/master": "027dbca290b4f6d4a6ce392aaf46d7a3",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/09/c1b0b17a490d026078f8065ab33bbfa28884ac": "3a835124254c0e78b586df0329235f6d",
".git/objects/0b/60e851a824f68cf957142ded4597cc5b5d658e": "234a874580e09cdbbca0efc51edd9ab0",
".git/objects/12/7eba887edd71d000fc047f491d0b0772d134c3": "a2b382c47b7ca3d37f4a4a47c29737a5",
".git/objects/17/cbe6834214a46f2fb1847881b68d490d6efe62": "07e70dee76da935e9b341947adc42c7f",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/492616677c3bc3ec7f7045a7260c2e6592aeaa": "4e7347b6e867121450595377579d7efc",
".git/objects/25/80cd13e670966e57be16a0d0cf1fffa60bb619": "bd91672f8343bc80ea68d0922894019b",
".git/objects/29/78ce048c10b1f4f176211615459bb456207d92": "053d37f798b8ee3b0f26fe8a72844e88",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/34/cb0358d580f0230bad07b681b9c47b6c30c6e4": "03a08463a812f2efee5338d78e840702",
".git/objects/3e/8aa4a457d0967f29692d490963a92617e7dcb5": "c20d3f6d83437ae89e2073fb7740beb3",
".git/objects/3f/a31d1c86a70a6e36f9f57b75b2c840a703ba49": "c41014da877537035616291b1943271c",
".git/objects/40/2382a545f4e4427c7b1a95949f288af005cae8": "37c6bde8cd5baba939c78d85cbf7ff65",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/58/608e799942dfc916e7dbf60a320caea674dd27": "a7907821156cd90d2a686fdbb297db70",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/3cdb46ac1bf6858e209bee8350d9e31e113e07": "626eaa5dcdc3cef2d6077dd57b436daf",
".git/objects/5c/8bc4b6f0c2805a1f9e2c1d22581c9169ed7201": "4cc6d2539db91ad9a2ab8a2524965e07",
".git/objects/5e/49f80689f0905d2b7355caee19fd6210e36b7e": "7504d3bd8f8a69647c981beca7eb72e1",
".git/objects/5f/91d1042d1b58d032341ee19d31d89cbef5a279": "0df36120167487fa30300881aafbf642",
".git/objects/68/af2883b3b5ff9894a5cef93bcee8b9f3e3f6a7": "f3777e0922d80eaeecc6d590b3440e61",
".git/objects/68/ce5d6214d065496195f9f5f894fb45dc49ce41": "4cf48d97d7cad92a06f2c676609b3f96",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ed6dc51b2e3e2ab1f89778087c00388a10f4cd": "26f8c25356be5bc333f0133aaf1d97e0",
".git/objects/8f/f65152df30904f810d56e4565c81fcc86e3f30": "f01ca59d08de75a8c12f9244597ec578",
".git/objects/90/e67d39e3f7ce51427efa1381e2313f839eb076": "31d745e7ebc735f2dc91e8529e79220c",
".git/objects/95/30d84d564033577d4e985b703e5df42e1884ca": "1298e80928d09609b301daac6bb7f676",
".git/objects/96/7ba4e4ee5f1aaa3d7da1371e1dfb2e81a94bb3": "db9624d9b4a11d109f251c9ee43cca13",
".git/objects/97/8e53a7de6f5f8d1febb9fede1df0a077c03b21": "777269cc5a91f945d075a30d97de0836",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/0b7028d1ffe8d264a0b891c85c58ac5e7db5c6": "adb7a200ea4b81e89a5e3b59539802dc",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/6cfeb781fa634451caa17fa17e2fc231111989": "01cd530363ad92f4ed79091e3e6e24ca",
".git/objects/a5/802d0bead17ec5a811c923a100e0a3d18d0d1e": "5a3eae88111db33166cdfdff33797891",
".git/objects/a6/b713e9f6b6933141113ce2d8b80b5a344455cb": "de75d17e45aacbaecb6f03e16a529308",
".git/objects/ad/0a83c0270f87b212455c0f08f5cf5da002ec3e": "15cb7e8c7695acb2622040c328cf2ef6",
".git/objects/af/4a28f0a97cea94d528dd584c3f1a8371748c7d": "78e2bd5e480c94e1416aa4f395b23b70",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ce7860246edfede723b19129fa12c811c4507a": "e791ccc82de183e58e04262618bf8edd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/ce673268cc8ca21af36677976c42ed4cb3fb9d": "bf9d70025062a4926d2608c50ceb6bbf",
".git/objects/cc/7e1c7d4ca997d41aa385c7c129c3b137b30ae3": "3a7e9c97950b4a9def7960ffe73b10ba",
".git/objects/d2/8221046a2cd3e9713f989e52076eedd46d1b57": "0c8ac252f73095f2c798e8e633171ed2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/764d26a3930448e6c145ce59931b1af95da616": "2b3ca4ef919740421581a1c28ec1f5c9",
".git/objects/d5/b31db59d4d9b169bd01e19454ee7036c3e28ec": "cdca3d5eae8c5fc84f8bad08ee21be21",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/master": "7a0d13678c0a443b091546e0c1b01df3",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "7a0d13678c0a443b091546e0c1b01df3",
"assets/AssetManifest.bin": "9bb15d0e5dad89aa5fb314e25fe17695",
"assets/AssetManifest.bin.json": "d7fb3a693b2bb0fac8fb20ae23ac2dbe",
"assets/AssetManifest.json": "21abf074a2168f2b2ae7fe43a846ab07",
"assets/flower/cap.png": "3f19a1d6eb263b200c84cbab5eec78c7",
"assets/flower/doll.png": "193f8dbdb4dd3989ff9f80fb1bfc9ea0",
"assets/FontManifest.json": "6f8ddfe72f9187f860e41087e5cad17c",
"assets/fonts/baloo.ttf": "3633c80679fe5ccb57ffdc242547836d",
"assets/fonts/MaterialIcons-Regular.otf": "31afcabf74a4a2a08ac80e1de6439f68",
"assets/fonts/noto.ttf": "b72e420edb95cdf06e6e0a27bc0d964d",
"assets/fonts/raboto.ttf": "5b03341126c5c0b1d4db52bca7f45599",
"assets/NOTICES": "0e2ac8b260187cfa0958bd84e8d6b228",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "d5383fece61dc2cf19acfb8d8b3689ee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "226a991df834dd12654e1746c44bba53",
"/": "226a991df834dd12654e1746c44bba53",
"main.dart.js": "3a3c84c918ff726d7cc8bd59158bf578",
"manifest.json": "b9aaefb90c44713d5d35fb5b49d4a98d",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
