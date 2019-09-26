const VERSION = 'v1';

self.addEventListener("install", event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if(request.method !== "get") {
    return;
  }

  event.responseWith(cacheResponse(request));
})

async function precache() {
  const cache = await caches.open('v1');
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    // 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'
  ]);
}

async function cacheResponse (request) {
  const cache = await cache.open(VERSION);
  const response = cache.match(request);
  return response || fetch(request);

}