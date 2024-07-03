(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{454:function(e,a,n){e.exports=n.p+"assets/img/speed_measure.d421c4f4.png"},455:function(e,a,n){e.exports=n.p+"assets/img/cache_loader.ccd24d33.png"},456:function(e,a,n){e.exports=n.p+"assets/img/hard_source.ec172812.png"},595:function(e,a,n){"use strict";n.r(a);var r=n(28),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"提升webpack打包速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提升webpack打包速度"}},[e._v("#")]),e._v(" 提升webpack打包速度")]),e._v(" "),r("h2",{attrs:{id:"speed-measure-webpack-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#speed-measure-webpack-plugin"}},[e._v("#")]),e._v(" speed-measure-webpack-plugin")]),e._v(" "),r("p",[e._v("查看每个plugin，loader的工作时间，对应做优化")]),e._v(" "),r("p",[r("img",{attrs:{src:n(454),alt:"avatar"}})]),e._v(" "),r("p",[e._v("可见babel-loader，url-loader，ts-loader的耗时比较长，所以每次构建时会花非很多时间。")]),e._v(" "),r("ul",[r("li",[e._v("解决方案：使用"),r("strong",[e._v("cache-lodader")]),e._v("提升二次构建速度提升")])]),e._v(" "),r("p",[e._v("cache-loader的使用比较简单，只需要在每个loader前面添加\ncache-loader即可")]),e._v(" "),r("p",[e._v("babel-loader有自己的缓存配制项")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cacheDirectory: true,\n")])])]),r("p",[e._v("优化后的结果：打包时间从41804ms -> 19911ms")]),e._v(" "),r("p",[r("img",{attrs:{src:n(455),alt:"avatar"}})]),e._v(" "),r("h2",{attrs:{id:"cache-loader提升二次打包速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-loader提升二次打包速度"}},[e._v("#")]),e._v(" cache-loader提升二次打包速度")]),e._v(" "),r("p",[e._v("loader 的编译结果写入硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存。")]),e._v(" "),r("blockquote",[r("p",[e._v("每一次项目变更的时候，没有必要将所有文件都重编译一遍，所以我们可像浏览器加载资源样，将没有改变的内容缓存下来。大部分loader都提供了cache配置项，比如在 babel-loader 中，可以通过设置 cacheDirectory 来开启缓存，这样，babel-loader 就会将每次的编译结果写进硬盘文件（默认是在项目根目录下的node_modules/.cache/babel-loader目录内，当然你也可以自定义）。")])]),e._v(" "),r("p",[e._v("但是也有些没有缓存配置项的，这个时候我们可以合理使用cache-loader（值得注意的是：要把它写在所有loader的最前面）")]),e._v(" "),r("p",[r("strong",[e._v("请注意，保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用此 loader")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: [\n          'cache-loader',\n          'babel-loader'\n        ],\n        include: path.resolve('src')\n      }\n    ]\n  }\n}\n")])])]),r("p",[r("a",{attrs:{href:"https://www.webpackjs.com/loaders/cache-loader/",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于cache-loader的使用"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"使用hardsourcewebpackplugin提升二次构建速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用hardsourcewebpackplugin提升二次构建速度"}},[e._v("#")]),e._v(" 使用HardSourceWebpackPlugin提升二次构建速度")]),e._v(" "),r("p",[e._v("各个模块的缓存，默认只缓存50M，可以自定义配制缓存的大小")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');\n....\n....\nplugins: [\n  new HardSourceWebpackPlugin(),\n  ...\n  ...\n]\n")])])]),r("p",[e._v("使用之后的截图")]),e._v(" "),r("p",[r("img",{attrs:{src:n(456),alt:"avatar"}})]),e._v(" "),r("h2",{attrs:{id:"webpack-dll-plugin避免重复打包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dll-plugin避免重复打包"}},[e._v("#")]),e._v(" webpack.dll.plugin避免重复打包")]),e._v(" "),r("p",[e._v("在执行webpack打包的时候，每一次都会去重新分析项目中所有的依赖包，这是一个比较费时的工作，考虑到有些第三方包我们更 本不会去修改，因此可以想办法将这些包只打包一次。")]),e._v(" "),r("blockquote",[r("p",[e._v("webpack.DllPlugin：将第三方包单独打包到某个文件，然后只需直接引入即可")])]),e._v(" "),r("p",[r("strong",[e._v("首先你需要创建一个webpack.dll.config.js")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// 对于长久不变的第三方库，使用dll打包，优化打包速度\nconst path = require('path');\nconst webpack = require('webpack');\n\nmodule.exports = {\n  mode: 'production',\n  entry: {\n    // 定义程序中打包公共文件的入口文件thirdlibrary.js\n    'thirdlibrary': ['react', 'react-router', 'react-dom', 'react-router-dom']\n  },\n\n  output: {\n    path: path.resolve(__dirname, '..', 'dll'),\n    filename: '[name].dll.js',\n    library: '[name]_[hash]', // 暴露这个库全局可用,\n    libraryTarget: 'this'\n  },\n\n  plugins: [\n    new webpack.DllPlugin({\n      context: process.cwd(),\n      // 分析库文件的映射关系（可以为webpack避免直接使用node_module中的库提供依据）\n      path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),\n      name: '[name]_[hash]' // 与output的library同名\n    })\n  ]\n}\n\n")])])]),r("p",[e._v("引入的时候需要使用 "),r("strong",[e._v("add-asset-html-webpack-plugin")])]),e._v(" "),r("p",[r("strong",[e._v("配置webpack.common.js")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');\n\nplugins: [\n\t// 将打包好的第三方插件加到html，静态资源上\n\tnew AddAssetHtmlPlugin(\n      // 对应的 dll 文件路径\n      { \n        filepath: path.resolve(__dirname, '../dll/thirdlibrary.dll.js'),\n        includeSourcemap: false,\n        hash: true\n      },\n    ),\n    // 使用生成的thirdlibrary-manifest.json来分析包的引用情况，避免重复打包，会在全局变量中直接引用\n    new webpack.DllReferencePlugin(\n      {\n        manifest: path.resolve(__dirname, '..', 'dll/thirdlibrary-manifest.json')\n      }\n    )\n]\n")])])]),r("p",[r("strong",[e._v("存在的问题：")]),e._v(" 如果我们将所有的第三方包都放在一个thirdlibrary.dll.js中，就会使得这个文件变得很大，这样下载的速度就很慢，如果我们能按分开打包为多个文件，这样在首次加载的时候可以并行下载，提升速度。")]),e._v(" "),r("p",[r("strong",[e._v("修改webpack.dll.config.js")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = {\n  mode: 'production',\n  entry: {\n    // 定义程序中打包公共文件的入口文件vendor.js\n    'react': ['react', 'react-dom'],\n    'react-router': ['react-router', 'react-router-dom']\n  },\n  .....\n")])])]),r("p",[e._v('重新执行npm run build:dll 【  "build:dll": "webpack --config webpack/webpack.dll.config.js"】')]),e._v(" "),r("p",[r("strong",[e._v("修改webpack.common.config.js")])]),e._v(" "),r("p",[e._v("将plugins抽离出去，变成动态生成的")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// 基础plugins\nconst plugins = [\n  new WebpackBuildNotifierPlugin({\n    title: \"My Project Webpack Build\",\n    // logo: path.resolve(\"./img/favicon.png\"),\n    suppressSuccess: true\n  }),\n  new HtmlWebpackPlugin({\n    template: '../index.html'\n  }),\n  new MiniCssExtractPlugin({\n    filename: '[name].css',\n    chunkFilename: '[name].[chunkhash:8].css',\n  }),\n];\n/* 动态生成plugin [根据dll文件下的文件个数动态添加AddAssetHtmlPlugin， **webpack.DllReferencePlugin]\n*/\nconst files = fs.readdirSync(path.resolve(__dirname, '../dll'));\nfiles.forEach(file => {\n  if (/.*\\.dll.js/.test(file)) {\n    plugins.push(\n      new AddAssetHtmlPlugin(\n        { \n          filepath: path.resolve(__dirname, '../dll', file),\n          includeSourcemap: false,\n          hash: true\n        },\n      )\n    )\n  };\n  if (/.*\\.manifest.json/.test(file)) {\n    plugins.push(\n      new webpack.DllReferencePlugin(\n        { \n          manifest: path.resolve(__dirname, '../dll', file)\n        },\n      )\n    )\n  }\n});\n")])])]),r("h2",{attrs:{id:"happypack-thread-loader多线程提升打包速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#happypack-thread-loader多线程提升打包速度"}},[e._v("#")]),e._v(" HappyPack/thread-loader多线程提升打包速度")]),e._v(" "),r("p",[e._v("由于运行在 Node.js 之上的 Webpack 是单线程模型的，所以Webpack 需要处理的事情需要一件一件的做，不能多件事一起做。\n我们需要Webpack 能同一时间处理多个任务，发挥多核 CPU 电脑的威力，"),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Famireh%2Fhappypack",target:"_blank",rel:"noopener noreferrer"}},[e._v("HappyPack"),r("OutboundLink")],1),e._v(" 就能让 Webpack 做到这点，它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const HappyPack = require ('happypack')\nconst os = require('os')\n// 获取系统cpu的最大核数\nconst happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });\nmodule.export = {\n    module: {\n        rules: [\n            {\n                test: /\\.(js|jsx)$/,\n                exclude: /(node_modules|bower_components)/,\n                use: 'happypack/loader?id=js',\n            }\n        ]\n    },\n    plugins: [\n        new HappyPack({\n      \t\tid: 'js',\n\t\t\tthreadPool: happyThreadPool,\n     \t\tloaders: [{\n          \t\tloader: 'babel-loader',\n        \t}],\n        }),\n    ]\n}\n")])])]),r("p",[e._v("所以配置起来逻辑其实很简单，就是用 happypack 提供的 Plugin 为你的 Loaders 做一层包装就好了，向外暴露一个id ，而在你的 module.rules 里，就不需要写loader了，直接引用这个 id 即可。")]),e._v(" "),r("p",[r("strong",[e._v("note: 如果项目不是很大，不到万不得已不建议使用这种多线程手段，因为多线程本生就是比较耗时的，所以对于小型项目不建议使用。")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/WmTWXoYn_CvD60nd0_biuQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("happyWebpack的使用"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"使用noparse-ignoreplugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用noparse-ignoreplugin"}},[e._v("#")]),e._v(" 使用noParse，IgnorePlugin")]),e._v(" "),r("p",[e._v("webpack在打包的时候会将每个js文件进行解析，这是十分耗时的；如果你能确定有些库文件\n不会依赖其他的库（不会使用import，require等形式引入其他文件），这个时候可以使用\nnoParse告诉webpack去避免解析这类的文件（库），常见的有jquery，loash。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  noParse: '/jquery|lodash/'\n")])])]),r("p",[r("a",{attrs:{href:"https://webpack.js.org/configuration/module/#modulenoparse",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://webpack.js.org/configuration/module/#modulenoparse"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"使用module-ids"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用module-ids"}},[e._v("#")]),e._v(" 使用module IDs")])])}),[],!1,null,null,null);a.default=t.exports}}]);