// function multiplyBy2 (inputNumber){
//   const result = inputNumber*2;
//   return result;
// }

// const output = multiplyBy2(7)
// const newOutput = multiplyBy2(10);

function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();
// createFunction is saved in memory not "inside" of createFunction. JavaScript does not look inside of createFunction,
// but the developer does when reading the code.
const result = generatedFunc(3);

function outer() {
  let counter = 0;
  function incrementCounter() {
    if (counter > 0) {
      console.log("You can't increment counter any longer");
      console.log(counter, 'greater than 0');

      return;
    }
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const myNewFunction = outer();

myNewFunction();
myNewFunction();
// counter = 1
/* There is a hidden property [[scope]] that links to where the surrounding data is stored. You can't access it unless you run the function and have that function refer 
to something that's not in local memory and then going to the function definition and looking in the "backpack" scope. This is "private" data. 
*/

/* Scope is the rules for what data is available at any given line of code. JS is a lexical/statically scoped language
Persistent Lexical Scope Referenced Data, Closure. 
*/

// This is a different backpack

const anotherFunction = outer();
anotherFunction();
anotherFunction();

