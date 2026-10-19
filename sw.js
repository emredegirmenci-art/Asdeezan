// Dosyalar değişince bu adı artırın (eski önbellek otomatik silinir)
const CACHE_NAME = 'namaz-v3';
const FONT_CACHE = 'namaz-fonts-v1';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
];
const NETWORK_TIMEOUT = 4000;

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME && k !== FONT_CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Vakitler uygulama tarafından aylık olarak localStorage'a kaydedilir; API'yi önbelleğe almıyoruz
  if (url.hostname === 'api.aladhan.com') return;

  // Google Fonts: önce önbellek (çevrimdışında yazı tipi değişmesin)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(FONT_CACHE).then(c =>
        c.match(req).then(hit => hit || fetch(req).then(res => {
          if (res.ok || res.type === 'opaque') c.put(req, res.clone());
          return res;
        }))
      )
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Uygulama dosyaları: önce ağ (güncellemeler hemen gelsin), ağ yoksa/yavaşsa önbellek
  e.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  const fromCache = () => cache.match(req, { ignoreSearch: true })
    .then(r => r || (req.mode === 'navigate' ? cache.match('./index.html') : undefined));
  const network = fetch(req).then(res => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  });
  network.catch(() => {});
  const timeout = new Promise(resolve => setTimeout(resolve, NETWORK_TIMEOUT));
  try {
    const res = await Promise.race([network, timeout]);
    if (res) return res;
    const cached = await fromCache();
    return cached || network;
  } catch {
    const cached = await fromCache();
    if (cached) return cached;
    throw new Error('offline');
  }
}
