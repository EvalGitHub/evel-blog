(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{584:function(e,n,t){"use strict";t.r(n);var o=t(28),s=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"域名的设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名的设置"}},[e._v("#")]),e._v(" 域名的设置")]),e._v(" "),t("p",[e._v("项目开发中会有多种代码环境，开发环境dev，测试环境test，生成环境production，每个环境对应的接口域名又有不同，因此前端需要动态配置设置接口域名。")]),e._v(" "),t("h2",{attrs:{id:"方案一-设置webpack的env-node-env变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案一-设置webpack的env-node-env变量"}},[e._v("#")]),e._v(" 方案一：设置webpack的env.NODE_ENV变量")]),e._v(" "),t("p",[e._v("具体步骤介绍：在使用webpack进行项目构建打包的时候,一般会执行npm run dev，或者npm start等命令，他们对应就是package.json中的script命令。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' "scripts": {\n   "test": "echo \\"Error: no test specified\\" && exit 1",\n   "dev": "webpack-dev-server --open --env.NODE_ENV=development",\n   "build:pro": "webpack --env.NODE_ENV=production && node server.js",\n   "build:stage": "webpack --env.NODE_ENV=stage && node server.js",\n   "build:test": "webpack --env.NODE_ENV=test && node server.js"\n  },\n')])])]),t("p",[e._v("如上所示如果设置了  --env.NODE_ENV= ***  ， 那么我们就可以在我们的代码中获取这个值，因此可以利用这个值取做进一步的区分（例如：进行webpack 配置区分，域名区分）。")]),e._v(" "),t("p",[e._v("1）webpack 的区分配置")]),e._v(" "),t("p",[e._v("为了开发舒畅，开发环境，生产环境的webpack配置有不同的，生产环境一般会开启很多功能例 如调试，代码压缩，合并，缓存优化。所有一般会在webapck.config.js中读取[env.NODE_ENV]来进行区分。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let webpackConfig = {\n  \"development\": require('./webpack/webpack.dev.js'),\n  \"production\": require('./webpack/webpack.pro'),\n  \"stage\": require('./webpack/webpack.stage'),\n  \"test\": require('./webpack/webpack.test'),\n}\nmodule.exports = env => {\n  return webpackConfig[env.NODE_ENV]\n}\n")])])]),t("p",[e._v("2）域名的区分")]),e._v(" "),t("p",[e._v("如果设置了 --env.NODE_ENV= ***，我们可以在前端代码中读取变量process.env.NODE_ENV，用它来获取我们这是的值。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if (process.env.NODE_ENV === 'development') {\n\thost = 'http://dev.swic.com/'\n} else if (process.env.NODE_ENV === 'production') {\n\thost = 'http://pro.swic.com'\n}\n")])])]),t("p",[e._v("项目实例："),t("a",{attrs:{href:"https://github.com/EvalGitHub/webpack_reactJS",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/EvalGitHub/webpack_reactJS"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("本方案缺陷：")])]),e._v(" "),t("p",[e._v("上面的方案确实可行，但是缺陷是每一次发版针对不同环境，都需要开发人员手动在线下针对不同环境执行不同的命令打包代码，然后发布，存在很大的风险（命令执行错误，代码的更改）。")]),e._v(" "),t("h2",{attrs:{id:"方案二-代码执行期间动态读取window-location-host做区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案二-代码执行期间动态读取window-location-host做区分"}},[e._v("#")]),e._v(" 方案二：代码执行期间动态读取window.location.host做区分")]),e._v(" "),t("p",[e._v("因为不同环境域名有所不同，因此可以在代码执行期间使用window.location.host获取不同的域名做代码区分。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let baseHost = location.protocol + '//' + location.hostname + ':8081/****';  // 默认\nconst proDomain = {\n\tdev: 'lending.tudou.com',\n\ttest: 'lending.test.tudou.com',\n\tproduction: 'lending.production.tudou.com'\n};\n\nfor (let key in proDomain  ) {\n\tif ( proDomain[key] === window.loaction.host) {\n\t\tbaseHost  = location.protocol + '//' + proDomain [key]\n\t}\n}\nexport default { baseHost }\n")])])]),t("p",[e._v("项目实例：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/EvalGitHub/lond.frontend.code/blob/master/src/service/webApi.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/EvalGitHub/lond.frontend.code/blob/master/src/service/webApi.js"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("本方案缺陷：")])]),e._v(" "),t("p",[e._v("因为使用了window对象，所以限制了只能在浏览器环境执行，因此只使用与web，H5项目。")]),e._v(" "),t("h4",{attrs:{id:"方案三-运维开发人员在发布环境设置环境变量-前端同学读取使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案三-运维开发人员在发布环境设置环境变量-前端同学读取使用"}},[e._v("#")]),e._v(" 方案三：运维开发人员在发布环境设置环境变量，前端同学读取使用")]),e._v(" "),t("p",[e._v("现在前端开发都离不开nodeJS，使用nodeJS（express/koa）可以一个微服务启动打包好的前端项目。")]),e._v(" "),t("p",[e._v("例如运维同学设置了一个process.env.front_env的环境变量，这样我们就可在我们的前端项目启动文件server.js中读取这个值（只能在nodeJS中读取，在前端项目代码块中是无法读取这个值的）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const express = require('express');\nconst app = express();\nconst env = process.env.front_env || 'development';\nconst initialContent = {\n  development: 'development',\n  production: 'production',\n  staging: 'staging',\n  test: 'test'\n};\napp.use(express.static('./dist'));\napp.get('/config', function(req, res){\n  res.json(initialContent[env]);\n});\n\nfunction startApp () {\n  app.listen(5000,function(err){\n    if(err){\n      console.log(err);\n      return;\n    }\n    console.log('> Listening at  http://localhost: '+ 5000 + '\\n')\n  });\n};\nstartApp();\n")])])]),t("p",[e._v("上面的代码就是使用express启动打包 好的前端项目，同时还设置了一个路由'./config'，用来返回环境变量（如果运维在各个不同环境有设置环境变量process.env.front_env）。")]),e._v(" "),t("p",[e._v("在前端使用：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import axios from 'axios';\n\nconst DomainConfig = {\n    development: {\n        env: 'development',\n        host: 'https://dev-api-ezbuy.codemao.cn/',\n        openService: 'https://dev-open-service.codemao.cn/',\n        port: 0,\n        fontWebSiteHost: 'https://dev-transaction-cashier.codemao.cn/',\n        // fontWebSiteHost: 'http://192.168.0.6:9004/',\n    },\n    production: {\n        env: 'production',\n        host: 'https://production-api-ezbuy.codemao.cn/',\n        openService: 'https://open-service.codemao.cn/',\n        port: 0,\n        fontWebSiteHost: 'https://production-transaction-cashier.codemao.cn/'\n    },\n};\n\nlet config = '';\nexport const init_config = (cb) => {\n    return axios.get('/config').then((res) => {\n        if (res.status === 200) {\n            let env = res.data;\n            config = DomainConfig[env];\n            cb && cb();\n            return config;\n        } \n    }).catch(err => {\n        config = DomainConfig.development;\n        cb && cb();\n        return config;\n    })\n}\n\nexport const get_config = () => {\n    if (!config) {\n        console.error(`\n            Tried to get config before it was loaded. This should never happen.\n            Ensure your code is not run before the index.ts init function has been called.\n            Be aware that the config is not accessible from within the WHITEPAW Runtime.\n        `);\n        return;\n    }\n    return config;\n};\n\n")])])]),t("p",[e._v("于是在进行接口访问的时候就可以使用get_config() 获取相关配置，值得提醒的是必须保证init_config()，在get_config()之前执行，因此init_config(cb)，这个cb回掉函数是必要的，通常是app.js单页初始化函数。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function startRenderDom () {\n  ReactDOM.render(\n    <App/>,\n    document.getElementById('root')\n  );\n};\ninit_config(startRenderDom);\n")])])]),t("p",[e._v("参考实例："),t("a",{attrs:{href:"https://github.com/EvalGitHub/cashier/blob/master/src/index.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/EvalGitHub/cashier/blob/master/src/index.js"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);