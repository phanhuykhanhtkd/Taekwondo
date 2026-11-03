/* Trang ngoài CLB Taekwondo – giúp Android cài app ra màn hình chính (mở toàn màn hình như app thật).
   Không lưu dữ liệu nào; khi mất mạng chỉ hiện một dòng nhắc kiểm tra kết nối. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#7d0a0e;color:#fff;font:16px system-ui,Arial;text-align:center;padding:24px">' +
      '<div><b style="font-size:18px">CLB VÕ THUẬT TAEKWONDO</b><p>Không có mạng. Anh/chị kiểm tra kết nối rồi mở lại.</p></div>',
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }));
});
