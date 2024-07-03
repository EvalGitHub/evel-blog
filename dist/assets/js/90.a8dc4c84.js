(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{550:function(e,t,n){"use strict";n.r(t);var a=n(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vue3-0更新点以及新特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0更新点以及新特性"}},[e._v("#")]),e._v(" vue3.0更新点以及新特性")]),e._v(" "),n("h2",{attrs:{id:"更新的原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新的原因"}},[e._v("#")]),e._v(" 更新的原因：")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("当项目比较复杂，随着项目周期的延长，开发人员很难去明白某些代码的功能，现存的api会强制开发者去组织某些代码逻辑，但是通过功能逻辑组织代码会更有意义。")])]),e._v(" "),n("li",[n("p",[e._v("组件之间的共能逻辑复用成本较高。")])])]),e._v(" "),n("h2",{attrs:{id:"较大的更新点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#较大的更新点"}},[e._v("#")]),e._v(" 较大的更新点：")]),e._v(" "),n("ol",[n("li",[e._v("更好的类型约束,引入Typescript")])]),e._v(" "),n("p",[e._v("低于大型项目我们需要对js做类型约束，降低错误的风险。")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("编程风格改变，更倾向与函数编程风格")])]),e._v(" "),n("p",[e._v("不使用class的写法原因是对于this的上下文处理比较复杂，得不偿失。")]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[e._v("API更新")])]),e._v(" "),n("li",[n("p",[e._v("数据侦测使用proxy代替Object.defineProperty，很好的解决了数组，对象的侦测问题\n（v2.0中对于数组的侦测需要使用vue改写的8种数组操作API push，pop，shift，unshift，splice，sort，reverse, 针对对象使用$set来处理），但是总是不优雅，\n改写Array的原生api，$set的重新添加侦测。")])]),e._v(" "),n("li",[n("p",[e._v("性能提升\n重新写了虚拟dom的实现，编译模板的优化（将模板划分为静态节点，非静态节点，静态节点是不参与分析与diff的，而是直接复用）")])]),e._v(" "),n("li",[n("p",[e._v("tree shaking的支持\n很多时候我们可能不需要vue的所有功能个（比如v-model, transition）,vue3将做到按需加载")])])]),e._v(" "),n("p",[n("strong",[e._v("setup")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("释意：这是一个新提出的组件属性，充当整个组件的入口，在组件属性初始化的时候会调用，早于beforeCreate生命周期。")])]),e._v(" "),n("li",[n("p",[e._v("使用：setup返回一个对象，对象的属性直接可使用与模版（直接合并到组件模版上下文）")])]),e._v(" "),n("li",[n("p",[e._v("参数：可以接受一个props作为第一个参数,这个参数是可响应的，如果有新值传入就会改变，可以通过watch进行监控；\n第二个参数是对象context，暴漏了一些属性【attrs，slots，slot】, attrs，slots都是组件实例的内部代理，都是实时的最新值。")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  <div>{{ object.foo }}</div>\n</template>\n<script>\n  import {reactive} from 'vue';\n  export default {\n    props: {\n      name: String\n    }\n    setup(props) {\n      const object = reactive({foo: 'bar'});\n\n      watch(() => {\n        console.log(`name is: ` + props.name)\n      })\n\n      return {\n        object\n      }\n    }\n  }\n<\/script>\n")])])]),n("p",[n("strong",[e._v("reactive")])]),e._v(" "),n("ul",[n("li",[e._v("释意：这个api相当vue2中的Vue.observable()，不过他的是实现是基于es6的proxy，")]),e._v(" "),n("li",[e._v("使用：接受一个对象并且返回一个对象。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const obj = reactive({ count: 0 })\n")])])]),n("p",[e._v("vue3.0中使用proxy来实现了数据劫持功能，替换了之前的object.defineProperty，原因是使用Object.defineProperty在对对象进行\n劫持的时候需要对对象进行"),n("strong",[e._v("层层的遍历，重写set，get方法，如果目标对象结构比较复杂，这是个十分消耗性能")]),e._v("的方法；此外如果在初始化之后去修改这个对象的属性，或者给目标数组增加新值，"),n("strong",[e._v("可能会造成数据的更新是非响应式的")]),e._v("。")]),e._v(" "),n("p",[e._v("针对以上问题官网给出了解决方案，针对对象增加新属性可以使用vue.$set，针对数组设置新值可以使用指定的api[push, pop, shift, unshift, splice, sort, reverse]")]),e._v(" "),n("p",[e._v("在vue3中使用了proxy就可避免上面的两个问题")]),e._v(" "),n("blockquote",[n("p",[e._v("var proxy = new Proxy(target, handler);")])]),e._v(" "),n("p",[e._v("第一个参数是所要代理的目标对象，即如果没有Proxy的介入，操作原来要访问的就是这个对象\n第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var proxy = new Proxy({}, {\n  get: function(target, propKey) {\n    return 35;\n  }\n});\nproxy.time // 35\nproxy.name // 35\nproxy.title /\n")])])]),n("p",[n("strong",[e._v("ref")])]),e._v(" "),n("ul",[n("li",[e._v("释意：接受一个值返回一个可响应的，可变的ref object")]),e._v(" "),n("li",[e._v("使用：ref object内部用个.value属性指向他的内部值")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const count = ref(0);\nconunt.value++;\nconsole.log(count.value);\n")])])]),n("p",[e._v("如果是在模版上使用不需要添加.value可直接获取值")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  <div>{{ count }}</div>\n</template>\n<script>\nexport default {\n  setup() {\n    return {\n      count: ref(0)\n    }\n  }\n}\n<\/script>\n")])])]),n("p",[n("strong",[e._v("isRef")])]),e._v(" "),n("p",[e._v("可用于检查一个值是否是ref object")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const unwrapped = isRef(foo) ? foo.value : foo\n")])])]),n("p",[n("strong",[e._v("toRef")])]),e._v(" "),n("ul",[n("li",[e._v("解释：可以将一个reactived对象转化为一个普通对象，但是这个普通对象的上的每一个属性都是原始reactive对象的每个属性的ref")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const state = reactive({\n  foo: 1,\n  bar: 2\n});\nconst stageAsRefs = toRefs(state);\nstate.foo++;\nconsole.log(stateAsRefs.foo); // 2\n\nstateAsRefs.foo.value++;\nconsole.log(state.foo);\n")])])]),n("ul",[n("li",[e._v("使用场景：")])]),e._v(" "),n("p",[e._v("如果一个函数返回了一个reactive对象obj，在外面需要结构这个obj，这个时候结构生成的属性都不是可响应的了")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function getDataObj() {\n  const state = reactive({\n    foo:1,\n    bar:2,\n  });\n  return state;\n}\nexport default {\n  setup() {\n    const {foo, bar} = getDataObj();\n    return {\n      foo,\n      bar\n    }\n  }\n}\n")])])]),n("p",[e._v("解决方法：使用toRef进行转换")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function getDataObj() {\n  const state = reactive({\n    foo: 1,\n    bar: 2\n  })\n  return toRefs(state)\n}\n")])])]),n("p",[n("strong",[e._v("computed")])]),e._v(" "),n("p",[e._v("使用：")]),e._v(" "),n("ul",[n("li",[e._v("方法一：默认接受一个get方法，返回一个不可修改的reactive ref对象")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const count = ref(1);\nconst pl = computed(() => count.value +1);\nconsole.log(pl.value); // 2\n// plusOne是不可修改的\npl.value++ // error\n")])])]),n("ul",[n("li",[e._v("方法二：提供get，set方法，这个时候会返回一个可写的ref对象")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const count = ref(1)\nconst plusOne = computed({\n  get: () => count.value + 1,\n  set: val => { count.value = val - 1 }\n})\nplusOne.value = 1\nconsole.log(count.value) // 0\n")])])]),n("p",[n("strong",[e._v("readonly")])]),e._v(" "),n("p",[e._v("接受一个对象（普通，或者reactive，ref）返回一个只读的对象")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const original = reactive({ count: 0 })\nconst copy = readonly(original)\n")])])]),n("h2",{attrs:{id:"生命周期hook"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期hook"}},[e._v("#")]),e._v(" 生命周期hook")]),e._v(" "),n("ul",[n("li",[e._v("beforeCreate -> setup()")]),e._v(" "),n("li",[e._v("created -> setup()")]),e._v(" "),n("li",[e._v("beforeMount -> onBeforeMount")]),e._v(" "),n("li",[e._v("mounted -> onMounted")]),e._v(" "),n("li",[e._v("beforeUpdate -> onBeforeUpdate")]),e._v(" "),n("li",[e._v("updated -> onUpdated")]),e._v(" "),n("li",[e._v("beforeDestroy -> onBeforeUnmount")]),e._v(" "),n("li",[e._v("destroyed -> onUnmounted")]),e._v(" "),n("li",[e._v("errorCaptured -> onErrorCaptured")])]),e._v(" "),n("p",[e._v("这些生命周期函数在使用之前需要通过import引入，并且只能在setup中使用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { onMounted, onUpdated, onUnmounted } from 'vue';\nsetup() {\n  onMounted(() => {\n    console.log('mounted!')\n  })\n  onUpdated(() => {\n    console.log('updated!')\n  })\n  onUnmounted(() => {\n    console.log('unmounted!')\n  })\n}\n")])])]),n("h1",{attrs:{id:"为什么vue3-0不实现时间分片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么vue3-0不实现时间分片"}},[e._v("#")]),e._v(" 为什么vue3.0不实现时间分片？")]),e._v(" "),n("p",[e._v("原因就是不需要，vue的响应式设计原理相对于react的Reactivity（通过setState去出发更新）已经减少了很多不必要的\nDOM重新渲染。")]),e._v(" "),n("p",[e._v("时间分片的目的就是充分利用cpu的效率去执行程序，但是他只是改善了cpu的执行效率，而不是解决DOM的更新优化；\n在react中由于他的底层实现原理，以及JSX语法等相对与vue来说都是比较消耗性能的（react因此提供了一些钩子函数（shouldComponent, pureComponent, useMemo, useCallback）让开发者自行去优化，但是大部分情况下都是被忽视的），因此react相对于vue是更需要时间分片的；")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/vuejs/rfcs/issues/89",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why remove time slicing from vue3?"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("参考：")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://vue-composition-api-rfc.netlify.com/api.html#setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-composition-api"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5e9f6b3251882573a855cd52#heading-24",target:"_blank",rel:"noopener noreferrer"}},[e._v("尤雨溪在Vue3.0 Beta直播里聊到了这些…"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5e9ce011f265da47b8450c11#heading-9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue3 究竟好在哪里？（和 React Hook 的详细对比）"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);