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
