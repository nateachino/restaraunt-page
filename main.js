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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nconst mainContent = document.getElementById(\"content\");\r\n\r\nfunction createContact() {\r\n  mainContent.style.height = \"100vh\";\r\n  const wrapContent = document.createElement(\"div\");\r\n\r\n  const contantDiv = document.createElement(\"div\");\r\n  const contentTitle = document.createElement(\"div\");\r\n  const contentWrapper = document.createElement(\"div\");\r\n  const contactInfo = document.createElement(\"div\");\r\n\r\n  const addressWrapper = document.createElement(\"div\");\r\n  const addressTitle = document.createElement(\"div\");\r\n  const address = document.createElement(\"div\");\r\n\r\n  const numberWrapper = document.createElement(\"div\");\r\n  const numberTitle = document.createElement(\"div\");\r\n  const number = document.createElement(\"div\");\r\n\r\n  const img = document.createElement(\"img\");\r\n\r\n  mainContent.appendChild(wrapContent);\r\n  wrapContent.appendChild(contantDiv);\r\n  contantDiv.appendChild(contentTitle);\r\n  contantDiv.appendChild(contentWrapper);\r\n\r\n  contentWrapper.appendChild(contactInfo);\r\n  contactInfo.appendChild(addressWrapper);\r\n\r\n  addressWrapper.appendChild(addressTitle);\r\n  addressWrapper.appendChild(address);\r\n\r\n  contactInfo.appendChild(numberWrapper);\r\n\r\n  numberWrapper.appendChild(numberTitle);\r\n  numberWrapper.appendChild(number);\r\n\r\n  contentWrapper.appendChild(img);\r\n\r\n  wrapContent.classList.add(\"wrap-contact\");\r\n\r\n  contantDiv.classList.add(\"contact\");\r\n  contentTitle.classList.add(\"contact-title\");\r\n\r\n  contentWrapper.classList.add(\"content-wrapper\");\r\n  contactInfo.classList.add(\"contact-info\");\r\n\r\n  addressWrapper.classList.add(\"address-wrapper\");\r\n  addressTitle.classList.add(\"address-title\");\r\n  address.classList.add(\"address\");\r\n\r\n  numberWrapper.classList.add(\"number-wrapper\");\r\n  numberTitle.classList.add(\"number-title\");\r\n  number.classList.add(\"number\");\r\n\r\n  contentTitle.innerHTML = \"Our Info!\";\r\n\r\n  addressTitle.innerHTML = \"Address:\";\r\n  address.innerHTML = \"308 Negra Arroyo Lane, Albuquerque, New York 87104\";\r\n\r\n  numberTitle.innerHTML = \"Phone Number:\";\r\n  number.innerHTML = \"505-503-4455\";\r\n\r\n  img.src = \"/src/breaking-bad-house.jpg\";\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nconst mainContent = document.getElementById(\"content\");\r\nconst body = document.body;\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  const gitHubLink = document.createElement(\"a\");\r\n  const gitHubIcon = document.createElement(\"img\");\r\n\r\n  gitHubLink.target = \"_blank\";\r\n  gitHubLink.href = \"https://github.com/nateachino\";\r\n  gitHubLink.innerHTML = \"github.com/nateachino\";\r\n\r\n  gitHubIcon.src = \"/src/GitHub-Mark-32px.png\";\r\n\r\n  footer.append(gitHubLink, gitHubIcon);\r\n  body.append(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeContent\": () => (/* binding */ createHomeContent)\n/* harmony export */ });\nconst mainContent = document.getElementById(\"content\");\r\n\r\nfunction createHomeContent() {\r\n  console.log(\"home\");\r\n  mainContent.style.height = \"150vh\";\r\n  const mainDiv = document.createElement(\"div\");\r\n  const imgWrapper = document.createElement(\"div\");\r\n  const leftText = document.createElement(\"div\");\r\n  const pizzaImage = document.createElement(\"img\");\r\n  const rightText = document.createElement(\"div\");\r\n\r\n  mainDiv.classList.add(\"main\");\r\n  imgWrapper.classList.add(\"img-wrapper\");\r\n  leftText.classList.add(\"left-text\");\r\n  rightText.classList.add(\"right-text\");\r\n\r\n  leftText.innerHTML = \"The Best Food\";\r\n  rightText.innerHTML = \"In New York!\";\r\n  pizzaImage.src = \"../src/restlogo.png\";\r\n\r\n  imgWrapper.append(leftText, pizzaImage, rightText);\r\n  mainDiv.appendChild(imgWrapper);\r\n  mainContent.appendChild(mainDiv);\r\n\r\n  mainContent.style.backgroundImage = \"url('../src/food.gif')\";\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst mainContent = document.getElementById(\"content\");\r\nvar page = 1;\r\nremoveAllChildNodes(mainContent);\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)();\r\n(0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\r\n\r\nconst home = document.getElementById(\"home-button\");\r\nconst menu = document.getElementById(\"menu-button\");\r\nconst contact = document.getElementById(\"contact-button\");\r\n\r\nhome.addEventListener(\"click\", () => {\r\n  if (page != 1) {\r\n    removeAllChildNodes(mainContent);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)();\r\n    page = 1;\r\n  }\r\n});\r\n\r\nmenu.addEventListener(\"click\", () => {\r\n  if (page != 2) {\r\n    removeAllChildNodes(mainContent);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();\r\n    page = 2;\r\n  }\r\n});\r\n\r\ncontact.addEventListener(\"click\", () => {\r\n  if (page != 3) {\r\n    removeAllChildNodes(mainContent);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContact)();\r\n    page = 3;\r\n  }\r\n});\r\n\r\nfunction removeAllChildNodes(nodeList) {\r\n  while (nodeList.firstChild) {\r\n    nodeList.removeChild(nodeList.firstChild);\r\n    mainContent.style.backgroundImage = \"\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nconst mainContent = document.getElementById(\"content\");\r\n\r\nfunction createMenu() {\r\n  mainContent.style.height = \"150vh\";\r\n  const menuWrapper = document.createElement(\"div\");\r\n  const menuHolder = document.createElement(\"div\");\r\n\r\n  const friesItem = document.createElement(\"div\");\r\n  const friesTitle = document.createElement(\"div\");\r\n  const friesInfo = document.createElement(\"div\");\r\n\r\n  const chickenItem = document.createElement(\"div\");\r\n  const chickenTitle = document.createElement(\"div\");\r\n  const chickenInfo = document.createElement(\"div\");\r\n\r\n  const burgerItem = document.createElement(\"div\");\r\n  const burgerTitle = document.createElement(\"div\");\r\n  const burgerInfo = document.createElement(\"div\");\r\n\r\n  const riceItem = document.createElement(\"div\");\r\n  const riceTitle = document.createElement(\"div\");\r\n  const riceInfo = document.createElement(\"div\");\r\n\r\n  mainContent.appendChild(menuWrapper);\r\n\r\n  menuWrapper.appendChild(menuHolder);\r\n  menuHolder.append(friesItem, chickenItem, burgerItem, riceItem);\r\n\r\n  friesItem.append(friesTitle, friesInfo);\r\n  chickenItem.append(chickenTitle, chickenInfo);\r\n  burgerItem.append(burgerTitle, burgerInfo);\r\n  riceItem.append(riceTitle, riceInfo);\r\n\r\n  menuWrapper.classList.add(\"menu-wrapper\");\r\n  menuHolder.classList.add(\"menu-holder\");\r\n\r\n  friesItem.classList.add(\"menu-item\");\r\n  chickenItem.classList.add(\"menu-item\");\r\n  burgerItem.classList.add(\"menu-item\");\r\n  riceItem.classList.add(\"menu-item\");\r\n\r\n  friesTitle.classList.add(\"item-title\");\r\n  chickenTitle.classList.add(\"item-title\");\r\n  burgerTitle.classList.add(\"item-title\");\r\n  riceTitle.classList.add(\"item-title\");\r\n\r\n  friesInfo.classList.add(\"item-info\");\r\n  chickenInfo.classList.add(\"item-info\");\r\n  burgerInfo.classList.add(\"item-info\");\r\n  riceInfo.classList.add(\"item-info\");\r\n\r\n  friesTitle.innerHTML = \"Fries\";\r\n  chickenTitle.innerHTML = \"Chicken\";\r\n  burgerTitle.innerHTML = \"Burger\";\r\n  riceTitle.innerHTML = \"Rice\";\r\n\r\n  friesInfo.innerHTML =\r\n    \"French fries, chips, finger chips, french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium and France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer.\";\r\n\r\n  chickenInfo.innerHTML =\r\n    \"The chicken is a domesticated junglefowl species, with attributes of wild species such as the grey and the Ceylon junglefowl that are originally from Southeastern Asia.\";\r\n\r\n  burgerInfo.innerHTML =\r\n    \"A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.\";\r\n\r\n  riceInfo.innerHTML =\r\n    \"Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima. The name wild rice is usually used for species of the genera Zizania and Porteresia, both wild and domesticated, although the term may also be used for primitive or uncultivated varieties of Oryza.\";\r\n\r\n  const menuItem = document.querySelectorAll(\".menu-item\");\r\n\r\n  menuItem.forEach((element) => {\r\n    const itemInfo = element.querySelector(\".item-info\");\r\n    element.addEventListener(\"mouseover\", () => {\r\n      itemInfo.style.transform = \"translateY(0)\";\r\n    });\r\n\r\n    element.addEventListener(\"mouseout\", () => {\r\n      itemInfo.style.transform = \"translateY(500px)\";\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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