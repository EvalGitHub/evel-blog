(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{604:function(e,n,l){"use strict";l.r(n);var s=l(28),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"webpack的include-exclude的使用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#webpack的include-exclude的使用"}},[e._v("#")]),e._v(" webpack的include，exclude的使用")]),e._v(" "),l("p",[e._v("使用插件以及loader的时候，为了提升速度或者精确指定需要被作用的文件，会使用到exclude，include这两个配置参数")]),e._v(" "),l("blockquote",[l("p",[e._v("exclude是排除的作用，被排除的文件不需要被plugin/loader处理")])]),e._v(" "),l("blockquote",[l("p",[e._v("include是包含的作用，被包含的文件将会被plugin/loader处理")])]),e._v(" "),l("h2",{attrs:{id:"同时使用的情况下"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#同时使用的情况下"}},[e._v("#")]),e._v(" 同时使用的情况下")]),e._v(" "),l("ul",[l("li",[e._v("同时使用，exclude优先级别大于include")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("{\n  test: /\\.(t|j)s(x?)$/,\n  enforce: 'pre',\n  use: [\n    {\n      loader: 'eslint-loader',\n      options: {\n        cache: true,\n      },\n    },\n  ],\n  include: [/src/],\n  exclude: [/(node_modules)/, /seo/, /src/],\n},\n")])])]),l("p",[e._v("此时eslint-loader不会作用src目录下的所有文件，即使使用了include")]),e._v(" "),l("ul",[l("li",[e._v("只使用include")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("{\n  test: /\\.(t|j)s(x?)$/,\n  enforce: 'pre',\n  use: [\n    {\n      loader: 'eslint-loader',\n      options: {\n        cache: true,\n      },\n    },\n  ],\n  include: [/src/],\n},\n")])])]),l("p",[e._v("此时eslint-loader 只会作用于src目录下的所有文件")]),e._v(" "),l("ul",[l("li",[e._v("只使用exclude")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("{\n  test: /\\.(t|j)s(x?)$/,\n  enforce: 'pre',\n  use: [\n    {\n      loader: 'eslint-loader',\n      options: {\n        cache: true,\n      },\n    },\n  ],\n  exclude: [/(node_modules)/, /seo/, /src/],\n}\n")])])]),l("p",[e._v("此时seo, src, node_modules不会被作用")])])}),[],!1,null,null,null);n.default=t.exports}}]);