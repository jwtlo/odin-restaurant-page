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

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const container = document.createElement(\"div\");\n  // Intro\n  const sectionOne = document.createElement(\"section\");\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Jack's Diner\";\n\n  const subtitle = document.createElement(\"h3\");\n  subtitle.textContent =\n    \"A restaurant for breakfast, lunch, dinner, and anything in-between!\";\n\n  const intro = document.createElement(\"p\");\n  intro.textContent =\n    \"Indulge in a timeless dining experience at Jack's Diner, \\\n  a beloved establishment steeped in history and tradition. \\\n  Originally relocated from its family home in the 1940s, \\\n  this iconic diner has since become a cherished landmark, \\\n  serving up hearty comfort food and warm hospitality for generations. \\\n  With a menu that boasts classic American diner favorites, \\\n  Jack's Diner is the perfect place to savor a satisfying meal in a cozy, nostalgic atmosphere. \\\n  Step back in time and enjoy the simple pleasures of a bygone era at Jack's Diner.\";\n\n  sectionOne.appendChild(title);\n  sectionOne.appendChild(subtitle);\n  sectionOne.appendChild(intro);\n\n  // Hours\n  const sectionTwo = document.createElement(\"section\");\n\n  const hoursHeading = document.createElement(\"h2\");\n  hoursHeading.textContent = \"Hours\";\n\n  const hoursContent = [];\n  const hoursString =\n    \"Monday: 10am - 10pm,Tuesday: Closed,Wednesday: 9am-10pm,Thursday: 9am-10pm,Friday: 9am-11pm,Saturday: 9am-11pm,Sunday: 10am-10pm\";\n  hoursString.split(\",\").forEach((str) => {\n    const day = document.createElement(\"p\");\n    day.textContent = str;\n    hoursContent.push(day);\n  });\n\n  sectionTwo.appendChild(hoursHeading);\n  hoursContent.forEach((day) => sectionTwo.appendChild(day));\n\n  // Location\n  const sectionThree = document.createElement(\"section\");\n\n  const locationHeading = document.createElement(\"h2\");\n  locationHeading.textContent = \"Location\";\n\n  const locationContent = document.createElement(\"p\");\n  locationContent.textContent =\n    \"Come visit us at 888 Park Place, Grand Forks, ND 58203!\";\n\n  sectionThree.appendChild(locationHeading);\n  sectionThree.appendChild(locationContent);\n\n  // Image\n  const image = document.createElement(\"img\");\n  image.setAttribute(\"src\", \"./decor.webp\");\n  image.setAttribute(\"alt\", \"Inside of the restaurant\");\n  image.setAttribute(\"width\", \"500\");\n  image.setAttribute(\"height\", \"500\");\n\n  // Add to container\n\n  container.appendChild(sectionOne);\n  container.appendChild(image);\n  container.appendChild(sectionTwo);\n  container.appendChild(sectionThree);\n\n  return container;\n});\n\n// Intro generated with perplexity.ai\n\n// Citations:\n// [1] https://startribune.com/full_site_redirect/?rurl=http%3A%2F%2F%D0%B4%D0%B0%D1%83%D1%86%D1%80.%D1%80%D1%84%2Focmdq13fe43\n// [2] https://diner349.rssing.com/chan-5140164/all_p4.html\n// [3] https://breakfastwithnick.com/2017/12/29/2017-year-breakfast/\n// [4] https://yelp.com/search?cflt=restaurants&find_loc=Hookstown%2C+PA+15050\n// [5] https://yelp.com/search?cflt=diners&find_loc=Wakes+Colne+CO6+2DY\"\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n\n// import menuTab from \"./menuTab\";\n// import aboutTab from \"./aboutTab\";\n\nconst buttons = document.querySelectorAll(\"button\");\nconst main = document.querySelector(\"main\");\n\nmain.appendChild((0,_homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

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