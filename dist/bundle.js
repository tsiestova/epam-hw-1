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
function isString(value) {
  return typeof(value) === 'string';
}

function isCorrectLength(value) {
  const minLength = 2;
  const maxLenght = 20;

  return value.length < minLength || value.length > maxLenght;
}

function isUppercaseFirstLetter(value) {
  return value.charAt(0).charCodeAt() >= 'A'.charCodeAt() &&
      value.charAt(0).charCodeAt() <= 'Z'.charCodeAt();
}

function checkValidSymbols(value) {
  const specialSymbols = [' ', '!', ':', '-', '?', '.', ','];

  return value.split('').map((item) =>
    (item.toLowerCase().charCodeAt() >= 'a'.charCodeAt() &&
          item.toLowerCase().charCodeAt() <= 'z'.charCodeAt()) ||
      specialSymbols.includes(item)).every(Boolean);
}

function validateTitle(title) {
  let result = 'INVALID';

  if (!isString(title)) {
    result = 'Incorrect input data';

    return result;
  }
  if (isCorrectLength(title)) {
    result = 'Incorrect length';
    return result;
  }
  if (!isUppercaseFirstLetter(title)) {
    result = 'First letter is not uppercase';
    return result;
  }

  if (!checkValidSymbols(title)) {
    result = 'Symbols are not allowed';
    return result;
  }

  return 'VALID';
}

console.log(validateTitle('Title!'));
console.log(validateTitle('s'));
console.log(validateTitle('sf'));
console.log(validateTitle('S'));
console.log(validateTitle('Sf'));
console.log(validateTitle('12title'));
console.log(validateTitle('Title?'));
console.log(validateTitle('?Title?'));
console.log(validateTitle('Title '));
console.log(validateTitle(' Title?'));
console.log(validateTitle('Tайtle?'));
console.log(validateTitle('Some long tittle more than 20 symbols'));
console.log(validateTitle(false));
console.log(validateTitle(['1', '2']));

//* ***********************************************************

function normalizeValue(value) {
  let result = 0;

  if (typeof value === 'number') {
    if (value % 3 === 0 && value % 5 === 0) {
      result = value * -1;
    } else {
      result = value;
    }
  } else {
    result = parseInt(value);
  }
  return result;
}

function sum(a, b) {
  const param1 = normalizeValue(a);
  const param2 = normalizeValue(b);

  return param1 + param2;
}

console.log(sum('15', '15'));
console.log(sum(15, 15));
console.log(sum('25', 15));
console.log(sum(41, 3));
console.log(sum('3', 45));
console.log(sum('15', 15));

//* ***********************************************************
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
function checkNumber(num) {
  const obj = {
    isPrime: false,
    isEven: false,
    isMulBy10: false,
  };

  if (!Number.isInteger(num)) {
    return 'Number should be an integer';
  }

  if (isPrime(num)) {
    obj.isPrime = true;
  }

  if (num % 10 === 0) {
    obj.isEven = true;
    obj.isMulBy10 = true;
  }

  if (num % 2 === 0) {
    obj.isEven = true;
  }

  return Object.values(obj);
}

