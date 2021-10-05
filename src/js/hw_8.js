//* ******************** task 1

function calculateFibByRecursion(sequenceLength) {
  return (sequenceLength <= 2) ? 1 : calculateFibByRecursion(sequenceLength - 2) + calculateFibByRecursion(sequenceLength - 1);
}

let start = Date.now();
console.log(calculateFibByRecursion(3));
let finish = Date.now() - start;
console.log(`${finish} milliseconds (using recursion)`);

console.log(calculateFibByRecursion(7));

// 0, 1, 1, 2, 3, 5, 8, 13


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


//* ******************** //task 2
