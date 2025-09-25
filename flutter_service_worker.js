'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
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
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ae504bd1d944c6863bb9db02fcb48f90",
"index.html": "b4dbc456fc08334381c3f560429dea99",
"/": "b4dbc456fc08334381c3f560429dea99",
"main.dart.js": "4fb759e96abdda13f1ea12a0ec8069fb",
"version.json": "58d0372fb01e50dece2488c1a0c1d362",
"assets/assets/accounts_background.png": "b0173c72b9991f823f7ff58a8d98582c",
"assets/assets/fonts/Rubik/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/assets/fonts/Rubik/Rubik-BlackItalic.ttf": "db5b8553106c0268251f65367ecfc3a0",
"assets/assets/fonts/Rubik/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/Rubik/Rubik-BoldItalic.ttf": "dc069fd43e202359cfef038ce28b20ac",
"assets/assets/fonts/Rubik/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/assets/fonts/Rubik/Rubik-ExtraBoldItalic.ttf": "5f439e081a4e2980f8368285f7d0f8c9",
"assets/assets/fonts/Rubik/Rubik-Italic.ttf": "17538a8196fb1d1fab888c5941acf9ec",
"assets/assets/fonts/Rubik/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/assets/fonts/Rubik/Rubik-LightItalic.ttf": "ac5353ac12658ccfd7eca99a25be7037",
"assets/assets/fonts/Rubik/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/Rubik/Rubik-MediumItalic.ttf": "4790a18709e781a0994dc17d04fd66f5",
"assets/assets/fonts/Rubik/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/Rubik/Rubik-Italic-VariableFont_wght.ttf": "b98b18526d653e20777cacb1f43f62c4",
"assets/assets/fonts/Rubik/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/assets/fonts/Rubik/Rubik-SemiBoldItalic.ttf": "a8a77ad44dbe8c031ce7b5442661610f",
"assets/assets/fonts/Rubik/Rubik-VariableFont_wght.ttf": "6d3102fa33194bef395536d580f91b56",
"assets/assets/ic_no_photo.svg": "2f73c94df7b334cde16a76fda2848b4a",
"assets/assets/video.mp4": "882896d479b9c67c9ea76fd548bbf054",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "44a57ab961e6612ea8be98523c457f0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "a6a1d5b1b9407467cfa972cc3a8c97ec",
"assets/AssetManifest.bin": "7d3dd29d1aaacf042838b6d89fc1f5a7",
"assets/AssetManifest.bin.json": "c4db12b56c25b97e6414ba408a841d89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "8a48e9cf896c1ed592c72e24a4b0e41c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "9112bb0c393d5534afe782e60aec111a",
"splash/img/branding-1x.png": "25c5893649ef4cf13343ebbfd9e4f36a",
"splash/img/branding-2x.png": "5129584b464dce8509d12a077afa99ab",
"splash/img/branding-3x.png": "d7b7642687423eb4032e6b80e9ed87d6",
"splash/img/branding-4x.png": "f63cc9bf2bc08f35f7cccf0ed1505d7f",
"splash/img/branding-dark-1x.png": "25c5893649ef4cf13343ebbfd9e4f36a",
"splash/img/branding-dark-2x.png": "5129584b464dce8509d12a077afa99ab",
"splash/img/branding-dark-3x.png": "d7b7642687423eb4032e6b80e9ed87d6",
"splash/img/branding-dark-4x.png": "f63cc9bf2bc08f35f7cccf0ed1505d7f",
"splash/img/light-background.png": "5bba44e959fef37b09f284ab39ed7e5b",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "474427f4a589f43a2233b5db589fca58",
".git/refs/remotes/origin/main": "474427f4a589f43a2233b5db589fca58",
".git/objects/fe/661b463742290f71f8d1dd79731c8d9bdf3413": "1ce8eb22bcb9ba428f70febb3d2e17e3",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "56f0b31ef9652258b914a49e31ae8676",
".git/objects/1a/75d19ccc3dae8e8331eb3e922386e06778de25": "a5da709bdd9a1af74968197c611dd337",
".git/objects/1a/9693d97fe25e8635691463d9d51a63ecd32aa0": "5365d0522b787ce31e41643936029420",
".git/objects/1a/7d7f9f675620b421c326339426c126ac3efd3d": "b95cfdc59db794dfee88345f6d0dceaa",
".git/objects/37/3703eb33cf376053c7922096554229d1f0e9ec": "cbb3b57cd8ed6336000b17cb57ca2663",
".git/objects/37/5a99b78cb82a5c3e10896794393a95f852a1b5": "363f49e09c8555d80b862636b6f5ad20",
".git/objects/61/2666920816a7d29fc506effa18c099bb5b71ad": "21fce47e204180312627045b01be2255",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "c0245ee3ff96770aae8bf794a219cd27",
".git/objects/54/47e79e810ef967554252cb73cdd45ef843867e": "c810d74405fc83b37bfc4697df2dde15",
".git/objects/ba/0a3e7591585a2abd7e1503e586cefa75c8acb7": "26179abe7ac6b96fb3dbe8a08fbf4d77",
".git/objects/05/5ad2205d2e347de1e62ec158ffce28e90a5e26": "9aee69726430c75bb1cb2d26d28ac171",
".git/objects/30/8529cba2bc9dde32adce0556432cd206fffe54": "89486d500535fb09ffd5a2d8251604ed",
".git/objects/ab/f760439be83f7dfbc2661468c05049aca03f12": "27477e50274445f47ac7baeba4c50049",
".git/objects/3b/1e1903613de0b31200199367ca3f6efe139629": "01e5bf17de4b1a9ffac63e70bfc9dc6e",
".git/objects/3b/443bd148246d49a045677a2b418a72e295ed3c": "0644713ff9fc2344778ac122e2b9cbed",
".git/objects/59/cd758652c591a09b9565259393f4c8571497ad": "c1481e55ada7e4afa850f289087e79f5",
".git/objects/36/dbec5fc1580045936bc0d768cbe72fe744c60a": "2ac57a5500f1373330b2a9912b6c0b01",
".git/objects/16/83a763ee68363ff0c05f204d0eebaff83bb7bc": "4d5987dfe1bac9b52cc4096a2e793f36",
".git/objects/8a/5a50ab637b310495a60bbae22e20ab76d09ce9": "58791dfa740ac1b93b83991da08fee0d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "2e3ad7cdd4c3f033a3606f21dfae8c55",
".git/objects/b0/28d93c857518a0c09c25dd42b6cd60edc0efb1": "6ed2425aef84d352142fae05e376f190",
".git/objects/f0/bd59588f551324bdc1f6bf56eb1aec70dd8af8": "2ac6f157383eff8e19f1deae017952de",
".git/objects/8b/7b632f9c05c3da44447cc0773d355e45f442c0": "2bde72ff1ba37b96398f796e11aff2b2",
".git/objects/8b/28db25454a2c2ebbf7ae78f18b22598d69abac": "593016bad7aa7d49b1438435d96cd32a",
".git/objects/26/f657de75ab7bc14f3cdf47825e861d5523cecb": "e7686b2e63cac6372276a8b893787493",
".git/objects/88/729833c304c3ef092e978aafa56ed794f284c2": "d58e22ecd412a239c5a021f1527c56f8",
".git/objects/88/16572e2f7b44d0b052728613b23210e414ab3d": "d46968cfd384cf8a42c763de3379d18d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "53865af4f80b7c4a4b086d24433b0303",
".git/objects/bb/ab349a2696f978d1eaf88d40e25d6e132ad9f9": "8cf6c6ba260f78cabd670f70bbe6ff17",
".git/objects/bb/a6fa2122c61b99c285c68a2e9ebe47101bdca1": "75895ebc1b91a7acc0f82b1b6d7e850f",
".git/objects/9c/a5d592f013df232fa4915d5a24b932db44d6db": "b3b6af1f5cc695d61edcb9c815058e6d",
".git/objects/9c/1f72bc8fb0b00b5f8d66e27f9407f522f2e8b0": "2003e5e0a201094a244fac27d66c5881",
".git/objects/47/959c5a4452f4eb7d85fe5a5faf45390cd4da49": "42b7ac9e61fe0955d52184f8104fed61",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "d862eed1843551d333d5acea76f3e853",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "a0c4fa1c53d08453b4406e4da9e6f57d",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "67e10bf48fa1111de78581ef020e5402",
".git/objects/98/c9b4d8aaa89a980a8dc69405e186fdde3ce8d9": "64c8a2b4f5040973ced5ed0477c1031e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "29788e151107ea62f2f774edfd3a5713",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "5ea93da037ba8be3509f1cdddb277858",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "0a8491fd573a58b5f1b86ac992f53783",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "1b1d0a54ee336fe66e6b7333703dc06f",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "f2fecd4838966d802863f3665a682dc7",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "6c192f396764373122d3ea37bd0caff5",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "fdc0d0240d89fb5f2debbe4987d9ae26",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "416abd70f30c36fe65d6b7f4ac6c9ca8",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "e7f9f3e6858cd8b209d63ba4f6bfe676",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "7bab37dae639a2b3ddd3ac35c3ff1138",
".git/objects/33/998a45617e57569311ba891a6fd585a7bace5f": "5ea5641caa0a228d131a459c29c170fd",
".git/objects/33/b4acc4cf9005caeaa240199947e5a0f4a0e801": "30ba299ae76b0f86dae9c8d76e1bd4bf",
".git/objects/dc/764b9a83e6f480734983575521d6de954d4006": "86f30300e787df7b33f0886df4d8675c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "bc522999155f18b4a88627a6079c0e2b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "0662e7cbe81df961ba8a36c819f471d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "d2eb7b4070ad770bdf75e1be4265beec",
".git/objects/d6/cdc40386f47d9fbcd259143a4cd06cfda7ac99": "77df5cd7c5a22bc579915c5772b2ce02",
".git/objects/5c/05464e2100628d2022a25cdbc5720dde1b8095": "1bbde3b737f379151015106e7a91b605",
".git/objects/45/00f2fbebf43bf36add7900bf5adf684e382b3c": "38591c94797e303419cf48b9e224e351",
".git/objects/4b/3b5110152b9af6c479821cfe8af837c523fbbd": "e4b5272e2a6156a90342fbf32b74b0bf",
".git/objects/95/427867ad45740c5c4455829fd2b647de25cd6f": "74f24c61d7e2188c0c385d6d770f62b7",
".git/objects/55/65a1832cb47811ee252049689076d543bbd7f0": "edc7119987beb282adaa8976aa3a31a6",
".git/objects/e5/db6ee01547c36412842bd4deb6a239d51fa631": "ad987cf23a12ad1e9887aaeb8c80daa7",
".git/objects/1b/b60daffae7d5042a71a0686d6cd423ba19f769": "cc95f9e504c1880f6cb2ae826d884c03",
".git/objects/92/13d4b01112b5b5357abeb426edf2a4b2fbc15e": "ec945be9f06650a85d4f5a5af05280cd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "469d11f794c5cd4b1f4242f41a6f74dd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/44/37b8e2dcb303296c2149994970659da4b5137c": "f18578334583948056d8e0f8b751d2d3",
".git/objects/c1/4c7abd5179169034c983bd70652edeb6b5b085": "dee6977e7b15c39cf6ba01c68dccc0b5",
".git/index": "168c701f3be8241326285af61c32dd66",
".git/COMMIT_EDITMSG": "334131c4451cd7b87e710fcbeac540a8",
".git/logs/HEAD": "905f77f53984efddd69ec31f857c4e10",
".git/logs/refs/heads/main": "c44a03cb383f029ed45e9da6aee23f05",
".git/logs/refs/remotes/origin/main": "36190e65159b3d4327657b8f44997b26",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "668f3933fb2ba31e6901e2ce7addeeb2"};
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
