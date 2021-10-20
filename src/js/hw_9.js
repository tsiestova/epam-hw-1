//* ******************** task 1

function calculateFibByRecursion(sequenceLength) {
  return (sequenceLength <= 2) ? 1 : calculateFibByRecursion(sequenceLength - 2) + calculateFibByRecursion(sequenceLength - 1);
}

let start = Date.now();
console.log(calculateFibByRecursion(3));
let finish = Date.now() - start;
console.log(`${finish} milliseconds (using recursion)`);

console.log(calculateFibByRecursion(7));

function calculateFibByCycle(sequenceLength) {
  const arr = [];
  let result = 0;

  for (let i = 0; i <= sequenceLength; i++) {
    if (i <= 1) {
      result = 1;
      arr.push(result);
    }

    if (i >= 3) {
      result = arr[i-3] + arr[i -2];
      arr.push(result);
    }
  }

  return result;
}

// console.log(calculateFibByCycle(1));
// console.log(calculateFibByCycle(2));

start = Date.now();
console.log(calculateFibByCycle(3));
finish = Date.now() - start;
console.log(`${finish} milliseconds (using cycle)`);

// console.log(calculateFibByCycle(4));
// console.log(calculateFibByCycle(5));
// console.log(calculateFibByCycle(6));
console.log(calculateFibByCycle(7));
// console.log(calculateFibByCycle(3));
// console.log(calculateFibByCycle(2));
// console.log(calculateFibByCycle(3));
// console.log(calculateFibByCycle(4));
// console.log(calculateFibByCycle(8));

/**
 * Loop is faster because recursion involves pushing a stack frame,
 * jumping, returning, and popping back from the stack.
 * Calling function requires more resources then executing the code
 * within a loop
 */

//* ******************** //task 1

//* ******************** task 2

function parseJson(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

console.log(parseJson('{"name": "JavaScript", "company": "xChange"}'));
console.log(parseJson('{name: JavaScript, company: xChange}'));

//* ******************** //task 2

//* ******************** task 3

console.log('task 3');

window.addEventListener('error', function(ev) {
  console.log(ev.type);
  ev.preventDefault();
});

function parseJson2(str) {
  const obj = JSON.parse(str);

  if (obj.hasOwnProperty('name') && obj.hasOwnProperty('company')) {
    return obj;
  }

  throw new Error('Is not valid');
}

parseJson2('{"name": "JavaScript", "company": "xChange"}');
parseJson2('{name: JavaScript, company: xChange}');
parseJson2('{name: JavaScript, company: xChange}');


