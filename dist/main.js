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

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const container = document.createElement(\"div\");\n\n  // Inspiration\n  // History\n  // Today\n  const sectionOne = document.createElement(\"section\");\n\n  container.appendChild(sectionOne);\n\n  return container;\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/aboutTab.js?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const container = document.createElement(\"div\");\n  // Intro\n  const sectionOne = document.createElement(\"section\");\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Jack's Diner\";\n\n  const subtitle = document.createElement(\"h3\");\n  subtitle.textContent =\n    \"A restaurant for breakfast, lunch, dinner, and anything in-between!\";\n\n  const intro = document.createElement(\"p\");\n  intro.textContent =\n    \"Indulge in a timeless dining experience at Jack's Diner, \\\n  a beloved establishment steeped in history and tradition. \\\n  Originally relocated from its family home in the 1940s, \\\n  this iconic diner has since become a cherished landmark, \\\n  serving up hearty comfort food and warm hospitality for generations. \\\n  With a menu that boasts classic American diner favorites, \\\n  Jack's Diner is the perfect place to savor a satisfying meal in a cozy, nostalgic atmosphere. \\\n  Step back in time and enjoy the simple pleasures of a bygone era at Jack's Diner.\";\n\n  sectionOne.appendChild(title);\n  sectionOne.appendChild(subtitle);\n  sectionOne.appendChild(intro);\n\n  // Hours\n  const sectionTwo = document.createElement(\"section\");\n\n  const hoursHeading = document.createElement(\"h2\");\n  hoursHeading.textContent = \"Hours\";\n\n  const hoursContent = [];\n  const hoursString =\n    \"Monday: 10am - 10pm,Tuesday: Closed,Wednesday: 9am-10pm,Thursday: 9am-10pm,Friday: 9am-11pm,Saturday: 9am-11pm,Sunday: 10am-10pm\";\n  hoursString.split(\",\").forEach((str) => {\n    const day = document.createElement(\"p\");\n    day.textContent = str;\n    hoursContent.push(day);\n  });\n\n  sectionTwo.appendChild(hoursHeading);\n  hoursContent.forEach((day) => sectionTwo.appendChild(day));\n\n  // Location\n  const sectionThree = document.createElement(\"section\");\n\n  const locationHeading = document.createElement(\"h2\");\n  locationHeading.textContent = \"Location\";\n\n  const locationContent = document.createElement(\"p\");\n  locationContent.textContent =\n    \"Come visit us at 888 Park Place, Grand Forks, ND 58203!\";\n\n  sectionThree.appendChild(locationHeading);\n  sectionThree.appendChild(locationContent);\n\n  // Image\n  const image = document.createElement(\"img\");\n  image.setAttribute(\"src\", \"./decor.webp\");\n  image.setAttribute(\"alt\", \"Inside of the restaurant\");\n  image.setAttribute(\"width\", \"500\");\n  image.setAttribute(\"height\", \"500\");\n\n  // Add to container\n\n  container.appendChild(sectionOne);\n  container.appendChild(image);\n  container.appendChild(sectionTwo);\n  container.appendChild(sectionThree);\n\n  return container;\n});\n\n// Intro generated with perplexity.ai\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n/* harmony import */ var _aboutTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutTab */ \"./src/aboutTab.js\");\n\n\n\n\nconst homeEl = (0,_homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst menuEl = (0,_menuTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst aboutEl = (0,_aboutTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst buttons = document.querySelectorAll(\"button\");\nconst main = document.querySelector(\"main\");\n\nbuttons[0].addEventListener(\"click\", (e) => {\n  main.innerHTML = \"\";\n  main.appendChild(homeEl);\n});\n\nbuttons[1].addEventListener(\"click\", (e) => {\n  main.innerHTML = \"\";\n  main.appendChild(menuEl);\n});\n\nbuttons[2].addEventListener(\"click\", (e) => {\n  main.innerHTML = \"\";\n  main.appendChild(aboutEl);\n});\n\nmain.appendChild(homeEl);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const container = document.createElement(\"div\");\n\n  const menuItems = {\n    appetizers: [\n      {\n        name: \"Artichoke & Pepper Sauté\",\n        description:\n          \"Boiled artichokes with pepper, oregano, and Italian spices.\",\n        price: \"$10\",\n      },\n      {\n        name: \"Mushroom Sizzler\",\n        description:\n          \"Sautéed mushrooms with a mixture of King Crab and garlic.\",\n        price: \"$12\",\n      },\n      {\n        name: \"Escargot & Garlic Bread\",\n        description:\n          \"Escargot in butter, garlic, and parmesan cheese, served with garlic bread.\",\n        price: \"$15\",\n      },\n    ],\n    mains: [\n      {\n        name: \"Grilled Chicken New Orleans\",\n        description:\n          \"Grilled chicken breast with mixed greens, Monterey Jack, cheddar, bacon, tomatoes, and almonds.\",\n        price: \"$20\",\n      },\n      {\n        name: \"Cajun Shrimp & Chicken Pasta\",\n        description:\n          \"Cajun grilled shrimp or chicken with andouille sausage, roasted red peppers, onions, and spicy Cajun cream sauce over fusilli pasta.\",\n        price: \"$24\",\n      },\n      {\n        name: \"Steak & Mushroom Skillet\",\n        description:\n          \"A hearty skillet with tender steak, sautéed mushrooms, and a rich red wine sauce.\",\n        price: \"$29\",\n      },\n    ],\n    beverages: [\n      {\n        name: \"Jack's Lemonade\",\n        description: \"A refreshing blend of lemon juice, sugar, and ice.\",\n        price: \"$4\",\n      },\n      {\n        name: \"Strawberry Basil Lemonade\",\n        description:\n          \"A twist on the classic with fresh strawberries and basil.\",\n        price: \"$5\",\n      },\n      {\n        name: \"Cherry Limeade\",\n        description: \"A sweet and tangy combination of cherry and lime juices.\",\n        price: \"$5\",\n      },\n    ],\n  };\n\n  function createMenuItem({ name, description, price }) {\n    const card = document.createElement(\"div\");\n    card.className = \"menu-item\";\n\n    const itemName = document.createElement(\"h3\");\n    itemName.textContent = name;\n    itemName.className = \"menu-item-name\";\n\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = description;\n    itemDescription.className = \"menu-item-description\";\n\n    const itemPrice = document.createElement(\"p\");\n    itemPrice.textContent = price;\n    itemPrice.className = \"menu-item-price\";\n\n    card.appendChild(itemName);\n    card.appendChild(itemDescription);\n    card.appendChild(itemPrice);\n    return card;\n  }\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Menu\";\n\n  // Appetizers\n  const sectionOne = document.createElement(\"section\");\n  const sectionOneTitle = document.createElement(\"h2\");\n  sectionOneTitle.className = \"menu-heading\";\n  sectionOneTitle.textContent = \"Appetizers\";\n  sectionOne.appendChild(sectionOneTitle);\n  menuItems.appetizers.forEach((item) =>\n    sectionOne.appendChild(createMenuItem(item))\n  );\n\n  // Mains\n  const sectionTwo = document.createElement(\"section\");\n  const sectionTwoTitle = document.createElement(\"h2\");\n  sectionTwoTitle.className = \"menu-heading\";\n  sectionTwoTitle.textContent = \"Mains\";\n  sectionTwo.appendChild(sectionTwoTitle);\n  menuItems.appetizers.forEach((item) =>\n    sectionTwo.appendChild(createMenuItem(item))\n  );\n\n  // Beverages\n  const sectionThree = document.createElement(\"section\");\n  const sectionThreeTitle = document.createElement(\"h2\");\n  sectionThreeTitle.className = \"menu-heading\";\n  sectionThreeTitle.textContent = \"Beverages\";\n  sectionThree.appendChild(sectionThreeTitle);\n  menuItems.appetizers.forEach((item) =>\n    sectionThree.appendChild(createMenuItem(item))\n  );\n\n  container.appendChild(title);\n  container.appendChild(sectionOne);\n  container.appendChild(sectionTwo);\n  container.appendChild(sectionThree);\n\n  return container;\n});\n\n// Menu generated with the help of perplexity.ai\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menuTab.js?");

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