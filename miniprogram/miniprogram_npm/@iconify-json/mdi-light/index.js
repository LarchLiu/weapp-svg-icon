module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1650683686609, function(require, module, exports) {
const icons = require('./icons.json');
const info = require('./info.json');
const metadata = {};
const chars = {};

exports.icons = icons;
exports.info = info;
exports.metadata = metadata;
exports.chars = chars;

}, function(modId) {var map = {"./icons.json":1650683686610,"./info.json":1650683686611}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1650683686610, function(require, module, exports) {
module.exports = {
	"prefix": "mdi-light",
	"icons": {
		"account": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5Zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5ZM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7Zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z\"/>"
		},
		"account-alert": {
			"body": "<path fill=\"currentColor\" d=\"M10.5 14c4.142 0 7.5 1.567 7.5 3.5V20H3v-2.5c0-1.933 3.358-3.5 7.5-3.5Zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S4 16.12 4 17.5V19h13v-1.5ZM10.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7Zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM20 16v-1h1v1h-1Zm0-3V7h1v6h-1Z\"/>"
		},
		"alarm": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 6a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15Zm0 1a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13ZM11 9h1v4.363l3.048 1.421l-.423.906L11 14V9Zm4.25-3.75l.643-.766l3.83 3.214l-.643.766l-3.83-3.214Zm-7.5 0L3.92 8.464l-.643-.766l3.83-3.214l.643.766Z\"/>"
		},
		"alarm-plus": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 6a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15Zm0 1a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13Zm3.75-1.75l.643-.766l3.83 3.214l-.643.766l-3.83-3.214Zm-7.5 0L3.92 8.464l-.643-.766l3.83-3.214l.643.766ZM11 11h1v2h2v1h-2v2h-1v-2H9v-1h2v-2Z\"/>"
		},
		"alert": {
			"body": "<path fill=\"currentColor\" d=\"M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536ZM11 14v-4h1v4h-1Zm0 2h1v2h-1v-2Z\"/>"
		},
		"alert-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17ZM11 17v-2h1v2h-1Zm0-4V8h1v5h-1Z\"/>"
		},
		"alert-octagon": {
			"body": "<path fill=\"currentColor\" d=\"M3 16.011V8.98L7.98 4h7.04L20 8.98v7.046L15.025 21H7.99L3 16.011ZM8.393 5L4 9.393v6.204L8.403 20h6.208L19 15.611V9.393L14.607 5H8.393ZM11 8h1v5h-1V8Zm0 7h1v2h-1v-2Z\"/>"
		},
		"arrange-bring-forward": {
			"body": "<path fill=\"currentColor\" d=\"M8 9h4v1H9.707l6.718 6.718l-.708.707L9 10.707V13H8V9ZM3 4h12v9l-1-1V5H4v10h7l1 1H3V4Zm17 5v12H8v-3h1v2h10V10h-2V9h3Z\"/>"
		},
		"arrange-bring-to-front": {
			"body": "<path fill=\"currentColor\" d=\"M9 7V5H4v5h2v1H3V4h7v3H9Zm4 14v-3h1v2h5v-5h-2v-1h3v7h-7ZM8 9h7v7H8V9Zm1 1v5h5v-5H9Z\"/>"
		},
		"arrange-send-backward": {
			"body": "<path fill=\"currentColor\" d=\"M6 7h4v1H7.707l6.718 6.717l-.708.708L7 8.707V11H6V7Zm14 14H8v-9l1 1v7h10V10h-7l-1-1h9v12ZM3 16V4h12v3h-1V5H4v10h2v1H3Z\"/>"
		},
		"arrange-send-to-back": {
			"body": "<path fill=\"currentColor\" d=\"M9 5H4v5h5V5Zm1 6H3V4h7v7Zm3 10v-7h7v7h-7Zm1-1h5v-5h-5v5Zm2-12v4h-1V9h-3V8h4Zm-9 9v-4h1v3h3v1H7Z\"/>"
		},
		"arrow-down": {
			"body": "<path fill=\"currentColor\" d=\"M12 5v12.25L17.25 12l.75.664l-6.5 6.5l-6.5-6.5l.75-.664L11 17.25V5h1Z\"/>"
		},
		"arrow-down-circle": {
			"body": "<path fill=\"currentColor\" d=\"M12.003 7v8.25l3.25-3.25l.75.664l-4.5 4.5l-4.5-4.5l.75-.664l3.25 3.25V7h1Zm-.5 15a9.5 9.5 0 1 1 0-19a9.5 9.5 0 0 1 0 19Zm0-1a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17Z\"/>"
		},
		"arrow-left": {
			"body": "<path fill=\"currentColor\" d=\"M19 13H6.75L12 18.25l-.664.75l-6.5-6.5l6.5-6.5l.664.75L6.75 12H19v1Z\"/>"
		},
		"arrow-left-circle": {
			"body": "<path fill=\"currentColor\" d=\"M17 13H8.75L12 16.25l-.664.75l-4.5-4.5l4.5-4.5l.664.75L8.75 12H17v1Zm-15-.5a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0Zm1 0a8.5 8.5 0 1 0 17 0a8.5 8.5 0 0 0-17 0Z\"/>"
		},
		"arrow-right": {
			"body": "<path fill=\"currentColor\" d=\"M4 12h12.25L11 6.75l.664-.75l6.5 6.5l-6.5 6.5l-.664-.75L16.25 13H4v-1Z\"/>"
		},
		"arrow-right-circle": {
			"body": "<path fill=\"currentColor\" d=\"M6.003 12h8.25l-3.25-3.25l.664-.75l4.5 4.5l-4.5 4.5l-.664-.75l3.25-3.25h-8.25v-1Zm15 .5a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0Zm-1 0a8.5 8.5 0 1 0-17 0a8.5 8.5 0 0 0 17 0Z\"/>"
		},
		"arrow-up": {
			"body": "<path fill=\"currentColor\" d=\"M11 20V7.75L5.75 13L5 12.336l6.5-6.5l6.5 6.5l-.75.664L12 7.75V20h-1Z\"/>"
		},
		"arrow-up-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11 18V9.75L7.75 13L7 12.336l4.5-4.5l4.5 4.5l-.75.664L12 9.75V18h-1Zm.5-15a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Z\"/>"
		},
		"bank": {
			"body": "<path fill=\"currentColor\" d=\"M11 2.5L20 7v2H2V7l9-4.5Zm4 7.5h4v8h-4v-8ZM2 22v-3h18v3H2Zm7-12h4v8H9v-8Zm-6 0h4v8H3v-8Zm0 10v1h16v-1H3Zm1-9v6h2v-6H4Zm6 0v6h2v-6h-2Zm6 0v6h2v-6h-2ZM3 8h16v-.4l-8-4.019l-8 4.02V8Z\"/>"
		},
		"bell": {
			"body": "<path fill=\"currentColor\" d=\"M12 4.5a.5.5 0 0 0-1 0v1.527A4.5 4.5 0 0 0 7 10.5v5.914L5.414 18h12.172L16 16.414V10.5a4.5 4.5 0 0 0-4-4.473V4.5ZM11.5 3A1.5 1.5 0 0 1 13 4.5v.707c2.309.653 4 2.775 4 5.293V16l3 3H3l3-3v-5.5a5.502 5.502 0 0 1 4-5.293V4.5A1.5 1.5 0 0 1 11.5 3Zm0 19a2.5 2.5 0 0 1-2.45-2h1.035a1.5 1.5 0 0 0 2.83 0h1.035a2.5 2.5 0 0 1-2.45 2Z\"/>"
		},
		"bell-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.793 4.457L3.5 3.75L20.25 20.5l-.707.707L17.336 19H3l3-3v-5.5c0-.83.184-1.617.513-2.323l-3.72-3.72ZM12 4.5a.5.5 0 0 0-1 0v1.527a4.485 4.485 0 0 0-2.599 1.21l-.707-.707A5.494 5.494 0 0 1 10 5.207V4.5a1.5 1.5 0 0 1 3 0v.707c2.309.653 4 2.775 4 5.293v5.336l-1-1V10.5a4.5 4.5 0 0 0-4-4.473V4.5Zm-5 6v5.914L5.414 18h10.922L7.277 8.941A4.49 4.49 0 0 0 7 10.5ZM11.5 22a2.5 2.5 0 0 1-2.45-2h1.035a1.5 1.5 0 0 0 2.83 0h1.035a2.5 2.5 0 0 1-2.45 2Z\"/>"
		},
		"bell-plus": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3A1.5 1.5 0 0 0 10 4.5v.707A5.503 5.503 0 0 0 6 10.5V16l-3 3h17l-3-3v-5.5a5.503 5.503 0 0 0-4-5.293V4.5A1.5 1.5 0 0 0 11.5 3Zm0 1a.5.5 0 0 1 .5.5v1.527a4.5 4.5 0 0 1 4 4.473v5.914L17.586 18H5.414L7 16.414V10.5a4.5 4.5 0 0 1 4-4.473V4.5a.5.5 0 0 1 .5-.5Zm-.5 6v2H9v1h2v2h1v-2h2v-1h-2v-2h-1ZM9.05 20a2.5 2.5 0 0 0 4.9 0h-1.036a1.5 1.5 0 0 1-2.828 0H9.05Z\"/>"
		},
		"bluetooth": {
			"body": "<path fill=\"currentColor\" d=\"M11 3h1l4.854 4.854l-4.647 4.646l4.647 4.646L12 22h-1v-8.293l-4.45 4.45l-.707-.707l4.95-4.95l-4.95-4.95l.707-.707l4.45 4.45V3Zm1 1.414v6.879l3.44-3.44L12 4.415Zm0 16.172l3.44-3.44L12 13.707v6.879Z\"/>"
		},
		"book": {
			"body": "<path fill=\"currentColor\" d=\"M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1V4Zm5 0H8v4.78l2-1.401l2 1.4V4Z\"/>"
		},
		"book-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M8 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1V4Zm5 0H9v4.78l2-1.401l2 1.4V4ZM8 24a5 5 0 0 1-5-5V7h1v12a4 4 0 0 0 4 4h8v1H8Z\"/>"
		},
		"book-plus": {
			"body": "<path fill=\"currentColor\" d=\"M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1V4Zm5 0H8v4.78l2-1.401l2 1.4V4ZM9 19v-2H7v-1h2v-2h1v2h2v1h-2v2H9Z\"/>"
		},
		"bookmark": {
			"body": "<path fill=\"currentColor\" d=\"M8 3h8a3 3 0 0 1 3 3v15l-7-3l-7 3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13.49l6-2.548l6 2.547V6a2 2 0 0 0-2-2H8Z\"/>"
		},
		"border-all": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v17H3V4Zm1 1v7h7V5H4Zm15 7V5h-7v7h7ZM4 20h7v-7H4v7Zm15 0v-7h-7v7h7Z\"/>"
		},
		"border-bottom": {
			"body": "<path fill=\"currentColor\" d=\"M3 20h8v-1h1v1h8v1H3v-1Zm17-2h-1v-2h1v2ZM4 14H3v-3h1v1h1v1H4v1Zm0 4H3v-2h1v2Zm8-5h-1v-1h1v1ZM3 5V4h1v1H3Zm0 2h1v2H3V7Zm12-2V4h2v1h-2ZM6 5V4h2v1H6Zm4 0V4h3v1h-1v1h-1V5h-1Zm9 9v-1h-1v-1h1v-1h1v3h-1Zm1-5h-1V7h1v2Zm-1-4V4h1v1h-1Zm-5 8v-1h2v1h-2Zm-2 4h-1v-2h1v2Zm0-7h-1V8h1v2Zm-5 3v-1h2v1H7Z\"/>"
		},
		"border-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"M20 18h-1v-2h1v2ZM4 14H3v-3h1v1h15v-1h1v3h-1v-1H4v1Zm0 4H3v-2h1v2ZM3 5V4h1v1H3Zm0 2h1v2H3V7Zm12-2V4h2v1h-2ZM6 5V4h2v1H6Zm4 0V4h3v1h-1v1h-1V5h-1Zm10 4h-1V7h1v2Zm-1-4V4h1v1h-1Zm-7 12h-1v-2h1v2Zm0-7h-1V8h1v2ZM3 20h1v1H3v-1Zm12 0h2v1h-2v-1Zm-9 0h2v1H6v-1Zm4 0h1v-1h1v1h1v1h-3v-1Zm9 0h1v1h-1v-1Z\"/>"
		},
		"border-inside": {
			"body": "<path fill=\"currentColor\" d=\"M17 4v1h-2V4h2Zm-4 16v1h-3v-1h1v-7H4v1H3v-3h1v1h7V5h-1V4h3v1h-1v7h7v-1h1v3h-1v-1h-7v7h1Zm4 0v1h-2v-1h2ZM4 21H3v-1h1v1Zm2 0v-1h2v1H6ZM4 9H3V7h1v2Zm0 9H3v-2h1v2ZM8 4v1H6V4h2ZM4 5H3V4h1v1Zm15 16v-1h1v1h-1Zm0-12V7h1v2h-1Zm0 9v-2h1v2h-1Zm0-13V4h1v1h-1Z\"/>"
		},
		"border-left": {
			"body": "<path fill=\"currentColor\" d=\"M4 4v8h1v1H4v8H3V4h1Zm2 17v-1h2v1H6Zm4-16V4h3v1h-1v1h-1V5h-1ZM6 5V4h2v1H6Zm5 8v-1h1v1h-1Zm8-9h1v1h-1V4Zm-2 0v1h-2V4h2Zm2 12h1v2h-1v-2Zm0-9h1v2h-1V7Zm0 4h1v3h-1v-1h-1v-1h1v-1Zm-9 9h1v-1h1v1h1v1h-3v-1Zm5 1v-1h2v1h-2Zm4-1h1v1h-1v-1Zm-8-5h1v2h-1v-2Zm-4-2v-1h2v1H7Zm7 0v-1h2v1h-2Zm-3-5h1v2h-1V8Z\"/>"
		},
		"border-none": {
			"body": "<path fill=\"currentColor\" d=\"M20 18h-1v-2h1v2ZM4 14H3v-3h1v1h1v1H4v1Zm15-2v-1h1v3h-1v-1h-1v-1h1Zm-5 1v-1h2v1h-2Zm-3 0v-1h1v1h-1Zm-4 0v-1h2v1H7Zm-3 5H3v-2h1v2ZM3 5V4h1v1H3Zm0 2h1v2H3V7Zm12-2V4h2v1h-2ZM6 5V4h2v1H6Zm4 0V4h3v1h-1v1h-1V5h-1Zm10 4h-1V7h1v2Zm-1-4V4h1v1h-1Zm-7 12h-1v-2h1v2Zm0-7h-1V8h1v2ZM3 20h1v1H3v-1Zm12 0h2v1h-2v-1Zm-9 0h2v1H6v-1Zm4 0h1v-1h1v1h1v1h-3v-1Zm9 0h1v1h-1v-1Z\"/>"
		},
		"border-outside": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v17H3V4Zm1 1v7h1v1H4v7h7v-1h1v1h7v-7h-1v-1h1V5h-7v1h-1V5H4Zm3 7h2v1H7v-1Zm4 0h1v1h-1v-1Zm0 3h1v2h-1v-2Zm3-3h2v1h-2v-1Zm-3-2V8h1v2h-1Z\"/>"
		},
		"border-right": {
			"body": "<path fill=\"currentColor\" d=\"M19 21v-8h-1v-1h1V4h1v17h-1ZM17 4v1h-2V4h2Zm-4 16v1h-3v-1h1v-1h1v1h1Zm4 0v1h-2v-1h2Zm-5-8v1h-1v-1h1Zm-8 9H3v-1h1v1Zm2 0v-1h2v1H6ZM4 9H3V7h1v2Zm0 9H3v-2h1v2Zm0-4H3v-3h1v1h1v1H4v1Zm9-9h-1v1h-1V5h-1V4h3v1ZM8 4v1H6V4h2ZM4 5H3V4h1v1Zm8 5h-1V8h1v2Zm4 2v1h-2v-1h2Zm-7 0v1H7v-1h2Zm3 5h-1v-2h1v2Z\"/>"
		},
		"border-top": {
			"body": "<path fill=\"currentColor\" d=\"M20 5h-8v1h-1V5H3V4h17v1ZM3 7h1v2H3V7Zm16 4h1v3h-1v-1h-1v-1h1v-1Zm0-4h1v2h-1V7Zm-8 5h1v1h-1v-1Zm9 8v1h-1v-1h1Zm0-2h-1v-2h1v2ZM8 20v1H6v-1h2Zm9 0v1h-2v-1h2Zm-4 0v1h-3v-1h1v-1h1v1h1Zm-9-9v1h1v1H4v1H3v-3h1Zm-1 5h1v2H3v-2Zm1 4v1H3v-1h1Zm5-8v1H7v-1h2Zm2-4h1v2h-1V8Zm0 7h1v2h-1v-2Zm5-3v1h-2v-1h2Z\"/>"
		},
		"border-vertical": {
			"body": "<path fill=\"currentColor\" d=\"M17 4v1h-2V4h2Zm-4 16v1h-3v-1h1V5h-1V4h3v1h-1v15h1Zm4 0v1h-2v-1h2ZM4 21H3v-1h1v1Zm2 0v-1h2v1H6ZM4 9H3V7h1v2Zm0 9H3v-2h1v2Zm0-4H3v-3h1v1h1v1H4v1ZM8 4v1H6V4h2ZM4 5H3V4h1v1Zm12 7v1h-2v-1h2Zm-7 0v1H7v-1h2Zm10 9v-1h1v1h-1Zm0-12V7h1v2h-1Zm0 9v-2h1v2h-1Zm0-4v-1h-1v-1h1v-1h1v3h-1Zm0-9V4h1v1h-1Z\"/>"
		},
		"briefcase": {
			"body": "<path fill=\"currentColor\" d=\"M5 7h3V5l2-2h3l2 2v2h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm5.414-3L9 5.414V7h5V5.414L12.586 4h-2.172ZM5 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H5Z\"/>"
		},
		"bullhorn": {
			"body": "<path fill=\"currentColor\" d=\"m14 4l-3 3H3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3h3l3 3h2V4h-2Zm.414 1H15v13h-.586l-3-3H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h8.414l3-3ZM18 7v1.008a3.501 3.501 0 0 1 0 6.93v1.007A4.5 4.5 0 0 0 18 7Zm0 3.059v2.828a1.5 1.5 0 0 0 0-2.828ZM4 16h3v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Z\"/>"
		},
		"calendar": {
			"body": "<path fill=\"currentColor\" d=\"M7 2h1a1 1 0 0 1 1 1v1h5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1Zm8 2h1V3h-1v1ZM8 4V3H7v1h1ZM6 5a2 2 0 0 0-2 2v1h15V7a2 2 0 0 0-2-2H6ZM4 18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9H4v9Zm8-5h5v5h-5v-5Zm1 1v3h3v-3h-3Z\"/>"
		},
		"camcorder": {
			"body": "<path fill=\"currentColor\" d=\"M5 7h9a2 2 0 0 1 2 2v2.5l4-4v10l-4-4V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5Zm14 1.914L16.414 12.5L19 15.086V9.914Z\"/>"
		},
		"camera": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 8a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm0 1a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM5 5h2l2-2h5l2 2h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm4.414-1l-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.414l-2-2H9.414Z\"/>"
		},
		"cancel": {
			"body": "<path fill=\"currentColor\" d=\"M11.503 22a9.5 9.5 0 1 1 0-19a9.5 9.5 0 0 1 0 19Zm0-1a8.5 8.5 0 0 0 6.352-14.148l-12 12A8.468 8.468 0 0 0 11.503 21Zm0-17a8.5 8.5 0 0 0-6.355 14.145l12-12A8.468 8.468 0 0 0 11.503 4Z\"/>"
		},
		"cart": {
			"body": "<path fill=\"currentColor\" d=\"M16 18a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-9-1a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM18 6H4.273l2.547 6H15a.994.994 0 0 0 .8-.402l3-4h.001A1 1 0 0 0 18 6Zm-3 7H6.866L6.1 14.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-1.75-2.97l.72-1.474L2.338 4H1V3h2l.849 2H18a2 2 0 0 1 1.553 3.26l-2.914 3.886A1.998 1.998 0 0 1 15 13Z\"/>"
		},
		"chart-areaspline": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h1v13.979L9.57 8.33l6.01 3.47l3.615-6.263l.866.5l-4.115 7.129l-6.01-3.47L4 19.98V20h2.297l3.872-6.706l.5-.866l.865.5l5.144 2.97L20 10.144V21H3V4Zm14.044 13.264l-6.01-3.47L7.452 20H19v-6.124l-1.956 3.388Z\"/>"
		},
		"chart-bar": {
			"body": "<path fill=\"currentColor\" d=\"M2 4h1v16h2V10h4v10h2V6h4v14h2v-6h4v7H2V4Zm16 11v5h2v-5h-2Zm-6-8v13h2V7h-2Zm-6 4v9h2v-9H6Z\"/>"
		},
		"chart-histogram": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h1v9h3V7h5v4h4v4h4v6H3V4Zm13 12v4h3v-4h-3Zm-4-4v8h3v-8h-3ZM8 8v12h3V8H8Zm-4 6v6h3v-6H4Z\"/>"
		},
		"chart-line": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h1v14l5.581-9.667l6.01 3.47l3.615-6.263l.866.5l-4.116 7.129l-6.009-3.47L4 20h16v1H3V4Z\"/>"
		},
		"chart-pie": {
			"body": "<path fill=\"currentColor\" d=\"M12 3h1a8 8 0 0 1 8 8v1h-9V3Zm1 8h7a7 7 0 0 0-7-7v7Zm-3 3h8a8 8 0 1 1-8-8v8Zm-1 1V7.07A7.002 7.002 0 0 0 10 21a7.001 7.001 0 0 0 6.93-6H9Z\"/>"
		},
		"check": {
			"body": "<path fill=\"currentColor\" d=\"M18.9 8.1L9 18l-4.95-4.95l.707-.707L9 16.586l9.192-9.193l.707.708Z\"/>"
		},
		"check-bold": {
			"body": "<path fill=\"currentColor\" d=\"m9 19l-5.657-5.657l2.121-2.121L9 14.757l8.485-8.485l2.122 2.121L9 19Zm-3.536-6.364l-.707.707L9 17.586l9.192-9.193l-.707-.707L9 16.172l-3.536-3.536Z\"/>"
		},
		"chevron-double-down": {
			"body": "<path fill=\"currentColor\" d=\"M17.157 7.593L11.5 13.25L5.843 7.593l.707-.707l4.95 4.95l4.95-4.95l.707.707Zm0 4L11.5 17.25l-5.657-5.657l.707-.707l4.95 4.95l4.95-4.95l.707.707Z\"/>"
		},
		"chevron-double-left": {
			"body": "<path fill=\"currentColor\" d=\"M16.407 18.157L10.75 12.5l5.657-5.657l.707.707l-4.95 4.95l4.95 4.95l-.707.707Zm-4 0L6.75 12.5l5.657-5.657l.707.707l-4.95 4.95l4.95 4.95l-.707.707Z\"/>"
		},
		"chevron-double-right": {
			"body": "<path fill=\"currentColor\" d=\"M6.593 6.843L12.25 12.5l-5.657 5.657l-.707-.707l4.95-4.95l-4.95-4.95l.707-.707Zm4 0L16.25 12.5l-5.657 5.657l-.707-.707l4.95-4.95l-4.95-4.95l.707-.707Z\"/>"
		},
		"chevron-double-up": {
			"body": "<path fill=\"currentColor\" d=\"M5.843 17.407L11.5 11.75l5.657 5.657l-.707.707l-4.95-4.95l-4.95 4.95l-.707-.707Zm0-4L11.5 7.75l5.657 5.657l-.707.707l-4.95-4.95l-4.95 4.95l-.707-.707Z\"/>"
		},
		"chevron-down": {
			"body": "<path fill=\"currentColor\" d=\"M5.843 9.593L11.5 15.25l5.657-5.657l-.707-.707l-4.95 4.95l-4.95-4.95l-.707.707Z\"/>"
		},
		"chevron-left": {
			"body": "<path fill=\"currentColor\" d=\"M14.407 18.157L8.75 12.5l5.657-5.657l.707.707l-4.95 4.95l4.95 4.95l-.707.707Z\"/>"
		},
		"chevron-right": {
			"body": "<path fill=\"currentColor\" d=\"M8.593 18.157L14.25 12.5L8.593 6.843l-.707.707l4.95 4.95l-4.95 4.95l.707.707Z\"/>"
		},
		"chevron-up": {
			"body": "<path fill=\"currentColor\" d=\"M5.843 15.407L11.5 9.75l5.657 5.657l-.707.707l-4.95-4.95l-4.95 4.95l-.707-.707Z\"/>"
		},
		"clipboard": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 1 1 6 0H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6Zm2 2h7V6H8v2Zm3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2Z\"/>"
		},
		"clipboard-check": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 1 1 6 0H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6Zm2 2h7V6H8v2Zm3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2Zm5.65 8.6L10 18.75l-3.2-3.2l.707-.707L10 17.336l6.442-6.443l.707.707Z\"/>"
		},
		"clipboard-plus": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 1 1 6 0H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6Zm2 2h7V6H8v2Zm3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM8 19v-2H6v-1h2v-2h1v2h2v1H9v2H8Z\"/>"
		},
		"clipboard-text": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 1 1 6 0H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6Zm2 2h7V6H8v2Zm3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM6 11h11v1H6v-1Zm0 3h11v1H6v-1Zm0 3h9v1H6v-1Z\"/>"
		},
		"clock": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17ZM11 7h1v5.423l4.696 2.711l-.5.866L11 13V7Z\"/>"
		},
		"closed-caption": {
			"body": "<path fill=\"currentColor\" d=\"M4 5h15a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4Zm4.5 2c.99 0 1.904.32 2.647.86l-.588.81a3.5 3.5 0 1 0 0 5.662l.588.808A4.5 4.5 0 1 1 8.5 8Zm7.853 0c.99 0 1.904.32 2.647.86l-.588.81a3.5 3.5 0 1 0 0 5.662l.588.808A4.5 4.5 0 1 1 16.353 8Z\"/>"
		},
		"cloud": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 20a5.5 5.5 0 0 1-.002-11a6.502 6.502 0 0 1 12.485 2.03L18.5 11a4.5 4.5 0 1 1 0 9h-13Zm0-10a4.5 4.5 0 1 0 0 9h13a3.5 3.5 0 1 0-1.569-6.63a5.5 5.5 0 0 0-10.74-2.317L5.501 10Z\"/>"
		},
		"cloud-download": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 20a5.5 5.5 0 0 1-.002-11a6.502 6.502 0 0 1 12.485 2.03L18.5 11a4.5 4.5 0 1 1 0 9h-13Zm0-10a4.5 4.5 0 1 0 0 9h13a3.5 3.5 0 1 0-1.569-6.63L17 11.5a5.5 5.5 0 0 0-10.808-1.447L5.5 10Zm6.5 0v5.25L14.25 13l.75.664l-3.5 3.5l-3.5-3.5l.75-.664L11 15.25V10h1Z\"/>"
		},
		"cloud-upload": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 20a5.5 5.5 0 0 1-.002-11a6.502 6.502 0 0 1 12.485 2.03L18.5 11a4.5 4.5 0 1 1 0 9h-13Zm0-10a4.5 4.5 0 1 0 0 9h13a3.5 3.5 0 1 0-1.569-6.63L17 11.5a5.5 5.5 0 0 0-10.808-1.447L5.5 10Zm6.5 7v-5.25L14.25 14l.75-.664l-3.5-3.5l-3.5 3.5l.75.664L11 11.75V17h1Z\"/>"
		},
		"cog": {
			"body": "<path fill=\"currentColor\" d=\"m19.588 15.492l-1.814-1.29a6.483 6.483 0 0 0-.005-3.421l1.82-1.274l-1.453-2.514l-2.024.926a6.484 6.484 0 0 0-2.966-1.706L12.953 4h-2.906l-.193 2.213A6.483 6.483 0 0 0 6.889 7.92l-2.025-.926l-1.452 2.514l1.82 1.274a6.483 6.483 0 0 0-.006 3.42l-1.814 1.29l1.452 2.502l2.025-.927a6.483 6.483 0 0 0 2.965 1.706l.193 2.213h2.906l.193-2.213a6.484 6.484 0 0 0 2.965-1.706l2.025.927l1.453-2.501ZM13.505 2.985a.5.5 0 0 1 .5.477l.178 2.035a7.45 7.45 0 0 1 2.043 1.178l1.85-.863a.5.5 0 0 1 .662.195l2.005 3.47a.5.5 0 0 1-.162.671l-1.674 1.172c.128.798.124 1.593.001 2.359l1.673 1.17a.5.5 0 0 1 .162.672l-2.005 3.457a.5.5 0 0 1-.662.195l-1.85-.863c-.602.49-1.288.89-2.043 1.179l-.178 2.035a.5.5 0 0 1-.5.476h-4.01a.5.5 0 0 1-.5-.476l-.178-2.035a7.453 7.453 0 0 1-2.043-1.179l-1.85.863a.5.5 0 0 1-.663-.194L2.257 15.52a.5.5 0 0 1 .162-.671l1.673-1.171a7.45 7.45 0 0 1 0-2.359L2.42 10.148a.5.5 0 0 1-.162-.67L4.26 6.007a.5.5 0 0 1 .663-.195l1.85.863a7.45 7.45 0 0 1 2.043-1.178l.178-2.035a.5.5 0 0 1 .5-.477h4.01ZM11.5 9a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7Zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z\"/>"
		},
		"comment": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.586l-3.707 3.707A1 1 0 0 1 8 21v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"/>"
		},
		"comment-alert": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.586l-3.707 3.707A1 1 0 0 1 8 21v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-7 2h1v5h-1V6Zm0 7h1v2h-1v-2Z\"/>"
		},
		"comment-text": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.586l-3.707 3.707A1 1 0 0 1 8 21v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM5 7h13v1H5V7Zm0 3h12v1H5v-1Zm0 3h8v1H5v-1Z\"/>"
		},
		"console": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2h17a2 2 0 0 0-2-2H5ZM3 18a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8H3v10Zm14 0h-5v-1h5v1ZM6 10.5l.707-.707L10.914 14l-4.207 4.207L6 17.5L9.5 14L6 10.5Z\"/>"
		},
		"content-cut": {
			"body": "<path fill=\"currentColor\" d=\"M9 6.5c0 .786-.26 1.512-.697 2.096L20 20.293V21h-.707L11.5 13.207l-3.197 3.197a3.5 3.5 0 1 1-.707-.707l3.197-3.197l-3.197-3.197A3.5 3.5 0 1 1 9 6.5Zm-1 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0ZM19.293 4H20v.707l-7.146 7.147l-.708-.707L19.293 4ZM5.5 16a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z\"/>"
		},
		"content-duplicate": {
			"body": "<path fill=\"currentColor\" d=\"M9 6h8a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H6V9a3 3 0 0 1 3-3ZM5 2h10v1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7.25L10 13.75l.664-.75l3.5 3.5l-3.5 3.5l-.664-.75L12.25 17H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z\"/>"
		},
		"content-paste": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 1a2.5 2.5 0 0 1 2.45 2H17a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3.05a2.5 2.5 0 0 1 2.45-2Zm1.415 2a1.5 1.5 0 0 0-2.83 0h2.83ZM6 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1v3H7V4H6Zm2 0v2h7V4H8Z\"/>"
		},
		"content-save": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h10.586L20 7.414V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7.914L16.086 5H15v5H6V5Zm1 0v4h7V5H7Zm5 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z\"/>"
		},
		"content-save-all": {
			"body": "<path fill=\"currentColor\" d=\"M6 3h10.586L20 6.414V17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6.914L16.086 4H15v5H6V4Zm1 0v4h7V4H7Zm5 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4ZM6 22a5 5 0 0 1-5-5V7h1v10a4 4 0 0 0 4 4h10v1H6Z\"/>"
		},
		"credit-card": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v1h17V8a2 2 0 0 0-2-2H5ZM3 17a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5H3v5Zm2-1h4v1H5v-1Zm6 0h3v1h-3v-1Zm-8-6v1h17v-1H3Z\"/>"
		},
		"crop": {
			"body": "<path fill=\"currentColor\" d=\"M8 6h7a3 3 0 0 1 3 3v7h-1V9a2 2 0 0 0-2-2H8V6Zm0 13a3 3 0 0 1-3-3V7H1V6h4V2h1v14a2 2 0 0 0 2 2h13v1h-3v4h-1v-4H8Z\"/>"
		},
		"crop-free": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h2v1H6a2 2 0 0 0-2 2v2H3V7a3 3 0 0 1 3-3ZM4 18a2 2 0 0 0 2 2h2v1H6a3 3 0 0 1-3-3v-2h1v2ZM17 4a3 3 0 0 1 3 3v2h-1V7a2 2 0 0 0-2-2h-2V4h2Zm3 14a3 3 0 0 1-3 3h-2v-1h2a2 2 0 0 0 2-2v-2h1v2Z\"/>"
		},
		"currency-eur": {
			"body": "<path fill=\"currentColor\" d=\"m2 11l.5-1h2.874a8.504 8.504 0 0 1 13.695-3.922l-.397.99A7.503 7.503 0 0 0 6.426 10l11.074.001l-.4 1H6.15a7.535 7.535 0 0 0 0 3h9.75l-.4 1H6.427A7.503 7.503 0 0 0 19 17.6v1.381A8.504 8.504 0 0 1 5.374 15H2l.5-1h2.632a8.552 8.552 0 0 1 0-3H2Z\"/>"
		},
		"currency-gbp": {
			"body": "<path fill=\"currentColor\" d=\"M7 13v-1h2.823c-.076-.474-.166-.9-.251-1.303c-.187-.88-.363-1.712-.32-2.718c.074-1.801.671-3.05 1.773-3.713c1.686-1.011 4.028-.285 4.998.094l-.168 1.012c-.649-.272-2.896-1.104-4.317-.247c-.795.478-1.228 1.452-1.288 2.896c-.037.88.12 1.616.3 2.468c.098.462.202.954.285 1.511H15v1h-4.05c.032.383.05.798.05 1.251c0 3.177-1.473 4.733-2.654 5.749H17v1H6.5v-1l.805-.432C8.443 18.624 10 17.332 10 14.25c0-.454-.02-.868-.053-1.251H7Z\"/>"
		},
		"currency-rub": {
			"body": "<path fill=\"currentColor\" d=\"M7 21v-5H6v-1h1v-3H6v-1h1V4h7a4 4 0 0 1 0 8H8v3h6v1H8v5H7Zm1-10h6a3 3 0 0 0 0-6H8v6Z\"/>"
		},
		"currency-usd": {
			"body": "<path fill=\"currentColor\" d=\"M11 4h1v2.01c3.29.141 4 1.685 4 2.99h-1c0-1.327-1.178-2-3.5-2c-.82 0-3.5.163-3.5 2.249c0 .872 0 1.86 3.621 2.766l1.606.485C15.76 13.435 16 14.572 16 15.751c0 1.881-1.518 3.093-4 3.235V21h-1v-2.01c-3.29-.141-4-1.685-4-2.99h1c0 1.327 1.178 2 3.5 2c.82 0 3.5-.163 3.5-2.249c0-.872 0-1.86-3.621-2.766L9.773 12.5C7.24 11.565 7 10.428 7 9.249c0-1.881 1.518-3.093 4-3.235V4Z\"/>"
		},
		"delete": {
			"body": "<path fill=\"currentColor\" d=\"M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12ZM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6Zm12-1V5h-4l-1-1h-3L9 5H5v1h13ZM8 9h1v10H8V9Zm6 0h1v10h-1V9Z\"/>"
		},
		"diamond": {
			"body": "<path fill=\"currentColor\" d=\"M6 3h11l3.902 5.573L11.5 22L2.098 8.573L6 3Zm4.162 1L8.464 8h6.072l-1.698-4h-2.676ZM8.327 9l3.173 9.764L14.672 9H8.328ZM3.72 8h3.658l1.698-4H6.52l-2.8 4Zm-.102 1l6.825 9.747L7.276 9H3.618ZM19.28 8l-2.8-4h-2.556l1.698 4h3.658Zm.102 1h-3.658l-3.167 9.747L19.382 9Z\"/>"
		},
		"dots-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm-6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm-6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z\"/>"
		},
		"dots-vertical": {
			"body": "<path fill=\"currentColor\" d=\"M12 16a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm0-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm0-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm0 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm0 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z\"/>"
		},
		"download": {
			"body": "<path fill=\"currentColor\" d=\"M12 4v12.25L17.25 11l.75.664l-6.5 6.5l-6.5-6.5l.75-.664L11 16.25V4h1ZM3 19h1v2h15v-2h1v3H3v-3Z\"/>"
		},
		"eject": {
			"body": "<path fill=\"currentColor\" d=\"m5.33 15l6.17-9.25L17.67 15H5.33ZM5 18h13v1H5v-1Zm1.98-3.975h9.04L11.5 7.25l-4.52 6.776Z\"/>"
		},
		"email": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a1.99 1.99 0 0 0-1.283.466L11.5 11.52l7.783-5.054A1.992 1.992 0 0 0 18 6H5Zm6.5 6.712L3.134 7.28A1.995 1.995 0 0 0 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.254-.047-.497-.134-.72L11.5 12.711Z\"/>"
		},
		"email-open": {
			"body": "<path fill=\"currentColor\" d=\"M21 9v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9c0-1.11.603-2.08 1.5-2.598l-.003-.004l8.001-4.62l8.007 4.623l-.001.003A2.999 2.999 0 0 1 21 9ZM3.717 7.466L11.5 12.52l7.783-5.054l-7.785-4.533l-7.781 4.533Zm7.783 6.246L3.134 8.28A1.995 1.995 0 0 0 3 9v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9c0-.254-.047-.497-.134-.72L11.5 13.711Z\"/>"
		},
		"ereader": {
			"body": "<path fill=\"currentColor\" d=\"M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7Zm0 1h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 1v12h9V6H7Zm2 2h5v1H9V8Zm0 3h5v1H9v-1Zm0 3h3v1H9v-1Z\"/>"
		},
		"eye": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 18c3.989 0 7.458-2.224 9.235-5.5A10.498 10.498 0 0 0 11.5 7a10.498 10.498 0 0 0-9.235 5.5A10.498 10.498 0 0 0 11.5 18Zm0-12a11.5 11.5 0 0 1 10.36 6.5A11.5 11.5 0 0 1 11.5 19a11.5 11.5 0 0 1-10.36-6.5A11.5 11.5 0 0 1 11.5 6Zm0 2a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm0 1a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z\"/>"
		},
		"eye-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.543 4.707L3.25 4L20 20.75l-.707.707l-3.348-3.348c-1.367.574-2.87.891-4.445.891a11.5 11.5 0 0 1-10.36-6.5a11.55 11.55 0 0 1 4.374-4.821L2.543 4.707ZM11.5 18c1.293 0 2.531-.234 3.675-.661l-1.129-1.128A4.5 4.5 0 0 1 7.79 9.954L6.244 8.408a10.55 10.55 0 0 0-3.98 4.092A10.498 10.498 0 0 0 11.5 18Zm9.235-5.5A10.498 10.498 0 0 0 11.5 7a10.49 10.49 0 0 0-3.305.53l-.783-.782A11.474 11.474 0 0 1 11.5 6a11.5 11.5 0 0 1 10.36 6.5a11.55 11.55 0 0 1-4.068 4.628l-.724-.724a10.552 10.552 0 0 0 3.667-3.904ZM11.5 8a4.5 4.5 0 0 1 3.904 6.74l-.74-.74A3.5 3.5 0 0 0 10 9.336l-.74-.74A4.48 4.48 0 0 1 11.5 8ZM8 12.5a3.5 3.5 0 0 0 5.324 2.988l-4.812-4.812A3.484 3.484 0 0 0 8 12.5Z\"/>"
		},
		"factory": {
			"body": "<path fill=\"currentColor\" d=\"m2 8l7 4.041V8l7 4V3h5l.002 9H21v10H2V8Zm15 6l-7-4.268v4.042L3 9.732V21h17v-9h.002L20 4h-3v10ZM5 15h3v1H5v-1Zm0 3h5v1H5v-1Zm7-3h3v1h-3v-1Zm0 3h6v1h-6v-1Z\"/>"
		},
		"fast-forward": {
			"body": "<path fill=\"currentColor\" d=\"M21.402 12.5L12 18.375L11 19v-5.624l-8 5L2 19V6l9 5.624V6l10.402 6.5Zm-1.887 0L12 7.804v9.392l7.515-4.696Zm-9 0L3 7.804v9.392l7.515-4.696Z\"/>"
		},
		"file": {
			"body": "<path fill=\"currentColor\" d=\"M14 11a3 3 0 0 1-3-3V4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8h-4Zm-2-3a2 2 0 0 0 2 2h3.586L12 4.414V8ZM7 3h5l7 7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z\"/>"
		},
		"file-alert": {
			"body": "<path fill=\"currentColor\" d=\"M7 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9l-7-7H7Zm0 1h4v4a3 3 0 0 0 3 3h4v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm5 .414L17.586 10H14a2 2 0 0 1-2-2V4.414ZM7.5 10v5h1v-5h-1Zm0 7v2h1v-2h-1Z\"/>"
		},
		"file-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M15 11a3 3 0 0 1-3-3V4H8a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8h-4Zm-2-3a2 2 0 0 0 2 2h3.586L13 4.414V8ZM8 3h5l7 7v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 21a5 5 0 0 1-5-5V7h1v12a4 4 0 0 0 4 4h8v1H8Z\"/>"
		},
		"file-plus": {
			"body": "<path fill=\"currentColor\" d=\"M14 11a3 3 0 0 1-3-3V4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8h-4Zm-2-3a2 2 0 0 0 2 2h3.586L12 4.414V8ZM7 3h5l7 7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm2 16v-2H7v-1h2v-2h1v2h2v1h-2v2H9Z\"/>"
		},
		"filmstrip": {
			"body": "<path fill=\"currentColor\" d=\"M4 4h1v2h2V4h9v2h2V4h1v17h-1v-2h-2v2H7v-2H5v2H4V4Zm3 3H5v3h2V7Zm0 4H5v3h2v-3Zm0 4H5v3h2v-3Zm9 3h2v-3h-2v3Zm0-4h2v-3h-2v3Zm0-4h2V7h-2v3ZM8 5v7h7V5H8Zm0 8v7h7v-7H8Z\"/>"
		},
		"flag": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h8.423l1.154 2H19v9h-6l-1.155-2H6v7H5V5Zm13 10V8h-4l-1.155-2H6v7h6.423l1.154 2H18Z\"/>"
		},
		"flash": {
			"body": "<path fill=\"currentColor\" d=\"m16 3l-3.49 7H16l-6 12.034V14H7V3h9Zm-5.106 8l3.49-7H8v9h3v4.787L14.384 11h-3.49Z\"/>"
		},
		"flask": {
			"body": "<path fill=\"currentColor\" d=\"M13 6h1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h1v2.072L4.285 17.97A2 2 0 0 0 6 21h11a2 2 0 0 0 1.715-3.03L13 8.072V6ZM6 22a3 3 0 0 1-2.516-4.635L9 7.811V7a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v.811l5.516 9.554A3 3 0 0 1 17 22H6Zm6.294-6.708l1.626-1.626L17 19H6l3.66-6.34l2.634 2.632Zm0 1.414l-2.419-2.418L7.732 18h7.536l-1.562-2.706l-1.412 1.412ZM12 10a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z\"/>"
		},
		"flask-empty": {
			"body": "<path fill=\"currentColor\" d=\"M13 6h1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h1v2.072L4.285 17.97A2 2 0 0 0 6 21h11a2 2 0 0 0 1.715-3.03L13 8.072V6ZM6 22a3 3 0 0 1-2.516-4.635L9 7.811V7a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v.811l5.516 9.554A3 3 0 0 1 17 22H6Z\"/>"
		},
		"folder": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h4l3 3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6.414l-3-3H5Z\"/>"
		},
		"folder-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h3l3 3h7a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-7.414l-3-3H6Zm0 16a5 5 0 0 1-5-5V9h1v8a4 4 0 0 0 4 4h12v1H6Z\"/>"
		},
		"folder-plus": {
			"body": "<path fill=\"currentColor\" fill-opacity=\".824\" d=\"M5 5h4l3 3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6.414l-3-3H5Zm2 11v-2H5v-1h2v-2h1v2h2v1H8v2H7Z\"/>"
		},
		"format-align-bottom": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h13v1H3Zm0-4v-1h17v1H3Zm8-13h1v8.25L15.25 9l.75.664l-4.5 4.5l-4.5-4.5L7.75 9L11 12.25V4Z\"/>"
		},
		"format-align-center": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4Zm4 4h9v1H7V8Zm-4 4h17v1H3v-1Zm4 4h9v1H7v-1Zm-4 4h17v1H3v-1Z\"/>"
		},
		"format-align-justify": {
			"body": "<path fill=\"currentColor\" d=\"M3 5V4h17v1H3Zm0 4V8h17v1H3Zm0 4v-1h17v1H3Zm0 4v-1h17v1H3Zm0 4v-1h17v1H3Z\"/>"
		},
		"format-align-left": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h17v1H3Zm0-4v-1h11v1H3Zm0-4v-1h17v1H3Zm0-4V8h11v1H3Zm0-4V4h17v1H3Z\"/>"
		},
		"format-align-middle": {
			"body": "<path fill=\"currentColor\" d=\"M3 13v-1h17v1H3Zm8-9h1v4.25L14.25 6l.75.664l-3.5 3.5l-3.5-3.5L8.75 6L11 8.25V4Zm0 17v-4.25L8.75 19L8 18.336l3.5-3.5l3.5 3.5l-.75.664L12 16.75V21h-1Z\"/>"
		},
		"format-align-right": {
			"body": "<path fill=\"currentColor\" d=\"M20 4v1H3V4h17Zm0 4v1H9V8h11Zm0 4v1H3v-1h17Zm0 4v1H9v-1h11Zm0 4v1H3v-1h17Z\"/>"
		},
		"format-align-top": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4Zm0 4h13v1H3V8Zm8 13v-8.25L7.75 16L7 15.336l4.5-4.5l4.5 4.5l-.75.664L12 12.75V21h-1Z\"/>"
		},
		"format-bold": {
			"body": "<path fill=\"currentColor\" d=\"M16 14.5a3.5 3.5 0 0 1-3.5 3.5H7V5h4.5a3.5 3.5 0 0 1 2.21 6.215A3.501 3.501 0 0 1 16 14.5ZM11.5 6H8v5h3.5a2.5 2.5 0 0 0 0-5Zm1 6H8v5h4.5a2.5 2.5 0 0 0 0-5Z\"/>"
		},
		"format-clear": {
			"body": "<path fill=\"currentColor\" d=\"M8 4h9v1h-3.989L8.507 17h-1L12.01 5H8V4ZM5 21v-1h8v1H5Zm11.793-3.5L14 14.707l.707-.707l2.793 2.793L20.293 14l.707.707l-2.793 2.793L21 20.293l-.707.707l-2.793-2.793L14.707 21L14 20.293l2.793-2.793Z\"/>"
		},
		"format-float-center": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4Zm0 12h17v1H3v-1Zm13 4v1H3v-1h13ZM8 7h7v7H8V7Zm6 1H9v5h5V8Z\"/>"
		},
		"format-float-left": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4Zm9 4h8v1h-8V8Zm0 4h8v1h-8v-1Zm-9 4h13v1H3v-1Zm17 4v1H3v-1h17ZM3 7h7v7H3V7Zm6 1H4v5h5V8Z\"/>"
		},
		"format-float-none": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4Zm9 9v-1h8v1h-8ZM3 7h7v7H3V7Zm1 1v5h5V8H4Zm-1 8h13v1H3v-1Zm0 4h17v1H3v-1Z\"/>"
		},
		"format-float-right": {
			"body": "<path fill=\"currentColor\" d=\"M20 4v1H3V4h17Zm-9 4v1H3V8h8Zm-8 4h5v1H3v-1Zm0 4h13v1H3v-1Zm0 4h17v1H3v-1ZM20 7v7h-7V7h7Zm-1 1h-5v5h5V8Z\"/>"
		},
		"format-indent-decrease": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h17v1H3Zm8-4v-1h9v1h-9Zm0-4v-1h9v1h-9Zm0-4V8h9v1h-9ZM3 5V4h17v1H3Zm0 7.5L8.5 18V7L3 12.5Zm1.414 0L7.5 9.414v6.172L4.414 12.5Z\"/>"
		},
		"format-indent-increase": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h17v1H3Zm8-4v-1h9v1h-9Zm0-4v-1h9v1h-9Zm0-4V8h9v1h-9ZM3 5V4h17v1H3Zm5.5 7.5L3 18V7l5.5 5.5Zm-1.414 0L4 9.414v6.172L7.086 12.5Z\"/>"
		},
		"format-italic": {
			"body": "<path fill=\"currentColor\" d=\"M6 17v-1h3l4.01-11H10V4h7v1h-2.99L10 16h3v1H6Z\"/>"
		},
		"format-line-spacing": {
			"body": "<path fill=\"currentColor\" d=\"M21 6v1H10V6h11Zm0 6v1H10v-1h11Zm0 6v1H10v-1h11ZM5 19.25L7.25 17l.75.664l-3.5 3.5l-3.5-3.5l.75-.664L4 19.25V5.75L1.75 8L1 7.336l3.5-3.5l3.5 3.5L7.25 8L5 5.75v13.5Z\"/>"
		},
		"format-list-bulleted": {
			"body": "<path fill=\"currentColor\" d=\"M20 18v1H7v-1h13Zm-16.5-.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM20 12v1H7v-1h13Zm-16.5-.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM20 6v1H7V6h13ZM3.5 5.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z\"/>"
		},
		"format-list-checks": {
			"body": "<path fill=\"currentColor\" d=\"M20 18v1H7v-1h13Zm0-6v1H7v-1h13Zm0-6v1H7V6h13ZM2 5h3v3H2V5Zm1 1v1h1V6H3Zm-1 5h3v3H2v-3Zm1 1v1h1v-1H3Zm-1 5h3v3H2v-3Zm1 1v1h1v-1H3Z\"/>"
		},
		"format-list-numbers": {
			"body": "<path fill=\"currentColor\" d=\"M2 10.998v-1h3v.9l-1.8 2.1H5v1H2v-.9l1.8-2.1H2Zm1-3v-3H2v-1h2v4H3Zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1v-.5H2ZM20 6v1H7V6h13Zm0 6v1H7v-1h13Zm0 6v1H7v-1h13Z\"/>"
		},
		"format-quote-close": {
			"body": "<path fill=\"currentColor\" d=\"M18 6v8l-1.95 4h-4.201l1.95-4H12V6h6Zm-1 7.77V7h-4v6h2.4l-1.951 4h1.975L17 13.77ZM11 6v8l-1.95 4H4.848l1.95-4H5V6h6Zm-1 7.77V7H6v6h2.4l-1.951 4h1.975L10 13.77Z\"/>"
		},
		"format-quote-open": {
			"body": "<path fill=\"currentColor\" d=\"M5 18v-8l1.95-4h4.201l-1.95 4H11v8H5Zm1-7.77V17h4v-6H7.6l1.951-4H7.576L6 10.23ZM12 18v-8l1.95-4h4.201l-1.95 4H18v8h-6Zm1-7.77V17h4v-6h-2.4l1.951-4h-1.975L13 10.23Z\"/>"
		},
		"format-underline": {
			"body": "<path fill=\"currentColor\" d=\"M17 11.5a5.5 5.5 0 1 1-11 0V4h1v7.5a4.5 4.5 0 1 0 9 0V4h1v7.5ZM5 21v-1h13v1H5Z\"/>"
		},
		"format-wrap-inline": {
			"body": "<path fill=\"currentColor\" d=\"M20 4v1H3V4h17Zm0 12v1h-6v-1h6Zm0 4v1H3v-1h17ZM7.5 8l4.5 9H3l4.5-9Zm0 2.241L4.616 16h5.768L7.5 10.241Z\"/>"
		},
		"format-wrap-square": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 8l4.5 9H7l4.5-9Zm0 2.241L8.616 16h5.768L11.5 10.241ZM3 16h2v1H3v-1Zm0-4h2v1H3v-1Zm0-4h2v1H3V8Zm15 0h2v1h-2V8Zm0 4h2v1h-2v-1Zm0 4h2v1h-2v-1Zm2 4v1H3v-1h17ZM3 4h17v1H3V4Z\"/>"
		},
		"format-wrap-tight": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 8l4.5 9H7l4.5-9Zm0 2.241L8.616 16h5.768L11.5 10.241ZM3 4h17v1H3V4Zm11 4h6v1h-6V8ZM3 8h6v1H3V8Zm0 4h4v1H3v-1Zm0 4h2v1H3v-1Zm15 0h2v1h-2v-1Zm-2-4h4v1h-4v-1ZM3 20h17v1H3v-1Z\"/>"
		},
		"format-wrap-top-bottom": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 8l4.5 9H7l4.5-9Zm0 2.241L8.616 16h5.768L11.5 10.241ZM3 4h17v1H3V4Zm17 16v1H3v-1h17Z\"/>"
		},
		"forum": {
			"body": "<path fill=\"currentColor\" d=\"M2 16.586L5.586 13H15a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10.586ZM2 18H1V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6l-4 4Zm19 2.586V10a2 2 0 0 0-2-2V7a3 3 0 0 1 3 3v12h-1l-4-4H8a3 3 0 0 1-2.761-1.825l.797-.797A2 2 0 0 0 8 17h9.414L21 20.586Z\"/>"
		},
		"fullscreen": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Zm5 3h7v7h-1V9.707l-7.146 7.146l-.708-.707L15.293 9H10V8Z\"/>"
		},
		"fullscreen-close": {
			"body": "<path fill=\"currentColor\" d=\"M18 21H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3Zm0-1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13Zm-5-3H6v-7h1v5.293l7.146-7.147l.708.708L7.707 16H13v1Z\"/>"
		},
		"gift": {
			"body": "<path fill=\"currentColor\" d=\"M4 13v8h7v-8H4Zm8 0v8h7v-8h-7Zm8 0v9H3v-9H2V7h3.035L5 6.5a3.5 3.5 0 0 1 6.5-1.804A3.5 3.5 0 0 1 18 6.5l-.035.5H21v6h-1ZM3 8v4h8V8H3Zm17 4V8h-8v4h8Zm-3.05-5l.05-.5a2.5 2.5 0 0 0-5 0V7h4.95ZM11 7v-.5a2.5 2.5 0 0 0-5 0l.05.5H11Z\"/>"
		},
		"grid": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v3h5V4H5ZM3 19a2 2 0 0 0 2 2h3v-5H3v3Zm5-9H3v5h5v-5Zm10 11a2 2 0 0 0 2-2v-3h-5v5h3Zm2-11h-5v5h5v-5Zm0-4a2 2 0 0 0-2-2h-3v5h5V6ZM9 4v5h5V4H9Zm0 17h5v-5H9v5Zm5-11H9v5h5v-5Z\"/>"
		},
		"grid-large": {
			"body": "<path fill=\"currentColor\" d=\"M12 4v8h8V6a2 2 0 0 0-2-2h-6Zm8 9h-8v8h6a2 2 0 0 0 2-2v-6Zm-9 8v-8H3v6a2 2 0 0 0 2 2h6Zm-8-9h8V4H5a2 2 0 0 0-2 2v6Zm2-9h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z\"/>"
		},
		"grid-off": {
			"body": "<path fill=\"currentColor\" d=\"M.793 2.457L1.5 1.75L22.25 22.5l-.707.707l-1.78-1.78A2.986 2.986 0 0 1 18 22H5a3 3 0 0 1-3-3V6c0-.659.212-1.268.573-1.763l-1.78-1.78ZM5 3h13a3 3 0 0 1 3 3v13l-.093.743l-.907-.907V16h-2.836l-1-1H20v-5h-5v3.836l-1-1V10h-2.836l-1-1H14V4H9v3.836l-1-1V4H5.164l-.907-.907L5 3ZM3 6v3h4.336L3.293 4.957A1.99 1.99 0 0 0 3 6Zm6 9h4.336L9 10.664V15Zm6 6h3c.382 0 .74-.107 1.043-.293L15 16.664V21ZM3 19a2 2 0 0 0 2 2h3v-5H3v3Zm5-9H3v5h5v-5Zm12-4a2 2 0 0 0-2-2h-3v5h5V6ZM9 21h5v-5H9v5Z\"/>"
		},
		"group": {
			"body": "<path fill=\"currentColor\" d=\"M7 8v5h6V8H7ZM2 3h3v1h13V3h3v3h-1v13h1v3h-3v-1H5v1H2v-3h1V6H2V3Zm3 16v1h13v-1h1V6h-1V5H5v1H4v13h1ZM6 7h8v4h3v7H8v-4H6V7Zm8 7H9v3h7v-5h-2v2ZM3 4v1h1V4H3Zm16 0v1h1V4h-1Zm0 16v1h1v-1h-1ZM3 20v1h1v-1H3Z\"/>"
		},
		"hamburger": {
			"body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 4h9a5 5 0 0 1 5 5H2a5 5 0 0 1 5-5Zm9 1H7a4.002 4.002 0 0 0-3.874 3h16.748A4.002 4.002 0 0 0 16 5Zm5 11a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5h19ZM7 20h9a4.002 4.002 0 0 0 3.874-3H3.126c.444 1.725 2.01 3 3.874 3Zm5.5-10l2 2l2-2H19a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h8.5Zm2 3.414L12.086 11H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2.086L14.5 13.414Z\"/>"
		},
		"heart": {
			"body": "<path fill=\"currentColor\" d=\"M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257Zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96Z\"/>"
		},
		"heart-half": {
			"body": "<path fill=\"currentColor\" d=\"M4.244 12.252L11.5 19.51v1.414l-7.962-7.96A5.25 5.25 0 1 1 11.5 6.167v.973h-.56a4.25 4.25 0 1 0-6.697 5.111Z\"/>"
		},
		"heart-off": {
			"body": "<path fill=\"currentColor\" d=\"M1.793 3.457L2.5 2.75L19.25 19.5l-.707.707l-3.163-3.163l-3.88 3.88l-7.962-7.962A5.234 5.234 0 0 1 2 9.25c0-1.535.659-2.916 1.71-3.876L1.792 3.457Zm2.45 8.796l7.257 7.256l3.172-3.173L4.417 6.082A4.24 4.24 0 0 0 3 9.25a4.23 4.23 0 0 0 1.244 3.002Zm14.513 0a4.25 4.25 0 1 0-6.697-5.111h-1.118A4.248 4.248 0 0 0 7.25 5l-.974.112l-.803-.804A5.24 5.24 0 0 1 7.25 4c1.748 0 3.296.854 4.25 2.167a5.25 5.25 0 1 1 7.962 6.795l-2.668 2.668l-.708-.708l2.67-2.67Z\"/>"
		},
		"help": {
			"body": "<path fill=\"currentColor\" d=\"M11 22v-2h1v2h-1Zm0-4.5c0-4.5 5-6 5-9A4.5 4.5 0 0 0 7.027 8H6.022A5.5 5.5 0 0 1 17 8.5c0 3.5-5 4.5-5 9v.5h-1v-.5Z\"/>"
		},
		"help-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 4a8.5 8.5 0 1 0 .001 17.001A8.5 8.5 0 0 0 11.5 4Zm0-1a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3ZM11 17h1v2h-1v-2Zm.5-11A3.5 3.5 0 0 1 15 9.5c0 .897-.699 1.519-1.439 2.176l-.935.903c-.588.674-.652 1.955-.627 2.392V15H11c-.004-.052-.102-1.964.874-3.079l1.022-.992C13.488 10.403 14 9.948 14 9.5a2.5 2.5 0 1 0-5 0H8A3.5 3.5 0 0 1 11.5 6Z\"/>"
		},
		"home": {
			"body": "<path fill=\"currentColor\" d=\"m16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414ZM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2Z\"/>"
		},
		"inbox": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v8h5v.5a2.5 2.5 0 0 0 5 0V15h5V7a2 2 0 0 0-2-2H6ZM4 18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2h-4.035a3.501 3.501 0 0 1-6.93 0H4v2Z\"/>"
		},
		"information": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17ZM11 8v2h1V8h-1Zm0 4v5h1v-5h-1Z\"/>"
		},
		"label": {
			"body": "<path fill=\"currentColor\" d=\"M6 6h8c.971 0 1.834.461 2.383 1.177l4.159 5.323l-4.16 5.323A2.995 2.995 0 0 1 14 19H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm9.578 11.23l3.695-4.73l-3.695-4.73l-.002-.001A1.996 1.996 0 0 0 14 7H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8c.64 0 1.21-.3 1.576-.769l.002-.002Z\"/>"
		},
		"layers": {
			"body": "<path fill=\"currentColor\" d=\"m2.7 11.02l8.667-6.772l8.934 6.98L11.633 18l-8.934-6.98Zm16 .189l-7.309-5.71l-7.068 5.521l7.31 5.711l7.068-5.522ZM11.634 21L2.7 14.02l.788-.615l8.122 6.345l7.88-6.157l.812.635L11.633 21Z\"/>"
		},
		"lightbulb": {
			"body": "<path fill=\"currentColor\" d=\"M14 20a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h1Zm1-3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2.022a6.5 6.5 0 1 1 7 0V17Zm-6 0a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.6a5.5 5.5 0 1 0-5 0V17Z\"/>"
		},
		"lightbulb-on": {
			"body": "<path fill=\"currentColor\" d=\"M14 20a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h1Zm1-3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2.022a6.5 6.5 0 1 1 7 0V17Zm-6 0a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.6a5.5 5.5 0 1 0-5 0V17Zm-.871-6.879L10.5 7.75l2 2L14.25 8l.707.707l-2.457 2.457l-2-2l-1.664 1.664l-.707-.707Z\"/>"
		},
		"link": {
			"body": "<path fill=\"currentColor\" d=\"M8 13v-1h7v1H8Zm7.5-6a5.5 5.5 0 1 1 0 11H13v-1h2.5a4.5 4.5 0 1 0 0-9H13V7h2.5Zm-8 11a5.5 5.5 0 1 1 0-11H10v1H7.5a4.5 4.5 0 1 0 0 9H10v1H7.5Z\"/>"
		},
		"link-variant": {
			"body": "<path fill=\"currentColor\" d=\"M10.728 14.965a.5.5 0 1 1-.423.906v.001a4.5 4.5 0 0 1-1.28-7.261l3.536-3.536a4.5 4.5 0 1 1 6.364 6.364l-1.634 1.633l-.15-1.264l1.077-1.076a3.5 3.5 0 0 0-4.95-4.95L9.732 9.318a3.5 3.5 0 0 0 .995 5.648v-.001Zm-6.653 4.96a4.5 4.5 0 0 1 0-6.364l1.634-1.633l.15 1.264l-1.077 1.076a3.5 3.5 0 1 0 4.95 4.95l3.536-3.536a3.5 3.5 0 0 0-.995-5.648v.001a.5.5 0 1 1 .422-.906v-.001a4.5 4.5 0 0 1 1.28 7.261l-3.536 3.536a4.5 4.5 0 0 1-6.364 0Z\"/>"
		},
		"loading": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 4A8.5 8.5 0 0 0 3 12.5H2A9.5 9.5 0 0 1 11.5 3v1Z\"/>"
		},
		"lock": {
			"body": "<path fill=\"currentColor\" fill-opacity=\".886\" d=\"M16 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3V6.5a4.5 4.5 0 1 1 9 0V8ZM7 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7Zm8-1V6.5a3.5 3.5 0 0 0-7 0V8h7Zm-3.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm0-1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z\"/>"
		},
		"lock-unlocked": {
			"body": "<path fill=\"currentColor\" fill-opacity=\".886\" d=\"M16 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h8V6.5A3.5 3.5 0 0 0 8.035 6H7.027A4.5 4.5 0 0 1 16 6.5V8ZM7 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7Zm4.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm0-1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z\"/>"
		},
		"login": {
			"body": "<path fill=\"currentColor\" d=\"M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3ZM3 12h10.25L10 8.75l.664-.75l4.5 4.5l-4.5 4.5l-.664-.75L13.25 13H3v-1Z\"/>"
		},
		"logout": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm3 9h11.25L16 8.75l.664-.75l4.5 4.5l-4.5 4.5l-.664-.75L19.25 13H8v-1Z\"/>"
		},
		"magnify": {
			"body": "<path fill=\"currentColor\" d=\"M9.5 4a6.5 6.5 0 0 1 4.932 10.734l5.644 5.644l-.707.707l-5.645-5.645A6.5 6.5 0 1 1 9.5 4Zm0 1a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z\"/>"
		},
		"magnify-minus": {
			"body": "<path fill=\"currentColor\" d=\"M9.5 4a6.5 6.5 0 0 1 4.932 10.734l5.644 5.644l-.707.707l-5.645-5.645A6.5 6.5 0 1 1 9.5 4Zm0 1a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11ZM7 10h5v1H7v-1Z\"/>"
		},
		"magnify-plus": {
			"body": "<path fill=\"currentColor\" d=\"M9.5 4a6.5 6.5 0 0 1 4.932 10.734l5.644 5.644l-.707.707l-5.645-5.645A6.5 6.5 0 1 1 9.5 4Zm0 1a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11ZM7 10h2V8h1v2h2v1h-2v2H9v-2H7v-1Z\"/>"
		},
		"map-marker": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm0 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm-4.7 4.357l4.7 7.73l4.7-7.73a5.5 5.5 0 1 0-9.4 0Zm10.254.52L11.5 22.012l-5.554-9.135a6.5 6.5 0 1 1 11.11 0h-.002Z\"/>"
		},
		"memory": {
			"body": "<path fill=\"currentColor\" d=\"M8 19a3 3 0 0 1-3-3v-1H3v-1h2v-3H3v-1h2V9a3 3 0 0 1 3-3h1V4h1v2h3V4h1v2h1a3 3 0 0 1 3 3v1h2v1h-2v3h2v1h-2v1a3 3 0 0 1-3 3h-1v2h-1v-2h-3v2H9v-2H8ZM8 7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8Zm1 8v-5h5v5H9Zm1-4v3h3v-3h-3Z\"/>"
		},
		"menu": {
			"body": "<path fill=\"currentColor\" d=\"M3 8V7h17v1H3Zm17 4v1H3v-1h17ZM3 17h17v1H3v-1Z\"/>"
		},
		"message": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.586L6.586 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.586ZM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4Z\"/>"
		},
		"message-alert": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.586L6.586 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.586ZM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4Zm8-16h1v5h-1V6Zm1 9h-1v-2h1v2Z\"/>"
		},
		"message-photo": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.586L6.586 17H18a2 2 0 0 0 2-2v-.086l-5.207-5.207l-5 5l-2.5-2.5L3 16.5v4.086ZM20 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9.086l4.293-4.293l2.5 2.5l5-5L20 13.5V6ZM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4ZM9 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z\"/>"
		},
		"message-processing": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.586L6.586 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.586ZM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4ZM6.5 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Zm5-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Zm5-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Z\"/>"
		},
		"message-reply": {
			"body": "<path fill=\"currentColor\" d=\"M20 20.586L16.414 17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v14.586ZM20 22h1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h11l4 4Z\"/>"
		},
		"message-text": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.586L6.586 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.586ZM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4ZM6 7h11v1H6V7Zm0 3h11v1H6v-1Zm0 3h8v1H6v-1Z\"/>"
		},
		"message-video": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.586L6.586 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.586ZM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4ZM17 7v7h-1l-2-2v2H6V7h8v2l2-2h1Zm-3 3.414v.172l2 2V8.414l-2 2ZM7 8v5h6V8H7Z\"/>"
		},
		"microphone": {
			"body": "<path fill=\"currentColor\" d=\"M11 21v-3.019A6.5 6.5 0 0 1 5 11.5V11h1v.5a5.5 5.5 0 1 0 11 0V11h1v.5a6.5 6.5 0 0 1-6 6.481V21h-1Zm.5-18A2.5 2.5 0 0 1 14 5.5v6a2.5 2.5 0 0 1-5 0v-6A2.5 2.5 0 0 1 11.5 3Zm0 1A1.5 1.5 0 0 0 10 5.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 11.5 4Z\"/>"
		},
		"microphone-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.793 4.457L3.5 3.75l11.762 11.762l.707.707L20.25 20.5l-.707.707l-4.354-4.354A6.465 6.465 0 0 1 12 17.98V21h-1v-3.019A6.5 6.5 0 0 1 5 11.5V11h1v.5a5.5 5.5 0 0 0 8.467 4.632l-2.239-2.24A2.5 2.5 0 0 1 9 11.5v-.836L2.793 4.457ZM17 11.5V11h1v.5a6.472 6.472 0 0 1-1.358 3.977l-.714-.714A5.475 5.475 0 0 0 17 11.5ZM11.5 3A2.5 2.5 0 0 1 14 5.5v6c0 .39-.09.759-.248 1.088l-.783-.783L13 11.5v-6a1.5 1.5 0 0 0-3 0v3.336l-1-1V5.5A2.5 2.5 0 0 1 11.5 3Zm-1.49 8.674a1.5 1.5 0 0 0 1.316 1.316l-1.316-1.316Z\"/>"
		},
		"minus": {
			"body": "<path fill=\"currentColor\" d=\"M5 13v-1h13.01L18 13H5Z\"/>"
		},
		"minus-box": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h9v1H7v-1ZM6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6Z\"/>"
		},
		"minus-circle": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h9v1H7v-1Zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Z\"/>"
		},
		"monitor": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.508L14 20h1v1H8v-1h1l.508-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm5.508 13L10 20h3l-.508-3h-1.984ZM5 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z\"/>"
		},
		"monitor-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.508L15 21h1v1H9v-1h1l.508-3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm5.508 13L11 21h3l-.508-3h-1.984ZM6 6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6ZM1 8a5 5 0 0 1 5-5h12v1H6a4 4 0 0 0-4 4v6H1V8Z\"/>"
		},
		"music": {
			"body": "<path fill=\"currentColor\" d=\"m8 6.104l11-1.117V16a3 3 0 1 1-1-2.236v-4.72l-9 .993V17a3 3 0 1 1-1-2.236v-8.66Zm1 .904V9.03l9-.993V6.094l-9 .914ZM8 17a2 2 0 1 0-4 0a2 2 0 0 0 4 0Zm10-1a2 2 0 1 0-4 0a2 2 0 0 0 4 0Z\"/>"
		},
		"music-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.793 4.457L3.5 3.75L20.25 20.5l-.707.707l-2.423-2.423a3 3 0 0 1-3.904-3.904L9 10.664V17a3 3 0 1 1-1-2.236v-5.1L2.793 4.457ZM8 6.104l11-1.117V16a2.98 2.98 0 0 1-.378 1.458l-.75-.75a2 2 0 0 0-2.579-2.579l-.751-.751A2.977 2.977 0 0 1 16 13c.768 0 1.47.289 2 .764v-4.72l-7.017.774l-.907-.906L18 8.038V6.094l-9 .914v.828l-1-1v-.732ZM14 16a2 2 0 0 0 2.312 1.976l-2.288-2.288A2.015 2.015 0 0 0 14 16Zm-6 1a2 2 0 1 0-4 0a2 2 0 0 0 4 0Z\"/>"
		},
		"nfc": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5Zm8 8.5a1.5 1.5 0 1 1-2-1.415V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1H7v9h9V8h-4v3.085a1.5 1.5 0 0 1 1 1.415Zm-1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Z\"/>"
		},
		"note": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a3 3 0 0 1-3-3V5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4Zm-2-3a2 2 0 0 0 2 2h3.586L14 5.414V9ZM5 4h9l7 7v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z\"/>"
		},
		"note-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M17 12a3 3 0 0 1-3-3V5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4Zm-2-3a2 2 0 0 0 2 2h3.586L15 5.414V9ZM6 4h9l7 7v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 19a5 5 0 0 1-5-5V8h1v10a4 4 0 0 0 4 4h12v1H6Z\"/>"
		},
		"note-plus": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a3 3 0 0 1-3-3V5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4Zm-2-3a2 2 0 0 0 2 2h3.586L14 5.414V9ZM5 4h9l7 7v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm2 14v-2H5v-1h2v-2h1v2h2v1H8v2H7Z\"/>"
		},
		"note-text": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a3 3 0 0 1-3-3V5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4Zm-2-3a2 2 0 0 0 2 2h3.586L14 5.414V9ZM5 4h9l7 7v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 4h6v1H5V8Zm0 4h6v1H5v-1Zm0 4h13v1H5v-1Z\"/>"
		},
		"paperclip": {
			"body": "<path fill=\"currentColor\" d=\"M17 7v10.5c0 3.04-2.46 5.5-5.5 5.5S6 20.54 6 17.5V6c0-2.21 1.79-4 4-4s4 1.79 4 4v10.5a2.5 2.5 0 0 1-5 0V7h1v9.5a1.5 1.5 0 0 0 3 0V6a3 3 0 0 0-6 0v11.5a4.5 4.5 0 1 0 9 0V7h1Z\"/>"
		},
		"pause": {
			"body": "<path fill=\"currentColor\" d=\"M13 19V6h4v13h-4Zm-7 0V6h4v13H6ZM7 7v11h2V7H7Zm7 0v11h2V7h-2Z\"/>"
		},
		"pencil": {
			"body": "<path fill=\"currentColor\" d=\"m19.706 8.042l-2.332 2.332l-3.75-3.75l2.332-2.332a.999.999 0 0 1 1.414 0l2.336 2.336a.999.999 0 0 1 0 1.414ZM2.999 17.248L13.064 7.184l3.75 3.75L6.749 20.998H3v-3.75ZM16.621 5.044l-1.54 1.539l2.337 2.335l1.538-1.539l-2.335-2.335Zm-1.264 5.935l-2.335-2.336L4 17.664V20h2.336l9.021-9.021Z\"/>"
		},
		"phone": {
			"body": "<path fill=\"currentColor\" d=\"M19.5 22c.827 0 1.5-.673 1.5-1.5V17c0-.827-.673-1.5-1.5-1.5c-1.17 0-2.32-.184-3.42-.547a1.523 1.523 0 0 0-1.523.363l-1.44 1.44a14.655 14.655 0 0 1-5.885-5.883L8.66 9.436c.412-.382.56-.963.384-1.522A10.872 10.872 0 0 1 8.5 4.5C8.5 3.673 7.827 3 7 3H3.5C2.673 3 2 3.673 2 4.5C2 14.15 9.85 22 19.5 22ZM3.5 4H7a.5.5 0 0 1 .5.5c0 1.277.2 2.531.593 3.72a.473.473 0 0 1-.127.497L6.01 10.683c1.637 3.228 4.055 5.646 7.298 7.297l1.949-1.95a.516.516 0 0 1 .516-.126c1.196.396 2.45.596 3.727.596c.275 0 .5.225.5.5v3.5c0 .275-.225.5-.5.5C10.402 21 3 13.598 3 4.5a.5.5 0 0 1 .5-.5Z\"/>"
		},
		"picture": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11.586l4.293-4.293l2.5 2.5l5-5L20 16V6a2 2 0 0 0-2-2H5Zm4.793 13.207l-2.5-2.5L3 19a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1.586l-5.207-5.207l-5 5ZM7.5 6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm0 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z\"/>"
		},
		"pin": {
			"body": "<path fill=\"currentColor\" d=\"M14 12.415V5h1V4H8v1h1v7.414l-2 2V15h9v-.586l-2-2Zm3 1.583v2L12 16v4.5l-.5 1.5l-.5-1.5V16l-5-.002v-2h.002L8 12V5.998H7v-3h8.999v3h-1V12l2 1.998Z\"/>"
		},
		"pin-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.793 4.457L3.5 3.75L20.25 20.5l-.707.707L14.335 16H12v4.5l-.5 1.5l-.5-1.5V16l-5-.002v-2h.002L8 12V9.664L2.793 4.457ZM14 12.415V5h1V4H8v1h1v2.836l-1-1v-.838h-.838L7 5.835V2.998h9v3h-1V12l2 1.998v1.837l-1-1v-.42l-2-2Zm-5-.001l-2.001 2V15h6.336L9 10.665v1.749Z\"/>"
		},
		"play": {
			"body": "<path fill=\"currentColor\" d=\"M18.402 12.5L9 18.375L8 19V6l10.402 6.5Zm-1.887 0L9 7.804v9.392l7.515-4.696Z\"/>"
		},
		"plus": {
			"body": "<path fill=\"currentColor\" d=\"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5Z\"/>"
		},
		"plus-box": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1ZM6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6Z\"/>"
		},
		"plus-circle": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1Zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Z\"/>"
		},
		"power": {
			"body": "<path fill=\"currentColor\" d=\"M11 13V4h1v9h-1Zm8-.5A7.5 7.5 0 1 1 7.595 6.095l.731.731a6.5 6.5 0 1 0 6.348 0l.73-.73A7.496 7.496 0 0 1 19 12.5Z\"/>"
		},
		"presentation": {
			"body": "<path fill=\"currentColor\" d=\"M2 4h8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h8v1h-1v11h-5.732l1.608 6H14.84l-1.607-6H9.767L8.16 22H7.124l1.608-6H3V5H2V4Zm17 11V5H4v10h15Z\"/>"
		},
		"presentation-play": {
			"body": "<path fill=\"currentColor\" d=\"M2 4h8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h8v1h-1v11h-5.732l1.608 6H14.84l-1.607-6H9.767L8.16 22H7.124l1.608-6H3V5H2V4Zm17 11V5H4v10h15Zm-9-8h1l3 3l-3 3h-1V7Zm1 1.414v3.172L12.586 10L11 8.414Z\"/>"
		},
		"printer": {
			"body": "<path fill=\"currentColor\" d=\"M17 3.998v5h1a3 3 0 0 1 3 3v5h-4v4H6v-4H2v-5a3 3 0 0 1 3-3h1v-5h11Zm1 9a1 1 0 1 1 0-2a1 1 0 1 1 0 2ZM3 12v4h3v-2h11v2h3v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Zm13 8v-5H7v5h9ZM7 5v4h9V5H7Z\"/>"
		},
		"redo-variant": {
			"body": "<path fill=\"currentColor\" d=\"M17 20v-1h-1v1h1ZM10 8a6 6 0 1 0 0 12h4v-1h-4a5 5 0 0 1 0-10h7.086l-3.036 3.036l.707.707L19 8.5l-4.243-4.243l-.707.707L17.086 8H10Z\"/>"
		},
		"refresh": {
			"body": "<path fill=\"currentColor\" d=\"M4.996 5h5v5h-1V6.493a6.502 6.502 0 0 0 2.504 12.5a6.5 6.5 0 0 0 1.496-12.827V5.142A7.5 7.5 0 1 1 7.744 6H4.996V5Z\"/>"
		},
		"repeat": {
			"body": "<path fill=\"currentColor\" d=\"m20 7.5l-3.535 3.536l-.708-.708L18.086 8H6v4H5V7h13.086l-2.329-2.328l.708-.708L20 7.5ZM17 17v-4h1v5H4.914l2.329 2.328l-.707.707L3 17.5l3.536-3.536l.707.708L4.914 17H17Z\"/>"
		},
		"repeat-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.793 4.457L3.5 3.75L20.25 20.5l-.707.707L16.336 18H4.914l2.329 2.328l-.707.707L3 17.5l3.536-3.536l.707.708L4.914 17h10.422l-9-9H6v4H5V7h.336L2.793 4.457ZM20 7.5l-3.535 3.536l-.708-.708L18.086 8H9.164l-1-1h9.922l-2.329-2.328l.708-.708L20 7.5ZM17 13h1v3.836l-1-1V13Z\"/>"
		},
		"repeat-once": {
			"body": "<path fill=\"currentColor\" d=\"m20 7.5l-3.535 3.536l-.708-.708L18.086 8H6v4H5V7h13.086l-2.329-2.328l.708-.708L20 7.5ZM17 17v-4h1v5H4.914l2.329 2.328l-.707.707L3 17.5l3.536-3.536l.707.708L4.914 17H17Zm-7-3h1v-3h-1v-1h2v4h1v1h-3v-1Z\"/>"
		},
		"rewind": {
			"body": "<path fill=\"currentColor\" d=\"m1 12.5l9.402 5.875l1 .625v-5.624l8 5l1 .624V6l-9 5.624V6L1 12.5Zm1.887 0l7.515-4.696v9.392L2.887 12.5Zm9 0l7.515-4.696v9.392L11.887 12.5Z\"/>"
		},
		"rss": {
			"body": "<path fill=\"currentColor\" d=\"M5 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-3-6c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10v-1Zm0-4c8.284 0 15 6.716 15 15h-1C16 14.268 9.732 8 2 8V7Zm0-4c10.493 0 19 8.507 19 19h-1c0-9.941-8.059-18-18-18V3Z\"/>"
		},
		"script": {
			"body": "<path fill=\"currentColor\" d=\"M3 19a2 2 0 0 0 2 2h6.764A2.989 2.989 0 0 1 11 19H3Zm11 2a2 2 0 0 0 2-2V6c0-.768.289-1.47.764-2H8a2 2 0 0 0-2 2v12h6v1a2 2 0 0 0 2 2ZM5 6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v2h-5v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1h3V6Zm16 1V6a2 2 0 0 0-4 0v1h4Z\"/>"
		},
		"seek-next": {
			"body": "<path fill=\"currentColor\" d=\"M15.402 12.5L5 6v13l1-.625l9.402-5.875Zm-1.887 0L6 17.196V7.804l7.515 4.696ZM18 6h-1v13h1V6Z\"/>"
		},
		"seek-previous": {
			"body": "<path fill=\"currentColor\" d=\"M7.598 12.5L18 6v13l-1-.625L7.598 12.5Zm1.887 0L17 17.196V7.804L9.485 12.5ZM5 6h1v13H5V6Z\"/>"
		},
		"shape-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Z\"/>"
		},
		"shape-hexagon": {
			"body": "<path fill=\"currentColor\" d=\"m6.593 21l-4.905-8.494L6.6 4h9.808l4.908 8.5l-4.908 8.5H6.593ZM15.83 5H7.177l-4.334 7.506L7.17 20h8.66l4.33-7.5L15.83 5Z\"/>"
		},
		"shape-octagon": {
			"body": "<path fill=\"currentColor\" d=\"M3 16.011V8.98L7.98 4h7.04L20 8.98v7.046L15.025 21H7.99L3 16.011ZM8.393 5L4 9.393v6.204L8.403 20h6.208L19 15.611V9.393L14.607 5H8.393Z\"/>"
		},
		"shape-rhombus": {
			"body": "<path fill=\"currentColor\" d=\"M2.586 12.5L11.5 3.586l8.914 8.914l-8.914 8.914L2.586 12.5ZM11.5 5L4 12.5l7.5 7.5l7.5-7.5L11.5 5Z\"/>"
		},
		"shape-square": {
			"body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 4h17v17H3V4Zm1 1v15h15V5H4Z\"/>"
		},
		"shape-triangle": {
			"body": "<path fill=\"currentColor\" d=\"M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536Z\"/>"
		},
		"shield": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3.108L19 6.63v5.013c0 4.81-3.216 9.252-7.5 10.392C7.216 20.896 4 16.453 4 11.644V6.631m7.5 16.438c4.898-1.227 8.5-6.125 8.5-11.425V6l-8.5-4L3 6v5.644c0 5.3 3.602 10.198 8.5 11.425Z\"/>"
		},
		"shuffle": {
			"body": "<path fill=\"currentColor\" d=\"M13 5h6v6h-1V6.707L4.711 19.996l-.707-.707L17.293 6H13V5Zm0 14h4.293l-4.586-4.586l.707-.707L18 18.293V14h1v6h-6v-1ZM4.004 5.711l.707-.707l5.582 5.582l-.707.707L4.004 5.71Z\"/>"
		},
		"signal": {
			"body": "<path fill=\"currentColor\" d=\"M2 21v-5h4v5H2Zm1-4v3h2v-3H3Zm4 4v-9h4v9H7Zm1-8v7h2v-7H8Zm4 8V8h4v13h-4Zm1-12v11h2V9h-2Zm4 12V4h4v17h-4Zm1-16v15h2V5h-2Z\"/>"
		},
		"sim": {
			"body": "<path fill=\"currentColor\" d=\"m11 3l-7 7v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5Zm.414 1H16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.586L11.414 4ZM8 11v4h1v-4H8Zm3 0v2h1v-2h-1Zm3 0v4h1v-4h-1Zm-3 4v4h1v-4h-1Zm-3 2v2h1v-2H8Zm6 0v2h1v-2h-1Z\"/>"
		},
		"sim-alert": {
			"body": "<path fill=\"currentColor\" d=\"m11 3l-7 7v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5Zm.414 1H16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.586L11.414 4ZM11 9v5h1V9h-1Zm0 7v2h1v-2h-1Z\"/>"
		},
		"sim-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.5 2.75l-.707.707l4.365 4.385L4 10v9a3 3 0 0 0 3 3h9a2.971 2.971 0 0 0 2.643-1.615l1.814 1.822l.793-.707L7.582 7.832l-.707-.707L2.5 2.75ZM11 3L7.582 6.418l.707.707L11.414 4H16a2 2 0 0 1 2 2v10.836l1 1V6a3 3 0 0 0-3-3h-5ZM6.863 8.55l11.024 11.075A1.99 1.99 0 0 1 16 21H7a2 2 0 0 1-2-2v-8.586l1.863-1.863Z\"/>"
		},
		"sitemap": {
			"body": "<path fill=\"currentColor\" d=\"M9 3h5v5h-2v4h5a3 3 0 0 1 3 3v2h2v5h-5v-5h2v-2a2 2 0 0 0-2-2h-5v4h2v5H9v-5h2v-4H6a2 2 0 0 0-2 2v2h2v5H1v-5h2v-2a3 3 0 0 1 3-3h5V8H9V3Zm4 4V4h-3v3h3ZM5 21v-3H2v3h3Zm8 0v-3h-3v3h3Zm8 0v-3h-3v3h3Z\"/>"
		},
		"sleep": {
			"body": "<path fill=\"currentColor\" d=\"M2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2v-1Zm7-4h5v1l-3.74 5H14v1H9v-1l3.75-5H9V9Zm7-4h5v1l-3.74 5H21v1h-5v-1l3.75-5H16V5Z\"/>"
		},
		"sleep-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.793 4.457L3.5 3.75L20.25 20.5l-.707.707L14 15.664V16H9v-1l1.858-2.478l-8.065-8.065ZM2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2v-1Zm12-4v1l-1.214 1.622l-.716-.716l.68-.906h-1.586l-1-1H14Zm-3.74 6h3.076l-1.76-1.76L10.259 15ZM16 5h5v1l-3.74 5H21v1h-5v-1l3.75-5H16V5Z\"/>"
		},
		"spellcheck": {
			"body": "<path fill=\"currentColor\" d=\"m8.5 17.5l.707-.707l3.5 3.5L20.5 12.5l.707.707l-8.5 8.5L8.5 17.5ZM4.712 13L3.5 16h-1L7.348 4H8.75l4.848 12h-1l-1.212-3H4.712Zm.404-1h5.866L8.05 4.74L5.116 12Z\"/>"
		},
		"star": {
			"body": "<path fill=\"currentColor\" d=\"M12.86 10.442L11 6.06l-1.862 4.387l-4.743.415l3.596 3.127l-1.07 4.64l4.085-2.455l4.08 2.452l-1.071-4.644l3.593-3.123l-4.748-.416Zm3.731 10.253l-5.585-3.356l-5.59 3.359l1.466-6.35L1.96 10.07l6.491-.567L11 3.5l2.546 5.998l6.496.569l-4.918 4.275l1.467 6.353Z\"/>"
		},
		"star-half": {
			"body": "<path fill=\"currentColor\" d=\"m11 6.06l-1.862 4.386l-4.743.415l3.596 3.127l-1.07 4.64L11 16.175v1.167l-5.584 3.355l1.466-6.35L1.96 10.07l6.491-.567L11 3.5v2.56Z\"/>"
		},
		"stop": {
			"body": "<path fill=\"currentColor\" d=\"M17 18H6V7h11v11ZM7 8v9h9V8H7Z\"/>"
		},
		"tab": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8h-8V5H6Zm13 2a2 2 0 0 0-2-2h-5v4h7V7Z\"/>"
		},
		"tab-plus": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8h-8V5H6Zm13 2a2 2 0 0 0-2-2h-5v4h7V7ZM8 18v-2H6v-1h2v-2h1v2h2v1H9v2H8Z\"/>"
		},
		"table": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h11a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3ZM4 17a2 2 0 0 0 2 2h5v-3H4v1Zm7-5H4v3h7v-3Zm6 7a2 2 0 0 0 2-2v-1h-7v3h5Zm2-7h-7v3h7v-3ZM4 11h7V8H4v3Zm8 0h7V8h-7v3Z\"/>"
		},
		"taco": {
			"body": "<path fill=\"currentColor\" d=\"M3.5 18A2.5 2.5 0 0 1 1 15.5C1 11.358 4.806 8 9.5 8c.689 0 1.359.072 2 .209a9.606 9.606 0 0 1 2-.209c4.694 0 8.5 3.358 8.5 7.5a2.5 2.5 0 0 1-2.5 2.5h-16ZM2 15.5a1.5 1.5 0 0 0 3 0c0-2.776 1.71-5.2 4.25-6.496C5.223 9.118 2 11.983 2 15.5ZM19.5 17a1.5 1.5 0 0 0 1.5-1.5c0-3.59-3.358-6.5-7.5-6.5C9.358 9 6 11.91 6 15.5c0 .563-.186 1.082-.5 1.5h14Z\"/>"
		},
		"tag": {
			"body": "<path fill=\"currentColor\" d=\"M15.62 21.119a3 3 0 0 1-4.243 0l-8.323-8.123C2.45 12.448 2 11.63 2 10.75V6a3 3 0 0 1 3-3h4.75c.88 0 1.698.451 2.246 1.054l8.073 8.373a3 3 0 0 1 0 4.242l-4.45 4.45Zm-.708-.707l4.45-4.45a2 2 0 0 0 0-2.828l-8.25-8.55C10.776 4.197 10.302 4 9.75 4l-4.777-.027C3.87 3.973 3 4.895 3 6v4.75c0 .552.197 1.026.584 1.362l8.5 8.3a2 2 0 0 0 2.828 0ZM6.5 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm0 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z\"/>"
		},
		"television": {
			"body": "<path fill=\"currentColor\" d=\"M8 21v-1h1v-1H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5v1h1v1H8Zm2-2v1h3v-1h-3ZM4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Z\"/>"
		},
		"thumb-down": {
			"body": "<path fill=\"currentColor\" d=\"M21 15h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1Zm0-1V5h-3v9h3ZM5.284 5.975l-3.001 5c-.18.3-.283.65-.283 1.025v1a2 2 0 0 0 2 2h5.61l-1.458 5.44l-.004.018a.999.999 0 0 0 .258.966l6.009-6.009c.361-.363.585-.863.585-1.415V7a2 2 0 0 0-2-2H7c-.73 0-1.368.39-1.716.975ZM1 12c0-.594.172-1.147.47-1.612l2.906-4.843A3 3 0 0 1 7 4h6a3 3 0 0 1 3 3v7a2.99 2.99 0 0 1-.877 2.12l-6.717 6.718l-.707-.707a2 2 0 0 1-.507-1.97L8.307 16H4a3 3 0 0 1-3-3v-1Z\"/>"
		},
		"thumb-up": {
			"body": "<path fill=\"currentColor\" d=\"M2 10h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm0 1v9h3v-9H2Zm15.716 8.025l3.001-5c.18-.3.283-.65.283-1.025v-1a2 2 0 0 0-2-2h-5.61l1.457-5.44l.005-.018a1 1 0 0 0-.258-.966L8.585 9.585A1.994 1.994 0 0 0 8 11v7a2 2 0 0 0 2 2h6c.73 0 1.368-.39 1.716-.975ZM22 13c0 .594-.172 1.147-.47 1.612l-2.906 4.843A3 3 0 0 1 16 21h-6a3 3 0 0 1-3-3v-7c0-.828.335-1.577.877-2.12l6.717-6.718l.707.707a2 2 0 0 1 .507 1.97L14.693 9H19a3 3 0 0 1 3 3v1Z\"/>"
		},
		"thumbs-up-down": {
			"body": "<path fill=\"currentColor\" d=\"M10.904 8.428L11 8a1 1 0 0 0-1-1H4.926l.921-3.44l.005-.018a1 1 0 0 0-.258-.965L1.585 6.585A1.994 1.994 0 0 0 1 8v4a2 2 0 0 0 2 2h4a2 2 0 0 0 1.807-1.142h-.002l2.1-4.43ZM7 15H3a3 3 0 0 1-3-3V8c0-.827.335-1.577.877-2.12l4.717-4.718l.707.707a2 2 0 0 1 .507 1.97L6.23 6H10a2 2 0 0 1 1.765 2.941L9.764 13.17A3 3 0 0 1 7 15Zm5.096 1.572L12 17a1 1 0 0 0 1 1h5.074l-.922 3.44l-.004.018a1 1 0 0 0 .258.966l4.009-4.01c.361-.362.585-.862.585-1.414v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-1.807 1.142h.002l-2.1 4.43ZM16 10h4a3 3 0 0 1 3 3v4a2.99 2.99 0 0 1-.877 2.12l-4.717 4.718l-.707-.707a2 2 0 0 1-.507-1.97L16.77 19H13a2 2 0 0 1-1.765-2.941l2.001-4.228A3 3 0 0 1 16 10Z\"/>"
		},
		"tooltip": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3.5l-3 3l-3-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.914l2.586 2.586L14.086 18H18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z\"/>"
		},
		"tooltip-text": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3.5l-3 3l-3-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.914l2.586 2.586L14.086 18H18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Zm0 3h13v1H5V8Zm0 3h12v1H5v-1Zm0 3h8v1H5v-1Z\"/>"
		},
		"trophy": {
			"body": "<path fill=\"currentColor\" d=\"M7 22a4 4 0 0 1 4-4v-1a5.002 5.002 0 0 1-4.9-4H5a3 3 0 0 1-3-3V5h2c.768 0 1.47.289 2 .764V3h11v2.764A2.989 2.989 0 0 1 19 5h2v5a3 3 0 0 1-3 3h-1.1a5.002 5.002 0 0 1-4.9 4v1a4 4 0 0 1 4 4H7Zm5-3h-1a3.001 3.001 0 0 0-2.83 2h6.66A3.001 3.001 0 0 0 12 19Zm4-15H7v8a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V4Zm4 6V6h-1a2 2 0 0 0-2 2v4h1a2 2 0 0 0 2-2ZM3 10a2 2 0 0 0 2 2h1V8a2 2 0 0 0-2-2H3v4Z\"/>"
		},
		"truck": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 14a2.5 2.5 0 0 1 2.45 2H15V6H4a2 2 0 0 0-2 2v8h1.05a2.5 2.5 0 0 1 2.45-2Zm0 5a2.5 2.5 0 0 1-2.45-2H1V8a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v2h3l3 3.981V17h-2.05a2.5 2.5 0 0 1-4.9 0h-7.1a2.5 2.5 0 0 1-2.45 2Zm0-4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm12-1a2.5 2.5 0 0 1 2.45 2H21v-3.684L20.762 12H16v2.5a2.49 2.49 0 0 1 1.5-.5Zm0 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM16 9v2h4.009L18.5 9H16Z\"/>"
		},
		"undo-variant": {
			"body": "<path fill=\"currentColor\" d=\"M6 20v-1h1v1H6Zm7-12a6 6 0 1 1 0 12H9v-1h4a5 5 0 0 0 0-10H5.914l3.036 3.036l-.707.707L4 8.5l4.243-4.243l.707.707L5.914 8H13Z\"/>"
		},
		"unfold-less-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"M15.743 5.293L11.5 9.536L7.257 5.293l.707-.707L11.5 8.12l3.536-3.535l.707.707Zm0 14.414l-.707.707L11.5 16.88l-3.536 3.535l-.707-.707l4.243-4.243l4.243 4.243Z\"/>"
		},
		"unfold-less-vertical": {
			"body": "<path fill=\"currentColor\" d=\"M18.707 16.743L14.464 12.5l4.243-4.243l.707.707L15.88 12.5l3.535 3.535l-.707.708Zm-14.414 0l-.707-.707L7.12 12.5L3.586 8.964l.707-.707L8.536 12.5l-4.243 4.243Z\"/>"
		},
		"unfold-more-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"m15.743 8.828l-.707.708L11.5 6L7.964 9.536l-.707-.708L11.5 4.586l4.243 4.242Zm0 7.344L11.5 20.414l-4.243-4.242l.707-.708L11.5 19l3.536-3.536l.707.708Z\"/>"
		},
		"unfold-more-vertical": {
			"body": "<path fill=\"currentColor\" d=\"m15.172 16.743l-.708-.707L18 12.5l-3.536-3.536l.708-.707l4.242 4.243l-4.242 4.243Zm-7.344 0L3.586 12.5l4.242-4.243l.708.707L5 12.5l3.536 3.535l-.708.708Z\"/>"
		},
		"ungroup": {
			"body": "<path fill=\"currentColor\" d=\"M2 3h3v1h8V3h3v3h-1v4h3V9h3v3h-1v7h1v3h-3v-1h-7v1H8v-3h1v-3H5v1H2v-3h1V6H2V3Zm16 9v-1h-3v3h1v3h-3v-1h-3v3h1v1h7v-1h1v-7h-1Zm-5-6V5H5v1H4v8h1v1h4v-3H8V9h3v1h3V6h-1Zm-2 6h-1v3h3v-1h1v-3h-3v1ZM3 5h1V4H3v1Zm11 0h1V4h-1v1Zm-5 6h1v-1H9v1Zm10 0h1v-1h-1v1ZM9 21h1v-1H9v1Zm10 0h1v-1h-1v1ZM3 16h1v-1H3v1Zm11 0h1v-1h-1v1Z\"/>"
		},
		"upload": {
			"body": "<path fill=\"currentColor\" d=\"M12 18.164V5.914l5.25 5.25l.75-.664L11.5 4L5 10.5l.75.664L11 5.914v12.25h1ZM3 19h1v2h15v-2h1v3H3v-3Z\"/>"
		},
		"view-dashboard": {
			"body": "<path fill=\"currentColor\" d=\"M12 4h8v6h-8V4Zm0 17V11h8v10h-8Zm-9 0v-6h8v6H3Zm0-7V4h8v10H3Zm1-9v8h6V5H4Zm9 0v4h6V5h-6Zm0 7v8h6v-8h-6Zm-9 4v4h6v-4H4Z\"/>"
		},
		"view-module": {
			"body": "<path fill=\"currentColor\" d=\"M15 6h5v6h-5V6Zm-6 6V6h5v6H9Zm6 7v-6h5v6h-5Zm-6 0v-6h5v6H9Zm-6 0v-6h5v6H3Zm0-7V6h5v6H3Zm1-5v4h3V7H4Zm6 0v4h3V7h-3Zm6 0v4h3V7h-3ZM4 14v4h3v-4H4Zm6 0v4h3v-4h-3Zm6 0v4h3v-4h-3Z\"/>"
		},
		"volume": {
			"body": "<path fill=\"currentColor\" d=\"M21 12.5a7.5 7.5 0 0 1-7 7.484V18.98a6.5 6.5 0 0 0 0-12.96V5.016a7.5 7.5 0 0 1 7 7.484Zm-3 0a4.5 4.5 0 0 1-4 4.473v-1.008a3.501 3.501 0 0 0 0-6.93V8.027a4.5 4.5 0 0 1 4 4.473Zm-3 0a1.5 1.5 0 0 1-1 1.415v-2.83a1.5 1.5 0 0 1 1 1.415ZM2 9h4l4-4h2v15h-2l-4-4H2V9Zm1 6h3.414l4 4H11V6h-.586l-4 4H3v5Z\"/>"
		},
		"volume-minus": {
			"body": "<path fill=\"currentColor\" d=\"M2 9h4l4-4h2v15h-2l-4-4H2V9Zm1 6h3.414l4 4H11V6h-.586l-4 4H3v5Zm11-2v-1h7v1h-7Z\"/>"
		},
		"volume-mute": {
			"body": "<path fill=\"currentColor\" d=\"M2 9h4l4-4h2v15h-2l-4-4H2V9Zm1 6h3.414l4 4H11V6h-.586l-4 4H3v5Zm10.964.328l2.829-2.828l-2.829-2.828l.708-.708l2.828 2.829l2.828-2.829l.707.708l-2.828 2.828l2.828 2.828l-.707.707l-2.828-2.828l-2.828 2.828l-.708-.707Z\"/>"
		},
		"volume-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.793 4.457L3.5 3.75L20.25 20.5l-.707.707l-2.241-2.24A7.455 7.455 0 0 1 14 19.983V18.98a6.463 6.463 0 0 0 2.568-.749l-1.51-1.51c-.335.125-.69.21-1.058.25v-1.007a4.21 4.21 0 0 0 .254-.046L12 13.663V20h-2l-4-4H2V9h4l.668-.668l-3.875-3.875ZM21 12.5c0 2.03-.806 3.87-2.115 5.22l-.707-.707A6.5 6.5 0 0 0 14 6.02V5.016a7.5 7.5 0 0 1 7 7.484Zm-3 0c0 1.2-.47 2.292-1.237 3.099l-.707-.708A3.5 3.5 0 0 0 14 9.035V8.027a4.5 4.5 0 0 1 4 4.473Zm-3 0c0 .372-.136.713-.36.975l-.64-.64v-1.75a1.5 1.5 0 0 1 1 1.415ZM6.414 10H3v5h3.414l4 4H11v-6.336L7.375 9.04l-.96.961ZM10 5h2v5.836l-1-1V6h-.586L8.79 7.625l-.707-.707L10 5Z\"/>"
		},
		"volume-plus": {
			"body": "<path fill=\"currentColor\" d=\"M2 9h4l4-4h2v15h-2l-4-4H2V9Zm1 6h3.414l4 4H11V6h-.586l-4 4H3v5Zm14 1v-3h-3v-1h3V9h1v3h3v1h-3v3h-1Z\"/>"
		},
		"wallet": {
			"body": "<path fill=\"currentColor\" d=\"M4 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-1.77A3 3 0 0 0 21 15v-5a3 3 0 0 0-1-2.23V6a3 3 0 0 0-3-3H4Zm0 1h13a2 2 0 0 1 2 2v1.174A3 3 0 0 0 18 7h-6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h6a3 3 0 0 0 1-.174V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 4h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Zm2.5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm0 1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z\"/>"
		},
		"wifi": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 20.5l-4.514-5.99A7.467 7.467 0 0 1 11.5 13c1.695 0 3.258.562 4.514 1.51L11.5 20.5Zm0-1.662l3.067-4.07A6.472 6.472 0 0 0 11.5 14c-1.11 0-2.154.278-3.067.768l3.067 4.07ZM11.5 4a16.42 16.42 0 0 1 9.93 3.322l-.601.798A15.432 15.432 0 0 0 11.5 5a15.432 15.432 0 0 0-9.329 3.12l-.602-.798A16.427 16.427 0 0 1 11.5 4Zm0 6c2.372 0 4.561.787 6.32 2.114l-.602.798A9.458 9.458 0 0 0 11.5 11a9.458 9.458 0 0 0-5.718 1.912l-.601-.798A10.454 10.454 0 0 1 11.5 10Zm0-3a13.44 13.44 0 0 1 8.125 2.718l-.602.798A12.445 12.445 0 0 0 11.5 8c-2.824 0-5.43.937-7.523 2.517l-.602-.8A13.44 13.44 0 0 1 11.5 7Z\"/>"
		},
		"xml": {
			"body": "<path fill=\"currentColor\" d=\"m16.172 17.743l-.708-.707L20 12.5l-4.536-4.536l.708-.707l5.242 5.243l-5.242 5.243Zm-9.344 0L1.586 12.5l5.242-5.243l.708.707L3 12.5l4.536 4.535l-.708.708ZM12.732 5h1l-3.463 15h-1l3.463-15Z\"/>"
		}
	},
	"width": 24,
	"height": 24
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1650683686611, function(require, module, exports) {
module.exports = {
	"prefix": "mdi-light",
	"name": "Material Design Light",
	"total": 267,
	"author": {
		"name": "Austin Andrews",
		"url": "https://github.com/Templarian/MaterialDesignLight"
	},
	"license": {
		"title": "Open Font License",
		"spdx": "OFL-1.1",
		"url": "https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md"
	},
	"samples": [
		"cart",
		"home",
		"login"
	],
	"height": 24,
	"category": "General",
	"palette": false
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1650683686609);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map