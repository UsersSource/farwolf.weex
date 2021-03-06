// { "framework": "Weex" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(48)
	var __weex_style__ = __webpack_require__(49)
	var __weex_script__ = __webpack_require__(50)

	__weex_define__('@weex-component/b8c3cc5c1aed70428a45e38b34fdb4c6', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/b8c3cc5c1aed70428a45e38b34fdb4c6',undefined,undefined)

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "attr": {
	    "@click": "update"
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        ":src": "logoUrl"
	      },
	      "classList": [
	        "logo"
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "value": function () {return 'Hello ' + (this.target)}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "desc"
	      ],
	      "attr": {
	        "value": "Now, let's use vue to build your weex app."
	      }
	    }
	  ]
	}

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "alignItems": "center",
	    "marginTop": 120
	  },
	  "title": {
	    "paddingTop": 40,
	    "paddingBottom": 40,
	    "fontSize": 48
	  },
	  "logo": {
	    "width": 360,
	    "height": 156
	  },
	  "desc": {
	    "paddingTop": 20,
	    "color": "#888888",
	    "fontSize": 24
	  }
	}

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {
	    logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
	    target: 'World'
	  },
	  methods: {
	    update: function update(e) {
	      this.target = 'Weex';
	      console.log('target:', this.target);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ })

/******/ });