/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("var btnStart = document.querySelector(\"#timerStart\");\nvar btnPause = document.querySelector(\"#timerPause\");\nvar btnResume = document.querySelector(\"#timerResume\");\nvar myCounter;\n\nvar toggle = function toggle(disapear, appear) {\n  disapear.classList.remove(\"d-block\");\n  disapear.classList.add(\"d-none\");\n  appear.classList.remove(\"d-none\");\n  appear.classList.add(\"d-block\");\n};\n\nvar btnSt = function btnSt() {\n  date.setTime(0);\n  counter();\n  toggle(btnStart, btnPause);\n  myCounter = setInterval(counter, 1000);\n};\n\nvar btnPa = function btnPa() {\n  toggle(btnPause, btnResume);\n  clearInterval(myCounter);\n};\n\nvar btnRe = function btnRe() {\n  toggle(btnResume, btnPause);\n  myCounter = setInterval(counter, 1000);\n};\n\nbtnStart.addEventListener(\"click\", btnSt);\nbtnPause.addEventListener(\"click\", btnPa);\nbtnResume.addEventListener(\"click\", btnRe);\nconsole.log($);\n\n//# sourceURL=webpack://html-training/./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://html-training/./src/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/app.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;