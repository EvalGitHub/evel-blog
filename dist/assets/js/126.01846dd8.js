(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{587:function(t,e,n){"use strict";n.r(e);var a=n(28),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"页面隐藏元素的方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面隐藏元素的方式"}},[t._v("#")]),t._v(" 页面隐藏元素的方式")]),t._v(" "),n("h2",{attrs:{id:"设置width-height-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置width-height-0"}},[t._v("#")]),t._v(" 设置width，height = 0")]),t._v(" "),n("p",[t._v("这样设置，元素的占位会消失，但是仍然存在文档流中；\n还是能过document.getElementById获取到元素；\n可设置动画效果")]),t._v(" "),n("h2",{attrs:{id:"设置display-none"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置display-none"}},[t._v("#")]),t._v(" 设置display:none")]),t._v(" "),n("p",[t._v("元素脱离文档流，被设置的元素的位置会被其后面的元素补位。\n但是还是可以获取到这个元素\n不可设置动画效果")]),t._v(" "),n("h2",{attrs:{id:"设置visibility-hidden"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置visibility-hidden"}},[t._v("#")]),t._v(" 设置visibility:hidden")]),t._v(" "),n("p",[t._v("元素仍然占位，视觉上看不见而已；\n还是可以获取到这个元素；\n可设置动画效果；\n"),n("strong",[t._v("但是这个元素绑定的事件不能被触发")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("console.log(document.getElementsByClassName('o-hide')[0]); //  <div class=\"o-hide\">2</div>\n")])])]),n("h2",{attrs:{id:"设置opacity-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置opacity-0"}},[t._v("#")]),t._v(" 设置opacity:0")]),t._v(" "),n("p",[t._v("元素仍然占位，视觉上看不见而已；\n还是可以获取到这个元素；\n可设置动画效果；\n"),n("strong",[t._v("绑定的事件能被触发")])]),t._v(" "),n("h2",{attrs:{id:"获取父元素节点-删除目标元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取父元素节点-删除目标元素"}},[t._v("#")]),t._v(" 获取父元素节点，删除目标元素")]),t._v(" "),n("p",[t._v("元素是真的被删除了，获取不到被删除的元素，事件也不能绑定")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" let node =  document.getElementsByClassName('o-hide')[0];\n document.getElementsByTagName('body')[0].removeChild(node);\n")])])]),n("h2",{attrs:{id:"position-定位移出可视区域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#position-定位移出可视区域"}},[t._v("#")]),t._v(" position 定位移出可视区域")]),t._v(" "),n("p",[t._v("完整源代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n    div {\n      padding: 60px;\n      width: 60px;\n      font-size: 3em;\n      background: pink;\n      text-align: center;\n      margin: 1%;\n      display: inline-block;\n      float: left;\n      cursor: pointer;\n      font-family: 'Lato';\n    }\n    .o-hide {\n      display:none;\n      /* visibility: hidden; */\n      /* opacity: 0; */\n      transition: all ease 0.8s;\n    }\n    </style>\n  </head>\n  <body>\n    <div>1</div>\n    <div class=\"o-hide\">2</div>\n    <div>3</div>\n  </body>\n</html>\n<script>\n  // let node =  document.getElementsByClassName('o-hide')[0];\n  // document.getElementsByTagName('body')[0].removeChild(node);\n  document.getElementsByClassName('o-hide')[0].addEventListener('click', ()=> {\n    console.log('ddd');\n  })\n  console.log(document.getElementsByClassName('o-hide')[0]);\n<\/script>\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);