(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{513:function(e,o,t){"use strict";t.r(o);var v=t(28),_=Object(v.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"说说浏览器的缓存以及本地存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说浏览器的缓存以及本地存储"}},[e._v("#")]),e._v(" 说说浏览器的缓存以及本地存储？")]),e._v(" "),t("h2",{attrs:{id:"浏览器的缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存"}},[e._v("#")]),e._v(" 浏览器的缓存")]),e._v(" "),t("p",[e._v("Http cache, disk cache, memory cache, service work cache, storage cache, cookie, indexDB")]),e._v(" "),t("h2",{attrs:{id:"http-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-cache"}},[e._v("#")]),e._v(" http cache")]),e._v(" "),t("h3",{attrs:{id:"强缓存-200-ok-from-disk-cache-或者-200-ok-from-memory-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存-200-ok-from-disk-cache-或者-200-ok-from-memory-cache"}},[e._v("#")]),e._v(" 强缓存 （200 OK (from disk cache) 或者 200 OK (from memory cache)）")]),e._v(" "),t("p",[e._v("Disk cache, memory cache属于强缓存，属于http的产物，根据http请求响应的header字段，设置缓存数据的有效时间。")]),e._v(" "),t("p",[e._v("Http/1.0 -> Expires , pragma")]),e._v(" "),t("p",[e._v("Http/1.1 -> Cache-Control, etag,")]),e._v(" "),t("ul",[t("li",[e._v("Expires")])]),e._v(" "),t("p",[e._v("过期时间，存在于服务器端返回的响应头中，告诉浏览器在这个过期时间之前可以直接从缓存里面获取数据，无需再次请求接口。")]),e._v(" "),t("blockquote",[t("p",[e._v("Expires: Wed, 22 Nov 2019 08:41:00 GMT")])]),e._v(" "),t("p",[e._v("表示资源在2019年11月22号8点41分过期，过期了就得向服务端发请求")]),e._v(" "),t("p",[e._v("使用指定时间点的形式其实存在一个问题，那就是服务器的时间和浏览器的时间可能并不一至，因此这个过期时间就不准确，因此在HTTP1.1中出现了Cache-Control")]),e._v(" "),t("ul",[t("li",[e._v("Cache-Control")])]),e._v(" "),t("p",[e._v("Cache-Control相对于Expires的区别在于，它是一个时间长度，而不是一个具体的时间点。")]),e._v(" "),t("blockquote",[t("p",[e._v("Cache-Control:max-age=3600")])]),e._v(" "),t("p",[e._v("代表这个响应返回的3600秒才过期。")]),e._v(" "),t("ul",[t("li",[e._v("pragma")])]),e._v(" "),t("p",[e._v("Pragma 只有一个属性值，就是 no-cache ，效果和 Cache-Control 中的 no-cache 一致，不使用强缓存，需要与服务器验证缓存是否新鲜，在 3 个头部属性中的优先级最高")]),e._v(" "),t("p",[t("strong",[e._v("Cache-Control的常用属性：")])]),e._v(" "),t("blockquote",[t("p",[e._v("public：客户端，代理服务器都可以进行缓存")])]),e._v(" "),t("p",[e._v("private：只能浏览器进行缓存，中间的代理不能进行缓存")]),e._v(" "),t("p",[e._v("no-cache：跳过强缓存，进入协商缓存")]),e._v(" "),t("p",[e._v("no-store：不进行任何缓存")]),e._v(" "),t("p",[e._v("s-maxage：设置代理服务器设置缓存时间")]),e._v(" "),t("p",[e._v("Expires和Cache-Control同时存在的时候，Cache-Control会优先考虑。")]),e._v(" "),t("h3",{attrs:{id:"协商缓存-304"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存-304"}},[e._v("#")]),e._v(" 协商缓存（304）")]),e._v(" "),t("p",[e._v("强缓存失效之后，浏览器在请求头中携带对应的"),t("strong",[e._v("缓存tag")]),e._v("来向服务器发送请求，服务器根据这个tag来决定是否使用缓存。")]),e._v(" "),t("ul",[t("li",[e._v("Last-Modified")])]),e._v(" "),t("p",[e._v("即最后修改时间，浏览器第一次给服务器发送请求后，服务器会在响应头中加上这个字段。")]),e._v(" "),t("p",[e._v("浏览器接收到后，如果再次请求，会在请求头中携带If-Modified-Since字段，这个字段的值也就是服务器传来的最后修改时间。")]),e._v(" "),t("p",[e._v("Last-Modefined 存在于服务器，用于表示资源的最后更新时间\nIf-Modified-Since存在于客户端，用于表示资源上一次更新的时间")]),e._v(" "),t("blockquote",[t("p",[e._v("如果If-Modified-Since == Last-Modefined 说明不需要更新，304直接使用缓存。\n如果If-Modified-Since < Last-Modefined 说明需要更新")])]),e._v(" "),t("ul",[t("li",[e._v("ETag")])]),e._v(" "),t("p",[e._v("服务器根据当前文件的内容，给文件生成唯一的标识，只要文件内容有改动，这个值就会变化，服务器通过响应头把这个值给浏览器。")]),e._v(" "),t("p",[e._v("浏览器接收到ETag的值，会在下次请求时，将这个值作为If-None-Match这个字段的内容，并放到请求头中，然后发给服务器。")]),e._v(" "),t("p",[e._v("服务器接收到If-None-Match后，会跟服务器上该资源的ETag进行比对:")]),e._v(" "),t("blockquote",[t("p",[e._v("如果两者不一样，说明要更新了。返回新的资源，跟常规的HTTP请求响应的流程一样；否则返回304，告诉浏览器直接用缓存。")])]),e._v(" "),t("p",[t("strong",[e._v("Last_Modefined与ETag的对比")])]),e._v(" "),t("ol",[t("li",[e._v("在精准度上，ETag优于Last-Modified。优于 ETag 是按照内容给资源上标识，因此能准确感知资源的变化。而 Last-Modified 就不一样了，它在一些特殊的情况并不能准确感知资源变化，主要有两种情况:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("编辑了资源文件，但是文件内容并没有更改，这样也会造成缓存失效。")])]),e._v(" "),t("li",[t("p",[e._v("Last-Modified 能够感知的单位时间是秒，如果文件在 1 秒内改变了多次，那么这时候的 Last-Modified 并没有体现出修改了。")])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("在性能上，Last-Modified优于ETag，也很简单理解，Last-Modified仅仅只是记录一个时间点，而 Etag需要根据文件的具体内容生成哈希值。\n另外，如果两种方式都支持的话，服务器会优先考虑ETag。")])]),e._v(" "),t("h2",{attrs:{id:"缓存位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[e._v("#")]),e._v(" 缓存位置")]),e._v(" "),t("p",[e._v("四种，优先顺序从高到底")]),e._v(" "),t("ul",[t("li",[e._v("Service-Work")])]),e._v(" "),t("p",[e._v("Service Worker 借鉴了 Web Worker的 思路，即让 JS 运行在主线程之外，由于它脱离了浏览器的窗体，因此无法直接访问DOM。虽然如此，但它仍然能帮助我们完成很多有用的功能，比如离线缓存、消息推送和网络代理等功能。其中的离线缓存就是 Service Worker Cache。\nService Worker 同时也是 PWA 的重要实现机制，关于它的细节和特性，我们将会在后面的 PWA 的分享中详细介绍。")]),e._v(" "),t("ul",[t("li",[e._v("Memory Cache（会存放脚本，base64数据和字体）")])]),e._v(" "),t("p",[e._v("Memory Cache指的是内存缓存，从效率上讲它是最快的。但是从存活时间来讲又是最短的，当渲染进程结束后，内存缓存也就不存在了")]),e._v(" "),t("ul",[t("li",[e._v("Disk Cache（会存放样式文件，图片或者较大的文件）")])]),e._v(" "),t("p",[e._v("Disk Cache就是存储在磁盘中的缓存，从存取效率上讲是比内存缓存慢的，但是他的优势在于存储容量和存储时长")]),e._v(" "),t("ul",[t("li",[e._v("Push Cache")])]),e._v(" "),t("p",[e._v("它是 HTTP/2 中的内容，虽然现在应用的并不广泛，但随着 HTTP/2 的推广，它的应用越来越广泛")]),e._v(" "),t("h2",{attrs:{id:"浏览器的本地储存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的本地储存"}},[e._v("#")]),e._v(" 浏览器的本地储存")]),e._v(" "),t("blockquote",[t("p",[e._v("Cookie, localStorage, sessionStorage, indexDB")])]),e._v(" "),t("p",[t("strong",[e._v("Cookie")])]),e._v(" "),t("p",[e._v("cooie最开始被设计出来并不是做本地存储的，而是为了弥补Http在状态管理上的不足。\nhttp是一个无状态协议，为了记录用户信息，于是就产生了cookie。cookie的大小只有4kb，同一域名下发送请求，都会携带相同的\ncookie，服务器拿到cookie进行解析，获取客户端的状态。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("容量缺陷 Cookie 的体积上限只有4KB，只能用来存储少量的信息。")])]),e._v(" "),t("li",[t("p",[e._v("性能缺陷 Cookie 紧跟域名，不管域名下面的某一个地址需不需要这个 Cookie ，请求都会携带上完整的 Cookie，这样随着请求数的增多，其实会造成巨大的性能浪费的，因为请求携带了很多不必要的内容。")])]),e._v(" "),t("li",[t("p",[e._v("安全缺陷 由于 Cookie 以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改，在 Cookie 的有效期内重新发送给服务器，这是相当危险的。另外，在HttpOnly为 false 的情况下，Cookie 信息能直接通过 JS 脚本来读取。")])]),e._v(" "),t("li",[t("p",[e._v("会话期cookie\n会话期Cookie不需要指定过期时间（Expires）或者有效期（Max-Age）,浏览器关闭之后它会被自动删除")])]),e._v(" "),t("li",[t("p",[e._v("持久性Cookie\n持久性Cookie可以指定一个特定的过期时间（Expires）或有效期（Max-Age）。")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;\n")])])]),t("ul",[t("li",[t("p",[e._v("secure\n限制cookie只能被https请求携带")])]),e._v(" "),t("li",[t("p",[e._v("HttpOnly\n为避免跨域脚本 (XSS) 攻击")])])]),e._v(" "),t("p",[e._v("通过JavaScript的 Document.cookie API无法访问带有 HttpOnly 标记的Cookie，它们只应该发送给服务端，")]),e._v(" "),t("ul",[t("li",[e._v("Cookie的作用域\nDomain 和 Path 标识定义了Cookie的作用域：即Cookie应该发送给哪些URL。")])]),e._v(" "),t("p",[e._v("Domain 标识指定了哪些主机可以接受Cookie。"),t("strong",[e._v("如果不指定，默认为当前文档的主机（不包含子域名）")]),e._v("，\n"),t("strong",[e._v("如果指定了Domain，则一般包含子域名")])]),e._v(" "),t("ul",[t("li",[e._v("SameSite")])]),e._v(" "),t("p",[e._v("SameSite Cookie允许服务器要求某个cookie在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("none\n浏览器会在同站请求、跨站请求下继续发送cookies")])]),e._v(" "),t("li",[t("p",[e._v("strict\n浏览器将只在访问相同站点时发送cookie(只有当前网页的 URL 与请求目标一致，才会带上 Cookie)\n如果想实现跨站登录（主域名相同，子域名不同）这样的功能的话，就不能实现。")])]),e._v(" "),t("li",[t("p",[e._v("lax\n在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留(例如get请求)\n如图片加载或者frames的调用，但只有当用户从外部站点导航到URL时才会发送")])])]),e._v(" "),t("p",[t("strong",[e._v("localStorage，sessionStorage")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("容量5M")])]),e._v(" "),t("li",[t("p",[e._v("只存在客户端，默认不参与服务器通信")])]),e._v(" "),t("li",[t("p",[e._v("H5暴露的操作API")])])]),e._v(" "),t("p",[e._v("区别：sessionStorage是会话级别的存贮，页面关闭就不存在，而localStorage是持久存储。")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/前端杂记/如何获取localStorage已使用空间，以及最大存储空间.html"}},[e._v("怎么样判断storage剩余空间？？")])],1),e._v(" "),t("p",[t("strong",[e._v("IndexDB")])]),e._v(" "),t("p",[e._v("运行在浏览器中的非关系型数据库，容量无上限。")]),e._v(" "),t("ol",[t("li",[e._v("键值对存储。内部采用对象仓库存放数据，在这个对象仓库中数据采用键值对的方式来存储。")]),e._v(" "),t("li",[e._v("异步操作。数据库的读写属于 I/O 操作, 浏览器中对异步 I/O 提供了支持。")]),e._v(" "),t("li",[e._v("受同源策略限制，即无法访问跨域的数据库。")])]),e._v(" "),t("p",[e._v("[浏览器灵魂之问]"),t("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.im/post/5df5bcea6fb9a016091def69"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("[图解http缓存]"),t("a",{attrs:{href:"https://juejin.im/post/5eb7f811f265da7bbc7cc5bd?utm_source=gold_browser_extension#heading-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.im/post/5eb7f811f265da7bbc7cc5bd?utm_source=gold_browser_extension#heading-0"),t("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=_.exports}}]);