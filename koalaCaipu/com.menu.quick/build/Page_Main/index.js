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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ (Array(87).concat([
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88)
var $app_template$ = __webpack_require__(192)
var $app_style$ = __webpack_require__(193)
var $app_script$ = __webpack_require__(194)

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89)
__webpack_require__(101)
__webpack_require__(133)
__webpack_require__(145)
var $app_template$ = __webpack_require__(189)
var $app_style$ = __webpack_require__(190)
var $app_script$ = __webpack_require__(191)

$app_define$('@app-component/fixedmaintab', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90)
__webpack_require__(94)
var $app_template$ = __webpack_require__(98)
var $app_style$ = __webpack_require__(99)
var $app_script$ = __webpack_require__(100)

$app_define$('@app-component/shujia', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(91)
var $app_style$ = __webpack_require__(92)
var $app_script$ = __webpack_require__(93)

$app_define$('@app-component/reader_main_shujia_component_searchbar', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "div_search"
      ],
      "events": {
        "click": "clickToSearch"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.searchbar}
          },
          "classList": [
            "image_search"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.placeholder}
          },
          "classList": [
            "place_holder"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".div_search": {
    "backgroundColor": "#f2f2f2",
    "width": "684px",
    "height": "64px",
    "marginLeft": "33px",
    "marginRight": "33px",
    "borderRadius": "8px",
    "alignItems": "center"
  },
  ".image_search": {
    "width": "33px",
    "height": "33px",
    "marginTop": "17px",
    "marginRight": "17px",
    "marginBottom": "17px",
    "marginLeft": "17px"
  },
  ".place_holder": {
    "width": "500px",
    "height": "40px",
    "fontSize": "27px",
    "color": "#1A1A1A",
    "opacity": 0.3
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    placeholder: '设计中的设计'
  },
  props: ['searchbar'],
  onInit: function onInit() {},
  clickToSearch: function clickToSearch() {
    _system["default"].push({
      uri: '/Page_Search'
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

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(95)
var $app_style$ = __webpack_require__(96)
var $app_script$ = __webpack_require__(97)

$app_define$('@app-component/shujia_list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "shujia-list"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shujia-box-top"
      ],
      "shown": function () {return !this.foo},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "close_img"
          ],
          "events": {
            "click": "cloce"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.img.closeImage}
              }
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.topTitle}
          },
          "classList": [
            "top_title"
          ]
        }
      ]
    },
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.shujiarows},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return [this.$idx==this.shujiarows.length-1?'last-list-row':'list-row']},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "shujia-books"
              ],
              "children": [
                {
                  "type": "block",
                  "attr": {},
                  "repeat": {
                    "exp": function () {return this.$item},
                    "value": "value"
                  },
                  "children": [
                    {
                      "type": "stack",
                      "attr": {},
                      "children": [
                        {
                          "type": "div",
                          "attr": {
                            "id": "btnclick"
                          },
                          "classList": [
                            "image_div"
                          ],
                          "style": {
                            "backgroundImage": function () {return this.value.image}
                          },
                          "id": "btnclick",
                          "events": {
                            "click": function(evt){this.clickToRead(this.value,evt)},
                            "longpress": function(evt){this.longPress(this.value,evt)}
                          },
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "select_box"
                              ],
                              "events": {
                                "click": function(evt){this.select(this.value,evt)}
                              },
                              "shown": function () {return this.showCheckBox},
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": function () {return this.img.noSelect}
                                  },
                                  "classList": [
                                    "select_box_image"
                                  ],
                                  "shown": function () {return !this.value.selectImage}
                                },
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": function () {return this.img.select}
                                  },
                                  "classList": [
                                    "select_box_image"
                                  ],
                                  "shown": function () {return this.value.selectImage}
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "shown": function () {return this.value.bookType1!=='no'},
                          "classList": [
                            "book_type_1"
                          ],
                          "style": {
                            "backgroundImage": function () {return this.img.type1}
                          },
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "试读"
                              },
                              "shown": function () {return this.value.bookType1==='shidu'}
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "更新"
                              },
                              "shown": function () {return this.value.bookType1==='update'}
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "shown": function () {return this.value.bookType2==='tingshu'},
                          "classList": [
                            "book_type_2"
                          ],
                          "style": {
                            "backgroundImage": function () {return this.img.type2}
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "shujia-line"
              ],
              "style": {
                "backgroundImage": function () {return this.img.shujiaLine}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "tabs",
      "attr": {},
      "classList": [
        "tabs"
      ],
      "shown": function () {return !this.foo},
      "children": [
        {
          "type": "tab-bar",
          "attr": {},
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.checkedlist},
                "value": "item"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-item"
                  ],
                  "events": {
                    "click": function(evt){this.tabClickEvent(this.item,evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.image}
                      },
                      "classList": [
                        "image-active"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.title}
                      },
                      "style": {
                        "color": function () {return this.item.color}
                      },
                      "classList": [
                        "title"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  ".shujia-list": {
    "width": "698px",
    "height": "100%",
    "flexDirection": "column"
  },
  ".shujia-box-top": {
    "width": "100%",
    "height": "100px",
    "paddingTop": "30px",
    "paddingRight": "34px",
    "paddingBottom": "36px",
    "paddingLeft": "34px",
    "position": "fixed",
    "top": "0px",
    "backgroundColor": "rgba(242,242,242,0.95)",
    "alignItems": "center"
  },
  ".close_img": {
    "width": "50px",
    "height": "50px",
    "marginRight": "30px"
  },
  ".top_title": {
    "fontSize": "37.5px",
    "color": "#1A1A1A"
  },
  ".list-row": {
    "width": "100%",
    "flexDirection": "column",
    "marginBottom": "50px"
  },
  ".last-list-row": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".shujia-books": {
    "justifyContent": "space-between",
    "paddingTop": "0px",
    "paddingRight": "24px",
    "paddingBottom": "0px",
    "paddingLeft": "24px"
  },
  ".image_div": {
    "width": "188px",
    "height": "250px",
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  ".select_box": {
    "marginTop": "7px",
    "marginRight": "7px",
    "marginBottom": "7px",
    "marginLeft": "7px"
  },
  ".select_box_image": {
    "width": "40px"
  },
  ".checkbox": {
    "width": "60px"
  },
  ".shujia-line": {
    "height": "30px",
    "width": "100%",
    "backgroundRepeat": "no-repeat"
  },
  ".shujia-line img": {
    "width": "100%"
  },
  ".tabs": {
    "backgroundColor": "#F2F2F2",
    "height": "100px",
    "width": "100%",
    "position": "fixed",
    "bottom": "0px"
  },
  ".tab-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginLeft": "33px",
    "marginRight": "33px",
    "paddingTop": "14px",
    "paddingBottom": "11px",
    "width": "170.8px",
    "height": "104.2px"
  },
  ".image-active": {
    "width": "33px",
    "height": "33px",
    "resizeMode": "contain"
  },
  ".title": {
    "fontSize": "20px"
  },
  ".book_type_1": {
    "width": "67px",
    "height": "34px",
    "marginTop": "16px",
    "left": "0px"
  },
  ".book_type_1 text": {
    "width": "100%",
    "fontSize": "20.8px",
    "color": "#ffffff",
    "textAlign": "center"
  },
  ".book_type_2": {
    "width": "34px",
    "height": "34px",
    "marginTop": "210px",
    "marginLeft": "8px"
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  props: ['list', 'checkedlist', 'img', 'foo'],
  data: {
    topTitle: '未选择',
    showCheckBox: false,
    selectImage: false,
    shujiarows: [],
    chooseBookArr: []
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      textColor: '#ffffff',
      backgroundColor: '#007DFF',
      backgroundOpacity: 0.5,
      menu: false
    });
    this.shujiarows = this.sliceArray(this.list);
  },
  sliceArray: function sliceArray(array) {
    var result = [];

    for (var i = 0, len = array.length; i < len; i += 3) {
      result.push(array.slice(i, i + 3));
    }

    return result;
  },
  clickToRead: function clickToRead(value) {
    if (this.showCheckBox) {
      this.showCheckBox = false;
      this.foo = true;
      this.hideSelectImage();
    } else {
      if (value.bookType2 === 'tingshu') {
        _system["default"].push({
          uri: "/Page_Hearingdetail"
        });
      } else if (value.bookType2 === 'novel') {
        _system["default"].push({
          uri: '/Page_Read',
          params: {
            item: value
          }
        });
      }
    }
  },
  longPress: function longPress(value) {
    this.foo = false;
    this.showCheckBox = true;
    this.chooseBookArr = [];
  },
  cloce: function cloce() {
    this.showCheckBox = false;
    this.foo = true;
    this.hideSelectImage();
  },
  select: function select(value) {
    value.selectImage = !value.selectImage;

    if (value.selectImage) {
      this.chooseBookArr.push(value);
    } else {
      var valueIndex = this.chooseBookArr.indexOf(value);

      if (valueIndex !== -1) {
        this.chooseBookArr.splice(valueIndex, 1);
      }
    }

    if (this.chooseBookArr.length === 0) {
      this.topTitle = "未选择";
    } else {
      this.topTitle = "已选择" + this.chooseBookArr.length + "项";
    }
  },
  tabClickEvent: function tabClickEvent(item, event) {
    if (item.title === '删除') {
      if (this.chooseBookArr.length === 0) {
        _system2["default"].showToast({
          message: '还未选择书籍',
          duration: 2000,
          gravity: 'bottom'
        });
      } else {
        _system2["default"].showDialog({
          message: '是否删除所选' + this.chooseBookArr.length + '本书籍',
          buttons: [{
            text: '删除',
            color: '#CD2325'
          }, {
            text: '取消',
            color: '#CD2325'
          }],
          success: function success(res) {
            if (res.index === 0) {
              _system2["default"].showToast({
                message: '已成功删除所选书籍',
                duration: 2000,
                gravity: 'bottom'
              });
            }
          }
        });
      }
    }
  },
  hideSelectImage: function hideSelectImage() {
    this.chooseBookArr = [];
    this.list.forEach(function (item) {
      item.selectImage = false;
    });

    if (this.chooseBookArr.length === 0) {
      this.topTitle = "未选择";
    } else {
      this.topTitle = "已选择" + this.chooseBookArr.length + "项";
    }
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

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "shujia-box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shujia-box-top"
      ],
      "children": [
        {
          "type": "reader_main_shujia_component_searchbar",
          "attr": {
            "searchbar": function () {return this.searchbar}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shujia-box-bottom"
      ],
      "children": [
        {
          "type": "shujia_list",
          "attr": {
            "list": function () {return this.list},
            "checkedlist": function () {return this.checkedList},
            "img": function () {return this.img},
            "foo": function () {return this.foo}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = {
  ".shujia-box": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".shujia-box-top": {
    "width": "683px",
    "marginTop": "17px",
    "marginRight": "34px",
    "marginBottom": "36px",
    "marginLeft": "34px"
  },
  ".shujia-box-bottom": {
    "width": "698px",
    "marginTop": "0px",
    "marginRight": "26px",
    "marginBottom": "0px",
    "marginLeft": "26px"
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['foo'],
  data: {
    list: [{
      "image": "./page/Page_Shujia/TO_DELETE/1.png",
      "name": "one",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/2.png",
      "name": "two",
      "selectImage": false,
      "bookType1": "shidu",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/1.png",
      "name": "three",
      "selectImage": false,
      "bookType1": "update",
      "bookType2": "tingshu"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/2.png",
      "name": "four",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/1.png",
      "name": "five",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "tingshu"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/2.png",
      "name": "six",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/1.png",
      "name": "seven",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/2.png",
      "name": "eight",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/1.png",
      "name": "nine",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/2.png",
      "name": "ten",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/2.png",
      "name": "eight",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/1.png",
      "name": "nine",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "./page/Page_Shujia/TO_DELETE/2.png",
      "name": "ten",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }],
    checkedList: [{
      i: 0,
      color: '#878787',
      image: './page/Page_Shujia/img/delete.png',
      title: '删除'
    }, {
      i: 2,
      color: '#878787',
      image: './page/Page_Shujia/img/share.png',
      title: '分享'
    }, {
      i: 3,
      color: '#878787',
      image: './page/Page_Shujia/img/all.png',
      title: '全选'
    }],
    img: {
      closeImage: "./page/Page_Shujia/img/icon_close.png",
      noSelect: "./page/Page_Shujia/img/no_select.png",
      select: "./page/Page_Shujia/img/select.png",
      type1: "./page/Page_Shujia/img/image1.png",
      type2: "./page/Page_Shujia/img/headphone.png",
      shujiaLine: "./page/Page_Shujia/img/shujia.png"
    },
    searchbar: "./page/Page_Shujia/img/c_search_search.png"
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
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

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102)
__webpack_require__(106)
__webpack_require__(110)
__webpack_require__(114)
__webpack_require__(118)
__webpack_require__(122)
__webpack_require__(126)
var $app_template$ = __webpack_require__(130)
var $app_style$ = __webpack_require__(131)
var $app_script$ = __webpack_require__(132)

$app_define$('@app-component/shucheng', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(103)
var $app_style$ = __webpack_require__(104)
var $app_script$ = __webpack_require__(105)

$app_define$('@app-component/reader_main_shucheng_component_searchbar', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "div_search"
      ],
      "events": {
        "click": "clickToSearch"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.searchbar}
          },
          "classList": [
            "image_search"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.placeholder}
          },
          "classList": [
            "place_holder"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".div_search": {
    "backgroundColor": "#f2f2f2",
    "width": "684px",
    "height": "64px",
    "marginLeft": "33px",
    "marginRight": "33px",
    "borderRadius": "8px",
    "alignItems": "center"
  },
  ".image_search": {
    "width": "33px",
    "height": "33px",
    "marginTop": "17px",
    "marginRight": "17px",
    "marginBottom": "17px",
    "marginLeft": "17px"
  },
  ".place_holder": {
    "width": "500px",
    "height": "40px",
    "fontSize": "27px",
    "color": "#1A1A1A",
    "opacity": 0.3
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    placeholder: '设计中的设计'
  },
  props: ['url', 'searchbar'],
  onInit: function onInit() {},
  clickToSearch: function clickToSearch() {
    _system["default"].push({
      uri: '/Page_Search'
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(107)
var $app_style$ = __webpack_require__(108)
var $app_script$ = __webpack_require__(109)

$app_define$('@app-component/shucheng_swiper', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-container"
      ],
      "children": [
        {
          "type": "swiper",
          "attr": {
            "autoplay": "true"
          },
          "classList": [
            "swiper"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.src}
              },
              "repeat": function () {return this.swiperdata},
              "classList": [
                "bg-image"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = {
  ".item-container": {
    "marginBottom": "50px",
    "marginRight": "60px",
    "marginLeft": "60px",
    "flexDirection": "column"
  },
  ".swiper": {
    "width": "683px",
    "height": "400px",
    "indicatorColor": "rgba(0,0,0,0.2)",
    "indicatorSelectedColor": "#ffffff"
  },
  ".bg-image": {
    "width": "683px",
    "height": "400px",
    "borderRadius": "16.7px"
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: ['swiperdata'],
  data: {}
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(111)
var $app_style$ = __webpack_require__(112)
var $app_script$ = __webpack_require__(113)

$app_define$('@app-component/fastentry', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "fastentry-content"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "repeat": function () {return this.list},
      "classList": [
        "fastentry-box"
      ],
      "events": {
        "click": function(evt){this.detail(this.$item.title,evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.icon}
              },
              "classList": [
                "fastentry-img"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.number}
              },
              "classList": [
                "fastentry-number"
              ],
              "shown": function () {return this.$item.number?true:false}
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.title}
              },
              "classList": [
                "fastentry-text"
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "fastentry-tips"
              ],
              "shown": function () {return this.$item.isNew}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = {
  ".fastentry-content": {
    "paddingTop": "16px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px",
    "width": "683px",
    "justifyContent": "space-around"
  },
  ".fastentry-box": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".fastentry-number": {
    "height": "26px",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "-10px",
    "paddingTop": "0px",
    "paddingRight": "5px",
    "paddingBottom": "0px",
    "paddingLeft": "5px",
    "fontSize": "18.8px",
    "color": "#ffffff",
    "borderRadius": "12.5px",
    "backgroundColor": "#FF1400"
  },
  ".fastentry-text": {
    "paddingTop": "17px",
    "color": "#1A1A1A",
    "fontSize": "25px"
  },
  ".fastentry-img": {
    "width": "83px",
    "height": "83px"
  },
  ".fastentry-tips": {
    "width": "17px",
    "height": "17px",
    "marginTop": "25px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "borderRadius": "17px",
    "backgroundColor": "#FF1400"
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  props: {
    list: Array
  },
  detail: function detail(type) {
    if (type === "排行") {
      _system["default"].push({
        uri: 'Page_Paihang',
        params: {
          testId: 'testId'
        }
      });
    } else if (type === "都市") {
      _system["default"].push({
        uri: 'Page_In_Build',
        params: {
          type: type
        }
      });
    } else if (type === "特价") {
      _system["default"].push({
        uri: 'Page_In_Build',
        params: {
          type: type
        }
      });
    } else if (type === "免费") {
      _system["default"].push({
        uri: 'Page_In_Build',
        params: {
          type: type
        }
      });
    }
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

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(115)
var $app_style$ = __webpack_require__(116)
var $app_script$ = __webpack_require__(117)

$app_define$('@app-component/multi', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "multi-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "multi-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "multi-head-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.banner.title}
              },
              "classList": [
                "multi-topic"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.banner.time_uri}
              },
              "classList": [
                "multi-time"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "multi-head-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.banner.link}
              },
              "classList": [
                "multi-link"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.banner.arrow_uri}
              },
              "classList": [
                "multi-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "multi-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "repeat": function () {return this.list},
          "classList": [
            "multi-product3"
          ],
          "events": {
            "click": "routePage"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.uri}
              },
              "classList": [
                "multi-image3"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "multi-description"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "multi-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.subtitle}
                  },
                  "classList": [
                    "multi-subtitle"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.specialprice}
                      },
                      "classList": [
                        "multi-specialprice"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.originprice}
                      },
                      "classList": [
                        "multi-originprice"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = {
  ".multi-container": {
    "flexDirection": "column",
    "width": "100%"
  },
  ".multi-head": {
    "justifyContent": "space-between",
    "alignContent": "center",
    "marginBottom": "12px",
    "alignItems": "flex-end",
    "marginLeft": "33px",
    "marginRight": "33px"
  },
  ".multi-head-left": {
    "alignContent": "flex-end"
  },
  ".multi-topic": {
    "color": "#1A1A1A",
    "fontSize": "31.3px",
    "lineHeight": "40.6px",
    "marginRight": "30px",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".multi-time": {
    "alignSelf": "center",
    "width": "130px",
    "height": "37px"
  },
  ".multi-head-right": {
    "alignContent": "center",
    "alignItems": "flex-end"
  },
  ".multi-link": {
    "color": "#8D8D8D",
    "fontSize": "27.1px",
    "marginRight": "9px",
    "alignSelf": "center"
  },
  ".multi-arrow": {
    "height": "27.1px",
    "alignSelf": "center"
  },
  ".multi-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "flexWrap": "wrap",
    "marginLeft": "25px",
    "marginRight": "25px",
    "marginTop": "17px"
  },
  ".multi-product2": {
    "flexDirection": "column",
    "width": "50%",
    "marginBottom": "30px"
  },
  ".multi-image2": {
    "marginTop": "0px",
    "marginRight": "8px",
    "marginBottom": "16px",
    "marginLeft": "8px",
    "borderRadius": "8.3px"
  },
  ".multi-product3": {
    "flexDirection": "column",
    "width": "33.3%",
    "marginBottom": "30px"
  },
  ".multi-image3": {
    "marginTop": "0px",
    "marginRight": "8px",
    "marginBottom": "16px",
    "marginLeft": "8px",
    "borderRadius": "8px"
  },
  ".multi-product4": {
    "flexDirection": "column",
    "width": "33.3%",
    "marginBottom": "30px"
  },
  ".multi-image4": {
    "marginTop": "0px",
    "marginRight": "8px",
    "marginBottom": "16px",
    "marginLeft": "8px",
    "borderRadius": "8px"
  },
  ".multi-description": {
    "flexDirection": "column"
  },
  ".multi-title": {
    "color": "#1A1A1A",
    "fontSize": "27.1px",
    "lineHeight": "34.9px",
    "marginLeft": "8px"
  },
  ".multi-subtitle": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "20.8px",
    "lineHeight": "27.1px",
    "marginLeft": "8px"
  },
  ".multi-specialprice": {
    "color": "#fa2a2d",
    "fontSize": "20.8px",
    "lineHeight": "27.1px",
    "marginLeft": "8px"
  },
  ".multi-originprice": {
    "color": "#000000",
    "opacity": 0.5,
    "textDecoration": "line-through",
    "fontSize": "20.8px",
    "lineHeight": "27.1px",
    "marginLeft": "8px"
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['banner', 'list', 'num']
  },
  routePage: function routePage(url) {
    _system["default"].push({
      uri: "/Page_Bookdetails"
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(119)
var $app_style$ = __webpack_require__(120)
var $app_script$ = __webpack_require__(121)

$app_define$('@app-component/shucheng_swi', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "swiper-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "swiper-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.banner.title}
              },
              "classList": [
                "swiper-main-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.banner.link}
              },
              "classList": [
                "swiper-link"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.banner.uri}
              },
              "classList": [
                "swiper-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "swiper-list"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.list},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "prod"
              },
              "classList": [
                "swiper-list-item"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "classList": [
                    "swiper-stack"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.img}
                      },
                      "classList": [
                        "swiper-image"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "swiper-image"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.icon}
                          },
                          "classList": [
                            "swiper-icon"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "swiper-title"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = {
  ".swiper-container": {
    "flexDirection": "column"
  },
  ".swiper-head": {
    "justifyContent": "space-between",
    "width": "750px"
  },
  ".swiper-main-title": {
    "fontSize": "31px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".swiper-left": {
    "marginLeft": "33px"
  },
  ".swiper-right": {
    "marginRight": "33px"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "marginRight": "14px",
    "alignSelf": "center"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".swiper-stack": {
    "marginTop": "21px",
    "marginRight": "8px",
    "marginBottom": "23px",
    "marginLeft": "8px"
  },
  ".swiper-image": {
    "width": "330px",
    "height": "183px",
    "borderRadius": "8px"
  },
  ".swiper-list": {
    "flexDirection": "row",
    "height": "269px",
    "marginTop": "0px",
    "marginRight": "16px",
    "marginBottom": "0px",
    "marginLeft": "16px"
  },
  ".swiper-list-item": {
    "flexDirection": "column"
  },
  ".swiper-icon": {
    "width": "33px",
    "height": "33px",
    "marginTop": "138px",
    "marginLeft": "17px",
    "borderRadius": "5px"
  },
  ".swiper-title": {
    "fontSize": "27px",
    "color": "#1A1A1A",
    "marginLeft": "8px"
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  onInit: function onInit() {}
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

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(123)
var $app_style$ = __webpack_require__(124)
var $app_script$ = __webpack_require__(125)

$app_define$('@app-component/single_every', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "single-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "swiper-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.list.title}
              },
              "classList": [
                "swiper-main-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.list.subtitle}
              },
              "classList": [
                "swiper-link"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.list.arrow}
              },
              "classList": [
                "swiper-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "single-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "repeat": function () {return this.list.list},
          "classList": [
            "single-product"
          ],
          "events": {
            "click": "routePage"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.uri}
                  },
                  "classList": [
                    "single-image"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "single-description"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "single-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.brief}
                  },
                  "classList": [
                    "single-brief"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "single-bottom"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.author}
                          },
                          "classList": [
                            "single-author"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "single-div-clazz"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item}
                          },
                          "repeat": function () {return this.$item.clazz},
                          "classList": [
                            "single-clazz"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = {
  ".single-container": {
    "marginTop": "0px",
    "marginRight": "34px",
    "marginBottom": "0px",
    "marginLeft": "34px",
    "flexDirection": "column"
  },
  ".swiper-head": {
    "justifyContent": "space-between",
    "marginBottom": "30px"
  },
  ".swiper-main-title": {
    "fontSize": "31px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "alignSelf": "center",
    "marginRight": "14px"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".single-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  ".single-product": {
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "27.6px",
    "marginLeft": "0px"
  },
  ".single-description": {
    "flexDirection": "column",
    "width": "434px",
    "alignSelf": "center"
  },
  ".single-image": {
    "width": "217px",
    "height": "290px",
    "marginRight": "33px",
    "borderRadius": "8px"
  },
  ".single-title": {
    "color": "#000000",
    "fontSize": "31.3px",
    "lineHeight": "40.6px",
    "marginBottom": "16px"
  },
  ".single-brief": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "lineHeight": "34.9px",
    "marginBottom": "49px"
  },
  ".single-bottom": {
    "justifyContent": "space-between"
  },
  ".single-author": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "alignSelf": "center"
  },
  ".single-div-clazz": {
    "justifyContent": "flex-end"
  },
  ".single-clazz": {
    "color": "#000000",
    "opacity": 0.5,
    "fontSize": "16.7px",
    "lineHeight": "24px",
    "backgroundColor": "rgba(0,0,0,0.1)",
    "borderRadius": "8.3px",
    "alignSelf": "center",
    "marginLeft": "10px",
    "textAlign": "center",
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "10px",
    "paddingLeft": "20px"
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['list']
  },
  press: function press(item) {
    console.error("on press event param : " + item);
  },
  routePage: function routePage(url) {
    _system["default"].push({
      uri: "/Page_Bookdetails"
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(127)
var $app_style$ = __webpack_require__(128)
var $app_script$ = __webpack_require__(129)

$app_define$('@app-component/recommandlist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "main",
    "main_con"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "recommend-title"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.title}
          },
          "classList": [
            "title_text"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "更多"
              },
              "classList": [
                "text_more"
              ],
              "events": {
                "click": function(evt){this.openUrl('morelink',evt)}
              }
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.arrow}
              },
              "classList": [
                "arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "list_container"
      ],
      "repeat": function () {return this.recommandlist},
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "appUrl"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list_item_con"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "left_img"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.backgroundimage}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "main"
                  ],
                  "children": [
                    {
                      "type": "list",
                      "attr": {},
                      "classList": [
                        "number_list"
                      ],
                      "children": [
                        {
                          "type": "block",
                          "attr": {},
                          "repeat": function () {return this.$item.listItems},
                          "children": [
                            {
                              "type": "list-item",
                              "attr": {
                                "type": "listItem"
                              },
                              "classList": [
                                "list-item-ui"
                              ],
                              "children": [
                                {
                                  "type": "div",
                                  "attr": {},
                                  "events": {
                                    "click": "openUrl"
                                  },
                                  "children": [
                                    {
                                      "type": "div",
                                      "attr": {},
                                      "style": {
                                        "width": "30px",
                                        "marginRight": "17px"
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "attr": {
                                            "value": function () {return this.$idx+1}
                                          },
                                          "classList": [
                                            "right_list_text"
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "div",
                                      "attr": {},
                                      "style": {
                                        "width": "364px"
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "attr": {
                                            "value": function () {return this.$item.name}
                                          },
                                          "classList": [
                                            "right_list_text"
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = {
  ".number_list": {
    "width": "450px",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".right_list_text": {
    "color": "rgba(26,26,26,1)",
    "fontSize": "31.3px"
  },
  ".list-item-ui": {
    "height": "67px",
    "marginLeft": "16px",
    "width": "684px"
  },
  ".list_container": {
    "height": "220px",
    "marginTop": "13.8px",
    "marginRight": "0px",
    "marginBottom": "13.8px",
    "marginLeft": "0px"
  },
  ".left_img image": {
    "height": "217px",
    "width": "217px",
    "borderRadius": "8.3px",
    "alignItems": "center"
  },
  ".list_item_con": {
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "height": "250px"
  },
  ".more_link": {
    "width": "200px"
  },
  ".text_more": {
    "width": "300px",
    "color": "rgba(26,26,26,0.5)",
    "fontSize": "27.08px",
    "textAlign": "right",
    "paddingRight": "27px",
    "backgroundSize": "auto",
    "backgroundPosition": "right",
    "backgroundRepeat": "no-repeat"
  },
  ".title_text": {
    "fontSize": "31px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".main": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".main_con": {
    "paddingTop": "0px",
    "paddingRight": "33px",
    "paddingBottom": "0px",
    "paddingLeft": "33px",
    "width": "750px"
  },
  ".arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".recommend-title": {
    "width": "100%",
    "justifyContent": "space-between"
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {},
  props: {
    recommandlist: Array,
    title: String,
    morelink: String,
    arrow: String
  },
  openUrl: function openUrl(e) {
    _system["default"].push({
      uri: ""
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

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "shucheng-box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-one"
      ],
      "children": [
        {
          "type": "reader_main_shucheng_component_searchbar",
          "attr": {
            "searchbar": function () {return this.searchbar}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-two"
      ],
      "children": [
        {
          "type": "shucheng_swiper",
          "attr": {
            "swiperdata": function () {return this.swiperdata}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-three"
      ],
      "children": [
        {
          "type": "fastentry",
          "attr": {
            "list": function () {return this.fastentrylist}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-four"
      ],
      "children": [
        {
          "type": "single_every",
          "attr": {
            "list": function () {return this.everydayonebook}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-five"
      ],
      "children": [
        {
          "type": "multi",
          "attr": {
            "banner": function () {return this.banner2},
            "list": function () {return this.data2},
            "num": function () {return 3}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-six"
      ],
      "children": [
        {
          "type": "single_every",
          "attr": {
            "list": function () {return this.listbyyouread}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-seven"
      ],
      "children": [
        {
          "type": "shucheng_swi",
          "attr": {
            "list": function () {return this.subjectlist},
            "banner": function () {return this.banner}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-eight"
      ],
      "children": [
        {
          "type": "recommandlist",
          "attr": {
            "recommandlist": function () {return this.recommendlist.list},
            "arrow": function () {return this.recommendlist.arrowimage},
            "title": function () {return this.recommendlist.title},
            "morelink": function () {return this.recommendlist.morelink}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "shucheng-box-nine"
      ],
      "children": [
        {
          "type": "multi",
          "attr": {
            "banner": function () {return this.banner3},
            "list": function () {return this.data3},
            "num": function () {return 4}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = {
  ".shucheng-box": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".shucheng-box-one": {
    "width": "683px",
    "marginTop": "17px",
    "marginRight": "34px",
    "marginBottom": "36px",
    "marginLeft": "34px"
  },
  ".shucheng-box-four": {
    "marginTop": "50px"
  },
  ".shucheng-box-five": {
    "marginTop": "50px"
  },
  ".shucheng-box-six": {
    "marginTop": "50px"
  },
  ".shucheng-box-seven": {
    "marginTop": "50px"
  },
  ".shucheng-box-eight": {
    "marginTop": "50px",
    "marginRight": "0px",
    "marginBottom": "50px",
    "marginLeft": "0px"
  }
}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var baidu = 'https://www.baidu.com';
module.exports = {
  props: [],
  data: {
    searchbar: "./page/Page_Shucheng/img/c_search_search.png",
    swiperdata: [{
      src: "./page/Page_Shucheng/TO_DELETE/banner/banner1.png"
    }, {
      src: "./page/Page_Shucheng/TO_DELETE/banner/banner1.png"
    }, {
      src: "./page/Page_Shucheng/TO_DELETE/banner/banner1.png"
    }],
    fastentrylist: [{
      'icon': './page/Page_Shucheng/img/dushi.png',
      'title': '都市',
      'src': 'city',
      'isNew': false
    }, {
      'icon': './page/Page_Shucheng/img/paihang.png',
      'title': '排行',
      'src': 'paihang',
      'isNew': false
    }, {
      'icon': './page/Page_Shucheng/img/tejia.png',
      'title': '特价',
      'src': 'tejia',
      'isNew': false
    }, {
      'icon': './page/Page_Shucheng/img/mianfei.png',
      'title': '免费',
      'src': 'free',
      'isNew': false
    }],
    everydayonebook: {
      title: "每日一书",
      subtitle: "更多",
      arrow: "./page/Page_Shucheng/img/arrow.png",
      list: [{
        uri: './page/Page_Shucheng/TO_DELETE/everydayBook/everybook.png',
        title: '寄余生任我江海',
        brief: '结婚仿佛金漆的笼子，笼子外面的鸟想住进去，笼内的鸟想飞出来',
        author: '孟康',
        clazz: ['古典爱情', '文学']
      }]
    },
    banner2: {
      title: '为你推荐',
      link: '更多',
      arrow_uri: './page/Page_Shucheng/img/arrow.png'
    },
    data2: [{
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '设计艺术史',
      subtitle: '周锐'
    }, {
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '背影',
      subtitle: '朱自清'
    }, {
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '用设计解决问题',
      subtitle: '设计'
    }, {
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '活得有趣',
      subtitle: '周国平'
    }, {
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '孤独是一生的礼物',
      subtitle: '余光中'
    }, {
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '岛山',
      subtitle: '安东尼'
    }],
    listbyyouread: {
      title: "根据你读过的书推荐",
      subtitle: "更多",
      arrow: "./page/Page_Shucheng/img/arrow.png",
      list: [{
        uri: './page/Page_Shucheng/TO_DELETE/recommendByRead/read1.png',
        title: '情人',
        brief: '讲述一个不依附于男人、有经济实力按自己意愿去尽享爱情之美的现代女性修子的故事。',
        author: '渡边淳一',
        clazz: ['古典爱情', '文学', '外国']
      }, {
        uri: './page/Page_Shucheng/TO_DELETE/recommendByRead/read1.png',
        title: '欢乐颂',
        brief: '海归的高管，初入职场的乖乖女，犯傻的小职员，胡同里不能低下头的公主加上富二代的小奸商。',
        author: '孟康',
        clazz: ['古典爱情']
      }, {
        uri: './page/Page_Shucheng/TO_DELETE/recommendByRead/read1.png',
        title: '象牙塔',
        brief: '活动的主体是人，即拥有可预测行为且容易犯错的个体。泰勒讲述了他将将继续饿从“象牙塔”中带回现实之旅。',
        author: '孟康',
        clazz: ['文学', '外国']
      }]
    },
    banner: {
      title: '专题推荐',
      link: '更多',
      uri: './page/Page_Shucheng/img/arrow.png'
    },
    subjectlist: [{
      img: './page/Page_Shucheng/TO_DELETE/banner/banner1.png'
    }, {
      img: './page/Page_Shucheng/TO_DELETE/banner/banner1.png'
    }, {
      img: './page/Page_Shucheng/TO_DELETE/banner/banner1.png'
    }],
    recommendlist: {
      title: "榜单推荐",
      more: "更多",
      arrowimage: "./page/Page_Shucheng/img/arrow.png",
      morelink: baidu,
      list: [{
        recommandType: "新书榜",
        typeUrl: baidu,
        backgroundimage: "./page/Page_Shucheng/img/image1.png",
        listItems: [{
          name: "我的前半生",
          url: baidu
        }, {
          name: "花间集",
          url: baidu
        }, {
          name: "如何学习",
          url: baidu
        }]
      }, {
        recommandType: "畅销榜",
        typeUrl: baidu,
        backgroundimage: "./page/Page_Shucheng/img/image2.png",
        listItems: [{
          name: "我的前半生",
          url: baidu
        }, {
          name: "花间集",
          url: baidu
        }, {
          name: "如何学习",
          url: baidu
        }]
      }]
    },
    banner3: {
      title: '限时特价',
      time_uri: './page/Page_Shucheng/img/time.png',
      link: '更多',
      arrow_uri: './page/Page_Shucheng/img/arrow.png'
    },
    data3: [{
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '草本植物知识',
      specialprice: '免费',
      originprice: '2000阅饼'
    }, {
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '设计中的设计',
      specialprice: '免费',
      originprice: '2000阅饼'
    }, {
      uri: './page/Page_Shucheng/TO_DELETE/recommendForYou/1.png',
      title: '设计艺术史',
      specialprice: '免费',
      originprice: '2000阅饼'
    }]
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
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

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134)
__webpack_require__(138)
var $app_template$ = __webpack_require__(142)
var $app_style$ = __webpack_require__(143)
var $app_script$ = __webpack_require__(144)

$app_define$('@app-component/fenlei', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(135)
var $app_style$ = __webpack_require__(136)
var $app_script$ = __webpack_require__(137)

$app_define$('@app-component/reader_main_component_searchbar', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "div_search"
      ],
      "events": {
        "click": "clickToSearch"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.searchbar}
          },
          "classList": [
            "image_search"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.placeholder}
          },
          "classList": [
            "place_holder"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".div_search": {
    "backgroundColor": "#f2f2f2",
    "width": "684px",
    "height": "64px",
    "marginLeft": "33px",
    "marginRight": "33px",
    "borderRadius": "8px",
    "alignItems": "center"
  },
  ".image_search": {
    "width": "33px",
    "height": "33px",
    "marginTop": "17px",
    "marginRight": "17px",
    "marginBottom": "17px",
    "marginLeft": "17px"
  },
  ".place_holder": {
    "width": "500px",
    "height": "40px",
    "fontSize": "27px",
    "color": "#1A1A1A",
    "opacity": 0.3
  }
}

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    placeholder: '设计中的设计'
  },
  props: ['url', 'searchbar'],
  onInit: function onInit() {},
  clickToSearch: function clickToSearch() {
    _system["default"].push({
      uri: '/Page_Search'
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(139)
var $app_style$ = __webpack_require__(140)
var $app_script$ = __webpack_require__(141)

$app_define$('@app-component/novel_list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "single-container"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "classList": [
        "single-list"
      ],
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "item"
          },
          "repeat": function () {return this.list},
          "classList": [
            "single-product"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "events": {
                "click": function(evt){this.goToPage(this.$item,evt)}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.image}
                      },
                      "classList": [
                        "single-image"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "single-description"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.title}
                      },
                      "classList": [
                        "single-title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.presentation}
                      },
                      "classList": [
                        "single-brief"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "single-bottom"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.author}
                              },
                              "classList": [
                                "single-author"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "single-div-clazz"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.novelType}
                              },
                              "classList": [
                                "single-clazz"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.evaluation}
                              },
                              "classList": [
                                "single-clazz"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "line"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = {
  ".single-container": {
    "marginTop": "20px",
    "marginRight": "33px",
    "marginBottom": "0px",
    "marginLeft": "33px",
    "flexDirection": "column"
  },
  ".single-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  ".single-description": {
    "flexDirection": "column",
    "width": "434px",
    "alignSelf": "center"
  },
  ".single-image": {
    "width": "217px",
    "height": "217px",
    "marginTop": "17px",
    "marginRight": "33px",
    "marginBottom": "11px",
    "marginLeft": "0px",
    "borderRadius": "8px"
  },
  ".single-title": {
    "color": "#000000",
    "fontSize": "31.3px",
    "lineHeight": "40.6px",
    "marginTop": "24px",
    "marginRight": "0px",
    "marginBottom": "24px",
    "marginLeft": "0px"
  },
  ".single-brief": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#1a1a1a",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "lineHeight": "34.9px",
    "marginBottom": "42px"
  },
  ".single-bottom": {
    "justifyContent": "space-between"
  },
  ".single-author": {
    "color": "#1a1a1a",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "alignSelf": "center"
  },
  ".single-div-clazz": {
    "justifyContent": "flex-end"
  },
  ".single-clazz": {
    "width": "30%",
    "textAlign": "center",
    "color": "#000000",
    "opacity": 0.5,
    "fontSize": "16.7px",
    "lineHeight": "25px",
    "backgroundColor": "rgba(118,118,118,0.1)",
    "borderRadius": "4.2px",
    "alignSelf": "center",
    "marginLeft": "10px",
    "marginTop": "6px"
  },
  ".line": {
    "width": "100%",
    "height": "1px",
    "backgroundColor": "rgba(24,34,51,0.2)",
    "marginTop": "40px"
  }
}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['list']
  },
  onInit: function onInit() {},
  goToPage: function goToPage(item) {
    _system["default"].push({
      uri: '/Page_Bookdetails',
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
/* 142 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "mallClassification-content"
  ],
  "style": {
    "height": function () {return (this.screenHeight)+'px'}
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "mallClassification-wrap"
      ],
      "children": [
        {
          "type": "reader_main_component_searchbar",
          "attr": {
            "url": "Page_RecentSearch",
            "placeholder": function () {return this.placeholder},
            "searchbar": function () {return this.searchbar}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mallClassification-left"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "verticaltab-content"
              ],
              "children": [
                {
                  "type": "list",
                  "attr": {},
                  "children": [
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "title-item"
                      },
                      "repeat": function () {return this.tabArray},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.title}
                          },
                          "events": {
                            "click": function(evt){this.detail(this.$idx,evt)}
                          },
                          "classList": function () {return [this.clickIndex===this.$idx?'verticaltab-active':'verticaltab-text']}
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mallClassification-right"
          ],
          "children": [
            {
              "type": "novel_list",
              "attr": {
                "list": function () {return this.novelArray[this.clickIndex].list}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = {
  ".mallClassification-content": {
    "width": "750px",
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  ".mallClassification-wrap": {
    "width": "683px",
    "marginTop": "17px",
    "marginRight": "34px",
    "marginBottom": "36px",
    "marginLeft": "34px"
  },
  ".mallClassification-left": {
    "backgroundColor": "rgba(0,0,0,0.03)"
  },
  ".verticaltab-content": {
    "width": "151px",
    "marginBottom": "30px",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".verticaltab-text": {
    "paddingTop": "35px",
    "paddingBottom": "30px",
    "color": "#4a4a4a",
    "fontSize": "27.1px",
    "width": "100%",
    "textAlign": "center"
  },
  ".verticaltab-active": {
    "paddingTop": "35px",
    "paddingBottom": "30px",
    "color": "#cd2325",
    "fontSize": "27.1px",
    "width": "100%",
    "backgroundColor": "#ffffff",
    "textAlign": "center"
  },
  ".mallClassification-right": {
    "flexDirection": "column",
    "flex": 1
  },
  ".mallClassification-title": {
    "marginTop": "53px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "33.3px",
    "color": "#1a1a1a",
    "fontSize": "27.1px"
  },
  ".mallClassification-box": {
    "flexDirection": "column"
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.device"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    searchbar: "./page/Page_Fenlei/img/c_search_search.png",
    arrow: "./page/Page_Fenlei/img/arrow.png",
    placeholder: '设计中的设计',
    screenHeight: 0,
    tabArray: [{
      'title': '历史',
      'select': true
    }, {
      'title': '心理',
      'select': false
    }, {
      'title': '社科',
      'select': false
    }, {
      'title': '励志',
      'select': false
    }, {
      'title': '玄幻',
      'select': false
    }, {
      'title': '言情',
      'select': false
    }],
    clickIndex: 0,
    novelArray: [{
      title: "历史",
      list: [{
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '明朝那些事儿',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '三国演义',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '历史的秋天',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '品读历史-宋',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '二十四史',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '平民历史',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }]
    }, {
      title: "心理",
      list: [{
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '心理罪之画像',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '犯罪心理档案',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '销售中的心理学',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '心理治愈师',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '心理治疗',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }]
    }, {
      title: "社科",
      list: [{
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '宇宙之谜',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '消费者行为心理学',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '中国社会发展史',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '人文科学',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '转向记',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '伦理秩序与道德研究',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }]
    }, {
      title: "励志",
      list: [{
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '励志',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '励志与创富',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '伟大的励志书',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '逆流',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '苦海',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/read1.png',
        title: '或者，就为了灿烂',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }]
    }, {
      title: "玄幻",
      list: [{
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '武炼巅峰',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '雪鹰领主',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '剑来',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '凡人修仙传',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '神墓',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_word.png',
        title: '遮天',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }]
    }, {
      title: "言情",
      list: [{
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '三生三世',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '三生三世',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '三生三世',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '三生三世',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '三生三世',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }, {
        image: './page/Page_Fenlei/TO_DELETE/list/p_arc_of_war.png',
        title: '三生三世',
        presentation: '我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起，各自做力所能及的事。碰到困难，我们一同承担，困难就不复困难；我们相伴相助，不论什么苦涩艰辛的事，都能变得甜润。我们稍有一点快乐，也会变得非常快乐。',
        author: '匿名',
        novelType: '文学',
        evaluation: '4.1'
      }]
    }]
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      menu: false
    });
    var that = this;

    _system["default"].getInfo({
      success: function success(ret) {
        var height = ret.screenHeight / (ret.screenWidth / 750);
        that.screenHeight = height;
      }
    });
  },
  detail: function detail(index) {
    this.clickIndex = index;
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

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146)
__webpack_require__(150)
__webpack_require__(154)
__webpack_require__(158)
__webpack_require__(162)
var $app_template$ = __webpack_require__(166)
var $app_style$ = __webpack_require__(167)
var $app_script$ = __webpack_require__(168)

$app_define$('@app-component/tingshu', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(147)
var $app_style$ = __webpack_require__(148)
var $app_script$ = __webpack_require__(149)

$app_define$('@app-component/component_swiper', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-container"
      ],
      "children": [
        {
          "type": "swiper",
          "attr": {
            "autoplay": "true"
          },
          "classList": [
            "swiper"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.src}
              },
              "repeat": function () {return this.swiperdata},
              "classList": [
                "bg-image"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = {
  ".item-container": {
    "marginBottom": "50px",
    "marginRight": "60px",
    "marginLeft": "60px",
    "flexDirection": "column"
  },
  ".swiper": {
    "width": "683px",
    "height": "400px",
    "indicatorColor": "rgba(0,0,0,0.2)",
    "indicatorSelectedColor": "#ffffff"
  },
  ".bg-image": {
    "width": "683px",
    "height": "400px",
    "borderRadius": "16.7px"
  }
}

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: ['swiperdata'],
  data: {}
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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(151)
var $app_style$ = __webpack_require__(152)
var $app_script$ = __webpack_require__(153)

$app_define$('@app-component/swi', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "swiper-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "swiper-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.banner.title}
              },
              "classList": [
                "swiper-main-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.banner.link}
              },
              "classList": [
                "swiper-link"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.banner.uri}
              },
              "classList": [
                "swiper-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "swiper-list"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.list},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "prod"
              },
              "classList": [
                "swiper-list-item"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "classList": [
                    "swiper-stack"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.img}
                      },
                      "classList": [
                        "swiper-image"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "swiper-image"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.icon}
                          },
                          "classList": [
                            "swiper-icon"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "swiper-title"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = {
  ".swiper-container": {
    "flexDirection": "column"
  },
  ".swiper-head": {
    "justifyContent": "space-between",
    "width": "750px"
  },
  ".swiper-main-title": {
    "fontSize": "31px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".swiper-left": {
    "marginLeft": "33px"
  },
  ".swiper-right": {
    "marginRight": "33px"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "marginRight": "14px",
    "alignSelf": "center"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".swiper-list-item": {
    "flexDirection": "column"
  },
  ".swiper-stack": {
    "marginTop": "21px",
    "marginRight": "8px",
    "marginBottom": "23px",
    "marginLeft": "8px"
  },
  ".swiper-image": {
    "width": "330px",
    "height": "188px",
    "borderRadius": "8px"
  },
  ".swiper-list": {
    "flexDirection": "row",
    "height": "269px",
    "marginTop": "0px",
    "marginRight": "16px",
    "marginBottom": "0px",
    "marginLeft": "16px"
  },
  ".swiper-icon": {
    "width": "33px",
    "height": "33px",
    "marginTop": "138px",
    "marginLeft": "17px",
    "borderRadius": "5px"
  },
  ".swiper-title": {
    "fontSize": "27px",
    "color": "#1A1A1A",
    "marginLeft": "8px"
  }
}

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  onInit: function onInit() {}
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

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(155)
var $app_style$ = __webpack_require__(156)
var $app_script$ = __webpack_require__(157)

$app_define$('@app-component/tingshu_single', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "single-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "swiper-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.list.title}
              },
              "classList": [
                "swiper-main-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.list.subtitle}
              },
              "classList": [
                "swiper-link"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.list.arrow}
              },
              "classList": [
                "swiper-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "single-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "repeat": function () {return this.list.list},
          "classList": [
            "single-product"
          ],
          "events": {
            "click": "routePage"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "single-left"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.uri}
                      },
                      "classList": [
                        "single-image"
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.headphone}
                      },
                      "classList": [
                        "single-headphone"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "single-description"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "single-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.brief}
                  },
                  "classList": [
                    "single-brief"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "single-bottom"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.author}
                          },
                          "classList": [
                            "single-author"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "single-div-clazz"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item}
                          },
                          "repeat": function () {return this.$item.clazz},
                          "classList": [
                            "single-clazz"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = {
  ".single-container": {
    "marginTop": "0px",
    "marginRight": "34px",
    "marginBottom": "0px",
    "marginLeft": "34px",
    "flexDirection": "column"
  },
  ".swiper-head": {
    "justifyContent": "space-between",
    "marginBottom": "30px"
  },
  ".swiper-main-title": {
    "fontSize": "31px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "alignSelf": "center",
    "marginRight": "14px"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".single-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  ".single-product": {
    "height": "300px",
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "15px",
    "marginLeft": "0px"
  },
  ".single-description": {
    "flexDirection": "column",
    "width": "434px",
    "height": "100%",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f2f2f2",
    "alignSelf": "center"
  },
  ".single-image": {
    "width": "217px",
    "height": "290px",
    "marginRight": "33px",
    "borderRadius": "8px"
  },
  ".single-headphone": {
    "width": "42px",
    "height": "42px",
    "marginLeft": "17px",
    "marginTop": "235px"
  },
  ".single-title": {
    "color": "#000000",
    "fontSize": "31.3px",
    "lineHeight": "40.6px",
    "marginBottom": "16px"
  },
  ".single-brief": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "lineHeight": "34.9px",
    "marginBottom": "49px",
    "lines": 3,
    "textOverflow": "ellipsis"
  },
  ".single-bottom": {
    "justifyContent": "space-between"
  },
  ".single-author": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "alignSelf": "center"
  },
  ".single-div-clazz": {
    "justifyContent": "flex-end"
  },
  ".single-clazz": {
    "color": "#000000",
    "opacity": 0.5,
    "fontSize": "16.7px",
    "lineHeight": "24px",
    "backgroundColor": "rgba(0,0,0,0.1)",
    "borderRadius": "8.3px",
    "alignSelf": "center",
    "marginLeft": "10px",
    "textAlign": "center",
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "10px",
    "paddingLeft": "20px"
  }
}

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['list']
  },
  press: function press(item) {
    console.error("on press event param : " + item);
  },
  routePage: function routePage(url) {
    _system["default"].push({
      uri: "/Page_Hearingdetail"
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(159)
var $app_style$ = __webpack_require__(160)
var $app_script$ = __webpack_require__(161)

$app_define$('@app-component/teacherlist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "single-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "swiper-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.list.title}
              },
              "classList": [
                "swiper-main-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.list.subtitle}
              },
              "classList": [
                "swiper-link"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.list.arrow}
              },
              "classList": [
                "swiper-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "single-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "repeat": function () {return this.list.list},
          "classList": [
            "single-product"
          ],
          "events": {
            "click": "routePage"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "single-left"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.uri}
                      },
                      "classList": [
                        "single-image"
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.headphone}
                      },
                      "classList": [
                        "single-headphone"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "single-description"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "single-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.brief}
                  },
                  "classList": [
                    "single-brief"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "single-bottom"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.author}
                          },
                          "classList": [
                            "single-author"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "single-div-clazz"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item}
                          },
                          "repeat": function () {return this.$item.clazz},
                          "classList": [
                            "single-clazz"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = {
  ".single-container": {
    "marginTop": "0px",
    "marginRight": "34px",
    "marginBottom": "0px",
    "marginLeft": "34px",
    "flexDirection": "column"
  },
  ".swiper-head": {
    "justifyContent": "space-between",
    "marginBottom": "30px"
  },
  ".swiper-main-title": {
    "fontSize": "31px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "alignSelf": "center",
    "marginRight": "14px"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".single-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  ".single-product": {
    "height": "250px",
    "marginTop": "8px",
    "paddingTop": "10px"
  },
  ".single-description": {
    "flexDirection": "column",
    "width": "434px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f2f2f2",
    "alignSelf": "center",
    "paddingBottom": "28px"
  },
  ".single-image": {
    "width": "217px",
    "height": "217px",
    "marginRight": "33px",
    "borderRadius": "8px"
  },
  ".single-headphone": {
    "width": "42px",
    "height": "42px",
    "marginLeft": "17px",
    "marginTop": "160px"
  },
  ".single-title": {
    "color": "#000000",
    "fontSize": "31.3px",
    "lineHeight": "40.6px",
    "marginBottom": "16px"
  },
  ".single-brief": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "lineHeight": "34.9px",
    "marginBottom": "30px",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  ".single-bottom": {
    "justifyContent": "space-between"
  },
  ".single-author": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "alignSelf": "center"
  },
  ".single-div-clazz": {
    "justifyContent": "flex-end"
  },
  ".single-clazz": {
    "color": "#000000",
    "opacity": 0.5,
    "fontSize": "16.7px",
    "lineHeight": "24px",
    "backgroundColor": "rgba(0,0,0,0.1)",
    "borderRadius": "8.3px",
    "alignSelf": "center",
    "marginLeft": "10px",
    "textAlign": "center",
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "10px",
    "paddingLeft": "20px"
  }
}

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['list']
  },
  press: function press(item) {
    console.error("on press event param : " + item);
  },
  routePage: function routePage(url) {
    _system["default"].push({
      uri: "/Page_Hearingdetail"
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(163)
var $app_style$ = __webpack_require__(164)
var $app_script$ = __webpack_require__(165)

$app_define$('@app-component/audio_component', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "recommend-audio-container"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.recommendaudio},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-list"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content-left"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.image}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content-right"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.content}
                  },
                  "classList": [
                    "audio-description"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "audio-time"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.timeurl}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "39'45\""
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = {
  ".recommend-audio-container": {
    "marginTop": "0px",
    "marginRight": "34px",
    "marginBottom": "0px",
    "marginLeft": "34px",
    "flexDirection": "column"
  },
  ".content-list": {
    "height": "133px",
    "width": "100%",
    "alignItems": "center"
  },
  ".content-left": {
    "width": "83px",
    "height": "83px",
    "marginRight": "33px"
  },
  ".content-right": {
    "width": "560px",
    "height": "100%",
    "flexDirection": "column",
    "borderBottomColor": "#F2F2F2",
    "borderBottomWidth": "1px",
    "justifyContent": "center"
  },
  ".audio-description": {
    "color": "#1A1A1A",
    "fontSize": "31.3px",
    "marginBottom": "5px",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".audio-time": {
    "alignItems": "center"
  },
  ".audio-time image": {
    "width": "25px",
    "height": "25px"
  },
  ".audio-time text": {
    "color": "#1A1A1A",
    "fontSize": "27.1px",
    "marginLeft": "15px"
  }
}

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['recommendaudio']
  },
  press: function press(item) {
    console.error("on press event param : " + item);
  },
  routePage: function routePage(url) {
    _system["default"].push({
      uri: "/Page_Hearingdetail"
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
/* 166 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "component1"
      ],
      "children": [
        {
          "type": "component_swiper",
          "attr": {
            "swiperdata": function () {return this.swiperdata}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "component2"
      ],
      "children": [
        {
          "type": "swi",
          "attr": {
            "list": function () {return this.subjectlist1},
            "banner": function () {return this.banner1}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "component3"
      ],
      "children": [
        {
          "type": "tingshu_single",
          "attr": {
            "list": function () {return this.everydayonebook}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "component4"
      ],
      "children": [
        {
          "type": "audio_component",
          "attr": {
            "recommendaudio": function () {return this.recommendaudio}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "component5"
      ],
      "children": [
        {
          "type": "swi",
          "attr": {
            "list": function () {return this.subjectlist2},
            "banner": function () {return this.banner2}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "component6"
      ],
      "children": [
        {
          "type": "teacherlist",
          "attr": {
            "list": function () {return this.singleList1}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "component7"
      ],
      "children": [
        {
          "type": "tingshu_single",
          "attr": {
            "list": function () {return this.singleList2}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  ".component1": {
    "marginTop": "30px"
  },
  ".component4": {
    "marginTop": "50px"
  },
  ".component5": {
    "marginTop": "50px"
  },
  ".component7": {
    "marginTop": "50px"
  }
}

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  data: {
    swiperdata: [{
      src: "/Page_Tingshu/TO_DELETE/banner1.png"
    }, {
      src: "/Page_Tingshu/TO_DELETE/banner2.png"
    }, {
      src: "/Page_Tingshu/TO_DELETE/banner3.png"
    }],
    banner1: {
      title: '分类',
      link: '更多',
      uri: '/Page_Tingshu/img/arrow.png'
    },
    subjectlist1: [{
      img: '/Page_Tingshu/TO_DELETE/banner2.png'
    }, {
      img: '/Page_Tingshu/TO_DELETE/banner1.png'
    }, {
      img: '/Page_Tingshu/TO_DELETE/banner3.png'
    }],
    everydayonebook: {
      title: "每日一书",
      subtitle: "更多",
      arrow: "/Page_Tingshu/img/arrow.png",
      list: [{
        uri: '/Page_Tingshu/TO_DELETE/222.png',
        title: '吐槽是门手艺',
        brief: '《脱口秀大会》，《吐槽大会》原班人马，诺曼博士探讨了我们的生活为什么需要复杂，而不是简单',
        author: '',
        clazz: ['10万人在听']
      }]
    },
    recommendaudio: [{
      'image': "/Page_Tingshu/TO_DELETE/audio1.png",
      'content': "吃出漂亮：健康白领的女人都喜欢的美丽食品",
      'timeurl': "./img/time.png",
      'time': ''
    }, {
      'image': "/Page_Tingshu/TO_DELETE/audio2.png",
      'content': "忽视黑天鹅现象的外在机制",
      'timeurl': "./img/time.png",
      'time': ''
    }, {
      'image': "/Page_Tingshu/TO_DELETE/audio1.png",
      'content': "拒绝主食真的能减肥吗？",
      'timeurl': "./img/time.png",
      'time': ''
    }],
    banner2: {
      title: '排行榜',
      link: '更多',
      uri: '/Page_Tingshu/img/arrow.png'
    },
    subjectlist2: [{
      img: '/Page_Tingshu/TO_DELETE/banner1.png',
      headphone: '/Page_Tingshu/img/headphone.png'
    }, {
      img: '/Page_Tingshu/TO_DELETE/banner2.png',
      headphone: '/Page_Tingshu/img/headphone.png'
    }, {
      img: '/Page_Tingshu/TO_DELETE/banner3.png',
      headphone: '/Page_Tingshu/img/headphone.png'
    }],
    singleList1: {
      title: "大咖开奖",
      subtitle: "更多",
      arrow: "/Page_Tingshu/img/arrow.png",
      list: [{
        uri: '/Page_Tingshu/TO_DELETE/image1.png',
        headphone: '/Page_Tingshu/img/headphone.png',
        title: '业绩倍增，顶级销售特训营',
        brief: '讲述一个不依附于男人、有经济实力按自己意愿去尽享。',
        author: '任翔飞',
        clazz: ['13万人播放', '连载中']
      }, {
        uri: '/Page_Tingshu/TO_DELETE/image1.png',
        headphone: '/Page_Tingshu/img/headphone.png',
        title: '百亿CEO的商战课堂',
        brief: '海归的高管，初入职场的乖乖女，犯傻的小职员，胡同里。',
        author: '孙继东',
        clazz: ['13万人播放', '连载中']
      }, {
        uri: '/Page_Tingshu/TO_DELETE/image1.png',
        headphone: '/Page_Tingshu/img/headphone.png',
        title: '幸福秘笈通往美满家庭',
        brief: '活动的主体是人，即拥有可预测行为且容易犯错的个体。',
        author: '海棠',
        clazz: ['13万人播放', '连载中']
      }]
    },
    singleList2: {
      title: "玄幻精品",
      subtitle: "更多",
      arrow: "/Page_Tingshu/img/arrow.png",
      list: [{
        uri: '/Page_Tingshu/TO_DELETE/44.png',
        headphone: '/Page_Tingshu/img/headphone.png',
        title: '神墓',
        brief: '该书以主角辰南寻找万年前爱人雨馨、追索神魔灭亡遗秘的行迹为线索，引出浩茫六道、天地棋局，演绎出一部充满热血、壮烈、凄美的传奇,可谓网络小说中优良之品。',
        author: '辰东',
        clazz: ['网文', '小说']
      }, {
        uri: '/Page_Tingshu/TO_DELETE/44.png',
        headphone: '/Page_Tingshu/img/headphone.png',
        title: '诛仙',
        brief: '该书以主角辰南寻找万年前爱人雨馨、追索神魔灭亡遗秘的行迹为线索，引出浩茫六道、天地棋局，演绎出一部充满热血、壮烈、凄美的传奇,可谓网络小说中优良之品。',
        author: '萧鼎',
        clazz: ['网文', '小说']
      }, {
        uri: '/Page_Tingshu/TO_DELETE/44.png',
        headphone: '/Page_Tingshu/img/headphone.png',
        title: '斗破苍穹',
        brief: '该书以主角辰南寻找万年前爱人雨馨、追索神魔灭亡遗秘的行迹为线索，引出浩茫六道、天地棋局，演绎出一部充满热血、壮烈、凄美的传奇,可谓网络小说中优良之品。',
        author: '天蚕土豆',
        clazz: ['网文', '小说']
      }]
    }
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: '听书',
      textColor: '##1A1A1A',
      backgroundColor: 'rgba(242,242,242,0.95)',
      menu: true
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

/***/ }),
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "events": {
        "change": "switchContent"
      },
      "children": [
        {
          "type": "tab-content",
          "attr": {},
          "children": [
            {
              "type": "shucheng",
              "attr": {}
            },
            {
              "type": "fenlei",
              "attr": {}
            },
            {
              "type": "fenlei",
              "attr": {}
            },
            {
              "type": "shujia",
              "attr": {
                "foo": function () {return this.foo}
              }
            }
          ]
        },
        {
          "type": "tab-bar",
          "attr": {},
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.datas.list},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-item"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.show?this.$item.pic_choice:this.$item.pic}
                      },
                      "shown": function () {return this.$item.show},
                      "classList": [
                        "image-active"
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.show?this.$item.pic_choice:this.$item.pic}
                      },
                      "shown": function () {return !this.$item.show},
                      "classList": [
                        "image-normal"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.title}
                      },
                      "style": {
                        "color": function () {return this.$item.color}
                      },
                      "classList": [
                        "title"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  ".tabs": {
    "backgroundColor": "#f2f2f2",
    "height": "100px",
    "width": "100%",
    "position": "fixed",
    "bottom": "0px"
  },
  ".tab-content": {
    "marginBottom": "100px"
  },
  ".tab-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginLeft": "33px",
    "marginRight": "33px",
    "paddingTop": "14px",
    "paddingBottom": "11px",
    "width": "170.8px",
    "height": "104.2px"
  },
  ".image-active": {
    "width": "50px",
    "height": "50px",
    "resizeMode": "contain"
  },
  ".image-normal": {
    "width": "50px",
    "height": "50px",
    "resizeMode": "contain"
  },
  ".tab-item text": {
    "fontSize": "20.8px",
    "marginTop": "10px",
    "textAlign": "center",
    "color": "rgba(0,0,0,0.5)",
    "fontSize:active": "21px",
    "color:active": "#cd2325",
    "marginTop:active": "6px",
    "textAlign:active": "center"
  },
  ".maintab-shadow-bottom": {
    "width": "100%",
    "height": "20px"
  }
}

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['datas'],
  data: {
    foo: true,
    array: {
      color_normal: '#1A1A1A',
      color_active: '#CD2325',
      list: [{
        title: '推荐',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '玄幻',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '武侠',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '言情',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '历史',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '宫廷',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '科幻',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '悬疑',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '儿童',
        show_line: false,
        color: '#1A1A1A'
      }, {
        title: '励志',
        show_line: false,
        color: '#1A1A1A'
      }]
    }
  },
  switchContent: function switchContent(e) {
    var index = e.index;

    for (var i = 0; i < this.datas.list.length; i++) {
      var element = this.datas.list[i];
      element.show = false;

      if (i === index) {
        element.show = true;
        this.$page.setTitleBar({
          textColor: '#1a1a1a',
          backgroundColor: '#f2f2f2',
          text: '阅读',
          menu: true
        });
      }
    }
  },
  longpress: function longpress(_longpress) {
    this.showTabs = false;
    this.showCeckbox = true;

    _longpress.stopPropagation();
  },
  unCecked: function unCecked() {
    this.showCeckbox = false;
    this.showTabs = true;
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

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = {
  "type": "fixedmaintab",
  "attr": {
    "datas": function () {return this.datas}
  }
}

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  data: function data() {
    return {
      datas: {
        color_normal: '#878787',
        color_active: '#FF7500',
        list: [{
          i: 1,
          color: '#878787',
          pic: './img/shucheng.png',
          pic_choice: './img/clicked-shucheng.png',
          show: false,
          title: '首页'
        }, {
          i: 3,
          color: '#878787',
          pic: './img/fenlei.png',
          pic_choice: './img/clicked-fenlei.png',
          show: false,
          title: '分类'
        }, {
          i: 2,
          color: '#878787',
          pic: './img/tingshu.png',
          pic_choice: './img/clicked-tingshu.png',
          show: false,
          title: '食材'
        }, {
          i: 4,
          color: '#878787',
          pic: './img/wode.png',
          pic_choice: './img/clicked-wode.png',
          show: false,
          title: '收藏'
        }]
      }
    };
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      textColor: '#1a1a1a',
      backgroundColor: '#f2f2f2',
      text: '考拉菜谱',
      menu: true
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
/******/ ]));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFBhZ2VfTWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9pbmRleC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL2NvbXBvbmVudC9jX2ZpeGVkX21haW50YWIudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1amlhL2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWppYS9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVqaWEvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/YTI2MyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVqaWEvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/YjU1MiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVqaWEvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/MTQ1YyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVqaWEvY29tcG9uZW50L2Nfc2h1amlhX2xpc3QudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1amlhL2NvbXBvbmVudC9jX3NodWppYV9saXN0LnV4P2M5MjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1amlhL2NvbXBvbmVudC9jX3NodWppYV9saXN0LnV4PzI0MjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1amlhL2NvbXBvbmVudC9jX3NodWppYV9saXN0LnV4PzhiMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1amlhL2luZGV4LnV4PzVlMWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1amlhL2luZGV4LnV4Pzc4OGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1amlhL2luZGV4LnV4P2U2NmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/YzdhMSIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVjaGVuZy9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eD8zNGQ2Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9Db21wb25lbnRfU2VhcmNoQmFyLnV4PzZjNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L2NvbXBvbmVudF9zd2lwZXIudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L2NvbXBvbmVudF9zd2lwZXIudXg/ZGUzNiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVjaGVuZy9jb21wb25lbnQvY29tcG9uZW50X3N3aXBlci51eD83ODhiIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jb21wb25lbnRfc3dpcGVyLnV4Pzk1YzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L2NfZmFzdEVudHJ5LnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2Zhc3RFbnRyeS51eD80MzBmIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2Zhc3RFbnRyeS51eD9hNTBhIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2Zhc3RFbnRyeS51eD84NTE1Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2xpc3RfbXVsdGkudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L2NfbGlzdF9tdWx0aS51eD8yZGNmIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2xpc3RfbXVsdGkudXg/MmE1NiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVjaGVuZy9jb21wb25lbnQvY19saXN0X211bHRpLnV4P2RlYjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eD81NmQyIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eD80YzY0Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eD9hZjkwIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2xpc3Rfc2luZ2xlLnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX2xpc3Rfc2luZ2xlLnV4P2JiZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXg/MmM5MCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVjaGVuZy9jb21wb25lbnQvY19saXN0X3NpbmdsZS51eD9lODA4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX3JlY29tbWFuZExpc3QudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvY29tcG9uZW50L2NfcmVjb21tYW5kTGlzdC51eD8yYTRlIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2NvbXBvbmVudC9jX3JlY29tbWFuZExpc3QudXg/YWI5YyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVjaGVuZy9jb21wb25lbnQvY19yZWNvbW1hbmRMaXN0LnV4P2RhYmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfU2h1Y2hlbmcvaW5kZXgudXg/Zjg5YyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9TaHVjaGVuZy9pbmRleC51eD84MzYwIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1NodWNoZW5nL2luZGV4LnV4PzczODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfRmVubGVpL2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX0ZlbmxlaS9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/NDMxZCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/MWM0OCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/NTYwNiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvY29tcG9uZW50L3Bfbm92ZWxfbGlzdC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvY29tcG9uZW50L3Bfbm92ZWxfbGlzdC51eD8xNTIxIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX0ZlbmxlaS9jb21wb25lbnQvcF9ub3ZlbF9saXN0LnV4PzExZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfRmVubGVpL2NvbXBvbmVudC9wX25vdmVsX2xpc3QudXg/MGRiOSIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvaW5kZXgudXg/NmUxZCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvaW5kZXgudXg/YzZmYiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9GZW5sZWkvaW5kZXgudXg/NjNjYyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1RpbmdzaHUvY29tcG9uZW50L2NvbXBvbmVudF9zd2lwZXIudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9jb21wb25lbnQvY29tcG9uZW50X3N3aXBlci51eD85ZjEzIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1RpbmdzaHUvY29tcG9uZW50L2NvbXBvbmVudF9zd2lwZXIudXg/NDhjNiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2NvbXBvbmVudC9jb21wb25lbnRfc3dpcGVyLnV4PzFmODEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXg/NjJlZSIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eD80MmYwIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1RpbmdzaHUvY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4P2U1MjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9jb21wb25lbnQvY19saXN0X3NpbmdsZS51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2NvbXBvbmVudC9jX2xpc3Rfc2luZ2xlLnV4PzQ0MjciLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9jb21wb25lbnQvY19saXN0X3NpbmdsZS51eD83NDE4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1RpbmdzaHUvY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXg/OTMwZCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2NvbXBvbmVudC9jX3RlYWNoZXJfbGlzdC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2NvbXBvbmVudC9jX3RlYWNoZXJfbGlzdC51eD8yZDNmIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1RpbmdzaHUvY29tcG9uZW50L2NfdGVhY2hlcl9saXN0LnV4PzBkZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9jb21wb25lbnQvY190ZWFjaGVyX2xpc3QudXg/MGRhNCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2NvbXBvbmVudC9jX3JlY29tbWVuZF9hdWRpby51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2NvbXBvbmVudC9jX3JlY29tbWVuZF9hdWRpby51eD84MTNjIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1RpbmdzaHUvY29tcG9uZW50L2NfcmVjb21tZW5kX2F1ZGlvLnV4P2U1ZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9jb21wb25lbnQvY19yZWNvbW1lbmRfYXVkaW8udXg/YjQwNiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL3BhZ2UvUGFnZV9UaW5nc2h1L2luZGV4LnV4PzVmY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9wYWdlL1BhZ2VfVGluZ3NodS9pbmRleC51eD8yMjc2Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vcGFnZS9QYWdlX1RpbmdzaHUvaW5kZXgudXg/ZDdlMSIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL2NvbXBvbmVudC9jX2ZpeGVkX21haW50YWIudXg/OThjNSIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL2NvbXBvbmVudC9jX2ZpeGVkX21haW50YWIudXg/YjU1NiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL2NvbXBvbmVudC9jX2ZpeGVkX21haW50YWIudXg/YWQ3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9NYWluL2luZGV4LnV4PzU1YjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfTWFpbi9pbmRleC51eD8wMTNiIiwid2VicGFjazovLy8uL3NyYy9QYWdlX01haW4vaW5kZXgudXg/NWNlYyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gODcpO1xuIiwicmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX2ZpeGVkX21haW50YWIudXg/bmFtZT1maXhlZG1haW50YWJcIilcbnZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxcaW5kZXgudXghLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxcaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjEuMC1TdGFibGUuMzAwJ30pIiwicmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuLi9wYWdlL1BhZ2VfU2h1amlhL2luZGV4LnV4P25hbWU9c2h1amlhXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4uL3BhZ2UvUGFnZV9TaHVjaGVuZy9pbmRleC51eD9uYW1lPXNodWNoZW5nXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4uL3BhZ2UvUGFnZV9GZW5sZWkvaW5kZXgudXg/bmFtZT1mZW5sZWlcIilcbnJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi4vcGFnZS9QYWdlX1RpbmdzaHUvaW5kZXgudXg/bmFtZT10aW5nc2h1XCIpXG52YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX2ZpeGVkX21haW50YWIudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxjb21wb25lbnRcXFxcY19maXhlZF9tYWludGFiLnV4IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXGNvbXBvbmVudFxcXFxjX2ZpeGVkX21haW50YWIudXghLi9jX2ZpeGVkX21haW50YWIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY19maXhlZF9tYWludGFiLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvZml4ZWRtYWludGFiJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsInJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eD9uYW1lPXJlYWRlcl9tYWluX3NodWppYV9jb21wb25lbnRfc2VhcmNoYmFyXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2Nfc2h1amlhX2xpc3QudXg/bmFtZT1zaHVqaWFfbGlzdFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfU2h1amlhXFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVqaWFcXFxcaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3NodWppYScsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9Db21wb25lbnRfU2VhcmNoQmFyLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWppYVxcXFxjb21wb25lbnRcXFxcQ29tcG9uZW50X1NlYXJjaEJhci51eCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfU2h1amlhXFxcXGNvbXBvbmVudFxcXFxDb21wb25lbnRfU2VhcmNoQmFyLnV4IS4vQ29tcG9uZW50X1NlYXJjaEJhci51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9Db21wb25lbnRfU2VhcmNoQmFyLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvcmVhZGVyX21haW5fc2h1amlhX2NvbXBvbmVudF9zZWFyY2hiYXInLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdl9zZWFyY2hcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9TZWFyY2hcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaGJhcn1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW1hZ2Vfc2VhcmNoXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwbGFjZV9ob2xkZXJcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5kaXZfc2VhcmNoXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcIndpZHRoXCI6IFwiNjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE3cHhcIlxuICB9LFxuICBcIi5wbGFjZV9ob2xkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC4zXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge1xuICAgIHBsYWNlaG9sZGVyOiAn6K6+6K6h5Lit55qE6K6+6K6hJ1xuICB9LFxuICBwcm9wczogWydzZWFyY2hiYXInXSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fSxcbiAgY2xpY2tUb1NlYXJjaDogZnVuY3Rpb24gY2xpY2tUb1NlYXJjaCgpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogJy9QYWdlX1NlYXJjaCdcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY19zaHVqaWFfbGlzdC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVqaWFcXFxcY29tcG9uZW50XFxcXGNfc2h1amlhX2xpc3QudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWppYVxcXFxjb21wb25lbnRcXFxcY19zaHVqaWFfbGlzdC51eCEuL2Nfc2h1amlhX2xpc3QudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY19zaHVqaWFfbGlzdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3NodWppYV9saXN0JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJzaHVqaWEtbGlzdFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNodWppYS1ib3gtdG9wXCJcbiAgICAgIF0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMuZm9vfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2xvc2VfaW1nXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbG9jZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLmNsb3NlSW1hZ2V9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRvcFRpdGxlfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0b3BfdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaHVqaWFyb3dzfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gW3RoaXMuJGlkeD09dGhpcy5zaHVqaWFyb3dzLmxlbmd0aC0xPydsYXN0LWxpc3Qtcm93JzonbGlzdC1yb3cnXX0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNodWppYS1ib29rc1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZXhwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbX0sXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImJ0bmNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VfZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiYnRuY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNsaWNrVG9SZWFkKHRoaXMudmFsdWUsZXZ0KX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb25ncHJlc3NcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmxvbmdQcmVzcyh0aGlzLnZhbHVlLGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdF9ib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuc2VsZWN0KHRoaXMudmFsdWUsZXZ0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaG93Q2hlY2tCb3h9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLm5vU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RfYm94X2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy52YWx1ZS5zZWxlY3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbWcuc2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RfYm94X2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlLnNlbGVjdEltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZS5ib29rVHlwZTEhPT0nbm8nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9va190eXBlXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmRJbWFnZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLnR5cGUxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6K+V6K+7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZS5ib29rVHlwZTE9PT0nc2hpZHUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuabtOaWsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWUuYm9va1R5cGUxPT09J3VwZGF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZS5ib29rVHlwZTI9PT0ndGluZ3NodSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib29rX3R5cGVfMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbWcudHlwZTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNodWppYS1saW5lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmltZy5zaHVqaWFMaW5lfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0YWJzXCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFic1wiXG4gICAgICBdLFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICF0aGlzLmZvb30sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1iYXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgIFwiZXhwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jaGVja2VkbGlzdH0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWItaXRlbVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy50YWJDbGlja0V2ZW50KHRoaXMuaXRlbSxldnQpfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnNodWppYS1saXN0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjk4cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zaHVqaWEtYm94LXRvcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjM2cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IFwiMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0MiwyNDIsMjQyLDAuOTUpXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuY2xvc2VfaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIudG9wX3RpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzcuNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIlxuICB9LFxuICBcIi5saXN0LXJvd1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5sYXN0LWxpc3Qtcm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnNodWppYS1ib29rc1wiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRweFwiXG4gIH0sXG4gIFwiLmltYWdlX2RpdlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE4OHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNTBweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuc2VsZWN0X2JveFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiN3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI3cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI3cHhcIlxuICB9LFxuICBcIi5zZWxlY3RfYm94X2ltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmNoZWNrYm94XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBweFwiXG4gIH0sXG4gIFwiLnNodWppYS1saW5lXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjMwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYmFja2dyb3VuZFJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiXG4gIH0sXG4gIFwiLnNodWppYS1saW5lIGltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi50YWJzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMkYyRjJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLnRhYi1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTFweFwiLFxuICAgIFwid2lkdGhcIjogXCIxNzAuOHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDQuMnB4XCJcbiAgfSxcbiAgXCIuaW1hZ2UtYWN0aXZlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwicmVzaXplTW9kZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcIi50aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5ib29rX3R5cGVfMVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY3cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM0cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2cHhcIixcbiAgICBcImxlZnRcIjogXCIwcHhcIlxuICB9LFxuICBcIi5ib29rX3R5cGVfMSB0ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyMC44cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYm9va190eXBlXzJcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMTBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjhweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3BzOiBbJ2xpc3QnLCAnY2hlY2tlZGxpc3QnLCAnaW1nJywgJ2ZvbyddLFxuICBkYXRhOiB7XG4gICAgdG9wVGl0bGU6ICfmnKrpgInmi6knLFxuICAgIHNob3dDaGVja0JveDogZmFsc2UsXG4gICAgc2VsZWN0SW1hZ2U6IGZhbHNlLFxuICAgIHNodWppYXJvd3M6IFtdLFxuICAgIGNob29zZUJvb2tBcnI6IFtdXG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA3REZGJyxcbiAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAwLjUsXG4gICAgICBtZW51OiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuc2h1amlhcm93cyA9IHRoaXMuc2xpY2VBcnJheSh0aGlzLmxpc3QpO1xuICB9LFxuICBzbGljZUFycmF5OiBmdW5jdGlvbiBzbGljZUFycmF5KGFycmF5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAzKSB7XG4gICAgICByZXN1bHQucHVzaChhcnJheS5zbGljZShpLCBpICsgMykpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGNsaWNrVG9SZWFkOiBmdW5jdGlvbiBjbGlja1RvUmVhZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgdGhpcy5zaG93Q2hlY2tCb3ggPSBmYWxzZTtcbiAgICAgIHRoaXMuZm9vID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZVNlbGVjdEltYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZS5ib29rVHlwZTIgPT09ICd0aW5nc2h1Jykge1xuICAgICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgICAgICB1cmk6IFwiL1BhZ2VfSGVhcmluZ2RldGFpbFwiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5ib29rVHlwZTIgPT09ICdub3ZlbCcpIHtcbiAgICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICAgICAgdXJpOiAnL1BhZ2VfUmVhZCcsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpdGVtOiB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsb25nUHJlc3M6IGZ1bmN0aW9uIGxvbmdQcmVzcyh2YWx1ZSkge1xuICAgIHRoaXMuZm9vID0gZmFsc2U7XG4gICAgdGhpcy5zaG93Q2hlY2tCb3ggPSB0cnVlO1xuICAgIHRoaXMuY2hvb3NlQm9va0FyciA9IFtdO1xuICB9LFxuICBjbG9jZTogZnVuY3Rpb24gY2xvY2UoKSB7XG4gICAgdGhpcy5zaG93Q2hlY2tCb3ggPSBmYWxzZTtcbiAgICB0aGlzLmZvbyA9IHRydWU7XG4gICAgdGhpcy5oaWRlU2VsZWN0SW1hZ2UoKTtcbiAgfSxcbiAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QodmFsdWUpIHtcbiAgICB2YWx1ZS5zZWxlY3RJbWFnZSA9ICF2YWx1ZS5zZWxlY3RJbWFnZTtcblxuICAgIGlmICh2YWx1ZS5zZWxlY3RJbWFnZSkge1xuICAgICAgdGhpcy5jaG9vc2VCb29rQXJyLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVJbmRleCA9IHRoaXMuY2hvb3NlQm9va0Fyci5pbmRleE9mKHZhbHVlKTtcblxuICAgICAgaWYgKHZhbHVlSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuY2hvb3NlQm9va0Fyci5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudG9wVGl0bGUgPSBcIuacqumAieaLqVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvcFRpdGxlID0gXCLlt7LpgInmi6lcIiArIHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggKyBcIumhuVwiO1xuICAgIH1cbiAgfSxcbiAgdGFiQ2xpY2tFdmVudDogZnVuY3Rpb24gdGFiQ2xpY2tFdmVudChpdGVtLCBldmVudCkge1xuICAgIGlmIChpdGVtLnRpdGxlID09PSAn5Yig6ZmkJykge1xuICAgICAgaWYgKHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+i/mOacqumAieaLqeS5puexjScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgZ3Jhdml0eTogJ2JvdHRvbSdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd0RpYWxvZyh7XG4gICAgICAgICAgbWVzc2FnZTogJ+aYr+WQpuWIoOmZpOaJgOmAiScgKyB0aGlzLmNob29zZUJvb2tBcnIubGVuZ3RoICsgJ+acrOS5puexjScsXG4gICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgIHRleHQ6ICfliKDpmaQnLFxuICAgICAgICAgICAgY29sb3I6ICcjQ0QyMzI1J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRleHQ6ICflj5bmtognLFxuICAgICAgICAgICAgY29sb3I6ICcjQ0QyMzI1J1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflt7LmiJDlip/liKDpmaTmiYDpgInkuabnsY0nLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6ICdib3R0b20nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBoaWRlU2VsZWN0SW1hZ2U6IGZ1bmN0aW9uIGhpZGVTZWxlY3RJbWFnZSgpIHtcbiAgICB0aGlzLmNob29zZUJvb2tBcnIgPSBbXTtcbiAgICB0aGlzLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaXRlbS5zZWxlY3RJbWFnZSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudG9wVGl0bGUgPSBcIuacqumAieaLqVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvcFRpdGxlID0gXCLlt7LpgInmi6lcIiArIHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggKyBcIumhuVwiO1xuICAgIH1cbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInNodWppYS1ib3hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzaHVqaWEtYm94LXRvcFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJyZWFkZXJfbWFpbl9zaHVqaWFfY29tcG9uZW50X3NlYXJjaGJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNlYXJjaGJhclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoYmFyfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2h1amlhLWJveC1ib3R0b21cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic2h1amlhX2xpc3RcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0fSxcbiAgICAgICAgICAgIFwiY2hlY2tlZGxpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNoZWNrZWRMaXN0fSxcbiAgICAgICAgICAgIFwiaW1nXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbWd9LFxuICAgICAgICAgICAgXCJmb29cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmZvb31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuc2h1amlhLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2h1amlhLWJveC10b3BcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzNnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzRweFwiXG4gIH0sXG4gIFwiLnNodWppYS1ib3gtYm90dG9tXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjk4cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyNnB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3BzOiBbJ2ZvbyddLFxuICBkYXRhOiB7XG4gICAgbGlzdDogW3tcbiAgICAgIFwiaW1hZ2VcIjogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvVE9fREVMRVRFLzEucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJvbmVcIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcIm5vXCIsXG4gICAgICBcImJvb2tUeXBlMlwiOiBcIm5vdmVsXCJcbiAgICB9LCB7XG4gICAgICBcImltYWdlXCI6IFwiLi9wYWdlL1BhZ2VfU2h1amlhL1RPX0RFTEVURS8yLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwidHdvXCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJzaGlkdVwiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJub3ZlbFwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIi4vcGFnZS9QYWdlX1NodWppYS9UT19ERUxFVEUvMS5wbmdcIixcbiAgICAgIFwibmFtZVwiOiBcInRocmVlXCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJ1cGRhdGVcIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwidGluZ3NodVwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIi4vcGFnZS9QYWdlX1NodWppYS9UT19ERUxFVEUvMi5wbmdcIixcbiAgICAgIFwibmFtZVwiOiBcImZvdXJcIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcIm5vXCIsXG4gICAgICBcImJvb2tUeXBlMlwiOiBcIm5vdmVsXCJcbiAgICB9LCB7XG4gICAgICBcImltYWdlXCI6IFwiLi9wYWdlL1BhZ2VfU2h1amlhL1RPX0RFTEVURS8xLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiZml2ZVwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwidGluZ3NodVwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIi4vcGFnZS9QYWdlX1NodWppYS9UT19ERUxFVEUvMi5wbmdcIixcbiAgICAgIFwibmFtZVwiOiBcInNpeFwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH0sIHtcbiAgICAgIFwiaW1hZ2VcIjogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvVE9fREVMRVRFLzEucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJzZXZlblwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH0sIHtcbiAgICAgIFwiaW1hZ2VcIjogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvVE9fREVMRVRFLzIucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJlaWdodFwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH0sIHtcbiAgICAgIFwiaW1hZ2VcIjogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvVE9fREVMRVRFLzEucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJuaW5lXCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJub1wiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJub3ZlbFwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIi4vcGFnZS9QYWdlX1NodWppYS9UT19ERUxFVEUvMi5wbmdcIixcbiAgICAgIFwibmFtZVwiOiBcInRlblwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH0sIHtcbiAgICAgIFwiaW1hZ2VcIjogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvVE9fREVMRVRFLzIucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJlaWdodFwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH0sIHtcbiAgICAgIFwiaW1hZ2VcIjogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvVE9fREVMRVRFLzEucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJuaW5lXCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJub1wiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJub3ZlbFwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIi4vcGFnZS9QYWdlX1NodWppYS9UT19ERUxFVEUvMi5wbmdcIixcbiAgICAgIFwibmFtZVwiOiBcInRlblwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH1dLFxuICAgIGNoZWNrZWRMaXN0OiBbe1xuICAgICAgaTogMCxcbiAgICAgIGNvbG9yOiAnIzg3ODc4NycsXG4gICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX1NodWppYS9pbWcvZGVsZXRlLnBuZycsXG4gICAgICB0aXRsZTogJ+WIoOmZpCdcbiAgICB9LCB7XG4gICAgICBpOiAyLFxuICAgICAgY29sb3I6ICcjODc4Nzg3JyxcbiAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfU2h1amlhL2ltZy9zaGFyZS5wbmcnLFxuICAgICAgdGl0bGU6ICfliIbkuqsnXG4gICAgfSwge1xuICAgICAgaTogMyxcbiAgICAgIGNvbG9yOiAnIzg3ODc4NycsXG4gICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX1NodWppYS9pbWcvYWxsLnBuZycsXG4gICAgICB0aXRsZTogJ+WFqOmAiSdcbiAgICB9XSxcbiAgICBpbWc6IHtcbiAgICAgIGNsb3NlSW1hZ2U6IFwiLi9wYWdlL1BhZ2VfU2h1amlhL2ltZy9pY29uX2Nsb3NlLnBuZ1wiLFxuICAgICAgbm9TZWxlY3Q6IFwiLi9wYWdlL1BhZ2VfU2h1amlhL2ltZy9ub19zZWxlY3QucG5nXCIsXG4gICAgICBzZWxlY3Q6IFwiLi9wYWdlL1BhZ2VfU2h1amlhL2ltZy9zZWxlY3QucG5nXCIsXG4gICAgICB0eXBlMTogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvaW1nL2ltYWdlMS5wbmdcIixcbiAgICAgIHR5cGUyOiBcIi4vcGFnZS9QYWdlX1NodWppYS9pbWcvaGVhZHBob25lLnBuZ1wiLFxuICAgICAgc2h1amlhTGluZTogXCIuL3BhZ2UvUGFnZV9TaHVqaWEvaW1nL3NodWppYS5wbmdcIlxuICAgIH0sXG4gICAgc2VhcmNoYmFyOiBcIi4vcGFnZS9QYWdlX1NodWppYS9pbWcvY19zZWFyY2hfc2VhcmNoLnBuZ1wiXG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgbWVudTogZmFsc2VcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9Db21wb25lbnRfU2VhcmNoQmFyLnV4P25hbWU9cmVhZGVyX21haW5fc2h1Y2hlbmdfY29tcG9uZW50X3NlYXJjaGJhclwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jb21wb25lbnRfc3dpcGVyLnV4P25hbWU9c2h1Y2hlbmdfc3dpcGVyXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfZmFzdEVudHJ5LnV4P25hbWU9ZmFzdGVudHJ5XCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfbGlzdF9tdWx0aS51eD9uYW1lPW11bHRpXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4P25hbWU9c2h1Y2hlbmdfc3dpXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXg/bmFtZT1zaW5nbGVfZXZlcnlcIilcbnJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvY19yZWNvbW1hbmRMaXN0LnV4P25hbWU9cmVjb21tYW5kbGlzdFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfU2h1Y2hlbmdcXFxcaW5kZXgudXghLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWNoZW5nXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9zaHVjaGVuZycsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9Db21wb25lbnRfU2VhcmNoQmFyLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWNoZW5nXFxcXGNvbXBvbmVudFxcXFxDb21wb25lbnRfU2VhcmNoQmFyLnV4IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVjaGVuZ1xcXFxjb21wb25lbnRcXFxcQ29tcG9uZW50X1NlYXJjaEJhci51eCEuL0NvbXBvbmVudF9TZWFyY2hCYXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vQ29tcG9uZW50X1NlYXJjaEJhci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3JlYWRlcl9tYWluX3NodWNoZW5nX2NvbXBvbmVudF9zZWFyY2hiYXInLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdl9zZWFyY2hcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9TZWFyY2hcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaGJhcn1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW1hZ2Vfc2VhcmNoXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwbGFjZV9ob2xkZXJcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5kaXZfc2VhcmNoXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcIndpZHRoXCI6IFwiNjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE3cHhcIlxuICB9LFxuICBcIi5wbGFjZV9ob2xkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC4zXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIHBsYWNlaG9sZGVyOiAn6K6+6K6h5Lit55qE6K6+6K6hJ1xuICB9LFxuICBwcm9wczogWyd1cmwnLCAnc2VhcmNoYmFyJ10sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge30sXG4gIGNsaWNrVG9TZWFyY2g6IGZ1bmN0aW9uIGNsaWNrVG9TZWFyY2goKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6ICcvUGFnZV9TZWFyY2gnXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jb21wb25lbnRfc3dpcGVyLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWNoZW5nXFxcXGNvbXBvbmVudFxcXFxjb21wb25lbnRfc3dpcGVyLnV4IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVjaGVuZ1xcXFxjb21wb25lbnRcXFxcY29tcG9uZW50X3N3aXBlci51eCEuL2NvbXBvbmVudF9zd2lwZXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY29tcG9uZW50X3N3aXBlci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3NodWNoZW5nX3N3aXBlcicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3dpcGVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiYXV0b3BsYXlcIjogXCJ0cnVlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3dpcGVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zcmN9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zd2lwZXJkYXRhfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYmctaW1hZ2VcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLml0ZW0tY29udGFpbmVyXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjYwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zd2lwZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDAwcHhcIixcbiAgICBcImluZGljYXRvckNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjIpXCIsXG4gICAgXCJpbmRpY2F0b3JTZWxlY3RlZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLmJnLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjgzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNi43cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSB7XG4gIHByb3BzOiBbJ3N3aXBlcmRhdGEnXSxcbiAgZGF0YToge31cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX2Zhc3RFbnRyeS51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVjaGVuZ1xcXFxjb21wb25lbnRcXFxcY19mYXN0RW50cnkudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWNoZW5nXFxcXGNvbXBvbmVudFxcXFxjX2Zhc3RFbnRyeS51eCEuL2NfZmFzdEVudHJ5LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NfZmFzdEVudHJ5LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvZmFzdGVudHJ5JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJmYXN0ZW50cnktY29udGVudFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3R9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImZhc3RlbnRyeS1ib3hcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuZGV0YWlsKHRoaXMuJGl0ZW0udGl0bGUsZXZ0KX1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZmFzdGVudHJ5LWltZ1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5udW1iZXJ9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImZhc3RlbnRyeS1udW1iZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5udW1iZXI/dHJ1ZTpmYWxzZX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZmFzdGVudHJ5LXRleHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZmFzdGVudHJ5LXRpcHNcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5pc05ld31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuZmFzdGVudHJ5LWNvbnRlbnRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjgzcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCIuZmFzdGVudHJ5LWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuZmFzdGVudHJ5LW51bWJlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyNnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCItMTBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxOC44cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTIuNXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkYxNDAwXCJcbiAgfSxcbiAgXCIuZmFzdGVudHJ5LXRleHRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE3cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCJcbiAgfSxcbiAgXCIuZmFzdGVudHJ5LWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgzcHhcIlxuICB9LFxuICBcIi5mYXN0ZW50cnktdGlwc1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE3cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE3cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRjE0MDBcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3BzOiB7XG4gICAgbGlzdDogQXJyYXlcbiAgfSxcbiAgZGV0YWlsOiBmdW5jdGlvbiBkZXRhaWwodHlwZSkge1xuICAgIGlmICh0eXBlID09PSBcIuaOkuihjFwiKSB7XG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgICAgdXJpOiAnUGFnZV9QYWloYW5nJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdGVzdElkOiAndGVzdElkJ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwi6YO95biCXCIpIHtcbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICB1cmk6ICdQYWdlX0luX0J1aWxkJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwi54m55Lu3XCIpIHtcbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICB1cmk6ICdQYWdlX0luX0J1aWxkJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwi5YWN6LS5XCIpIHtcbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICB1cmk6ICdQYWdlX0luX0J1aWxkJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NfbGlzdF9tdWx0aS51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVjaGVuZ1xcXFxjb21wb25lbnRcXFxcY19saXN0X211bHRpLnV4IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVjaGVuZ1xcXFxjb21wb25lbnRcXFxcY19saXN0X211bHRpLnV4IS4vY19saXN0X211bHRpLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NfbGlzdF9tdWx0aS51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L211bHRpJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJtdWx0aS1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtdWx0aS1oZWFkXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm11bHRpLWhlYWQtbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhbm5lci50aXRsZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXVsdGktdG9waWNcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYW5uZXIudGltZV91cml9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm11bHRpLXRpbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibXVsdGktaGVhZC1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhbm5lci5saW5rfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtdWx0aS1saW5rXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyLmFycm93X3VyaX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXVsdGktYXJyb3dcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtdWx0aS1saXN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJtdWx0aS1wcm9kdWN0M1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwicm91dGVQYWdlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS51cml9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm11bHRpLWltYWdlM1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm11bHRpLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm11bHRpLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJtdWx0aS1zdWJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zcGVjaWFscHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bHRpLXNwZWNpYWxwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5vcmlnaW5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVsdGktb3JpZ2lucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5tdWx0aS1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIubXVsdGktaGVhZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCJcbiAgfSxcbiAgXCIubXVsdGktaGVhZC1sZWZ0XCI6IHtcbiAgICBcImFsaWduQ29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIubXVsdGktdG9waWNcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjQwLjZweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubXVsdGktdGltZVwiOiB7XG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTMwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM3cHhcIlxuICB9LFxuICBcIi5tdWx0aS1oZWFkLXJpZ2h0XCI6IHtcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIubXVsdGktbGlua1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4RDhEOERcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjlweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubXVsdGktYXJyb3dcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjcuMXB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5tdWx0aS1saXN0XCI6IHtcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxN3B4XCJcbiAgfSxcbiAgXCIubXVsdGktcHJvZHVjdDJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCI1MCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5tdWx0aS1pbWFnZTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjhweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjhweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zcHhcIlxuICB9LFxuICBcIi5tdWx0aS1wcm9kdWN0M1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIubXVsdGktaW1hZ2UzXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI4cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiXG4gIH0sXG4gIFwiLm11bHRpLXByb2R1Y3Q0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiMzMuMyVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5tdWx0aS1pbWFnZTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjhweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjhweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIubXVsdGktZGVzY3JpcHRpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLm11bHRpLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzNC45cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5tdWx0aS1zdWJ0aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC41LFxuICAgIFwiZm9udFNpemVcIjogXCIyMC44cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyNy4xcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5tdWx0aS1zcGVjaWFscHJpY2VcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmEyYTJkXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjIwLjhweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI3LjFweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLm11bHRpLW9yaWdpbnByaWNlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcImxpbmUtdGhyb3VnaFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyMC44cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyNy4xcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICBwcm9wczogWydiYW5uZXInLCAnbGlzdCcsICdudW0nXVxuICB9LFxuICByb3V0ZVBhZ2U6IGZ1bmN0aW9uIHJvdXRlUGFnZSh1cmwpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogXCIvUGFnZV9Cb29rZGV0YWlsc1wiXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9TaHVjaGVuZ1xcXFxjb21wb25lbnRcXFxcY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWNoZW5nXFxcXGNvbXBvbmVudFxcXFxjX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCEuL2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvc2h1Y2hlbmdfc3dpJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJzd2lwZXItY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic3dpcGVyLWhlYWRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3dpcGVyLWxlZnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYW5uZXIudGl0bGV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1tYWluLXRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN3aXBlci1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhbm5lci5saW5rfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItbGlua1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhbm5lci51cml9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1hcnJvd1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzd2lwZXItbGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInByb2RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItbGlzdC1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItc3RhY2tcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3aXBlci1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN3aXBlci10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnN3aXBlci1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnN3aXBlci1oZWFkXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1tYWluLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWxlZnRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5zd2lwZXItcmlnaHRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLWxpbmtcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4RDhEOERcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTRweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWFycm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjhweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3dpcGVyLXN0YWNrXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIxcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyM3B4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzMwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE4M3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cHhcIlxuICB9LFxuICBcIi5zd2lwZXItbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNjlweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE2cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zd2lwZXItbGlzdC1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zd2lwZXItaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEzOHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTdweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNXB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjdweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOHB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge31cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NfbGlzdF9zaW5nbGUudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfU2h1Y2hlbmdcXFxcY29tcG9uZW50XFxcXGNfbGlzdF9zaW5nbGUudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1NodWNoZW5nXFxcXGNvbXBvbmVudFxcXFxjX2xpc3Rfc2luZ2xlLnV4IS4vY19saXN0X3NpbmdsZS51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX2xpc3Rfc2luZ2xlLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvc2luZ2xlX2V2ZXJ5JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJzaW5nbGUtY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic3dpcGVyLWhlYWRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC50aXRsZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3dpcGVyLW1haW4tdGl0bGVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3dpcGVyLWxpbmtcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0LmFycm93fVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItYXJyb3dcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzaW5nbGUtbGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3QubGlzdH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzaW5nbGUtcHJvZHVjdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwicm91dGVQYWdlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnVyaX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNpbmdsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uYnJpZWZ9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1icmllZlwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtZGl2LWNsYXp6XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jbGF6en0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1jbGF6elwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuc2luZ2xlLWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnN3aXBlci1oZWFkXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1tYWluLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWxpbmtcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4RDhEOERcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLWFycm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjhweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWxpc3RcIjoge1xuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1wcm9kdWN0XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI3LjZweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1kZXNjcmlwdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjQzNHB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zaW5nbGUtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMTdweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjkwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI0MC42cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtYnJpZWZcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzQuOXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0OXB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLWJvdHRvbVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5zaW5nbGUtYXV0aG9yXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWRpdi1jbGF6elwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWNsYXp6XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2LjdweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI0cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4xKVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zcHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICBwcm9wczogWydsaXN0J11cbiAgfSxcbiAgcHJlc3M6IGZ1bmN0aW9uIHByZXNzKGl0ZW0pIHtcbiAgICBjb25zb2xlLmVycm9yKFwib24gcHJlc3MgZXZlbnQgcGFyYW0gOiBcIiArIGl0ZW0pO1xuICB9LFxuICByb3V0ZVBhZ2U6IGZ1bmN0aW9uIHJvdXRlUGFnZSh1cmwpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogXCIvUGFnZV9Cb29rZGV0YWlsc1wiXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX3JlY29tbWFuZExpc3QudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfU2h1Y2hlbmdcXFxcY29tcG9uZW50XFxcXGNfcmVjb21tYW5kTGlzdC51eCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfU2h1Y2hlbmdcXFxcY29tcG9uZW50XFxcXGNfcmVjb21tYW5kTGlzdC51eCEuL2NfcmVjb21tYW5kTGlzdC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX3JlY29tbWFuZExpc3QudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9yZWNvbW1hbmRsaXN0JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJtYWluXCIsXG4gICAgXCJtYWluX2NvblwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJlY29tbWVuZC10aXRsZVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZV90ZXh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pu05aSaXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGV4dF9tb3JlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLm9wZW5VcmwoJ21vcmVsaW5rJyxldnQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hcnJvd31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYXJyb3dcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGlzdF9jb250YWluZXJcIlxuICAgICAgXSxcbiAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yZWNvbW1hbmRsaXN0fSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFwcFVybFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibGlzdF9pdGVtX2NvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImxlZnRfaW1nXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5iYWNrZ3JvdW5kaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJtYWluXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1iZXJfbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubGlzdEl0ZW1zfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0SXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3QtaXRlbS11aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9wZW5VcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5SaWdodFwiOiBcIjE3cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaWR4KzF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0X2xpc3RfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiMzY0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodF9saXN0X3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5udW1iZXJfbGlzdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ1MHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucmlnaHRfbGlzdF90ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNiwyNiwyNiwxKVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIlxuICB9LFxuICBcIi5saXN0LWl0ZW0tdWlcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE2cHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjg0cHhcIlxuICB9LFxuICBcIi5saXN0X2NvbnRhaW5lclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMjBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTMuOHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTMuOHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIubGVmdF9pbWcgaW1hZ2VcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjE3cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMjE3cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjguM3B4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubGlzdF9pdGVtX2NvblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjUwcHhcIlxuICB9LFxuICBcIi5tb3JlX2xpbmtcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMDBweFwiXG4gIH0sXG4gIFwiLnRleHRfbW9yZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC41KVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNy4wOHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjdweFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJhdXRvXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgIFwiYmFja2dyb3VuZFJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiXG4gIH0sXG4gIFwiLnRpdGxlX3RleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5tYWluXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5tYWluX2NvblwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMzcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcHhcIlxuICB9LFxuICBcIi5hcnJvd1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE2cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjI4cHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnJlY29tbWVuZC10aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge30sXG4gIHByb3BzOiB7XG4gICAgcmVjb21tYW5kbGlzdDogQXJyYXksXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBtb3JlbGluazogU3RyaW5nLFxuICAgIGFycm93OiBTdHJpbmdcbiAgfSxcbiAgb3BlblVybDogZnVuY3Rpb24gb3BlblVybChlKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6IFwiXCJcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInNodWNoZW5nLWJveFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNodWNoZW5nLWJveC1vbmVcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwicmVhZGVyX21haW5fc2h1Y2hlbmdfY29tcG9uZW50X3NlYXJjaGJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNlYXJjaGJhclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoYmFyfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2h1Y2hlbmctYm94LXR3b1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzaHVjaGVuZ19zd2lwZXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzd2lwZXJkYXRhXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zd2lwZXJkYXRhfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2h1Y2hlbmctYm94LXRocmVlXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImZhc3RlbnRyeVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImxpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmZhc3RlbnRyeWxpc3R9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzaHVjaGVuZy1ib3gtZm91clwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzaW5nbGVfZXZlcnlcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ldmVyeWRheW9uZWJvb2t9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzaHVjaGVuZy1ib3gtZml2ZVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJtdWx0aVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImJhbm5lclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyMn0sXG4gICAgICAgICAgICBcImxpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGEyfSxcbiAgICAgICAgICAgIFwibnVtXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gM31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNodWNoZW5nLWJveC1zaXhcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic2luZ2xlX2V2ZXJ5XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdGJ5eW91cmVhZH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNodWNoZW5nLWJveC1zZXZlblwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzaHVjaGVuZ19zd2lcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdWJqZWN0bGlzdH0sXG4gICAgICAgICAgICBcImJhbm5lclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2h1Y2hlbmctYm94LWVpZ2h0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlY29tbWFuZGxpc3RcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJyZWNvbW1hbmRsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yZWNvbW1lbmRsaXN0Lmxpc3R9LFxuICAgICAgICAgICAgXCJhcnJvd1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVjb21tZW5kbGlzdC5hcnJvd2ltYWdlfSxcbiAgICAgICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlY29tbWVuZGxpc3QudGl0bGV9LFxuICAgICAgICAgICAgXCJtb3JlbGlua1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVjb21tZW5kbGlzdC5tb3JlbGlua31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNodWNoZW5nLWJveC1uaW5lXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm11bHRpXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiYmFubmVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYW5uZXIzfSxcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YTN9LFxuICAgICAgICAgICAgXCJudW1cIjogZnVuY3Rpb24gKCkge3JldHVybiA0fVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zaHVjaGVuZy1ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNodWNoZW5nLWJveC1vbmVcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzNnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzRweFwiXG4gIH0sXG4gIFwiLnNodWNoZW5nLWJveC1mb3VyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5zaHVjaGVuZy1ib3gtZml2ZVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIuc2h1Y2hlbmctYm94LXNpeFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIuc2h1Y2hlbmctYm94LXNldmVuXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5zaHVjaGVuZy1ib3gtZWlnaHRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgYmFpZHUgPSAnaHR0cHM6Ly93d3cuYmFpZHUuY29tJztcbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczogW10sXG4gIGRhdGE6IHtcbiAgICBzZWFyY2hiYXI6IFwiLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvaW1nL2Nfc2VhcmNoX3NlYXJjaC5wbmdcIixcbiAgICBzd2lwZXJkYXRhOiBbe1xuICAgICAgc3JjOiBcIi4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9iYW5uZXIvYmFubmVyMS5wbmdcIlxuICAgIH0sIHtcbiAgICAgIHNyYzogXCIuL3BhZ2UvUGFnZV9TaHVjaGVuZy9UT19ERUxFVEUvYmFubmVyL2Jhbm5lcjEucG5nXCJcbiAgICB9LCB7XG4gICAgICBzcmM6IFwiLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvVE9fREVMRVRFL2Jhbm5lci9iYW5uZXIxLnBuZ1wiXG4gICAgfV0sXG4gICAgZmFzdGVudHJ5bGlzdDogW3tcbiAgICAgICdpY29uJzogJy4vcGFnZS9QYWdlX1NodWNoZW5nL2ltZy9kdXNoaS5wbmcnLFxuICAgICAgJ3RpdGxlJzogJ+mDveW4gicsXG4gICAgICAnc3JjJzogJ2NpdHknLFxuICAgICAgJ2lzTmV3JzogZmFsc2VcbiAgICB9LCB7XG4gICAgICAnaWNvbic6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9pbWcvcGFpaGFuZy5wbmcnLFxuICAgICAgJ3RpdGxlJzogJ+aOkuihjCcsXG4gICAgICAnc3JjJzogJ3BhaWhhbmcnLFxuICAgICAgJ2lzTmV3JzogZmFsc2VcbiAgICB9LCB7XG4gICAgICAnaWNvbic6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9pbWcvdGVqaWEucG5nJyxcbiAgICAgICd0aXRsZSc6ICfnibnku7cnLFxuICAgICAgJ3NyYyc6ICd0ZWppYScsXG4gICAgICAnaXNOZXcnOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgICdpY29uJzogJy4vcGFnZS9QYWdlX1NodWNoZW5nL2ltZy9taWFuZmVpLnBuZycsXG4gICAgICAndGl0bGUnOiAn5YWN6LS5JyxcbiAgICAgICdzcmMnOiAnZnJlZScsXG4gICAgICAnaXNOZXcnOiBmYWxzZVxuICAgIH1dLFxuICAgIGV2ZXJ5ZGF5b25lYm9vazoge1xuICAgICAgdGl0bGU6IFwi5q+P5pel5LiA5LmmXCIsXG4gICAgICBzdWJ0aXRsZTogXCLmm7TlpJpcIixcbiAgICAgIGFycm93OiBcIi4vcGFnZS9QYWdlX1NodWNoZW5nL2ltZy9hcnJvdy5wbmdcIixcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHVyaTogJy4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9ldmVyeWRheUJvb2svZXZlcnlib29rLnBuZycsXG4gICAgICAgIHRpdGxlOiAn5a+E5L2Z55Sf5Lu75oiR5rGf5rW3JyxcbiAgICAgICAgYnJpZWY6ICfnu5PlqZrku7/kvZvph5HmvIbnmoTnrLzlrZDvvIznrLzlrZDlpJbpnaLnmoTpuJ/mg7PkvY/ov5vljrvvvIznrLzlhoXnmoTpuJ/mg7Ppo57lh7rmnaUnLFxuICAgICAgICBhdXRob3I6ICflrZ/lurcnLFxuICAgICAgICBjbGF6ejogWyflj6TlhbjniLHmg4UnLCAn5paH5a2mJ11cbiAgICAgIH1dXG4gICAgfSxcbiAgICBiYW5uZXIyOiB7XG4gICAgICB0aXRsZTogJ+S4uuS9oOaOqOiNkCcsXG4gICAgICBsaW5rOiAn5pu05aSaJyxcbiAgICAgIGFycm93X3VyaTogJy4vcGFnZS9QYWdlX1NodWNoZW5nL2ltZy9hcnJvdy5wbmcnXG4gICAgfSxcbiAgICBkYXRhMjogW3tcbiAgICAgIHVyaTogJy4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9yZWNvbW1lbmRGb3JZb3UvMS5wbmcnLFxuICAgICAgdGl0bGU6ICforr7orqHoibrmnK/lj7InLFxuICAgICAgc3VidGl0bGU6ICflkajplJAnXG4gICAgfSwge1xuICAgICAgdXJpOiAnLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvVE9fREVMRVRFL3JlY29tbWVuZEZvcllvdS8xLnBuZycsXG4gICAgICB0aXRsZTogJ+iDjOW9sScsXG4gICAgICBzdWJ0aXRsZTogJ+acseiHqua4hSdcbiAgICB9LCB7XG4gICAgICB1cmk6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9UT19ERUxFVEUvcmVjb21tZW5kRm9yWW91LzEucG5nJyxcbiAgICAgIHRpdGxlOiAn55So6K6+6K6h6Kej5Yaz6Zeu6aKYJyxcbiAgICAgIHN1YnRpdGxlOiAn6K6+6K6hJ1xuICAgIH0sIHtcbiAgICAgIHVyaTogJy4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9yZWNvbW1lbmRGb3JZb3UvMS5wbmcnLFxuICAgICAgdGl0bGU6ICfmtLvlvpfmnInotqMnLFxuICAgICAgc3VidGl0bGU6ICflkajlm73lubMnXG4gICAgfSwge1xuICAgICAgdXJpOiAnLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvVE9fREVMRVRFL3JlY29tbWVuZEZvcllvdS8xLnBuZycsXG4gICAgICB0aXRsZTogJ+WtpOeLrOaYr+S4gOeUn+eahOekvOeJqScsXG4gICAgICBzdWJ0aXRsZTogJ+S9meWFieS4rSdcbiAgICB9LCB7XG4gICAgICB1cmk6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9UT19ERUxFVEUvcmVjb21tZW5kRm9yWW91LzEucG5nJyxcbiAgICAgIHRpdGxlOiAn5bKb5bGxJyxcbiAgICAgIHN1YnRpdGxlOiAn5a6J5Lic5bC8J1xuICAgIH1dLFxuICAgIGxpc3RieXlvdXJlYWQ6IHtcbiAgICAgIHRpdGxlOiBcIuagueaNruS9oOivu+i/h+eahOS5puaOqOiNkFwiLFxuICAgICAgc3VidGl0bGU6IFwi5pu05aSaXCIsXG4gICAgICBhcnJvdzogXCIuL3BhZ2UvUGFnZV9TaHVjaGVuZy9pbWcvYXJyb3cucG5nXCIsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICB1cmk6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9UT19ERUxFVEUvcmVjb21tZW5kQnlSZWFkL3JlYWQxLnBuZycsXG4gICAgICAgIHRpdGxlOiAn5oOF5Lq6JyxcbiAgICAgICAgYnJpZWY6ICforrLov7DkuIDkuKrkuI3kvp3pmYTkuo7nlLfkurrjgIHmnInnu4/mtY7lrp7lipvmjInoh6rlt7HmhI/mhL/ljrvlsL3kuqvniLHmg4XkuYvnvo7nmoTnjrDku6PlpbPmgKfkv67lrZDnmoTmlYXkuovjgIInLFxuICAgICAgICBhdXRob3I6ICfmuKHovrnmt7PkuIAnLFxuICAgICAgICBjbGF6ejogWyflj6TlhbjniLHmg4UnLCAn5paH5a2mJywgJ+WkluWbvSddXG4gICAgICB9LCB7XG4gICAgICAgIHVyaTogJy4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9yZWNvbW1lbmRCeVJlYWQvcmVhZDEucG5nJyxcbiAgICAgICAgdGl0bGU6ICfmrKLkuZDpooInLFxuICAgICAgICBicmllZjogJ+a1t+W9kueahOmrmOeuoe+8jOWIneWFpeiBjOWcuueahOS5luS5luWls++8jOeKr+WCu+eahOWwj+iBjOWRmO+8jOiDoeWQjOmHjOS4jeiDveS9juS4i+WktOeahOWFrOS4u+WKoOS4iuWvjOS6jOS7o+eahOWwj+WluOWVhuOAgicsXG4gICAgICAgIGF1dGhvcjogJ+Wtn+W6tycsXG4gICAgICAgIGNsYXp6OiBbJ+WPpOWFuOeIseaDhSddXG4gICAgICB9LCB7XG4gICAgICAgIHVyaTogJy4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9yZWNvbW1lbmRCeVJlYWQvcmVhZDEucG5nJyxcbiAgICAgICAgdGl0bGU6ICfosaHniZnloZQnLFxuICAgICAgICBicmllZjogJ+a0u+WKqOeahOS4u+S9k+aYr+S6uu+8jOWNs+aLpeacieWPr+mihOa1i+ihjOS4uuS4lOWuueaYk+eKr+mUmeeahOS4quS9k+OAguazsOWLkuiusui/sOS6huS7luWwhuWwhue7p+e7remlv+S7juKAnOixoeeJmeWhlOKAneS4reW4puWbnueOsOWunuS5i+aXheOAgicsXG4gICAgICAgIGF1dGhvcjogJ+Wtn+W6tycsXG4gICAgICAgIGNsYXp6OiBbJ+aWh+WtpicsICflpJblm70nXVxuICAgICAgfV1cbiAgICB9LFxuICAgIGJhbm5lcjoge1xuICAgICAgdGl0bGU6ICfkuJPpopjmjqjojZAnLFxuICAgICAgbGluazogJ+abtOWkmicsXG4gICAgICB1cmk6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9pbWcvYXJyb3cucG5nJ1xuICAgIH0sXG4gICAgc3ViamVjdGxpc3Q6IFt7XG4gICAgICBpbWc6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9UT19ERUxFVEUvYmFubmVyL2Jhbm5lcjEucG5nJ1xuICAgIH0sIHtcbiAgICAgIGltZzogJy4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9iYW5uZXIvYmFubmVyMS5wbmcnXG4gICAgfSwge1xuICAgICAgaW1nOiAnLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvVE9fREVMRVRFL2Jhbm5lci9iYW5uZXIxLnBuZydcbiAgICB9XSxcbiAgICByZWNvbW1lbmRsaXN0OiB7XG4gICAgICB0aXRsZTogXCLmppzljZXmjqjojZBcIixcbiAgICAgIG1vcmU6IFwi5pu05aSaXCIsXG4gICAgICBhcnJvd2ltYWdlOiBcIi4vcGFnZS9QYWdlX1NodWNoZW5nL2ltZy9hcnJvdy5wbmdcIixcbiAgICAgIG1vcmVsaW5rOiBiYWlkdSxcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHJlY29tbWFuZFR5cGU6IFwi5paw5Lmm5qacXCIsXG4gICAgICAgIHR5cGVVcmw6IGJhaWR1LFxuICAgICAgICBiYWNrZ3JvdW5kaW1hZ2U6IFwiLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvaW1nL2ltYWdlMS5wbmdcIixcbiAgICAgICAgbGlzdEl0ZW1zOiBbe1xuICAgICAgICAgIG5hbWU6IFwi5oiR55qE5YmN5Y2K55SfXCIsXG4gICAgICAgICAgdXJsOiBiYWlkdVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogXCLoirHpl7Tpm4ZcIixcbiAgICAgICAgICB1cmw6IGJhaWR1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiBcIuWmguS9leWtpuS5oFwiLFxuICAgICAgICAgIHVybDogYmFpZHVcbiAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgcmVjb21tYW5kVHlwZTogXCLnlYXplIDmppxcIixcbiAgICAgICAgdHlwZVVybDogYmFpZHUsXG4gICAgICAgIGJhY2tncm91bmRpbWFnZTogXCIuL3BhZ2UvUGFnZV9TaHVjaGVuZy9pbWcvaW1hZ2UyLnBuZ1wiLFxuICAgICAgICBsaXN0SXRlbXM6IFt7XG4gICAgICAgICAgbmFtZTogXCLmiJHnmoTliY3ljYrnlJ9cIixcbiAgICAgICAgICB1cmw6IGJhaWR1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiBcIuiKsemXtOmbhlwiLFxuICAgICAgICAgIHVybDogYmFpZHVcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6IFwi5aaC5L2V5a2m5LmgXCIsXG4gICAgICAgICAgdXJsOiBiYWlkdVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9LFxuICAgIGJhbm5lcjM6IHtcbiAgICAgIHRpdGxlOiAn6ZmQ5pe254m55Lu3JyxcbiAgICAgIHRpbWVfdXJpOiAnLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvaW1nL3RpbWUucG5nJyxcbiAgICAgIGxpbms6ICfmm7TlpJonLFxuICAgICAgYXJyb3dfdXJpOiAnLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvaW1nL2Fycm93LnBuZydcbiAgICB9LFxuICAgIGRhdGEzOiBbe1xuICAgICAgdXJpOiAnLi9wYWdlL1BhZ2VfU2h1Y2hlbmcvVE9fREVMRVRFL3JlY29tbWVuZEZvcllvdS8xLnBuZycsXG4gICAgICB0aXRsZTogJ+iNieacrOakjeeJqeefpeivhicsXG4gICAgICBzcGVjaWFscHJpY2U6ICflhY3otLknLFxuICAgICAgb3JpZ2lucHJpY2U6ICcyMDAw6ZiF6aW8J1xuICAgIH0sIHtcbiAgICAgIHVyaTogJy4vcGFnZS9QYWdlX1NodWNoZW5nL1RPX0RFTEVURS9yZWNvbW1lbmRGb3JZb3UvMS5wbmcnLFxuICAgICAgdGl0bGU6ICforr7orqHkuK3nmoTorr7orqEnLFxuICAgICAgc3BlY2lhbHByaWNlOiAn5YWN6LS5JyxcbiAgICAgIG9yaWdpbnByaWNlOiAnMjAwMOmYhemlvCdcbiAgICB9LCB7XG4gICAgICB1cmk6ICcuL3BhZ2UvUGFnZV9TaHVjaGVuZy9UT19ERUxFVEUvcmVjb21tZW5kRm9yWW91LzEucG5nJyxcbiAgICAgIHRpdGxlOiAn6K6+6K6h6Im65pyv5Y+yJyxcbiAgICAgIHNwZWNpYWxwcmljZTogJ+WFjei0uScsXG4gICAgICBvcmlnaW5wcmljZTogJzIwMDDpmIXppbwnXG4gICAgfV1cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICBtZW51OiBmYWxzZVxuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/bmFtZT1yZWFkZXJfbWFpbl9jb21wb25lbnRfc2VhcmNoYmFyXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L3Bfbm92ZWxfbGlzdC51eD9uYW1lPW5vdmVsX2xpc3RcIilcbnZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX0ZlbmxlaVxcXFxpbmRleC51eCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfRmVubGVpXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9mZW5sZWknLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vQ29tcG9uZW50X1NlYXJjaEJhci51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9GZW5sZWlcXFxcY29tcG9uZW50XFxcXENvbXBvbmVudF9TZWFyY2hCYXIudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX0ZlbmxlaVxcXFxjb21wb25lbnRcXFxcQ29tcG9uZW50X1NlYXJjaEJhci51eCEuL0NvbXBvbmVudF9TZWFyY2hCYXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vQ29tcG9uZW50X1NlYXJjaEJhci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3JlYWRlcl9tYWluX2NvbXBvbmVudF9zZWFyY2hiYXInLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdl9zZWFyY2hcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9TZWFyY2hcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaGJhcn1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW1hZ2Vfc2VhcmNoXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwbGFjZV9ob2xkZXJcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5kaXZfc2VhcmNoXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcIndpZHRoXCI6IFwiNjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE3cHhcIlxuICB9LFxuICBcIi5wbGFjZV9ob2xkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC4zXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIHBsYWNlaG9sZGVyOiAn6K6+6K6h5Lit55qE6K6+6K6hJ1xuICB9LFxuICBwcm9wczogWyd1cmwnLCAnc2VhcmNoYmFyJ10sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge30sXG4gIGNsaWNrVG9TZWFyY2g6IGZ1bmN0aW9uIGNsaWNrVG9TZWFyY2goKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6ICcvUGFnZV9TZWFyY2gnXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9wX25vdmVsX2xpc3QudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfRmVubGVpXFxcXGNvbXBvbmVudFxcXFxwX25vdmVsX2xpc3QudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX0ZlbmxlaVxcXFxjb21wb25lbnRcXFxccF9ub3ZlbF9saXN0LnV4IS4vcF9ub3ZlbF9saXN0LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3Bfbm92ZWxfbGlzdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L25vdmVsX2xpc3QnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInNpbmdsZS1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2luZ2xlLWxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIml0ZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3R9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2luZ2xlLXByb2R1Y3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5nb1RvUGFnZSh0aGlzLiRpdGVtLGV2dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnByZXNlbnRhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWJyaWVmXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1hdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWRpdi1jbGF6elwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5vdmVsVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWNsYXp6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmV2YWx1YXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1jbGF6elwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zaW5nbGUtY29udGFpbmVyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnNpbmdsZS1saXN0XCI6IHtcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcIi5zaW5nbGUtZGVzY3JpcHRpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCI0MzRweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjE3cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIxN3B4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjExcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDAuNnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyNHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1icmllZlwiOiB7XG4gICAgXCJsaW5lc1wiOiAxLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMWExYVwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM0LjlweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDJweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1ib3R0b21cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWF1dGhvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcIm9wYWNpdHlcIjogMC41LFxuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNpbmdsZS1kaXYtY2xhenpcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1jbGF6elwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMwJVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcIm9wYWNpdHlcIjogMC41LFxuICAgIFwiZm9udFNpemVcIjogXCIxNi43cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyNXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDExOCwxMTgsMTE4LDAuMSlcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQuMnB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI2cHhcIlxuICB9LFxuICBcIi5saW5lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0LDM0LDUxLDAuMilcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICBwcm9wczogWydsaXN0J11cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fSxcbiAgZ29Ub1BhZ2U6IGZ1bmN0aW9uIGdvVG9QYWdlKGl0ZW0pIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogJy9QYWdlX0Jvb2tkZXRhaWxzJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpdGVtOiBpdGVtXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwibWFsbENsYXNzaWZpY2F0aW9uLWNvbnRlbnRcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnNjcmVlbkhlaWdodCkrJ3B4J31cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFsbENsYXNzaWZpY2F0aW9uLXdyYXBcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwicmVhZGVyX21haW5fY29tcG9uZW50X3NlYXJjaGJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInVybFwiOiBcIlBhZ2VfUmVjZW50U2VhcmNoXCIsXG4gICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wbGFjZWhvbGRlcn0sXG4gICAgICAgICAgICBcInNlYXJjaGJhclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoYmFyfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm1hbGxDbGFzc2lmaWNhdGlvbi1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbHRhYi1jb250ZW50XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGl0bGUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiQXJyYXl9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5kZXRhaWwodGhpcy4kaWR4LGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gW3RoaXMuY2xpY2tJbmRleD09PXRoaXMuJGlkeD8ndmVydGljYWx0YWItYWN0aXZlJzondmVydGljYWx0YWItdGV4dCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm1hbGxDbGFzc2lmaWNhdGlvbi1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibm92ZWxfbGlzdFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubm92ZWxBcnJheVt0aGlzLmNsaWNrSW5kZXhdLmxpc3R9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIubWFsbENsYXNzaWZpY2F0aW9uLWNvbnRlbnRcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLm1hbGxDbGFzc2lmaWNhdGlvbi13cmFwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjgzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzZweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjM0cHhcIlxuICB9LFxuICBcIi5tYWxsQ2xhc3NpZmljYXRpb24tbGVmdFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMDMpXCJcbiAgfSxcbiAgXCIudmVydGljYWx0YWItY29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE1MXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudmVydGljYWx0YWItdGV4dFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRhNGE0YVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudmVydGljYWx0YWItYWN0aXZlXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzNXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjY2QyMzI1XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5tYWxsQ2xhc3NpZmljYXRpb24tcmlnaHRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiLm1hbGxDbGFzc2lmaWNhdGlvbi10aXRsZVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1M3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzMuM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCJcbiAgfSxcbiAgXCIubWFsbENsYXNzaWZpY2F0aW9uLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZGV2aWNlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgc2VhcmNoYmFyOiBcIi4vcGFnZS9QYWdlX0ZlbmxlaS9pbWcvY19zZWFyY2hfc2VhcmNoLnBuZ1wiLFxuICAgIGFycm93OiBcIi4vcGFnZS9QYWdlX0ZlbmxlaS9pbWcvYXJyb3cucG5nXCIsXG4gICAgcGxhY2Vob2xkZXI6ICforr7orqHkuK3nmoTorr7orqEnLFxuICAgIHNjcmVlbkhlaWdodDogMCxcbiAgICB0YWJBcnJheTogW3tcbiAgICAgICd0aXRsZSc6ICfljoblj7InLFxuICAgICAgJ3NlbGVjdCc6IHRydWVcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAn5b+D55CGJyxcbiAgICAgICdzZWxlY3QnOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICfnpL7np5EnLFxuICAgICAgJ3NlbGVjdCc6IGZhbHNlXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ+WKseW/lycsXG4gICAgICAnc2VsZWN0JzogZmFsc2VcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAn546E5bm7JyxcbiAgICAgICdzZWxlY3QnOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICfoqIDmg4UnLFxuICAgICAgJ3NlbGVjdCc6IGZhbHNlXG4gICAgfV0sXG4gICAgY2xpY2tJbmRleDogMCxcbiAgICBub3ZlbEFycmF5OiBbe1xuICAgICAgdGl0bGU6IFwi5Y6G5Y+yXCIsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9yZWFkMS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+aYjuacnemCo+S6m+S6i+WEvycsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3JlYWQxLnBuZycsXG4gICAgICAgIHRpdGxlOiAn5LiJ5Zu95ryU5LmJJyxcbiAgICAgICAgcHJlc2VudGF0aW9uOiAn5oiR5Lus6L+Z5Liq5a6277yM5b6I5py057Sg77yb5oiR5Lus5LiJ5Liq5Lq677yM5b6I5Y2V57qv44CC5oiR5Lus5LiO5LiW5peg5rGC77yM5LiO5Lq65peg5LqJ77yM5Y+q5rGC55u46IGa5Zyo5LiA6LW377yM55u45a6I5Zyo5LiA6LW377yM5ZCE6Ieq5YGa5Yqb5omA6IO95Y+K55qE5LqL44CC56Kw5Yiw5Zuw6Zq+77yM5oiR5Lus5LiA5ZCM5om/5ouF77yM5Zuw6Zq+5bCx5LiN5aSN5Zuw6Zq+77yb5oiR5Lus55u45Ly055u45Yqp77yM5LiN6K665LuA5LmI6Ium5rap6Imw6L6b55qE5LqL77yM6YO96IO95Y+Y5b6X55Sc5ram44CC5oiR5Lus56iN5pyJ5LiA54K55b+r5LmQ77yM5Lmf5Lya5Y+Y5b6X6Z2e5bi45b+r5LmQ44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5Yy/5ZCNJyxcbiAgICAgICAgbm92ZWxUeXBlOiAn5paH5a2mJyxcbiAgICAgICAgZXZhbHVhdGlvbjogJzQuMSdcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcuL3BhZ2UvUGFnZV9GZW5sZWkvVE9fREVMRVRFL2xpc3QvcmVhZDEucG5nJyxcbiAgICAgICAgdGl0bGU6ICfljoblj7LnmoTnp4vlpKknLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9yZWFkMS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+WTgeivu+WOhuWPsi3lrosnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9yZWFkMS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S6jOWNgeWbm+WPsicsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3JlYWQxLnBuZycsXG4gICAgICAgIHRpdGxlOiAn5bmz5rCR5Y6G5Y+yJyxcbiAgICAgICAgcHJlc2VudGF0aW9uOiAn5oiR5Lus6L+Z5Liq5a6277yM5b6I5py057Sg77yb5oiR5Lus5LiJ5Liq5Lq677yM5b6I5Y2V57qv44CC5oiR5Lus5LiO5LiW5peg5rGC77yM5LiO5Lq65peg5LqJ77yM5Y+q5rGC55u46IGa5Zyo5LiA6LW377yM55u45a6I5Zyo5LiA6LW377yM5ZCE6Ieq5YGa5Yqb5omA6IO95Y+K55qE5LqL44CC56Kw5Yiw5Zuw6Zq+77yM5oiR5Lus5LiA5ZCM5om/5ouF77yM5Zuw6Zq+5bCx5LiN5aSN5Zuw6Zq+77yb5oiR5Lus55u45Ly055u45Yqp77yM5LiN6K665LuA5LmI6Ium5rap6Imw6L6b55qE5LqL77yM6YO96IO95Y+Y5b6X55Sc5ram44CC5oiR5Lus56iN5pyJ5LiA54K55b+r5LmQ77yM5Lmf5Lya5Y+Y5b6X6Z2e5bi45b+r5LmQ44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5Yy/5ZCNJyxcbiAgICAgICAgbm92ZWxUeXBlOiAn5paH5a2mJyxcbiAgICAgICAgZXZhbHVhdGlvbjogJzQuMSdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgdGl0bGU6IFwi5b+D55CGXCIsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICflv4PnkIbnvarkuYvnlLvlg48nLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICfniq/nvarlv4PnkIbmoaPmoYgnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICfplIDllK7kuK3nmoTlv4PnkIblraYnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICflv4PnkIbmsrvmhIjluIgnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICflv4PnkIbmsrvnlpcnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICB0aXRsZTogXCLnpL7np5FcIixcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+Wuh+WumeS5i+iwnCcsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+a2iOi0ueiAheihjOS4uuW/g+eQhuWtpicsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4reWbveekvuS8muWPkeWxleWPsicsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S6uuaWh+enkeWtpicsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+i9rOWQkeiusCcsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S8pueQhuenqeW6j+S4jumBk+W+t+eglOepticsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIHRpdGxlOiBcIuWKseW/l1wiLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgaW1hZ2U6ICcuL3BhZ2UvUGFnZV9GZW5sZWkvVE9fREVMRVRFL2xpc3QvcmVhZDEucG5nJyxcbiAgICAgICAgdGl0bGU6ICflirHlv5cnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9yZWFkMS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+WKseW/l+S4juWIm+WvjCcsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3JlYWQxLnBuZycsXG4gICAgICAgIHRpdGxlOiAn5Lyf5aSn55qE5Yqx5b+X5LmmJyxcbiAgICAgICAgcHJlc2VudGF0aW9uOiAn5oiR5Lus6L+Z5Liq5a6277yM5b6I5py057Sg77yb5oiR5Lus5LiJ5Liq5Lq677yM5b6I5Y2V57qv44CC5oiR5Lus5LiO5LiW5peg5rGC77yM5LiO5Lq65peg5LqJ77yM5Y+q5rGC55u46IGa5Zyo5LiA6LW377yM55u45a6I5Zyo5LiA6LW377yM5ZCE6Ieq5YGa5Yqb5omA6IO95Y+K55qE5LqL44CC56Kw5Yiw5Zuw6Zq+77yM5oiR5Lus5LiA5ZCM5om/5ouF77yM5Zuw6Zq+5bCx5LiN5aSN5Zuw6Zq+77yb5oiR5Lus55u45Ly055u45Yqp77yM5LiN6K665LuA5LmI6Ium5rap6Imw6L6b55qE5LqL77yM6YO96IO95Y+Y5b6X55Sc5ram44CC5oiR5Lus56iN5pyJ5LiA54K55b+r5LmQ77yM5Lmf5Lya5Y+Y5b6X6Z2e5bi45b+r5LmQ44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5Yy/5ZCNJyxcbiAgICAgICAgbm92ZWxUeXBlOiAn5paH5a2mJyxcbiAgICAgICAgZXZhbHVhdGlvbjogJzQuMSdcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcuL3BhZ2UvUGFnZV9GZW5sZWkvVE9fREVMRVRFL2xpc3QvcmVhZDEucG5nJyxcbiAgICAgICAgdGl0bGU6ICfpgIbmtYEnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9yZWFkMS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+iLpua1tycsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3JlYWQxLnBuZycsXG4gICAgICAgIHRpdGxlOiAn5oiW6ICF77yM5bCx5Li65LqG54G/54OCJyxcbiAgICAgICAgcHJlc2VudGF0aW9uOiAn5oiR5Lus6L+Z5Liq5a6277yM5b6I5py057Sg77yb5oiR5Lus5LiJ5Liq5Lq677yM5b6I5Y2V57qv44CC5oiR5Lus5LiO5LiW5peg5rGC77yM5LiO5Lq65peg5LqJ77yM5Y+q5rGC55u46IGa5Zyo5LiA6LW377yM55u45a6I5Zyo5LiA6LW377yM5ZCE6Ieq5YGa5Yqb5omA6IO95Y+K55qE5LqL44CC56Kw5Yiw5Zuw6Zq+77yM5oiR5Lus5LiA5ZCM5om/5ouF77yM5Zuw6Zq+5bCx5LiN5aSN5Zuw6Zq+77yb5oiR5Lus55u45Ly055u45Yqp77yM5LiN6K665LuA5LmI6Ium5rap6Imw6L6b55qE5LqL77yM6YO96IO95Y+Y5b6X55Sc5ram44CC5oiR5Lus56iN5pyJ5LiA54K55b+r5LmQ77yM5Lmf5Lya5Y+Y5b6X6Z2e5bi45b+r5LmQ44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5Yy/5ZCNJyxcbiAgICAgICAgbm92ZWxUeXBlOiAn5paH5a2mJyxcbiAgICAgICAgZXZhbHVhdGlvbjogJzQuMSdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgdGl0bGU6IFwi546E5bm7XCIsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICfmrabngrzlt4Xls7AnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICfpm6rpubDpoobkuLsnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICfliZHmnaUnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICflh6Hkurrkv67ku5nkvKAnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICfnpZ7lopMnLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJy4vcGFnZS9QYWdlX0ZlbmxlaS9UT19ERUxFVEUvbGlzdC9wX3dvcmQucG5nJyxcbiAgICAgICAgdGl0bGU6ICfpga7lpKknLFxuICAgICAgICBwcmVzZW50YXRpb246ICfmiJHku6zov5nkuKrlrrbvvIzlvojmnLTntKDvvJvmiJHku6zkuInkuKrkurrvvIzlvojljZXnuq/jgILmiJHku6zkuI7kuJbml6DmsYLvvIzkuI7kurrml6DkuonvvIzlj6rmsYLnm7jogZrlnKjkuIDotbfvvIznm7jlrojlnKjkuIDotbfvvIzlkIToh6rlgZrlipvmiYDog73lj4rnmoTkuovjgILnorDliLDlm7Dpmr7vvIzmiJHku6zkuIDlkIzmib/mi4XvvIzlm7Dpmr7lsLHkuI3lpI3lm7Dpmr7vvJvmiJHku6znm7jkvLTnm7jliqnvvIzkuI3orrrku4DkuYjoi6bmtqnoibDovpvnmoTkuovvvIzpg73og73lj5jlvpfnlJzmtqbjgILmiJHku6znqI3mnInkuIDngrnlv6vkuZDvvIzkuZ/kvJrlj5jlvpfpnZ7luLjlv6vkuZDjgIInLFxuICAgICAgICBhdXRob3I6ICfljL/lkI0nLFxuICAgICAgICBub3ZlbFR5cGU6ICfmloflraYnLFxuICAgICAgICBldmFsdWF0aW9uOiAnNC4xJ1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICB0aXRsZTogXCLoqIDmg4VcIixcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4ieeUn+S4ieS4licsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4ieeUn+S4ieS4licsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4ieeUn+S4ieS4licsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4ieeUn+S4ieS4licsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4ieeUn+S4ieS4licsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnLi9wYWdlL1BhZ2VfRmVubGVpL1RPX0RFTEVURS9saXN0L3BfYXJjX29mX3dhci5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4ieeUn+S4ieS4licsXG4gICAgICAgIHByZXNlbnRhdGlvbjogJ+aIkeS7rOi/meS4quWutu+8jOW+iOactOe0oO+8m+aIkeS7rOS4ieS4quS6uu+8jOW+iOWNlee6r+OAguaIkeS7rOS4juS4luaXoOaxgu+8jOS4juS6uuaXoOS6ie+8jOWPquaxguebuOiBmuWcqOS4gOi1t++8jOebuOWuiOWcqOS4gOi1t++8jOWQhOiHquWBmuWKm+aJgOiDveWPiueahOS6i+OAgueisOWIsOWbsOmavu+8jOaIkeS7rOS4gOWQjOaJv+aLhe+8jOWbsOmavuWwseS4jeWkjeWbsOmavu+8m+aIkeS7rOebuOS8tOebuOWKqe+8jOS4jeiuuuS7gOS5iOiLpua2qeiJsOi+m+eahOS6i++8jOmDveiDveWPmOW+l+eUnOa2puOAguaIkeS7rOeojeacieS4gOeCueW/q+S5kO+8jOS5n+S8muWPmOW+l+mdnuW4uOW/q+S5kOOAgicsXG4gICAgICAgIGF1dGhvcjogJ+WMv+WQjScsXG4gICAgICAgIG5vdmVsVHlwZTogJ+aWh+WtpicsXG4gICAgICAgIGV2YWx1YXRpb246ICc0LjEnXG4gICAgICB9XVxuICAgIH1dXG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgbWVudTogZmFsc2VcbiAgICB9KTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5nZXRJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIHZhciBoZWlnaHQgPSByZXQuc2NyZWVuSGVpZ2h0IC8gKHJldC5zY3JlZW5XaWR0aCAvIDc1MCk7XG4gICAgICAgIHRoYXQuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBkZXRhaWw6IGZ1bmN0aW9uIGRldGFpbChpbmRleCkge1xuICAgIHRoaXMuY2xpY2tJbmRleCA9IGluZGV4O1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NvbXBvbmVudF9zd2lwZXIudXg/bmFtZT1jb21wb25lbnRfc3dpcGVyXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4P25hbWU9c3dpXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXg/bmFtZT10aW5nc2h1X3NpbmdsZVwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX3RlYWNoZXJfbGlzdC51eD9uYW1lPXRlYWNoZXJsaXN0XCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfcmVjb21tZW5kX2F1ZGlvLnV4P25hbWU9YXVkaW9fY29tcG9uZW50XCIpXG52YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9UaW5nc2h1XFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9UaW5nc2h1XFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC90aW5nc2h1JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NvbXBvbmVudF9zd2lwZXIudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfVGluZ3NodVxcXFxjb21wb25lbnRcXFxcY29tcG9uZW50X3N3aXBlci51eCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfVGluZ3NodVxcXFxjb21wb25lbnRcXFxcY29tcG9uZW50X3N3aXBlci51eCEuL2NvbXBvbmVudF9zd2lwZXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY29tcG9uZW50X3N3aXBlci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2NvbXBvbmVudF9zd2lwZXInLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIml0ZW0tY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN3aXBlclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImF1dG9wbGF5XCI6IFwidHJ1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN3aXBlclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3JjfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3dpcGVyZGF0YX0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJnLWltYWdlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5pdGVtLWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjYwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2MHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3dpcGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjgzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwMHB4XCIsXG4gICAgXCJpbmRpY2F0b3JDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4yKVwiLFxuICAgIFwiaW5kaWNhdG9yU2VsZWN0ZWRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIi5iZy1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY4M3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MDBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTYuN3B4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICBwcm9wczogWydzd2lwZXJkYXRhJ10sXG4gIGRhdGE6IHt9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfVGluZ3NodVxcXFxjb21wb25lbnRcXFxcY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1RpbmdzaHVcXFxcY29tcG9uZW50XFxcXGNfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4IS4vY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9zd2knLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInN3aXBlci1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzd2lwZXItaGVhZFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzd2lwZXItbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhbm5lci50aXRsZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3dpcGVyLW1haW4tdGl0bGVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3dpcGVyLXJpZ2h0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyLmxpbmt9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1saW5rXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyLnVyaX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3dpcGVyLWFycm93XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInN3aXBlci1saXN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicHJvZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1saXN0LWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN3aXBlci1zdGFja1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN3aXBlci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuc3dpcGVyLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWhlYWRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLW1haW4tdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zd2lwZXItbGVmdFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1yaWdodFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5zd2lwZXItbGlua1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI3cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhEOEQ4RFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNHB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zd2lwZXItYXJyb3dcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyOHB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zd2lwZXItbGlzdC1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zd2lwZXItc3RhY2tcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjFweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI4cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIzcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5zd2lwZXItaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIzMzBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTg4cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1saXN0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiBcIjI2OXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTZweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTM4cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxN3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1cHhcIlxuICB9LFxuICBcIi5zd2lwZXItdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY19saXN0X3NpbmdsZS51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9UaW5nc2h1XFxcXGNvbXBvbmVudFxcXFxjX2xpc3Rfc2luZ2xlLnV4IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9NYWluXFxcXHBhZ2VcXFxcUGFnZV9UaW5nc2h1XFxcXGNvbXBvbmVudFxcXFxjX2xpc3Rfc2luZ2xlLnV4IS4vY19saXN0X3NpbmdsZS51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX2xpc3Rfc2luZ2xlLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvdGluZ3NodV9zaW5nbGUnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInNpbmdsZS1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzd2lwZXItaGVhZFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0LnRpdGxlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItbWFpbi10aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0LnN1YnRpdGxlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItbGlua1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3QuYXJyb3d9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1hcnJvd1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNpbmdsZS1saXN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5saXN0fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNpbmdsZS1wcm9kdWN0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJyb3V0ZVBhZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNpbmdsZS1sZWZ0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnVyaX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaGVhZHBob25lfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtaGVhZHBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNpbmdsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uYnJpZWZ9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1icmllZlwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtZGl2LWNsYXp6XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jbGF6en0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1jbGF6elwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuc2luZ2xlLWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnN3aXBlci1oZWFkXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1tYWluLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWxpbmtcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4RDhEOERcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLWFycm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjhweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWxpc3RcIjoge1xuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1wcm9kdWN0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjMwMHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLWRlc2NyaXB0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiNDM0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNpbmdsZS1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIxN3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyOTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtaGVhZHBob25lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIzNXB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI0MC42cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtYnJpZWZcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzQuOXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0OXB4XCIsXG4gICAgXCJsaW5lc1wiOiAzLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIlxuICB9LFxuICBcIi5zaW5nbGUtYm90dG9tXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLnNpbmdsZS1hdXRob3JcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zaW5nbGUtZGl2LWNsYXp6XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5zaW5nbGUtY2xhenpcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMTYuN3B4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjRweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjEpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjNweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIHByb3BzOiBbJ2xpc3QnXVxuICB9LFxuICBwcmVzczogZnVuY3Rpb24gcHJlc3MoaXRlbSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJvbiBwcmVzcyBldmVudCBwYXJhbSA6IFwiICsgaXRlbSk7XG4gIH0sXG4gIHJvdXRlUGFnZTogZnVuY3Rpb24gcm91dGVQYWdlKHVybCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgdXJpOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWxcIlxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY190ZWFjaGVyX2xpc3QudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfVGluZ3NodVxcXFxjb21wb25lbnRcXFxcY190ZWFjaGVyX2xpc3QudXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1RpbmdzaHVcXFxcY29tcG9uZW50XFxcXGNfdGVhY2hlcl9saXN0LnV4IS4vY190ZWFjaGVyX2xpc3QudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY190ZWFjaGVyX2xpc3QudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC90ZWFjaGVybGlzdCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwic2luZ2xlLWNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInN3aXBlci1oZWFkXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3QudGl0bGV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1tYWluLXRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3Quc3VidGl0bGV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1saW5rXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5hcnJvd31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3dpcGVyLWFycm93XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2luZ2xlLWxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0Lmxpc3R9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2luZ2xlLXByb2R1Y3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInJvdXRlUGFnZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2luZ2xlLWxlZnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXJpfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5oZWFkcGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1oZWFkcGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2luZ2xlLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5icmllZn1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWJyaWVmXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1ib3R0b21cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtYXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1kaXYtY2xhenpcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmNsYXp6fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWNsYXp6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zaW5nbGUtY29udGFpbmVyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzNHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWhlYWRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLW1haW4tdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zd2lwZXItbGlua1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI3cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhEOEQ4RFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE0cHhcIlxuICB9LFxuICBcIi5zd2lwZXItYXJyb3dcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyOHB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zaW5nbGUtbGlzdFwiOiB7XG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCIuc2luZ2xlLXByb2R1Y3RcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjUwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjhweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5zaW5nbGUtZGVzY3JpcHRpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCI0MzRweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2YyZjJmMlwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjhweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIxN3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtaGVhZHBob25lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2MHB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI0MC42cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtYnJpZWZcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzQuOXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJsaW5lc1wiOiAyLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIlxuICB9LFxuICBcIi5zaW5nbGUtYm90dG9tXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLnNpbmdsZS1hdXRob3JcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zaW5nbGUtZGl2LWNsYXp6XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5zaW5nbGUtY2xhenpcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMTYuN3B4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjRweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjEpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjNweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIHByb3BzOiBbJ2xpc3QnXVxuICB9LFxuICBwcmVzczogZnVuY3Rpb24gcHJlc3MoaXRlbSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJvbiBwcmVzcyBldmVudCBwYXJhbSA6IFwiICsgaXRlbSk7XG4gIH0sXG4gIHJvdXRlUGFnZTogZnVuY3Rpb24gcm91dGVQYWdlKHVybCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgdXJpOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWxcIlxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY19yZWNvbW1lbmRfYXVkaW8udXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfTWFpblxcXFxwYWdlXFxcXFBhZ2VfVGluZ3NodVxcXFxjb21wb25lbnRcXFxcY19yZWNvbW1lbmRfYXVkaW8udXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX01haW5cXFxccGFnZVxcXFxQYWdlX1RpbmdzaHVcXFxcY29tcG9uZW50XFxcXGNfcmVjb21tZW5kX2F1ZGlvLnV4IS4vY19yZWNvbW1lbmRfYXVkaW8udXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY19yZWNvbW1lbmRfYXVkaW8udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9hdWRpb19jb21wb25lbnQnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInJlY29tbWVuZC1hdWRpby1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlY29tbWVuZGF1ZGlvfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC1saXN0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LWxlZnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY29udGVudC1yaWdodFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImF1ZGlvLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImF1ZGlvLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnRpbWV1cmx9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiMzknNDVcXFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIucmVjb21tZW5kLWF1ZGlvLWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtbGlzdFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMzNweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuY29udGVudC1sZWZ0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCJcbiAgfSxcbiAgXCIuY29udGVudC1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjU2MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGMkYyRjJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmF1ZGlvLWRlc2NyaXB0aW9uXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVweFwiLFxuICAgIFwibGluZXNcIjogMSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIuYXVkaW8tdGltZVwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYXVkaW8tdGltZSBpbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjI1cHhcIlxuICB9LFxuICBcIi5hdWRpby10aW1lIHRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE1cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICBwcm9wczogWydyZWNvbW1lbmRhdWRpbyddXG4gIH0sXG4gIHByZXNzOiBmdW5jdGlvbiBwcmVzcyhpdGVtKSB7XG4gICAgY29uc29sZS5lcnJvcihcIm9uIHByZXNzIGV2ZW50IHBhcmFtIDogXCIgKyBpdGVtKTtcbiAgfSxcbiAgcm91dGVQYWdlOiBmdW5jdGlvbiByb3V0ZVBhZ2UodXJsKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6IFwiL1BhZ2VfSGVhcmluZ2RldGFpbFwiXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29tcG9uZW50MVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb21wb25lbnRfc3dpcGVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3dpcGVyZGF0YVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3dpcGVyZGF0YX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbXBvbmVudDJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3dpXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3ViamVjdGxpc3QxfSxcbiAgICAgICAgICAgIFwiYmFubmVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYW5uZXIxfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29tcG9uZW50M1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0aW5nc2h1X3NpbmdsZVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImxpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmV2ZXJ5ZGF5b25lYm9va31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbXBvbmVudDRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXVkaW9fY29tcG9uZW50XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kYXVkaW9cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlY29tbWVuZGF1ZGlvfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29tcG9uZW50NVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzd2lcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdWJqZWN0bGlzdDJ9LFxuICAgICAgICAgICAgXCJiYW5uZXJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhbm5lcjJ9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb21wb25lbnQ2XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRlYWNoZXJsaXN0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2luZ2xlTGlzdDF9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb21wb25lbnQ3XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRpbmdzaHVfc2luZ2xlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2luZ2xlTGlzdDJ9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCIuY29tcG9uZW50MVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuY29tcG9uZW50NFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIuY29tcG9uZW50NVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIuY29tcG9uZW50N1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBzd2lwZXJkYXRhOiBbe1xuICAgICAgc3JjOiBcIi9QYWdlX1RpbmdzaHUvVE9fREVMRVRFL2Jhbm5lcjEucG5nXCJcbiAgICB9LCB7XG4gICAgICBzcmM6IFwiL1BhZ2VfVGluZ3NodS9UT19ERUxFVEUvYmFubmVyMi5wbmdcIlxuICAgIH0sIHtcbiAgICAgIHNyYzogXCIvUGFnZV9UaW5nc2h1L1RPX0RFTEVURS9iYW5uZXIzLnBuZ1wiXG4gICAgfV0sXG4gICAgYmFubmVyMToge1xuICAgICAgdGl0bGU6ICfliIbnsbsnLFxuICAgICAgbGluazogJ+abtOWkmicsXG4gICAgICB1cmk6ICcvUGFnZV9UaW5nc2h1L2ltZy9hcnJvdy5wbmcnXG4gICAgfSxcbiAgICBzdWJqZWN0bGlzdDE6IFt7XG4gICAgICBpbWc6ICcvUGFnZV9UaW5nc2h1L1RPX0RFTEVURS9iYW5uZXIyLnBuZydcbiAgICB9LCB7XG4gICAgICBpbWc6ICcvUGFnZV9UaW5nc2h1L1RPX0RFTEVURS9iYW5uZXIxLnBuZydcbiAgICB9LCB7XG4gICAgICBpbWc6ICcvUGFnZV9UaW5nc2h1L1RPX0RFTEVURS9iYW5uZXIzLnBuZydcbiAgICB9XSxcbiAgICBldmVyeWRheW9uZWJvb2s6IHtcbiAgICAgIHRpdGxlOiBcIuavj+aXpeS4gOS5plwiLFxuICAgICAgc3VidGl0bGU6IFwi5pu05aSaXCIsXG4gICAgICBhcnJvdzogXCIvUGFnZV9UaW5nc2h1L2ltZy9hcnJvdy5wbmdcIixcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHVyaTogJy9QYWdlX1RpbmdzaHUvVE9fREVMRVRFLzIyMi5wbmcnLFxuICAgICAgICB0aXRsZTogJ+WQkOanveaYr+mXqOaJi+iJuicsXG4gICAgICAgIGJyaWVmOiAn44CK6ISx5Y+j56eA5aSn5Lya44CL77yM44CK5ZCQ5qe95aSn5Lya44CL5Y6f54+t5Lq66ams77yM6K+65pu85Y2a5aOr5o6i6K6o5LqG5oiR5Lus55qE55Sf5rS75Li65LuA5LmI6ZyA6KaB5aSN5p2C77yM6ICM5LiN5piv566A5Y2VJyxcbiAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgY2xheno6IFsnMTDkuIfkurrlnKjlkKwnXVxuICAgICAgfV1cbiAgICB9LFxuICAgIHJlY29tbWVuZGF1ZGlvOiBbe1xuICAgICAgJ2ltYWdlJzogXCIvUGFnZV9UaW5nc2h1L1RPX0RFTEVURS9hdWRpbzEucG5nXCIsXG4gICAgICAnY29udGVudCc6IFwi5ZCD5Ye65ryC5Lqu77ya5YGl5bq355m96aKG55qE5aWz5Lq66YO95Zac5qyi55qE576O5Li96aOf5ZOBXCIsXG4gICAgICAndGltZXVybCc6IFwiLi9pbWcvdGltZS5wbmdcIixcbiAgICAgICd0aW1lJzogJydcbiAgICB9LCB7XG4gICAgICAnaW1hZ2UnOiBcIi9QYWdlX1RpbmdzaHUvVE9fREVMRVRFL2F1ZGlvMi5wbmdcIixcbiAgICAgICdjb250ZW50JzogXCLlv73op4bpu5HlpKnpuYXnjrDosaHnmoTlpJblnKjmnLrliLZcIixcbiAgICAgICd0aW1ldXJsJzogXCIuL2ltZy90aW1lLnBuZ1wiLFxuICAgICAgJ3RpbWUnOiAnJ1xuICAgIH0sIHtcbiAgICAgICdpbWFnZSc6IFwiL1BhZ2VfVGluZ3NodS9UT19ERUxFVEUvYXVkaW8xLnBuZ1wiLFxuICAgICAgJ2NvbnRlbnQnOiBcIuaLkue7neS4u+mjn+ecn+eahOiDveWHj+iCpeWQl++8n1wiLFxuICAgICAgJ3RpbWV1cmwnOiBcIi4vaW1nL3RpbWUucG5nXCIsXG4gICAgICAndGltZSc6ICcnXG4gICAgfV0sXG4gICAgYmFubmVyMjoge1xuICAgICAgdGl0bGU6ICfmjpLooYzmppwnLFxuICAgICAgbGluazogJ+abtOWkmicsXG4gICAgICB1cmk6ICcvUGFnZV9UaW5nc2h1L2ltZy9hcnJvdy5wbmcnXG4gICAgfSxcbiAgICBzdWJqZWN0bGlzdDI6IFt7XG4gICAgICBpbWc6ICcvUGFnZV9UaW5nc2h1L1RPX0RFTEVURS9iYW5uZXIxLnBuZycsXG4gICAgICBoZWFkcGhvbmU6ICcvUGFnZV9UaW5nc2h1L2ltZy9oZWFkcGhvbmUucG5nJ1xuICAgIH0sIHtcbiAgICAgIGltZzogJy9QYWdlX1RpbmdzaHUvVE9fREVMRVRFL2Jhbm5lcjIucG5nJyxcbiAgICAgIGhlYWRwaG9uZTogJy9QYWdlX1RpbmdzaHUvaW1nL2hlYWRwaG9uZS5wbmcnXG4gICAgfSwge1xuICAgICAgaW1nOiAnL1BhZ2VfVGluZ3NodS9UT19ERUxFVEUvYmFubmVyMy5wbmcnLFxuICAgICAgaGVhZHBob25lOiAnL1BhZ2VfVGluZ3NodS9pbWcvaGVhZHBob25lLnBuZydcbiAgICB9XSxcbiAgICBzaW5nbGVMaXN0MToge1xuICAgICAgdGl0bGU6IFwi5aSn5ZKW5byA5aWWXCIsXG4gICAgICBzdWJ0aXRsZTogXCLmm7TlpJpcIixcbiAgICAgIGFycm93OiBcIi9QYWdlX1RpbmdzaHUvaW1nL2Fycm93LnBuZ1wiLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgdXJpOiAnL1BhZ2VfVGluZ3NodS9UT19ERUxFVEUvaW1hZ2UxLnBuZycsXG4gICAgICAgIGhlYWRwaG9uZTogJy9QYWdlX1RpbmdzaHUvaW1nL2hlYWRwaG9uZS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4mue7qeWAjeWinu+8jOmhtue6p+mUgOWUrueJueiureiQpScsXG4gICAgICAgIGJyaWVmOiAn6K6y6L+w5LiA5Liq5LiN5L6d6ZmE5LqO55S35Lq644CB5pyJ57uP5rWO5a6e5Yqb5oyJ6Ieq5bex5oSP5oS/5Y675bC95Lqr44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5Lu757+U6aOeJyxcbiAgICAgICAgY2xheno6IFsnMTPkuIfkurrmkq3mlL4nLCAn6L+e6L295LitJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdXJpOiAnL1BhZ2VfVGluZ3NodS9UT19ERUxFVEUvaW1hZ2UxLnBuZycsXG4gICAgICAgIGhlYWRwaG9uZTogJy9QYWdlX1RpbmdzaHUvaW1nL2hlYWRwaG9uZS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+eZvuS6v0NFT+eahOWVhuaImOivvuWggicsXG4gICAgICAgIGJyaWVmOiAn5rW35b2S55qE6auY566h77yM5Yid5YWl6IGM5Zy655qE5LmW5LmW5aWz77yM54qv5YK755qE5bCP6IGM5ZGY77yM6IOh5ZCM6YeM44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5a2Z57un5LicJyxcbiAgICAgICAgY2xheno6IFsnMTPkuIfkurrmkq3mlL4nLCAn6L+e6L295LitJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdXJpOiAnL1BhZ2VfVGluZ3NodS9UT19ERUxFVEUvaW1hZ2UxLnBuZycsXG4gICAgICAgIGhlYWRwaG9uZTogJy9QYWdlX1RpbmdzaHUvaW1nL2hlYWRwaG9uZS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+W5uOemj+enmOesiOmAmuW+gOe+jua7oeWutuW6rScsXG4gICAgICAgIGJyaWVmOiAn5rS75Yqo55qE5Li75L2T5piv5Lq677yM5Y2z5oul5pyJ5Y+v6aKE5rWL6KGM5Li65LiU5a655piT54qv6ZSZ55qE5Liq5L2T44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5rW35qOgJyxcbiAgICAgICAgY2xheno6IFsnMTPkuIfkurrmkq3mlL4nLCAn6L+e6L295LitJ11cbiAgICAgIH1dXG4gICAgfSxcbiAgICBzaW5nbGVMaXN0Mjoge1xuICAgICAgdGl0bGU6IFwi546E5bm757K+5ZOBXCIsXG4gICAgICBzdWJ0aXRsZTogXCLmm7TlpJpcIixcbiAgICAgIGFycm93OiBcIi9QYWdlX1RpbmdzaHUvaW1nL2Fycm93LnBuZ1wiLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgdXJpOiAnL1BhZ2VfVGluZ3NodS9UT19ERUxFVEUvNDQucG5nJyxcbiAgICAgICAgaGVhZHBob25lOiAnL1BhZ2VfVGluZ3NodS9pbWcvaGVhZHBob25lLnBuZycsXG4gICAgICAgIHRpdGxlOiAn56We5aKTJyxcbiAgICAgICAgYnJpZWY6ICfor6Xkuabku6XkuLvop5LovrDljZflr7vmib7kuIflubTliY3niLHkurrpm6jppqjjgIHov73ntKLnpZ7prZTnga3kuqHpgZfnp5jnmoTooYzov7nkuLrnur/ntKLvvIzlvJXlh7rmtanojKvlha3pgZPjgIHlpKnlnLDmo4vlsYDvvIzmvJTnu47lh7rkuIDpg6jlhYXmu6Hng63ooYDjgIHlo67ng4jjgIHlh4Tnvo7nmoTkvKDlpYcs5Y+v6LCT572R57uc5bCP6K+05Lit5LyY6Imv5LmL5ZOB44CCJyxcbiAgICAgICAgYXV0aG9yOiAn6L6w5LicJyxcbiAgICAgICAgY2xheno6IFsn572R5paHJywgJ+Wwj+ivtCddXG4gICAgICB9LCB7XG4gICAgICAgIHVyaTogJy9QYWdlX1RpbmdzaHUvVE9fREVMRVRFLzQ0LnBuZycsXG4gICAgICAgIGhlYWRwaG9uZTogJy9QYWdlX1RpbmdzaHUvaW1nL2hlYWRwaG9uZS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+ivm+S7mScsXG4gICAgICAgIGJyaWVmOiAn6K+l5Lmm5Lul5Li76KeS6L6w5Y2X5a+75om+5LiH5bm05YmN54ix5Lq66Zuo6aao44CB6L+957Si56We6a2U54Gt5Lqh6YGX56eY55qE6KGM6L+55Li657q/57Si77yM5byV5Ye65rWp6Iyr5YWt6YGT44CB5aSp5Zyw5qOL5bGA77yM5ryU57uO5Ye65LiA6YOo5YWF5ruh54Ot6KGA44CB5aOu54OI44CB5YeE576O55qE5Lyg5aWHLOWPr+iwk+e9kee7nOWwj+ivtOS4reS8mOiJr+S5i+WTgeOAgicsXG4gICAgICAgIGF1dGhvcjogJ+iQp+m8jicsXG4gICAgICAgIGNsYXp6OiBbJ+e9keaWhycsICflsI/or7QnXVxuICAgICAgfSwge1xuICAgICAgICB1cmk6ICcvUGFnZV9UaW5nc2h1L1RPX0RFTEVURS80NC5wbmcnLFxuICAgICAgICBoZWFkcGhvbmU6ICcvUGFnZV9UaW5nc2h1L2ltZy9oZWFkcGhvbmUucG5nJyxcbiAgICAgICAgdGl0bGU6ICfmlpfnoLToi43nqbknLFxuICAgICAgICBicmllZjogJ+ivpeS5puS7peS4u+inkui+sOWNl+Wvu+aJvuS4h+W5tOWJjeeIseS6uumbqOmmqOOAgei/vee0ouelnumtlOeBreS6oemBl+enmOeahOihjOi/ueS4uue6v+e0ou+8jOW8leWHuua1qeiMq+WFremBk+OAgeWkqeWcsOaji+WxgO+8jOa8lOe7juWHuuS4gOmDqOWFhea7oeeDreihgOOAgeWjrueDiOOAgeWHhOe+jueahOS8oOWlhyzlj6/osJPnvZHnu5zlsI/or7TkuK3kvJjoia/kuYvlk4HjgIInLFxuICAgICAgICBhdXRob3I6ICflpKnompXlnJ/osYYnLFxuICAgICAgICBjbGF6ejogWyfnvZHmlocnLCAn5bCP6K+0J11cbiAgICAgIH1dXG4gICAgfVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHQ6ICflkKzkuaYnLFxuICAgICAgdGV4dENvbG9yOiAnIyMxQTFBMUEnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDIsMjQyLDI0MiwwLjk1KScsXG4gICAgICBtZW51OiB0cnVlXG4gICAgfSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0YWJzXCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2hhbmdlXCI6IFwic3dpdGNoQ29udGVudFwiXG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0YWItY29udGVudFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2h1Y2hlbmdcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJmZW5sZWlcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJmZW5sZWlcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJzaHVqaWFcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcImZvb1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZm9vfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGFiLWJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YXMubGlzdH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRhYi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zaG93P3RoaXMuJGl0ZW0ucGljX2Nob2ljZTp0aGlzLiRpdGVtLnBpY31cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnNob3d9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2UtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc2hvdz90aGlzLiRpdGVtLnBpY19jaG9pY2U6dGhpcy4kaXRlbS5waWN9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMuJGl0ZW0uc2hvd30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZS1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi50YWJzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLnRhYi1jb250ZW50XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIudGFiLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE3MC44cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwNC4ycHhcIlxuICB9LFxuICBcIi5pbWFnZS1hY3RpdmVcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MHB4XCIsXG4gICAgXCJyZXNpemVNb2RlXCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiLmltYWdlLW5vcm1hbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjUwcHhcIixcbiAgICBcInJlc2l6ZU1vZGVcIjogXCJjb250YWluXCJcbiAgfSxcbiAgXCIudGFiLWl0ZW0gdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwLjhweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiLFxuICAgIFwiZm9udFNpemU6YWN0aXZlXCI6IFwiMjFweFwiLFxuICAgIFwiY29sb3I6YWN0aXZlXCI6IFwiI2NkMjMyNVwiLFxuICAgIFwibWFyZ2luVG9wOmFjdGl2ZVwiOiBcIjZweFwiLFxuICAgIFwidGV4dEFsaWduOmFjdGl2ZVwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLm1haW50YWItc2hhZG93LWJvdHRvbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjIwcHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFsnZGF0YXMnXSxcbiAgZGF0YToge1xuICAgIGZvbzogdHJ1ZSxcbiAgICBhcnJheToge1xuICAgICAgY29sb3Jfbm9ybWFsOiAnIzFBMUExQScsXG4gICAgICBjb2xvcl9hY3RpdmU6ICcjQ0QyMzI1JyxcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHRpdGxlOiAn5o6o6I2QJyxcbiAgICAgICAgc2hvd19saW5lOiBmYWxzZSxcbiAgICAgICAgY29sb3I6ICcjMUExQTFBJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+eOhOW5uycsXG4gICAgICAgIHNob3dfbGluZTogZmFsc2UsXG4gICAgICAgIGNvbG9yOiAnIzFBMUExQSdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfmrabkvqAnLFxuICAgICAgICBzaG93X2xpbmU6IGZhbHNlLFxuICAgICAgICBjb2xvcjogJyMxQTFBMUEnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn6KiA5oOFJyxcbiAgICAgICAgc2hvd19saW5lOiBmYWxzZSxcbiAgICAgICAgY29sb3I6ICcjMUExQTFBJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+WOhuWPsicsXG4gICAgICAgIHNob3dfbGluZTogZmFsc2UsXG4gICAgICAgIGNvbG9yOiAnIzFBMUExQSdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICflrqvlu7cnLFxuICAgICAgICBzaG93X2xpbmU6IGZhbHNlLFxuICAgICAgICBjb2xvcjogJyMxQTFBMUEnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn56eR5bm7JyxcbiAgICAgICAgc2hvd19saW5lOiBmYWxzZSxcbiAgICAgICAgY29sb3I6ICcjMUExQTFBJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+aCrOeWkScsXG4gICAgICAgIHNob3dfbGluZTogZmFsc2UsXG4gICAgICAgIGNvbG9yOiAnIzFBMUExQSdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICflhL/nq6UnLFxuICAgICAgICBzaG93X2xpbmU6IGZhbHNlLFxuICAgICAgICBjb2xvcjogJyMxQTFBMUEnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5Yqx5b+XJyxcbiAgICAgICAgc2hvd19saW5lOiBmYWxzZSxcbiAgICAgICAgY29sb3I6ICcjMUExQTFBJ1xuICAgICAgfV1cbiAgICB9XG4gIH0sXG4gIHN3aXRjaENvbnRlbnQ6IGZ1bmN0aW9uIHN3aXRjaENvbnRlbnQoZSkge1xuICAgIHZhciBpbmRleCA9IGUuaW5kZXg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmRhdGFzLmxpc3RbaV07XG4gICAgICBlbGVtZW50LnNob3cgPSBmYWxzZTtcblxuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgIGVsZW1lbnQuc2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInLFxuICAgICAgICAgIHRleHQ6ICfpmIXor7snLFxuICAgICAgICAgIG1lbnU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsb25ncHJlc3M6IGZ1bmN0aW9uIGxvbmdwcmVzcyhfbG9uZ3ByZXNzKSB7XG4gICAgdGhpcy5zaG93VGFicyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0NlY2tib3ggPSB0cnVlO1xuXG4gICAgX2xvbmdwcmVzcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcbiAgdW5DZWNrZWQ6IGZ1bmN0aW9uIHVuQ2Vja2VkKCkge1xuICAgIHRoaXMuc2hvd0NlY2tib3ggPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUYWJzID0gdHJ1ZTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImZpeGVkbWFpbnRhYlwiLFxuICBcImF0dHJcIjoge1xuICAgIFwiZGF0YXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFzfVxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7fSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFzOiB7XG4gICAgICAgIGNvbG9yX25vcm1hbDogJyM4Nzg3ODcnLFxuICAgICAgICBjb2xvcl9hY3RpdmU6ICcjRkY3NTAwJyxcbiAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICBpOiAxLFxuICAgICAgICAgIGNvbG9yOiAnIzg3ODc4NycsXG4gICAgICAgICAgcGljOiAnLi9pbWcvc2h1Y2hlbmcucG5nJyxcbiAgICAgICAgICBwaWNfY2hvaWNlOiAnLi9pbWcvY2xpY2tlZC1zaHVjaGVuZy5wbmcnLFxuICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgIHRpdGxlOiAn6aaW6aG1J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaTogMyxcbiAgICAgICAgICBjb2xvcjogJyM4Nzg3ODcnLFxuICAgICAgICAgIHBpYzogJy4vaW1nL2ZlbmxlaS5wbmcnLFxuICAgICAgICAgIHBpY19jaG9pY2U6ICcuL2ltZy9jbGlja2VkLWZlbmxlaS5wbmcnLFxuICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgIHRpdGxlOiAn5YiG57G7J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaTogMixcbiAgICAgICAgICBjb2xvcjogJyM4Nzg3ODcnLFxuICAgICAgICAgIHBpYzogJy4vaW1nL3RpbmdzaHUucG5nJyxcbiAgICAgICAgICBwaWNfY2hvaWNlOiAnLi9pbWcvY2xpY2tlZC10aW5nc2h1LnBuZycsXG4gICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgdGl0bGU6ICfpo5/mnZAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpOiA0LFxuICAgICAgICAgIGNvbG9yOiAnIzg3ODc4NycsXG4gICAgICAgICAgcGljOiAnLi9pbWcvd29kZS5wbmcnLFxuICAgICAgICAgIHBpY19jaG9pY2U6ICcuL2ltZy9jbGlja2VkLXdvZGUucG5nJyxcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICB0aXRsZTogJ+aUtuiXjydcbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicsXG4gICAgICB0ZXh0OiAn6ICD5ouJ6I+c6LCxJyxcbiAgICAgIG1lbnU6IHRydWVcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTEE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==