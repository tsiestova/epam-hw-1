// ************************ task 1
/**
 *
 * @param {Array<Number>} list
 * @return {*}
 */
const cashier = (list) => {
  let bank = {};
  const price = 25;
  /**
     * Clone the current bank object
     *
     * @return {Object}
     */
  const bankClone = () => {
    return JSON.parse(JSON.stringify(bank));
  };

  /**
     * Add money to the bank
     * @param {Number} amount
     * @return {boolean}
     */
  const addMoneyToBank = (amount) => {
    if (!bank[amount]) {
      bank[amount] = 1;
    } else {
      bank[amount]++;
    }

    return true;
  };

  /**
     * Calculate if giving the change is possible
     * @param {Number} changeValue - amount of the change
     * @return {{isAvailable: Boolean, bank: Object}} - is
   * * the operation is possible
   */
  const calculateChange = (changeValue) => {
    // we need a copy of the current bank to calculate the change
    const clone = bankClone();
    // Get all amount of denominations
    const keys = Object.keys(clone).map((item) =>
      parseInt(item, 10)).sort((a, b) => b - a);
    let sum = 0;
    let index = 0;

    while (sum < changeValue && index < keys.length) {
      // if the current key is higher than the change, take the next key
      if (keys[index] > changeValue || keys[index] + sum > changeValue ||
          !clone[keys[index]]) {
        index++;
        continue;
      }

      sum += keys[index];
      clone[keys[index]]--;
    }

    return {
      isAvailable: sum === changeValue,
      bank: clone,
    };
  };
  /**
     * Remove the change from the bank
     * @param {Number} amount
     * @return {boolean} - result of the operation,
   * */
  const removeMoneyFromBank = (amount) => {
    if (bank[amount]) {
      bank[amount]--;
      return true;
    }

    const change = amount - price;
    const result = calculateChange(change);

    if (result.isAvailable) {
      bank = Object.assign({}, bank.result);
      return true;
    }

    return false;
  };

  /**
     * Attempt to buy the ticket
     *
     * @param {Number} amount
     * @return {boolean}
     */
  const buyTicket = (amount) => {
    const change = amount - price;

    if (change === 0) {
      addMoneyToBank(amount);
      return true;
    }

    if (change > 0) {
      if (removeMoneyFromBank(change)) {
        return addMoneyToBank(amount);
      }

      return false;
    }

    throw new Error('Not enough money');
  };

  return list.every((item) => buyTicket(item));
};

console.log('[25, 25, 50]', cashier([25, 25, 50]) ? 'YES' : 'NO');
console.log('[25, 100]', cashier([25, 100]) ? 'YES' : 'NO');
console.log('[25, 25, 50, 100]', cashier([25, 25, 50, 100]) ? 'YES' : 'NO');
console.log('[25, 50, 100]', cashier([25, 50, 100]) ? 'YES' : 'NO');
// ************************ //task 1

// ************************ task 2
/**
 * getSum
 * @param {string} a
 * @param {string} b
 * @return {String}
 */
const getSum = (a, b) => {
  // two string should have the same length
  const newStrA = a.padStart(b.length, '0');
  const newStrB = b.padStart(a.length, '0');

  const sum = [];
  let result = 0;
  let count = 0;

  for (let i = newStrA.length - 1; i >= 0; i--) {
    result = parseInt(newStrA[i]) + parseInt(newStrB[i]) + count;
    count = 0;

    if (result < 10) {
      sum.unshift(result);
    }

    if (result >= 10 && i === 0) {
      sum.unshift(result);
    }

    if (result >= 10 && i !== 0) {
      result = result - 10;
      count = 1;
      sum.unshift(result);
    }
  }

  return sum.join('');
};

console.log(getSum('67896789', '987'));
console.log(getSum('19480583058', '405684068'));
console.log(getSum('1989', '405684068'));

// ************************ //task 2

// ************************ task 3

const listOfPosts = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
    ],
  },
  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
      {
        id: 1.3,
        comment: 'some comment3',
        title: 'title 3',
        author: 'Rimus',
      },
    ],
  },
  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus',
  },
  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle',
  },
];
/**
 * getQuanityPostsByAuthor
 * @param {array} arr
 * @param {string} name
 * @return {String}
 */
const getQuanityPostsByAuthor = (arr, name) => {
  let countOfPost = 0;
  let countOfComment = 0;

  arr.forEach((el) => el.author === name ? countOfPost++ : 0);
  arr.forEach((el) => el.comments ?
        el.comments.forEach((el) => el.author === name ? countOfComment++ : 0) :
        0);

  return `Post:${countOfPost}, comments:${countOfComment}`;
};

console.log(getQuanityPostsByAuthor(listOfPosts, 'Rimus'));

// ************************ //task 3
