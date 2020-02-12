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
    "revision": "c0d159f1dcda023d2948209253297d9d"
  },
  {
    "url": "assets/css/0.styles.0e2430c9.css",
    "revision": "115578340882566d73e2f3789f20f19e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.12abc3d7.js",
    "revision": "166741a40af1f153b782ff7d8448f4b5"
  },
  {
    "url": "assets/js/11.6049fb16.js",
    "revision": "ae5e2a2b9c59c03d8f9f88f346b31b91"
  },
  {
    "url": "assets/js/12.d517e78a.js",
    "revision": "799114273a55e6fcfddb6c4e3fdb8329"
  },
  {
    "url": "assets/js/13.b673915e.js",
    "revision": "91353e7daa05ccb58ad7b3920d2ad72f"
  },
  {
    "url": "assets/js/14.0da58482.js",
    "revision": "ebbefa1b9daac531279a96b49debccc7"
  },
  {
    "url": "assets/js/15.d3282f3c.js",
    "revision": "18edecc9c68b9b2acba84df25ee13255"
  },
  {
    "url": "assets/js/16.b03e52b7.js",
    "revision": "8bad26ca2fef9490c9d486661316484d"
  },
  {
    "url": "assets/js/17.bc5d62a9.js",
    "revision": "ff9a2ef2202ff7f9bd7bca6d120a8681"
  },
  {
    "url": "assets/js/18.d11dbfdb.js",
    "revision": "e538b1a0b98b286fad7a807167f702aa"
  },
  {
    "url": "assets/js/19.152537cb.js",
    "revision": "faf23b0652330a9bfc8d9a1f99428957"
  },
  {
    "url": "assets/js/2.08baae6d.js",
    "revision": "7234e455f3553221caf25cc31bc368e5"
  },
  {
    "url": "assets/js/20.4d8f2d37.js",
    "revision": "a4518582925ab63c712339c9f5d1fbca"
  },
  {
    "url": "assets/js/21.c43165a2.js",
    "revision": "4df65768dfe9a9cb3853b2b04a806e4a"
  },
  {
    "url": "assets/js/22.ed56ea05.js",
    "revision": "f2a5e77558fa308c01cbf05140aa404f"
  },
  {
    "url": "assets/js/23.7061786d.js",
    "revision": "3307d8dd971dad1b49a96fb341412586"
  },
  {
    "url": "assets/js/24.9da786f3.js",
    "revision": "4ade830469342dcfcda5bd737a9674d7"
  },
  {
    "url": "assets/js/25.26b392c1.js",
    "revision": "4b35cde2f87f5b79c0822bda737f0fd0"
  },
  {
    "url": "assets/js/26.d8cdedff.js",
    "revision": "48bbffd2823652377ac9979c3fa0bd69"
  },
  {
    "url": "assets/js/27.d40fd551.js",
    "revision": "252e14c07f00eb8706e0536611379c99"
  },
  {
    "url": "assets/js/28.a5d67a92.js",
    "revision": "4265bd7457106ae3c8393f81bca08159"
  },
  {
    "url": "assets/js/29.dfa63691.js",
    "revision": "2a30e359e9e39e3892c36d0d4be17b24"
  },
  {
    "url": "assets/js/3.01559db2.js",
    "revision": "58f0a71fca28480e81c1b291b9edbc0e"
  },
  {
    "url": "assets/js/30.f1b74c75.js",
    "revision": "15fee3edd7518cd87109d64003c35e43"
  },
  {
    "url": "assets/js/31.ece58fb4.js",
    "revision": "a782347c3caa26f9721ec825d9838e5c"
  },
  {
    "url": "assets/js/32.ee3030e1.js",
    "revision": "bc642c8168c4e31956b80523ae0e84d3"
  },
  {
    "url": "assets/js/4.0ba3a85d.js",
    "revision": "3c8c03667b58a9374f23a2c4122bc620"
  },
  {
    "url": "assets/js/5.eebe458a.js",
    "revision": "5173a454ee0b75bd3bc5fa8ad7fd2ed5"
  },
  {
    "url": "assets/js/6.36b61dfe.js",
    "revision": "40341bcc6a3f424266ae464bab7a3f0c"
  },
  {
    "url": "assets/js/7.6adafdd9.js",
    "revision": "8066e3dcf3d7d2b7fc2c0092f3b93299"
  },
  {
    "url": "assets/js/8.127c1a20.js",
    "revision": "3aa522659b6c14a9115c0b1aa4dab8c3"
  },
  {
    "url": "assets/js/9.e687ebd4.js",
    "revision": "37aad19ca78aca8d246ce92be9fca3a1"
  },
  {
    "url": "assets/js/app.c0d74d7f.js",
    "revision": "2487e36213ed1f3e9ff5f2905b4e0972"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "397c928924776d0a32685d63363f8f95"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "18b4c490a21684c39f81cb70974b5695"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "9ec7a61349774c0b6a28feca7c16b8f4"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "8d8a6a8465cd3529d93d1cbd00931b78"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "c6707febdae8d1b250f9f92063836dad"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "62ff9165fcd78b6fa5d3f69aab57efed"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "323400edda4d7c91b2381e3b0e73ad92"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "6cdb9cb970f2796145e396acd16cb98e"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "cd9121ca83b43832363a3d777ee140dc"
  },
  {
    "url": "content/cloud-advocate/2020-01/index.html",
    "revision": "1c899d2be4bb32f5f1ef5ffb268908df"
  },
  {
    "url": "content/cloud-advocate/2020-01/Managing-security-with-Azure-Lighthouse-and-Azure-Arc/index.html",
    "revision": "189922987c53f0a2be7f3687088148f9"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "3720fe4246b624ff310380b0cf65a5fb"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "5f7e3aa1ee2d0633923c893fe95bbdef"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "66b30e10a0087e7cff63dfc5c4d9bfb1"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "298ca1d5ac33e49963ee83920999741e"
  },
  {
    "url": "content/cloud-advocate/index.html",
    "revision": "84e4a0c9e7afe5fe7c7fbe6e6b2fb2ee"
  },
  {
    "url": "content/index.html",
    "revision": "19ecfb27b609a8536eab02f19720e2e2"
  },
  {
    "url": "content/tips-tricks/index.html",
    "revision": "7cda82089d966bffe3713c41a33dad63"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "91e8434fe94bb4805edbee55f8d50ef3"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "a817435125ba24d196b49996c9aac81d"
  },
  {
    "url": "LICENSE.html",
    "revision": "f1e14fb35da52211c1e70737b2bb6a49"
  },
  {
    "url": "tags.html",
    "revision": "a0edf360a6fc9c69c5fdecb172c56643"
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
