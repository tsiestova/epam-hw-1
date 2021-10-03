/******/ (() => { // webpackBootstrap
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/js/hw-2.js ***!
  \************************/
/**
 *
 * @param {string} title
 * @return {string} VALID OR INVALID
 */
function validateTitle(title) {
  const specialSymbols = [' ', '!', ':', '-', '?', '.', ','];

  // type of title 'string'
  if (typeof title !== 'string') {
    return 'Incorrect input data';
  }

  // check the length of title
  if (title.length < 2 || title.length > 20) {
    return 'INVALID';
  }

  // check if first letter is uppercase
  if (!(title.charAt(0).charCodeAt() >= 'A'.charCodeAt() &&
        title.charAt(0).charCodeAt() <= 'Z'.charCodeAt())) {
    return 'INVALID';
  }

  // title contains only letters and special symbols
  if (!(title.split('').map((item) =>
    (item.toLowerCase().charCodeAt() >= 'a'.charCodeAt() &&
        item.toLowerCase().charCodeAt() <= 'z'.charCodeAt()) ||
        specialSymbols.includes(item)).every(Boolean))) {
    return 'INVALID';
  }

  return 'VALID';
}

console.log(validateTitle('Title!'));
console.log(validateTitle('s'));
console.log(validateTitle('12title'));
console.log(validateTitle('Title?'));
console.log(validateTitle(false));

//* ***********************************************************
/**
 * @param {number|string} a
 * @param {number|string} b
 * @return {number}
 */
function sum(a, b) {
  let number = typeof a === 'number' ? a : b;
  const string = typeof a === 'string' ? a : b;

  if (number % 3 === 0 && number % 5 === 0 && number % 15 === 0) {
    number *= -1;
  }

  return +string + number;
}

console.log(sum('25', 15));
console.log(sum(41, '3'));
console.log(sum('3', 45));
console.log(sum('15', 15));

//* ***********************************************************
/**
 *
 * @param {number} value
 * @return {boolean}
 */
function isPrime(value) {
  let count = 0;
  let condition = true;

  if (value > 2) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        count++;
      }
    }
  }

  if (value < 2 || count > 0) {
    condition = false;
  }

  return condition;
}

/**
 * Check number
 * @param {number} num
 * @return {Array|String}
 */
function checkNumber(num) {
  const result = [];

  if (!Number.isInteger(num)) {
    return 'Number should be an integer';
  }

  result[0] = isPrime(num); // isPrime
  result[1] = num % 2 === 0; // isEven;
  result[2] = num % 10 === 0; // is multiple by 10;

  return result;
}


