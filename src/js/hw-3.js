// ************************ task 1
function tickets(person) {
  let bill25doll = 0;
  let bill50doll = 0;

  person.forEach(function(el) {
    switch (el) {
      case 25:
        bill25doll++;
        break;
      case 50:
        bill50doll++;
        bill25doll--;
        break;
      case 100:
        if (bill50doll > 0) {
          bill50doll--;
          bill25doll--;
        } else {
          bill25doll-= 3;
        }
        break;

      default:
        return 'Invalid input';
    }
  });

  if (bill25doll < 0 || bill50doll < 0) {
    return 'No';
  } else {
    return 'Yes';
  }
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 100]));
console.log(tickets([25, 25, 50, 100, 25, 25, 50, 100]));
console.log(tickets([25, 50, 50]));
console.log(tickets([25, 50, 25, 50, 100, 50]));
// ************************ //task 1

// ************************ task 2

const getSum = (a, b) => {
  const newStrA = a.padStart(b.length, '0');
  const newStrB = b.padStart(a.length, '0');
  let result = 0;
  let count = 0;
  let revStr = '';

  for (let i = newStrA.length - 1; i >= 0; i--) {
    result = parseInt(newStrA[i]) + parseInt(newStrB[i]) + count;
    count = 0;

    if (result < 10) {
      revStr = result.toString().concat(revStr);
    }

    if (result >= 10 && i === 0) {
      revStr = result.toString().concat(revStr);
    }

    if (result >= 10 && i !== 0) {
      result = result - 10;
      count = 1;
      revStr = result.toString().concat(revStr);
    }
  }

  return revStr;
};

console.log(getSum('9999', '456'));
console.log(getSum('99', '1'));
console.log(getSum('1', '99'));
console.log(getSum('99', '11'));
console.log(getSum('199', '99'));
console.log(getSum('111898', '989'));
console.log(getSum('89', '97'));
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
