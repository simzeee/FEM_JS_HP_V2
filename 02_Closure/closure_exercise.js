// Source http://csbin.io/closures


// CHALLENGE 1
function createFunction() {
  return function () {
    console.log('hello');
  };
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return () => {
    console.log(input);
  };
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

function addByX(x) {
  const addBy = (num) => {
    return num + x;
  };
  return addBy;
}

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Challenge 3 part 2

function addByX(x) {
  const addBy = (num) => {
    return num + x;
  };
  return addBy;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// console.log(addByTwo(2)); // => should return 4
addByTwo(3); // => should return 5

// CHALLENGE 4
function once(func) {
  console.log(func);

  let counter = 0;
  let result;

  const firstTimeOnly = (val) => {
    if (counter < 1) {
      counter++;
      result = func(val);
      return result;
    } else {
      return result;
    }
  };

  return firstTimeOnly;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counter = 0;

  const increment = () => {
    counter = counter + 1;
    if (counter === count) {
      // console.log('here')
      func();
    }
    // console.log(counter, count)
  };
  return increment;
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log('hello');
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
