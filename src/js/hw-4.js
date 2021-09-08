const cache = (func) => {
  const map = new Map();

  return function(...params) {
    const key = JSON.stringify(params);

    if (map.has(key)) {
      return map.get(key);
    }

    map.set(key, func(...params));

    return map.get(key);
  };
};

const complexFunction = function(arg1, arg2) {
  return arg1 + arg2;
};
const cachedFunction = cache(complexFunction);
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'baz'));
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'baz'));
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'baz'));

// ***************************   task 2

const ladder = {

  step: 0,

  up: function() {
    this.step += 1;
    return this;
  },

  down: function() {
    this.step -= 1;
    return this;
  },

  showStep: function() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().up().showStep();

// // ***************************   //task 2
//
// // ***************************   task 3

const applyAllES5 = function(func) {
  // eslint-disable-next-line prefer-rest-params
  const params = arguments;
  const index = 1;
  let result = func(params[index], params[index + 1]);

  for (let i = 2; i < params.length - index; i++) {
    result = func(result, params[index + i]);
  }
  return result;
};

const applyAll = (func, ...params) => {
  let result = func(params[0], params[1]);

  for (let i = 2; i < params.length; i++) {
    result = func(result, params[i]);
  }
  return result;
};

const sum = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a * b;
};

console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24

console.log(applyAllES5(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAllES5(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24

// // ***************************   //task 3
