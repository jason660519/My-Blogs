/**
 * Service Worker - 提供離線緩存和性能優化
 * 支援多分類系統的緩存策略
 */

const CACHE_NAME = 'jason-blog-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

// 需要緩存的靜態資源
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/article-manager.js',
    '/url-redirect.js',
    '/category-index.json',
    '/favicon.ico',
    '/favicon.svg'
];

// 需要緩存的動態內容模式
const DYNAMIC_PATTERNS = [
    /\/content\/.*\.md$/,  // Markdown 文章
    /\/images\/.*\.(jpg|jpeg|png|gif|webp|svg)$/,  // 圖片
    /\/assets\/.*$/  // 其他資源
];

/**
 * Service Worker 安裝事件
 */
self.addEventListener('install', event => {
    console.log('Service Worker 安裝中...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('緩存靜態資源...');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('Service Worker 安裝完成');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('Service Worker 安裝失敗:', error);
            })
    );
});

/**
 * Service Worker 激活事件
 */
self.addEventListener('activate', event => {
    console.log('Service Worker 激活中...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        // 清除舊版本的緩存
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('清除舊緩存:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker 激活完成');
                return self.clients.claim();
            })
    );
});

/**
 * 網路請求攔截
 */
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    
    // 只處理同源請求
    if (url.origin !== location.origin) {
        return;
    }
    
    // 根據請求類型選擇緩存策略
    if (isStaticAsset(request.url)) {
        // 靜態資源：緩存優先
        event.respondWith(cacheFirst(request, STATIC_CACHE));
    } else if (isDynamicContent(request.url)) {
        // 動態內容：網路優先，緩存備用
        event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    } else if (request.url.includes('/category-index.json')) {
        // 分類索引：網路優先，短期緩存
        event.respondWith(networkFirst(request, DYNAMIC_CACHE, 300000)); // 5分鐘
    } else {
        // 其他請求：網路優先
        event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    }
});

/**
 * 檢查是否為靜態資源
 */
function isStaticAsset(url) {
    return STATIC_ASSETS.some(asset => url.endsWith(asset)) ||
           url.includes('.css') ||
           url.includes('.js') ||
           url.includes('.html');
}

/**
 * 檢查是否為動態內容
 */
function isDynamicContent(url) {
    return DYNAMIC_PATTERNS.some(pattern => pattern.test(url));
}

/**
 * 緩存優先策略
 */
async function cacheFirst(request, cacheName) {
    try {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            console.log('從緩存返回:', request.url);
            return cachedResponse;
        }
        
        console.log('緩存未命中，從網路獲取:', request.url);
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.error('緩存優先策略失敗:', error);
        return new Response('離線模式下無法載入資源', { status: 503 });
    }
}

/**
 * 網路優先策略
 */
async function networkFirst(request, cacheName, maxAge = 3600000) { // 默認1小時
    try {
        const cache = await caches.open(cacheName);
        
        try {
            console.log('嘗試從網路獲取:', request.url);
            const networkResponse = await fetch(request);
            
            if (networkResponse.ok) {
                // 為響應添加時間戳
                const responseWithTimestamp = new Response(networkResponse.body, {
                    status: networkResponse.status,
                    statusText: networkResponse.statusText,
                    headers: {
                        ...Object.fromEntries(networkResponse.headers.entries()),
                        'sw-cached-at': Date.now().toString()
                    }
                });
                
                cache.put(request, responseWithTimestamp.clone());
                console.log('網路響應已緩存:', request.url);
                return responseWithTimestamp;
            }
        } catch (networkError) {
            console.log('網路請求失敗，嘗試從緩存獲取:', request.url);
        }
        
        // 網路失敗，嘗試從緩存獲取
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            // 檢查緩存是否過期
            const cachedAt = cachedResponse.headers.get('sw-cached-at');
            if (cachedAt && Date.now() - parseInt(cachedAt) < maxAge) {
                console.log('從緩存返回（網路失敗）:', request.url);
                return cachedResponse;
            } else {
                console.log('緩存已過期:', request.url);
            }
        }
        
        return new Response('資源無法載入', { status: 503 });
    } catch (error) {
        console.error('網路優先策略失敗:', error);
        return new Response('服務暫時不可用', { status: 503 });
    }
}

/**
 * 清理過期緩存
 */
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'CLEAN_CACHE') {
        cleanExpiredCache();
    }
});

async function cleanExpiredCache() {
    try {
        const cache = await caches.open(DYNAMIC_CACHE);
        const requests = await cache.keys();
        const now = Date.now();
        
        for (const request of requests) {
            const response = await cache.match(request);
            const cachedAt = response.headers.get('sw-cached-at');
            
            if (cachedAt && now - parseInt(cachedAt) > 3600000) { // 1小時過期
                await cache.delete(request);
                console.log('清理過期緩存:', request.url);
            }
        }
    } catch (error) {
        console.error('清理緩存失敗:', error);
    }
}

// 定期清理過期緩存（每小時）
setInterval(cleanExpiredCache, 3600000);