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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(80)
var $app_style$ = __webpack_require__(81)
var $app_script$ = __webpack_require__(82)

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

/***/ 80:
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
        "detail_content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.tingshuData.chapterTitle}
          },
          "classList": [
            "top_tittel"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "book_image"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.tingshuData.bookImage}
              },
              "classList": [
                "book_image_png"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.tingshuData.bookTitle}
          },
          "classList": [
            "book_name"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.tingshuData.author}
          },
          "classList": [
            "book_author"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "book_evaluate"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.tingshuData.scoreImage}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.tingshuData.score}
              },
              "classList": [
                "book_score"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "middle_massege"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "repeat": function () {return this.tingshuData.list},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "middle_massege_title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.name}
                  },
                  "classList": [
                    "middle_massege_name"
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
            "book_detail"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.tingshuData.description}
              },
              "classList": [
                "detail_text"
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
        "buttom_audio"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "audio-content"
          ],
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
                    "audio-progress"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.showTime}
                      },
                      "classList": [
                        "audio-time"
                      ]
                    },
                    {
                      "type": "slider",
                      "attr": {
                        "value": function () {return this.time},
                        "max": function () {return this.total}
                      },
                      "classList": [
                        "slider"
                      ],
                      "style": {
                        "selectedColor": function () {return this.dynamicallyColor}
                      },
                      "events": {
                        "change": function(evt){this.getValue('time',evt)}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.showTotal}
                      },
                      "classList": [
                        "audio-time"
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
                "audio-control"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Page_Hearingdetail/img/add.png"
                  },
                  "classList": [
                    "audio-repeat"
                  ],
                  "events": {
                    "click": "loop"
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "pre_container"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.dynamicallyColor}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/pre.png"
                      },
                      "classList": [
                        "audio-last"
                      ],
                      "events": {
                        "click": "last"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "play_container"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.dynamicallyColor}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/play.png"
                      },
                      "shown": function () {return this.isPlayImg},
                      "classList": [
                        "audio-play"
                      ],
                      "events": {
                        "click": "play"
                      }
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/stop.png"
                      },
                      "shown": function () {return !this.isPlayImg},
                      "classList": [
                        "audio-pause"
                      ],
                      "events": {
                        "click": "pause"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "next_container"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.dynamicallyColor}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/next.png"
                      },
                      "classList": [
                        "audio-next"
                      ],
                      "events": {
                        "click": "next"
                      }
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Page_Hearingdetail/img/list.png"
                  },
                  "classList": [
                    "audio-more"
                  ],
                  "events": {
                    "click": "showCatalog"
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
      "classList": function () {return [this.catalogStatus===true?'hearing-shadow-show':'hearing-shadow-none']},
      "events": {
        "click": "closeCatalog"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return [this.catalogStatus===true?'hearing-catalog-show':'hearing-catalog-none']},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return '目录 ('+(this.music.length)+')'}
              },
              "classList": [
                "catalog-top"
              ]
            },
            {
              "type": "list",
              "attr": {},
              "classList": [
                "catalog-list"
              ],
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "catalog-item"
                  },
                  "classList": [
                    "catalog-item"
                  ],
                  "repeat": {
                    "exp": function () {return this.music},
                    "value": "item"
                  },
                  "events": {
                    "click": function(evt){this.toHearing(this.item,this.$idx,evt)}
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "left"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "top"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.chapterTitle}
                              },
                              "classList": function () {return ['title_name', this.item.isHearing?'activate':'']}
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "bottom"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": "/Page_Hearingdetail/img/clock.png"
                              },
                              "classList": [
                                "clock"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.duration}
                              },
                              "classList": [
                                "time"
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
                        "right"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Page_Hearingdetail/img/ic_music_paly.png"
                          },
                          "classList": function () {return [this.item.isHearing?'music-paly-png':'music-paly-png-none']}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "关闭"
              },
              "classList": [
                "catalog-bottom"
              ],
              "events": {
                "click": "closeCatalog"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "height": "100%"
  },
  ".detail_content": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "75px"
  },
  ".top_tittel": {
    "textAlign": "center",
    "fontSize": "37.5px",
    "color": "#1a1a1a",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px"
  },
  ".book_image": {
    "justifyContent": "center",
    "marginTop": "46px",
    "marginBottom": "10px"
  },
  ".book_image_png": {
    "width": "217px",
    "height": "289px"
  },
  ".book_name": {
    "color": "#000000",
    "fontSize": "37.5px",
    "textAlign": "center",
    "marginBottom": "15px"
  },
  ".book_author": {
    "fontSize": "25px",
    "textAlign": "center",
    "color": "rgba(0,0,0,0.5)",
    "marginBottom": "13px",
    "opacity": 0.5
  },
  ".book_evaluate": {
    "marginBottom": "31px",
    "alignItems": "center"
  },
  ".book_score": {
    "fontSize": "25px",
    "color": "#FFBF00",
    "marginLeft": "10px"
  },
  ".middle_massege": {
    "alignItems": "center",
    "width": "548px",
    "flexWrap": "wrap"
  },
  ".middle_massege div": {
    "width": "273px"
  },
  ".middle_massege_title": {
    "fontSize": "25px",
    "color": "rgba(0,0,0,0.5)",
    "marginRight": "8px"
  },
  ".middle_massege_name": {
    "fontSize": "25px",
    "color": "rgba(0,0,0,1)"
  },
  ".book_detail": {
    "marginTop": "34px",
    "marginRight": "108px",
    "marginBottom": "3px",
    "marginLeft": "108px"
  },
  ".detail_text": {
    "lines": 9,
    "color": "#000000",
    "fontSize": "27.1px",
    "lineHeight": "44px"
  },
  ".buttom_audio": {
    "position": "absolute",
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "height": "270px"
  },
  ".content": {
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".audio-back": {
    "width": "100%",
    "height": "100px",
    "alignItems": "center"
  },
  ".audio-back image": {
    "marginLeft": "33px",
    "width": "50px",
    "height": "50px"
  },
  ".audio-content": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "34px",
    "paddingRight": "34px"
  },
  ".audio-title": {
    "color": "#1A1A1A",
    "fontSize": "37.5px",
    "marginTop": "16.7px"
  },
  ".audio-img": {
    "width": "467px",
    "height": "467px",
    "borderRadius": "233.5px",
    "marginBottom": "155px",
    "marginTop": "155px"
  },
  ".audio-progress": {
    "width": "680px",
    "justifyContent": "space-between"
  },
  ".audio-time": {
    "width": "60px",
    "height": "32px",
    "color": "#1A1A1A",
    "fontSize": "22.7px",
    "opacity": 0.75
  },
  ".slider": {
    "selectedColor": "#007DFF",
    "color": "#E5E5E5",
    "width": "500px",
    "paddingLeft": "22.4px",
    "paddingRight": "22.7px"
  },
  ".audio-control": {
    "width": "100%",
    "marginTop": "34px",
    "marginRight": "0px",
    "marginBottom": "58px",
    "marginLeft": "0px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".audio-repeat": {
    "width": "50px",
    "height": "50px"
  },
  ".play_container": {
    "width": "135px",
    "height": "135px",
    "marginTop": "0px",
    "marginRight": "65px",
    "marginBottom": "0px",
    "marginLeft": "65px",
    "borderRadius": "100px"
  },
  ".pre_container": {
    "width": "82px",
    "height": "82px",
    "marginLeft": "76px",
    "borderRadius": "40px"
  },
  ".next_container": {
    "width": "83px",
    "height": "83px",
    "borderRadius": "40px"
  },
  ".audio-last": {
    "width": "83px",
    "height": "83px",
    "resizeMode": "center"
  },
  ".audio-next": {
    "width": "83px",
    "height": "83px",
    "resizeMode": "center"
  },
  ".audio-play": {
    "width": "135px",
    "height": "135px"
  },
  ".audio-pause": {
    "width": "135px",
    "height": "135px"
  },
  ".audio-more": {
    "width": "50px",
    "height": "50px",
    "marginLeft": "76px"
  },
  ".hearing-shadow-show": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "width": "100%",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  ".hearing-shadow-none": {
    "display": "none"
  },
  ".hearing-catalog-show": {
    "position": "fixed",
    "flexDirection": "column",
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "width": "100%",
    "height": "883px",
    "backgroundColor": "#f0f8ff",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px"
  },
  ".hearing-catalog-none": {
    "display": "none"
  },
  ".catalog-list": {
    "paddingTop": "20px",
    "paddingLeft": "33px",
    "paddingRight": "33px"
  },
  ".catalog-item": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "130px",
    "paddingTop": "27px",
    "paddingBottom": "27px",
    "borderTopWidth": "0.5px",
    "borderTopColor": "rgba(0,0,0,0.2)"
  },
  ".left": {
    "flexDirection": "column"
  },
  ".title_num": {
    "fontSize": "31.3px",
    "color": "#1a1a1a"
  },
  ".title_name": {
    "fontSize": "31.3px",
    "color": "#1a1a1a",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".right": {
    "alignItems": "center",
    "marginLeft": "75px"
  },
  ".music-paly-png": {
    "width": "42px"
  },
  ".music-paly-png-none": {
    "display": "none"
  },
  ".bottom": {
    "marginTop": "3px",
    "alignItems": "center"
  },
  ".clock": {
    "width": "25px",
    "height": "25px"
  },
  ".time": {
    "fontSize": "27.1px",
    "color": "#1A1A1A",
    "opacity": 0.5,
    "marginLeft": "8px"
  },
  ".activate": {
    "color": "#ff0000"
  },
  ".catalog-top": {
    "width": "100%",
    "fontSize": "38px",
    "color": "#1A1A1A",
    "marginTop": "28.6px",
    "marginRight": "33px",
    "marginBottom": "17.8px",
    "marginLeft": "33px"
  },
  ".catalog-bottom": {
    "width": "100%",
    "height": "150px",
    "bottom": "0px",
    "textAlign": "center",
    "lineHeight": "50px",
    "color": "#ff0000",
    "fontSize": "28px",
    "backgroundColor": "#f0f8ff"
  }
}

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.audio"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.image"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.device"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    tingshuData: {
      chapterTitle: '第一回 命孤苦鬼节降草屋，家败落赌棚蒙羞辱',
      bookImage: './TO_DELETE/Group.png',
      bookTitle: '黑道教父杜月笙',
      author: '云中鹤',
      scoreImage: './img/star.png',
      score: '9.4分',
      list: [{
        title: '主播',
        name: '圣徒'
      }, {
        title: '状态',
        name: '连载中'
      }, {
        title: '集数',
        name: '150集'
      }, {
        title: '作者',
        name: '云中鹤'
      }],
      description: '1925年7月，杜月笙成立“三鑫公司”，垄断法租界鸦片提运。 斯特林.西格 老上海的黑帮大亨 老上海的黑帮大亨(3张) 雷夫在《宋家王朝》中描述了杜月笙鸦片销售这条通畅的“全球网络”。 同年，杜月笙出任法租界商会总联合会主席，兼纳税华人会监察。由于他在上海善待下台总统黎元洪，' + '黎元洪的秘书长特撰一副对联：“春申门下三千客，小杜城南五尺天”。他因此被其党羽吹捧为“当代春申君”。 大学者章太炎、名士杨度、名律师秦联奎都是他的座上客。由此，杜月笙的社会地位不断提升。'
    },
    dynamicallyColor: 'rgba(0, 0, 0,0.5)',
    title: '',
    minTimeGap: 0,
    image: './TO_DELETE/Bitmap.png',
    select: 0,
    isPlayImg: false,
    isLoop: true,
    routeStatus: false,
    time: 0,
    showTime: '00:00',
    total: 0,
    showTotal: '00:00',
    music: [{
      'titleNum': 1,
      'chapterTitle': "第一回 命孤苦鬼节降草屋，家败落赌棚蒙羞辱",
      'image': './TO_DELETE/Group.png',
      'isHearing': true,
      'duration': "7'45\"",
      src: 'http://www.ytmp3.cn/down/43402.mp3'
    }, {
      'titleNum': 2,
      'chapterTitle': "第二回 求生计卖果拾旧习，寻出路木行把心依",
      'image': './TO_DELETE/8.png',
      'isHearing': false,
      'duration': "7'45\"",
      src: 'http://www.ytmp3.cn/down/56628.mp3'
    }, {
      'titleNum': 3,
      'chapterTitle': "第三回，迷女色难耐欲中火，空妄想情场是非多",
      'image': './TO_DELETE/Group.png',
      'isHearing': false,
      'duration': "7'45\"",
      src: 'http://www.ytmp3.cn/down/56343.mp3'
    }, {
      'titleNum': 4,
      'chapterTitle': "第四回，识阿姐受雇烟花弄，入八股机灵称霸王",
      'image': './TO_DELETE/8.png',
      'isHearing': false,
      'duration': "7'45\"",
      src: 'http://www.ytmp3.cn/down/56174.mp3'
    }, {
      'titleNum': 5,
      'chapterTitle': "第五回，冒巡捕事败惹大祸，急救人九妹献玉身",
      'image': './TO_DELETE/Group.png',
      'isHearing': false,
      'duration': "7'45\"",
      src: 'http://www.ytmp3.cn/down/47796.mp3'
    }, {
      'titleNum': 6,
      'chapterTitle': "第六回 八仙巧遇陈世昌，寻靠山进庙",
      'image': './TO_DELETE/8.png',
      'isHearing': false,
      'duration': "7'45\"",
      src: 'http://www.ytmp3.cn/down/55671.mp3'
    }],
    catalogStatus: false
  },
  onInit: function onInit() {
    var _this2 = this;

    this.$page.setTitleBar({
      textColor: '##1A1A1A',
      backgroundColor: '#ffffff',
      menu: false
    });

    _system["default"].stop();

    this.title = this.music[this.select].title;
    _system["default"].src = this.music[this.select].src;
    this.routeStatus = false;

    if (this.item) {
      var currentAuidoItem = JSON.parse(this.item);
      _system["default"].src = currentAuidoItem.src;
      this.title = currentAuidoItem.title;
      this.image = currentAuidoItem.img;
    }

    _system["default"].autoplay = true;
    _system["default"].loop = true;
    _system["default"].currentTime = 0;

    _system["default"].ondurationchange = function () {
      _this2.total = _system["default"].duration;
      _this2.showTotal = _this2.changeTime(_this2.total);
      var percnettime = _system["default"].duration * 0.1;
      _this2.minTimeGap = percnettime > 10 ? percnettime : 10;
    };

    _system["default"].ontimeupdate = function () {
      _this2.showTime = _this2.changeTime(_system["default"].currentTime);
      _this2.time = _system["default"].currentTime;

      if (_system["default"].currentTime === _system["default"].duration) {
        _this2.next();
      }
    };

    var _this = this;

    _system3["default"].getInfo({
      success: function success(data) {
        if (data.engineProvider === 'huawei') {
          _this.getColor();
        }
      }
    });
  },
  play: function play() {
    _system["default"].play();

    this.isPlayImg = false;
  },
  pause: function pause() {
    _system["default"].pause();

    this.isPlayImg = true;
  },
  last: function last() {
    if (this.select > 0) {
      this.select = this.select - 1;
      _system["default"].src = this.music[this.select].src;
      _system["default"].currentTime = 0;
      this.time = 0;

      _system["default"].play();

      this.isPlayImg = false;
      this.tingshuData.chapterTitle = this.music[this.select].chapterTitle;
      this.tingshuData.bookImage = this.music[this.select].image;
      this.music.forEach(function (element) {
        element.isHearing = false;
      });
      this.music[this.select].isHearing = true;

      var _this = this;

      _system3["default"].getInfo({
        success: function success(data) {
          if (data.engineProvider === 'huawei') {
            _this.getColor();
          }
        }
      });
    } else {
      this.select = this.music.length - 1;
      _system["default"].src = this.music[this.select].src;
      _system["default"].currentTime = 0;
      this.time = 0;

      _system["default"].play();

      this.isPlayImg = false;
      this.tingshuData.chapterTitle = this.music[this.select].chapterTitle;
      this.tingshuData.bookImage = this.music[this.select].image;
      this.music.forEach(function (element) {
        element.isHearing = false;
      });
      this.music[this.select].isHearing = true;

      var _this3 = this;

      _system3["default"].getInfo({
        success: function success(data) {
          if (data.engineProvider === 'huawei') {
            _this3.getColor();
          }
        }
      });
    }
  },
  next: function next() {
    if (this.select < this.music.length - 1) {
      this.select = this.select + 1;
      _system["default"].src = this.music[this.select].src;
      _system["default"].currentTime = 0;
      this.time = 0;

      _system["default"].play();

      this.isPlayImg = false;
      this.tingshuData.chapterTitle = this.music[this.select].chapterTitle;
      this.tingshuData.bookImage = this.music[this.select].image;
      this.music.forEach(function (element) {
        element.isHearing = false;
      });
      this.music[this.select].isHearing = true;

      var _this = this;

      _system3["default"].getInfo({
        success: function success(data) {
          if (data.engineProvider === 'huawei') {
            _this.getColor();
          }
        }
      });
    } else {
      this.select = 0;
      _system["default"].src = this.music[this.select].src;
      _system["default"].currentTime = 0;
      this.time = 0;

      _system["default"].play();

      this.isPlayImg = false;
      this.tingshuData.chapterTitle = this.music[this.select].chapterTitle;
      this.tingshuData.bookImage = this.music[this.select].image;
      this.music.forEach(function (element) {
        element.isHearing = false;
      });
      this.music[this.select].isHearing = true;

      var _this4 = this;

      _system3["default"].getInfo({
        success: function success(data) {
          if (data.engineProvider === 'huawei') {
            _this4.getColor();
          }
        }
      });
    }
  },
  loop: function loop() {
    this.isLoop = !this.isLoop;
    _system["default"].loop = this.isLoop;
  },
  getValue: function getValue(name, e) {
    var gap = Math.abs(e.progress - _system["default"].currentTime);

    if (gap > this.minTimeGap) {
      this.time = e.progress;
      _system["default"].currentTime = e.progress;
    }
  },
  changeTime: function changeTime(time) {
    var result = "00:00";

    if (time < 60) {
      time = time < 10 ? "0" + time : time;
      result = "00:" + time;
    } else if (time >= 60) {
      var minute = Math.floor(time / 60);
      var timeInt = 60 * minute;
      time = time % timeInt < 10 ? "0" + time % timeInt : time % timeInt;
      result = "0" + minute + ":" + time;
    }

    return result;
  },
  getColor: function getColor() {
    var _self = this;

    _system2["default"].pickColor({
      uri: _self.music[_self.select].image,
      success: function success(data) {
        _self.dynamicallyColor = data.color;
      },
      fail: function fail(data, code) {
        console.log('handling fail, code = ' + code);
      },
      complete: function complete(data, code) {
        console.log('handling complete, code = ' + code);
      }
    });
  },
  showCatalog: function showCatalog() {
    this.catalogStatus = true;
    this.$page.setTitleBar({
      menu: false,
      textColor: '#1A1A1A',
      backgroundColor: 'rgba(0,0,0,0.5)'
    });
  },
  closeCatalog: function closeCatalog() {
    this.catalogStatus = false;
    this.$page.setTitleBar({
      menu: false,
      textColor: '#1A1A1A',
      backgroundColor: '#FFFFFF'
    });
  },
  toHearing: function toHearing(item, index) {
    _system["default"].stop();

    this.music.forEach(function (element) {
      element.isHearing = false;
    });
    item.isHearing = true;
    this.select = index;
    _system["default"].src = this.music[index].src;
    _system["default"].currentTime = 0;
    this.time = 0;

    _system["default"].play();

    this.isPlayImg = false;
    this.tingshuData.chapterTitle = this.music[index].chapterTitle;
    this.tingshuData.bookImage = this.music[index].image;

    var _this = this;

    _system3["default"].getInfo({
      success: function success(data) {
        if (data.engineProvider === 'huawei') {
          _this.getColor();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFBhZ2VfSGVhcmluZ2RldGFpbFxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfSGVhcmluZ2RldGFpbC9pbmRleC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZV9IZWFyaW5nZGV0YWlsL2luZGV4LnV4PzA1ZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VfSGVhcmluZ2RldGFpbC9pbmRleC51eD83NTAyIiwid2VicGFjazovLy8uL3NyYy9QYWdlX0hlYXJpbmdkZXRhaWwvaW5kZXgudXg/M2MxOSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzkpO1xuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfSGVhcmluZ2RldGFpbFxcXFxpbmRleC51eCEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcc3JjXFxcXFBhZ2VfSGVhcmluZ2RldGFpbFxcXFxpbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxccXVpY2thcHBcXFxca29hbGFDYWlwdVxcXFxjb20ubWVudS5xdWlja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXHF1aWNrYXBwXFxcXGtvYWxhQ2FpcHVcXFxcY29tLm1lbnUucXVpY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuMS4wLVN0YWJsZS4zMDAnfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZGV0YWlsX2NvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5jaGFwdGVyVGl0bGV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRvcF90aXR0ZWxcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJvb2tfaW1hZ2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpbmdzaHVEYXRhLmJvb2tJbWFnZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYm9va19pbWFnZV9wbmdcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5ib29rVGl0bGV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJvb2tfbmFtZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5hdXRob3J9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJvb2tfYXV0aG9yXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJib29rX2V2YWx1YXRlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5zY29yZUltYWdlfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGluZ3NodURhdGEuc2NvcmV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJvb2tfc2NvcmVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibWlkZGxlX21hc3NlZ2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5saXN0fSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm1pZGRsZV9tYXNzZWdlX3RpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm1pZGRsZV9tYXNzZWdlX25hbWVcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJvb2tfZGV0YWlsXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGluZ3NodURhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImRldGFpbF90ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9tX2F1ZGlvXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImF1ZGlvLWNvbnRlbnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhdWRpby1wcm9ncmVzc1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3dUaW1lfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdWRpby10aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGlkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGltZX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZHluYW1pY2FsbHlDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5nZXRWYWx1ZSgndGltZScsZXZ0KX1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3dUb3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW8tdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhdWRpby1jb250cm9sXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL1BhZ2VfSGVhcmluZ2RldGFpbC9pbWcvYWRkLnBuZ1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImF1ZGlvLXJlcGVhdFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibG9vcFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwcmVfY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmR5bmFtaWNhbGx5Q29sb3J9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWwvaW1nL3ByZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdWRpby1sYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJsYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInBsYXlfY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmR5bmFtaWNhbGx5Q29sb3J9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWwvaW1nL3BsYXkucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlzUGxheUltZ30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdWRpby1wbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJwbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWwvaW1nL3N0b3AucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5pc1BsYXlJbWd9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW8tcGF1c2VcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInBhdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm5leHRfY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmR5bmFtaWNhbGx5Q29sb3J9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWwvaW1nL25leHQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW8tbmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvUGFnZV9IZWFyaW5nZGV0YWlsL2ltZy9saXN0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImF1ZGlvLW1vcmVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNob3dDYXRhbG9nXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbdGhpcy5jYXRhbG9nU3RhdHVzPT09dHJ1ZT8naGVhcmluZy1zaGFkb3ctc2hvdyc6J2hlYXJpbmctc2hhZG93LW5vbmUnXX0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbG9zZUNhdGFsb2dcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gW3RoaXMuY2F0YWxvZ1N0YXR1cz09PXRydWU/J2hlYXJpbmctY2F0YWxvZy1zaG93JzonaGVhcmluZy1jYXRhbG9nLW5vbmUnXX0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+ebruW9lSAoJysodGhpcy5tdXNpYy5sZW5ndGgpKycpJ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2F0YWxvZy10b3BcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2F0YWxvZy1saXN0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRhbG9nLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRhbG9nLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm11c2ljfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMudG9IZWFyaW5nKHRoaXMuaXRlbSx0aGlzLiRpZHgsZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uY2hhcHRlclRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWyd0aXRsZV9uYW1lJywgdGhpcy5pdGVtLmlzSGVhcmluZz8nYWN0aXZhdGUnOicnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWwvaW1nL2Nsb2NrLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uZHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL1BhZ2VfSGVhcmluZ2RldGFpbC9pbWcvaWNfbXVzaWNfcGFseS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFt0aGlzLml0ZW0uaXNIZWFyaW5nPydtdXNpYy1wYWx5LXBuZyc6J211c2ljLXBhbHktcG5nLW5vbmUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5YWz6ZetXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2F0YWxvZy1ib3R0b21cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsb3NlQ2F0YWxvZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5kZXRhaWxfY29udGVudFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNzVweFwiXG4gIH0sXG4gIFwiLnRvcF90aXR0ZWxcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM3LjVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5ib29rX2ltYWdlXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0NnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIuYm9va19pbWFnZV9wbmdcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMTdweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjg5cHhcIlxuICB9LFxuICBcIi5ib29rX25hbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM3LjVweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNXB4XCJcbiAgfSxcbiAgXCIuYm9va19hdXRob3JcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjUpXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxM3B4XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNVxuICB9LFxuICBcIi5ib29rX2V2YWx1YXRlXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMxcHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5ib29rX3Njb3JlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZCRjAwXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLm1pZGRsZV9tYXNzZWdlXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiNTQ4cHhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiLm1pZGRsZV9tYXNzZWdlIGRpdlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI3M3B4XCJcbiAgfSxcbiAgXCIubWlkZGxlX21hc3NlZ2VfdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5taWRkbGVfbWFzc2VnZV9uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDEpXCJcbiAgfSxcbiAgXCIuYm9va19kZXRhaWxcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMDhweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiM3B4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTA4cHhcIlxuICB9LFxuICBcIi5kZXRhaWxfdGV4dFwiOiB7XG4gICAgXCJsaW5lc1wiOiA5LFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjQ0cHhcIlxuICB9LFxuICBcIi5idXR0b21fYXVkaW9cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjcwcHhcIlxuICB9LFxuICBcIi5jb250ZW50XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5hdWRpby1iYWNrXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5hdWRpby1iYWNrIGltYWdlXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5hdWRpby1jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjM0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjM0cHhcIlxuICB9LFxuICBcIi5hdWRpby10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzcuNXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNi43cHhcIlxuICB9LFxuICBcIi5hdWRpby1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCI0NjdweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDY3cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIzMy41cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1NXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNTVweFwiXG4gIH0sXG4gIFwiLmF1ZGlvLXByb2dyZXNzXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjgwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLmF1ZGlvLXRpbWVcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjIuN3B4XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNzVcbiAgfSxcbiAgXCIuc2xpZGVyXCI6IHtcbiAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjMDA3REZGXCIsXG4gICAgXCJjb2xvclwiOiBcIiNFNUU1RTVcIixcbiAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjIuNHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMi43cHhcIlxuICB9LFxuICBcIi5hdWRpby1jb250cm9sXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjU4cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYXVkaW8tcmVwZWF0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLnBsYXlfY29udGFpbmVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTM1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEzNXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNjVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5wcmVfY29udGFpbmVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjc2cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5uZXh0X2NvbnRhaW5lclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5hdWRpby1sYXN0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODNweFwiLFxuICAgIFwicmVzaXplTW9kZVwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmF1ZGlvLW5leHRcIjoge1xuICAgIFwid2lkdGhcIjogXCI4M3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4M3B4XCIsXG4gICAgXCJyZXNpemVNb2RlXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYXVkaW8tcGxheVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEzNXB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMzVweFwiXG4gIH0sXG4gIFwiLmF1ZGlvLXBhdXNlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTM1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEzNXB4XCJcbiAgfSxcbiAgXCIuYXVkaW8tbW9yZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI3NnB4XCJcbiAgfSxcbiAgXCIuaGVhcmluZy1zaGFkb3ctc2hvd1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogXCIwcHhcIixcbiAgICBcImxlZnRcIjogXCIwcHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjUpXCJcbiAgfSxcbiAgXCIuaGVhcmluZy1zaGFkb3ctbm9uZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiLmhlYXJpbmctY2F0YWxvZy1zaG93XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibGVmdFwiOiBcIjBweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODgzcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGY4ZmZcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCIxNnB4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5oZWFyaW5nLWNhdGFsb2ctbm9uZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiLmNhdGFsb2ctbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzM3B4XCJcbiAgfSxcbiAgXCIuY2F0YWxvZy1pdGVtXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTMwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyN3B4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjdweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIwLjVweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMilcIlxuICB9LFxuICBcIi5sZWZ0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi50aXRsZV9udW1cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMWExYVwiXG4gIH0sXG4gIFwiLnRpdGxlX25hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMWExYVwiLFxuICAgIFwibGluZXNcIjogMSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIucmlnaHRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjc1cHhcIlxuICB9LFxuICBcIi5tdXNpYy1wYWx5LXBuZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQycHhcIlxuICB9LFxuICBcIi5tdXNpYy1wYWx5LXBuZy1ub25lXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCIuYm90dG9tXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjNweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmNsb2NrXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjVweFwiXG4gIH0sXG4gIFwiLnRpbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuYWN0aXZhdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmYwMDAwXCJcbiAgfSxcbiAgXCIuY2F0YWxvZy10b3BcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjguNnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE3LjhweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5jYXRhbG9nLWJvdHRvbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjE1MHB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjUwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmMDAwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBmOGZmXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uYXVkaW9cIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uaW1hZ2VcIikpO1xuXG52YXIgX3N5c3RlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZGV2aWNlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgdGluZ3NodURhdGE6IHtcbiAgICAgIGNoYXB0ZXJUaXRsZTogJ+esrOS4gOWbniDlkb3lraToi6bprLzoioLpmY3ojYnlsYvvvIzlrrbotKXokL3otYzmo5rokpnnvp7ovrEnLFxuICAgICAgYm9va0ltYWdlOiAnLi9UT19ERUxFVEUvR3JvdXAucG5nJyxcbiAgICAgIGJvb2tUaXRsZTogJ+m7kemBk+aVmeeItuadnOaciOesmScsXG4gICAgICBhdXRob3I6ICfkupHkuK3puaQnLFxuICAgICAgc2NvcmVJbWFnZTogJy4vaW1nL3N0YXIucG5nJyxcbiAgICAgIHNjb3JlOiAnOS405YiGJyxcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHRpdGxlOiAn5Li75pKtJyxcbiAgICAgICAgbmFtZTogJ+Wco+W+kidcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfnirbmgIEnLFxuICAgICAgICBuYW1lOiAn6L+e6L295LitJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+mbhuaVsCcsXG4gICAgICAgIG5hbWU6ICcxNTDpm4YnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5L2c6ICFJyxcbiAgICAgICAgbmFtZTogJ+S6keS4rem5pCdcbiAgICAgIH1dLFxuICAgICAgZGVzY3JpcHRpb246ICcxOTI15bm0N+aciO+8jOadnOaciOesmeaIkOeri+KAnOS4iemRq+WFrOWPuOKAne+8jOWehOaWreazleenn+eVjOm4pueJh+aPkOi/kOOAgiDmlq/nibnmnpcu6KW/5qC8IOiAgeS4iua1t+eahOm7keW4ruWkp+S6qCDogIHkuIrmtbfnmoTpu5HluK7lpKfkuqgoM+W8oCkg6Zu35aSr5Zyo44CK5a6L5a62546L5pyd44CL5Lit5o+P6L+w5LqG5p2c5pyI56yZ6bim54mH6ZSA5ZSu6L+Z5p2h6YCa55WF55qE4oCc5YWo55CD572R57uc4oCd44CCIOWQjOW5tO+8jOadnOaciOesmeWHuuS7u+azleenn+eVjOWVhuS8muaAu+iBlOWQiOS8muS4u+W4re+8jOWFvOe6s+eojuWNjuS6uuS8muebkeWvn+OAgueUseS6juS7luWcqOS4iua1t+WWhOW+heS4i+WPsOaAu+e7n+m7juWFg+a0qu+8jCcgKyAn6buO5YWD5rSq55qE56eY5Lmm6ZW/54m55pKw5LiA5Ymv5a+56IGU77ya4oCc5pil55Sz6Zeo5LiL5LiJ5Y2D5a6i77yM5bCP5p2c5Z+O5Y2X5LqU5bC65aSp4oCd44CC5LuW5Zug5q2k6KKr5YW25YWa57695ZC55o2n5Li64oCc5b2T5Luj5pil55Sz5ZCb4oCd44CCIOWkp+WtpuiAheeroOWkqueCjuOAgeWQjeWjq+adqOW6puOAgeWQjeW+i+W4iOenpuiBlOWljumDveaYr+S7lueahOW6p+S4iuWuouOAgueUseatpO+8jOadnOaciOesmeeahOekvuS8muWcsOS9jeS4jeaWreaPkOWNh+OAgidcbiAgICB9LFxuICAgIGR5bmFtaWNhbGx5Q29sb3I6ICdyZ2JhKDAsIDAsIDAsMC41KScsXG4gICAgdGl0bGU6ICcnLFxuICAgIG1pblRpbWVHYXA6IDAsXG4gICAgaW1hZ2U6ICcuL1RPX0RFTEVURS9CaXRtYXAucG5nJyxcbiAgICBzZWxlY3Q6IDAsXG4gICAgaXNQbGF5SW1nOiBmYWxzZSxcbiAgICBpc0xvb3A6IHRydWUsXG4gICAgcm91dGVTdGF0dXM6IGZhbHNlLFxuICAgIHRpbWU6IDAsXG4gICAgc2hvd1RpbWU6ICcwMDowMCcsXG4gICAgdG90YWw6IDAsXG4gICAgc2hvd1RvdGFsOiAnMDA6MDAnLFxuICAgIG11c2ljOiBbe1xuICAgICAgJ3RpdGxlTnVtJzogMSxcbiAgICAgICdjaGFwdGVyVGl0bGUnOiBcIuesrOS4gOWbniDlkb3lraToi6bprLzoioLpmY3ojYnlsYvvvIzlrrbotKXokL3otYzmo5rokpnnvp7ovrFcIixcbiAgICAgICdpbWFnZSc6ICcuL1RPX0RFTEVURS9Hcm91cC5wbmcnLFxuICAgICAgJ2lzSGVhcmluZyc6IHRydWUsXG4gICAgICAnZHVyYXRpb24nOiBcIjcnNDVcXFwiXCIsXG4gICAgICBzcmM6ICdodHRwOi8vd3d3Lnl0bXAzLmNuL2Rvd24vNDM0MDIubXAzJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZU51bSc6IDIsXG4gICAgICAnY2hhcHRlclRpdGxlJzogXCLnrKzkuozlm54g5rGC55Sf6K6h5Y2W5p6c5ou+5pen5Lmg77yM5a+75Ye66Lev5pyo6KGM5oqK5b+D5L6dXCIsXG4gICAgICAnaW1hZ2UnOiAnLi9UT19ERUxFVEUvOC5wbmcnLFxuICAgICAgJ2lzSGVhcmluZyc6IGZhbHNlLFxuICAgICAgJ2R1cmF0aW9uJzogXCI3JzQ1XFxcIlwiLFxuICAgICAgc3JjOiAnaHR0cDovL3d3dy55dG1wMy5jbi9kb3duLzU2NjI4Lm1wMydcbiAgICB9LCB7XG4gICAgICAndGl0bGVOdW0nOiAzLFxuICAgICAgJ2NoYXB0ZXJUaXRsZSc6IFwi56ys5LiJ5Zue77yM6L+35aWz6Imy6Zq+6ICQ5qyy5Lit54Gr77yM56m65aaE5oOz5oOF5Zy65piv6Z2e5aSaXCIsXG4gICAgICAnaW1hZ2UnOiAnLi9UT19ERUxFVEUvR3JvdXAucG5nJyxcbiAgICAgICdpc0hlYXJpbmcnOiBmYWxzZSxcbiAgICAgICdkdXJhdGlvbic6IFwiNyc0NVxcXCJcIixcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cueXRtcDMuY24vZG93bi81NjM0My5tcDMnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlTnVtJzogNCxcbiAgICAgICdjaGFwdGVyVGl0bGUnOiBcIuesrOWbm+Wbnu+8jOivhumYv+WnkOWPl+mbh+eDn+iKseW8hO+8jOWFpeWFq+iCoeacuueBteensOmcuOeOi1wiLFxuICAgICAgJ2ltYWdlJzogJy4vVE9fREVMRVRFLzgucG5nJyxcbiAgICAgICdpc0hlYXJpbmcnOiBmYWxzZSxcbiAgICAgICdkdXJhdGlvbic6IFwiNyc0NVxcXCJcIixcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cueXRtcDMuY24vZG93bi81NjE3NC5tcDMnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlTnVtJzogNSxcbiAgICAgICdjaGFwdGVyVGl0bGUnOiBcIuesrOS6lOWbnu+8jOWGkuW3oeaNleS6i+i0peaDueWkp+eluO+8jOaApeaVkeS6uuS5neWmueeMrueOiei6q1wiLFxuICAgICAgJ2ltYWdlJzogJy4vVE9fREVMRVRFL0dyb3VwLnBuZycsXG4gICAgICAnaXNIZWFyaW5nJzogZmFsc2UsXG4gICAgICAnZHVyYXRpb24nOiBcIjcnNDVcXFwiXCIsXG4gICAgICBzcmM6ICdodHRwOi8vd3d3Lnl0bXAzLmNuL2Rvd24vNDc3OTYubXAzJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZU51bSc6IDYsXG4gICAgICAnY2hhcHRlclRpdGxlJzogXCLnrKzlha3lm54g5YWr5LuZ5ben6YGH6ZmI5LiW5piM77yM5a+76Z2g5bGx6L+b5bqZXCIsXG4gICAgICAnaW1hZ2UnOiAnLi9UT19ERUxFVEUvOC5wbmcnLFxuICAgICAgJ2lzSGVhcmluZyc6IGZhbHNlLFxuICAgICAgJ2R1cmF0aW9uJzogXCI3JzQ1XFxcIlwiLFxuICAgICAgc3JjOiAnaHR0cDovL3d3dy55dG1wMy5jbi9kb3duLzU1NjcxLm1wMydcbiAgICB9XSxcbiAgICBjYXRhbG9nU3RhdHVzOiBmYWxzZVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgdGV4dENvbG9yOiAnIyMxQTFBMUEnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBtZW51OiBmYWxzZVxuICAgIH0pO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc3RvcCgpO1xuXG4gICAgdGhpcy50aXRsZSA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLnRpdGxlO1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnNyYyA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLnNyYztcbiAgICB0aGlzLnJvdXRlU3RhdHVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5pdGVtKSB7XG4gICAgICB2YXIgY3VycmVudEF1aWRvSXRlbSA9IEpTT04ucGFyc2UodGhpcy5pdGVtKTtcbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnNyYyA9IGN1cnJlbnRBdWlkb0l0ZW0uc3JjO1xuICAgICAgdGhpcy50aXRsZSA9IGN1cnJlbnRBdWlkb0l0ZW0udGl0bGU7XG4gICAgICB0aGlzLmltYWdlID0gY3VycmVudEF1aWRvSXRlbS5pbWc7XG4gICAgfVxuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uYXV0b3BsYXkgPSB0cnVlO1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmxvb3AgPSB0cnVlO1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmN1cnJlbnRUaW1lID0gMDtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLm9uZHVyYXRpb25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIudG90YWwgPSBfc3lzdGVtW1wiZGVmYXVsdFwiXS5kdXJhdGlvbjtcbiAgICAgIF90aGlzMi5zaG93VG90YWwgPSBfdGhpczIuY2hhbmdlVGltZShfdGhpczIudG90YWwpO1xuICAgICAgdmFyIHBlcmNuZXR0aW1lID0gX3N5c3RlbVtcImRlZmF1bHRcIl0uZHVyYXRpb24gKiAwLjE7XG4gICAgICBfdGhpczIubWluVGltZUdhcCA9IHBlcmNuZXR0aW1lID4gMTAgPyBwZXJjbmV0dGltZSA6IDEwO1xuICAgIH07XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5vbnRpbWV1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuc2hvd1RpbWUgPSBfdGhpczIuY2hhbmdlVGltZShfc3lzdGVtW1wiZGVmYXVsdFwiXS5jdXJyZW50VGltZSk7XG4gICAgICBfdGhpczIudGltZSA9IF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmN1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAoX3N5c3RlbVtcImRlZmF1bHRcIl0uY3VycmVudFRpbWUgPT09IF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmR1cmF0aW9uKSB7XG4gICAgICAgIF90aGlzMi5uZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0uZ2V0SW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZW5naW5lUHJvdmlkZXIgPT09ICdodWF3ZWknKSB7XG4gICAgICAgICAgX3RoaXMuZ2V0Q29sb3IoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBwbGF5OiBmdW5jdGlvbiBwbGF5KCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnBsYXkoKTtcblxuICAgIHRoaXMuaXNQbGF5SW1nID0gZmFsc2U7XG4gIH0sXG4gIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wYXVzZSgpO1xuXG4gICAgdGhpcy5pc1BsYXlJbWcgPSB0cnVlO1xuICB9LFxuICBsYXN0OiBmdW5jdGlvbiBsYXN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5zZWxlY3QgLSAxO1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc3JjID0gdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uc3JjO1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uY3VycmVudFRpbWUgPSAwO1xuICAgICAgdGhpcy50aW1lID0gMDtcblxuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucGxheSgpO1xuXG4gICAgICB0aGlzLmlzUGxheUltZyA9IGZhbHNlO1xuICAgICAgdGhpcy50aW5nc2h1RGF0YS5jaGFwdGVyVGl0bGUgPSB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5jaGFwdGVyVGl0bGU7XG4gICAgICB0aGlzLnRpbmdzaHVEYXRhLmJvb2tJbWFnZSA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLmltYWdlO1xuICAgICAgdGhpcy5tdXNpYy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuaXNIZWFyaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLmlzSGVhcmluZyA9IHRydWU7XG5cbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF9zeXN0ZW0zW1wiZGVmYXVsdFwiXS5nZXRJbmZvKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEuZW5naW5lUHJvdmlkZXIgPT09ICdodWF3ZWknKSB7XG4gICAgICAgICAgICBfdGhpcy5nZXRDb2xvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5tdXNpYy5sZW5ndGggLSAxO1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc3JjID0gdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uc3JjO1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uY3VycmVudFRpbWUgPSAwO1xuICAgICAgdGhpcy50aW1lID0gMDtcblxuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucGxheSgpO1xuXG4gICAgICB0aGlzLmlzUGxheUltZyA9IGZhbHNlO1xuICAgICAgdGhpcy50aW5nc2h1RGF0YS5jaGFwdGVyVGl0bGUgPSB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5jaGFwdGVyVGl0bGU7XG4gICAgICB0aGlzLnRpbmdzaHVEYXRhLmJvb2tJbWFnZSA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLmltYWdlO1xuICAgICAgdGhpcy5tdXNpYy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuaXNIZWFyaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLmlzSGVhcmluZyA9IHRydWU7XG5cbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0uZ2V0SW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLmVuZ2luZVByb3ZpZGVyID09PSAnaHVhd2VpJykge1xuICAgICAgICAgICAgX3RoaXMzLmdldENvbG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0IDwgdGhpcy5tdXNpYy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IHRoaXMuc2VsZWN0ICsgMTtcbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnNyYyA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLnNyYztcbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnBsYXkoKTtcblxuICAgICAgdGhpcy5pc1BsYXlJbWcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGluZ3NodURhdGEuY2hhcHRlclRpdGxlID0gdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uY2hhcHRlclRpdGxlO1xuICAgICAgdGhpcy50aW5nc2h1RGF0YS5ib29rSW1hZ2UgPSB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5pbWFnZTtcbiAgICAgIHRoaXMubXVzaWMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlzSGVhcmluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5pc0hlYXJpbmcgPSB0cnVlO1xuXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0uZ2V0SW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLmVuZ2luZVByb3ZpZGVyID09PSAnaHVhd2VpJykge1xuICAgICAgICAgICAgX3RoaXMuZ2V0Q29sb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IDA7XG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5zcmMgPSB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5zcmM7XG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5jdXJyZW50VGltZSA9IDA7XG4gICAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wbGF5KCk7XG5cbiAgICAgIHRoaXMuaXNQbGF5SW1nID0gZmFsc2U7XG4gICAgICB0aGlzLnRpbmdzaHVEYXRhLmNoYXB0ZXJUaXRsZSA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLmNoYXB0ZXJUaXRsZTtcbiAgICAgIHRoaXMudGluZ3NodURhdGEuYm9va0ltYWdlID0gdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uaW1hZ2U7XG4gICAgICB0aGlzLm11c2ljLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pc0hlYXJpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uaXNIZWFyaW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIF9zeXN0ZW0zW1wiZGVmYXVsdFwiXS5nZXRJbmZvKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEuZW5naW5lUHJvdmlkZXIgPT09ICdodWF3ZWknKSB7XG4gICAgICAgICAgICBfdGhpczQuZ2V0Q29sb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgbG9vcDogZnVuY3Rpb24gbG9vcCgpIHtcbiAgICB0aGlzLmlzTG9vcCA9ICF0aGlzLmlzTG9vcDtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5sb29wID0gdGhpcy5pc0xvb3A7XG4gIH0sXG4gIGdldFZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShuYW1lLCBlKSB7XG4gICAgdmFyIGdhcCA9IE1hdGguYWJzKGUucHJvZ3Jlc3MgLSBfc3lzdGVtW1wiZGVmYXVsdFwiXS5jdXJyZW50VGltZSk7XG5cbiAgICBpZiAoZ2FwID4gdGhpcy5taW5UaW1lR2FwKSB7XG4gICAgICB0aGlzLnRpbWUgPSBlLnByb2dyZXNzO1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uY3VycmVudFRpbWUgPSBlLnByb2dyZXNzO1xuICAgIH1cbiAgfSxcbiAgY2hhbmdlVGltZTogZnVuY3Rpb24gY2hhbmdlVGltZSh0aW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFwiMDA6MDBcIjtcblxuICAgIGlmICh0aW1lIDwgNjApIHtcbiAgICAgIHRpbWUgPSB0aW1lIDwgMTAgPyBcIjBcIiArIHRpbWUgOiB0aW1lO1xuICAgICAgcmVzdWx0ID0gXCIwMDpcIiArIHRpbWU7XG4gICAgfSBlbHNlIGlmICh0aW1lID49IDYwKSB7XG4gICAgICB2YXIgbWludXRlID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICAgICAgdmFyIHRpbWVJbnQgPSA2MCAqIG1pbnV0ZTtcbiAgICAgIHRpbWUgPSB0aW1lICUgdGltZUludCA8IDEwID8gXCIwXCIgKyB0aW1lICUgdGltZUludCA6IHRpbWUgJSB0aW1lSW50O1xuICAgICAgcmVzdWx0ID0gXCIwXCIgKyBtaW51dGUgKyBcIjpcIiArIHRpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0Q29sb3I6IGZ1bmN0aW9uIGdldENvbG9yKCkge1xuICAgIHZhciBfc2VsZiA9IHRoaXM7XG5cbiAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0ucGlja0NvbG9yKHtcbiAgICAgIHVyaTogX3NlbGYubXVzaWNbX3NlbGYuc2VsZWN0XS5pbWFnZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBfc2VsZi5keW5hbWljYWxseUNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIGZhaWwsIGNvZGUgPSAnICsgY29kZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIGNvbXBsZXRlLCBjb2RlID0gJyArIGNvZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzaG93Q2F0YWxvZzogZnVuY3Rpb24gc2hvd0NhdGFsb2coKSB7XG4gICAgdGhpcy5jYXRhbG9nU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIG1lbnU6IGZhbHNlLFxuICAgICAgdGV4dENvbG9yOiAnIzFBMUExQScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknXG4gICAgfSk7XG4gIH0sXG4gIGNsb3NlQ2F0YWxvZzogZnVuY3Rpb24gY2xvc2VDYXRhbG9nKCkge1xuICAgIHRoaXMuY2F0YWxvZ1N0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgbWVudTogZmFsc2UsXG4gICAgICB0ZXh0Q29sb3I6ICcjMUExQTFBJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnXG4gICAgfSk7XG4gIH0sXG4gIHRvSGVhcmluZzogZnVuY3Rpb24gdG9IZWFyaW5nKGl0ZW0sIGluZGV4KSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc3RvcCgpO1xuXG4gICAgdGhpcy5tdXNpYy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmlzSGVhcmluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGl0ZW0uaXNIZWFyaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdCA9IGluZGV4O1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnNyYyA9IHRoaXMubXVzaWNbaW5kZXhdLnNyYztcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5jdXJyZW50VGltZSA9IDA7XG4gICAgdGhpcy50aW1lID0gMDtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnBsYXkoKTtcblxuICAgIHRoaXMuaXNQbGF5SW1nID0gZmFsc2U7XG4gICAgdGhpcy50aW5nc2h1RGF0YS5jaGFwdGVyVGl0bGUgPSB0aGlzLm11c2ljW2luZGV4XS5jaGFwdGVyVGl0bGU7XG4gICAgdGhpcy50aW5nc2h1RGF0YS5ib29rSW1hZ2UgPSB0aGlzLm11c2ljW2luZGV4XS5pbWFnZTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0uZ2V0SW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZW5naW5lUHJvdmlkZXIgPT09ICdodWF3ZWknKSB7XG4gICAgICAgICAgX3RoaXMuZ2V0Q29sb3IoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9