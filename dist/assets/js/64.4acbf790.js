(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{517:function(n,e,t){"use strict";t.r(e);var s=t(28),a=Object(s.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"require的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require的原理"}},[this._v("#")]),this._v(" require的原理")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const path = require('path');\nconst fs = require('fs');\nconst vm = require('vm');\n\nfunction Require(modulePath) {\n    let absPathname = path.resolve(__dirname, modulePath);\n\n    const extNames = Object.keys(Module._extensions);\n    let index = 0;\n    const oldPath = absPathname;\n    function findExt(absPathname) {\n        if (index === extNames.length) {\n            return new Error('文件不存在');\n        }  \n        try {\n            fs.accessSync(absPathname);\n            return absPathname;\n        } catch(e) {\n            const ext = extNames[index++];\n            findExt(oldPath + ext);\n        }\n    }\n\n    absPathname = findExt(absPathname);\n\n    // 缓存中读取\n    if (Module._cache[absPathname]) {\n        return Module._cache[absPathname].exports;\n    }\n    const module = new Module(absPathname);\n    Module._cache[absPathname] = module;\n    tryModuleLoad(module);\n    return module.exports;\n}\n\nfunction Module(id) {\n    this.id = id;\n    this.exports = {};\n}\n\nModule.wrapper = [\n    \"(function(exports, module, Require, __dirname, __filename){\", \"})\"\n];\n\nModule._extensions = {\n    '.js'(module) {\n        const content = fs.readFileSync(module.id, 'utf8');\n        const fnStr = Module.wrapper[0] + content + Module.wrapper[1];\n        const fn = vm.runInThisContext(fnStr); // vm可以转译str， 返回可执行语句\n        fn.call(module.exports, module.exports, module, Require, __filename, __dirname);\n    }, \n    '.json'(module) {\n        const json = fs.readFileSync(module.id, 'utf8');\n        module.exports = JSON.parse(json);\n    }\n}\n\nModule._cache = {}\n\nfunction tryModuleLoad(module) {\n    const extensions = path.extname(module.id);\n    Module._extensions[extensions](module);\n}\n")])])]),e("p",[this._v("https://juejin.cn/post/6949385808755294245#heading-4")])])}),[],!1,null,null,null);e.default=a.exports}}]);