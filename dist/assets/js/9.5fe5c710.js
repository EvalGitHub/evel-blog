(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{433:function(t,a,s){t.exports=s.p+"assets/img/history_router.709d0a1c.png"},434:function(t,a,s){t.exports=s.p+"assets/img/hash_router.5ae617e1.png"},435:function(t,a,s){t.exports=s.p+"assets/img/histtory_api_callback.5a189d41.png"},548:function(t,a,s){"use strict";s.r(a);var r=s(28),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"路由hash模式与history"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由hash模式与history"}},[t._v("#")]),t._v(" 路由hash模式与history")]),t._v(" "),r("h2",{attrs:{id:"路径显示的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路径显示的区别"}},[t._v("#")]),t._v(" 路径显示的区别")]),t._v(" "),r("p",[t._v("hash模式浏览器地址栏会多一个“#”，")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("http://179.123.108.160:5000/#/view_detail\n")])])]),r("p",[t._v("每一次页面的变更都对应这个“#”后面的路径变化，而history模式没有这个“#”。")]),t._v(" "),r("h2",{attrs:{id:"刷新页面history模式会出现404的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#刷新页面history模式会出现404的问题"}},[t._v("#")]),t._v(" 刷新页面history模式会出现404的问题")]),t._v(" "),r("p",[t._v("原因是刷新浏览器之后，浏览器会根据这个地址向对应的服务器去重新请求资源，“#”（hash是不会包含在请求路径之中的），\n所以使用hash值的时候总是定位在index.html，然后再由vue-router做页面更新处理；但是如果是history模式的时候，请求\n路径机会是一个完整的路径地址，但是但页面应用只有一个index.html，所以会寻找不到返回404 error。")]),t._v(" "),r("ul",[r("li",[t._v("history模式")])]),t._v(" "),r("p",[t._v("形如这样的请求： ‘http://192.168.108.160:5000/view_agreement‘")]),t._v(" "),r("p",[t._v("结果：")]),t._v(" "),r("p",[r("img",{attrs:{src:s(433),alt:"avatar"}})]),t._v(" "),r("p",[t._v("因为服务器上不存在这个http://192.168.108.160:5000/view_agreement这个资源")]),t._v(" "),r("ul",[r("li",[t._v("hash模式")])]),t._v(" "),r("p",[t._v("形如这样的请求：'http://192.168.108.160:5000/#/view_agreement'")]),t._v(" "),r("p",[t._v("结果：")]),t._v(" "),r("p",[r("img",{attrs:{src:s(434),alt:"avatar"}})]),t._v(" "),r("p",[t._v("对比上面的结果可以清晰看到，hash模式在请求资源的时候是不会携带hash值的")]),t._v(" "),r("h2",{attrs:{id:"为什么浏览器的前进后退不会触发404的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么浏览器的前进后退不会触发404的问题"}},[t._v("#")]),t._v(" 为什么浏览器的前进后退不会触发404的问题？？")]),t._v(" "),r("p",[t._v("因为前进后退调用的是window.history.go/back方法，会在页面的history栈中获取历史记录，并不会触发页面重新加载这个文件资源")]),t._v(" "),r("h2",{attrs:{id:"怎么解决history模式的404问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么解决history模式的404问题"}},[t._v("#")]),t._v(" 怎么解决history模式的404问题？？")]),t._v(" "),r("p",[t._v("nodeJS怎么解决这个问题了？")]),t._v(" "),r("p",[t._v("解决方案：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("const history = require('connect-history-api-fallback');\napp.use(history());\n")])])]),r("p",[t._v("只需要上面这个api就可以了，其实现原理我们可以看看这个中间件的实现源码。")]),t._v(" "),r("p",[t._v("源码思路是使用中间件，拦截所有页面请求，判断请求类型(根据请求方法，以及请求header去判断)\n找到页面路径请求，然后重定向，指向index.html(入口页面)，剩下的工作就是vue-router/react-router\n去根据路径匹配对应的组件，页面更新。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(435),alt:"avatar"}})]),t._v(" "),r("h2",{attrs:{id:"java等其处理方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java等其处理方式"}},[t._v("#")]),t._v(" java等其处理方式")]),t._v(" "),r("p",[t._v("其实不关是java，还是php等，我们只需要在页面资源找不到返回404之前，将其重定向到index.html，都可以解决这个问题")])])}),[],!1,null,null,null);a.default=e.exports}}]);