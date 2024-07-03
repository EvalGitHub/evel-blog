(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{457:function(e,t,s){e.exports=s.p+"assets/img/hot_update_module.e545a9c3.png"},458:function(e,t,s){e.exports=s.p+"assets/img/webpack_hot_update.9dee859d.png"},459:function(e,t,s){e.exports=s.p+"assets/img/hot_add_update_chunk.f74585f0.png"},600:function(e,t,s){"use strict";s.r(t);var n=s(28),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"webpack热更新的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack热更新的原理"}},[e._v("#")]),e._v(" webpack热更新的原理")]),e._v(" "),n("p",[e._v("webpack开发环境可以是实现页面无刷新的更新，能简单说说其执行步骤吗？")]),e._v(" "),n("p",[e._v("翻看webpack-dev-server的源码，一探究竟。")]),e._v(" "),n("h2",{attrs:{id:"webpack-dev-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server"}},[e._v("#")]),e._v(" webpack-dev-server")]),e._v(" "),n("ol",[n("li",[e._v("先建立一个服务")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("createServer() {\n  if (this.options.https) {\n    const isHttp2 = this.options.http2 !== false;\n    if (semver.gte(process.version, '10.0.0') || !isHttp2) {\n      ....\n      ....\n      this.listeningApp = https.createServer(this.options.https, this.app);\n    } else {\n      this.listeningApp = require('spdy').createServer(\n        this.options.https,\n        this.app\n      );\n    }\n  } else {\n    this.listeningApp = http.createServer(this.app);\n  }\n}\n")])])]),n("p",[e._v("创建一个socket链接")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("listen(port, hostname, fn) {\n  this.hostname = hostname;\n  return this.listeningApp.listen(port, hostname, (err) => {\n    this.createSocketServer();\n    ....\n    ....\n  });\n}\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("监听webpack的编译的编译结束")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("setupHooks() {\n  ....\n  ....\n  const addHooks = (compiler) => {\n    const { compile, invalid, done } = compiler.hooks;\n    compile.tap('webpack-dev-server', invalidPlugin);\n    invalid.tap('webpack-dev-server', invalidPlugin);\n    done.tap('webpack-dev-server', (stats) => { //  编译完成，发送一个socket信息\n      this._sendStats(this.sockets, this.getStats(stats));\n      this._stats = stats;\n    });\n  };\n  ....\n  ....\n}\n")])])]),n("p",[n("strong",[e._v("_sendStats 函数")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("_sendStats(sockets, stats, force) {\n  .....\n  .....\n  this.sockWrite(sockets, 'hash', stats.hash);\n  if (stats.errors.length > 0) {\n    this.sockWrite(sockets, 'errors', stats.errors);\n  } else if (stats.warnings.length > 0) {\n    this.sockWrite(sockets, 'warnings', stats.warnings);\n  } else {\n    this.sockWrite(sockets, 'ok');\n  }\n}\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("监听文件变化(webpack-dev-middleware)")])]),e._v(" "),n("p",[e._v("每一次文件改变保存都会重新的编译")]),e._v(" "),n("p",[e._v("setupDevMiddleware函数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("setupDevMiddleware() {\n  // middleware for serving webpack bundle\n  this.middleware = webpackDevMiddleware(\n    this.compiler,\n    Object.assign({}, this.options, { logLevel: this.log.options.level })\n  );\n}\n")])])]),n("p",[e._v("webpackDevMiddleware的核心代码片段")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("....\n....\nif (!options.lazy) {\n  context.watching = compiler.watch(options.watchOptions, (err) => {\n    // 监听webpack的编译\n    if (err) {\n      context.log.error(err.stack || err);\n      if (err.details) {\n        context.log.error(err.details);\n      }\n    }\n  });\n} else {\n  context.state = true;\n}\n\nif (options.writeToDisk) {\n  toDisk(context);\n}\n// 将文件写入内存\nsetFs(context, compiler);\n")])])]),n("p",[e._v("为什么代码的改动保存会自动编译，重新打包？这一系列的重新检测编译就归功于compiler.watch这个方法。")]),e._v(" "),n("p",[e._v("执行setFs方法，这个方法主要目的就是将编译后的文件打包到内存。这就是为什么在开发的过程中，你会发现dist目录没有打包后的代码，因为都在内存中。原因就在于访问内存中的代码比访问文件系统中的文件更快，而且也减少了代码写入文件的开销，这一切都归功于memory-fs。")]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("浏览器接收到热更新的通知")])]),e._v(" "),n("p",[e._v("当监听到一次webpack编译结束（步骤二），_sendStats方法就通过websoket给浏览器发送通知，检查下是否需要热更新")]),e._v(" "),n("p",[e._v("webpack-dev-server/client/index.js这个文件就是执行在浏览器的代码，当步骤二中监听到文件已经打包完成\n就会发送一个socket信息，如果编译通过会执行发送以下两个方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("this.sockWrite(sockets, 'hash', stats.hash);\nthis.sockWrite(sockets, 'ok');\n")])])]),n("p",[e._v("在客户端client中会进行处理，执行reloadApp")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ok: function ok() {\n  sendMessage('Ok');\n  ....\n  if (options.useWarningOverlay || options.useErrorOverlay) {\n    overlay.clear();\n  }\n  ....\n  reloadApp(options, status);\n},\n")])])]),n("p",[n("strong",[e._v("reloadApp.js")])]),e._v(" "),n("p",[e._v("发送‘webpackHotUpdate’信息")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("if (hot) {\n  log.info('[WDS] App hot update...'); // eslint-disable-next-line global-require\n\n  var hotEmitter = require('webpack/hot/emitter');\n\n  hotEmitter.emit('webpackHotUpdate', currentHash);\n\n  if (typeof self !== 'undefined' && self.window) {\n    // broadcast update to window\n    self.postMessage(\"webpackHotUpdate\".concat(currentHash), '*');\n  }\n} \n")])])]),n("p",[e._v("socket的客户端代码的发出“webpackHotUpdate”信息，通知webpack进行热更新")]),e._v(" "),n("p",[e._v("// webpack/hot/dev-server.js")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('var check = function check() {\n  module.hot\n    .check(true)\n    .then(function(updatedModules) {\n      if (!updatedModules) {\n        ....\n        window.location.reload();\n        return;\n      }\n      ......\n      if (!upToDate()) {\n        check();\n      }\n    })\n  ....\n  .....\n};\n\nhotEmitter.on("webpackHotUpdate", function(currentHash) {\n  lastHash = currentHash;\n  if (!upToDate() && module.hot.status() === "idle") {\n    log("info", "[HMR] Checking for updates on the server...");\n    check();\n  }\n});\n')])])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("HotModuleReplaceMentPlugin的module.hot.check检查更新")])]),e._v(" "),n("p",[e._v("// HotModuleReplaceMentPlugin.runtime.js")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function hotCheck(apply) {\n  if (hotStatus !== "idle") {\n    throw new Error("check() is only allowed in idle status");\n  }\n  hotApplyOnUpdate = apply;\n  hotSetStatus("check");\n  ....\n  {\n    /*globals chunkId */\n    hotEnsureUpdateChunk(chunkId);\n  }\n  if (\n    hotStatus === "prepare" &&\n    hotChunksLoading === 0 &&\n    hotWaitingFiles === 0\n  ) {\n    hotUpdateDownloaded();\n  }\n  return promise;\n  ....\n}\n\nfunction hotEnsureUpdateChunk(chunkId) {\n  if (!hotAvailableFilesMap[chunkId]) {\n    hotWaitingFilesMap[chunkId] = true;\n  } else {\n    hotRequestedFilesMap[chunkId] = true;\n    hotWaitingFiles++;\n    \n    hotDownloadUpdateChunk(chunkId);\n  }\n}\n')])])]),n("p",[n("img",{attrs:{src:s(457),alt:"avatar"}})]),e._v(" "),n("p",[e._v("创建一个jsonp请求，返回的内容如下")]),e._v(" "),n("p",[n("img",{attrs:{src:s(458),alt:"avatar"}})]),e._v(" "),n("p",[n("img",{attrs:{src:s(459),alt:"avatar"}})]),e._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5de0cfe46fb9a071665d3df0#heading-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("轻松理解webpack热更新原理"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);