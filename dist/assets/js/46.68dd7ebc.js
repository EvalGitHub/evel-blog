(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{496:function(e,s,a){"use strict";a.r(s);var l=a(28),t=Object(l.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"关于babel的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于babel的理解"}},[e._v("#")]),e._v(" 关于babel的理解")]),e._v(" "),a("h2",{attrs:{id:"babel主要解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel主要解决的问题"}},[e._v("#")]),e._v(" babel主要解决的问题")]),e._v(" "),a("p",[e._v("babel主要是解决ES6浏览器不支持ES6的问题，会将代码转化成AST之后，通过遍历AST树对其进行部分修改，将其转化为code，这样就可以使用哪些es6语法了。")]),e._v(" "),a("h2",{attrs:{id:"babel家族的主要成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel家族的主要成员"}},[e._v("#")]),e._v(" babel家族的主要成员")]),e._v(" "),a("ul",[a("li",[e._v("@babel/core")])]),e._v(" "),a("p",[e._v("AST的转换核心，如果使用了babel，那个这个模块是必须的")]),e._v(" "),a("ul",[a("li",[e._v("@babel/cli")])]),e._v(" "),a("p",[e._v("看到cli这个就能想到他可以提供命令行操作环境，类似的还有webpack-cli\n安装 npm i -D @babel/core @babel/cli 之后你就可以在命令行对js文件做操作")]),e._v(" "),a("blockquote",[a("p",[e._v("babel script.js")])]),e._v(" "),a("ul",[a("li",[e._v("@babel/preset-env")])]),e._v(" "),a("p",[e._v("作用是：可以使得最新的js语法在浏览器上运行，他基本上面满足了大部分es6语法转换，减少了开发者的很多配置工作。")]),e._v(" "),a("p",[e._v("let/const， 模版字符串， let快级作用域，函数参数默认值，展开运算符")]),e._v(" "),a("ul",[a("li",[e._v("@babel/plugin*")])]),e._v(" "),a("p",[e._v("babel的插件主要是解决开发者的特定需求(Babel基础功能不满足的时候)提供的一个解决方案，像比较常见的热更新，组件懒加载。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("plugins: [\n  'react-hot-loader/babel',\n  '@babel/plugin-syntax-dynamic-import',\n]\n")])])]),a("ul",[a("li",[e._v("@babel/runtime")])]),e._v(" "),a("p",[e._v("减少代码体积，避免重复性引入；创造一个沙盒环境使得你可以直接使用es6的新api，不会影响全局作用域，常用于公共库开发。")]),e._v(" "),a("ul",[a("li",[e._v("@babel/polyfill")])]),e._v(" "),a("p",[e._v("es6提供了大量的新语法以及新的api，对于新的语法我们通过@babel/preset-env基本上可以解决，但是对于新的api（promise、weakMap、Array.from、Object.assign）他就无能为力了，这个时候你可以选择@babel/polyfill。")]),e._v(" "),a("p",[a("strong",[e._v("关于@babel/polyfill需要注意：")])]),e._v(" "),a("ol",[a("li",[e._v("它一般用于项目开发，而不用于函数库框架等开发，因为他会修改全局的作用域和原型prototype，所以在开发的时候我们要清楚的知道自己在做什么；在开发一个公用的库的时候不使用@babel/polyfill，而是使用 @babel/plugin-transform-runtime\n避免在别人的项目因引入你的库而出现不可与预知的问题。")])]),e._v(" "),a("ul",[a("li",[e._v(".babelrc/babel.config.js")])]),e._v(" "),a("p",[e._v("如果我们使用的是webpack作为构建工具，一般来说可以直接在babel-loader中进行配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  test: /\\.js$/,\n  exclude: /(node_modules|bower_components)/,\n  use: {\n    loader: \'babel-loader\',\n    options: {\n      presets: [\n        [\'@babel/preset-env\', \n        {\n          "module": \'commonjs\',\n          "targets": {\n            "browsers": [\n              "> 1%",\n              "last 2 versions",\n              "not ie <= 8"\n            ]\n          },\n          "corejs": "3",\n          "useBuiltIns": "usage", // entry|usage\n        }], \n        \'@babel/preset-react\'\n      ],\n      plugins: [\n        \'@babel/plugin-syntax-dynamic-import\',\n      ]\n    }\n  }\n},\n')])])]),a("p",[e._v("当然如果我们有意将这配置提取出来，或者其他的构建工具不支持这样的配置，就可以使用配置文件，在项目的根目录创建babel.config.js文件加入配置即可。")]),e._v(" "),a("h2",{attrs:{id:"关于-babel-preset-env的几个重要知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-babel-preset-env的几个重要知识点"}},[e._v("#")]),e._v(" 关于@babel/preset-env的几个重要知识点")]),e._v(" "),a("p",[e._v("@babel/preset-env可以是的我们使用js的新语法以及代码支持浏览器的新特性，他是babel7这个版本推出的，所以不支持 stage-x 这种类型插件。")]),e._v(" "),a("h3",{attrs:{id:"browserslist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[e._v("#")]),e._v(" Browserslist")]),e._v(" "),a("p",[e._v("涉及到浏览器新特性以及js的新语法，我们应该很好理解的就是@babel/preset-env在在进行代码转化的时候肯定会有一个支持范围（不会对所有类型及版本的浏览器都提供支持），browserslist就是这个可以用设置兼容浏览器范围的属性(ToKnow:这个属性列表的作用？？)")]),e._v(" "),a("p",[e._v("设置方式有多种，你可以在package.json中设置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' "browserslist": [\n    "defaults",\n    "not ie < 11",\n    "last 2 versions",\n    "> 1%",\n    "ios 7",\n    "last 3 ios versions"\n  ]\n')])])]),a("p",[e._v("也可以在babel-preset-env的tagets中设置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "targets": {\n    "browsers": [\n      "chrome": "58",\n      "ie": "11"\n    ]\n  }\n}\n')])])]),a("p",[e._v("如果我们不指定需要兼容的浏览器范围，它会转换所有的es6代码，但是随着es6的普及已经有越来越多的浏览器已经支持了部分es6语法，所以建议我们指定浏览器兼容范围，以至于不需要babel/preset-env转换多有的es6语法，减少代码体积。")]),e._v(" "),a("h3",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" modules")]),e._v(" "),a("p",[e._v("将ES6模块语法转换成其他类型（amd | umd | systemjs | commonjs | cjs | auto | false），默认default，false不会转换。")]),e._v(" "),a("p",[e._v("在做开发的时候我们可能会遇到一些奇葩的babel错误提醒，例如"),a("code",[e._v("Cannot assign to read only property 'exports' of object #<Object>")]),e._v("；错误的根源就是webpack不能混合使用import和module.exports；\n这个时候我们或许可以使用这个配置变量来解决问题。")]),e._v(" "),a("blockquote",[a("p",[e._v("\"module\": 'commonjs',")])]),e._v(" "),a("h3",{attrs:{id:"usebuiltins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usebuiltins"}},[e._v("#")]),e._v(" useBuiltIns")]),e._v(" "),a("p",[e._v("值得注意的是es6中的新特性可以分为两大类：")]),e._v(" "),a("ol",[a("li",[e._v("syntax 语法")])]),e._v(" "),a("p",[e._v("let, const, class, decorator...")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("新的api")])]),e._v(" "),a("p",[e._v("includes, map, includes....")]),e._v(" "),a("p",[e._v("对于新的syntax，使用@babel/preset-env是可以进行转换的，但是对于新的api他就无能为力，这个时候就需要polyfill上场了。值得一聊的是如果使用的是@babel/polyfill，这个属性就可以发挥很大作用。")]),e._v(" "),a("p",[a("strong",[e._v("useBuiltIns的三个选项及作用")])]),e._v(" "),a("ul",[a("li",[e._v("useBuiltIns: 'entry'")])]),e._v(" "),a("p",[e._v("设置为entry之后，如果在main.js中引入了@babel/polyfill，就不能再多次引入了，否则会报错，官方推荐在单页应用中这个选项。它会为根据环境的不同为引入不同的core-js，只是单纯的对应环境的不同加载不同的垫片，可不是按需加载哦。")]),e._v(" "),a("p",[a("strong",[e._v("note：")]),e._v(" 使用这个设置的时候我们必须在入口处显示的引入@babel/polyfill")]),e._v(" "),a("ul",[a("li",[e._v("useBuiltIns: 'usage'")])]),e._v(" "),a("p",[e._v("为每一个需要转化的js文件导入他们需要的polyfills，并且每个文件之后加载相同的polyfill一次。")]),e._v(" "),a("p",[a("strong",[e._v("note：")]),e._v(" 不需要手动引入@babel/polyfill")]),e._v(" "),a("ul",[a("li",[e._v("useBuiltIns: 'false'")])]),e._v(" "),a("p",[e._v("默认false，啥也不做")]),e._v(" "),a("h3",{attrs:{id:"corejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#corejs"}},[e._v("#")]),e._v(" corejs")]),e._v(" "),a("p",[e._v("如果设置了useBuiltIns：entry/usage，那么这选项才有作用，默认为2。\ncoreje的版本有2，3默认是2（只有稳定版的js特性才会被注入，对于一些提案的新特性是不会注入的），如果你想注入那些正在提案中的新特性可以")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("useBuiltIns: 'usage'\ncorejs: { \n  version: 3, \n  proposals: true\n}\n")])])]),a("p",[e._v("或者")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('js文件中导入：import "core-js/proposals/string-replace-all"\n\nuseBuiltIns: "entry"\n')])])]),a("p",[a("strong",[e._v("note：")]),e._v(" 设置了useBuiltIns:entry，就不支持配置corejs。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/58624930",target:"_blank",rel:"noopener noreferrer"}},[e._v("值得看的babel讲解文章"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5ddff3abe51d4502d56bd143#heading-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("不容错过的 Babel7 知识"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);