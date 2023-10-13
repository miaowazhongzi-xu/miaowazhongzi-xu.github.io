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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6c6631d9aab1a27a6f9d3c75172bed41"
  },
  {
    "url": "assets/css/0.styles.882bb2c9.css",
    "revision": "1422b907d289e24742a9be214499a205"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.ea0b669b.js",
    "revision": "a2b5fee8201b763b3d88d3f300610038"
  },
  {
    "url": "assets/js/10.a3591d02.js",
    "revision": "d196f03341d71c099c702c27fd4075ca"
  },
  {
    "url": "assets/js/11.6ce26445.js",
    "revision": "754cf2ffaa9aa09248af670239a1d813"
  },
  {
    "url": "assets/js/12.11783a6c.js",
    "revision": "e8260cbb0717e41aa0e61b7c245314e9"
  },
  {
    "url": "assets/js/13.cfa8582e.js",
    "revision": "7dabfcdd18ef0f1310d53ed019961e53"
  },
  {
    "url": "assets/js/14.062672c9.js",
    "revision": "670f8c0b912fa6ce85299ce7f94f1a8b"
  },
  {
    "url": "assets/js/15.26757a1e.js",
    "revision": "e983ce7e06eea05b02b315ac8b841b96"
  },
  {
    "url": "assets/js/16.7e72197c.js",
    "revision": "920ff54338801a96ed3420ddbff16611"
  },
  {
    "url": "assets/js/17.9bea8e29.js",
    "revision": "29e06b12e33ebcb15640f6b3b8ab8baf"
  },
  {
    "url": "assets/js/18.f8bbc125.js",
    "revision": "627e943d354793c976a5bdd4f81f11cb"
  },
  {
    "url": "assets/js/19.fe7e0c66.js",
    "revision": "c2ab0e111d0679ff997c0b5614ff578c"
  },
  {
    "url": "assets/js/20.e8e3b6f5.js",
    "revision": "82a0307626bdcb6c5c78029728f345e4"
  },
  {
    "url": "assets/js/4.249fb186.js",
    "revision": "27640ccf7673a7312e2c4512eb3cd0a9"
  },
  {
    "url": "assets/js/5.55d2df79.js",
    "revision": "47d9f114502143cd29b6928b54e68277"
  },
  {
    "url": "assets/js/6.1f9b9963.js",
    "revision": "d9742edb47da64feb0acf9721ba53c6b"
  },
  {
    "url": "assets/js/7.5e404a4d.js",
    "revision": "653c1eb8b4b560dbf1766b0bb9a53dd5"
  },
  {
    "url": "assets/js/8.52528eda.js",
    "revision": "7b4385a5142d22c245f582b6cd4cb248"
  },
  {
    "url": "assets/js/9.5e0147b6.js",
    "revision": "d92f246e3443e18ee21bde4325943e0b"
  },
  {
    "url": "assets/js/app.c5fe06a3.js",
    "revision": "d6b9705421ba9b6f175bc54caf1e6a5a"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.96049b68.js",
    "revision": "eebc6bfb506e8e496515062f19ff8b0c"
  },
  {
    "url": "avatar.png",
    "revision": "f267f367425de08f047af6336bf3066d"
  },
  {
    "url": "categories/index.html",
    "revision": "562526fc6511026aa183ac97420000ac"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bc4eaf9c25c10d12e925a789d6e9c119"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "158f3808e8dae5ef0bb4a55eff8e378a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b87121d8f3361f4fb1d3ac578b69cb44"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b83c4fba8dfe932699dadb91e67976f3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "1dd79f9aa270fed91260e618c8060761"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "48c7e599c19014a214b79ed3f204fe78"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "8d194edd8922b7ca4033a6d875c03e7f"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "72f29dbadf182473135b751e8f9427fa"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b6ae4f5acb839849d5ad9a3db8e9e2ed"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "cf5f6ef0d3b167cf860a66d264ce9010"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "031a3c871100f2f44a20304c583be604"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e3e67faea39e7652da33f632f9165ec7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "16f37f721355284e1bd79cecc4fe1274"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "063cf5586b4b473345758155db0eabc4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "25dccca12971ccfdecc3515368474c0d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4a571586003c6f7fe3263551319c5190"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "fdb95ac9b14e7710d5db7a8b92f42e48"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8e9202c76d71f28bed8c865f0a40b5f5"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b11008ff29b4735ad4124f711b3347d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "03423d389475189ed2294814183b45d3"
  },
  {
    "url": "技术文章/index.html",
    "revision": "89b6c52ce2e3abcb5b035f7f569c8ae1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2f32b42e0f6909523bea0e48b673b4b9"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "57fa1b5697418bee21436443d089088a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6e741eea4dc3d494c7f2798da507ef83"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0e7ac41df449e39e32959165bf8d1828"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