console.log(checkNumber(7));
console.log(checkNumber(-10));

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsZUFBZTtBQUMxQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLDhCQUE4Qjs7QUFFOUI7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7QUM3R0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2h3LTIuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzk4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICogQHJldHVybiB7c3RyaW5nfSBWQUxJRCBPUiBJTlZBTElEXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUodGl0bGUpIHtcbiAgY29uc3Qgc3BlY2lhbFN5bWJvbHMgPSBbJyAnLCAnIScsICc6JywgJy0nLCAnPycsICcuJywgJywnXTtcblxuICAvLyB0eXBlIG9mIHRpdGxlICdzdHJpbmcnXG4gIGlmICh0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICdJbmNvcnJlY3QgaW5wdXQgZGF0YSc7XG4gIH1cblxuICAvLyBjaGVjayB0aGUgbGVuZ3RoIG9mIHRpdGxlXG4gIGlmICh0aXRsZS5sZW5ndGggPCAyIHx8IHRpdGxlLmxlbmd0aCA+IDIwKSB7XG4gICAgcmV0dXJuICdJTlZBTElEJztcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIGZpcnN0IGxldHRlciBpcyB1cHBlcmNhc2VcbiAgaWYgKCEodGl0bGUuY2hhckF0KDApLmNoYXJDb2RlQXQoKSA+PSAnQScuY2hhckNvZGVBdCgpICYmXG4gICAgICAgIHRpdGxlLmNoYXJBdCgwKS5jaGFyQ29kZUF0KCkgPD0gJ1onLmNoYXJDb2RlQXQoKSkpIHtcbiAgICByZXR1cm4gJ0lOVkFMSUQnO1xuICB9XG5cbiAgLy8gdGl0bGUgY29udGFpbnMgb25seSBsZXR0ZXJzIGFuZCBzcGVjaWFsIHN5bWJvbHNcbiAgaWYgKCEodGl0bGUuc3BsaXQoJycpLm1hcCgoaXRlbSkgPT5cbiAgICAoaXRlbS50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoKSA+PSAnYScuY2hhckNvZGVBdCgpICYmXG4gICAgICAgIGl0ZW0udG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KCkgPD0gJ3onLmNoYXJDb2RlQXQoKSkgfHxcbiAgICAgICAgc3BlY2lhbFN5bWJvbHMuaW5jbHVkZXMoaXRlbSkpLmV2ZXJ5KEJvb2xlYW4pKSkge1xuICAgIHJldHVybiAnSU5WQUxJRCc7XG4gIH1cblxuICByZXR1cm4gJ1ZBTElEJztcbn1cblxuY29uc29sZS5sb2codmFsaWRhdGVUaXRsZSgnVGl0bGUhJykpO1xuY29uc29sZS5sb2codmFsaWRhdGVUaXRsZSgncycpKTtcbmNvbnNvbGUubG9nKHZhbGlkYXRlVGl0bGUoJzEydGl0bGUnKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKCdUaXRsZT8nKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKGZhbHNlKSk7XG5cbi8vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGFcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gYlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBzdW0oYSwgYikge1xuICBsZXQgbnVtYmVyID0gdHlwZW9mIGEgPT09ICdudW1iZXInID8gYSA6IGI7XG4gIGNvbnN0IHN0cmluZyA9IHR5cGVvZiBhID09PSAnc3RyaW5nJyA/IGEgOiBiO1xuXG4gIGlmIChudW1iZXIgJSAzID09PSAwICYmIG51bWJlciAlIDUgPT09IDAgJiYgbnVtYmVyICUgMTUgPT09IDApIHtcbiAgICBudW1iZXIgKj0gLTE7XG4gIH1cblxuICByZXR1cm4gK3N0cmluZyArIG51bWJlcjtcbn1cblxuY29uc29sZS5sb2coc3VtKCcyNScsIDE1KSk7XG5jb25zb2xlLmxvZyhzdW0oNDEsICczJykpO1xuY29uc29sZS5sb2coc3VtKCczJywgNDUpKTtcbmNvbnNvbGUubG9nKHN1bSgnMTUnLCAxNSkpO1xuXG4vLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgY29uZGl0aW9uID0gdHJ1ZTtcblxuICBpZiAodmFsdWUgPiAyKSB7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCB2YWx1ZTsgaSsrKSB7XG4gICAgICBpZiAodmFsdWUgJSBpID09PSAwKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlIDwgMiB8fCBjb3VudCA+IDApIHtcbiAgICBjb25kaXRpb24gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjb25kaXRpb247XG59XG5cbi8qKlxuICogQ2hlY2sgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gKiBAcmV0dXJuIHtBcnJheXxTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrTnVtYmVyKG51bSkge1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBpZiAoIU51bWJlci5pc0ludGVnZXIobnVtKSkge1xuICAgIHJldHVybiAnTnVtYmVyIHNob3VsZCBiZSBhbiBpbnRlZ2VyJztcbiAgfVxuXG4gIHJlc3VsdFswXSA9IGlzUHJpbWUobnVtKTsgLy8gaXNQcmltZVxuICByZXN1bHRbMV0gPSBudW0gJSAyID09PSAwOyAvLyBpc0V2ZW47XG4gIHJlc3VsdFsyXSA9IG51bSAlIDEwID09PSAwOyAvLyBpcyBtdWx0aXBsZSBieSAxMDtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmNvbnNvbGUubG9nKGNoZWNrTnVtYmVyKDcpKTtcbmNvbnNvbGUubG9nKGNoZWNrTnVtYmVyKC0xMCkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9