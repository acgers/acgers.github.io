'use strict';

(() => {
  const cacheVersion = '-sw-v5';
  const dynamicVendorCacheName = 'dynamic-vendor' + cacheVersion;
  const staticVendorCacheName = 'static-vendor' + cacheVersion;
  const staticAssetsCacheName = 'app-assets' + cacheVersion;
  const jsCacheName = 'app-js' + cacheVersion;
  const cssCacheName = 'app-css' + cacheVersion;
  const contentCacheName = 'content' + cacheVersion;
  const maxEntries = 50;
  const maxAgeSeconds = 3600 * 24 * 3;

  self.importScripts('js/sw.js');

  self.toolbox.options.debug = false;
  self.toolbox.options.networkTimeoutSeconds = 60;

  self.toolbox.router.get('/assets/(.*)', self.toolbox.cacheFirst, {
    cache: {
      name: staticAssetsCacheName,
      maxAgeSeconds: maxAgeSeconds,
      maxEntries: maxEntries
    }
  });

  self.toolbox.router.get('/css', self.toolbox.fastest, {
    origin: /fonts\.googleapis\.com/,
    cache: {
      name: dynamicVendorCacheName,
      maxAgeSeconds: maxAgeSeconds,
      maxEntries: maxEntries
    }
  });

  self.toolbox.router.get('/(.*)', self.toolbox.cacheFirst, {
    origin: /(fonts\.gstatic\.com|www\.google-analytics\.com|acgers-1253700126\.cossh\.myqcloud\.com|unpkg\.com)/,
    cache: {
      name: staticVendorCacheName,
      maxAgeSeconds: maxAgeSeconds,
      maxEntries: maxEntries
    }
  });

  self.toolbox.router.get('/js/(.*)', self.toolbox.cacheFirst, {
    cache: {
      name: jsCacheName,
      maxAgeSeconds: maxAgeSeconds,
      maxEntries: maxEntries
    }
  });

  self.toolbox.router.get('/css/(.*)', self.toolbox.cacheFirst, {
    cache: {
      name: cssCacheName,
      maxAgeSeconds: maxAgeSeconds,
      maxEntries: maxEntries
    }
  });

  self.toolbox.router.get('/*', (request, values, options) => {
    // !request.url.match(/(\/ghost\/|\/page\/)/) &&
    if (request.headers.get('accept').includes('text/html')) {
      return self.toolbox.fastest(request, values, options);
    } else {
      return self.toolbox.networkOnly(request, values, options);
    }
  }, {
      cache: {
        name: contentCacheName,
        maxEntries: maxEntries
      }
    }
  );

  self.addEventListener('install', event => {
    return event.waitUntil(self.skipWaiting());
  });

  self.addEventListener('activate', event => {
    return event.waitUntil(self.clients.claim());
  });
})();
