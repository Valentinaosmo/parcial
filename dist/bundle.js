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

/***/ "./src/components/Lista/Lista.ts":
/*!***************************************!*\
  !*** ./src/components/Lista/Lista.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nclass lista extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = \"\";\n        _store__WEBPACK_IMPORTED_MODULE_0__.appState.products.forEach((product) => {\n            var _a;\n            const pcontenedor = this.ownerDocument.createElement(\"article\");\n            const ptitulo = this.ownerDocument.createElement(\"h3\");\n            ptitulo.textContent = product.nombre;\n            const pinstrucciones = this.ownerDocument.createElement(\"h4\");\n            pinstrucciones.textContent = product.instrucciones;\n            const pingredientes = this.ownerDocument.createElement(\"h4\");\n            pingredientes.textContent = product.ingredientes;\n            pcontenedor === null || pcontenedor === void 0 ? void 0 : pcontenedor.appendChild(ptitulo);\n            pcontenedor === null || pcontenedor === void 0 ? void 0 : pcontenedor.appendChild(pingredientes);\n            pcontenedor === null || pcontenedor === void 0 ? void 0 : pcontenedor.appendChild(pinstrucciones);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(pcontenedor);\n        });\n        const css = this.ownerDocument.createElement(\"style\");\n        css.innerHTML = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n    }\n}\ncustomElements.define(\"app-lista\", lista);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lista);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Lista/Lista.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Formulario\": () => (/* reexport safe */ _form_formulario__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"lista\": () => (/* reexport safe */ _Lista_Lista__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _form_formulario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/formulario */ \"./src/components/form/formulario.ts\");\n/* harmony import */ var _Lista_Lista__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lista/Lista */ \"./src/components/Lista/Lista.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/form/formulario.ts":
/*!*******************************************!*\
  !*** ./src/components/form/formulario.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst userInputs = {\n    nombre: \"\",\n    imagen: \"\",\n    ingredientes: \"\",\n    instrucciones: \"\",\n};\nclass Formulario extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d, _e, _f, _g, _h;\n        const lnombre = this.ownerDocument.createElement('label');\n        lnombre.textContent = \"Nombre\";\n        const linstrucciones = this.ownerDocument.createElement('label');\n        linstrucciones.textContent = \"instrucciones\";\n        const lingredientes = this.ownerDocument.createElement('label');\n        lingredientes.textContent = \"ingredientes\";\n        const nombre = this.ownerDocument.createElement('input');\n        nombre.addEventListener(\"change\", (e) => {\n            userInputs.nombre = e.target.value;\n        });\n        const instrucciones = this.ownerDocument.createElement('input');\n        instrucciones.type = \"string\";\n        instrucciones.addEventListener(\"change\", (e) => {\n            userInputs.instrucciones = e.target.value;\n        });\n        const ingredientes = this.ownerDocument.createElement('input');\n        ingredientes.addEventListener(\"change\", (e) => {\n            userInputs.ingredientes = e.target.value;\n        });\n        const boton = this.ownerDocument.createElement('button');\n        boton.textContent = \"Guardar\";\n        boton.addEventListener(\"click\", () => __awaiter(this, void 0, void 0, function* () {\n            console.log(userInputs);\n            (0,_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)(yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.saveProduct)(userInputs));\n        }));\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(lnombre);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(nombre);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(lingredientes);\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(ingredientes);\n        (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(linstrucciones);\n        (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.appendChild(instrucciones);\n        (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.appendChild(boton);\n        const css = this.ownerDocument.createElement(\"style\");\n        css.innerHTML = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n        (_h = this.shadowRoot) === null || _h === void 0 ? void 0 : _h.appendChild(css);\n    }\n}\ncustomElements.define('app-formulario', Formulario);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Formulario);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/form/formulario.ts?");

/***/ }),

/***/ "./src/firebaseConfig.ts":
/*!*******************************!*\
  !*** ./src/firebaseConfig.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/firebaseConfig.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ \"./src/store/actions.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)(yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.getProducts)());\n            this.render();\n        });\n    }\n    render() {\n        var _a, _b;\n        const Formulario = this.ownerDocument.createElement(\"app-formulario\");\n        const lista = this.ownerDocument.createElement(\"app-lista\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Formulario);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(lista);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts),\n/* harmony export */   \"saveProduct\": () => (/* binding */ saveProduct)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase */ \"./src/utils/firebase.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst saveProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {\n    yield _utils_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveProductInDB(product);\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_0__.SomeActions.SAVE_PRODUCTS,\n        payload: product,\n    };\n});\nconst getProducts = () => __awaiter(void 0, void 0, void 0, function* () {\n    const products = yield _utils_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProductsFromDB();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_0__.SomeActions.GET_PRODUCTS,\n        payload: products,\n    };\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\n\nconst emptyState = {\n    products: [],\n};\nlet appState = _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n    key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({ key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)(action, clone);\n    appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (actions, state) => {\n    const { action, payload } = actions;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.SomeActions.SAVE_PRODUCTS:\n            state.products = [...state.products, payload];\n            return state;\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.SomeActions.GET_PRODUCTS:\n            state.products = payload;\n            return state;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SomeActions\": () => (/* binding */ SomeActions)\n/* harmony export */ });\nvar SomeActions;\n(function (SomeActions) {\n    SomeActions[\"SAVE_PRODUCTS\"] = \"SAVE_PRODUCTS\";\n    SomeActions[\"GET_PRODUCTS\"] = \"GET_PRODUCTS\";\n})(SomeActions || (SomeActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/firebase.ts":
/*!*******************************!*\
  !*** ./src/utils/firebase.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebaseConfig */ \"./src/firebaseConfig.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst app = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app);\nconst saveProductInDB = (product) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"products\"), product);\n    }\n    catch (e) {\n        console.error(\"Error adding document: \", e);\n    }\n});\nconst getProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {\n    const resp = [];\n    const querySnapshot = yield Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"products\"));\n    querySnapshot.forEach((doc) => {\n        console.log(`${doc.id} => ${doc.data()}`);\n        resp.push(Object.assign({}, doc.data()));\n    });\n    return resp;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ saveProductInDB, getProductsFromDB });\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/firebase.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/storage.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;