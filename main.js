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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n// home.js\r\n\r\n\r\nfunction Home() {\r\n    const mainContent = document.createElement('main');\r\n    mainContent.classList.add('home-container');\r\n\r\n    const homeLogo = document.createElement('div');\r\n    homeLogo.classList.add('home-logo');\r\n    const logoLink = document.createElement('a');\r\n    homeLogo.appendChild(logoLink);\r\n\r\n    const nameLabel = document.createElement('label');\r\n    nameLabel.setAttribute('for', 'name');\r\n    nameLabel.classList.add('home-Text');\r\n    nameLabel.textContent = 'Your Name, Please:';\r\n\r\n    const nameInput = document.createElement('input');\r\n    nameInput.setAttribute('type', 'text');\r\n    nameInput.setAttribute('id', 'name');\r\n    nameInput.classList.add('home-input');\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.classList.add('home-btn');\r\n    submitButton.textContent = 'Submit';\r\n\r\n    // Append elements to main content\r\n    mainContent.appendChild(homeLogo);\r\n    mainContent.appendChild(nameLabel);\r\n    mainContent.appendChild(nameInput);\r\n    mainContent.appendChild(submitButton);\r\n\r\n    // Append main content to the body\r\n    document.body.appendChild(mainContent);\r\n\r\n    // Create custom alert box and add it to the body\r\n    const customAlertHTML = `\r\n        <div id=\"custom-alert\" class=\"custom-alert\">\r\n            <div class=\"custom-alert-content\">\r\n                <p>Please enter your name.</p>\r\n                <button id=\"close-alert\">OK</button>\r\n            </div>\r\n        </div>\r\n    `;\r\n    document.body.insertAdjacentHTML('beforeend', customAlertHTML);\r\n\r\n    const customAlert = document.querySelector('#custom-alert');\r\n    const closeAlertButton = document.querySelector('#close-alert');\r\n\r\n    submitButton.addEventListener('click', () => {\r\n        const name = nameInput.value.trim();\r\n        if (name) {\r\n            localStorage.setItem('userName', name);\r\n        } else {\r\n            customAlert.style.display = 'block';\r\n        }\r\n    });\r\n\r\n    closeAlertButton.addEventListener('click', () => {\r\n        customAlert.style.display = 'none';\r\n    });\r\n\r\n\r\n    return mainContent;\r\n}\n\n//# sourceURL=webpack://todo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n// index.js\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n\r\n\tconst home = (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\tdocument.querySelector(home);\r\n\r\n\r\n\r\n\r\n\r\n});\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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