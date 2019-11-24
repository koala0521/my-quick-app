/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)
var $app_template$ = __webpack_require__(44)
var $app_style$ = __webpack_require__(45)
var $app_script$ = __webpack_require__(46)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerName:'fa-toolkit', packagerVersion: '2.1.0-Stable.300'})

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(41)
var $app_style$ = __webpack_require__(42)
var $app_script$ = __webpack_require__(43)

$app_define$('@app-component/catalogue', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "catalogue_list_container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "catalogue_header"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '共'+(this.catalogue.total)+'章'}
          },
          "classList": [
            "catalogue_total"
          ]
        },
        {
          "type": "select",
          "attr": {
            "id": "select"
          },
          "id": "select",
          "classList": [
            "select"
          ],
          "events": {
            "change": "changeValue"
          },
          "children": [
            {
              "type": "option",
              "attr": {
                "value": function () {return this.item.evry},
                "content": function () {return (this.item.evry)+' 章'}
              },
              "classList": [
                "option"
              ],
              "repeat": {
                "exp": function () {return this.options},
                "value": "item"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "catalogue_list"
      ],
      "repeat": {
        "exp": function () {return this.newList},
        "value": "item"
      },
      "events": {
        "click": function(evt){this.goToRead(this.item,evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "catalogue_left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return '第'+(this.item.catalogueNumber)+'章'}
              },
              "classList": [
                "catalogue_catalogueNumber"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.item.catalogueTitle}
              },
              "classList": [
                "catalogue_catalogueTitle"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "catalogue_right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "免费"
              },
              "classList": [
                "catalogue_free"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = {
  ".catalogue_list_container": {
    "marginTop": "0px",
    "marginRight": "33px",
    "marginBottom": "0px",
    "marginLeft": "33px",
    "flexDirection": "column"
  },
  ".catalogue_header": {
    "marginTop": "46px",
    "justifyContent": "space-between"
  },
  ".select": {
    "width": "200px",
    "height": "67px",
    "color": "#1a1a1a",
    "fontSize": "31.3px"
  },
  ".option": {
    "fontSize": "31.3px",
    "color": "#1A1A1A",
    "height": "200px"
  },
  ".catalogue_total": {
    "fontSize": "27.1px",
    "color": "rgba(0,0,0,0.5)"
  },
  ".catalogue_list": {
    "justifyContent": "space-between",
    "height": "100px"
  },
  ".catalogue_catalogueTitle": {
    "color": "#000000",
    "fontSize": "31.3px"
  },
  ".catalogue_catalogueNumber": {
    "marginRight": "15px",
    "color": "#000000",
    "fontSize": "31.3px"
  },
  ".catalogue_free": {
    "fontSize": "27.1px",
    "color": "rgba(0,0,0,0.5)"
  },
  ".catalogue_right": {
    "width": "167px",
    "borderBottomColor": "rgba(24,34,51,0.2)",
    "borderBottomWidth": "0.5px",
    "justifyContent": "flex-end"
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['catalogue'],
  data: {
    itemList: [],
    options: [],
    newList: []
  },
  onInit: function onInit() {
    this.separateTotalPage();
  },
  separateTotalPage: function separateTotalPage() {
    var itemList = [];
    var totalPage = this.catalogue.total;
    var items = 20;
    var seperatePageMathCeil = Math.ceil(totalPage / items);
    var beginNumber = 0,
        endNumber = 0;

    for (var i = 0; i < seperatePageMathCeil; i++) {
      var item = {};

      if (i === 0) {
        beginNumber = 1;
        item.evry = 1 + "-" + items;
        itemList.push(item);
      } else {
        beginNumber += items;
        endNumber = beginNumber + items - 1;

        if (i === seperatePageMathCeil - 1) {
          item.evry = beginNumber + "-" + totalPage;
        } else {
          item.evry = beginNumber + "-" + endNumber;
        }

        itemList.push(item);
      }
    }

    this.options = itemList;
    this.newList = this.catalogue.list;
  },
  changeValue: function changeValue(value) {
    var selectedArr = value.newValue.split('-');
    var newList = this.catalogue.list.slice(selectedArr[0] - 1, selectedArr[1]);
    this.newList = newList;
  },
  goToRead: function goToRead(item) {
    _system["default"].push({
      uri: '/Page_Read',
      params: {
        item: item
      }
    });
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "catalogue",
      "attr": {
        "catalogue": function () {return this.catalogueList}
      }
    }
  ]
}

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column"
  }
}

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  data: {
    catalogueList: {
      total: 26,
      list: [{
        catalogueNumber: 1,
        catalogueTitle: '机会',
        catalogueFree: 0
      }, {
        catalogueNumber: 2,
        catalogueTitle: '大战',
        catalogueFree: 0
      }, {
        catalogueNumber: 3,
        catalogueTitle: '回家',
        catalogueFree: 0
      }, {
        catalogueNumber: 4,
        catalogueTitle: '显灵',
        catalogueFree: 0
      }, {
        catalogueNumber: 5,
        catalogueTitle: '杀人灭口',
        catalogueFree: 0
      }, {
        catalogueNumber: 6,
        catalogueTitle: '被追杀',
        catalogueFree: 0
      }, {
        catalogueNumber: 7,
        catalogueTitle: '亲情',
        catalogueFree: 0
      }, {
        catalogueNumber: 8,
        catalogueTitle: '爱情',
        catalogueFree: 0
      }, {
        catalogueNumber: 9,
        catalogueTitle: '逆袭',
        catalogueFree: 0
      }, {
        catalogueNumber: 10,
        catalogueTitle: '完美',
        catalogueFree: 0
      }, {
        catalogueNumber: 11,
        catalogueTitle: '落幕',
        catalogueFree: 0
      }, {
        catalogueNumber: 12,
        catalogueTitle: '旅途',
        catalogueFree: 0
      }, {
        catalogueNumber: 13,
        catalogueTitle: '偶遇',
        catalogueFree: 0
      }, {
        catalogueNumber: 14,
        catalogueTitle: '夜幕',
        catalogueFree: 0
      }, {
        catalogueNumber: 15,
        catalogueTitle: '偷听',
        catalogueFree: 0
      }, {
        catalogueNumber: 16,
        catalogueTitle: '形势',
        catalogueFree: 0
      }, {
        catalogueNumber: 17,
        catalogueTitle: '风起云涌',
        catalogueFree: 0
      }, {
        catalogueNumber: 18,
        catalogueTitle: '卷土重来',
        catalogueFree: 0
      }, {
        catalogueNumber: 19,
        catalogueTitle: '奋不顾身',
        catalogueFree: 0
      }, {
        catalogueNumber: 20,
        catalogueTitle: '事与愿违',
        catalogueFree: 0
      }, {
        catalogueNumber: 21,
        catalogueTitle: '失去',
        catalogueFree: 0
      }, {
        catalogueNumber: 22,
        catalogueTitle: '悲壮',
        catalogueFree: 1
      }, {
        catalogueNumber: 23,
        catalogueTitle: '不顾一切',
        catalogueFree: 1
      }, {
        catalogueNumber: 24,
        catalogueTitle: '没死',
        catalogueFree: 1
      }, {
        catalogueNumber: 25,
        catalogueTitle: '养伤',
        catalogueFree: 1
      }, {
        catalogueNumber: 26,
        catalogueTitle: '寻找灵源',
        catalogueFree: 1
      }]
    }
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: '目录',
      textColor: '##1A1A1A',
      backgroundColor: 'rgba(242,242,242,0.95)',
      menu: false
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFBhZ2VfQ2F0YWxvZ3VlXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9DYXRhbG9ndWUvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfQ2F0YWxvZ3VlL2NvbXBvbmVudC9jX2NhdGFsb2d1ZV9saXN0LnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX0NhdGFsb2d1ZS9jb21wb25lbnQvY19jYXRhbG9ndWVfbGlzdC51eD84NzZjIiwid2VicGFjazovLy8uL3NyYy9QYWdlX0NhdGFsb2d1ZS9jb21wb25lbnQvY19jYXRhbG9ndWVfbGlzdC51eD8wZjRhIiwid2VicGFjazovLy8uL3NyYy9QYWdlX0NhdGFsb2d1ZS9jb21wb25lbnQvY19jYXRhbG9ndWVfbGlzdC51eD8xMzI3Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX0NhdGFsb2d1ZS9pbmRleC51eD8yOWM3Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX0NhdGFsb2d1ZS9pbmRleC51eD81YTEzIiwid2VicGFjazovLy8uL3NyYy9QYWdlX0NhdGFsb2d1ZS9pbmRleC51eD84MzNmIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzOSk7XG4iLCJyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfY2F0YWxvZ3VlX2xpc3QudXg/bmFtZT1jYXRhbG9ndWVcIilcbnZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX0NhdGFsb2d1ZVxcXFxpbmRleC51eCEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfQ2F0YWxvZ3VlXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4xLjAtU3RhYmxlLjMwMCd9KSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NfY2F0YWxvZ3VlX2xpc3QudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfQ2F0YWxvZ3VlXFxcXGNvbXBvbmVudFxcXFxjX2NhdGFsb2d1ZV9saXN0LnV4IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9DYXRhbG9ndWVcXFxcY29tcG9uZW50XFxcXGNfY2F0YWxvZ3VlX2xpc3QudXghLi9jX2NhdGFsb2d1ZV9saXN0LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NfY2F0YWxvZ3VlX2xpc3QudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9jYXRhbG9ndWUnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNhdGFsb2d1ZV9saXN0X2NvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNhdGFsb2d1ZV9oZWFkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+WFsScrKHRoaXMuY2F0YWxvZ3VlLnRvdGFsKSsn56ugJ31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2F0YWxvZ3VlX3RvdGFsXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzZWxlY3RcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiBcInNlbGVjdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlkXCI6IFwic2VsZWN0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWxlY3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJjaGFuZ2VWYWx1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5ldnJ5fSxcbiAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5pdGVtLmV2cnkpKycg56ugJ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwib3B0aW9uXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgIFwiZXhwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5vcHRpb25zfSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNhdGFsb2d1ZV9saXN0XCJcbiAgICAgIF0sXG4gICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgIFwiZXhwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uZXdMaXN0fSxcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuZ29Ub1JlYWQodGhpcy5pdGVtLGV2dCl9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjYXRhbG9ndWVfbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAn56ysJysodGhpcy5pdGVtLmNhdGFsb2d1ZU51bWJlcikrJ+eroCd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhdGFsb2d1ZV9jYXRhbG9ndWVOdW1iZXJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5jYXRhbG9ndWVUaXRsZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2F0YWxvZ3VlX2NhdGFsb2d1ZVRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhdGFsb2d1ZV9yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlhY3otLlcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXRhbG9ndWVfZnJlZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY2F0YWxvZ3VlX2xpc3RfY29udGFpbmVyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuY2F0YWxvZ3VlX2hlYWRlclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0NnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5zZWxlY3RcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjdweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiXG4gIH0sXG4gIFwiLm9wdGlvblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gIH0sXG4gIFwiLmNhdGFsb2d1ZV90b3RhbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIlxuICB9LFxuICBcIi5jYXRhbG9ndWVfbGlzdFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIuY2F0YWxvZ3VlX2NhdGFsb2d1ZVRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIlxuICB9LFxuICBcIi5jYXRhbG9ndWVfY2F0YWxvZ3VlTnVtYmVyXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiXG4gIH0sXG4gIFwiLmNhdGFsb2d1ZV9mcmVlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH0sXG4gIFwiLmNhdGFsb2d1ZV9yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE2N3B4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMjQsMzQsNTEsMC4yKVwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIwLjVweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgcHJvcHM6IFsnY2F0YWxvZ3VlJ10sXG4gIGRhdGE6IHtcbiAgICBpdGVtTGlzdDogW10sXG4gICAgb3B0aW9uczogW10sXG4gICAgbmV3TGlzdDogW11cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy5zZXBhcmF0ZVRvdGFsUGFnZSgpO1xuICB9LFxuICBzZXBhcmF0ZVRvdGFsUGFnZTogZnVuY3Rpb24gc2VwYXJhdGVUb3RhbFBhZ2UoKSB7XG4gICAgdmFyIGl0ZW1MaXN0ID0gW107XG4gICAgdmFyIHRvdGFsUGFnZSA9IHRoaXMuY2F0YWxvZ3VlLnRvdGFsO1xuICAgIHZhciBpdGVtcyA9IDIwO1xuICAgIHZhciBzZXBlcmF0ZVBhZ2VNYXRoQ2VpbCA9IE1hdGguY2VpbCh0b3RhbFBhZ2UgLyBpdGVtcyk7XG4gICAgdmFyIGJlZ2luTnVtYmVyID0gMCxcbiAgICAgICAgZW5kTnVtYmVyID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VwZXJhdGVQYWdlTWF0aENlaWw7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSB7fTtcblxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgYmVnaW5OdW1iZXIgPSAxO1xuICAgICAgICBpdGVtLmV2cnkgPSAxICsgXCItXCIgKyBpdGVtcztcbiAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZ2luTnVtYmVyICs9IGl0ZW1zO1xuICAgICAgICBlbmROdW1iZXIgPSBiZWdpbk51bWJlciArIGl0ZW1zIC0gMTtcblxuICAgICAgICBpZiAoaSA9PT0gc2VwZXJhdGVQYWdlTWF0aENlaWwgLSAxKSB7XG4gICAgICAgICAgaXRlbS5ldnJ5ID0gYmVnaW5OdW1iZXIgKyBcIi1cIiArIHRvdGFsUGFnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmV2cnkgPSBiZWdpbk51bWJlciArIFwiLVwiICsgZW5kTnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtTGlzdDtcbiAgICB0aGlzLm5ld0xpc3QgPSB0aGlzLmNhdGFsb2d1ZS5saXN0O1xuICB9LFxuICBjaGFuZ2VWYWx1ZTogZnVuY3Rpb24gY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgc2VsZWN0ZWRBcnIgPSB2YWx1ZS5uZXdWYWx1ZS5zcGxpdCgnLScpO1xuICAgIHZhciBuZXdMaXN0ID0gdGhpcy5jYXRhbG9ndWUubGlzdC5zbGljZShzZWxlY3RlZEFyclswXSAtIDEsIHNlbGVjdGVkQXJyWzFdKTtcbiAgICB0aGlzLm5ld0xpc3QgPSBuZXdMaXN0O1xuICB9LFxuICBnb1RvUmVhZDogZnVuY3Rpb24gZ29Ub1JlYWQoaXRlbSkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgdXJpOiAnL1BhZ2VfUmVhZCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaXRlbTogaXRlbVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhdGFsb2d1ZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJjYXRhbG9ndWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNhdGFsb2d1ZUxpc3R9XG4gICAgICB9XG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBjYXRhbG9ndWVMaXN0OiB7XG4gICAgICB0b3RhbDogMjYsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDEsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5py65LyaJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDIsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5aSn5oiYJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDMsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5Zue5a62JyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDQsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5pi+54G1JyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDUsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5p2A5Lq654Gt5Y+jJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDYsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn6KKr6L+95p2AJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDcsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5Lqy5oOFJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDgsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn54ix5oOFJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDksXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn6YCG6KKtJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDEwLFxuICAgICAgICBjYXRhbG9ndWVUaXRsZTogJ+WujOe+jicsXG4gICAgICAgIGNhdGFsb2d1ZUZyZWU6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgY2F0YWxvZ3VlTnVtYmVyOiAxMSxcbiAgICAgICAgY2F0YWxvZ3VlVGl0bGU6ICfokL3luZUnLFxuICAgICAgICBjYXRhbG9ndWVGcmVlOiAwXG4gICAgICB9LCB7XG4gICAgICAgIGNhdGFsb2d1ZU51bWJlcjogMTIsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5peF6YCUJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDEzLFxuICAgICAgICBjYXRhbG9ndWVUaXRsZTogJ+WBtumBhycsXG4gICAgICAgIGNhdGFsb2d1ZUZyZWU6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgY2F0YWxvZ3VlTnVtYmVyOiAxNCxcbiAgICAgICAgY2F0YWxvZ3VlVGl0bGU6ICflpJzluZUnLFxuICAgICAgICBjYXRhbG9ndWVGcmVlOiAwXG4gICAgICB9LCB7XG4gICAgICAgIGNhdGFsb2d1ZU51bWJlcjogMTUsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5YG35ZCsJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDE2LFxuICAgICAgICBjYXRhbG9ndWVUaXRsZTogJ+W9ouWKvycsXG4gICAgICAgIGNhdGFsb2d1ZUZyZWU6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgY2F0YWxvZ3VlTnVtYmVyOiAxNyxcbiAgICAgICAgY2F0YWxvZ3VlVGl0bGU6ICfpo47otbfkupHmtownLFxuICAgICAgICBjYXRhbG9ndWVGcmVlOiAwXG4gICAgICB9LCB7XG4gICAgICAgIGNhdGFsb2d1ZU51bWJlcjogMTgsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5Y235Zyf6YeN5p2lJyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDE5LFxuICAgICAgICBjYXRhbG9ndWVUaXRsZTogJ+Wli+S4jemhvui6qycsXG4gICAgICAgIGNhdGFsb2d1ZUZyZWU6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgY2F0YWxvZ3VlTnVtYmVyOiAyMCxcbiAgICAgICAgY2F0YWxvZ3VlVGl0bGU6ICfkuovkuI7mhL/ov50nLFxuICAgICAgICBjYXRhbG9ndWVGcmVlOiAwXG4gICAgICB9LCB7XG4gICAgICAgIGNhdGFsb2d1ZU51bWJlcjogMjEsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5aSx5Y67JyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMFxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDIyLFxuICAgICAgICBjYXRhbG9ndWVUaXRsZTogJ+aCsuWjricsXG4gICAgICAgIGNhdGFsb2d1ZUZyZWU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgY2F0YWxvZ3VlTnVtYmVyOiAyMyxcbiAgICAgICAgY2F0YWxvZ3VlVGl0bGU6ICfkuI3pob7kuIDliIcnLFxuICAgICAgICBjYXRhbG9ndWVGcmVlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGNhdGFsb2d1ZU51bWJlcjogMjQsXG4gICAgICAgIGNhdGFsb2d1ZVRpdGxlOiAn5rKh5q27JyxcbiAgICAgICAgY2F0YWxvZ3VlRnJlZTogMVxuICAgICAgfSwge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDI1LFxuICAgICAgICBjYXRhbG9ndWVUaXRsZTogJ+WFu+S8pCcsXG4gICAgICAgIGNhdGFsb2d1ZUZyZWU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgY2F0YWxvZ3VlTnVtYmVyOiAyNixcbiAgICAgICAgY2F0YWxvZ3VlVGl0bGU6ICflr7vmib7ngbXmupAnLFxuICAgICAgICBjYXRhbG9ndWVGcmVlOiAxXG4gICAgICB9XVxuICAgIH1cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiAn55uu5b2VJyxcbiAgICAgIHRleHRDb2xvcjogJyMjMUExQTFBJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQyLDI0MiwyNDIsMC45NSknLFxuICAgICAgbWVudTogZmFsc2VcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9