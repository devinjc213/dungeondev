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

/***/ "./src/assets/heroes/knight/knight_idle_left.png":
/*!*******************************************************!*\
  !*** ./src/assets/heroes/knight/knight_idle_left.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"808da49a94fd04eaaecb200b4d221108.png\");\n\n//# sourceURL=webpack://dungeondev/./src/assets/heroes/knight/knight_idle_left.png?");

/***/ }),

/***/ "./src/assets/heroes/knight/knight_idle_right.png":
/*!********************************************************!*\
  !*** ./src/assets/heroes/knight/knight_idle_right.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"89e80589bac86e2a92fa2cd5a93dfdd7.png\");\n\n//# sourceURL=webpack://dungeondev/./src/assets/heroes/knight/knight_idle_right.png?");

/***/ }),

/***/ "./src/assets/heroes/knight/knight_run_left.png":
/*!******************************************************!*\
  !*** ./src/assets/heroes/knight/knight_run_left.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8d49256da0a52b083c9877aa0e0f0a1d.png\");\n\n//# sourceURL=webpack://dungeondev/./src/assets/heroes/knight/knight_run_left.png?");

/***/ }),

/***/ "./src/assets/heroes/knight/knight_run_right.png":
/*!*******************************************************!*\
  !*** ./src/assets/heroes/knight/knight_run_right.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"546cc2ad0ee27f76117f5f566ed92e0f.png\");\n\n//# sourceURL=webpack://dungeondev/./src/assets/heroes/knight/knight_run_right.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_heroes_knight_knight_idle_right_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/heroes/knight/knight_idle_right.png */ \"./src/assets/heroes/knight/knight_idle_right.png\");\n/* harmony import */ var _assets_heroes_knight_knight_idle_left_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/heroes/knight/knight_idle_left.png */ \"./src/assets/heroes/knight/knight_idle_left.png\");\n/* harmony import */ var _assets_heroes_knight_knight_run_right_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/heroes/knight/knight_run_right.png */ \"./src/assets/heroes/knight/knight_run_right.png\");\n/* harmony import */ var _assets_heroes_knight_knight_run_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/heroes/knight/knight_run_left.png */ \"./src/assets/heroes/knight/knight_run_left.png\");\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('game');\r\nconst ctx = canvas.getContext('2d');\r\n\r\nconst CANVAS_WIDTH = canvas.width = 800;\r\nconst CANVAS_HEIGHT = canvas.height = 640;\r\nconst SPRITE_WIDTH = 16;\r\nconst SPRITE_HEIGHT = 16;\r\nconst staggerFrames = 5;\r\nlet frameX = 0;\r\nlet gameFrame = 0;\r\nlet enemies = [];\r\n\r\nconst tilesetImage = new Image();\r\ntilesetImage.src = 'https://i.imgur.com/cKpp1mA.png';\r\n\r\nconst playerImage = new Image();\r\nplayerImage.src = _assets_heroes_knight_knight_idle_right_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\nconst goblinImage = new Image();\r\nconst goblinIdleAnimation = 'assets/enemies/goblin/goblin_idle_spritesheet.png';\r\nconst goblinRunningAnimation = 'assets/enemies/goblin/goblin_run_spritesheet.png';\r\ngoblinImage.src = goblinIdleAnimation;\r\n\r\nconst slimeImage = new Image();\r\nconst slimeIdleAnimation = 'assets/enemies/slime/slime_idle_spritesheet.png';\r\nconst slimeRunningAnimation = 'assets/enemies/slime/slime_run_spritesheet.png';\r\nslimeImage.src = slimeIdleAnimation;\r\n\r\nconst background = new Image();\r\nbackground.src = 'assets/maps/map1.png';\r\n\r\nconst map1 = {\"map\":[{\"0-0\":[3,2],\"1-0\":[3,2],\"2-0\":[3,2],\"3-0\":[3,2],\"4-0\":[3,2],\"5-0\":[3,2],\"6-0\":[3,2],\"7-0\":[3,2],\"8-0\":[3,2],\"9-1\":[3,2],\"10-1\":[3,2],\"11-1\":[3,2],\"12-1\":[3,2],\"13-1\":[3,2],\"14-1\":[3,2],\"15-1\":[3,2],\"16-1\":[3,2],\"17-1\":[3,2],\"18-1\":[3,2],\"18-2\":[3,2],\"19-2\":[3,2],\"19-1\":[3,2],\"20-1\":[3,2],\"21-1\":[3,2],\"22-1\":[3,2],\"23-1\":[3,2],\"23-0\":[3,2],\"24-0\":[3,2],\"22-0\":[3,2],\"21-0\":[3,2],\"20-0\":[3,2],\"19-0\":[3,2],\"18-0\":[3,2],\"17-0\":[3,2],\"16-0\":[3,2],\"15-0\":[3,2],\"14-0\":[3,2],\"13-0\":[3,2],\"12-0\":[3,2],\"11-0\":[3,2],\"10-0\":[3,2],\"9-0\":[3,2],\"17-2\":[3,2],\"16-2\":[3,2],\"15-2\":[3,2],\"14-2\":[3,2],\"13-2\":[3,2],\"12-2\":[3,2],\"11-2\":[3,2],\"10-2\":[3,2],\"9-2\":[3,2],\"8-2\":[3,2],\"7-2\":[3,2],\"6-2\":[3,2],\"5-2\":[3,2],\"4-2\":[3,2],\"3-2\":[3,2],\"3-1\":[3,2],\"2-1\":[3,2],\"4-1\":[3,2],\"5-1\":[3,2],\"6-1\":[3,2],\"7-1\":[3,2],\"8-1\":[3,2],\"1-1\":[3,2],\"0-1\":[3,2],\"0-2\":[3,2],\"1-2\":[3,2],\"1-3\":[3,2],\"2-3\":[3,2],\"3-3\":[3,2],\"2-2\":[3,2],\"0-3\":[3,2],\"1-4\":[3,2],\"2-4\":[3,2],\"3-4\":[3,2],\"4-4\":[3,2],\"4-3\":[3,2],\"5-3\":[3,2],\"6-3\":[3,2],\"7-3\":[3,2],\"8-3\":[3,2],\"9-3\":[3,2],\"10-3\":[3,2],\"11-3\":[3,2],\"12-3\":[3,2],\"24-1\":[3,2],\"24-2\":[3,2],\"23-2\":[3,2],\"23-3\":[3,2],\"22-2\":[3,2],\"21-2\":[3,2],\"20-2\":[3,2],\"19-3\":[3,2],\"18-3\":[3,2],\"17-3\":[3,2],\"16-3\":[3,2],\"15-3\":[3,2],\"14-3\":[3,2],\"13-3\":[3,2],\"13-4\":[3,2],\"12-4\":[3,2],\"11-4\":[3,2],\"10-4\":[3,2],\"9-4\":[3,2],\"8-4\":[3,2],\"7-4\":[3,2],\"6-4\":[3,2],\"5-4\":[3,2],\"0-4\":[3,2],\"14-4\":[3,2],\"15-4\":[3,2],\"16-4\":[3,2],\"17-4\":[3,2],\"18-4\":[3,2],\"19-4\":[3,2],\"20-4\":[3,2],\"21-4\":[3,2],\"21-3\":[3,2],\"22-3\":[3,2],\"20-3\":[3,2],\"24-3\":[3,2],\"24-4\":[3,2],\"23-4\":[3,2],\"22-4\":[3,2],\"21-5\":[3,2],\"22-5\":[3,2],\"22-6\":[3,2],\"23-6\":[3,2],\"23-5\":[3,2],\"24-5\":[3,2],\"24-6\":[3,2],\"23-7\":[3,2],\"21-6\":[3,2],\"20-5\":[3,2],\"19-5\":[3,2],\"20-6\":[3,2],\"19-6\":[3,2],\"22-7\":[3,2],\"24-7\":[3,2],\"21-7\":[3,2],\"20-7\":[3,2],\"18-6\":[3,2],\"17-6\":[3,2],\"17-5\":[3,2],\"16-5\":[3,2],\"16-6\":[3,2],\"18-5\":[3,2],\"19-7\":[3,2],\"20-8\":[3,2],\"21-8\":[3,2],\"22-8\":[3,2],\"23-8\":[3,2],\"24-8\":[3,2],\"24-9\":[3,2],\"24-10\":[3,2],\"24-11\":[3,2],\"24-12\":[3,2],\"23-11\":[3,2],\"23-10\":[3,2],\"23-9\":[3,2],\"22-10\":[3,2],\"22-11\":[3,2],\"21-11\":[3,2],\"22-12\":[3,2],\"23-12\":[3,2],\"21-12\":[3,2],\"20-12\":[3,2],\"19-12\":[3,2],\"18-12\":[3,2],\"17-12\":[3,2],\"16-12\":[3,2],\"15-12\":[3,2],\"14-12\":[3,2],\"13-12\":[3,2],\"12-12\":[3,2],\"11-12\":[3,2],\"10-12\":[3,2],\"9-12\":[3,2],\"8-12\":[3,2],\"7-12\":[3,2],\"6-12\":[3,2],\"5-12\":[3,2],\"4-12\":[3,2],\"3-12\":[3,2],\"2-12\":[3,2],\"1-12\":[3,2],\"0-12\":[3,2],\"0-11\":[3,2],\"0-10\":[3,2],\"0-9\":[3,2],\"-1-9\":[3,2],\"0-5\":[3,2],\"0-6\":[3,2],\"0-7\":[3,2],\"0-8\":[3,2],\"1-9\":[3,2],\"1-8\":[3,2],\"2-8\":[3,2],\"3-8\":[3,2],\"4-8\":[3,2],\"4-7\":[3,2],\"5-7\":[3,2],\"5-6\":[3,2],\"4-6\":[3,2],\"4-5\":[3,2],\"3-5\":[3,2],\"2-5\":[3,2],\"1-5\":[3,2],\"1-6\":[3,2],\"2-6\":[3,2],\"2-7\":[3,2],\"1-7\":[3,2],\"3-6\":[3,2],\"3-7\":[3,2],\"2-9\":[3,2],\"1-10\":[3,2],\"2-10\":[3,2],\"3-10\":[3,2],\"4-10\":[3,2],\"2-11\":[3,2],\"1-11\":[3,2],\"3-11\":[3,2],\"4-11\":[3,2],\"5-11\":[3,2],\"6-11\":[3,2],\"7-11\":[3,2],\"8-11\":[3,2],\"9-11\":[3,2],\"9-10\":[3,2],\"10-10\":[3,2],\"11-10\":[3,2],\"12-10\":[3,2],\"13-10\":[3,2],\"14-10\":[3,2],\"15-10\":[3,2],\"16-10\":[3,2],\"17-10\":[3,2],\"18-10\":[3,2],\"19-10\":[3,2],\"20-10\":[3,2],\"20-11\":[3,2],\"19-11\":[3,2],\"18-11\":[3,2],\"17-11\":[3,2],\"16-11\":[3,2],\"15-11\":[3,2],\"14-11\":[3,2],\"13-11\":[3,2],\"12-11\":[3,2],\"11-11\":[3,2],\"10-11\":[3,2],\"21-10\":[3,2],\"22-9\":[3,2],\"21-9\":[3,2],\"20-9\":[3,2],\"19-9\":[3,2],\"18-9\":[3,2],\"17-9\":[3,2],\"16-9\":[3,2],\"15-9\":[3,2],\"14-9\":[3,2],\"13-9\":[3,2],\"12-9\":[3,2],\"11-9\":[3,2],\"10-9\":[3,2],\"9-9\":[3,2],\"8-9\":[3,2],\"7-9\":[3,2],\"6-9\":[3,2],\"6-10\":[3,2],\"8-10\":[3,2],\"7-10\":[3,2],\"5-10\":[3,2],\"4-9\":[3,2],\"3-9\":[3,2],\"5-9\":[3,2],\"5-8\":[3,2],\"5-5\":[3,2],\"6-7\":[3,2],\"6-8\":[3,2],\"6-6\":[3,2],\"6-5\":[3,2],\"7-6\":[3,2],\"7-7\":[3,2],\"7-8\":[3,2],\"8-8\":[3,2],\"8-7\":[3,2],\"8-6\":[3,2],\"8-5\":[3,2],\"9-6\":[3,2],\"7-5\":[3,2],\"9-5\":[3,2],\"10-5\":[3,2],\"11-5\":[3,2],\"12-5\":[3,2],\"13-5\":[3,2],\"14-5\":[3,2],\"15-5\":[3,2],\"12-6\":[3,2],\"11-6\":[3,2],\"10-6\":[3,2],\"13-6\":[3,2],\"14-6\":[3,2],\"15-6\":[3,2],\"13-7\":[3,2],\"12-7\":[3,2],\"11-7\":[3,2],\"10-7\":[3,2],\"9-7\":[3,2],\"11-8\":[3,2],\"12-8\":[3,2],\"10-8\":[3,2],\"9-8\":[3,2],\"13-8\":[3,2],\"14-7\":[3,2],\"15-7\":[3,2],\"16-7\":[3,2],\"17-7\":[3,2],\"18-7\":[3,2],\"18-8\":[3,2],\"17-8\":[3,2],\"16-8\":[3,2],\"15-8\":[3,2],\"14-8\":[3,2],\"19-8\":[3,2],\"0-13\":[3,2],\"0-14\":[3,2],\"0-15\":[3,2],\"0-16\":[3,2],\"0-17\":[3,2],\"0-18\":[3,2],\"0-19\":[3,2],\"1-19\":[3,2],\"2-19\":[3,2],\"3-19\":[3,2],\"4-19\":[3,2],\"5-19\":[3,2],\"6-19\":[3,2],\"7-19\":[3,2],\"8-19\":[3,2],\"9-19\":[3,2],\"10-19\":[3,2],\"11-19\":[3,2],\"12-19\":[3,2],\"13-19\":[3,2],\"14-19\":[3,2],\"15-19\":[3,2],\"16-19\":[3,2],\"17-19\":[3,2],\"18-19\":[3,2],\"19-19\":[3,2],\"20-19\":[3,2],\"21-19\":[3,2],\"22-19\":[3,2],\"23-19\":[3,2],\"24-19\":[3,2],\"24-18\":[3,2],\"24-17\":[3,2],\"24-16\":[3,2],\"24-15\":[3,2],\"24-14\":[3,2],\"24-13\":[3,2],\"23-13\":[3,2],\"22-13\":[3,2],\"21-13\":[3,2],\"20-13\":[3,2],\"19-13\":[3,2],\"18-13\":[3,2],\"20-14\":[3,2],\"19-14\":[3,2],\"21-14\":[3,2],\"22-14\":[3,2],\"23-14\":[3,2],\"23-15\":[3,2],\"23-16\":[3,2],\"23-17\":[3,2],\"23-18\":[3,2],\"22-18\":[3,2],\"21-18\":[3,2],\"20-18\":[3,2],\"20-17\":[3,2],\"20-16\":[3,2],\"20-15\":[3,2],\"17-13\":[3,2],\"17-14\":[3,2],\"17-15\":[3,2],\"18-15\":[3,2],\"18-16\":[3,2],\"18-17\":[3,2],\"18-14\":[3,2],\"19-16\":[3,2],\"19-17\":[3,2],\"19-18\":[3,2],\"18-18\":[3,2],\"17-18\":[3,2],\"17-17\":[3,2],\"19-15\":[3,2],\"17-16\":[3,2],\"21-16\":[3,2],\"21-15\":[3,2],\"22-15\":[3,2],\"22-16\":[3,2],\"22-17\":[3,2],\"21-17\":[3,2],\"16-16\":[3,2],\"15-16\":[3,2],\"15-17\":[3,2],\"14-17\":[3,2],\"14-18\":[3,2],\"15-18\":[3,2],\"16-18\":[3,2],\"16-17\":[3,2],\"16-15\":[3,2],\"16-13\":[3,2],\"15-13\":[3,2],\"14-13\":[3,2],\"13-13\":[3,2],\"12-13\":[3,2],\"11-13\":[3,2],\"10-13\":[3,2],\"9-13\":[3,2],\"8-13\":[3,2],\"7-13\":[3,2],\"6-13\":[3,2],\"5-13\":[3,2],\"4-13\":[3,2],\"3-13\":[3,2],\"2-13\":[3,2],\"1-13\":[3,2],\"1-14\":[3,2],\"1-15\":[3,2],\"1-16\":[3,2],\"1-17\":[3,2],\"1-18\":[3,2],\"2-18\":[3,2],\"3-18\":[3,2],\"4-18\":[3,2],\"5-18\":[3,2],\"6-18\":[3,2],\"7-18\":[3,2],\"8-18\":[3,2],\"9-18\":[3,2],\"10-18\":[3,2],\"11-18\":[3,2],\"12-18\":[3,2],\"13-18\":[3,2],\"14-16\":[3,2],\"14-15\":[3,2],\"15-15\":[3,2],\"16-14\":[3,2],\"15-14\":[3,2],\"14-14\":[3,2],\"13-14\":[3,2],\"12-14\":[3,2],\"13-15\":[3,2],\"13-16\":[3,2],\"13-17\":[3,2],\"12-17\":[3,2],\"12-16\":[3,2],\"12-15\":[3,2],\"11-15\":[3,2],\"10-15\":[3,2],\"10-14\":[3,2],\"9-14\":[3,2],\"8-14\":[3,2],\"7-14\":[3,2],\"6-14\":[3,2],\"5-14\":[3,2],\"4-14\":[3,2],\"3-14\":[3,2],\"2-14\":[3,2],\"11-14\":[3,2],\"11-16\":[3,2],\"11-17\":[3,2],\"10-17\":[3,2],\"9-17\":[3,2],\"8-17\":[3,2],\"8-16\":[3,2],\"7-16\":[3,2],\"6-17\":[3,2],\"5-17\":[3,2],\"5-16\":[3,2],\"4-16\":[3,2],\"3-16\":[3,2],\"3-17\":[3,2],\"2-17\":[3,2],\"4-17\":[3,2],\"3-15\":[3,2],\"2-15\":[3,2],\"2-16\":[3,2],\"4-15\":[3,2],\"5-15\":[3,2],\"6-15\":[3,2],\"7-15\":[3,2],\"8-15\":[3,2],\"9-15\":[3,2],\"10-16\":[3,2],\"9-16\":[3,2],\"7-17\":[3,2],\"6-16\":[3,2]},{\"10-4\":[21,2],\"11-4\":[22,2],\"12-4\":[23,2],\"13-4\":[24,2]},{\"13-3\":[24,1],\"12-3\":[23,1],\"11-3\":[22,1],\"10-3\":[21,1],\"10-2\":[21,0],\"11-2\":[22,0],\"12-2\":[23,0],\"13-2\":[24,0]}],\"collision\":[{\"10-4\":\"solid\"},{\"11-4\":\"solid\"},{\"12-4\":\"solid\"},{\"13-4\":\"solid\"},{\"13-3\":\"solid\"},{\"12-3\":\"solid\"},{\"11-3\":\"solid\"},{\"10-3\":\"solid\"}]};\r\n\r\nclass InputHandler {\r\n  constructor() {\r\n    this.keys = [];\r\n    window.addEventListener('keydown',  (e) => {\r\n      if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key);\r\n    })\r\n    window.addEventListener('keyup', e => {\r\n      this.keys.splice(this.keys.indexOf(e.key), 1);\r\n    })\r\n  }\r\n}\r\n\r\nclass Player {\r\n  constructor() {\r\n    this.gameWidth = CANVAS_WIDTH;\r\n    this.gameHeight = CANVAS_HEIGHT;\r\n    this.width = 32;\r\n    this.height = 32;\r\n    this.x = 0;\r\n    this.y = 0;\r\n    this.xSpeed = 0;\r\n    this.ySpeed = 0;\r\n    this.isFacingRight = true;\r\n    this.runDirection = 'east';\r\n  }\r\n\r\n  draw (context) {\r\n    context.beginPath();\r\n    context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);\r\n    context.stroke();\r\n    context.drawImage(playerImage, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 32, 32);\r\n  }\r\n\r\n  update(input, enemies) {\r\n    //collision detection\r\n    enemies.forEach(enemy => {\r\n      const dx = enemy.x - this.x;\r\n      const dy = enemy.y - this.y;\r\n      const distance = Math.sqrt(dx * dx + dy * dy);\r\n      if (distance < enemy.width/2 + this.width/2) {\r\n        console.log('collision detected');\r\n      }\r\n    })\r\n\r\n    map1.collision.forEach((solid) => {\r\n      const coords = Object.keys(solid)[0];\r\n      const x = coords.split('-')[0] * 32;\r\n      const y = coords.split('-')[1] * 32;\r\n      const dx = x - this.x;\r\n      const dy = y - this.y;\r\n      const distance = Math.sqrt(dx * dx + dy * dy);\r\n      if (distance < 32) {\r\n        switch (this.runDirection) {\r\n          case 'east':\r\n            this.x = x - this.width;\r\n            break;\r\n          case 'west':\r\n            this.x = x + this.width;\r\n            break;\r\n          case 'north':\r\n            this.y = y + this.width;\r\n            break;\r\n          case 'south':\r\n            this.y = y - this.width;\r\n            break;\r\n        }\r\n      }\r\n    })\r\n\r\n    this.x += this.xSpeed;\r\n    this.y += this.ySpeed;\r\n\r\n    if (input.keys.indexOf('ArrowRight') > -1) {\r\n      this.xSpeed = 3;\r\n      this.runDirection = 'east';\r\n    } else if (input.keys.indexOf('ArrowLeft') > -1) {\r\n      this.xSpeed = -3;\r\n      this.runDirection = 'west';\r\n    }\r\n    else this.xSpeed = 0;\r\n\r\n    if (input.keys.indexOf('ArrowDown') > -1) {\r\n      this.ySpeed = 3;\r\n      this.runDirection = 'south';\r\n    }\r\n    else if (input.keys.indexOf('ArrowUp') > -1) {\r\n      this.ySpeed = -3;\r\n      this.runDirection = 'north';\r\n    }\r\n    else this.ySpeed = 0;\r\n\r\n    //switch between animations\r\n    if (this.xSpeed > 0) {\r\n      playerImage.src = _assets_heroes_knight_knight_run_right_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n      this.isFacingRight = true;\r\n    }\r\n    else if (this.xSpeed < 0) {\r\n      playerImage.src = _assets_heroes_knight_knight_run_left_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n      this.isFacingRight = false;\r\n    }\r\n    else if (this.xSpeed === 0) playerImage.src = this.isFacingRight ? _assets_heroes_knight_knight_idle_right_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _assets_heroes_knight_knight_idle_left_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n    //ensure still animating run on y coord movements\r\n    if (this.ySpeed !== 0 && this.isFacingRight) playerImage.src = _assets_heroes_knight_knight_run_right_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    else if (this.ySpeed !== 0 && !this.isFacingRight) playerImage.src = _assets_heroes_knight_knight_run_left_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n\r\n    //contain player in boundary\r\n    if (this.x < 0) this.x = 0;\r\n    else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;\r\n\r\n    if (this.y < 0) this.y = 0;\r\n    else if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height\r\n  }\r\n}\r\n\r\nclass Enemy {\r\n  constructor(image, x, y) {\r\n    this.gameWidth = CANVAS_WIDTH;\r\n    this.gameHeight = CANVAS_HEIGHT;\r\n    this.image = image;\r\n    this.width = 32;\r\n    this.height = 32;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.isFacingRight = true;\r\n  }\r\n\r\n  draw(context) {\r\n    context.beginPath();\r\n    context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);\r\n    context.stroke();\r\n    context.drawImage(this.image, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 32, 32);\r\n  }\r\n}\r\n\r\nfunction handleEnemies() {\r\n  enemies.forEach(enemy => {\r\n    enemy.draw(ctx);\r\n  })\r\n}\r\n\r\nfunction handleDrawMap() {\r\n  let size_of_crop = 32;\r\n\r\n  map1.map.forEach((layer) => {\r\n    Object.keys(layer).forEach((key) => {\r\n      //Determine x/y position of this placement from key (\"3-4\" -> x=3, y=4)\r\n      const positionX = Number(key.split('-')[0]);\r\n      const positionY = Number(key.split('-')[1]);\r\n      const [tilesheetX, tilesheetY] = layer[key];\r\n\r\n      ctx.drawImage(\r\n        tilesetImage,\r\n        tilesheetX * 32,\r\n        tilesheetY * 32,\r\n        size_of_crop,\r\n        size_of_crop,\r\n        positionX * 32,\r\n        positionY * 32,\r\n        size_of_crop,\r\n        size_of_crop\r\n      );\r\n    });\r\n  });\r\n}\r\n\r\nfunction animate() {\r\n  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\r\n  //ctx.drawImage(background, 0, 0);\r\n  handleDrawMap();\r\n  handleEnemies();\r\n  player.draw(ctx);\r\n  player.update(input, enemies);\r\n\r\n  if (gameFrame % staggerFrames === 0) {\r\n    if (frameX < 5) frameX++;\r\n    else frameX = 0;\r\n  }\r\n\r\n  gameFrame++;\r\n  requestAnimationFrame(animate);\r\n}\r\n\r\nconst input = new InputHandler();\r\nconst player = new Player();\r\nenemies.push(new Enemy(goblinImage, 420, 420));\r\nenemies.push(new Enemy(slimeImage, 69, 420));\r\n\r\nanimate();\n\n//# sourceURL=webpack://dungeondev/./src/index.js?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/public/";
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