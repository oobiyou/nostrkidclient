if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const d=e=>i(e,o),l={module:{uri:o},exports:t,require:d};s[o]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/compressor.esm.bf8af3ea.js",revision:null},{url:"assets/database.697af47b.js",revision:null},{url:"assets/index.60484c7b.js",revision:null},{url:"assets/index.b70793f3.css",revision:null},{url:"assets/qr-scanner-worker.min.56d417f3.js",revision:null},{url:"index.html",revision:"e7f916928bda97b4f9dc59729933dad1"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/favicon/android-icon-192x192.png",revision:"c1460d64beb395458b7493ee29c21f87"},{url:"images/favicon/android-icon-512x512.png",revision:"27deab565bf87907af749774472eddc0"},{url:"manifest.webmanifest",revision:"591088ab0885196a398ed5d251e6ea72"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
