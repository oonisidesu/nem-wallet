/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts(
  "./precache-manifest.226cd29722039b058b8ba83d1c061fe0.js"
);

workbox.core.setCacheNameDetails({prefix: "easy-wallet"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "86bff6dda03b45367e1d5dc6cda45ab9"
  },
  {
    "url": "precache-manifest.33c4c24c1c655a419b83d45e980973e7.js",
    "revision": "33c4c24c1c655a419b83d45e980973e7"
  },
  {
    "url": "precache-manifest.370099fdff5462d880c73d596e74d0c6.js",
    "revision": "370099fdff5462d880c73d596e74d0c6"
  },
  {
    "url": "precache-manifest.96cba3157960adf5257411ad122f1dbd.js",
    "revision": "96cba3157960adf5257411ad122f1dbd"
  },
  {
    "url": "precache-manifest.b7b8c47214cacb1525899c1b570dea52.js",
    "revision": "b7b8c47214cacb1525899c1b570dea52"
  },
  {
    "url": "service-worker.js",
    "revision": "818e4f49c0dba7c5234d54d3330f8143"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
