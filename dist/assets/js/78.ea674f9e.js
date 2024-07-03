(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{527:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react中关于state的不常用技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中关于state的不常用技巧"}},[t._v("#")]),t._v(" react中关于state的不常用技巧")]),t._v(" "),s("h2",{attrs:{id:"实现react的双向绑定功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现react的双向绑定功能"}},[t._v("#")]),t._v(" 实现react的双向绑定功能")]),t._v(" "),s("p",[t._v("input框中输入值，对应页面刷新")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("interface initState {\n  showModal: boolean,\n  targetUrl: string,\n  [propsName:string]:any\n};\n\nclass Component extends React.Component <initProps, initState> {\n  handleStateValue = (event:any) => {\n    this.setState({\n      [event.target.name]: event.target.value\n    })\n  };\n  render () {\n    return (\n      <>\n       <Input className='input_itme' name='targetUrl'  \n        value={this.state.targetUrl}\n        onInput={this.handleStateValue} placeholder='显示之前填入的配置链接'/>\n      </>\n    )\n  } \n}\n")])])]),s("p",[s("strong",[t._v("补充一点：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" this.setState({\n   [stateName]: stateValue\n })\n")])])]),s("p",[t._v("这种形式可以实现state的健和值的动态变化")]),t._v(" "),s("h4",{attrs:{id:"通过props传递下来的值-怎么实现input的双向绑定了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过props传递下来的值-怎么实现input的双向绑定了"}},[t._v("#")]),t._v(" 通过props传递下来的值，怎么实现input的双向绑定了？")]),t._v(" "),s("p",[s("strong",[t._v("问题描述：")]),t._v("上面的代码基本上已经实现了一个简单的双向绑定功能【通过state与onInput相结合】，但是存在一个问题是，如果是父组件向子组件中传递一个值（props），这个时候怎么能将props中的属性赋值给state上的同名变量呢？")]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")]),t._v("我们需要一个时机，将props上的需要属性赋值给state，同时不会引起界面的重新渲染。在react框架提供了很多生命周期函数，其中"),s("strong",[t._v("componentWIllReceiveProps")]),t._v("正是我们需要的，在这个生命周期函数中，我们可以获取到最新的props，同时修改state也不会引起视图的重新渲染，关键代码如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("componentWillReceiveProps (nextProps:any) {\n  this.setState({\n    ...nextProps.recordProp\n  })\n};\n")])])]),s("p",[t._v("相关介绍："),s("a",{attrs:{href:"https://www.jianshu.com/p/ebe8823c8299",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/ebe8823c8299"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"关于setstate的异步操作-如何立即获得最新的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于setstate的异步操作-如何立即获得最新的状态"}},[t._v("#")]),t._v(" 关于setState的异步操作-如何立即获得最新的状态")]),t._v(" "),s("p",[t._v("为了提升性能react将setState设置为异步【将合成事件以及生命周期中的多次状态更新集中处理】，减少对试图的频繁更新")]),t._v(" "),s("ul",[s("li",[t._v("因此这就会造成连续多次的setState只会执行最后一次")]),t._v(" "),s("li",[t._v("setState之后不能立即获取最新的状态值")])]),t._v(" "),s("h4",{attrs:{id:"如果想在setstate之后立即获得状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果想在setstate之后立即获得状态"}},[t._v("#")]),t._v(" 如果想在setState之后立即获得状态？")]),t._v(" "),s("ul",[s("li",[t._v("在原生事件，或者setTimeout、setInterval中更新状态")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("componentDidMount () {\n  this.setState({\n    rtCode1: 222\n  })\n  console.log(this.state.rtCode1)\n  setTimeout(() => {\n    this.setState({\n      rtCode2: 222\n    })\n    console.log(this.state.rtCode2)\n  })\n}\n")])])]),s("blockquote",[s("p",[t._v("undefined  2")])]),t._v(" "),s("ul",[s("li",[t._v("setState的回调函数中获取最新的状态（setState在更新完状态之后会执行回调函数）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("setState({\n  name: '测试的名字'\n}, () => {\n  console.log(this.state.name)\n})\n")])])]),s("blockquote",[s("p",[t._v("测试的名字")])]),t._v(" "),s("ul",[s("li",[t._v("在生命周期函数componentDidUpdate中获取最新的状态（props，state的更新都会触发此生命周期函数）")])]),t._v(" "),s("h2",{attrs:{id:"使用state去更新state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用state去更新state"}},[t._v("#")]),t._v(" 使用state去更新state")]),t._v(" "),s("p",[t._v("因为state的异步更新问题，所以很难使用当前的状态去更新当前的状态，但也不是不可能。")]),t._v(" "),s("p",[s("strong",[t._v("存在的需求：")]),t._v("需要在当前状态上添加更新，例如页面有个计数器需要点击一次就更新下状态，同步到视图。")]),t._v(" "),s("p",[s("strong",[t._v("需要使用setState的另一种形式，setState除了可以接受一个对象，还可以接受一个函数(注意它的使用形式)")])]),t._v(" "),s("ul",[s("li",[t._v("第一个参数：当前的最新状态")]),t._v(" "),s("li",[t._v("第二个参数：当前的最新props")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this.setState((prevState, props) => ({\n  counter: prevState.counter + props.increment\n}))\n")])])]),s("p",[t._v("接受函数的这种方式，也可以有效的使得react连续更新state")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class App extends React.Component {\n  state = {\n    counter: 0,\n  }\n  handleClick = () => {\n    this.setState(prev => ({ counter: prev.counter + 1 }));\n    this.setState(prev => ({ counter: prev.counter + 1 }));\n    this.setState(prev => ({ counter: prev.counter + 1 }));\n  }\n  render() {\n    return (\n      <div>\n        counter is: {this.state.counter}\n        <button onClick={this.handleClick} >点我</button>\n      </div>\n    )\n  }\n}\n")])])]),s("blockquote",[s("p",[t._v("界面显示的是3，如果是接受对象的形式，则是1")])]),t._v(" "),s("h2",{attrs:{id:"根据state的类型更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据state的类型更新"}},[t._v("#")]),t._v(" 根据state的类型更新")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("状态是基础类型，直接赋值即可")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//原state\nthis.state = {\n  count: 0,\n  title : 'React',\n  success:false\n}\n//改变state\nthis.setState({\n  count: 1,\n  title: 'bty',\n  success: true\n})\n")])])]),s("ul",[s("li",[s("strong",[t._v("状态是引用类型（数组，对象）则需要返回一个新的数组，对象")])])]),t._v(" "),s("p",[t._v("react执行diff算法时候比较的是两个引用，所以为了状态的改变能更新视图，我们需要返回一个新的引用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 方法一：将state先赋值给另外的变量，然后使用slice创建新数组\nlet books = this.state.books; \nthis.setState({\n  books: books.slice(1,3)\n})\n// 方法二：使用preState、slice创建新数组\nthis.setState(preState => ({\n  books: preState.books.slice(1,3)\n}))\n\n// 方法一：将state先赋值给另外的变量，然后使用Object.assign创建新对象\nvar owner = this.state.owner;\nthis.setState({\n  owner: Object.assign({}, owner, {name: 'Jason'})\n})\n// 方法二：使用preState、Object.assign创建新对象\nthis.setState(preState => ({\n  owner: Object.assign({}, preState.owner, {name: 'Jason'})\n}))\n \nthis.setState(preState => ({\n  owner: {...preState.owner, name: 'Jason'}\n}))\n")])])]),s("blockquote",[s("p",[t._v("注意：不要使用push、pop、shift、unshift、splice等方法修改数组类型的状态，因为这些方法都是在原数组的基础上修改，而concat、slice、filter会返回一个新的数组。")])]),t._v(" "),s("p",[t._v("参考文章："),s("a",{attrs:{href:"https://blog.csdn.net/b954960630/article/details/79822639",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/b954960630/article/details/79822639"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);