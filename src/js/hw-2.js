// eslint-disable-next-line prefer-rest-params
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


