(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{529:function(t,e,r){"use strict";r.r(e);var a=r(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"react-redux的学习与使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-redux的学习与使用"}},[t._v("#")]),t._v(" react-redux的学习与使用")]),t._v(" "),r("h4",{attrs:{id:"react-redux的作用是react与redux的润滑剂-有了它在react中使用redux会很变得很简单-但是他不是必须的。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-redux的作用是react与redux的润滑剂-有了它在react中使用redux会很变得很简单-但是他不是必须的。"}},[t._v("#")]),t._v(" react-redux的作用是react与redux的润滑剂，有了它在react中使用redux会很变得很简单，但是他不是必须的。")]),t._v(" "),r("h2",{attrs:{id:"provider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[t._v("#")]),t._v(" provider")]),t._v(" "),r("p",[t._v("provider的作用是将store中的state注入组件中，这样你就可以在组件中直接获取state")]),t._v(" "),r("p",[t._v("使用方法：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("import store from './redux/store'；\nconst rootElement = document.getElementById('root')\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n")])])]),r("h2",{attrs:{id:"connect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[t._v("#")]),t._v(" connect")]),t._v(" "),r("p",[t._v("connect的作用是用ui组件转化为容器组件")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("import { connect } from 'react-redux'\nclass TodoList extends React.Component<initProps, initState> {\n    render () {\n        return (\n        \t<> \n        \t\tthis is TodoList component\n        \t</>\n        )\n    }\n}\nconst mapStateToProps = (store) => {\n  return {\n    counter: state.counter\n  }\n}\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(TodoList)\n")])])]),r("h2",{attrs:{id:"mapstatetoprops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mapstatetoprops"}},[t._v("#")]),t._v(" mapStateToProps")]),t._v(" "),r("p",[t._v("他是一个函数，建立一个从state对象到（ui组件）props对象的映射关系；字面意思就是把state映射到props中去，其实是把redux中的数据映射到React的props中去。单纯的只使用redux，如果想获取redux中的数据，方式是store.getState()。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("const mapStateToProps = function(store) {\n  return {\n    temData: store.changeDataReducer\n  };\n};\nexport default connect(mapStateToProps)(RedexUse);\n")])])]),r("p",[t._v("通过以上代码操作之后可以直接在RedexUse组件中通过this.props.temData获得数据")]),t._v(" "),r("h2",{attrs:{id:"mapdispatchtoprops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mapdispatchtoprops"}},[t._v("#")]),t._v(" mapDispatchToProps")]),t._v(" "),r("p",[t._v("用来建立 UI 组件的参数到store.dispatch方法的映射，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。各种dispatch也变成了props让你可以直接使用；单纯的只是使用redux，如果想使用action，方式是store.dispatch(action);")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("class RedexUse2 extends React.Component{\n    render () {\n        const { onDecrement2, addBook, deleteBook } = this.props;\n        return (\n         \t<>\n            <button className=\"btn btn-danger my-2\" onClick={onDecrement2}>\n              react-redux的使用方法[Decrease]\n            </button>\n            <button className=\"btn btn-redux\" \n              onClick={addBook}>测试下reduxAction是不是正确的[添加一本书]</button>\n          </>\n        )\n    }\n    \n}\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onDecrement2: () => {\n      dispatch({...Action.decrease(),  preload: {quantity:3}})\n    },\n    addBook: () => {\n      dispatch({...CreateAct.addBook(),  payload: {name: '牵牛花的春天', author: '石墨烯', type: 'math', id:2}})\n    },\n    deleteBook: () => {\n      dispatch({...CreateAct.deleteBook(),  payload: {type: 'math', id:2}})\n    }\n  }\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(RedexUse2);\n")])])]),r("p",[t._v("通过mapDispatchProps之后就可以在this.props中获取对应的方法。")]),t._v(" "),r("p",[r("strong",[t._v("react-redux官当文档：")]),t._v(" "),r("a",{attrs:{href:"https://react-redux.js.org/introduction/quick-start",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://react-redux.js.org/introduction/quick-start"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("参考学习：")]),t._v(" "),r("a",{attrs:{href:"https://juejin.im/post/5ce0ae0c5188252f5e019c2c",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5ce0ae0c5188252f5e019c2c"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);