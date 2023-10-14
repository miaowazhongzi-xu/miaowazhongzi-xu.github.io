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
    "revision": "19b00e8bae57aff0db7305d7499492bc"
  },
  {
    "url": "assets/css/0.styles.621bc39f.css",
    "revision": "c02302937e630853790c9b99e05eeace"
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
    "url": "assets/js/1.1119f111.js",
    "revision": "702149a48ebc557ec14dc152f3cae2c6"
  },
  {
    "url": "assets/js/10.0846d67f.js",
    "revision": "a761c03ec580be1488c3481e896d53ad"
  },
  {
    "url": "assets/js/11.c63bcfc5.js",
    "revision": "052c7baaa01e9a12c511e15322c24c34"
  },
  {
    "url": "assets/js/12.bea15ca6.js",
    "revision": "89d70e9acc97e1cf2c64da7afcfe7765"
  },
  {
    "url": "assets/js/13.d0e60ae6.js",
    "revision": "0691765082d382821fbaa7f1c7ca5ea8"
  },
  {
    "url": "assets/js/14.037a0dc7.js",
    "revision": "485f61f0ae02710347b23939942bd384"
  },
  {
    "url": "assets/js/15.0fe0cb08.js",
    "revision": "67eb96d6b14ba7bf5dc3c883bf396c61"
  },
  {
    "url": "assets/js/16.7ab206df.js",
    "revision": "7d9d7e15c60cb33961c677787c204e20"
  },
  {
    "url": "assets/js/17.0682faad.js",
    "revision": "0219cb6982bb06fa1f217acb7599b12e"
  },
  {
    "url": "assets/js/18.0345d940.js",
    "revision": "ec32e5c404d4a3f51f9bda185b028907"
  },
  {
    "url": "assets/js/19.594a3284.js",
    "revision": "c72768b3eacc4feb2c8043caaa51b018"
  },
  {
    "url": "assets/js/20.d29a6f90.js",
    "revision": "a72c7c5f915e7acf3df1317d70696bbc"
  },
  {
    "url": "assets/js/21.fcf88eb4.js",
    "revision": "6d678c8d2b9cd0676628a19e948fca2c"
  },
  {
    "url": "assets/js/22.237e27e1.js",
    "revision": "656437e48df59b64b8313e1a7e26b1e9"
  },
  {
    "url": "assets/js/23.487c68c5.js",
    "revision": "fd7078fd44c8268f8aeafcdb54544554"
  },
  {
    "url": "assets/js/4.a07fbcf1.js",
    "revision": "8b25973a28e5dc2386e3f1b03d6b8aac"
  },
  {
    "url": "assets/js/5.4a01dd52.js",
    "revision": "05a1707d57bcd036b8a8b51593441abd"
  },
  {
    "url": "assets/js/6.936fb65d.js",
    "revision": "dfa6cc87c46552dc683254ba4440dc75"
  },
  {
    "url": "assets/js/7.5f9db2ac.js",
    "revision": "b411a9add0d06245c2fcf947ec1bccde"
  },
  {
    "url": "assets/js/8.57f16c3b.js",
    "revision": "a81c92aa458997cf417b870076c9eb17"
  },
  {
    "url": "assets/js/9.51f454f1.js",
    "revision": "1bb349767fd71fed9f5ca56863d8cb25"
  },
  {
    "url": "assets/js/app.45d09de3.js",
    "revision": "a5a450c72cf593f1e5c012166fa1c322"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.bf5995c0.js",
    "revision": "a8b771f66e08636dec2cfd9c763e36b6"
  },
  {
    "url": "avatar.png",
    "revision": "f267f367425de08f047af6336bf3066d"
  },
  {
    "url": "categories/index.html",
    "revision": "40794a38b17defbbd745abfeb1d79d29"
  },
  {
    "url": "categories/java/index.html",
    "revision": "085ed4a35ac8131b060db654dd819336"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "32a145f31325954bca78e462924d570f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "574b758c5312fcc0e395367a603dbad7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d8a1034cf355474d46ac05cc7a034695"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "dadd614a51481406daa4534e4a1c0fd6"
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
    "revision": "f56ea09af7eaf881fea8f85aad6fa4c0"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4e9aae2edf2f80e332ab15b228b1ec22"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9797451aece426f2f49048f415c20b32"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cc9eb2ee4f5130d64a648a6c677e3c5e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "44ab3ef103fa2084cd7ec20790d40baf"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5ef94218f912d4680e38d7a71c53ec5d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "d05ec19b59e3a37f4813af6a55669f93"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4bf528606e81cf2dd3d9f9a6ef6fe941"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a3d0abeb724d976f38f4341883b0d1c1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7a9ebd4cd1a8e708997dce91e73d1682"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5df1ea163e25ad807bbf0fcf8bb274e7"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "bb687a913b5ee7e82a70d635d1320d7f"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba10e218fcf03158ba4e6a4c914fa725"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b64225fb09fa19048d59fbaad6f9b379"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2a2c61d1a960e93f5f6ba353ef8e3c2d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a4126ca558105328d6509dd1f0815bbc"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "85de7d1b17bde306d62a03ec532d7132"
  },
  {
    "url": "生活分享/life.html",
    "revision": "65c079af559eb74092e6520924fb33d8"
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
