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
    "revision": "52e5ab666fabdb6e94b5a15467bc03ad"
  },
  {
    "url": "assets/css/0.styles.a47637e1.css",
    "revision": "69fdb2859fa1fe16250b4e5cfb4400ee"
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
    "url": "assets/js/1.36d1cd2f.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.6edf7f3f.js",
    "revision": "4f4e7f7a92bfb7ae20c15956772e8771"
  },
  {
    "url": "assets/js/13.9c007ea8.js",
    "revision": "fb0f7ea5688e3ef478ec4948a14f5dc2"
  },
  {
    "url": "assets/js/14.4760726a.js",
    "revision": "6b11e02d4f96a166b04dac3809201f1a"
  },
  {
    "url": "assets/js/15.54c65796.js",
    "revision": "31f6354b53226bdfec8eac4ce8fa2e15"
  },
  {
    "url": "assets/js/16.ed258a1e.js",
    "revision": "3715c071cd9357e79000b7b5a054ef35"
  },
  {
    "url": "assets/js/17.81826f14.js",
    "revision": "3ccb10a92edd069925666d9133873238"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
  },
  {
    "url": "assets/js/4.998cebd1.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.0544ca18.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.457e2f4f.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.b18af9f3.js",
    "revision": "a754528a91ff161ac1325c06fe4d650d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "f267f367425de08f047af6336bf3066d"
  },
  {
    "url": "categories/index.html",
    "revision": "c7a0367c8820b34d790b142852fc7487"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0cfd6afbc0fdba4e4ced4d9a8f5f022f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ea5aa4286649ea8a740d2d8a743eb150"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "62e2774450589ca85fd9671914b922cb"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c6d2970efab4ae4567b0f9e942af8d9c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "316dfe8c68743916670b3e61ba6432f8"
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
    "revision": "a76cff3d03563a1946b202db5f47ee15"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "14f779e3cd85260758a0f1779dfa4ba8"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "66a22ba312941230668430924427993f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "912f62d0e9190d5c652b7c3dc27b0477"
  },
  {
    "url": "tags/js/index.html",
    "revision": "290ca3542d39260bc61993bbb5f2fa9c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "bfd6e5799cae25c0bfb187712c352538"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "8ac8778b85223d80aefa14e8e34378d2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c793874dc233e422c9c57ba0c9e5486a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "63dda04dc75ee5a138a5ac755a69ff1f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "65b6339e1ca4df8444242858b0ad5c24"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "15784d1722077e447585374848248269"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ae98d8c085c269ca0096332a0fbfb52e"
  },
  {
    "url": "timeline/index.html",
    "revision": "90bbcde98328950bff089d52d5b1d516"
  },
  {
    "url": "技术文章/index.html",
    "revision": "dedc2e243f6ca7de498f869e32db6439"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7bbf00aba66dbf3a4da31dcdb9a4f0a7"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1d4c7e842794275350a360fc57187d34"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f0d67e064adbc8391253ed22539919b8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "44bd235fd66b8ce0ae9412ca8a1e8650"
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
