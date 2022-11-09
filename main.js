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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nconst mainContent = document.getElementById(\"content\")\r\n\r\nfunction createFooter(){\r\n    const footer = document.createElement(\"footer\")\r\n    const gitHubLink = document.createElement(\"a\")\r\n    const gitHubIcon = document.createElement('img')\r\n\r\n    gitHubLink.target = \"_blank\"\r\n    gitHubLink.href = \"https://github.com/nateachino\"\r\n    gitHubLink.innerHTML = \"github.com/nateachino\"\r\n\r\n    gitHubIcon.src = \"/src/GitHub-Mark-32px.png\"\r\n\r\n\r\n    footer.append(gitHubLink, gitHubIcon)\r\n    mainContent.append(footer)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeContent\": () => (/* binding */ createHomeContent)\n/* harmony export */ });\nconst mainContent = document.getElementById(\"content\")\r\n\r\nfunction createHomeContent(){\r\n    const mainDiv = document.createElement(\"div\")\r\n    const imgWrapper = document.createElement(\"div\")\r\n    const leftText = document.createElement(\"div\")\r\n    const pizzaImage = document.createElement(\"img\")\r\n    const rightText = document.createElement(\"div\")\r\n\r\n\r\n    mainDiv.classList.add(\"main\")\r\n    imgWrapper.classList.add(\"img-wrapper\")\r\n    leftText.classList.add(\"left-text\")\r\n    rightText.classList.add(\"right-text\")\r\n\r\n\r\n    leftText.innerHTML = \"The Best Pizza\"\r\n    rightText.innerHTML = \"In New York!\"\r\n    pizzaImage.src = \"../src/pizza-pic.jpeg\"\r\n\r\n\r\n    imgWrapper.append(leftText,pizzaImage,rightText)\r\n    mainDiv.appendChild(imgWrapper)\r\n    mainContent.appendChild(mainDiv)\r\n\r\n    console.log(\"done\")\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\n\r\nconst mainContent = document.getElementById(\"content\")\r\nvar page = 12\r\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)()\r\n;(0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)()\r\n\r\nconst home = document.getElementById(\"home-button\")\r\nconst menu = document.getElementById(\"menu-button\")\r\nconst about = document.getElementById(\"about-button\")\r\n\r\n\r\nhome.addEventListener(\"click\", ()=>{\r\n    console.log(\"123\")\r\n    if(page != 1){\r\n        removeAllChildNodes(mainContent)\r\n        ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)()\r\n        ;(0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)()\r\n    }\r\n})\r\n\r\nfunction removeAllChildNodes(nodeList){\r\n    while (nodeList.firstChild){\r\n        nodeList.removeChild(nodeList.firstChild);\r\n    }\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;