(function(){
  
  var manifestJson = {"package":"com.menu.quick","name":"考拉菜谱","versionName":"1.0.1","versionCode":1,"icon":"/Common/logo.png","minPlatformVersion":1040,"features":[{"name":"system.prompt"},{"name":"system.device"},{"name":"system.audio"},{"name":"system.router"},{"name":"system.image"}],"permissions":[{"origin":"*"}],"config":{},"router":{"entry":"Page_Main","pages":{"Page_Main":{"component":"index","path":"/Page_Main"},"Page_Shucheng":{"component":"index","path":"/Page_Shucheng"},"Page_Fenlei":{"component":"index","path":"/Page_Fenlei"},"Page_Mine":{"component":"index","path":"/Page_Mine"},"Page_Novelclassify":{"component":"index","path":"/Page_Novelclassify"},"Page_Bookdetails":{"component":"index","path":"/Page_Bookdetails"},"Page_Charge":{"component":"index","path":"/Page_Charge"},"Page_Catalogue":{"component":"index","path":"/Page_Catalogue"},"Page_Search":{"component":"index","path":"/Page_Search"},"Page_Read":{"component":"index","path":"/Page_Read"},"Page_Hearingdetail":{"component":"index","path":"/Page_Hearingdetail"},"Page_Tingshu":{"component":"index","path":"/Page_Tingshu"},"Page_About":{"component":"index","path":"/Page_About"},"Page_In_Build":{"component":"index","path":"/Page_In_Build"},"Page_Notice":{"component":"index","path":"/Page_Notice"},"Page_Activity":{"component":"index","path":"/Page_Activity"}}},"display":{"titleBarBackgroundColor":"#0faeff","pages":{"Page_Search":{"titleBar":false}}}}
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick/src!./node_modules/babel-loader/lib/index.js?cwd=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick&cacheDirectory&comments=false!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick/src!./node_modules/babel-loader/lib?cwd=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick&cacheDirectory&comments=false!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){module.exports = {\n  onCreate() {\n    console.info('Application onCreate');\n  },\n\n  onDestroy() {\n    console.info('Application onDestroy');\n  }\n\n};}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPS9Vc2Vycy9rb2FsYS9EZXNrdG9wL/CfkKgv5b+r5bqU55SoL215LW1lbnUtL2tvYWxhQ2FpcHUvY29tLm1lbnUucXVpY2svc3JjIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPS9Vc2Vycy9rb2FsYS9EZXNrdG9wL/CfkKgv5b+r5bqU55SoL215LW1lbnUtL2tvYWxhQ2FpcHUvY29tLm1lbnUucXVpY2smY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vc3JjL2FwcC51eD91eFR5cGU9YXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1VzZXJzL2tvYWxhL0Rlc2t0b3Av8J+QqC/lv6vlupTnlKgvbXktbWVudS0va29hbGFDYWlwdS9jb20ubWVudS5xdWljay9zcmMvYXBwLnV4PzliNjEiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb25DcmVhdGUoKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0FwcGxpY2F0aW9uIG9uQ3JlYXRlJyk7XG4gICAgfSxcbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0FwcGxpY2F0aW9uIG9uRGVzdHJveScpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVBBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick/src!./node_modules/babel-loader/lib/index.js?cwd=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick&cacheDirectory&comments=false!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $app_style$ = {};var $app_script$ = __webpack_require__(/*! ../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick/src!../node_modules/babel-loader?cwd=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick&cacheDirectory&comments=false!../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick/src!./node_modules/babel-loader/lib/index.js?cwd=/Users/koala/Desktop/🐨/快应用/my-menu-/koalaCaipu/com.menu.quick&cacheDirectory&comments=false!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){\n     $app_script$($app_module$, $app_exports$, $app_require$)\n     if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default;\n        }\n     $app_module$.exports['manifest'] = manifestJson;\n     $app_module$.exports.style = { list: [ $app_style$ ] };\n})\n\n$app_bootstrap$('@app-application/app',{ packagerVersion: '0.6.6'})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4PzA2NWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRhcHBfc3R5bGUkID0ge307dmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPS9Vc2Vycy9rb2FsYS9EZXNrdG9wL/CfkKgv5b+r5bqU55SoL215LW1lbnUtL2tvYWxhQ2FpcHUvY29tLm1lbnUucXVpY2svc3JjIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/Y3dkPS9Vc2Vycy9rb2FsYS9EZXNrdG9wL/CfkKgv5b+r5bqU55SoL215LW1lbnUtL2tvYWxhQ2FpcHUvY29tLm1lbnUucXVpY2smY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vYXBwLnV4P3V4VHlwZT1hcHBcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHNbJ21hbmlmZXN0J10gPSBtYW5pZmVzdEpzb247XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0geyBsaXN0OiBbICRhcHBfc3R5bGUkIF0gfTtcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLHsgcGFja2FnZXJWZXJzaW9uOiAnMC42LjYnfSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = manifestJson;
  }
})();