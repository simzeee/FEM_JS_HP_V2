// Examples from https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

// setting a variable to the return value of a function
let a = 3;
function addTwo(x) {
  let ret = x + 2;
  return ret;
}
let b = addTwo(a);
console.log(b);

// Lexical scope vs global scope

let val1 = 2;
function multiplyThis(n) {
  let ret = n * val1;
  return ret;
}
let multiplied = multiplyThis(6);
console.log('example of scope:', multiplied);

// A function that returns a function

let val = 7;
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b;
    return ret;
  }
  return addNumbers;
}

let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);

// Finally, a closure

function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

/*Whenever you declare a new function and assign it to a variable, you store the function definition, as well as a closure. 
The closure contains all the variables that are in scope at the time of creation of the function. It is analogous to a backpack.

A function definition comes with a little backpack. 
And in its pack it stores all the variables that were in scope at the time that the function definition was created.
*/
