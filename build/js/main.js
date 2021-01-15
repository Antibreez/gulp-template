(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _test = require("./modules/test1");

var _test2 = _interopRequireDefault(require("./modules/test2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _test2.default)();
console.log(_test.test1);

},{"./modules/test1":2,"./modules/test2":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test1 = void 0;

var makeLog = function makeLog() {
  return "fooBar";
};

var dog = "dog";
var test1 = {
  foo: "foo",
  bar: "bar",
  fooBar: makeLog()
};
exports.test1 = test1;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var makeLog = function makeLog() {
  var arr = [1, 2, 3, 4];
  var arr1 = [5, 6, 7];
  var newArr = [].concat(arr, arr1);
  console.log(newArr);
};

var _default = makeLog;
exports.default = _default;

},{}]},{},[1])

//# sourceMappingURL=main.js.map