console.log(checkNumber(0));
console.log(checkNumber(1));
console.log(checkNumber(2));
console.log(checkNumber(10));
console.log(checkNumber(7));
console.log(checkNumber(46));
console.log(checkNumber(-7));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JKQSIsInNvdXJjZXMiOlsid2VicGFjazovL0hXXzAxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvaHctMi5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZih2YWx1ZSkgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc0NvcnJlY3RMZW5ndGgodmFsdWUpIHtcbiAgY29uc3QgbWluTGVuZ3RoID0gMjtcbiAgY29uc3QgbWF4TGVuZ2h0ID0gMjA7XG5cbiAgcmV0dXJuIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggPiBtYXhMZW5naHQ7XG59XG5cbmZ1bmN0aW9uIGlzVXBwZXJjYXNlRmlyc3RMZXR0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS5jaGFyQ29kZUF0KCkgPj0gJ0EnLmNoYXJDb2RlQXQoKSAmJlxuICAgICAgdmFsdWUuY2hhckF0KDApLmNoYXJDb2RlQXQoKSA8PSAnWicuY2hhckNvZGVBdCgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU3ltYm9scyh2YWx1ZSkge1xuICBjb25zdCBzcGVjaWFsU3ltYm9scyA9IFsnICcsICchJywgJzonLCAnLScsICc/JywgJy4nLCAnLCddO1xuXG4gIHJldHVybiB2YWx1ZS5zcGxpdCgnJykubWFwKChpdGVtKSA9PlxuICAgIChpdGVtLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgpID49ICdhJy5jaGFyQ29kZUF0KCkgJiZcbiAgICAgICAgICBpdGVtLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgpIDw9ICd6Jy5jaGFyQ29kZUF0KCkpIHx8XG4gICAgICBzcGVjaWFsU3ltYm9scy5pbmNsdWRlcyhpdGVtKSkuZXZlcnkoQm9vbGVhbik7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUodGl0bGUpIHtcbiAgbGV0IHJlc3VsdCA9ICdJTlZBTElEJztcblxuICBpZiAoIWlzU3RyaW5nKHRpdGxlKSkge1xuICAgIHJlc3VsdCA9ICdJbmNvcnJlY3QgaW5wdXQgZGF0YSc7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChpc0NvcnJlY3RMZW5ndGgodGl0bGUpKSB7XG4gICAgcmVzdWx0ID0gJ0luY29ycmVjdCBsZW5ndGgnO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc1VwcGVyY2FzZUZpcnN0TGV0dGVyKHRpdGxlKSkge1xuICAgIHJlc3VsdCA9ICdGaXJzdCBsZXR0ZXIgaXMgbm90IHVwcGVyY2FzZSc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmICghY2hlY2tWYWxpZFN5bWJvbHModGl0bGUpKSB7XG4gICAgcmVzdWx0ID0gJ1N5bWJvbHMgYXJlIG5vdCBhbGxvd2VkJztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuICdWQUxJRCc7XG59XG5cbmNvbnNvbGUubG9nKHZhbGlkYXRlVGl0bGUoJ1RpdGxlIScpKTtcbmNvbnNvbGUubG9nKHZhbGlkYXRlVGl0bGUoJ3MnKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKCdzZicpKTtcbmNvbnNvbGUubG9nKHZhbGlkYXRlVGl0bGUoJ1MnKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKCdTZicpKTtcbmNvbnNvbGUubG9nKHZhbGlkYXRlVGl0bGUoJzEydGl0bGUnKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKCdUaXRsZT8nKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKCc/VGl0bGU/JykpO1xuY29uc29sZS5sb2codmFsaWRhdGVUaXRsZSgnVGl0bGUgJykpO1xuY29uc29sZS5sb2codmFsaWRhdGVUaXRsZSgnIFRpdGxlPycpKTtcbmNvbnNvbGUubG9nKHZhbGlkYXRlVGl0bGUoJ1TQsNC5dGxlPycpKTtcbmNvbnNvbGUubG9nKHZhbGlkYXRlVGl0bGUoJ1NvbWUgbG9uZyB0aXR0bGUgbW9yZSB0aGFuIDIwIHN5bWJvbHMnKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKGZhbHNlKSk7XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVRpdGxlKFsnMScsICcyJ10pKTtcblxuLy8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGxldCByZXN1bHQgPSAwO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHZhbHVlICUgMyA9PT0gMCAmJiB2YWx1ZSAlIDUgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHZhbHVlICogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBwYXJzZUludCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3VtKGEsIGIpIHtcbiAgY29uc3QgcGFyYW0xID0gbm9ybWFsaXplVmFsdWUoYSk7XG4gIGNvbnN0IHBhcmFtMiA9IG5vcm1hbGl6ZVZhbHVlKGIpO1xuXG4gIHJldHVybiBwYXJhbTEgKyBwYXJhbTI7XG59XG5cbmNvbnNvbGUubG9nKHN1bSgnMTUnLCAnMTUnKSk7XG5jb25zb2xlLmxvZyhzdW0oMTUsIDE1KSk7XG5jb25zb2xlLmxvZyhzdW0oJzI1JywgMTUpKTtcbmNvbnNvbGUubG9nKHN1bSg0MSwgMykpO1xuY29uc29sZS5sb2coc3VtKCczJywgNDUpKTtcbmNvbnNvbGUubG9nKHN1bSgnMTUnLCAxNSkpO1xuXG4vLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmZ1bmN0aW9uIGlzUHJpbWUodmFsdWUpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgbGV0IGNvbmRpdGlvbiA9IHRydWU7XG5cbiAgaWYgKHZhbHVlID4gMikge1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgaWYgKHZhbHVlICUgaSA9PT0gMCkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZSA8IDIgfHwgY291bnQgPiAwKSB7XG4gICAgY29uZGl0aW9uID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY29uZGl0aW9uO1xufVxuZnVuY3Rpb24gY2hlY2tOdW1iZXIobnVtKSB7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBpc1ByaW1lOiBmYWxzZSxcbiAgICBpc0V2ZW46IGZhbHNlLFxuICAgIGlzTXVsQnkxMDogZmFsc2UsXG4gIH07XG5cbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG51bSkpIHtcbiAgICByZXR1cm4gJ051bWJlciBzaG91bGQgYmUgYW4gaW50ZWdlcic7XG4gIH1cblxuICBpZiAoaXNQcmltZShudW0pKSB7XG4gICAgb2JqLmlzUHJpbWUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKG51bSAlIDEwID09PSAwKSB7XG4gICAgb2JqLmlzRXZlbiA9IHRydWU7XG4gICAgb2JqLmlzTXVsQnkxMCA9IHRydWU7XG4gIH1cblxuICBpZiAobnVtICUgMiA9PT0gMCkge1xuICAgIG9iai5pc0V2ZW4gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMob2JqKTtcbn1cblxuY29uc29sZS5sb2coY2hlY2tOdW1iZXIoMCkpO1xuY29uc29sZS5sb2coY2hlY2tOdW1iZXIoMSkpO1xuY29uc29sZS5sb2coY2hlY2tOdW1iZXIoMikpO1xuY29uc29sZS5sb2coY2hlY2tOdW1iZXIoMTApKTtcbmNvbnNvbGUubG9nKGNoZWNrTnVtYmVyKDcpKTtcbmNvbnNvbGUubG9nKGNoZWNrTnVtYmVyKDQ2KSk7XG5jb25zb2xlLmxvZyhjaGVja051bWJlcigtNykpO1xuY29uc29sZS5sb2coY2hlY2tOdW1iZXIoLTEwKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=