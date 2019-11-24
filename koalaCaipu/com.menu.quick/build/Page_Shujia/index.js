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
/******/ 	return __webpack_require__(__webpack_require__.s = 295);
/******/ })
/************************************************************************/
/******/ ({

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(296)
__webpack_require__(300)
var $app_template$ = __webpack_require__(304)
var $app_style$ = __webpack_require__(305)
var $app_script$ = __webpack_require__(306)

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

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(297)
var $app_style$ = __webpack_require__(298)
var $app_script$ = __webpack_require__(299)

$app_define$('@app-component/reader_shujia_component_searchbar', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 297:
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

/***/ 298:
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

/***/ 299:
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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(301)
var $app_style$ = __webpack_require__(302)
var $app_script$ = __webpack_require__(303)

$app_define$('@app-component/shujia_list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 301:
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
                            "backgroundImage": function () {return this.img.bookType1}
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
                            "backgroundImage": function () {return this.img.bookType2}
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

/***/ 302:
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
    "backgroundImage": "/Page_Shujia/img/shujia.png",
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

/***/ 303:
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
            testId: 'testId'
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

/***/ 304:
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
          "type": "reader_shujia_component_searchbar",
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

/***/ 305:
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

/***/ 306:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['foo'],
  data: {
    foo: true,
    list: [{
      "image": "TO_DELETE/1.png",
      "name": "one",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/2.png",
      "name": "two",
      "selectImage": false,
      "bookType1": "shidu",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/1.png",
      "name": "three",
      "selectImage": false,
      "bookType1": "update",
      "bookType2": "tingshu"
    }, {
      "image": "TO_DELETE/2.png",
      "name": "four",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/1.png",
      "name": "five",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "tingshu"
    }, {
      "image": "TO_DELETE/2.png",
      "name": "six",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/1.png",
      "name": "seven",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/2.png",
      "name": "eight",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/1.png",
      "name": "nine",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/2.png",
      "name": "ten",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/2.png",
      "name": "eight",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/1.png",
      "name": "nine",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }, {
      "image": "TO_DELETE/2.png",
      "name": "ten",
      "selectImage": false,
      "bookType1": "no",
      "bookType2": "novel"
    }],
    checkedList: [{
      i: 0,
      color: '#878787',
      image: 'img/delete.png',
      title: '删除'
    }, {
      i: 2,
      color: '#878787',
      image: 'img/share.png',
      title: '分享'
    }, {
      i: 3,
      color: '#878787',
      image: 'img/all.png',
      title: '全选'
    }],
    img: {
      closeImage: "img/icon_close.png",
      noSelect: "img/no_select.png",
      select: "img/select.png",
      bookType1: "img/image1.png",
      bookType2: "img/headphone.png",
      shujiaLine: "img/shujia.png"
    },
    searchbar: "img/c_search_search.png"
  },
  onInit: function onInit() {
    if (!this.foo) {
      this.foo = false;
    }

    this.$page.setTitleBar({
      text: '书架',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFBhZ2VfU2h1amlhXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZTovcXVpY2thcHAva29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvUGFnZV9TaHVqaWEvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vL2U6L3F1aWNrYXBwL2tvYWxhQ2FpcHUvY29tLm1lbnUucXVpY2svc3JjL1BhZ2VfU2h1amlhL2NvbXBvbmVudC9Db21wb25lbnRfU2VhcmNoQmFyLnV4Iiwid2VicGFjazovLy9lOi9xdWlja2FwcC9rb2FsYUNhaXB1L2NvbS5tZW51LnF1aWNrL3NyYy9QYWdlX1NodWppYS9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eD81NjcyIiwid2VicGFjazovLy9lOi9xdWlja2FwcC9rb2FsYUNhaXB1L2NvbS5tZW51LnF1aWNrL3NyYy9QYWdlX1NodWppYS9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eD85ZDU3Iiwid2VicGFjazovLy9lOi9xdWlja2FwcC9rb2FsYUNhaXB1L2NvbS5tZW51LnF1aWNrL3NyYy9QYWdlX1NodWppYS9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eD80NDllIiwid2VicGFjazovLy9lOi9xdWlja2FwcC9rb2FsYUNhaXB1L2NvbS5tZW51LnF1aWNrL3NyYy9QYWdlX1NodWppYS9jb21wb25lbnQvY19zaHVqaWFfbGlzdC51eCIsIndlYnBhY2s6Ly8vZTovcXVpY2thcHAva29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvUGFnZV9TaHVqaWEvY29tcG9uZW50L2Nfc2h1amlhX2xpc3QudXg/YTk4NyIsIndlYnBhY2s6Ly8vZTovcXVpY2thcHAva29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvUGFnZV9TaHVqaWEvY29tcG9uZW50L2Nfc2h1amlhX2xpc3QudXg/Yzc0NSIsIndlYnBhY2s6Ly8vZTovcXVpY2thcHAva29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvUGFnZV9TaHVqaWEvY29tcG9uZW50L2Nfc2h1amlhX2xpc3QudXg/MzgzZCIsIndlYnBhY2s6Ly8vZTovcXVpY2thcHAva29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvUGFnZV9TaHVqaWEvaW5kZXgudXg/NzQ3OSIsIndlYnBhY2s6Ly8vZTovcXVpY2thcHAva29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvUGFnZV9TaHVqaWEvaW5kZXgudXg/ZjAyYyIsIndlYnBhY2s6Ly8vZTovcXVpY2thcHAva29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvUGFnZV9TaHVqaWEvaW5kZXgudXg/OGJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjk1KTtcbiIsInJlcXVpcmUoXCIhIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxsb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eD9uYW1lPXJlYWRlcl9zaHVqaWFfY29tcG9uZW50X3NlYXJjaGJhclwiKVxucmVxdWlyZShcIiEhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGxvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX3NodWppYV9saXN0LnV4P25hbWU9c2h1amlhX2xpc3RcIilcbnZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtdGVtcGxhdGUtbG9hZGVyLmpzIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtanNvbi1sb2FkZXIuanMhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX1NodWppYVxcXFxpbmRleC51eCFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfU2h1amlhXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc2NyaXB0LWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtYWNjZXNzLWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4xLjAtU3RhYmxlLjMwMCd9KSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtdGVtcGxhdGUtbG9hZGVyLmpzIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL0NvbXBvbmVudF9TZWFyY2hCYXIudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfU2h1amlhXFxcXGNvbXBvbmVudFxcXFxDb21wb25lbnRfU2VhcmNoQmFyLnV4IWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9TaHVqaWFcXFxcY29tcG9uZW50XFxcXENvbXBvbmVudF9TZWFyY2hCYXIudXghLi9Db21wb25lbnRfU2VhcmNoQmFyLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXNjcmlwdC1sb2FkZXIuanMhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWFjY2Vzcy1sb2FkZXIuanMhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL0NvbXBvbmVudF9TZWFyY2hCYXIudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9yZWFkZXJfc2h1amlhX2NvbXBvbmVudF9zZWFyY2hiYXInLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdl9zZWFyY2hcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9TZWFyY2hcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaGJhcn1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW1hZ2Vfc2VhcmNoXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwbGFjZV9ob2xkZXJcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5kaXZfc2VhcmNoXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcIndpZHRoXCI6IFwiNjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE3cHhcIlxuICB9LFxuICBcIi5wbGFjZV9ob2xkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC4zXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge1xuICAgIHBsYWNlaG9sZGVyOiAn6K6+6K6h5Lit55qE6K6+6K6hJ1xuICB9LFxuICBwcm9wczogWydzZWFyY2hiYXInXSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fSxcbiAgY2xpY2tUb1NlYXJjaDogZnVuY3Rpb24gY2xpY2tUb1NlYXJjaCgpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogJy9QYWdlX1NlYXJjaCdcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS10ZW1wbGF0ZS1sb2FkZXIuanMhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY19zaHVqaWFfbGlzdC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxzcmNcXFxcUGFnZV9TaHVqaWFcXFxcY29tcG9uZW50XFxcXGNfc2h1amlhX2xpc3QudXghZDpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX1NodWppYVxcXFxjb21wb25lbnRcXFxcY19zaHVqaWFfbGlzdC51eCEuL2Nfc2h1amlhX2xpc3QudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc2NyaXB0LWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtYWNjZXNzLWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFkOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY19zaHVqaWFfbGlzdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3NodWppYV9saXN0JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJzaHVqaWEtbGlzdFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNodWppYS1ib3gtdG9wXCJcbiAgICAgIF0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMuZm9vfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2xvc2VfaW1nXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbG9jZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLmNsb3NlSW1hZ2V9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRvcFRpdGxlfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0b3BfdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaHVqaWFyb3dzfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gW3RoaXMuJGlkeD09dGhpcy5zaHVqaWFyb3dzLmxlbmd0aC0xPydsYXN0LWxpc3Qtcm93JzonbGlzdC1yb3cnXX0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNodWppYS1ib29rc1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZXhwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbX0sXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImJ0bmNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VfZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiYnRuY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNsaWNrVG9SZWFkKHRoaXMudmFsdWUsZXZ0KX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb25ncHJlc3NcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmxvbmdQcmVzcyh0aGlzLnZhbHVlLGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdF9ib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuc2VsZWN0KHRoaXMudmFsdWUsZXZ0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaG93Q2hlY2tCb3h9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLm5vU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RfYm94X2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy52YWx1ZS5zZWxlY3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbWcuc2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RfYm94X2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlLnNlbGVjdEltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZS5ib29rVHlwZTEhPT0nbm8nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9va190eXBlXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmRJbWFnZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLmJvb2tUeXBlMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuivleivu1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWUuYm9va1R5cGUxPT09J3NoaWR1J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmm7TmlrBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlLmJvb2tUeXBlMT09PSd1cGRhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWUuYm9va1R5cGUyPT09J3RpbmdzaHUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9va190eXBlXzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmRJbWFnZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLmJvb2tUeXBlMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2h1amlhLWxpbmVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmRJbWFnZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLnNodWppYUxpbmV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRhYnNcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWJzXCJcbiAgICAgIF0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMuZm9vfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGFiLWJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNoZWNrZWRsaXN0fSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRhYi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLnRhYkNsaWNrRXZlbnQodGhpcy5pdGVtLGV2dCl9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2UtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuc2h1amlhLWxpc3RcIjoge1xuICAgIFwid2lkdGhcIjogXCI2OThweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnNodWppYS1ib3gtdG9wXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzZweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzNHB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogXCIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjQyLDI0MiwyNDIsMC45NSlcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5jbG9zZV9pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi50b3BfdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNy41cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiXG4gIH0sXG4gIFwiLmxpc3Qtcm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLmxhc3QtbGlzdC1yb3dcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc2h1amlhLWJvb2tzXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHB4XCJcbiAgfSxcbiAgXCIuaW1hZ2VfZGl2XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTg4cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjI1MHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5zZWxlY3RfYm94XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI3cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjdweFwiXG4gIH0sXG4gIFwiLnNlbGVjdF9ib3hfaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuY2hlY2tib3hcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MHB4XCJcbiAgfSxcbiAgXCIuc2h1amlhLWxpbmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCIvUGFnZV9TaHVqaWEvaW1nL3NodWppYS5wbmdcIixcbiAgICBcImJhY2tncm91bmRSZXBlYXRcIjogXCJuby1yZXBlYXRcIlxuICB9LFxuICBcIi5zaHVqaWEtbGluZSBpbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIudGFic1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjJGMkYyXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIlxuICB9LFxuICBcIi50YWItaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjExcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTcwLjhweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTA0LjJweFwiXG4gIH0sXG4gIFwiLmltYWdlLWFjdGl2ZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcInJlc2l6ZU1vZGVcIjogXCJjb250YWluXCJcbiAgfSxcbiAgXCIudGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuYm9va190eXBlXzFcIjoge1xuICAgIFwid2lkdGhcIjogXCI2N3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIuYm9va190eXBlXzEgdGV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjAuOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmJvb2tfdHlwZV8yXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjEwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXJcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczogWydsaXN0JywgJ2NoZWNrZWRsaXN0JywgJ2ltZycsICdmb28nXSxcbiAgZGF0YToge1xuICAgIHRvcFRpdGxlOiAn5pyq6YCJ5oupJyxcbiAgICBzaG93Q2hlY2tCb3g6IGZhbHNlLFxuICAgIHNlbGVjdEltYWdlOiBmYWxzZSxcbiAgICBzaHVqaWFyb3dzOiBbXSxcbiAgICBjaG9vc2VCb29rQXJyOiBbXVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLnNodWppYXJvd3MgPSB0aGlzLnNsaWNlQXJyYXkodGhpcy5saXN0KTtcbiAgfSxcbiAgc2xpY2VBcnJheTogZnVuY3Rpb24gc2xpY2VBcnJheShhcnJheSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMykge1xuICAgICAgcmVzdWx0LnB1c2goYXJyYXkuc2xpY2UoaSwgaSArIDMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICBjbGlja1RvUmVhZDogZnVuY3Rpb24gY2xpY2tUb1JlYWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zaG93Q2hlY2tCb3gpIHtcbiAgICAgIHRoaXMuc2hvd0NoZWNrQm94ID0gZmFsc2U7XG4gICAgICB0aGlzLmZvbyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGVTZWxlY3RJbWFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUuYm9va1R5cGUyID09PSAndGluZ3NodScpIHtcbiAgICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICAgICAgdXJpOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWxcIlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuYm9va1R5cGUyID09PSAnbm92ZWwnKSB7XG4gICAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICAgIHVyaTogJy9QYWdlX1JlYWQnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdGVzdElkOiAndGVzdElkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsb25nUHJlc3M6IGZ1bmN0aW9uIGxvbmdQcmVzcyh2YWx1ZSkge1xuICAgIHRoaXMuZm9vID0gZmFsc2U7XG4gICAgdGhpcy5zaG93Q2hlY2tCb3ggPSB0cnVlO1xuICAgIHRoaXMuY2hvb3NlQm9va0FyciA9IFtdO1xuICB9LFxuICBjbG9jZTogZnVuY3Rpb24gY2xvY2UoKSB7XG4gICAgdGhpcy5zaG93Q2hlY2tCb3ggPSBmYWxzZTtcbiAgICB0aGlzLmZvbyA9IHRydWU7XG4gICAgdGhpcy5oaWRlU2VsZWN0SW1hZ2UoKTtcbiAgfSxcbiAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QodmFsdWUpIHtcbiAgICB2YWx1ZS5zZWxlY3RJbWFnZSA9ICF2YWx1ZS5zZWxlY3RJbWFnZTtcblxuICAgIGlmICh2YWx1ZS5zZWxlY3RJbWFnZSkge1xuICAgICAgdGhpcy5jaG9vc2VCb29rQXJyLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVJbmRleCA9IHRoaXMuY2hvb3NlQm9va0Fyci5pbmRleE9mKHZhbHVlKTtcblxuICAgICAgaWYgKHZhbHVlSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuY2hvb3NlQm9va0Fyci5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudG9wVGl0bGUgPSBcIuacqumAieaLqVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvcFRpdGxlID0gXCLlt7LpgInmi6lcIiArIHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggKyBcIumhuVwiO1xuICAgIH1cbiAgfSxcbiAgdGFiQ2xpY2tFdmVudDogZnVuY3Rpb24gdGFiQ2xpY2tFdmVudChpdGVtLCBldmVudCkge1xuICAgIGlmIChpdGVtLnRpdGxlID09PSAn5Yig6ZmkJykge1xuICAgICAgaWYgKHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+i/mOacqumAieaLqeS5puexjScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgZ3Jhdml0eTogJ2JvdHRvbSdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd0RpYWxvZyh7XG4gICAgICAgICAgbWVzc2FnZTogJ+aYr+WQpuWIoOmZpOaJgOmAiScgKyB0aGlzLmNob29zZUJvb2tBcnIubGVuZ3RoICsgJ+acrOS5puexjScsXG4gICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgIHRleHQ6ICfliKDpmaQnLFxuICAgICAgICAgICAgY29sb3I6ICcjQ0QyMzI1J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRleHQ6ICflj5bmtognLFxuICAgICAgICAgICAgY29sb3I6ICcjQ0QyMzI1J1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflt7LmiJDlip/liKDpmaTmiYDpgInkuabnsY0nLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6ICdib3R0b20nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBoaWRlU2VsZWN0SW1hZ2U6IGZ1bmN0aW9uIGhpZGVTZWxlY3RJbWFnZSgpIHtcbiAgICB0aGlzLmNob29zZUJvb2tBcnIgPSBbXTtcbiAgICB0aGlzLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaXRlbS5zZWxlY3RJbWFnZSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudG9wVGl0bGUgPSBcIuacqumAieaLqVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvcFRpdGxlID0gXCLlt7LpgInmi6lcIiArIHRoaXMuY2hvb3NlQm9va0Fyci5sZW5ndGggKyBcIumhuVwiO1xuICAgIH1cbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInNodWppYS1ib3hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzaHVqaWEtYm94LXRvcFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJyZWFkZXJfc2h1amlhX2NvbXBvbmVudF9zZWFyY2hiYXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzZWFyY2hiYXJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaGJhcn1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNodWppYS1ib3gtYm90dG9tXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInNodWppYV9saXN0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgICAgICBcImNoZWNrZWRsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jaGVja2VkTGlzdH0sXG4gICAgICAgICAgICBcImltZ1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nfSxcbiAgICAgICAgICAgIFwiZm9vXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5mb299XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnNodWppYS1ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNodWppYS1ib3gtdG9wXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjgzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzZweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjM0cHhcIlxuICB9LFxuICBcIi5zaHVqaWEtYm94LWJvdHRvbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5OHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjZweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjZweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczogWydmb28nXSxcbiAgZGF0YToge1xuICAgIGZvbzogdHJ1ZSxcbiAgICBsaXN0OiBbe1xuICAgICAgXCJpbWFnZVwiOiBcIlRPX0RFTEVURS8xLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwib25lXCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJub1wiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJub3ZlbFwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIlRPX0RFTEVURS8yLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwidHdvXCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJzaGlkdVwiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJub3ZlbFwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIlRPX0RFTEVURS8xLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwidGhyZWVcIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcInVwZGF0ZVwiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJ0aW5nc2h1XCJcbiAgICB9LCB7XG4gICAgICBcImltYWdlXCI6IFwiVE9fREVMRVRFLzIucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJmb3VyXCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJub1wiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJub3ZlbFwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIlRPX0RFTEVURS8xLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiZml2ZVwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwidGluZ3NodVwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIlRPX0RFTEVURS8yLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwic2l4XCIsXG4gICAgICBcInNlbGVjdEltYWdlXCI6IGZhbHNlLFxuICAgICAgXCJib29rVHlwZTFcIjogXCJub1wiLFxuICAgICAgXCJib29rVHlwZTJcIjogXCJub3ZlbFwiXG4gICAgfSwge1xuICAgICAgXCJpbWFnZVwiOiBcIlRPX0RFTEVURS8xLnBuZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwic2V2ZW5cIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcIm5vXCIsXG4gICAgICBcImJvb2tUeXBlMlwiOiBcIm5vdmVsXCJcbiAgICB9LCB7XG4gICAgICBcImltYWdlXCI6IFwiVE9fREVMRVRFLzIucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJlaWdodFwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH0sIHtcbiAgICAgIFwiaW1hZ2VcIjogXCJUT19ERUxFVEUvMS5wbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIm5pbmVcIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcIm5vXCIsXG4gICAgICBcImJvb2tUeXBlMlwiOiBcIm5vdmVsXCJcbiAgICB9LCB7XG4gICAgICBcImltYWdlXCI6IFwiVE9fREVMRVRFLzIucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJ0ZW5cIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcIm5vXCIsXG4gICAgICBcImJvb2tUeXBlMlwiOiBcIm5vdmVsXCJcbiAgICB9LCB7XG4gICAgICBcImltYWdlXCI6IFwiVE9fREVMRVRFLzIucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJlaWdodFwiLFxuICAgICAgXCJzZWxlY3RJbWFnZVwiOiBmYWxzZSxcbiAgICAgIFwiYm9va1R5cGUxXCI6IFwibm9cIixcbiAgICAgIFwiYm9va1R5cGUyXCI6IFwibm92ZWxcIlxuICAgIH0sIHtcbiAgICAgIFwiaW1hZ2VcIjogXCJUT19ERUxFVEUvMS5wbmdcIixcbiAgICAgIFwibmFtZVwiOiBcIm5pbmVcIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcIm5vXCIsXG4gICAgICBcImJvb2tUeXBlMlwiOiBcIm5vdmVsXCJcbiAgICB9LCB7XG4gICAgICBcImltYWdlXCI6IFwiVE9fREVMRVRFLzIucG5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJ0ZW5cIixcbiAgICAgIFwic2VsZWN0SW1hZ2VcIjogZmFsc2UsXG4gICAgICBcImJvb2tUeXBlMVwiOiBcIm5vXCIsXG4gICAgICBcImJvb2tUeXBlMlwiOiBcIm5vdmVsXCJcbiAgICB9XSxcbiAgICBjaGVja2VkTGlzdDogW3tcbiAgICAgIGk6IDAsXG4gICAgICBjb2xvcjogJyM4Nzg3ODcnLFxuICAgICAgaW1hZ2U6ICdpbWcvZGVsZXRlLnBuZycsXG4gICAgICB0aXRsZTogJ+WIoOmZpCdcbiAgICB9LCB7XG4gICAgICBpOiAyLFxuICAgICAgY29sb3I6ICcjODc4Nzg3JyxcbiAgICAgIGltYWdlOiAnaW1nL3NoYXJlLnBuZycsXG4gICAgICB0aXRsZTogJ+WIhuS6qydcbiAgICB9LCB7XG4gICAgICBpOiAzLFxuICAgICAgY29sb3I6ICcjODc4Nzg3JyxcbiAgICAgIGltYWdlOiAnaW1nL2FsbC5wbmcnLFxuICAgICAgdGl0bGU6ICflhajpgIknXG4gICAgfV0sXG4gICAgaW1nOiB7XG4gICAgICBjbG9zZUltYWdlOiBcImltZy9pY29uX2Nsb3NlLnBuZ1wiLFxuICAgICAgbm9TZWxlY3Q6IFwiaW1nL25vX3NlbGVjdC5wbmdcIixcbiAgICAgIHNlbGVjdDogXCJpbWcvc2VsZWN0LnBuZ1wiLFxuICAgICAgYm9va1R5cGUxOiBcImltZy9pbWFnZTEucG5nXCIsXG4gICAgICBib29rVHlwZTI6IFwiaW1nL2hlYWRwaG9uZS5wbmdcIixcbiAgICAgIHNodWppYUxpbmU6IFwiaW1nL3NodWppYS5wbmdcIlxuICAgIH0sXG4gICAgc2VhcmNoYmFyOiBcImltZy9jX3NlYXJjaF9zZWFyY2gucG5nXCJcbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmZvbykge1xuICAgICAgdGhpcy5mb28gPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHQ6ICfkuabmnrYnLFxuICAgICAgdGV4dENvbG9yOiAnIyMxQTFBMUEnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDIsMjQyLDI0MiwwLjk1KScsXG4gICAgICBtZW51OiBmYWxzZVxuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9