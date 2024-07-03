(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{525:function(e,r,s){"use strict";s.r(r);var t=s(28),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"service-work的学习与使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-work的学习与使用"}},[e._v("#")]),e._v(" service_work的学习与使用")]),e._v(" "),s("h2",{attrs:{id:"service-work原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-work原理"}},[e._v("#")]),e._v(" service_work原理？")]),e._v(" "),s("p",[e._v("Service worker是一个"),s("strong",[e._v("注册在指定源和路径下的事件驱动worker")]),e._v("。它采用JavaScript控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度地缓存资源。\n可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现。但是可以通过消息传递的方式（postMessage）与javascript主线程进行通信。")]),e._v(" "),s("h2",{attrs:{id:"解决了什么问题及使用场景-其他方案-及对比其它方式的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决了什么问题及使用场景-其他方案-及对比其它方式的区别"}},[e._v("#")]),e._v(" 解决了什么问题及使用场景？其他方案，及对比其它方式的区别？")]),e._v(" "),s("p",[e._v("解决离线，以及断网情况下给用户带来较好的体验，可支持离线缓存，提升页面载入速度，降低服务器压力。\nservice_work可以很好的对"),s("strong",[e._v("资源缓存")]),e._v("和"),s("strong",[e._v("自定义网络请求")]),e._v("进行控制。")]),e._v(" "),s("ul",[s("li",[e._v("相比localstorage，cache而言，service_work是运行在worker上下文，因此不能访问DOM，不会造成阻塞，使用异步来完成任务")]),e._v(" "),s("li",[e._v("只支持HTTPS，或者local本地开发（因为service_work会提供修改网络请求的能力，所以需要避免中间人攻击）")]),e._v(" "),s("li",[e._v("相比于http缓存而言，service worker可以做到更加细粒度的缓存控制（可以指定缓存的文件），借助service worker可以实现离线访问应用")])]),e._v(" "),s("h2",{attrs:{id:"service的基础认知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service的基础认知"}},[e._v("#")]),e._v(" service的基础认知")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("cache"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("表示用于"),s("strong",[e._v("Request/Response对象对")]),e._v("的存储，作为ServiceWorker生命周期的一部分被缓存")]),e._v(" "),s("blockquote",[s("p",[e._v("cache.match(request, options)")])]),e._v(" "),s("p",[e._v("返回一个 Promise对象，resolve的结果是跟 Cache 对象匹配的第一个已经缓存的请求")]),e._v(" "),s("blockquote",[s("p",[e._v("Cache.matchAll(request, options)")])]),e._v(" "),s("p",[e._v("返回一个Promise 对象，resolve的结果是跟Cache对象匹配的所有请求组成的数组")]),e._v(" "),s("blockquote",[s("p",[e._v("Cache.add(request)")])]),e._v(" "),s("p",[e._v("抓取这个URL, 检索并把返回的response对象添加到给定的Cache对象.这在功能上等同于调用 fetch(), 然后使用 Cache.put() 将response添加到cache中.")]),e._v(" "),s("blockquote",[s("p",[e._v("Cache.addAll(requests)")])]),e._v(" "),s("p",[e._v("抓取一个URL数组，检索并把返回的response对象添加到给定的Cache对象。")]),e._v(" "),s("blockquote",[s("p",[e._v("Cache.put(request, response)")])]),e._v(" "),s("p",[e._v("同时抓取一个请求及其响应，并将其添加到给定的cache。")]),e._v(" "),s("blockquote",[s("p",[e._v("Cache.delete(request, options)")])]),e._v(" "),s("p",[e._v("搜索key值为request的Cache 条目。如果找到，则删除该Cache 条目，并且返回一个resolve为true的Promise对象；如果未找到，则返回一个resolve为false的Promise对象。")]),e._v(" "),s("blockquote",[s("p",[e._v("Cache.keys(request, options)")])]),e._v(" "),s("p",[e._v("返回一个Promise对象，resolve的结果是Cache对象key值组成的数组。")]),e._v(" "),s("h3",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),s("blockquote",[s("p",[e._v("解析成功，正在安装，安装成功，正在激活，激活成功，废弃")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("解析\n当serviceWork.register执行成功之后，只是代表注册的service worker文件解析成功，不代表安装或者激活了")])]),e._v(" "),s("li",[s("p",[e._v("安装中\n注册完之后，service worker会转入installing状态，触发onInstall状态（可以在其中做些静态资源缓存的操作）")])]),e._v(" "),s("li",[s("p",[e._v("已安装\nonInstall处理完成之后，状态变为installed，此时service worker处理等待状态，可以手动调用self.skipWating\n或者重新打开页面进行激活（第一次安装之后会自动触发激活）")])]),e._v(" "),s("li",[s("p",[e._v("激活中\n激活状态下会触发onActivate事件，可以在其中处理一些旧版本资源删除操作，在此状态下手动调用self.client.claim()，\n相关页面会立即被新的service work线程控制。")])]),e._v(" "),s("li",[s("p",[e._v("已激活\nonActivate事件中处理逻辑完成之后，状态变为已激活。")])]),e._v(" "),s("li",[s("p",[e._v("废弃\n安装失败，激活失败会导致当前注册的service worker线程废弃；新的service worker线程激活成功，会导致旧的serive worker线程废弃")])])]),e._v(" "),s("p",[s("strong",[e._v("note:")]),e._v(" 如果是首次启动service work页面会首先尝试安装，安装成功之后会被激活。\n如果现有的service work已经启用，新版本会在后台安装，但是不会被激活，处于woker in waiting，直到所有加载的页面不再使用旧的service work才会激活\n新的service work（active worker）。")]),e._v(" "),s("h2",{attrs:{id:"service-worker的更新机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-worker的更新机制"}},[e._v("#")]),e._v(" service worker的更新机制")]),e._v(" "),s("ul",[s("li",[e._v("独立的更新进程，安装和更新都是独立的进程")]),e._v(" "),s("li",[e._v("零客户时更新，用户关闭了所有旧版页面之后，新的worker才会被激活")])]),e._v(" "),s("p",[e._v("以下情况会导致service worker的更新")]),e._v(" "),s("p",[e._v("如果cdn上一个资源更新了，前端使用了service_worker，该怎么做到网页更新了？？？")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("注册一个新的service_worker")]),e._v(" "),s("p",[e._v("前端打包发版，使用一个新的service worker名字，注册一个新的service worker（多次注册同一个 Service Worker 不会触发更新）")])]),e._v(" "),s("li",[s("p",[e._v("浏览器默认自己会去更新（这种情况下如果你的service worker文件没变化，仍然没反应，所以还是需前端发板）")]),e._v(" "),s("p",[e._v("默认情况下，Service Worker 文件必定会每24小时被下载一次，如果下载的文件是新文件，\n那么它就会被重新注册和安装，但不会被激活，当不再有页面使用旧的 Service Worker 的时候，它就会被激活。")])])]),e._v(" "),s("h2",{attrs:{id:"service-worker存储空间资源的大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-worker存储空间资源的大小"}},[e._v("#")]),e._v(" service worker存储空间资源的大小")]),e._v(" "),s("h2",{attrs:{id:"service-worker线程的退出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-worker线程的退出"}},[e._v("#")]),e._v(" service worker线程的退出")]),e._v(" "),s("p",[e._v("service worker并不会一直运行，在以下条件会停止，节省系统资源")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("service worker文件中存在异常（js语法错误，service worker文件激活失败，线程执行存在未捕获的异常）")])]),e._v(" "),s("li",[s("p",[e._v("service worker线程监听事件函数是否处理完成，变为空闲状态，service worker会自动退出")])]),e._v(" "),s("li",[s("p",[e._v("service worker执行时间过长，会自动退出（service workerJS执行时间超过30s，fetch请求超过5分钟）")])]),e._v(" "),s("li",[s("p",[e._v("浏览器会周期性的检查service worker线程是否可以退出（在启动线程30s之后会检查，关闭空闲超过30s的线程）")])])]),e._v(" "),s("h2",{attrs:{id:"service-work理想缓存的项目使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-work理想缓存的项目使用"}},[e._v("#")]),e._v(" service_work理想缓存的项目使用")]),e._v(" "),s("ol",[s("li",[e._v("注册你的worker")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("useServiceWork();\nfunction useServiceWork() {\n  if ('serviceWorker' in navigator) {\n    window.addEventListener('load', function() {\n      // 这个文件的url 是相对于 origin， 而不是相对于引用它的那个 JS 文件\n      navigator.serviceWorker.register('/sw.js', \n      { //  scope 参数是选填的，可以被用来指定你想让 service worker 控制的内容的子目录\n        scope: '/' \n      }).then(function(registration) {\n        // Registration was successful\n        console.log('ServiceWorker registration successful with scope: ', registration.scope);\n      }, function(err) {\n        // registration failed :(\n        console.log('ServiceWorker registration failed: ', err);\n      });\n    });\n  }\n}\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("安装和激活")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var CACHE_NAME = 'my-site-cache_2ss003e'; // 缓存名字\nvar urlsToCache = [ // 待缓存的内容 （这个数组的内容是绝对或者相对地址）\n  '/',\n  '/index.js',\n  '/assets/**.jpg'\n];\nself.addEventListener('install', function(e) {\n  self.skipWaiting();\n  e.waitUntil(\n    caches.open(CACHE_NAME)\n      .then(function(cache) {\n        return cache.addAll(urlsToCache); // 向缓存中添加文件\n      }).catch((err) => {\n        console.log(err);\n      })\n  );\n});\n")])])]),s("blockquote",[s("p",[e._v("ExtendableEvent.waitUntil()  方法——这会确保Service Worker 不会在 waitUntil() 里面的代码执行完毕之前安装完成。")])]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("自定义请求的响应")])]),e._v(" "),s("blockquote",[s("p",[e._v("可以给 service worker 添加一个 fetch 的事件监听器，接着调用 event 上的 respondWith() 方法来劫持我们的 HTTP 响应。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("self.addEventListener('fetch', function(e) {\n  e.respondWith(\n    caches.match(e.request).then(function(response) {\n      if (response) { // 命中缓存,直接返回缓存\n        return response\n      }\n      // 未缓存的先请求再缓存\n      var fetchRequest = e.request.clone(); // 请求和响应流只能被读取一次\n      return fetch(fetchRequest).then(\n        function(response) {\n          if(!response || response.status !== 200 || response.type !== 'basic') { \n            // 失败的请求，以及跨域请求不进行缓存（一般指接口）\n            return response;\n          }\n\n          // 进行页面缓存\n          var responseToCache = response.clone();\n          caches.open(CACHE_NAME).then(function(cache) {\n            cache.put(e.request, responseToCache);\n          });\n          return response;\n        }\n      )\n    }).catch(function(e) { // 如果出现错误就显示配置的页面\n      return new Response(\n        errResponseContent,\n        {headers: {\"Content-Type\": \"text/html\"}}\n      )  \n      // or \n      // return caches.match('/assets/error.jpg');\n    })\n  );\n})\n")])])]),s("blockquote",[s("p",[e._v("caches.match(event.request) 允许我们对网络请求的资源和 cache 里可获取的资源进行匹配，\n查看是否缓存中有相应的资源。这个匹配通过 url 和 vary header进行，就像正常的 http 请求一样。")])]),e._v(" "),s("blockquote",[s("p",[e._v("Response() 构造函数允许你创建一个自定义的response")])]),e._v(" "),s("blockquote",[s("p",[e._v("response.type指的是响应类型，只读，取值包括")])]),e._v(" "),s("ul",[s("li",[e._v("basic: 同源响应")]),e._v(" "),s("li",[e._v("cors: 跨域请求")]),e._v(" "),s("li",[e._v("error: 网络错误")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {\n  headers: { 'Content-Type': 'text/html' }\n})\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("更新你的 service worker，删除旧缓存")])]),e._v(" "),s("blockquote",[s("p",[e._v("如果你的 service worker 已经被安装，但是刷新页面时有一个新版本的可用，新版的 service worker 会在后台安装，但是还没激活。当不再有任何已加载的页面在使用旧版的 service worker 的时候，新版本才会激活。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('self.addEventListener("activate", function(e) {\n  e.waitUntil(\n    caches.keys().then(function(cacheNames) {\n      return Promise.all(\n        cacheNames.map(function(cacheName) {\n          if (CACHE_NAME !== cacheName) {\n            return caches.delete(cacheName);\n          }\n        })\n      )\n    })\n  )\n});\n')])])]),s("p",[s("strong",[e._v("note")])]),e._v(" "),s("p",[e._v("使用servive worker用户第一次访问页面的时候，资源请求时早与service worker安装的，所以静态资源是无法缓存的，\n只有当用户第二次访问时，这些资源才会被缓存。")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/service-workers/registration",target:"_blank",rel:"noopener noreferrer"}},[e._v("service worker的使用"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何使用service work"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://w3c.github.io/ServiceWorker/#service-worker-registration-update",target:"_blank",rel:"noopener noreferrer"}},[e._v("w3c service worker"),s("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);