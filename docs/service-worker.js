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
  "./precache-manifest.96cba3157960adf5257411ad122f1dbd.js"
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
    "revision": "09d6a41fa99deaac7e83390af851224e"
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
    "url": "service-worker.js",
    "revision": "cdc7ced1b5e8b122690d51ed1c90af4b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
