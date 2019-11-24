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
/******/ 	return __webpack_require__(__webpack_require__.s = 231);
/******/ })
/************************************************************************/
/******/ ({

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(232)
var $app_template$ = __webpack_require__(236)
var $app_style$ = __webpack_require__(237)
var $app_script$ = __webpack_require__(238)

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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(233)
var $app_style$ = __webpack_require__(234)
var $app_script$ = __webpack_require__(235)

$app_define$('@app-component/novelcover', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 233:
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
        "container_cover"
      ],
      "shown": function () {return this.display},
      "events": {
        "click": "clickToHide"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "center"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": " 点击中间"
                  },
                  "classList": [
                    "center_text"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": " 呼出菜单"
                  },
                  "classList": [
                    "center_text"
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.novelcover.point}
                  },
                  "classList": [
                    "center_image"
                  ],
                  "events": {
                    "click": "clickToHide"
                  }
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.novelcover.hand}
                  },
                  "classList": [
                    "center_hand_image"
                  ],
                  "events": {
                    "click": "clickToHide"
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

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = {
  ".container_cover": {
    "position": "fixed",
    "width": "100%",
    "flexDirection": "column",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".content": {
    "height": "100%",
    "marginTop": "0px",
    "marginRight": "42px",
    "marginBottom": "0px",
    "marginLeft": "42px",
    "justifyContent": "space-between"
  },
  ".center_hand_image": {
    "position": "fixed",
    "left": "371px",
    "top": "530px"
  },
  ".center": {
    "flexDirection": "column",
    "width": "30%",
    "paddingTop": "360px",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  ".center_image": {
    "width": "50%",
    "marginTop": "40px"
  },
  ".left": {
    "flexDirection": "column",
    "marginTop": "517px",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "40px"
  },
  ".right": {
    "flexDirection": "column",
    "marginTop": "517px",
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  },
  ".center_text": {
    "color": "#ffffff",
    "fontSize": "31.3px"
  },
  ".left_text": {
    "color": "#ffffff",
    "fontSize": "31.3px",
    "marginTop": "40px"
  },
  ".right_text": {
    "color": "#ffffff",
    "fontSize": "31.3px",
    "marginTop": "40px"
  }
}

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['novelcover'],
  data: {
    display: true
  },
  clickToHide: function clickToHide() {
    this.display = false;
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

/***/ 236:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "read"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['content', this.contentClassName]},
      "events": {
        "click": "showSetting"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '第'+(this.catalogueNumber)+'章 '+(this.title)}
          },
          "classList": function () {return ['chapter-title', this.chapterTitleClassName]},
          "style": {
            "fontSize": function () {return this.changedFontSize}
          }
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.content}
          },
          "classList": function () {return ['chapter-content', this.chapterContentClassName]},
          "style": {
            "fontSize": function () {return this.fontsize}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.settingStatus},
      "classList": [
        "hide-cover"
      ],
      "events": {
        "click": "hideSetting"
      }
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.settingStatus&&!this.readSettingStatus},
      "classList": [
        "show-setting",
        "setting"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "setting-bottom"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "setting-bottom-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.lastChapter}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "上一章"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "setting-bottom-item"
              ],
              "events": {
                "click": "clickToList"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.list}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "章节目录"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "shown": function () {return this.backgroundColor=='day'},
              "classList": [
                "setting-bottom-item"
              ],
              "events": {
                "click": function(evt){this.changeBackgroundColor('night',evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.moon}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "日夜模式"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "shown": function () {return !(this.backgroundColor=='day')},
              "classList": [
                "setting-bottom-item"
              ],
              "events": {
                "click": function(evt){this.changeBackgroundColor('day',evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.sun}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "日夜模式"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "setting-bottom-item"
              ],
              "events": {
                "click": "readSetting"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.setting}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "阅读设置"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "setting-bottom-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.nextChapter}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "下一章"
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
      "shown": function () {return this.readSettingStatus},
      "classList": [
        "show-setting",
        "setting"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "read-setting-top"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "read-size"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "A -"
                  },
                  "classList": [
                    "read-size-small"
                  ],
                  "events": {
                    "click": function(evt){this.changefontsize('reduce',evt)}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.fontsize}
                  },
                  "classList": [
                    "read-size-middle"
                  ],
                  "events": {
                    "click": function(evt){this.changefontsize('middle',evt)}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "A +"
                  },
                  "classList": [
                    "read-size-large"
                  ],
                  "events": {
                    "click": function(evt){this.changefontsize('release',evt)}
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
            "read-setting-bottom"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.backgroundColorName.name1}
              },
              "classList": [
                "one"
              ],
              "style": {
                "backgroundColor": "#66cc99"
              },
              "events": {
                "click": function(evt){this.changeBackgroundColor('green',evt)}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.backgroundColorName.name2}
              },
              "classList": [
                "two"
              ],
              "style": {
                "backgroundColor": "#faebd7"
              },
              "events": {
                "click": function(evt){this.changeBackgroundColor('yellow',evt)}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.backgroundColorName.name3}
              },
              "classList": [
                "three"
              ],
              "style": {
                "backgroundColor": "#555555"
              },
              "events": {
                "click": function(evt){this.changeBackgroundColor('gray',evt)}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.backgroundColorName.name4}
              },
              "classList": [
                "four"
              ],
              "style": {
                "backgroundColor": "#FFF5EE"
              },
              "events": {
                "click": function(evt){this.changeBackgroundColor('day',evt)}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return !this.readSettingStatus},
      "classList": [
        "no-setting",
        "setting"
      ]
    },
    {
      "type": "novelcover",
      "attr": {
        "novelcover": function () {return this.novelcover}
      }
    }
  ]
}

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = {
  ".read": {
    "flexDirection": "column",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".read-top": {
    "position": "fixed",
    "width": "100%",
    "height": "100px",
    "backgroundColor": "#262626",
    "alignItems": "center"
  },
  ".read-top image": {
    "width": "50px",
    "height": "50px",
    "marginTop": "25px",
    "marginRight": "25px",
    "marginBottom": "25px",
    "marginLeft": "25px"
  },
  ".content": {
    "flexDirection": "column",
    "paddingTop": "20px",
    "paddingRight": "30px",
    "paddingBottom": "20px",
    "paddingLeft": "30px"
  },
  ".day-content": {
    "backgroundColor": "rgb(230,217,186)",
    "color": "rgb(26,26,26)"
  },
  ".night-content": {
    "backgroundColor": "#2b2b2b",
    "color": "rgba(255,255,255,0.5)"
  },
  ".green-content": {
    "backgroundColor": "#66cc99",
    "color": "rgb(26,26,26)"
  },
  ".yellow-content": {
    "backgroundColor": "rgb(230,217,186)",
    "color": "rgb(26,26,26)"
  },
  ".gray-content": {
    "backgroundColor": "#555555",
    "color": "rgba(255,255,255,0.5)"
  },
  ".chapter-title": {
    "width": "100%",
    "fontSize": "31.3px",
    "borderBottomWidth": "3px",
    "marginBottom": "50px"
  },
  ".day-chapter-title": {
    "color": "rgba(26,26,26,0.7)",
    "borderBottomColor": "rgba(26,26,26,0.7)"
  },
  ".night-chapter-title": {
    "color": "rgba(255,255,255,0.5)",
    "borderBottomColor": "rgba(255,255,255,0.5)"
  },
  ".green-chapter-title": {
    "color": "rgba(26,26,26,0.7)",
    "borderBottomColor": "rgba(26,26,26,0.7)"
  },
  ".yellow-chapter-title": {
    "color": "rgba(26,26,26,0.7)",
    "borderBottomColor": "rgba(26,26,26,0.7)"
  },
  ".gray-chapter-title": {
    "color": "rgba(255,255,255,0.5)",
    "borderBottomColor": "rgba(255,255,255,0.5)"
  },
  ".day-chapter-content": {
    "color": "rgba(255,255,255,0.5)"
  },
  ".night-chapter-content": {
    "color": "rgba(255,255,255,0.5)"
  },
  ".green-chapter-content": {
    "color": "rgba(26,26,26,0.7)"
  },
  ".yellow-chapter-content": {
    "color": "rgba(26,26,26,0.7)"
  },
  ".gray-chapter-content": {
    "color": "rgba(255,255,255,0.5)"
  },
  ".show-cover": {
    "position": "fixed",
    "top": "100px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px",
    "height": "100%",
    "justifyContent": "space-around",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".hide-cover": {
    "position": "fixed",
    "top": "100px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px"
  },
  ".cover-left": {
    "width": "25%",
    "height": "100%"
  },
  ".cover-center": {
    "width": "35%",
    "height": "100%"
  },
  ".cover-right": {
    "width": "25%",
    "height": "100%"
  },
  ".show-setting": {
    "width": "100%",
    "backgroundColor": "#262626"
  },
  ".no-setting": {
    "height": "0px",
    "display": "none",
    "width": "100%"
  },
  ".setting": {
    "position": "fixed",
    "bottom": "0px",
    "flexDirection": "column"
  },
  ".item-content": {
    "marginTop": "20px",
    "width": "65%"
  },
  ".slider": {
    "width": "100%",
    "selectedColor": "#EE5C42",
    "color": "#666666"
  },
  ".setting-bottom": {
    "marginTop": "13px",
    "marginRight": "34px",
    "marginBottom": "4px",
    "marginLeft": "34px",
    "height": "117px",
    "justifyContent": "space-around",
    "alignItems": "center",
    "alignContent": "center"
  },
  ".setting-bottom-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "171px",
    "height": "100px"
  },
  ".setting-bottom-item image": {
    "width": "50px",
    "height": "50px"
  },
  ".setting-bottom-item text": {
    "color": "#E6E6E6",
    "opacity": 0.5,
    "fontSize": "20.8px",
    "marginTop": "4px"
  },
  ".read-setting-top": {
    "alignItems": "center",
    "width": "90%",
    "height": "150px"
  },
  ".read-size": {
    "width": "384px",
    "height": "67px",
    "justifyContent": "space-between",
    "borderTopWidth": "2.1px",
    "borderRightWidth": "2.1px",
    "borderBottomWidth": "2.1px",
    "borderLeftWidth": "2.1px",
    "borderTopColor": "rgba(255,255,255,0.5)",
    "borderRightColor": "rgba(255,255,255,0.5)",
    "borderBottomColor": "rgba(255,255,255,0.5)",
    "borderLeftColor": "rgba(255,255,255,0.5)",
    "borderRadius": "8.3px",
    "backgroundColor": "rgba(51,51,51,0.3)",
    "marginLeft": "30px"
  },
  ".read-size text": {
    "width": "33%",
    "height": "100%",
    "textAlign": "center"
  },
  ".read-size-small": {
    "color": "#A8A8A8",
    "fontSize": "27.1px"
  },
  ".read-size-middle": {
    "borderLeftColor": "rgba(255,255,255,0.5)",
    "borderLeftWidth": "2.1px",
    "fontSize": "31.3px",
    "color": "#E6E6E6"
  },
  ".read-size-large": {
    "color": "#A8A8A8",
    "fontSize": "27.1px",
    "borderLeftColor": "rgba(255,255,255,0.5)",
    "borderLeftWidth": "2.1px"
  },
  ".read-paging": {
    "borderRadius": "10px",
    "height": "45%",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "fontSize": "25px",
    "color": "#f0ffff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#a9a9a9",
    "borderRightColor": "#a9a9a9",
    "borderBottomColor": "#a9a9a9",
    "borderLeftColor": "#a9a9a9"
  },
  ".read-paging-active": {
    "borderRadius": "10px",
    "height": "45%",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "fontSize": "25px",
    "color": "#EE5C42",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#EE5C42",
    "borderRightColor": "#EE5C42",
    "borderBottomColor": "#EE5C42",
    "borderLeftColor": "#EE5C42"
  },
  ".read-setting-bottom": {
    "alignItems": "center",
    "marginTop": "0px",
    "marginRight": "33px",
    "marginBottom": "10px",
    "marginLeft": "33px",
    "height": "150px",
    "borderBottomColor": "rgba(216,216,216,0.15)",
    "borderBottomWidth": "2px"
  },
  ".read-setting-bottom text": {
    "borderRadius": "60px",
    "width": "13%",
    "height": "60%",
    "fontSize": "25px",
    "marginRight": "60px",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  "protected": {
    item: ''
  },
  "public": {
    catalogueNumber: 1,
    title: '朝气蓬勃',
    content: " \u591C\u5DF2\u6DF1\uFF0C\u6F06\u9ED1\u4E00\u7247\uFF0C\u666F\u7269\u4E0D\u53EF\u89C1\u3002\u4F46\u5C71\u4E2D\u5E76\u4E0D\u5B81\u9759\uFF0C\u731B\u517D\u5486\u54EE\uFF0C\u9707\u52A8\u5C71\u6CB3\uFF0C\u4E07\u6728\u6447\u98A4\uFF0C\u4E71\u53F6\u7C0C\u7C0C\u5760\u843D\u3002\n\n    \u7FA4\u5C71\u4E07\u58D1\u95F4\uFF0C\u6D2A\u8352\u731B\u517D\u6A2A\u884C\uFF0C\u592A\u53E4\u9057\u79CD\u51FA\u6CA1\uFF0C\u5404\u79CD\u53EF\u6015\u7684\u58F0\u97F3\u5728\u9ED1\u6697\u4E2D\u6B64\u8D77\u5F7C\u4F0F\uFF0C\u76F4\u6B32\u88C2\u5F00\u8FD9\u5929\u5730\u3002\n\n    \u5C71\u8109\u4E2D\uFF0C\u8FDC\u8FDC\u671B\u53BB\u6709\u4E00\u56E2\u67D4\u548C\u7684\u5149\u9690\u73B0\uFF0C\u5728\u8FD9\u9ED1\u6697\u65E0\u5C3D\u7684\u591C\u5E55\u4E0B\u4E0E\u4E07\u5C71\u95F4\u72B9\u5982\u4E00\u70B9\u70DB\u706B\u5728\u6447\u66F3\uFF0C\u968F\u65F6\u4F1A\u7184\u706D\u3002\n\n    \u6E10\u6E10\u63A5\u8FD1\uFF0C\u53EF\u4EE5\u770B\u6E05\u90A3\u91CC\u6709\u534A\u622A\u5DE8\u5927\u7684\u67AF\u6728\uFF0C\u6811\u5E72\u76F4\u5F84\u8DB3\u6709\u5341\u51E0\u7C73\uFF0C\u901A\u4F53\u7126\u9ED1\u3002\u9664\u5374\u534A\u622A\u4E3B\u5E72\u5916\uFF0C\u5B83\u53EA\u5269\u4E0B\u4E86\u4E00\u6761\u67D4\u5F31\u7684\u679D\u6761\uFF0C\u4F46\u5374\u5728\u6563\u53D1\u7740\u751F\u673A\uFF0C\u679D\u53F6\u6676\u83B9\u5982\u7EFF\u7389\u523B\u6210\uFF0C\u70B9\u70B9\u67D4\u548C\u7684\u5149\u6269\u6563\uFF0C\u5C06\u4E00\u4E2A\u6751\u5B50\u7B3C\u7F69\u3002\n\n    \u786E\u5207\u7684\u8BF4\uFF0C\u8FD9\u662F\u4E00\u682A\u96F7\u51FB\u6728\uFF0C\u5728\u5F88\u591A\u5E74\u524D\u66FE\u7ECF\u906D\u9047\u8FC7\u901A\u5929\u7684\u95EA\u7535\uFF0C\u8001\u67F3\u6811\u5DE8\u5927\u7684\u6811\u51A0\u4E0E\u65FA\u76DB\u7684\u751F\u673A\u88AB\u6467\u6BC1\u4E86\u3002\u5982\u4ECA\u5730\u8868\u4E0A\u53EA\u5269\u4E0B**\u7C73\u9AD8\u7684\u4E00\u6BB5\u6811\u6869\uFF0C\u7C97\u7684\u60CA\u4EBA\uFF0C\u800C\u90A3\u4EC5\u6709\u7684\u4E00\u6761\u67F3\u679D\u5982\u7EFF\u971E\u795E\u94FE\u822C\uFF0C\u5149\u6655\u5F25\u6F2B\uFF0C\u7B3C\u7F69\u4E0E\u5B88\u62A4\u4F4F\u4E86\u6574\u4E2A\u6751\u5B50\uFF0C\u4EE4\u8FD9\u7247\u6816\u5C45\u5730\u6726\u6726\u80E7\u80E7\uFF0C\u72B9\u82E5\u4E00\u7247\u4ED9\u4E61\uFF0C\u5728\u8FD9\u5927\u8352\u4E2D\u663E\u5F97\u5F88\u795E\u79D8\u3002\n\n    \u6751\u4E2D\u5404\u6237\u90FD\u662F\u77F3\u5C4B\uFF0C\u591C\u6DF1\u4EBA\u9759\uFF0C\u8FD9\u91CC\u7965\u548C\u800C\u5B89\u8C27\uFF0C\u50CF\u662F\u4E0E\u5916\u754C\u7684\u9ED1\u6697\u8FD8\u6709\u517D\u543C\u9694\u7EDD\u4E86\u3002\n\n    \u201C\u545C\u2026\u2026\u201D\n\n    \u4E00\u9635\u72C2\u98CE\u5439\u8FC7\uFF0C\u4E00\u7247\u5DE8\u5927\u7684\u4E4C\u4E91\u6A2A\u7A7A\uFF0C\u906E\u4F4F\u4E86\u6574\u7247\u591C\u7A7A\uFF0C\u6321\u4F4F\u4E86\u90A3\u4EC5\u6709\u7684\u4E00\u70B9\u661F\u534E\uFF0C\u5C71\u8109\u4E2D\u66F4\u52A0\u9ED1\u6697\u4E86\u3002\n\n    \u4E00\u58F0\u51F6\u623E\u7684\u79BD\u9E23\u81EA\u9AD8\u5929\u4F20\u6765\uFF0C\u7A7F\u91D1\u88C2\u77F3\uFF0C\u7ADF\u6E90\u81EA\u90A3\u7247\u4E4C\u4E91\uFF0C\u7EC6\u770B\u5B83\u5C45\u7136\u662F\u4E00\u53EA\u5E9E\u5927\u5230\u4E0D\u53EF\u601D\u8BAE\u7684\u5DE8\u9E1F\uFF0C\u906E\u5929\u853D\u6708\uFF0C\u957F\u4E5F\u4E0D\u77E5\u591A\u5C11\u91CC\u3002\n\n    \u8DEF\u8FC7\u77F3\u6751\uFF0C\u5B83\u4FEF\u89C6\u4E0B\u65B9\uFF0C\u4E24\u53EA\u773C\u775B\u5B9B\u82E5\u4E24\u8F6E\u8840\u6708\u822C\uFF0C\u51F6\u6C14\u6ED4\u5929\uFF0C\u76EF\u7740\u8001\u67F3\u6728\u770B\u4E86\u7247\u523B\uFF0C\u6700\u7EC8\u98DE\u5411\u4E86\u5C71\u8109\u6700\u6DF1\u5904\u3002\n\n    \u5E73\u9759\u4E86\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\uFF0C\u76F4\u5230\u540E\u534A\u591C\uFF0C\u5927\u5730\u98A4\u52A8\u4E86\u8D77\u6765\uFF0C\u4E00\u6761\u6A21\u7CCA\u7684\u8EAB\u5F71\u4ECE\u8FDC\u65B9\u8D70\u6765\uFF0C\u7ADF\u4E0E\u7FA4\u5C71\u9F50\u9AD8\uFF01\n\n    \u83AB\u540D\u6C14\u606F\u6563\u53D1\uFF0C\u7FA4\u5C71\u4E07\u58D1\u6B7B\u4E00\u822C\u7684\u5BC2\u9759\uFF0C\u51F6\u79BD\u731B\u517D\u7686\u86F0\u4F0F\uFF0C\u4E0D\u6562\u53D1\u51FA\u4E00\u70B9\u58F0\u97F3\u3002\n\n    \u8FD1\u4E86\uFF0C\u8FD9\u662F\u4E00\u4E2A\u62E5\u6709\u4EBA\u5F62\u7684\u751F\u7269\uFF0C\u76F4\u7ACB\u884C\u8D70\uFF0C\u5E9E\u5927\u7684\u60CA\u4EBA\uFF0C\u8EAB\u9AD8\u6BD4\u80A9\u5C71\u5CB3\uFF0C\u6D51\u8EAB\u6CA1\u6709\u6BDB\u53D1\uFF0C\u901A\u4F53\u5BC6\u5E03\u7740\u91D1\u8272\u7684\u9CDE\u7247\uFF0C\u71A0\u71A0\u751F\u8F89\u3002\u9762\u90E8\u5F88\u5E73\uFF0C\u53EA\u6709\u4E00\u53EA\u7AD6\u773C\uFF0C\u5F00\u5408\u95F4\u50CF\u662F\u4E00\u9053\u91D1\u8272\u7684\u95EA\u7535\u5212\u8FC7\uFF0C\u7280\u5229\u6151\u4EBA\u3002\u6574\u4F53\u8840\u6C14\u5982\u6D77\uFF0C\u5B9B\u5982\u4E00\u5C0A\u795E\u9B54\uFF01\n\n    \u5B83\u8DEF\u8FC7\u6B64\u5730\uFF0C\u770B\u4E86\u4E00\u773C\u8001\u67F3\u6728\uFF0C\u7A0D\u4F5C\u505C\u7559\u540E\uFF0C\u4F3C\u4E4E\u6025\u4E8E\u8D76\u8DEF\uFF0C\u6700\u7EC8\u5FEB\u901F\u8FDC\u53BB\uFF0C\u8BB8\u591A\u5C71\u5CF0\u88AB\u5176\u811A\u6B65\u9707\u7684\u8F70\u9E23\uFF0C\u5C71\u5730\u5267\u70C8\u98A4\u6296\u3002\n\n    \u9ECE\u660E\uFF0C\u4E00\u6761\u5341\u7C73\u957F\u3001\u6C34\u6876\u7C97\u3001\u94F6\u5149\u707F\u707F\u7684\u8708\u86A3\u5728\u5C71\u4E2D\u873F\u8712\u800C\u884C\uFF0C\u50CF\u662F\u767D\u94F6\u6D47\u94F8\u800C\u6210\uFF0C\u6BCF\u4E00\u8282\u90FD\u9503\u4EAE\u800C\u72F0\u72DE\uFF0C\u5212\u8FC7\u5C71\u77F3\u65F6\u94FF\u9535\u4F5C\u54CD\uFF0C\u706B\u661F\u98DE\u6E85\u3002\u4F46\u6700\u7EC8\u5B83\u5374\u907F\u8FC7\u4E86\u77F3\u6751\uFF0C\u6CA1\u6709\u4FB5\u5165\uFF0C\u6240\u8FC7\u4E4B\u5904\u9ED1\u96FE\u7FFB\u817E\uFF0C\u4E07\u517D\u907F\u9000\u3002\n\n    \u4E00\u6839\u6563\u53D1\u7740\u83B9\u83B9\u7EFF\u971E\u7684\u67D4\u5F31\u67F3\u6761\u5728\u98CE\u4E2D\u8F7B\u8F7B\u6447\u66F3\u2026\u2026\n    \u77F3\u6751\uFF0C\u4F4D\u4E8E\u82CD\u83BD\u5C71\u8109\u4E2D\uFF0C\u56DB\u5468\u9AD8\u5CF0\u5927\u58D1\uFF0C\u832B\u832B\u7FA4\u5C71\u5DCD\u5CE8\u3002\n\n    \u6E05\u6668\uFF0C\u671D\u971E\u707F\u707F\uFF0C\u4EFF\u82E5\u788E\u91D1\u4E00\u822C\u6D12\u843D\uFF0C\u6C90\u6D74\u5728\u4EBA\u8EAB\u4E0A\u6696\u6D0B\u6D0B\u3002\n\n    \u4E00\u7FA4\u5B69\u5B50\uFF0C\u4ECE\u56DB\u4E94\u5C81\u5230\u5341\u51E0\u5C81\u4E0D\u7B49\uFF0C\u80FD\u6709\u6570\u5341\u4EBA\uFF0C\u5728\u6751\u524D\u7684\u7A7A\u5730\u4E0A\u8FCE\u7740\u671D\u971E\uFF0C\u6B63\u5728\u54FC\u54C8\u6709\u58F0\u7684\u953B\u70BC\u4F53\u9B44\u3002\u4E00\u5F20\u5F20\u7A1A\u5AE9\u7684\u5C0F\u8138\u6EE1\u662F\u8BA4\u771F\u4E4B\u8272\uFF0C\u5927\u4E00\u4E9B\u7684\u5B69\u5B50\u864E\u864E\u751F\u98CE\uFF0C\u5C0F\u4E00\u4E9B\u7684\u4E5F\u6BD4\u5212\u7684\u6709\u6A21\u6709\u6837\u3002\n\n    \u4E00\u4E2A\u808C\u4F53\u5F3A\u5065\u5982\u864E\u8C79\u7684\u4E2D\u5E74\u7537\u5B50\uFF0C\u7A7F\u7740\u517D\u76AE\u8863\uFF0C\u76AE\u80A4\u5448\u53E4\u94DC\u8272\uFF0C\u9ED1\u53D1\u62AB\u6563\uFF0C\u70AF\u70AF\u6709\u795E\u7684\u773C\u7738\u626B\u8FC7\u6BCF\u4E00\u4E2A\u5B69\u5B50\uFF0C\u6B63\u5728\u8BA4\u771F\u6307\u70B9\u4ED6\u4EEC\u3002\n\n    \u201C\u592A\u9633\u521D\u5347\uFF0C\u4E07\u7269\u521D\u59CB\uFF0C\u751F\u4E4B\u6C14\u6700\u76DB\uFF0C\u867D\u4E0D\u80FD\u5982\u4F20\u8BF4\u4E2D\u90A3\u822C\u9910\u971E\u98DF\u6C14\uFF0C\u4F46\u8FD9\u6837\u8FCE\u971E\u953B\u4F53\u81EA\u4E5F\u6709\u83AB\u5927\u597D\u5904\uFF0C\u53EF\u5145\u76C8\u4EBA\u4F53\u751F\u673A\u3002\u4E00\u5929\u4E4B\u8BA1\u5728\u4E8E\u6668\uFF0C\u6BCF\u65E5\u65E9\u8D77\u591A\u7528\u529F\uFF0C\u5F3A\u7B4B\u58EE\u9AA8\uFF0C\u6D3B\u8840\u70BC\u7B4B\uFF0C\u5C06\u6765\u624D\u80FD\u5728\u8FD9\u82CD\u83BD\u5C71\u8109\u4E2D\u6709\u6D3B\u547D\u7684\u672C\u94B1\u3002\u201D\u7AD9\u5728\u524D\u65B9\u3001\u6307\u70B9\u4E00\u7FA4\u5B69\u5B50\u7684\u4E2D\u5E74\u7537\u5B50\u4E00\u8138\u4E25\u8083\uFF0C\u8BA4\u771F\u544A\u8BEB\uFF0C\u800C\u540E\u53C8\u559D\u9053\uFF1A\u201C\u4F60\u4EEC\u660E\u767D\u5417\uFF1F\u201D\n\n    \u201C\u660E\u767D\uFF01\u201D\u4E00\u7FA4\u5B69\u5B50\u4E2D\u6C14\u5341\u8DB3\uFF0C\u5927\u58F0\u56DE\u5E94\u3002\n\n    \u5C71\u4E2D\u591A\u53F2\u524D\u751F\u7269\u51FA\u6CA1\uFF0C\u65F6\u6709\u906E\u853D\u5929\u7A7A\u4E4B\u5DE8\u7FFC\u6A2A\u8FC7\uFF0C\u5728\u5730\u4E0A\u6295\u4E0B\u5927\u7247\u7684\u9634\u5F71\uFF0C\u4EA6\u6709\u8352\u517D\u7ACB\u4E8E\u5CF0\u4E0A\uFF0C\u541E\u6708\u800C\u5578\uFF0C\u66F4\u5C11\u4E0D\u4E86\u5404\u79CD\u6BD2\u866B\u4F0F\u884C\uFF0C\u5F02\u5E38\u53EF\u6016\u3002\n\n    \u201C\u660E\u767D\u5440\u3002\u201D\u4E00\u4E2A\u660E\u663E\u8D70\u795E\u3001\u6162\u4E86\u534A\u62CD\u7684\u5C0F\u5BB6\u4F19\u5976\u58F0\u5976\u6C14\u7684\u53EB\u9053\u3002\n\n    \u8FD9\u662F\u4E00\u4E2A\u5F88\u5C0F\u7684\u5B69\u5B50\uFF0C\u53EA\u6709\u4E00\u4E24\u5C81\u7684\u6837\u5B50\uFF0C\u521A\u5B66\u4F1A\u8D70\u8DEF\u6CA1\u51E0\u4E2A\u6708\uFF0C\u4E5F\u5728\u8DDF\u7740\u953B\u70BC\u4F53\u9B44\u3002\u663E\u7136\uFF0C\u4ED6\u662F\u81EA\u5DF1\u51D1\u8FC7\u6765\u7684\uFF0C\u6DF7\u5728\u4E86\u5E74\u957F\u7684\u5B69\u5B50\u4E2D\uFF0C\u5206\u660E\u8FD8\u4E0D\u5E94\u8BE5\u51FA\u73B0\u5728\u8FD9\u4E2A\u961F\u4F0D\u91CC\u3002\n\n    \u201C\u54FC\u54FC\u54C8\u563F\uFF01\u201D\u5C0F\u5BB6\u4F19\u53E3\u4E2D\u53D1\u58F0\uFF0C\u5AE9\u5AE9\u7684\u5C0F\u624B\u81C2\u5356\u529B\u7684\u6325\u52A8\u7740\uFF0C\u6548\u4EFF\u5927\u5B69\u5B50\u4EEC\u7684\u52A8\u4F5C\uFF0C\u53EF\u662F\u4ED6\u592A\u8FC7\u5E7C\u5C0F\uFF0C\u52A8\u4F5C\u6B6A\u6B6A\u626D\u626D\uFF0C\u4E14\u6B65\u5C65\u8E52\u8DDA\uFF0C\u6447\u6447\u6446\u6446\uFF0C\u518D\u52A0\u4E0A\u5634\u89D2\u95F4\u6B8B\u7559\u7684\u767D\u8272\u5976\u6E0D\uFF0C\u5F15\u4EBA\u53D1\u7B11\u3002\n\n    \u4E00\u7FA4\u5927\u5B69\u5B50\u770B\u7740\u4ED6\uFF0C\u7686\u6324\u7709\u5F04\u773C\uFF0C\u8BA9\u539F\u672C\u4E25\u8083\u7684\u6668\u7EC3\u6C14\u6C1B\u8F7B\u7F13\u4E86\u4E0D\u5C11\u3002\n\n    \u5C0F\u4E0D\u70B9\u957F\u7684\u5F88\u767D\u5AE9\u4E0E\u6F02\u4EAE\uFF0C\u5927\u773C\u775B\u4E4C\u6E9C\u6E9C\u7684\u8F6C\u52A8\uFF0C\u6574\u4E2A\u4EBA\u50CF\u662F\u4E2A\u767D\u74F7\u5A03\u5A03\uFF0C\u5F88\u53EF\u7231\uFF0C\u7A1A\u5AE9\u7684\u52A8\u4F5C\uFF0C\u53E3\u4E2D\u54BF\u54BF\u5440\u5440\uFF0C\u61A8\u6001\u53EF\u63AC\u3002\u8FD9\u8BA9\u53E6\u4E00\u7247\u573A\u5730\u4E2D\u76D8\u5750\u5728\u4E00\u5757\u5757\u5DE8\u77F3\u4E0A\u6B63\u5728\u541E\u5410\u5929\u7CBE\u7684\u4E00\u4E9B\u8001\u4EBA\u4E5F\u90FD\u9732\u51FA\u7B11\u5BB9\u3002\n\n    \u5C31\u662F\u90A3\u4E9B\u8EAB\u6750\u9AD8\u5927\u9B41\u68A7\u3001\u4E0A\u534A\u8EAB**\u3001\u808C\u8171\u5149\u4EAE\u5E76\u9686\u8D77\u7684\u6210\u5E74\u7537\u5B50\u4EEC\uFF0C\u4E5F\u90FD\u671B\u4E86\u8FC7\u6765\uFF0C\u5E26\u7740\u7B11\u610F\u3002\u4ED6\u4EEC\u662F\u6751\u4E2D\u6700\u5F3A\u58EE\u7684\u4EBA\uFF0C\u662F\u72E9\u730E\u4E0E\u5B88\u62A4\u8FD9\u4E2A\u6751\u843D\u7684\u6700\u91CD\u8981\u529B\u91CF\uFF0C\u4E5F\u90FD\u5728\u953B\u4F53\uFF0C\u6709\u4EBA\u63E1\u7740\u4E0D\u77E5\u540D\u7684\u5DE8\u517D\u9AA8\u9ABC\u6253\u78E8\u800C\u6210\u7684\u767D\u9AA8\u5927\u68D2\uFF0C\u4E5F\u6709\u4EBA\u6301\u7740\u9ED1\u8272\u91D1\u5C5E\u94F8\u6210\u7684\u9614\u5251\uFF0C\u7528\u529B\u821E\u52A8\uFF0C\u98CE\u58F0\u5982\u96F7\u3002\n\n    \u751F\u5B58\u73AF\u5883\u6781\u5176\u6076\u52A3\uFF0C\u591A\u6D2A\u8352\u731B\u517D\u6BD2\u866B\uFF0C\u4E3A\u4E86\u98DF\u7269\uFF0C\u4E3A\u4E86\u751F\u5B58\uFF0C\u5F88\u591A\u7537\u5B50\u8FD8\u672A\u6210\u5E74\u5C31\u8FC7\u65E9\u592D\u6298\u5728\u4E86\u5927\u8352\u4E2D\uFF0C\u60F3\u8981\u6D3B\u4E0B\u53BB\uFF0C\u552F\u6709\u5F3A\u58EE\u5DF1\u8EAB\u3002\u6E05\u6668\u7528\u529F\uFF0C\u65E0\u8BBA\u662F\u6210\u5E74\u4EBA\uFF0C\u4EA6\u6216\u662F\u8001\u4EBA\u4E0E\u5B69\u5B50\uFF0C\u8FD9\u662F\u6BCF\u4E00\u4E2A\u4EBA\u81EA\u5E7C\u5C31\u5DF2\u517B\u6210\u7684\u4E60\u60EF\u3002\n\n    \u201C\u6536\u5FC3\uFF01\u201D\u8D1F\u8D23\u7763\u4FC3\u4E0E\u6307\u5BFC\u5B69\u5B50\u7EC3\u529F\u7684\u4E2D\u5E74\u7537\u5B50\u5927\u58F0\u558A\u9053\u3002\u4E00\u7FA4\u5B69\u5B50\u8D76\u7D27\u8BA4\u771F\u4E86\u8D77\u6765\uFF0C\u7EE7\u7EED\u5728\u67D4\u548C\u4E0E\u707F\u70C2\u7684\u671D\u971E\u4E2D\u953B\u70BC\u3002\n\n    \u201C\u547C\u2026\u2026\u54BF\u5440\uFF0C\u7D2F\u4E86\u3002\u201D\u5C0F\u4E0D\u70B9\u957F\u51FA\u4E86\u4E00\u53E3\u6C14\uFF0C\u4E00\u5C41\u58A9\u513F\u5750\u5728\u4E86\u5730\u4E0A\uFF0C\u770B\u7740\u5927\u5B69\u5B50\u4EEC\u953B\u70BC\u4F53\u9B44\u3002\u53EF\u4EC5\u4E00\u4F1A\u513F\u5DE5\u592B\u4ED6\u5C31\u88AB\u5206\u6563\u4E86\u6CE8\u610F\u529B\uFF0C\u7AD9\u8D77\u8EAB\u6765\uFF0C\u6447\u6447\u6446\u6446\uFF0C\u51B2\u5411\u4E0D\u8FDC\u5904\u4E00\u53EA\u6B63\u5728\u8E66\u8E66\u8DF3\u8DF3\u7684\u4E94\u8272\u96C0\uFF0C\u7ED3\u679C\u78D5\u78D5\u7ECA\u7ECA\uFF0C\u8FDE\u6454\u4E86\u51E0\u4E2A\u5C41\u58A9\u513F\uFF0C\u5012\u4E5F\u4E0D\u54ED\uFF0C\u6C14\u547C\u547C\uFF0C\u54FC\u54FC\u5527\u5527\u722C\u8D77\u6765\u518D\u8FFD\u3002\n\n    \u201C\u597D\u4E86\uFF0C\u6536\u529F\uFF01\u201D\n\n    \u968F\u7740\u4E00\u58F0\u5927\u559D\uFF0C\u6240\u6709\u5B69\u5B50\u90FD\u4E00\u9635\u6B22\u547C\uFF0C\u63C9\u4E86\u63C9\u9178\u75BC\u7684\u624B\u811A\uFF0C\u800C\u540E\u4E00\u54C4\u800C\u6563\uFF0C\u51B2\u5411\u5404\u81EA\u7684\u5BB6\u4E2D\uFF0C\u51C6\u5907\u5403\u65E9\u996D\u3002\n\n    \u8001\u4EBA\u4EEC\u90FD\u7B11\u4E86\uFF0C\u81EA\u5DE8\u77F3\u4E0A\u8D77\u8EAB\u3002\u800C\u90A3\u4E9B\u8EAB\u6750\u5065\u58EE\u5982\u864E\u7684\u6210\u5E74\u4EBA\u5219\u662F\u4E00\u9635\u7B11\u9A82\uFF0C\u6570\u843D\u7740\u81EA\u5DF1\u7684\u5B69\u5B50\uFF0C\u62CE\u7740\u9AA8\u68D2\u4E0E\u9614\u5251\u4E5F\u5FEB\u6B65\u5411\u81EA\u5BB6\u4E2D\u8D70\u53BB\u3002\n\n    \u77F3\u6751\u4E0D\u662F\u5F88\u5927\uFF0C\u7537\u5973\u8001\u5C11\u52A0\u8D77\u6765\u80FD\u6709\u4E09\u767E\u591A\u4EBA\uFF0C\u5C4B\u5B50\u90FD\u662F\u5DE8\u77F3\u780C\u6210\u7684\uFF0C\u7B80\u6734\u800C\u81EA\u7136\u3002\n\n    \u5728\u6751\u5934\u6709\u4E00\u622A\u5DE8\u5927\u7684\u96F7\u51FB\u6728\uFF0C\u76F4\u5F84\u5341\u51E0\u7C73\uFF0C\u6B64\u65F6\u4E3B\u5E72\u4E0A\u552F\u4E00\u7684\u67F3\u6761\u5DF2\u7ECF\u5728\u671D\u971E\u4E2D\u63A9\u53BB\u4E86\u83B9\u5149\uFF0C\u53D8\u5F97\u666E\u666E\u901A\u901A\u4E86\u3002\n\n    \u201C\u5662\uFF0C\u5C45\u7136\u6709\u571F\u9F99\u8089\uFF0C\u7ED9\u6211\u4E00\u5757\uFF01\u201D\n\n    \u8FD9\u4E9B\u5B69\u5B50\u90FD\u5F88\u6D3B\u6CFC\u4E0E\u597D\u52A8\uFF0C\u5373\u4FBF\u5403\u996D\u65F6\u4E5F\u90FD\u4E0D\u592A\u8001\u5B9E\uFF0C\u4E0D\u5C11\u4EBA\u62B1\u7740\u9676\u7897\u4ECE\u81EA\u5BB6\u51FA\u6765\uFF0C\u51D1\u5230\u4E86\u4E00\u8D77\u3002\n\n    \u77F3\u6751\u5468\u56F4\u8349\u6728\u4E30\u8302\uFF0C\u731B\u517D\u4F17\u591A\uFF0C\u53EF\u5B88\u7740\u5927\u5C71\uFF0C\u6751\u4EBA\u7684\u98DF\u7269\u76F8\u5BF9\u6765\u8BF4\u5374\u7B97\u4E0D\u4E0A\u4E30\u76DB\uFF0C\u53EA\u662F\u4E00\u4E9B\u7C97\u9EA6\u997C\u3001\u91CE\u679C\u4EE5\u53CA\u5B69\u5B50\u4EEC\u7897\u4E2D\u5C11\u91CF\u7684\u8089\u98DF\u3002\n\n    \u4E8B\u5B9E\u4E0A\uFF0C\u98DF\u7269\u4E0D\u5145\u88D5\u5BF9\u4E8E\u77F3\u6751\u6765\u8BF4\u4E00\u76F4\u662F\u4E00\u4E2A\u5F88\u4E25\u91CD\u7684\u95EE\u9898\u3002\u5C71\u8109\u4E2D\u5341\u5206\u5371\u9669\uFF0C\u90A3\u4E9B\u5F02\u517D\u51F6\u79BD\u8FC7\u4E8E\u5F3A\u5927\u4E0E\u6050\u6016\uFF0C\u6BCF\u4E00\u6B21\u53BB\u72E9\u730E\u90FD\u53EF\u80FD\u4F1A\u6709\u4EBA\u4E22\u6389\u6027\u547D\u3002\n\n    \u5982\u679C\u6709\u9009\u62E9\uFF0C\u6751\u4EBA\u662F\u4E0D\u613F\u8FDB\u5C71\u7684\u3002\u56E0\u4E3A\u8FDB\u5C71\u5C31\u610F\u5473\u7740\u53EF\u80FD\u4F1A\u6709\u6D41\u8840\u4E0E\u727A\u7272\u3002\n\n    \u98DF\u7269\u5BF9\u4E8E\u4ED6\u4EEC\u6765\u8BF4\u975E\u5E38\u5B9D\u8D35\uFF0C\u5BB9\u4E0D\u5F97\u6D6A\u8D39\uFF0C\u6BCF\u4E00\u4E2A\u5B69\u5B50\u4ECE\u5C0F\u5C31\u61C2\u5F97\u8FD9\u4E00\u70B9\uFF0C\u9965\u997F\u3001\u98DF\u7269\u3001\u72E9\u730E\u3001\u6027\u547D\u3001\u9C9C\u8840\u8FD9\u4E9B\u662F\u76F8\u8FDE\u7684\u3002\n\n    \u6751\u5934\u662F\u8001\u65CF\u957F\u77F3\u4E91\u5CF0\u7684\u9662\u843D\uFF0C\u7531\u5DE8\u77F3\u5806\u780C\u800C\u6210\uFF0C\u7D27\u6328\u7740\u7126\u9ED1\u800C\u5DE8\u5927\u7684\u67F3\u6728\u3002\u9662\u5185\u7684\u7076\u53F0\u524D\uFF0C\u9676\u7F50\u5185\u767D\u8272\u6C41\u6DB2\u6CB8\u817E\uFF0C\u5976\u9999\u6251\u9F3B\uFF0C\u4ED6\u6B63\u5728\u71AC\u716E\u517D\u5976\uFF0C\u6B64\u5916\u4E0D\u65F6\u5C06\u4E00\u4E9B\u836F\u8349\u7B49\u6295\u653E\u8FDB\u53BB\uFF0C\u4EE5\u6728\u52FA\u6162\u6162\u6405\u52A8\u3002\n\n    \u4E0D\u591A\u65F6\uFF0C\u8001\u4EBA\u558A\u9053\uFF1A\u201C\u5C0F\u4E0D\u70B9\uFF0C\u8FC7\u6765\u5403\u4E1C\u897F\u3002\u201D\n\n    \u5C0F\u4E0D\u70B9\u5728\u534A\u5C81\u65F6\u5C31\u5931\u53BB\u4E86\u7236\u6BCD\uFF0C\u662F\u5403\u767E\u517D\u5976\u957F\u5927\u7684\uFF0C\u800C\u4ECA\u5DF2\u7ECF\u4E00\u5C81\u96F6\u51E0\u4E2A\u6708\u4E86\uFF0C\u82E5\u662F\u5BFB\u5E38\u7684\u5B69\u5B50\u65E9\u8BE5\u65AD\u5976\u4E86\uFF0C\u800C\u4ED6\u5374\u4F9D\u65E7\u5403\u7684\u5F88\u9999\u751C\uFF0C\u4E0D\u80AF\u65AD\u6389\uFF0C\u5E38\u88AB\u5927\u4E00\u4E9B\u7684\u5B69\u5B50\u53D6\u7B11\u3002\n\n    \u201C\u54BF\u5440\uFF0C\u547C\u2026\u2026\u8DD1\u4E0D\u52A8\u4E86\u3002\u201D\u4ED6\u4E00\u76F4\u5728\u9532\u800C\u4E0D\u820D\u5730\u8FFD\u90A3\u53EA\u4E94\u8272\u96C0\uFF0C\u65E9\u5DF2\u6C14\u5598\u5401\u5401\uFF0C\u6B64\u65F6\u4E00\u5C41\u80A1\u5750\u5728\u4E86\u5730\u4E0A\u3002\n\n    \u201C\u5C0F\u4E0D\u70B9\u5403\u5976\u55BD\uFF01\u201D\u4E00\u7FA4\u5927\u5B69\u5B50\u8D77\u54C4\u3002\n\n    \u201C\u4F60\u4EEC\u8FD9\u7FA4\u5C0F\u76AE\u7334\u5B50\uFF0C\u8FD8\u4E0D\u90FD\u662F\u4ECE\u4ED6\u8FD9\u4E2A\u5E74\u9F84\u8FC7\u6765\u7684\u3002\u201D\u8001\u65CF\u957F\u7B11\u9A82\u9053\u3002\n\n    \u201C\u6211\u4EEC\u53EF\u6CA1\u6709\u5728\u4E00\u5C81\u534A\u65F6\u8FD8\u5728\u5403\u5976\uFF0C\u563F\u563F\u3002\u201D\n\n    \u9762\u5BF9\u5927\u5B69\u5B50\u7684\u53D6\u7B11\uFF0C\u5C0F\u4E0D\u70B9\u61A8\u61A8\u7684\u7B11\u7740\uFF0C\u9ED1\u4EAE\u7684\u5927\u773C\u772F\u6210\u4E86\u6708\u7259\u72B6\uFF0C\u6BEB\u4E0D\u5728\u4E4E\uFF0C\u5750\u5728\u9676\u7F50\u524D\u7528\u6728\u52FA\u8200\u5976\uFF0C\u5403\u7684\u5F88\u9999\u751C\u3002\n\n    \u65E9\u996D\u8FC7\u540E\uFF0C\u6751\u4E2D\u51E0\u540D\u5E74\u5C81\u5F88\u5927\u7684\u8001\u4EBA\u4E00\u8D77\u6765\u5230\u65CF\u957F\u77F3\u4E91\u5CF0\u7684\u9662\u5B50\u4E2D\uFF0C\u867D\u7136\u65E9\u5DF2\u987B\u53D1\u7686\u767D\uFF0C\u4F46\u7CBE\u6C14\u795E\u90FD\u8FD8\u5F88\u8DB3\u3002\n\n    \u201C\u6700\u8FD1\u4E0D\u592A\u5BF9\u52B2\u554A\uFF0C\u6DF1\u591C\u603B\u662F\u6709\u5927\u5BB6\u4F19\u8DEF\u8FC7\uFF0C\u52A8\u9759\u5B9E\u5728\u592A\u5927\u4E86\uFF0C\u8FD9\u5C71\u8109\u6DF1\u5904\u4E00\u5B9A\u53D1\u751F\u4E86\u4EC0\u4E48\u3002\u201D\n\n    \u201C\u5514\uFF0C\u6628\u5929\u591C\u91CC\u6211\u88AB\u60CA\u9192\u4E86\u51E0\u6B21\uFF0C\u76AE\u9AA8\u53D1\u5BD2\uFF0C\u4E00\u5B9A\u662F\u6709\u4EC0\u4E48\u6D2A\u8352\u51F6\u517D\u4E0E\u5927\u866B\u4ECE\u8FD9\u91CC\u8DEF\u8FC7\u3002\u201D\n\n    \u51E0\u540D\u8001\u4EBA\u5148\u540E\u5F00\u53E3\uFF0C\u4ED6\u4EEC\u6216\u8E59\u7709\u6216\u6DF1\u601D\uFF0C\u8BA8\u8BBA\u6700\u8FD1\u7684\u4E00\u4E9B\u5371\u9669\u5F81\u5146\uFF0C\u89C9\u5F97\u6709\u4E0D\u540C\u5BFB\u5E38\u7684\u4E8B\u60C5\u53D1\u751F\u4E86\u3002\n\n    \u201C\u6211\u89C9\u5F97\u8FD9\u5927\u8352\u6DF1\u5904\u53EF\u80FD\u51FA\u4E86\u4E86\u4E0D\u5F97\u7684\u4E1C\u897F\uFF0C\u5F15\u8D77\u4E86\u5468\u56F4\u5730\u57DF\u4E00\u4E9B\u592A\u53E4\u9057\u79CD\u7684\u6CE8\u610F\uFF0C\u7EB7\u7EB7\u8D76\u8FC7\u53BB\u4E86\u3002\u201D\u8001\u65CF\u957F\u77F3\u4E91\u5CF0\u601D\u5FD6\u540E\u8BF4\u9053\u3002\n\n    \u201C\u8BE5\u4E0D\u4F1A\u662F\u51FA\u4E86\u5C71\u5B9D\u5427\uFF1F\u201D\u4E00\u4E2A\u8001\u4EBA\u987F\u65F6\u77AA\u5706\u4E86\u773C\u775B\uFF0C\u987B\u53D1\u7686\u5F20\uFF0C\u9732\u51FA\u60CA\u5BB9\u3002\n\n    \u5176\u4ED6\u4EBA\u4E5F\u90FD\u9732\u51FA\u5F02\u8272\uFF0C\u773C\u795E\u706B\u70ED\uFF0C\u4F46\u5F88\u5FEB\u53C8\u90FD\u7184\u706D\u4E86\u7738\u4E2D\u7684\u706B\u7130\uFF0C\u90A3\u79CD\u4E1C\u897F\u4E0D\u662F\u4ED6\u4EEC\u80FD\u5F97\u5230\u7684\uFF0C\u8FDC\u5728\u5C71\u8109\u6700\u6DF1\u5904\uFF0C\u6CA1\u4EBA\u8FDB\u7684\u53BB\u3002\n\n    \u8FD9\u4E48\u591A\u5E74\u6765\u4ECE\u672A\u6709\u4EBA\u80FD\u6D3B\u7740\u8FDB\u51FA\u4E00\u8D9F\uFF0C\u5C71\u4E2D\u5404\u79CD\u5F3A\u6A2A\u7269\u79CD\u51FA\u6CA1\uFF0C\u5373\u4FBF\u77F3\u6751\u6240\u6709\u4EBA\u9F50\u95EF\uFF0C\u4E5F\u8FDE\u4E00\u6735\u6D6A\u82B1\u90FD\u4E0D\u4F1A\u6CDB\u8D77\u3002\n\n    \u201C\u65CF\u957F\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E9B\u65E5\u5B50\u6CA1\u6709\u8FDB\u5C71\u4E86\u3002\u201D\u5C31\u5728\u8FD9\u65F6\uFF0C\u4E00\u4E2A\u96C4\u58EE\u7684\u6210\u5E74\u7537\u5B50\u8D70\u8FDB\u9662\u4E2D\uFF0C\u4ED6\u662F\u72E9\u730E\u961F\u4F0D\u7684\u5934\u9886\uFF0C\u4E5F\u5C06\u662F\u77F3\u6751\u7684\u4E0B\u4EFB\u65CF\u957F\u3002\n\n    \u201C\u6700\u8FD1\u6709\u4E9B\u4E0D\u592A\u5E73\u554A\u3002\u201D\u8001\u65CF\u957F\u77F3\u4E91\u5CF0\u76B1\u7709\u3002\n\n    \u201C\u53EF\u662F\u98DF\u7269\u771F\u7684\u4E0D\u591A\u4E86\u3002\u201D\u77F3\u6797\u864E\u9053\uFF0C\u4ED6\u8EAB\u6750\u6781\u4E3A\u9AD8\u5927\uFF0C\u4E24\u7C73\u6709\u4F59\uFF0C\u80CC\u7740\u4E00\u53E3\u4E09\u767E\u4F59\u65A4\u7684\u9614\u5251\uFF0C\u6574\u4E2A\u4EBA\u58EE\u7684\u5982\u540C\u4E00\u5934\u4EBA\u718A\uFF0C\u6D51\u8EAB\u53E4\u94DC\u8272\u7684\u808C\u8089\u4E00\u5757\u5757\uFF0C\u5982\u4E00\u6761\u6761\u86C7\u87D2\u5728\u6E38\u52A8\u3002\n\n    \u201C\u5A03\u5B50\u4EEC\u9700\u8981\u957F\u8EAB\u4F53\uFF0C\u4E0D\u80FD\u997F\u7740\uFF0C\u5F97\u60F3\u4E9B\u529E\u6CD5\u3002\u201D\u6709\u8001\u4EBA\u5F00\u53E3\u3002\n\n    \u201C\u867D\u7136\u591C\u91CC\u4E0D\u5E73\u9759\uFF0C\u4F46\u767D\u5929\u5012\u662F\u6CA1\u6709\u4EC0\u4E48\u5F02\u5E38\uFF0C\u6211\u5E26\u4E9B\u4EBA\u51FA\u53BB\uFF0C\u5C0F\u5FC3\u4E00\u70B9\u5E94\u8BE5\u6CA1\u95EE\u9898\u3002\u201D\u77F3\u6797\u864E\u9053\u3002\n\n    \u6700\u540E\uFF0C\u51E0\u5341\u540D\u9752\u58EE\u5E74\u7537\u5B50\u5728\u6751\u5934\u96C6\u5408\uFF0C\u7531\u65CF\u957F\u77F3\u4E91\u5CF0\u5E26\u7740\u6765\u5230\u65C1\u8FB9\u7684\u96F7\u51FB\u6728\u524D\uFF0C\u5BF9\u7740\u8001\u67F3\u6811\u8BA4\u771F\u7948\u7977\u3002\n\n    \u201C\u796D\u7075\uFF0C\u8BF7\u4FDD\u4F51\u65CF\u4EBA\uFF0C\u8BA9\u5B69\u5B50\u4EEC\u6253\u5230\u80A5\u7F8E\u7684\u730E\u7269\uFF0C\u5E73\u5B89\u5F52\u6765\u3002\u6211\u4EEC\u5C06\u4EE5\u8654\u8BDA\u7684\u5FC3\uFF0C\u4E16\u4EE3\u796D\u7940\u4E0E\u4F9B\u517B\u4F60\u3002\u201D\n\n    \u5F00\u59CB\u4E0A\u4F20\u4E86\uFF0C\u6BCF\u4E00\u4E2A\u70B9\u51FB\u3001\u63A8\u8350\u3001\u6536\u85CF\u90FD\u5BF9\u8FD9\u672C\u65B0\u4E66\u5F88\u91CD\u8981\uFF0C\u8BA9\u672C\u4E66\u51B2\u8D77\uFF0C\u79BB\u4E0D\u5F00\u6BCF\u4E00\u4F4D\u5144\u5F1F\u59D0\u59B9\uFF0C\u9700\u8981\u5927\u5BB6\u7684\u652F\u6301\u3002\u53E6\u5916\uFF0C\u4ECA\u5929\u665A\u4E0A\u516B\u70B9\u5927\u5BB6\u53EF\u4EE5\u6765\u6B6A\u6B6A2579\u73A9\uFF0C\u6211\u4E5F\u53BB\u3002\u8FD8\u6709\uFF0C\u8C22\u8C22\u98D8\u7EA2\u4E0E\u6253\u8D4F\u7684\u6240\u6709\u5144\u5F1F\u59D0\u59B9\uFF01\n    ",
    currentValue: 0,
    isLight: true,
    fontsize: 40,
    titleStatus: false,
    settingStatus: false,
    readSettingStatus: false,
    backgroundColor: 'day',
    contentClassName: '',
    chapterTitleClassName: '',
    chapterContentClassName: '',
    pageModel: 'vertical',
    img: {
      "lastChapter": "/Page_Read/img/last_chapter.png",
      "back": "/Page_Read/img/back.png",
      "list": "/Page_Read/img/list.png",
      "moon": "/Page_Read/img/moon.png",
      "setting": "/Page_Read/img/setting.png",
      "sun": "/Page_Read/img/sun.png",
      "nextChapter": "/Page_Read/img/next_chapter.png"
    },
    novelcover: {
      "hand": "/Page_Read/img/hand.png",
      "left_arrows": "/Page_Read/img/left_arrows.png",
      "point": "/Page_Read/img/point.png",
      "right_arrows": "/Page_Read/img/right_arrows.png"
    },
    backgroundColorName: {
      name1: '护眼',
      name2: '羊皮纸',
      name3: '夜之魅',
      name4: '纸之灵'
    }
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      textColor: '#1a1a1a',
      backgroundColor: '#f2f2f2',
      text: '阅读',
      menu: true
    });

    if (this.item) {
      this.item = JSON.parse(this.item);
    }

    if (this.item.catalogueTitle) {
      this.title = this.item.catalogueTitle;
      this.catalogueNumber = this.item.catalogueNumber;
    }
  },
  showSetting: function showSetting() {
    this.titleStatus = true;
    this.settingStatus = true;
    this.$page.setTitleBar({
      textColor: 'rgba(255,255,255,0.5)',
      backgroundColor: '#262626'
    });
  },
  hideSetting: function hideSetting() {
    this.titleStatus = false;
    this.settingStatus = false;
    this.readSettingStatus = false;
    this.$page.setTitleBar({
      textColor: '#1a1a1a'
    });

    if (this.backgroundColor === 'day') {
      this.$page.setTitleBar({
        backgroundColor: '#ffffff'
      });
    } else if (this.backgroundColor === 'night') {
      this.$page.setTitleBar({
        backgroundColor: '#2b2b2b'
      });
    } else if (this.backgroundColor === 'green') {
      this.$page.setTitleBar({
        backgroundColor: '#66cc99'
      });
    } else if (this.backgroundColor === 'yellow') {
      this.$page.setTitleBar({
        backgroundColor: '#e6d9ba'
      });
    } else if (this.backgroundColor === 'gray') {
      this.$page.setTitleBar({
        backgroundColor: '#555555'
      });
    }
  },
  changelight: function changelight() {
    this.isLight = !this.isLight;
    this.titleStatus = false;

    if (this.backgroundColor === 'day') {
      this.$page.setTitleBar({
        textColor: '#1a1a1a',
        backgroundColor: '#ffffff'
      });
    } else if (this.backgroundColor === 'night') {
      this.$page.setTitleBar({
        textColor: 'rgba(255,255,255,0.5)',
        backgroundColor: '#2b2b2b'
      });
    }
  },
  readSetting: function readSetting() {
    this.readSettingStatus = true;
    this.titleStatus = false;
  },
  changefontsize: function changefontsize(value) {
    if (value === "reduce") {
      this.fontsize = this.fontsize - 1;
    } else if (value === "release") {
        this.fontsize = this.fontsize + 1;
      }
  },
  changePagingModel: function changePagingModel(pagingModel) {
    this.pageModel = pagingModel;
  },
  changeBackgroundColor: function changeBackgroundColor(backgroundColor) {
    this.titleStatus = false;
    this.backgroundColor = backgroundColor;

    if (backgroundColor === 'day') {
      this.contentClassName = 'content';
      this.chapterTitleClassName = 'chapter-title';
      this.chapterContentClassName = 'chapter-content';
    } else if (backgroundColor === 'night') {
      this.contentClassName = 'night-content';
      this.chapterTitleClassName = 'night-chapter-title';
      this.chapterContentClassName = 'night-chapter-content';
    } else if (backgroundColor === 'green') {
      this.contentClassName = 'green-content';
      this.chapterTitleClassName = 'green-chapter-title';
      this.chapterContentClassName = 'green-chapter-content';
    } else if (backgroundColor === 'yellow') {
      this.contentClassName = 'yellow-content';
      this.chapterTitleClassName = 'yellow-chapter-title';
      this.chapterContentClassName = 'yellow-chapter-content';
    } else if (backgroundColor === 'gray') {
      this.contentClassName = 'gray-content';
      this.chapterTitleClassName = 'gray-chapter-title';
      this.chapterContentClassName = 'gray-chapter-content';
    } else if (backgroundColor === 'day') {
      this.contentClassName = 'content';
      this.chapterTitleClassName = 'chapter-title';
      this.chapterContentClassName = 'chapter-content';
    }

    if (this.backgroundColor === 'day') {
      this.$page.setTitleBar({
        textColor: '#1a1a1a',
        backgroundColor: '#ffffff'
      });
    } else if (this.backgroundColor === 'night') {
      this.$page.setTitleBar({
        textColor: '#f2f2f2',
        backgroundColor: '#2b2b2b'
      });
    } else if (this.backgroundColor === 'green') {
      this.$page.setTitleBar({
        textColor: '#1a1a1a',
        backgroundColor: '#66cc99'
      });
    } else if (this.backgroundColor === 'yellow') {
      this.$page.setTitleBar({
        textColor: '#1a1a1a',
        backgroundColor: '#e6d9ba'
      });
    } else if (this.backgroundColor === 'gray') {
      this.$page.setTitleBar({
        textColor: '#f2f2f2',
        backgroundColor: '#555555'
      });
    }
  },
  getValue: function getValue(name, e) {
    this[name] = e.progress;
  },
  clickToBack: function clickToBack() {
    _system["default"].back();
  },
  clickToList: function clickToList() {
    _system["default"].push({
      uri: '/Page_Catalogue',
      params: {
        testId: 'testId'
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFBhZ2VfUmVhZFxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfUmVhZC9pbmRleC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9SZWFkL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlX1JlYWQvY29tcG9uZW50L2Nfbm92ZWxfY292ZXIudXg/MTU5NiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9SZWFkL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4PzRmZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfUmVhZC9jb21wb25lbnQvY19ub3ZlbF9jb3Zlci51eD9mZDViIiwid2VicGFjazovLy8uL3NyYy9QYWdlX1JlYWQvaW5kZXgudXg/ZTg2YiIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9SZWFkL2luZGV4LnV4P2IzZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfUmVhZC9pbmRleC51eD8yZjE1Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMzEpO1xuIiwicmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4P25hbWU9bm92ZWxjb3ZlclwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfUmVhZFxcXFxpbmRleC51eCEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfUmVhZFxcXFxpbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuMS4wLVN0YWJsZS4zMDAnfSkiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX25vdmVsX2NvdmVyLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX1JlYWRcXFxcY29tcG9uZW50XFxcXGNfbm92ZWxfY292ZXIudXghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxxdWlja2FwcFxcXFxrb2FsYUNhaXB1XFxcXGNvbS5tZW51LnF1aWNrXFxcXHNyY1xcXFxQYWdlX1JlYWRcXFxcY29tcG9uZW50XFxcXGNfbm92ZWxfY292ZXIudXghLi9jX25vdmVsX2NvdmVyLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2Nfbm92ZWxfY292ZXIudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9ub3ZlbGNvdmVyJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250YWluZXJfY292ZXJcIlxuICAgICAgXSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRpc3BsYXl9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2tUb0hpZGVcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIiDngrnlh7vkuK3pl7RcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjZW50ZXJfdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiIOWRvOWHuuiPnOWNlVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNlbnRlcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubm92ZWxjb3Zlci5wb2ludH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2VudGVyX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGlja1RvSGlkZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5vdmVsY292ZXIuaGFuZH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2VudGVyX2hhbmRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9IaWRlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyX2NvdmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmNvbnRlbnRcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLmNlbnRlcl9oYW5kX2ltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogXCIzNzFweFwiLFxuICAgIFwidG9wXCI6IFwiNTMwcHhcIlxuICB9LFxuICBcIi5jZW50ZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCIzMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzNjBweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjQpXCJcbiAgfSxcbiAgXCIuY2VudGVyX2ltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTAlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIubGVmdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MTdweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIucmlnaHRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTE3cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLmNlbnRlcl90ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIlxuICB9LFxuICBcIi5sZWZ0X3RleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnJpZ2h0X3RleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczogWydub3ZlbGNvdmVyJ10sXG4gIGRhdGE6IHtcbiAgICBkaXNwbGF5OiB0cnVlXG4gIH0sXG4gIGNsaWNrVG9IaWRlOiBmdW5jdGlvbiBjbGlja1RvSGlkZSgpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInJlYWRcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydjb250ZW50JywgdGhpcy5jb250ZW50Q2xhc3NOYW1lXX0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJzaG93U2V0dGluZ1wiXG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAn56ysJysodGhpcy5jYXRhbG9ndWVOdW1iZXIpKyfnq6DCoCcrKHRoaXMudGl0bGUpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2NoYXB0ZXItdGl0bGUnLCB0aGlzLmNoYXB0ZXJUaXRsZUNsYXNzTmFtZV19LFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJmb250U2l6ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY2hhbmdlZEZvbnRTaXplfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY29udGVudH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydjaGFwdGVyLWNvbnRlbnQnLCB0aGlzLmNoYXB0ZXJDb250ZW50Q2xhc3NOYW1lXX0sXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZvbnRTaXplXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5mb250c2l6ZX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2V0dGluZ1N0YXR1c30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaGlkZS1jb3ZlclwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiaGlkZVNldHRpbmdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZXR0aW5nU3RhdHVzJiYhdGhpcy5yZWFkU2V0dGluZ1N0YXR1c30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2hvdy1zZXR0aW5nXCIsXG4gICAgICAgIFwic2V0dGluZ1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZXR0aW5nLWJvdHRvbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2V0dGluZy1ib3R0b20taXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLmxhc3RDaGFwdGVyfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4iuS4gOeroFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZXR0aW5nLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGlja1RvTGlzdFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLmxpc3R9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi56ug6IqC55uu5b2VXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcj09J2RheSd9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZXR0aW5nLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcignbmlnaHQnLGV2dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLm1vb259XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pel5aSc5qih5byPXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhKHRoaXMuYmFja2dyb3VuZENvbG9yPT0nZGF5Jyl9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZXR0aW5nLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcignZGF5JyxldnQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmltZy5zdW59XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pel5aSc5qih5byPXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNldHRpbmctYm90dG9tLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlYWRTZXR0aW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbWcuc2V0dGluZ31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpmIXor7vorr7nva5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2V0dGluZy1ib3R0b20taXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLm5leHRDaGFwdGVyfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4i+S4gOeroFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlYWRTZXR0aW5nU3RhdHVzfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzaG93LXNldHRpbmdcIixcbiAgICAgICAgXCJzZXR0aW5nXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJlYWQtc2V0dGluZy10b3BcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInJlYWQtc2l6ZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJBIC1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFkLXNpemUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuY2hhbmdlZm9udHNpemUoJ3JlZHVjZScsZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmZvbnRzaXplfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFkLXNpemUtbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNoYW5nZWZvbnRzaXplKCdtaWRkbGUnLGV2dCl9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiQSArXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicmVhZC1zaXplLWxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNoYW5nZWZvbnRzaXplKCdyZWxlYXNlJyxldnQpfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJlYWQtc2V0dGluZy1ib3R0b21cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3JOYW1lLm5hbWUxfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJvbmVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2NmNjOTlcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuY2hhbmdlQmFja2dyb3VuZENvbG9yKCdncmVlbicsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvck5hbWUubmFtZTJ9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR3b1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZWJkN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5jaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoJ3llbGxvdycsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvck5hbWUubmFtZTN9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRocmVlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNTU1NTU1XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcignZ3JheScsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvck5hbWUubmFtZTR9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImZvdXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkY1RUVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuY2hhbmdlQmFja2dyb3VuZENvbG9yKCdkYXknLGV2dCl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICF0aGlzLnJlYWRTZXR0aW5nU3RhdHVzfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJuby1zZXR0aW5nXCIsXG4gICAgICAgIFwic2V0dGluZ1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJub3ZlbGNvdmVyXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5vdmVsY292ZXJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5vdmVsY292ZXJ9XG4gICAgICB9XG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnJlYWRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucmVhZC10b3BcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI2MjYyNlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnJlYWQtdG9wIGltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjVweFwiXG4gIH0sXG4gIFwiLmNvbnRlbnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5kYXktY29udGVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjMwLDIxNywxODYpXCIsXG4gICAgXCJjb2xvclwiOiBcInJnYigyNiwyNiwyNilcIlxuICB9LFxuICBcIi5uaWdodC1jb250ZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyYjJiMmJcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCIuZ3JlZW4tY29udGVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNjZjYzk5XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYigyNiwyNiwyNilcIlxuICB9LFxuICBcIi55ZWxsb3ctY29udGVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjMwLDIxNywxODYpXCIsXG4gICAgXCJjb2xvclwiOiBcInJnYigyNiwyNiwyNilcIlxuICB9LFxuICBcIi5ncmF5LWNvbnRlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzU1NTU1NVwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIlxuICB9LFxuICBcIi5jaGFwdGVyLXRpdGxlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiM3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIuZGF5LWNoYXB0ZXItdGl0bGVcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDI2LDI2LDI2LDAuNylcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgyNiwyNiwyNiwwLjcpXCJcbiAgfSxcbiAgXCIubmlnaHQtY2hhcHRlci10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIlxuICB9LFxuICBcIi5ncmVlbi1jaGFwdGVyLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNiwyNiwyNiwwLjcpXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC43KVwiXG4gIH0sXG4gIFwiLnllbGxvdy1jaGFwdGVyLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNiwyNiwyNiwwLjcpXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC43KVwiXG4gIH0sXG4gIFwiLmdyYXktY2hhcHRlci10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIlxuICB9LFxuICBcIi5kYXktY2hhcHRlci1jb250ZW50XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCIubmlnaHQtY2hhcHRlci1jb250ZW50XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCIuZ3JlZW4tY2hhcHRlci1jb250ZW50XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNiwyNiwyNiwwLjcpXCJcbiAgfSxcbiAgXCIueWVsbG93LWNoYXB0ZXItY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC43KVwiXG4gIH0sXG4gIFwiLmdyYXktY2hhcHRlci1jb250ZW50XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCIuc2hvdy1jb3ZlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogXCIxMDBweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibGVmdFwiOiBcIjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcIi5oaWRlLWNvdmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiBcIjEwMHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBweFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIuY292ZXItbGVmdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI1JVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLmNvdmVyLWNlbnRlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM1JVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLmNvdmVyLXJpZ2h0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuc2hvdy1zZXR0aW5nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI2MjYyNlwiXG4gIH0sXG4gIFwiLm5vLXNldHRpbmdcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuc2V0dGluZ1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5pdGVtLWNvbnRlbnRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgIFwid2lkdGhcIjogXCI2NSVcIlxuICB9LFxuICBcIi5zbGlkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI0VFNUM0MlwiLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCJcbiAgfSxcbiAgXCIuc2V0dGluZy1ib3R0b21cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzNHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMTdweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNldHRpbmctYm90dG9tLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTcxcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIuc2V0dGluZy1ib3R0b20taXRlbSBpbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5zZXR0aW5nLWJvdHRvbS1pdGVtIHRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRTZFNkU2XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjAuOHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0cHhcIlxuICB9LFxuICBcIi5yZWFkLXNldHRpbmctdG9wXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiOTAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNTBweFwiXG4gIH0sXG4gIFwiLnJlYWQtc2l6ZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM4NHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2N3B4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMi4xcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIyLjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIyLjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMi4xcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg1MSw1MSw1MSwwLjMpXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnJlYWQtc2l6ZSB0ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzMlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5yZWFkLXNpemUtc21hbGxcIjoge1xuICAgIFwiY29sb3JcIjogXCIjQThBOEE4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiXG4gIH0sXG4gIFwiLnJlYWQtc2l6ZS1taWRkbGVcIjoge1xuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIyLjFweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0U2RTZFNlwiXG4gIH0sXG4gIFwiLnJlYWQtc2l6ZS1sYXJnZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNBOEE4QThcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjIuMXB4XCJcbiAgfSxcbiAgXCIucmVhZC1wYWdpbmdcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDUlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZjBmZmZmXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYTlhOWE5XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2E5YTlhOVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYTlhOWE5XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjYTlhOWE5XCJcbiAgfSxcbiAgXCIucmVhZC1wYWdpbmctYWN0aXZlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ1JVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0VFNUM0MlwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0VFNUM0MlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNFRTVDNDJcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0VFNUM0MlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0VFNUM0MlwiXG4gIH0sXG4gIFwiLnJlYWQtc2V0dGluZy1ib3R0b21cIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNTBweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDIxNiwyMTYsMjE2LDAuMTUpXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiXG4gIH0sXG4gIFwiLnJlYWQtc2V0dGluZy1ib3R0b20gdGV4dFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2MHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEzJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjAlXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcInByb3RlY3RlZFwiOiB7XG4gICAgaXRlbTogJydcbiAgfSxcbiAgXCJwdWJsaWNcIjoge1xuICAgIGNhdGFsb2d1ZU51bWJlcjogMSxcbiAgICB0aXRsZTogJ+acneawlOiTrOWLgycsXG4gICAgY29udGVudDogXCIgXFx1NTkxQ1xcdTVERjJcXHU2REYxXFx1RkYwQ1xcdTZGMDZcXHU5RUQxXFx1NEUwMFxcdTcyNDdcXHVGRjBDXFx1NjY2RlxcdTcyNjlcXHU0RTBEXFx1NTNFRlxcdTg5QzFcXHUzMDAyXFx1NEY0NlxcdTVDNzFcXHU0RTJEXFx1NUU3NlxcdTRFMERcXHU1QjgxXFx1OTc1OVxcdUZGMENcXHU3MzFCXFx1NTE3RFxcdTU0ODZcXHU1NEVFXFx1RkYwQ1xcdTk3MDdcXHU1MkE4XFx1NUM3MVxcdTZDQjNcXHVGRjBDXFx1NEUwN1xcdTY3MjhcXHU2NDQ3XFx1OThBNFxcdUZGMENcXHU0RTcxXFx1NTNGNlxcdTdDMENcXHU3QzBDXFx1NTc2MFxcdTg0M0RcXHUzMDAyXFxuXFxuICAgIFxcdTdGQTRcXHU1QzcxXFx1NEUwN1xcdTU4RDFcXHU5NUY0XFx1RkYwQ1xcdTZEMkFcXHU4MzUyXFx1NzMxQlxcdTUxN0RcXHU2QTJBXFx1ODg0Q1xcdUZGMENcXHU1OTJBXFx1NTNFNFxcdTkwNTdcXHU3OUNEXFx1NTFGQVxcdTZDQTFcXHVGRjBDXFx1NTQwNFxcdTc5Q0RcXHU1M0VGXFx1NjAxNVxcdTc2ODRcXHU1OEYwXFx1OTdGM1xcdTU3MjhcXHU5RUQxXFx1NjY5N1xcdTRFMkRcXHU2QjY0XFx1OEQ3N1xcdTVGN0NcXHU0RjBGXFx1RkYwQ1xcdTc2RjRcXHU2QjMyXFx1ODhDMlxcdTVGMDBcXHU4RkQ5XFx1NTkyOVxcdTU3MzBcXHUzMDAyXFxuXFxuICAgIFxcdTVDNzFcXHU4MTA5XFx1NEUyRFxcdUZGMENcXHU4RkRDXFx1OEZEQ1xcdTY3MUJcXHU1M0JCXFx1NjcwOVxcdTRFMDBcXHU1NkUyXFx1NjdENFxcdTU0OENcXHU3Njg0XFx1NTE0OVxcdTk2OTBcXHU3M0IwXFx1RkYwQ1xcdTU3MjhcXHU4RkQ5XFx1OUVEMVxcdTY2OTdcXHU2NUUwXFx1NUMzRFxcdTc2ODRcXHU1OTFDXFx1NUU1NVxcdTRFMEJcXHU0RTBFXFx1NEUwN1xcdTVDNzFcXHU5NUY0XFx1NzJCOVxcdTU5ODJcXHU0RTAwXFx1NzBCOVxcdTcwREJcXHU3MDZCXFx1NTcyOFxcdTY0NDdcXHU2NkYzXFx1RkYwQ1xcdTk2OEZcXHU2NUY2XFx1NEYxQVxcdTcxODRcXHU3MDZEXFx1MzAwMlxcblxcbiAgICBcXHU2RTEwXFx1NkUxMFxcdTYzQTVcXHU4RkQxXFx1RkYwQ1xcdTUzRUZcXHU0RUU1XFx1NzcwQlxcdTZFMDVcXHU5MEEzXFx1OTFDQ1xcdTY3MDlcXHU1MzRBXFx1NjIyQVxcdTVERThcXHU1OTI3XFx1NzY4NFxcdTY3QUZcXHU2NzI4XFx1RkYwQ1xcdTY4MTFcXHU1RTcyXFx1NzZGNFxcdTVGODRcXHU4REIzXFx1NjcwOVxcdTUzNDFcXHU1MUUwXFx1N0M3M1xcdUZGMENcXHU5MDFBXFx1NEY1M1xcdTcxMjZcXHU5RUQxXFx1MzAwMlxcdTk2NjRcXHU1Mzc0XFx1NTM0QVxcdTYyMkFcXHU0RTNCXFx1NUU3MlxcdTU5MTZcXHVGRjBDXFx1NUI4M1xcdTUzRUFcXHU1MjY5XFx1NEUwQlxcdTRFODZcXHU0RTAwXFx1Njc2MVxcdTY3RDRcXHU1RjMxXFx1NzY4NFxcdTY3OURcXHU2NzYxXFx1RkYwQ1xcdTRGNDZcXHU1Mzc0XFx1NTcyOFxcdTY1NjNcXHU1M0QxXFx1Nzc0MFxcdTc1MUZcXHU2NzNBXFx1RkYwQ1xcdTY3OURcXHU1M0Y2XFx1NjY3NlxcdTgzQjlcXHU1OTgyXFx1N0VGRlxcdTczODlcXHU1MjNCXFx1NjIxMFxcdUZGMENcXHU3MEI5XFx1NzBCOVxcdTY3RDRcXHU1NDhDXFx1NzY4NFxcdTUxNDlcXHU2MjY5XFx1NjU2M1xcdUZGMENcXHU1QzA2XFx1NEUwMFxcdTRFMkFcXHU2NzUxXFx1NUI1MFxcdTdCM0NcXHU3RjY5XFx1MzAwMlxcblxcbiAgICBcXHU3ODZFXFx1NTIwN1xcdTc2ODRcXHU4QkY0XFx1RkYwQ1xcdThGRDlcXHU2NjJGXFx1NEUwMFxcdTY4MkFcXHU5NkY3XFx1NTFGQlxcdTY3MjhcXHVGRjBDXFx1NTcyOFxcdTVGODhcXHU1OTFBXFx1NUU3NFxcdTUyNERcXHU2NkZFXFx1N0VDRlxcdTkwNkRcXHU5MDQ3XFx1OEZDN1xcdTkwMUFcXHU1OTI5XFx1NzY4NFxcdTk1RUFcXHU3NTM1XFx1RkYwQ1xcdTgwMDFcXHU2N0YzXFx1NjgxMVxcdTVERThcXHU1OTI3XFx1NzY4NFxcdTY4MTFcXHU1MUEwXFx1NEUwRVxcdTY1RkFcXHU3NkRCXFx1NzY4NFxcdTc1MUZcXHU2NzNBXFx1ODhBQlxcdTY0NjdcXHU2QkMxXFx1NEU4NlxcdTMwMDJcXHU1OTgyXFx1NEVDQVxcdTU3MzBcXHU4ODY4XFx1NEUwQVxcdTUzRUFcXHU1MjY5XFx1NEUwQioqXFx1N0M3M1xcdTlBRDhcXHU3Njg0XFx1NEUwMFxcdTZCQjVcXHU2ODExXFx1Njg2OVxcdUZGMENcXHU3Qzk3XFx1NzY4NFxcdTYwQ0FcXHU0RUJBXFx1RkYwQ1xcdTgwMENcXHU5MEEzXFx1NEVDNVxcdTY3MDlcXHU3Njg0XFx1NEUwMFxcdTY3NjFcXHU2N0YzXFx1Njc5RFxcdTU5ODJcXHU3RUZGXFx1OTcxRVxcdTc5NUVcXHU5NEZFXFx1ODIyQ1xcdUZGMENcXHU1MTQ5XFx1NjY1NVxcdTVGMjVcXHU2RjJCXFx1RkYwQ1xcdTdCM0NcXHU3RjY5XFx1NEUwRVxcdTVCODhcXHU2MkE0XFx1NEY0RlxcdTRFODZcXHU2NTc0XFx1NEUyQVxcdTY3NTFcXHU1QjUwXFx1RkYwQ1xcdTRFRTRcXHU4RkQ5XFx1NzI0N1xcdTY4MTZcXHU1QzQ1XFx1NTczMFxcdTY3MjZcXHU2NzI2XFx1ODBFN1xcdTgwRTdcXHVGRjBDXFx1NzJCOVxcdTgyRTVcXHU0RTAwXFx1NzI0N1xcdTRFRDlcXHU0RTYxXFx1RkYwQ1xcdTU3MjhcXHU4RkQ5XFx1NTkyN1xcdTgzNTJcXHU0RTJEXFx1NjYzRVxcdTVGOTdcXHU1Rjg4XFx1Nzk1RVxcdTc5RDhcXHUzMDAyXFxuXFxuICAgIFxcdTY3NTFcXHU0RTJEXFx1NTQwNFxcdTYyMzdcXHU5MEZEXFx1NjYyRlxcdTc3RjNcXHU1QzRCXFx1RkYwQ1xcdTU5MUNcXHU2REYxXFx1NEVCQVxcdTk3NTlcXHVGRjBDXFx1OEZEOVxcdTkxQ0NcXHU3OTY1XFx1NTQ4Q1xcdTgwMENcXHU1Qjg5XFx1OEMyN1xcdUZGMENcXHU1MENGXFx1NjYyRlxcdTRFMEVcXHU1OTE2XFx1NzU0Q1xcdTc2ODRcXHU5RUQxXFx1NjY5N1xcdThGRDhcXHU2NzA5XFx1NTE3RFxcdTU0M0NcXHU5Njk0XFx1N0VERFxcdTRFODZcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU1NDVDXFx1MjAyNlxcdTIwMjZcXHUyMDFEXFxuXFxuICAgIFxcdTRFMDBcXHU5NjM1XFx1NzJDMlxcdTk4Q0VcXHU1NDM5XFx1OEZDN1xcdUZGMENcXHU0RTAwXFx1NzI0N1xcdTVERThcXHU1OTI3XFx1NzY4NFxcdTRFNENcXHU0RTkxXFx1NkEyQVxcdTdBN0FcXHVGRjBDXFx1OTA2RVxcdTRGNEZcXHU0RTg2XFx1NjU3NFxcdTcyNDdcXHU1OTFDXFx1N0E3QVxcdUZGMENcXHU2MzIxXFx1NEY0RlxcdTRFODZcXHU5MEEzXFx1NEVDNVxcdTY3MDlcXHU3Njg0XFx1NEUwMFxcdTcwQjlcXHU2NjFGXFx1NTM0RVxcdUZGMENcXHU1QzcxXFx1ODEwOVxcdTRFMkRcXHU2NkY0XFx1NTJBMFxcdTlFRDFcXHU2Njk3XFx1NEU4NlxcdTMwMDJcXG5cXG4gICAgXFx1NEUwMFxcdTU4RjBcXHU1MUY2XFx1NjIzRVxcdTc2ODRcXHU3OUJEXFx1OUUyM1xcdTgxRUFcXHU5QUQ4XFx1NTkyOVxcdTRGMjBcXHU2NzY1XFx1RkYwQ1xcdTdBN0ZcXHU5MUQxXFx1ODhDMlxcdTc3RjNcXHVGRjBDXFx1N0FERlxcdTZFOTBcXHU4MUVBXFx1OTBBM1xcdTcyNDdcXHU0RTRDXFx1NEU5MVxcdUZGMENcXHU3RUM2XFx1NzcwQlxcdTVCODNcXHU1QzQ1XFx1NzEzNlxcdTY2MkZcXHU0RTAwXFx1NTNFQVxcdTVFOUVcXHU1OTI3XFx1NTIzMFxcdTRFMERcXHU1M0VGXFx1NjAxRFxcdThCQUVcXHU3Njg0XFx1NURFOFxcdTlFMUZcXHVGRjBDXFx1OTA2RVxcdTU5MjlcXHU4NTNEXFx1NjcwOFxcdUZGMENcXHU5NTdGXFx1NEU1RlxcdTRFMERcXHU3N0U1XFx1NTkxQVxcdTVDMTFcXHU5MUNDXFx1MzAwMlxcblxcbiAgICBcXHU4REVGXFx1OEZDN1xcdTc3RjNcXHU2NzUxXFx1RkYwQ1xcdTVCODNcXHU0RkVGXFx1ODlDNlxcdTRFMEJcXHU2NUI5XFx1RkYwQ1xcdTRFMjRcXHU1M0VBXFx1NzczQ1xcdTc3NUJcXHU1QjlCXFx1ODJFNVxcdTRFMjRcXHU4RjZFXFx1ODg0MFxcdTY3MDhcXHU4MjJDXFx1RkYwQ1xcdTUxRjZcXHU2QzE0XFx1NkVENFxcdTU5MjlcXHVGRjBDXFx1NzZFRlxcdTc3NDBcXHU4MDAxXFx1NjdGM1xcdTY3MjhcXHU3NzBCXFx1NEU4NlxcdTcyNDdcXHU1MjNCXFx1RkYwQ1xcdTY3MDBcXHU3RUM4XFx1OThERVxcdTU0MTFcXHU0RTg2XFx1NUM3MVxcdTgxMDlcXHU2NzAwXFx1NkRGMVxcdTU5MDRcXHUzMDAyXFxuXFxuICAgIFxcdTVFNzNcXHU5NzU5XFx1NEU4NlxcdTVGODhcXHU5NTdGXFx1NEUwMFxcdTZCQjVcXHU2NUY2XFx1OTVGNFxcdUZGMENcXHU3NkY0XFx1NTIzMFxcdTU0MEVcXHU1MzRBXFx1NTkxQ1xcdUZGMENcXHU1OTI3XFx1NTczMFxcdTk4QTRcXHU1MkE4XFx1NEU4NlxcdThENzdcXHU2NzY1XFx1RkYwQ1xcdTRFMDBcXHU2NzYxXFx1NkEyMVxcdTdDQ0FcXHU3Njg0XFx1OEVBQlxcdTVGNzFcXHU0RUNFXFx1OEZEQ1xcdTY1QjlcXHU4RDcwXFx1Njc2NVxcdUZGMENcXHU3QURGXFx1NEUwRVxcdTdGQTRcXHU1QzcxXFx1OUY1MFxcdTlBRDhcXHVGRjAxXFxuXFxuICAgIFxcdTgzQUJcXHU1NDBEXFx1NkMxNFxcdTYwNkZcXHU2NTYzXFx1NTNEMVxcdUZGMENcXHU3RkE0XFx1NUM3MVxcdTRFMDdcXHU1OEQxXFx1NkI3QlxcdTRFMDBcXHU4MjJDXFx1NzY4NFxcdTVCQzJcXHU5NzU5XFx1RkYwQ1xcdTUxRjZcXHU3OUJEXFx1NzMxQlxcdTUxN0RcXHU3Njg2XFx1ODZGMFxcdTRGMEZcXHVGRjBDXFx1NEUwRFxcdTY1NjJcXHU1M0QxXFx1NTFGQVxcdTRFMDBcXHU3MEI5XFx1NThGMFxcdTk3RjNcXHUzMDAyXFxuXFxuICAgIFxcdThGRDFcXHU0RTg2XFx1RkYwQ1xcdThGRDlcXHU2NjJGXFx1NEUwMFxcdTRFMkFcXHU2MkU1XFx1NjcwOVxcdTRFQkFcXHU1RjYyXFx1NzY4NFxcdTc1MUZcXHU3MjY5XFx1RkYwQ1xcdTc2RjRcXHU3QUNCXFx1ODg0Q1xcdThENzBcXHVGRjBDXFx1NUU5RVxcdTU5MjdcXHU3Njg0XFx1NjBDQVxcdTRFQkFcXHVGRjBDXFx1OEVBQlxcdTlBRDhcXHU2QkQ0XFx1ODBBOVxcdTVDNzFcXHU1Q0IzXFx1RkYwQ1xcdTZENTFcXHU4RUFCXFx1NkNBMVxcdTY3MDlcXHU2QkRCXFx1NTNEMVxcdUZGMENcXHU5MDFBXFx1NEY1M1xcdTVCQzZcXHU1RTAzXFx1Nzc0MFxcdTkxRDFcXHU4MjcyXFx1NzY4NFxcdTlDREVcXHU3MjQ3XFx1RkYwQ1xcdTcxQTBcXHU3MUEwXFx1NzUxRlxcdThGODlcXHUzMDAyXFx1OTc2MlxcdTkwRThcXHU1Rjg4XFx1NUU3M1xcdUZGMENcXHU1M0VBXFx1NjcwOVxcdTRFMDBcXHU1M0VBXFx1N0FENlxcdTc3M0NcXHVGRjBDXFx1NUYwMFxcdTU0MDhcXHU5NUY0XFx1NTBDRlxcdTY2MkZcXHU0RTAwXFx1OTA1M1xcdTkxRDFcXHU4MjcyXFx1NzY4NFxcdTk1RUFcXHU3NTM1XFx1NTIxMlxcdThGQzdcXHVGRjBDXFx1NzI4MFxcdTUyMjlcXHU2MTUxXFx1NEVCQVxcdTMwMDJcXHU2NTc0XFx1NEY1M1xcdTg4NDBcXHU2QzE0XFx1NTk4MlxcdTZENzdcXHVGRjBDXFx1NUI5QlxcdTU5ODJcXHU0RTAwXFx1NUMwQVxcdTc5NUVcXHU5QjU0XFx1RkYwMVxcblxcbiAgICBcXHU1QjgzXFx1OERFRlxcdThGQzdcXHU2QjY0XFx1NTczMFxcdUZGMENcXHU3NzBCXFx1NEU4NlxcdTRFMDBcXHU3NzNDXFx1ODAwMVxcdTY3RjNcXHU2NzI4XFx1RkYwQ1xcdTdBMERcXHU0RjVDXFx1NTA1Q1xcdTc1NTlcXHU1NDBFXFx1RkYwQ1xcdTRGM0NcXHU0RTRFXFx1NjAyNVxcdTRFOEVcXHU4RDc2XFx1OERFRlxcdUZGMENcXHU2NzAwXFx1N0VDOFxcdTVGRUJcXHU5MDFGXFx1OEZEQ1xcdTUzQkJcXHVGRjBDXFx1OEJCOFxcdTU5MUFcXHU1QzcxXFx1NUNGMFxcdTg4QUJcXHU1MTc2XFx1ODExQVxcdTZCNjVcXHU5NzA3XFx1NzY4NFxcdThGNzBcXHU5RTIzXFx1RkYwQ1xcdTVDNzFcXHU1NzMwXFx1NTI2N1xcdTcwQzhcXHU5OEE0XFx1NjI5NlxcdTMwMDJcXG5cXG4gICAgXFx1OUVDRVxcdTY2MEVcXHVGRjBDXFx1NEUwMFxcdTY3NjFcXHU1MzQxXFx1N0M3M1xcdTk1N0ZcXHUzMDAxXFx1NkMzNFxcdTY4NzZcXHU3Qzk3XFx1MzAwMVxcdTk0RjZcXHU1MTQ5XFx1NzA3RlxcdTcwN0ZcXHU3Njg0XFx1ODcwOFxcdTg2QTNcXHU1NzI4XFx1NUM3MVxcdTRFMkRcXHU4NzNGXFx1ODcxMlxcdTgwMENcXHU4ODRDXFx1RkYwQ1xcdTUwQ0ZcXHU2NjJGXFx1NzY3RFxcdTk0RjZcXHU2RDQ3XFx1OTRGOFxcdTgwMENcXHU2MjEwXFx1RkYwQ1xcdTZCQ0ZcXHU0RTAwXFx1ODI4MlxcdTkwRkRcXHU5NTAzXFx1NEVBRVxcdTgwMENcXHU3MkYwXFx1NzJERVxcdUZGMENcXHU1MjEyXFx1OEZDN1xcdTVDNzFcXHU3N0YzXFx1NjVGNlxcdTk0RkZcXHU5NTM1XFx1NEY1Q1xcdTU0Q0RcXHVGRjBDXFx1NzA2QlxcdTY2MUZcXHU5OERFXFx1NkU4NVxcdTMwMDJcXHU0RjQ2XFx1NjcwMFxcdTdFQzhcXHU1QjgzXFx1NTM3NFxcdTkwN0ZcXHU4RkM3XFx1NEU4NlxcdTc3RjNcXHU2NzUxXFx1RkYwQ1xcdTZDQTFcXHU2NzA5XFx1NEZCNVxcdTUxNjVcXHVGRjBDXFx1NjI0MFxcdThGQzdcXHU0RTRCXFx1NTkwNFxcdTlFRDFcXHU5NkZFXFx1N0ZGQlxcdTgxN0VcXHVGRjBDXFx1NEUwN1xcdTUxN0RcXHU5MDdGXFx1OTAwMFxcdTMwMDJcXG5cXG4gICAgXFx1NEUwMFxcdTY4MzlcXHU2NTYzXFx1NTNEMVxcdTc3NDBcXHU4M0I5XFx1ODNCOVxcdTdFRkZcXHU5NzFFXFx1NzY4NFxcdTY3RDRcXHU1RjMxXFx1NjdGM1xcdTY3NjFcXHU1NzI4XFx1OThDRVxcdTRFMkRcXHU4RjdCXFx1OEY3QlxcdTY0NDdcXHU2NkYzXFx1MjAyNlxcdTIwMjZcXG4gICAgXFx1NzdGM1xcdTY3NTFcXHVGRjBDXFx1NEY0RFxcdTRFOEVcXHU4MkNEXFx1ODNCRFxcdTVDNzFcXHU4MTA5XFx1NEUyRFxcdUZGMENcXHU1NkRCXFx1NTQ2OFxcdTlBRDhcXHU1Q0YwXFx1NTkyN1xcdTU4RDFcXHVGRjBDXFx1ODMyQlxcdTgzMkJcXHU3RkE0XFx1NUM3MVxcdTVEQ0RcXHU1Q0U4XFx1MzAwMlxcblxcbiAgICBcXHU2RTA1XFx1NjY2OFxcdUZGMENcXHU2NzFEXFx1OTcxRVxcdTcwN0ZcXHU3MDdGXFx1RkYwQ1xcdTRFRkZcXHU4MkU1XFx1Nzg4RVxcdTkxRDFcXHU0RTAwXFx1ODIyQ1xcdTZEMTJcXHU4NDNEXFx1RkYwQ1xcdTZDOTBcXHU2RDc0XFx1NTcyOFxcdTRFQkFcXHU4RUFCXFx1NEUwQVxcdTY2OTZcXHU2RDBCXFx1NkQwQlxcdTMwMDJcXG5cXG4gICAgXFx1NEUwMFxcdTdGQTRcXHU1QjY5XFx1NUI1MFxcdUZGMENcXHU0RUNFXFx1NTZEQlxcdTRFOTRcXHU1QzgxXFx1NTIzMFxcdTUzNDFcXHU1MUUwXFx1NUM4MVxcdTRFMERcXHU3QjQ5XFx1RkYwQ1xcdTgwRkRcXHU2NzA5XFx1NjU3MFxcdTUzNDFcXHU0RUJBXFx1RkYwQ1xcdTU3MjhcXHU2NzUxXFx1NTI0RFxcdTc2ODRcXHU3QTdBXFx1NTczMFxcdTRFMEFcXHU4RkNFXFx1Nzc0MFxcdTY3MURcXHU5NzFFXFx1RkYwQ1xcdTZCNjNcXHU1NzI4XFx1NTRGQ1xcdTU0QzhcXHU2NzA5XFx1NThGMFxcdTc2ODRcXHU5NTNCXFx1NzBCQ1xcdTRGNTNcXHU5QjQ0XFx1MzAwMlxcdTRFMDBcXHU1RjIwXFx1NUYyMFxcdTdBMUFcXHU1QUU5XFx1NzY4NFxcdTVDMEZcXHU4MTM4XFx1NkVFMVxcdTY2MkZcXHU4QkE0XFx1NzcxRlxcdTRFNEJcXHU4MjcyXFx1RkYwQ1xcdTU5MjdcXHU0RTAwXFx1NEU5QlxcdTc2ODRcXHU1QjY5XFx1NUI1MFxcdTg2NEVcXHU4NjRFXFx1NzUxRlxcdTk4Q0VcXHVGRjBDXFx1NUMwRlxcdTRFMDBcXHU0RTlCXFx1NzY4NFxcdTRFNUZcXHU2QkQ0XFx1NTIxMlxcdTc2ODRcXHU2NzA5XFx1NkEyMVxcdTY3MDlcXHU2ODM3XFx1MzAwMlxcblxcbiAgICBcXHU0RTAwXFx1NEUyQVxcdTgwOENcXHU0RjUzXFx1NUYzQVxcdTUwNjVcXHU1OTgyXFx1ODY0RVxcdThDNzlcXHU3Njg0XFx1NEUyRFxcdTVFNzRcXHU3NTM3XFx1NUI1MFxcdUZGMENcXHU3QTdGXFx1Nzc0MFxcdTUxN0RcXHU3NkFFXFx1ODg2M1xcdUZGMENcXHU3NkFFXFx1ODBBNFxcdTU0NDhcXHU1M0U0XFx1OTREQ1xcdTgyNzJcXHVGRjBDXFx1OUVEMVxcdTUzRDFcXHU2MkFCXFx1NjU2M1xcdUZGMENcXHU3MEFGXFx1NzBBRlxcdTY3MDlcXHU3OTVFXFx1NzY4NFxcdTc3M0NcXHU3NzM4XFx1NjI2QlxcdThGQzdcXHU2QkNGXFx1NEUwMFxcdTRFMkFcXHU1QjY5XFx1NUI1MFxcdUZGMENcXHU2QjYzXFx1NTcyOFxcdThCQTRcXHU3NzFGXFx1NjMwN1xcdTcwQjlcXHU0RUQ2XFx1NEVFQ1xcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTU5MkFcXHU5NjMzXFx1NTIxRFxcdTUzNDdcXHVGRjBDXFx1NEUwN1xcdTcyNjlcXHU1MjFEXFx1NTlDQlxcdUZGMENcXHU3NTFGXFx1NEU0QlxcdTZDMTRcXHU2NzAwXFx1NzZEQlxcdUZGMENcXHU4NjdEXFx1NEUwRFxcdTgwRkRcXHU1OTgyXFx1NEYyMFxcdThCRjRcXHU0RTJEXFx1OTBBM1xcdTgyMkNcXHU5OTEwXFx1OTcxRVxcdTk4REZcXHU2QzE0XFx1RkYwQ1xcdTRGNDZcXHU4RkQ5XFx1NjgzN1xcdThGQ0VcXHU5NzFFXFx1OTUzQlxcdTRGNTNcXHU4MUVBXFx1NEU1RlxcdTY3MDlcXHU4M0FCXFx1NTkyN1xcdTU5N0RcXHU1OTA0XFx1RkYwQ1xcdTUzRUZcXHU1MTQ1XFx1NzZDOFxcdTRFQkFcXHU0RjUzXFx1NzUxRlxcdTY3M0FcXHUzMDAyXFx1NEUwMFxcdTU5MjlcXHU0RTRCXFx1OEJBMVxcdTU3MjhcXHU0RThFXFx1NjY2OFxcdUZGMENcXHU2QkNGXFx1NjVFNVxcdTY1RTlcXHU4RDc3XFx1NTkxQVxcdTc1MjhcXHU1MjlGXFx1RkYwQ1xcdTVGM0FcXHU3QjRCXFx1NThFRVxcdTlBQThcXHVGRjBDXFx1NkQzQlxcdTg4NDBcXHU3MEJDXFx1N0I0QlxcdUZGMENcXHU1QzA2XFx1Njc2NVxcdTYyNERcXHU4MEZEXFx1NTcyOFxcdThGRDlcXHU4MkNEXFx1ODNCRFxcdTVDNzFcXHU4MTA5XFx1NEUyRFxcdTY3MDlcXHU2RDNCXFx1NTQ3RFxcdTc2ODRcXHU2NzJDXFx1OTRCMVxcdTMwMDJcXHUyMDFEXFx1N0FEOVxcdTU3MjhcXHU1MjREXFx1NjVCOVxcdTMwMDFcXHU2MzA3XFx1NzBCOVxcdTRFMDBcXHU3RkE0XFx1NUI2OVxcdTVCNTBcXHU3Njg0XFx1NEUyRFxcdTVFNzRcXHU3NTM3XFx1NUI1MFxcdTRFMDBcXHU4MTM4XFx1NEUyNVxcdTgwODNcXHVGRjBDXFx1OEJBNFxcdTc3MUZcXHU1NDRBXFx1OEJFQlxcdUZGMENcXHU4MDBDXFx1NTQwRVxcdTUzQzhcXHU1NTlEXFx1OTA1M1xcdUZGMUFcXHUyMDFDXFx1NEY2MFxcdTRFRUNcXHU2NjBFXFx1NzY3RFxcdTU0MTdcXHVGRjFGXFx1MjAxRFxcblxcbiAgICBcXHUyMDFDXFx1NjYwRVxcdTc2N0RcXHVGRjAxXFx1MjAxRFxcdTRFMDBcXHU3RkE0XFx1NUI2OVxcdTVCNTBcXHU0RTJEXFx1NkMxNFxcdTUzNDFcXHU4REIzXFx1RkYwQ1xcdTU5MjdcXHU1OEYwXFx1NTZERVxcdTVFOTRcXHUzMDAyXFxuXFxuICAgIFxcdTVDNzFcXHU0RTJEXFx1NTkxQVxcdTUzRjJcXHU1MjREXFx1NzUxRlxcdTcyNjlcXHU1MUZBXFx1NkNBMVxcdUZGMENcXHU2NUY2XFx1NjcwOVxcdTkwNkVcXHU4NTNEXFx1NTkyOVxcdTdBN0FcXHU0RTRCXFx1NURFOFxcdTdGRkNcXHU2QTJBXFx1OEZDN1xcdUZGMENcXHU1NzI4XFx1NTczMFxcdTRFMEFcXHU2Mjk1XFx1NEUwQlxcdTU5MjdcXHU3MjQ3XFx1NzY4NFxcdTk2MzRcXHU1RjcxXFx1RkYwQ1xcdTRFQTZcXHU2NzA5XFx1ODM1MlxcdTUxN0RcXHU3QUNCXFx1NEU4RVxcdTVDRjBcXHU0RTBBXFx1RkYwQ1xcdTU0MUVcXHU2NzA4XFx1ODAwQ1xcdTU1NzhcXHVGRjBDXFx1NjZGNFxcdTVDMTFcXHU0RTBEXFx1NEU4NlxcdTU0MDRcXHU3OUNEXFx1NkJEMlxcdTg2NkJcXHU0RjBGXFx1ODg0Q1xcdUZGMENcXHU1RjAyXFx1NUUzOFxcdTUzRUZcXHU2MDE2XFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NjYwRVxcdTc2N0RcXHU1NDQwXFx1MzAwMlxcdTIwMURcXHU0RTAwXFx1NEUyQVxcdTY2MEVcXHU2NjNFXFx1OEQ3MFxcdTc5NUVcXHUzMDAxXFx1NjE2MlxcdTRFODZcXHU1MzRBXFx1NjJDRFxcdTc2ODRcXHU1QzBGXFx1NUJCNlxcdTRGMTlcXHU1OTc2XFx1NThGMFxcdTU5NzZcXHU2QzE0XFx1NzY4NFxcdTUzRUJcXHU5MDUzXFx1MzAwMlxcblxcbiAgICBcXHU4RkQ5XFx1NjYyRlxcdTRFMDBcXHU0RTJBXFx1NUY4OFxcdTVDMEZcXHU3Njg0XFx1NUI2OVxcdTVCNTBcXHVGRjBDXFx1NTNFQVxcdTY3MDlcXHU0RTAwXFx1NEUyNFxcdTVDODFcXHU3Njg0XFx1NjgzN1xcdTVCNTBcXHVGRjBDXFx1NTIxQVxcdTVCNjZcXHU0RjFBXFx1OEQ3MFxcdThERUZcXHU2Q0ExXFx1NTFFMFxcdTRFMkFcXHU2NzA4XFx1RkYwQ1xcdTRFNUZcXHU1NzI4XFx1OERERlxcdTc3NDBcXHU5NTNCXFx1NzBCQ1xcdTRGNTNcXHU5QjQ0XFx1MzAwMlxcdTY2M0VcXHU3MTM2XFx1RkYwQ1xcdTRFRDZcXHU2NjJGXFx1ODFFQVxcdTVERjFcXHU1MUQxXFx1OEZDN1xcdTY3NjVcXHU3Njg0XFx1RkYwQ1xcdTZERjdcXHU1NzI4XFx1NEU4NlxcdTVFNzRcXHU5NTdGXFx1NzY4NFxcdTVCNjlcXHU1QjUwXFx1NEUyRFxcdUZGMENcXHU1MjA2XFx1NjYwRVxcdThGRDhcXHU0RTBEXFx1NUU5NFxcdThCRTVcXHU1MUZBXFx1NzNCMFxcdTU3MjhcXHU4RkQ5XFx1NEUyQVxcdTk2MUZcXHU0RjBEXFx1OTFDQ1xcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTU0RkNcXHU1NEZDXFx1NTRDOFxcdTU2M0ZcXHVGRjAxXFx1MjAxRFxcdTVDMEZcXHU1QkI2XFx1NEYxOVxcdTUzRTNcXHU0RTJEXFx1NTNEMVxcdTU4RjBcXHVGRjBDXFx1NUFFOVxcdTVBRTlcXHU3Njg0XFx1NUMwRlxcdTYyNEJcXHU4MUMyXFx1NTM1NlxcdTUyOUJcXHU3Njg0XFx1NjMyNVxcdTUyQThcXHU3NzQwXFx1RkYwQ1xcdTY1NDhcXHU0RUZGXFx1NTkyN1xcdTVCNjlcXHU1QjUwXFx1NEVFQ1xcdTc2ODRcXHU1MkE4XFx1NEY1Q1xcdUZGMENcXHU1M0VGXFx1NjYyRlxcdTRFRDZcXHU1OTJBXFx1OEZDN1xcdTVFN0NcXHU1QzBGXFx1RkYwQ1xcdTUyQThcXHU0RjVDXFx1NkI2QVxcdTZCNkFcXHU2MjZEXFx1NjI2RFxcdUZGMENcXHU0RTE0XFx1NkI2NVxcdTVDNjVcXHU4RTUyXFx1OEREQVxcdUZGMENcXHU2NDQ3XFx1NjQ0N1xcdTY0NDZcXHU2NDQ2XFx1RkYwQ1xcdTUxOERcXHU1MkEwXFx1NEUwQVxcdTU2MzRcXHU4OUQyXFx1OTVGNFxcdTZCOEJcXHU3NTU5XFx1NzY4NFxcdTc2N0RcXHU4MjcyXFx1NTk3NlxcdTZFMERcXHVGRjBDXFx1NUYxNVxcdTRFQkFcXHU1M0QxXFx1N0IxMVxcdTMwMDJcXG5cXG4gICAgXFx1NEUwMFxcdTdGQTRcXHU1OTI3XFx1NUI2OVxcdTVCNTBcXHU3NzBCXFx1Nzc0MFxcdTRFRDZcXHVGRjBDXFx1NzY4NlxcdTYzMjRcXHU3NzA5XFx1NUYwNFxcdTc3M0NcXHVGRjBDXFx1OEJBOVxcdTUzOUZcXHU2NzJDXFx1NEUyNVxcdTgwODNcXHU3Njg0XFx1NjY2OFxcdTdFQzNcXHU2QzE0XFx1NkMxQlxcdThGN0JcXHU3RjEzXFx1NEU4NlxcdTRFMERcXHU1QzExXFx1MzAwMlxcblxcbiAgICBcXHU1QzBGXFx1NEUwRFxcdTcwQjlcXHU5NTdGXFx1NzY4NFxcdTVGODhcXHU3NjdEXFx1NUFFOVxcdTRFMEVcXHU2RjAyXFx1NEVBRVxcdUZGMENcXHU1OTI3XFx1NzczQ1xcdTc3NUJcXHU0RTRDXFx1NkU5Q1xcdTZFOUNcXHU3Njg0XFx1OEY2Q1xcdTUyQThcXHVGRjBDXFx1NjU3NFxcdTRFMkFcXHU0RUJBXFx1NTBDRlxcdTY2MkZcXHU0RTJBXFx1NzY3RFxcdTc0RjdcXHU1QTAzXFx1NUEwM1xcdUZGMENcXHU1Rjg4XFx1NTNFRlxcdTcyMzFcXHVGRjBDXFx1N0ExQVxcdTVBRTlcXHU3Njg0XFx1NTJBOFxcdTRGNUNcXHVGRjBDXFx1NTNFM1xcdTRFMkRcXHU1NEJGXFx1NTRCRlxcdTU0NDBcXHU1NDQwXFx1RkYwQ1xcdTYxQThcXHU2MDAxXFx1NTNFRlxcdTYzQUNcXHUzMDAyXFx1OEZEOVxcdThCQTlcXHU1M0U2XFx1NEUwMFxcdTcyNDdcXHU1NzNBXFx1NTczMFxcdTRFMkRcXHU3NkQ4XFx1NTc1MFxcdTU3MjhcXHU0RTAwXFx1NTc1N1xcdTU3NTdcXHU1REU4XFx1NzdGM1xcdTRFMEFcXHU2QjYzXFx1NTcyOFxcdTU0MUVcXHU1NDEwXFx1NTkyOVxcdTdDQkVcXHU3Njg0XFx1NEUwMFxcdTRFOUJcXHU4MDAxXFx1NEVCQVxcdTRFNUZcXHU5MEZEXFx1OTczMlxcdTUxRkFcXHU3QjExXFx1NUJCOVxcdTMwMDJcXG5cXG4gICAgXFx1NUMzMVxcdTY2MkZcXHU5MEEzXFx1NEU5QlxcdThFQUJcXHU2NzUwXFx1OUFEOFxcdTU5MjdcXHU5QjQxXFx1NjhBN1xcdTMwMDFcXHU0RTBBXFx1NTM0QVxcdThFQUIqKlxcdTMwMDFcXHU4MDhDXFx1ODE3MVxcdTUxNDlcXHU0RUFFXFx1NUU3NlxcdTk2ODZcXHU4RDc3XFx1NzY4NFxcdTYyMTBcXHU1RTc0XFx1NzUzN1xcdTVCNTBcXHU0RUVDXFx1RkYwQ1xcdTRFNUZcXHU5MEZEXFx1NjcxQlxcdTRFODZcXHU4RkM3XFx1Njc2NVxcdUZGMENcXHU1RTI2XFx1Nzc0MFxcdTdCMTFcXHU2MTBGXFx1MzAwMlxcdTRFRDZcXHU0RUVDXFx1NjYyRlxcdTY3NTFcXHU0RTJEXFx1NjcwMFxcdTVGM0FcXHU1OEVFXFx1NzY4NFxcdTRFQkFcXHVGRjBDXFx1NjYyRlxcdTcyRTlcXHU3MzBFXFx1NEUwRVxcdTVCODhcXHU2MkE0XFx1OEZEOVxcdTRFMkFcXHU2NzUxXFx1ODQzRFxcdTc2ODRcXHU2NzAwXFx1OTFDRFxcdTg5ODFcXHU1MjlCXFx1OTFDRlxcdUZGMENcXHU0RTVGXFx1OTBGRFxcdTU3MjhcXHU5NTNCXFx1NEY1M1xcdUZGMENcXHU2NzA5XFx1NEVCQVxcdTYzRTFcXHU3NzQwXFx1NEUwRFxcdTc3RTVcXHU1NDBEXFx1NzY4NFxcdTVERThcXHU1MTdEXFx1OUFBOFxcdTlBQkNcXHU2MjUzXFx1NzhFOFxcdTgwMENcXHU2MjEwXFx1NzY4NFxcdTc2N0RcXHU5QUE4XFx1NTkyN1xcdTY4RDJcXHVGRjBDXFx1NEU1RlxcdTY3MDlcXHU0RUJBXFx1NjMwMVxcdTc3NDBcXHU5RUQxXFx1ODI3MlxcdTkxRDFcXHU1QzVFXFx1OTRGOFxcdTYyMTBcXHU3Njg0XFx1OTYxNFxcdTUyNTFcXHVGRjBDXFx1NzUyOFxcdTUyOUJcXHU4MjFFXFx1NTJBOFxcdUZGMENcXHU5OENFXFx1NThGMFxcdTU5ODJcXHU5NkY3XFx1MzAwMlxcblxcbiAgICBcXHU3NTFGXFx1NUI1OFxcdTczQUZcXHU1ODgzXFx1Njc4MVxcdTUxNzZcXHU2MDc2XFx1NTJBM1xcdUZGMENcXHU1OTFBXFx1NkQyQVxcdTgzNTJcXHU3MzFCXFx1NTE3RFxcdTZCRDJcXHU4NjZCXFx1RkYwQ1xcdTRFM0FcXHU0RTg2XFx1OThERlxcdTcyNjlcXHVGRjBDXFx1NEUzQVxcdTRFODZcXHU3NTFGXFx1NUI1OFxcdUZGMENcXHU1Rjg4XFx1NTkxQVxcdTc1MzdcXHU1QjUwXFx1OEZEOFxcdTY3MkFcXHU2MjEwXFx1NUU3NFxcdTVDMzFcXHU4RkM3XFx1NjVFOVxcdTU5MkRcXHU2Mjk4XFx1NTcyOFxcdTRFODZcXHU1OTI3XFx1ODM1MlxcdTRFMkRcXHVGRjBDXFx1NjBGM1xcdTg5ODFcXHU2RDNCXFx1NEUwQlxcdTUzQkJcXHVGRjBDXFx1NTUyRlxcdTY3MDlcXHU1RjNBXFx1NThFRVxcdTVERjFcXHU4RUFCXFx1MzAwMlxcdTZFMDVcXHU2NjY4XFx1NzUyOFxcdTUyOUZcXHVGRjBDXFx1NjVFMFxcdThCQkFcXHU2NjJGXFx1NjIxMFxcdTVFNzRcXHU0RUJBXFx1RkYwQ1xcdTRFQTZcXHU2MjE2XFx1NjYyRlxcdTgwMDFcXHU0RUJBXFx1NEUwRVxcdTVCNjlcXHU1QjUwXFx1RkYwQ1xcdThGRDlcXHU2NjJGXFx1NkJDRlxcdTRFMDBcXHU0RTJBXFx1NEVCQVxcdTgxRUFcXHU1RTdDXFx1NUMzMVxcdTVERjJcXHU1MTdCXFx1NjIxMFxcdTc2ODRcXHU0RTYwXFx1NjBFRlxcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTY1MzZcXHU1RkMzXFx1RkYwMVxcdTIwMURcXHU4RDFGXFx1OEQyM1xcdTc3NjNcXHU0RkMzXFx1NEUwRVxcdTYzMDdcXHU1QkZDXFx1NUI2OVxcdTVCNTBcXHU3RUMzXFx1NTI5RlxcdTc2ODRcXHU0RTJEXFx1NUU3NFxcdTc1MzdcXHU1QjUwXFx1NTkyN1xcdTU4RjBcXHU1NThBXFx1OTA1M1xcdTMwMDJcXHU0RTAwXFx1N0ZBNFxcdTVCNjlcXHU1QjUwXFx1OEQ3NlxcdTdEMjdcXHU4QkE0XFx1NzcxRlxcdTRFODZcXHU4RDc3XFx1Njc2NVxcdUZGMENcXHU3RUU3XFx1N0VFRFxcdTU3MjhcXHU2N0Q0XFx1NTQ4Q1xcdTRFMEVcXHU3MDdGXFx1NzBDMlxcdTc2ODRcXHU2NzFEXFx1OTcxRVxcdTRFMkRcXHU5NTNCXFx1NzBCQ1xcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTU0N0NcXHUyMDI2XFx1MjAyNlxcdTU0QkZcXHU1NDQwXFx1RkYwQ1xcdTdEMkZcXHU0RTg2XFx1MzAwMlxcdTIwMURcXHU1QzBGXFx1NEUwRFxcdTcwQjlcXHU5NTdGXFx1NTFGQVxcdTRFODZcXHU0RTAwXFx1NTNFM1xcdTZDMTRcXHVGRjBDXFx1NEUwMFxcdTVDNDFcXHU1OEE5XFx1NTEzRlxcdTU3NTBcXHU1NzI4XFx1NEU4NlxcdTU3MzBcXHU0RTBBXFx1RkYwQ1xcdTc3MEJcXHU3NzQwXFx1NTkyN1xcdTVCNjlcXHU1QjUwXFx1NEVFQ1xcdTk1M0JcXHU3MEJDXFx1NEY1M1xcdTlCNDRcXHUzMDAyXFx1NTNFRlxcdTRFQzVcXHU0RTAwXFx1NEYxQVxcdTUxM0ZcXHU1REU1XFx1NTkyQlxcdTRFRDZcXHU1QzMxXFx1ODhBQlxcdTUyMDZcXHU2NTYzXFx1NEU4NlxcdTZDRThcXHU2MTBGXFx1NTI5QlxcdUZGMENcXHU3QUQ5XFx1OEQ3N1xcdThFQUJcXHU2NzY1XFx1RkYwQ1xcdTY0NDdcXHU2NDQ3XFx1NjQ0NlxcdTY0NDZcXHVGRjBDXFx1NTFCMlxcdTU0MTFcXHU0RTBEXFx1OEZEQ1xcdTU5MDRcXHU0RTAwXFx1NTNFQVxcdTZCNjNcXHU1NzI4XFx1OEU2NlxcdThFNjZcXHU4REYzXFx1OERGM1xcdTc2ODRcXHU0RTk0XFx1ODI3MlxcdTk2QzBcXHVGRjBDXFx1N0VEM1xcdTY3OUNcXHU3OEQ1XFx1NzhENVxcdTdFQ0FcXHU3RUNBXFx1RkYwQ1xcdThGREVcXHU2NDU0XFx1NEU4NlxcdTUxRTBcXHU0RTJBXFx1NUM0MVxcdTU4QTlcXHU1MTNGXFx1RkYwQ1xcdTUwMTJcXHU0RTVGXFx1NEUwRFxcdTU0RURcXHVGRjBDXFx1NkMxNFxcdTU0N0NcXHU1NDdDXFx1RkYwQ1xcdTU0RkNcXHU1NEZDXFx1NTUyN1xcdTU1MjdcXHU3MjJDXFx1OEQ3N1xcdTY3NjVcXHU1MThEXFx1OEZGRFxcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTU5N0RcXHU0RTg2XFx1RkYwQ1xcdTY1MzZcXHU1MjlGXFx1RkYwMVxcdTIwMURcXG5cXG4gICAgXFx1OTY4RlxcdTc3NDBcXHU0RTAwXFx1NThGMFxcdTU5MjdcXHU1NTlEXFx1RkYwQ1xcdTYyNDBcXHU2NzA5XFx1NUI2OVxcdTVCNTBcXHU5MEZEXFx1NEUwMFxcdTk2MzVcXHU2QjIyXFx1NTQ3Q1xcdUZGMENcXHU2M0M5XFx1NEU4NlxcdTYzQzlcXHU5MTc4XFx1NzVCQ1xcdTc2ODRcXHU2MjRCXFx1ODExQVxcdUZGMENcXHU4MDBDXFx1NTQwRVxcdTRFMDBcXHU1NEM0XFx1ODAwQ1xcdTY1NjNcXHVGRjBDXFx1NTFCMlxcdTU0MTFcXHU1NDA0XFx1ODFFQVxcdTc2ODRcXHU1QkI2XFx1NEUyRFxcdUZGMENcXHU1MUM2XFx1NTkwN1xcdTU0MDNcXHU2NUU5XFx1OTk2RFxcdTMwMDJcXG5cXG4gICAgXFx1ODAwMVxcdTRFQkFcXHU0RUVDXFx1OTBGRFxcdTdCMTFcXHU0RTg2XFx1RkYwQ1xcdTgxRUFcXHU1REU4XFx1NzdGM1xcdTRFMEFcXHU4RDc3XFx1OEVBQlxcdTMwMDJcXHU4MDBDXFx1OTBBM1xcdTRFOUJcXHU4RUFCXFx1Njc1MFxcdTUwNjVcXHU1OEVFXFx1NTk4MlxcdTg2NEVcXHU3Njg0XFx1NjIxMFxcdTVFNzRcXHU0RUJBXFx1NTIxOVxcdTY2MkZcXHU0RTAwXFx1OTYzNVxcdTdCMTFcXHU5QTgyXFx1RkYwQ1xcdTY1NzBcXHU4NDNEXFx1Nzc0MFxcdTgxRUFcXHU1REYxXFx1NzY4NFxcdTVCNjlcXHU1QjUwXFx1RkYwQ1xcdTYyQ0VcXHU3NzQwXFx1OUFBOFxcdTY4RDJcXHU0RTBFXFx1OTYxNFxcdTUyNTFcXHU0RTVGXFx1NUZFQlxcdTZCNjVcXHU1NDExXFx1ODFFQVxcdTVCQjZcXHU0RTJEXFx1OEQ3MFxcdTUzQkJcXHUzMDAyXFxuXFxuICAgIFxcdTc3RjNcXHU2NzUxXFx1NEUwRFxcdTY2MkZcXHU1Rjg4XFx1NTkyN1xcdUZGMENcXHU3NTM3XFx1NTk3M1xcdTgwMDFcXHU1QzExXFx1NTJBMFxcdThENzdcXHU2NzY1XFx1ODBGRFxcdTY3MDlcXHU0RTA5XFx1NzY3RVxcdTU5MUFcXHU0RUJBXFx1RkYwQ1xcdTVDNEJcXHU1QjUwXFx1OTBGRFxcdTY2MkZcXHU1REU4XFx1NzdGM1xcdTc4MENcXHU2MjEwXFx1NzY4NFxcdUZGMENcXHU3QjgwXFx1NjczNFxcdTgwMENcXHU4MUVBXFx1NzEzNlxcdTMwMDJcXG5cXG4gICAgXFx1NTcyOFxcdTY3NTFcXHU1OTM0XFx1NjcwOVxcdTRFMDBcXHU2MjJBXFx1NURFOFxcdTU5MjdcXHU3Njg0XFx1OTZGN1xcdTUxRkJcXHU2NzI4XFx1RkYwQ1xcdTc2RjRcXHU1Rjg0XFx1NTM0MVxcdTUxRTBcXHU3QzczXFx1RkYwQ1xcdTZCNjRcXHU2NUY2XFx1NEUzQlxcdTVFNzJcXHU0RTBBXFx1NTUyRlxcdTRFMDBcXHU3Njg0XFx1NjdGM1xcdTY3NjFcXHU1REYyXFx1N0VDRlxcdTU3MjhcXHU2NzFEXFx1OTcxRVxcdTRFMkRcXHU2M0E5XFx1NTNCQlxcdTRFODZcXHU4M0I5XFx1NTE0OVxcdUZGMENcXHU1M0Q4XFx1NUY5N1xcdTY2NkVcXHU2NjZFXFx1OTAxQVxcdTkwMUFcXHU0RTg2XFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NTY2MlxcdUZGMENcXHU1QzQ1XFx1NzEzNlxcdTY3MDlcXHU1NzFGXFx1OUY5OVxcdTgwODlcXHVGRjBDXFx1N0VEOVxcdTYyMTFcXHU0RTAwXFx1NTc1N1xcdUZGMDFcXHUyMDFEXFxuXFxuICAgIFxcdThGRDlcXHU0RTlCXFx1NUI2OVxcdTVCNTBcXHU5MEZEXFx1NUY4OFxcdTZEM0JcXHU2Q0ZDXFx1NEUwRVxcdTU5N0RcXHU1MkE4XFx1RkYwQ1xcdTUzNzNcXHU0RkJGXFx1NTQwM1xcdTk5NkRcXHU2NUY2XFx1NEU1RlxcdTkwRkRcXHU0RTBEXFx1NTkyQVxcdTgwMDFcXHU1QjlFXFx1RkYwQ1xcdTRFMERcXHU1QzExXFx1NEVCQVxcdTYyQjFcXHU3NzQwXFx1OTY3NlxcdTc4OTdcXHU0RUNFXFx1ODFFQVxcdTVCQjZcXHU1MUZBXFx1Njc2NVxcdUZGMENcXHU1MUQxXFx1NTIzMFxcdTRFODZcXHU0RTAwXFx1OEQ3N1xcdTMwMDJcXG5cXG4gICAgXFx1NzdGM1xcdTY3NTFcXHU1NDY4XFx1NTZGNFxcdTgzNDlcXHU2NzI4XFx1NEUzMFxcdTgzMDJcXHVGRjBDXFx1NzMxQlxcdTUxN0RcXHU0RjE3XFx1NTkxQVxcdUZGMENcXHU1M0VGXFx1NUI4OFxcdTc3NDBcXHU1OTI3XFx1NUM3MVxcdUZGMENcXHU2NzUxXFx1NEVCQVxcdTc2ODRcXHU5OERGXFx1NzI2OVxcdTc2RjhcXHU1QkY5XFx1Njc2NVxcdThCRjRcXHU1Mzc0XFx1N0I5N1xcdTRFMERcXHU0RTBBXFx1NEUzMFxcdTc2REJcXHVGRjBDXFx1NTNFQVxcdTY2MkZcXHU0RTAwXFx1NEU5QlxcdTdDOTdcXHU5RUE2XFx1OTk3Q1xcdTMwMDFcXHU5MUNFXFx1Njc5Q1xcdTRFRTVcXHU1M0NBXFx1NUI2OVxcdTVCNTBcXHU0RUVDXFx1Nzg5N1xcdTRFMkRcXHU1QzExXFx1OTFDRlxcdTc2ODRcXHU4MDg5XFx1OThERlxcdTMwMDJcXG5cXG4gICAgXFx1NEU4QlxcdTVCOUVcXHU0RTBBXFx1RkYwQ1xcdTk4REZcXHU3MjY5XFx1NEUwRFxcdTUxNDVcXHU4OEQ1XFx1NUJGOVxcdTRFOEVcXHU3N0YzXFx1Njc1MVxcdTY3NjVcXHU4QkY0XFx1NEUwMFxcdTc2RjRcXHU2NjJGXFx1NEUwMFxcdTRFMkFcXHU1Rjg4XFx1NEUyNVxcdTkxQ0RcXHU3Njg0XFx1OTVFRVxcdTk4OThcXHUzMDAyXFx1NUM3MVxcdTgxMDlcXHU0RTJEXFx1NTM0MVxcdTUyMDZcXHU1MzcxXFx1OTY2OVxcdUZGMENcXHU5MEEzXFx1NEU5QlxcdTVGMDJcXHU1MTdEXFx1NTFGNlxcdTc5QkRcXHU4RkM3XFx1NEU4RVxcdTVGM0FcXHU1OTI3XFx1NEUwRVxcdTYwNTBcXHU2MDE2XFx1RkYwQ1xcdTZCQ0ZcXHU0RTAwXFx1NkIyMVxcdTUzQkJcXHU3MkU5XFx1NzMwRVxcdTkwRkRcXHU1M0VGXFx1ODBGRFxcdTRGMUFcXHU2NzA5XFx1NEVCQVxcdTRFMjJcXHU2Mzg5XFx1NjAyN1xcdTU0N0RcXHUzMDAyXFxuXFxuICAgIFxcdTU5ODJcXHU2NzlDXFx1NjcwOVxcdTkwMDlcXHU2MkU5XFx1RkYwQ1xcdTY3NTFcXHU0RUJBXFx1NjYyRlxcdTRFMERcXHU2MTNGXFx1OEZEQlxcdTVDNzFcXHU3Njg0XFx1MzAwMlxcdTU2RTBcXHU0RTNBXFx1OEZEQlxcdTVDNzFcXHU1QzMxXFx1NjEwRlxcdTU0NzNcXHU3NzQwXFx1NTNFRlxcdTgwRkRcXHU0RjFBXFx1NjcwOVxcdTZENDFcXHU4ODQwXFx1NEUwRVxcdTcyN0FcXHU3MjcyXFx1MzAwMlxcblxcbiAgICBcXHU5OERGXFx1NzI2OVxcdTVCRjlcXHU0RThFXFx1NEVENlxcdTRFRUNcXHU2NzY1XFx1OEJGNFxcdTk3NUVcXHU1RTM4XFx1NUI5RFxcdThEMzVcXHVGRjBDXFx1NUJCOVxcdTRFMERcXHU1Rjk3XFx1NkQ2QVxcdThEMzlcXHVGRjBDXFx1NkJDRlxcdTRFMDBcXHU0RTJBXFx1NUI2OVxcdTVCNTBcXHU0RUNFXFx1NUMwRlxcdTVDMzFcXHU2MUMyXFx1NUY5N1xcdThGRDlcXHU0RTAwXFx1NzBCOVxcdUZGMENcXHU5OTY1XFx1OTk3RlxcdTMwMDFcXHU5OERGXFx1NzI2OVxcdTMwMDFcXHU3MkU5XFx1NzMwRVxcdTMwMDFcXHU2MDI3XFx1NTQ3RFxcdTMwMDFcXHU5QzlDXFx1ODg0MFxcdThGRDlcXHU0RTlCXFx1NjYyRlxcdTc2RjhcXHU4RkRFXFx1NzY4NFxcdTMwMDJcXG5cXG4gICAgXFx1Njc1MVxcdTU5MzRcXHU2NjJGXFx1ODAwMVxcdTY1Q0ZcXHU5NTdGXFx1NzdGM1xcdTRFOTFcXHU1Q0YwXFx1NzY4NFxcdTk2NjJcXHU4NDNEXFx1RkYwQ1xcdTc1MzFcXHU1REU4XFx1NzdGM1xcdTU4MDZcXHU3ODBDXFx1ODAwQ1xcdTYyMTBcXHVGRjBDXFx1N0QyN1xcdTYzMjhcXHU3NzQwXFx1NzEyNlxcdTlFRDFcXHU4MDBDXFx1NURFOFxcdTU5MjdcXHU3Njg0XFx1NjdGM1xcdTY3MjhcXHUzMDAyXFx1OTY2MlxcdTUxODVcXHU3Njg0XFx1NzA3NlxcdTUzRjBcXHU1MjREXFx1RkYwQ1xcdTk2NzZcXHU3RjUwXFx1NTE4NVxcdTc2N0RcXHU4MjcyXFx1NkM0MVxcdTZEQjJcXHU2Q0I4XFx1ODE3RVxcdUZGMENcXHU1OTc2XFx1OTk5OVxcdTYyNTFcXHU5RjNCXFx1RkYwQ1xcdTRFRDZcXHU2QjYzXFx1NTcyOFxcdTcxQUNcXHU3MTZFXFx1NTE3RFxcdTU5NzZcXHVGRjBDXFx1NkI2NFxcdTU5MTZcXHU0RTBEXFx1NjVGNlxcdTVDMDZcXHU0RTAwXFx1NEU5QlxcdTgzNkZcXHU4MzQ5XFx1N0I0OVxcdTYyOTVcXHU2NTNFXFx1OEZEQlxcdTUzQkJcXHVGRjBDXFx1NEVFNVxcdTY3MjhcXHU1MkZBXFx1NjE2MlxcdTYxNjJcXHU2NDA1XFx1NTJBOFxcdTMwMDJcXG5cXG4gICAgXFx1NEUwRFxcdTU5MUFcXHU2NUY2XFx1RkYwQ1xcdTgwMDFcXHU0RUJBXFx1NTU4QVxcdTkwNTNcXHVGRjFBXFx1MjAxQ1xcdTVDMEZcXHU0RTBEXFx1NzBCOVxcdUZGMENcXHU4RkM3XFx1Njc2NVxcdTU0MDNcXHU0RTFDXFx1ODk3RlxcdTMwMDJcXHUyMDFEXFxuXFxuICAgIFxcdTVDMEZcXHU0RTBEXFx1NzBCOVxcdTU3MjhcXHU1MzRBXFx1NUM4MVxcdTY1RjZcXHU1QzMxXFx1NTkzMVxcdTUzQkJcXHU0RTg2XFx1NzIzNlxcdTZCQ0RcXHVGRjBDXFx1NjYyRlxcdTU0MDNcXHU3NjdFXFx1NTE3RFxcdTU5NzZcXHU5NTdGXFx1NTkyN1xcdTc2ODRcXHVGRjBDXFx1ODAwQ1xcdTRFQ0FcXHU1REYyXFx1N0VDRlxcdTRFMDBcXHU1QzgxXFx1OTZGNlxcdTUxRTBcXHU0RTJBXFx1NjcwOFxcdTRFODZcXHVGRjBDXFx1ODJFNVxcdTY2MkZcXHU1QkZCXFx1NUUzOFxcdTc2ODRcXHU1QjY5XFx1NUI1MFxcdTY1RTlcXHU4QkU1XFx1NjVBRFxcdTU5NzZcXHU0RTg2XFx1RkYwQ1xcdTgwMENcXHU0RUQ2XFx1NTM3NFxcdTRGOURcXHU2NUU3XFx1NTQwM1xcdTc2ODRcXHU1Rjg4XFx1OTk5OVxcdTc1MUNcXHVGRjBDXFx1NEUwRFxcdTgwQUZcXHU2NUFEXFx1NjM4OVxcdUZGMENcXHU1RTM4XFx1ODhBQlxcdTU5MjdcXHU0RTAwXFx1NEU5QlxcdTc2ODRcXHU1QjY5XFx1NUI1MFxcdTUzRDZcXHU3QjExXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NTRCRlxcdTU0NDBcXHVGRjBDXFx1NTQ3Q1xcdTIwMjZcXHUyMDI2XFx1OEREMVxcdTRFMERcXHU1MkE4XFx1NEU4NlxcdTMwMDJcXHUyMDFEXFx1NEVENlxcdTRFMDBcXHU3NkY0XFx1NTcyOFxcdTk1MzJcXHU4MDBDXFx1NEUwRFxcdTgyMERcXHU1NzMwXFx1OEZGRFxcdTkwQTNcXHU1M0VBXFx1NEU5NFxcdTgyNzJcXHU5NkMwXFx1RkYwQ1xcdTY1RTlcXHU1REYyXFx1NkMxNFxcdTU1OThcXHU1NDAxXFx1NTQwMVxcdUZGMENcXHU2QjY0XFx1NjVGNlxcdTRFMDBcXHU1QzQxXFx1ODBBMVxcdTU3NTBcXHU1NzI4XFx1NEU4NlxcdTU3MzBcXHU0RTBBXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NUMwRlxcdTRFMERcXHU3MEI5XFx1NTQwM1xcdTU5NzZcXHU1NUJEXFx1RkYwMVxcdTIwMURcXHU0RTAwXFx1N0ZBNFxcdTU5MjdcXHU1QjY5XFx1NUI1MFxcdThENzdcXHU1NEM0XFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NEY2MFxcdTRFRUNcXHU4RkQ5XFx1N0ZBNFxcdTVDMEZcXHU3NkFFXFx1NzMzNFxcdTVCNTBcXHVGRjBDXFx1OEZEOFxcdTRFMERcXHU5MEZEXFx1NjYyRlxcdTRFQ0VcXHU0RUQ2XFx1OEZEOVxcdTRFMkFcXHU1RTc0XFx1OUY4NFxcdThGQzdcXHU2NzY1XFx1NzY4NFxcdTMwMDJcXHUyMDFEXFx1ODAwMVxcdTY1Q0ZcXHU5NTdGXFx1N0IxMVxcdTlBODJcXHU5MDUzXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NjIxMVxcdTRFRUNcXHU1M0VGXFx1NkNBMVxcdTY3MDlcXHU1NzI4XFx1NEUwMFxcdTVDODFcXHU1MzRBXFx1NjVGNlxcdThGRDhcXHU1NzI4XFx1NTQwM1xcdTU5NzZcXHVGRjBDXFx1NTYzRlxcdTU2M0ZcXHUzMDAyXFx1MjAxRFxcblxcbiAgICBcXHU5NzYyXFx1NUJGOVxcdTU5MjdcXHU1QjY5XFx1NUI1MFxcdTc2ODRcXHU1M0Q2XFx1N0IxMVxcdUZGMENcXHU1QzBGXFx1NEUwRFxcdTcwQjlcXHU2MUE4XFx1NjFBOFxcdTc2ODRcXHU3QjExXFx1Nzc0MFxcdUZGMENcXHU5RUQxXFx1NEVBRVxcdTc2ODRcXHU1OTI3XFx1NzczQ1xcdTc3MkZcXHU2MjEwXFx1NEU4NlxcdTY3MDhcXHU3MjU5XFx1NzJCNlxcdUZGMENcXHU2QkVCXFx1NEUwRFxcdTU3MjhcXHU0RTRFXFx1RkYwQ1xcdTU3NTBcXHU1NzI4XFx1OTY3NlxcdTdGNTBcXHU1MjREXFx1NzUyOFxcdTY3MjhcXHU1MkZBXFx1ODIwMFxcdTU5NzZcXHVGRjBDXFx1NTQwM1xcdTc2ODRcXHU1Rjg4XFx1OTk5OVxcdTc1MUNcXHUzMDAyXFxuXFxuICAgIFxcdTY1RTlcXHU5OTZEXFx1OEZDN1xcdTU0MEVcXHVGRjBDXFx1Njc1MVxcdTRFMkRcXHU1MUUwXFx1NTQwRFxcdTVFNzRcXHU1QzgxXFx1NUY4OFxcdTU5MjdcXHU3Njg0XFx1ODAwMVxcdTRFQkFcXHU0RTAwXFx1OEQ3N1xcdTY3NjVcXHU1MjMwXFx1NjVDRlxcdTk1N0ZcXHU3N0YzXFx1NEU5MVxcdTVDRjBcXHU3Njg0XFx1OTY2MlxcdTVCNTBcXHU0RTJEXFx1RkYwQ1xcdTg2N0RcXHU3MTM2XFx1NjVFOVxcdTVERjJcXHU5ODdCXFx1NTNEMVxcdTc2ODZcXHU3NjdEXFx1RkYwQ1xcdTRGNDZcXHU3Q0JFXFx1NkMxNFxcdTc5NUVcXHU5MEZEXFx1OEZEOFxcdTVGODhcXHU4REIzXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NjcwMFxcdThGRDFcXHU0RTBEXFx1NTkyQVxcdTVCRjlcXHU1MkIyXFx1NTU0QVxcdUZGMENcXHU2REYxXFx1NTkxQ1xcdTYwM0JcXHU2NjJGXFx1NjcwOVxcdTU5MjdcXHU1QkI2XFx1NEYxOVxcdThERUZcXHU4RkM3XFx1RkYwQ1xcdTUyQThcXHU5NzU5XFx1NUI5RVxcdTU3MjhcXHU1OTJBXFx1NTkyN1xcdTRFODZcXHVGRjBDXFx1OEZEOVxcdTVDNzFcXHU4MTA5XFx1NkRGMVxcdTU5MDRcXHU0RTAwXFx1NUI5QVxcdTUzRDFcXHU3NTFGXFx1NEU4NlxcdTRFQzBcXHU0RTQ4XFx1MzAwMlxcdTIwMURcXG5cXG4gICAgXFx1MjAxQ1xcdTU1MTRcXHVGRjBDXFx1NjYyOFxcdTU5MjlcXHU1OTFDXFx1OTFDQ1xcdTYyMTFcXHU4OEFCXFx1NjBDQVxcdTkxOTJcXHU0RTg2XFx1NTFFMFxcdTZCMjFcXHVGRjBDXFx1NzZBRVxcdTlBQThcXHU1M0QxXFx1NUJEMlxcdUZGMENcXHU0RTAwXFx1NUI5QVxcdTY2MkZcXHU2NzA5XFx1NEVDMFxcdTRFNDhcXHU2RDJBXFx1ODM1MlxcdTUxRjZcXHU1MTdEXFx1NEUwRVxcdTU5MjdcXHU4NjZCXFx1NEVDRVxcdThGRDlcXHU5MUNDXFx1OERFRlxcdThGQzdcXHUzMDAyXFx1MjAxRFxcblxcbiAgICBcXHU1MUUwXFx1NTQwRFxcdTgwMDFcXHU0RUJBXFx1NTE0OFxcdTU0MEVcXHU1RjAwXFx1NTNFM1xcdUZGMENcXHU0RUQ2XFx1NEVFQ1xcdTYyMTZcXHU4RTU5XFx1NzcwOVxcdTYyMTZcXHU2REYxXFx1NjAxRFxcdUZGMENcXHU4QkE4XFx1OEJCQVxcdTY3MDBcXHU4RkQxXFx1NzY4NFxcdTRFMDBcXHU0RTlCXFx1NTM3MVxcdTk2NjlcXHU1RjgxXFx1NTE0NlxcdUZGMENcXHU4OUM5XFx1NUY5N1xcdTY3MDlcXHU0RTBEXFx1NTQwQ1xcdTVCRkJcXHU1RTM4XFx1NzY4NFxcdTRFOEJcXHU2MEM1XFx1NTNEMVxcdTc1MUZcXHU0RTg2XFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NjIxMVxcdTg5QzlcXHU1Rjk3XFx1OEZEOVxcdTU5MjdcXHU4MzUyXFx1NkRGMVxcdTU5MDRcXHU1M0VGXFx1ODBGRFxcdTUxRkFcXHU0RTg2XFx1NEU4NlxcdTRFMERcXHU1Rjk3XFx1NzY4NFxcdTRFMUNcXHU4OTdGXFx1RkYwQ1xcdTVGMTVcXHU4RDc3XFx1NEU4NlxcdTU0NjhcXHU1NkY0XFx1NTczMFxcdTU3REZcXHU0RTAwXFx1NEU5QlxcdTU5MkFcXHU1M0U0XFx1OTA1N1xcdTc5Q0RcXHU3Njg0XFx1NkNFOFxcdTYxMEZcXHVGRjBDXFx1N0VCN1xcdTdFQjdcXHU4RDc2XFx1OEZDN1xcdTUzQkJcXHU0RTg2XFx1MzAwMlxcdTIwMURcXHU4MDAxXFx1NjVDRlxcdTk1N0ZcXHU3N0YzXFx1NEU5MVxcdTVDRjBcXHU2MDFEXFx1NUZENlxcdTU0MEVcXHU4QkY0XFx1OTA1M1xcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdThCRTVcXHU0RTBEXFx1NEYxQVxcdTY2MkZcXHU1MUZBXFx1NEU4NlxcdTVDNzFcXHU1QjlEXFx1NTQyN1xcdUZGMUZcXHUyMDFEXFx1NEUwMFxcdTRFMkFcXHU4MDAxXFx1NEVCQVxcdTk4N0ZcXHU2NUY2XFx1NzdBQVxcdTU3MDZcXHU0RTg2XFx1NzczQ1xcdTc3NUJcXHVGRjBDXFx1OTg3QlxcdTUzRDFcXHU3Njg2XFx1NUYyMFxcdUZGMENcXHU5NzMyXFx1NTFGQVxcdTYwQ0FcXHU1QkI5XFx1MzAwMlxcblxcbiAgICBcXHU1MTc2XFx1NEVENlxcdTRFQkFcXHU0RTVGXFx1OTBGRFxcdTk3MzJcXHU1MUZBXFx1NUYwMlxcdTgyNzJcXHVGRjBDXFx1NzczQ1xcdTc5NUVcXHU3MDZCXFx1NzBFRFxcdUZGMENcXHU0RjQ2XFx1NUY4OFxcdTVGRUJcXHU1M0M4XFx1OTBGRFxcdTcxODRcXHU3MDZEXFx1NEU4NlxcdTc3MzhcXHU0RTJEXFx1NzY4NFxcdTcwNkJcXHU3MTMwXFx1RkYwQ1xcdTkwQTNcXHU3OUNEXFx1NEUxQ1xcdTg5N0ZcXHU0RTBEXFx1NjYyRlxcdTRFRDZcXHU0RUVDXFx1ODBGRFxcdTVGOTdcXHU1MjMwXFx1NzY4NFxcdUZGMENcXHU4RkRDXFx1NTcyOFxcdTVDNzFcXHU4MTA5XFx1NjcwMFxcdTZERjFcXHU1OTA0XFx1RkYwQ1xcdTZDQTFcXHU0RUJBXFx1OEZEQlxcdTc2ODRcXHU1M0JCXFx1MzAwMlxcblxcbiAgICBcXHU4RkQ5XFx1NEU0OFxcdTU5MUFcXHU1RTc0XFx1Njc2NVxcdTRFQ0VcXHU2NzJBXFx1NjcwOVxcdTRFQkFcXHU4MEZEXFx1NkQzQlxcdTc3NDBcXHU4RkRCXFx1NTFGQVxcdTRFMDBcXHU4RDlGXFx1RkYwQ1xcdTVDNzFcXHU0RTJEXFx1NTQwNFxcdTc5Q0RcXHU1RjNBXFx1NkEyQVxcdTcyNjlcXHU3OUNEXFx1NTFGQVxcdTZDQTFcXHVGRjBDXFx1NTM3M1xcdTRGQkZcXHU3N0YzXFx1Njc1MVxcdTYyNDBcXHU2NzA5XFx1NEVCQVxcdTlGNTBcXHU5NUVGXFx1RkYwQ1xcdTRFNUZcXHU4RkRFXFx1NEUwMFxcdTY3MzVcXHU2RDZBXFx1ODJCMVxcdTkwRkRcXHU0RTBEXFx1NEYxQVxcdTZDREJcXHU4RDc3XFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NjVDRlxcdTk1N0ZcXHVGRjBDXFx1NjIxMVxcdTRFRUNcXHU1REYyXFx1N0VDRlxcdTY3MDlcXHU0RTlCXFx1NjVFNVxcdTVCNTBcXHU2Q0ExXFx1NjcwOVxcdThGREJcXHU1QzcxXFx1NEU4NlxcdTMwMDJcXHUyMDFEXFx1NUMzMVxcdTU3MjhcXHU4RkQ5XFx1NjVGNlxcdUZGMENcXHU0RTAwXFx1NEUyQVxcdTk2QzRcXHU1OEVFXFx1NzY4NFxcdTYyMTBcXHU1RTc0XFx1NzUzN1xcdTVCNTBcXHU4RDcwXFx1OEZEQlxcdTk2NjJcXHU0RTJEXFx1RkYwQ1xcdTRFRDZcXHU2NjJGXFx1NzJFOVxcdTczMEVcXHU5NjFGXFx1NEYwRFxcdTc2ODRcXHU1OTM0XFx1OTg4NlxcdUZGMENcXHU0RTVGXFx1NUMwNlxcdTY2MkZcXHU3N0YzXFx1Njc1MVxcdTc2ODRcXHU0RTBCXFx1NEVGQlxcdTY1Q0ZcXHU5NTdGXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NjcwMFxcdThGRDFcXHU2NzA5XFx1NEU5QlxcdTRFMERcXHU1OTJBXFx1NUU3M1xcdTU1NEFcXHUzMDAyXFx1MjAxRFxcdTgwMDFcXHU2NUNGXFx1OTU3RlxcdTc3RjNcXHU0RTkxXFx1NUNGMFxcdTc2QjFcXHU3NzA5XFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NTNFRlxcdTY2MkZcXHU5OERGXFx1NzI2OVxcdTc3MUZcXHU3Njg0XFx1NEUwRFxcdTU5MUFcXHU0RTg2XFx1MzAwMlxcdTIwMURcXHU3N0YzXFx1Njc5N1xcdTg2NEVcXHU5MDUzXFx1RkYwQ1xcdTRFRDZcXHU4RUFCXFx1Njc1MFxcdTY3ODFcXHU0RTNBXFx1OUFEOFxcdTU5MjdcXHVGRjBDXFx1NEUyNFxcdTdDNzNcXHU2NzA5XFx1NEY1OVxcdUZGMENcXHU4MENDXFx1Nzc0MFxcdTRFMDBcXHU1M0UzXFx1NEUwOVxcdTc2N0VcXHU0RjU5XFx1NjVBNFxcdTc2ODRcXHU5NjE0XFx1NTI1MVxcdUZGMENcXHU2NTc0XFx1NEUyQVxcdTRFQkFcXHU1OEVFXFx1NzY4NFxcdTU5ODJcXHU1NDBDXFx1NEUwMFxcdTU5MzRcXHU0RUJBXFx1NzE4QVxcdUZGMENcXHU2RDUxXFx1OEVBQlxcdTUzRTRcXHU5NERDXFx1ODI3MlxcdTc2ODRcXHU4MDhDXFx1ODA4OVxcdTRFMDBcXHU1NzU3XFx1NTc1N1xcdUZGMENcXHU1OTgyXFx1NEUwMFxcdTY3NjFcXHU2NzYxXFx1ODZDN1xcdTg3RDJcXHU1NzI4XFx1NkUzOFxcdTUyQThcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU1QTAzXFx1NUI1MFxcdTRFRUNcXHU5NzAwXFx1ODk4MVxcdTk1N0ZcXHU4RUFCXFx1NEY1M1xcdUZGMENcXHU0RTBEXFx1ODBGRFxcdTk5N0ZcXHU3NzQwXFx1RkYwQ1xcdTVGOTdcXHU2MEYzXFx1NEU5QlxcdTUyOUVcXHU2Q0Q1XFx1MzAwMlxcdTIwMURcXHU2NzA5XFx1ODAwMVxcdTRFQkFcXHU1RjAwXFx1NTNFM1xcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTg2N0RcXHU3MTM2XFx1NTkxQ1xcdTkxQ0NcXHU0RTBEXFx1NUU3M1xcdTk3NTlcXHVGRjBDXFx1NEY0NlxcdTc2N0RcXHU1OTI5XFx1NTAxMlxcdTY2MkZcXHU2Q0ExXFx1NjcwOVxcdTRFQzBcXHU0RTQ4XFx1NUYwMlxcdTVFMzhcXHVGRjBDXFx1NjIxMVxcdTVFMjZcXHU0RTlCXFx1NEVCQVxcdTUxRkFcXHU1M0JCXFx1RkYwQ1xcdTVDMEZcXHU1RkMzXFx1NEUwMFxcdTcwQjlcXHU1RTk0XFx1OEJFNVxcdTZDQTFcXHU5NUVFXFx1OTg5OFxcdTMwMDJcXHUyMDFEXFx1NzdGM1xcdTY3OTdcXHU4NjRFXFx1OTA1M1xcdTMwMDJcXG5cXG4gICAgXFx1NjcwMFxcdTU0MEVcXHVGRjBDXFx1NTFFMFxcdTUzNDFcXHU1NDBEXFx1OTc1MlxcdTU4RUVcXHU1RTc0XFx1NzUzN1xcdTVCNTBcXHU1NzI4XFx1Njc1MVxcdTU5MzRcXHU5NkM2XFx1NTQwOFxcdUZGMENcXHU3NTMxXFx1NjVDRlxcdTk1N0ZcXHU3N0YzXFx1NEU5MVxcdTVDRjBcXHU1RTI2XFx1Nzc0MFxcdTY3NjVcXHU1MjMwXFx1NjVDMVxcdThGQjlcXHU3Njg0XFx1OTZGN1xcdTUxRkJcXHU2NzI4XFx1NTI0RFxcdUZGMENcXHU1QkY5XFx1Nzc0MFxcdTgwMDFcXHU2N0YzXFx1NjgxMVxcdThCQTRcXHU3NzFGXFx1Nzk0OFxcdTc5NzdcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU3OTZEXFx1NzA3NVxcdUZGMENcXHU4QkY3XFx1NEZERFxcdTRGNTFcXHU2NUNGXFx1NEVCQVxcdUZGMENcXHU4QkE5XFx1NUI2OVxcdTVCNTBcXHU0RUVDXFx1NjI1M1xcdTUyMzBcXHU4MEE1XFx1N0Y4RVxcdTc2ODRcXHU3MzBFXFx1NzI2OVxcdUZGMENcXHU1RTczXFx1NUI4OVxcdTVGNTJcXHU2NzY1XFx1MzAwMlxcdTYyMTFcXHU0RUVDXFx1NUMwNlxcdTRFRTVcXHU4NjU0XFx1OEJEQVxcdTc2ODRcXHU1RkMzXFx1RkYwQ1xcdTRFMTZcXHU0RUUzXFx1Nzk2RFxcdTc5NDBcXHU0RTBFXFx1NEY5QlxcdTUxN0JcXHU0RjYwXFx1MzAwMlxcdTIwMURcXG5cXG4gICAgXFx1NUYwMFxcdTU5Q0JcXHU0RTBBXFx1NEYyMFxcdTRFODZcXHVGRjBDXFx1NkJDRlxcdTRFMDBcXHU0RTJBXFx1NzBCOVxcdTUxRkJcXHUzMDAxXFx1NjNBOFxcdTgzNTBcXHUzMDAxXFx1NjUzNlxcdTg1Q0ZcXHU5MEZEXFx1NUJGOVxcdThGRDlcXHU2NzJDXFx1NjVCMFxcdTRFNjZcXHU1Rjg4XFx1OTFDRFxcdTg5ODFcXHVGRjBDXFx1OEJBOVxcdTY3MkNcXHU0RTY2XFx1NTFCMlxcdThENzdcXHVGRjBDXFx1NzlCQlxcdTRFMERcXHU1RjAwXFx1NkJDRlxcdTRFMDBcXHU0RjREXFx1NTE0NFxcdTVGMUZcXHU1OUQwXFx1NTlCOVxcdUZGMENcXHU5NzAwXFx1ODk4MVxcdTU5MjdcXHU1QkI2XFx1NzY4NFxcdTY1MkZcXHU2MzAxXFx1MzAwMlxcdTUzRTZcXHU1OTE2XFx1RkYwQ1xcdTRFQ0FcXHU1OTI5XFx1NjY1QVxcdTRFMEFcXHU1MTZCXFx1NzBCOVxcdTU5MjdcXHU1QkI2XFx1NTNFRlxcdTRFRTVcXHU2NzY1XFx1NkI2QVxcdTZCNkEyNTc5XFx1NzNBOVxcdUZGMENcXHU2MjExXFx1NEU1RlxcdTUzQkJcXHUzMDAyXFx1OEZEOFxcdTY3MDlcXHVGRjBDXFx1OEMyMlxcdThDMjJcXHU5OEQ4XFx1N0VBMlxcdTRFMEVcXHU2MjUzXFx1OEQ0RlxcdTc2ODRcXHU2MjQwXFx1NjcwOVxcdTUxNDRcXHU1RjFGXFx1NTlEMFxcdTU5QjlcXHVGRjAxXFxuICAgIFwiLFxuICAgIGN1cnJlbnRWYWx1ZTogMCxcbiAgICBpc0xpZ2h0OiB0cnVlLFxuICAgIGZvbnRzaXplOiA0MCxcbiAgICB0aXRsZVN0YXR1czogZmFsc2UsXG4gICAgc2V0dGluZ1N0YXR1czogZmFsc2UsXG4gICAgcmVhZFNldHRpbmdTdGF0dXM6IGZhbHNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RheScsXG4gICAgY29udGVudENsYXNzTmFtZTogJycsXG4gICAgY2hhcHRlclRpdGxlQ2xhc3NOYW1lOiAnJyxcbiAgICBjaGFwdGVyQ29udGVudENsYXNzTmFtZTogJycsXG4gICAgcGFnZU1vZGVsOiAndmVydGljYWwnLFxuICAgIGltZzoge1xuICAgICAgXCJsYXN0Q2hhcHRlclwiOiBcIi9QYWdlX1JlYWQvaW1nL2xhc3RfY2hhcHRlci5wbmdcIixcbiAgICAgIFwiYmFja1wiOiBcIi9QYWdlX1JlYWQvaW1nL2JhY2sucG5nXCIsXG4gICAgICBcImxpc3RcIjogXCIvUGFnZV9SZWFkL2ltZy9saXN0LnBuZ1wiLFxuICAgICAgXCJtb29uXCI6IFwiL1BhZ2VfUmVhZC9pbWcvbW9vbi5wbmdcIixcbiAgICAgIFwic2V0dGluZ1wiOiBcIi9QYWdlX1JlYWQvaW1nL3NldHRpbmcucG5nXCIsXG4gICAgICBcInN1blwiOiBcIi9QYWdlX1JlYWQvaW1nL3N1bi5wbmdcIixcbiAgICAgIFwibmV4dENoYXB0ZXJcIjogXCIvUGFnZV9SZWFkL2ltZy9uZXh0X2NoYXB0ZXIucG5nXCJcbiAgICB9LFxuICAgIG5vdmVsY292ZXI6IHtcbiAgICAgIFwiaGFuZFwiOiBcIi9QYWdlX1JlYWQvaW1nL2hhbmQucG5nXCIsXG4gICAgICBcImxlZnRfYXJyb3dzXCI6IFwiL1BhZ2VfUmVhZC9pbWcvbGVmdF9hcnJvd3MucG5nXCIsXG4gICAgICBcInBvaW50XCI6IFwiL1BhZ2VfUmVhZC9pbWcvcG9pbnQucG5nXCIsXG4gICAgICBcInJpZ2h0X2Fycm93c1wiOiBcIi9QYWdlX1JlYWQvaW1nL3JpZ2h0X2Fycm93cy5wbmdcIlxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yTmFtZToge1xuICAgICAgbmFtZTE6ICfmiqTnnLwnLFxuICAgICAgbmFtZTI6ICfnvornmq7nurgnLFxuICAgICAgbmFtZTM6ICflpJzkuYvprYUnLFxuICAgICAgbmFtZTQ6ICfnurjkuYvngbUnXG4gICAgfVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicsXG4gICAgICB0ZXh0OiAn6ZiF6K+7JyxcbiAgICAgIG1lbnU6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLml0ZW0pIHtcbiAgICAgIHRoaXMuaXRlbSA9IEpTT04ucGFyc2UodGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pdGVtLmNhdGFsb2d1ZVRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5pdGVtLmNhdGFsb2d1ZVRpdGxlO1xuICAgICAgdGhpcy5jYXRhbG9ndWVOdW1iZXIgPSB0aGlzLml0ZW0uY2F0YWxvZ3VlTnVtYmVyO1xuICAgIH1cbiAgfSxcbiAgc2hvd1NldHRpbmc6IGZ1bmN0aW9uIHNob3dTZXR0aW5nKCkge1xuICAgIHRoaXMudGl0bGVTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuc2V0dGluZ1N0YXR1cyA9IHRydWU7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0Q29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI2MjYyNidcbiAgICB9KTtcbiAgfSxcbiAgaGlkZVNldHRpbmc6IGZ1bmN0aW9uIGhpZGVTZXR0aW5nKCkge1xuICAgIHRoaXMudGl0bGVTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldHRpbmdTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLnJlYWRTZXR0aW5nU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0Q29sb3I6ICcjMWExYTFhJ1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnZGF5Jykge1xuICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnbmlnaHQnKSB7XG4gICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYidcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjZjYzk5J1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTZkOWJhJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ2dyYXknKSB7XG4gICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1NTU1NSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY2hhbmdlbGlnaHQ6IGZ1bmN0aW9uIGNoYW5nZWxpZ2h0KCkge1xuICAgIHRoaXMuaXNMaWdodCA9ICF0aGlzLmlzTGlnaHQ7XG4gICAgdGhpcy50aXRsZVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnZGF5Jykge1xuICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ25pZ2h0Jykge1xuICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgIHRleHRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyYjJiMmInXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHJlYWRTZXR0aW5nOiBmdW5jdGlvbiByZWFkU2V0dGluZygpIHtcbiAgICB0aGlzLnJlYWRTZXR0aW5nU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLnRpdGxlU3RhdHVzID0gZmFsc2U7XG4gIH0sXG4gIGNoYW5nZWZvbnRzaXplOiBmdW5jdGlvbiBjaGFuZ2Vmb250c2l6ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJyZWR1Y2VcIikge1xuICAgICAgdGhpcy5mb250c2l6ZSA9IHRoaXMuZm9udHNpemUgLSAxO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwicmVsZWFzZVwiKSB7XG4gICAgICAgIHRoaXMuZm9udHNpemUgPSB0aGlzLmZvbnRzaXplICsgMTtcbiAgICAgIH1cbiAgfSxcbiAgY2hhbmdlUGFnaW5nTW9kZWw6IGZ1bmN0aW9uIGNoYW5nZVBhZ2luZ01vZGVsKHBhZ2luZ01vZGVsKSB7XG4gICAgdGhpcy5wYWdlTW9kZWwgPSBwYWdpbmdNb2RlbDtcbiAgfSxcbiAgY2hhbmdlQmFja2dyb3VuZENvbG9yOiBmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yKSB7XG4gICAgdGhpcy50aXRsZVN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuXG4gICAgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gJ2RheScpIHtcbiAgICAgIHRoaXMuY29udGVudENsYXNzTmFtZSA9ICdjb250ZW50JztcbiAgICAgIHRoaXMuY2hhcHRlclRpdGxlQ2xhc3NOYW1lID0gJ2NoYXB0ZXItdGl0bGUnO1xuICAgICAgdGhpcy5jaGFwdGVyQ29udGVudENsYXNzTmFtZSA9ICdjaGFwdGVyLWNvbnRlbnQnO1xuICAgIH0gZWxzZSBpZiAoYmFja2dyb3VuZENvbG9yID09PSAnbmlnaHQnKSB7XG4gICAgICB0aGlzLmNvbnRlbnRDbGFzc05hbWUgPSAnbmlnaHQtY29udGVudCc7XG4gICAgICB0aGlzLmNoYXB0ZXJUaXRsZUNsYXNzTmFtZSA9ICduaWdodC1jaGFwdGVyLXRpdGxlJztcbiAgICAgIHRoaXMuY2hhcHRlckNvbnRlbnRDbGFzc05hbWUgPSAnbmlnaHQtY2hhcHRlci1jb250ZW50JztcbiAgICB9IGVsc2UgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gJ2dyZWVuJykge1xuICAgICAgdGhpcy5jb250ZW50Q2xhc3NOYW1lID0gJ2dyZWVuLWNvbnRlbnQnO1xuICAgICAgdGhpcy5jaGFwdGVyVGl0bGVDbGFzc05hbWUgPSAnZ3JlZW4tY2hhcHRlci10aXRsZSc7XG4gICAgICB0aGlzLmNoYXB0ZXJDb250ZW50Q2xhc3NOYW1lID0gJ2dyZWVuLWNoYXB0ZXItY29udGVudCc7XG4gICAgfSBlbHNlIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd5ZWxsb3cnKSB7XG4gICAgICB0aGlzLmNvbnRlbnRDbGFzc05hbWUgPSAneWVsbG93LWNvbnRlbnQnO1xuICAgICAgdGhpcy5jaGFwdGVyVGl0bGVDbGFzc05hbWUgPSAneWVsbG93LWNoYXB0ZXItdGl0bGUnO1xuICAgICAgdGhpcy5jaGFwdGVyQ29udGVudENsYXNzTmFtZSA9ICd5ZWxsb3ctY2hhcHRlci1jb250ZW50JztcbiAgICB9IGVsc2UgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gJ2dyYXknKSB7XG4gICAgICB0aGlzLmNvbnRlbnRDbGFzc05hbWUgPSAnZ3JheS1jb250ZW50JztcbiAgICAgIHRoaXMuY2hhcHRlclRpdGxlQ2xhc3NOYW1lID0gJ2dyYXktY2hhcHRlci10aXRsZSc7XG4gICAgICB0aGlzLmNoYXB0ZXJDb250ZW50Q2xhc3NOYW1lID0gJ2dyYXktY2hhcHRlci1jb250ZW50JztcbiAgICB9IGVsc2UgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gJ2RheScpIHtcbiAgICAgIHRoaXMuY29udGVudENsYXNzTmFtZSA9ICdjb250ZW50JztcbiAgICAgIHRoaXMuY2hhcHRlclRpdGxlQ2xhc3NOYW1lID0gJ2NoYXB0ZXItdGl0bGUnO1xuICAgICAgdGhpcy5jaGFwdGVyQ29udGVudENsYXNzTmFtZSA9ICdjaGFwdGVyLWNvbnRlbnQnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ2RheScpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICB0ZXh0Q29sb3I6ICcjMWExYTFhJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZidcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICduaWdodCcpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICB0ZXh0Q29sb3I6ICcjZjJmMmYyJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYidcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICB0ZXh0Q29sb3I6ICcjMWExYTFhJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY2Y2M5OSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICd5ZWxsb3cnKSB7XG4gICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgdGV4dENvbG9yOiAnIzFhMWExYScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlNmQ5YmEnXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnZ3JheScpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICB0ZXh0Q29sb3I6ICcjZjJmMmYyJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1NTU1NSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKG5hbWUsIGUpIHtcbiAgICB0aGlzW25hbWVdID0gZS5wcm9ncmVzcztcbiAgfSxcbiAgY2xpY2tUb0JhY2s6IGZ1bmN0aW9uIGNsaWNrVG9CYWNrKCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmJhY2soKTtcbiAgfSxcbiAgY2xpY2tUb0xpc3Q6IGZ1bmN0aW9uIGNsaWNrVG9MaXN0KCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgdXJpOiAnL1BhZ2VfQ2F0YWxvZ3VlJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0ZXN0SWQ6ICd0ZXN0SWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9