/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst saySomething_1 = __importDefault(__webpack_require__(/*! ./saySomething */ \"./src/saySomething.ts\"));\n// import saySomethig from \"./saySomething\";\nconst root = document.getElementById(\"root\");\nconst saySomethig = new saySomething_1.default(\"Hello Typescript\");\nsaySomethig.sayText(root);\n\n\n//# sourceURL=webpack://ts-tutorial/./src/index.ts?");

/***/ }),

/***/ "./src/saySomething.ts":
/*!*****************************!*\
  !*** ./src/saySomething.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass SaySomethig {\n    constructor(message) {\n        this.message = message;\n    }\n    sayText(elem) {\n        if (elem) {\n            elem.innerText = this.message;\n        }\n    }\n}\nexports[\"default\"] = SaySomethig;\n// export default class SaySomething {\n//     //クラスで使うプロパティ\n//     message: string;\n//     //初期化\n//     constructor(message: string) {\n//         this.message = message\n//     }\n//     //外部から呼び出せるメソッドを定義\n//     public sayText(elem: HTMLElement | null) {\n//         if(elem) {\n//             elem.innerText = this.message\n//         }\n//     }\n// }\n\n\n//# sourceURL=webpack://ts-tutorial/./src/saySomething.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;