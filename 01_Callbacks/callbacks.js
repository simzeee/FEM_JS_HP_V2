function addTwo(num) {
  return num + 2;
}

const map = (arr, func) => {
  const result = [];
  arr.forEach((el) => result.push(func(el)));
  return result;
};

// console.log(map([1, 2, 3], addTwo));

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function reduce(array, callback, initialValue) {
  let finalValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    finalValue = callback(finalValue, array[i]);
  }
  return finalValue;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
// console.log(reduce(nums, add, 0)); //-> 8

function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    console.log('acc', acc, 'curr', curr);
    return curr.filter((el) => acc.includes(el));
  });
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]
intersection([
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7, 20],
  [1, 10, 15, 5, 20],
  [13, 10, 16, 54, 20],
]);
