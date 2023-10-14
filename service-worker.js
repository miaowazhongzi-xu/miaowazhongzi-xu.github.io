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
    "revision": "414efd9e1ceec5d4087f8e396916cf50"
  },
  {
    "url": "assets/css/0.styles.9eff3f2f.css",
    "revision": "c9b5ef8333755c8a6dbefe67eed009c7"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
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
    "url": "assets/js/1.d7f033d7.js",
    "revision": "edfc99d6e1c8014c28f036f4fe2eddfa"
  },
  {
    "url": "assets/js/10.f844a772.js",
    "revision": "93f5604e3d7fcc89aa2f12f093960ddf"
  },
  {
    "url": "assets/js/11.a485ded2.js",
    "revision": "e5b41695c40469134256bec903dd0d16"
  },
  {
    "url": "assets/js/12.76735845.js",
    "revision": "77520d350b389c097ed2c5ee1644548c"
  },
  {
    "url": "assets/js/13.8df32162.js",
    "revision": "d183a28d3957f2de8855b2020e2eba9a"
  },
  {
    "url": "assets/js/14.3f3f040a.js",
    "revision": "ccc96ddf77b516ee61804dfeedabdd2c"
  },
  {
    "url": "assets/js/15.cdd8ab2e.js",
    "revision": "860683668c4a3b132afe418cdc5b0965"
  },
  {
    "url": "assets/js/16.28d34208.js",
    "revision": "2c9ff18df3543a4cb55254d6b8c731a1"
  },
  {
    "url": "assets/js/17.420db13f.js",
    "revision": "0d193bc8c8d37831e632df792828e827"
  },
  {
    "url": "assets/js/18.5079bf24.js",
    "revision": "d4f06f30b9c7773b76844c84fe01977a"
  },
  {
    "url": "assets/js/19.4d0dc6c8.js",
    "revision": "5af23488077f67d529eb6e88cf874ae9"
  },
  {
    "url": "assets/js/20.9a83b556.js",
    "revision": "c4431c2a9bc452e7df0cd361231ea961"
  },
  {
    "url": "assets/js/21.9e526c38.js",
    "revision": "35c2d13817e47c3e830154c2ae7becc3"
  },
  {
    "url": "assets/js/22.62d36d10.js",
    "revision": "46eba55238eb10d5fb7fd0fda63025d3"
  },
  {
    "url": "assets/js/23.0de61690.js",
    "revision": "2fb177203b0248f85d750ae5c283a29a"
  },
  {
    "url": "assets/js/4.fb28cc1a.js",
    "revision": "0d5d4ed15a6d4eee1e6705dc96cd6da5"
  },
  {
    "url": "assets/js/5.ee30cc4d.js",
    "revision": "735886c81920afca4354924e83bea536"
  },
  {
    "url": "assets/js/6.ba3c89c4.js",
    "revision": "583afce8d408328c88d55a24ddc4ec81"
  },
  {
    "url": "assets/js/7.fee35651.js",
    "revision": "77bc5879b0110aecd3a820f8b643cec8"
  },
  {
    "url": "assets/js/8.c726b8cd.js",
    "revision": "d8fec9ca17cd3682d9ee354f209448e1"
  },
  {
    "url": "assets/js/9.19be4bec.js",
    "revision": "88b52624afab62511f9097f3bb03b584"
  },
  {
    "url": "assets/js/app.2cad6680.js",
    "revision": "41dad60ca7002f4612019c004bcc7739"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.402debff.js",
    "revision": "38d6af6aafa388f34c535c6a06604657"
  },
  {
    "url": "avatar.png",
    "revision": "f267f367425de08f047af6336bf3066d"
  },
  {
    "url": "categories/index.html",
    "revision": "b7627e7a705a661d9e0447ae742875fa"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e0c3bd8a7cc36a330a543552b7e2fabf"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4d3081d70b9faaa0adfb83a1e48985d2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f11d736bc2ce23bb3301b245224df85a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "452841a0c956afaf860d5d488e6d0ac9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a85de0e0d1bf11c5c9b11d61fe31b19c"
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
    "revision": "d4d8a0a9a3879cba4ed96498b3c75e95"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "aeaa776a5445ba2a3c61faf9df2ea437"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "af627b0077aef7e3aa44887dc78d5141"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "588322d2b845e57c9f8c339953c47818"
  },
  {
    "url": "tags/js/index.html",
    "revision": "436ba1dde518ded418a56fcdacb88dc0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b7affff596e13154603c31499f350bbd"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9b80e67d258e26ce640186e959239ec3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bc7aaaae62f83d91a82f1e83c3bad46f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e52354d963cb4b2162990c9ebef3a33a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "53d1b7d592a36fa1148730d4824700a3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5a3312e9c4632fb3c9bef280247437e3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b50cc9eed5b3e046427fdfabbc0b6923"
  },
  {
    "url": "timeline/index.html",
    "revision": "0de1c467af543702ed2255e1381a4eae"
  },
  {
    "url": "技术文章/index.html",
    "revision": "3df9c71ae66c95662f2c384efc91f001"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7d92d8350097ba6f284b5c7cc4d99bbb"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "26ff728c0d0e69a5ef64add9818fcb9f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7bb3c2f6f58e65e556aef1b93f6c7625"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7ead823b7f2693c5b6d9492c858fd1bf"
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
