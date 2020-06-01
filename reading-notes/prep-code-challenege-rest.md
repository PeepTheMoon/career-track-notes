# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
```
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
```


Description

A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array.

Only the last parameter can be a "rest parameter".
```
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

Difference between rest parameters and the arguments object

There are three main differences between rest parameters and the arguments object:

    1. rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression), while the arguments object contains all arguments passed to the function;
    1. the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
    1. the arguments object has additional functionality specific to itself (like the callee property).

From arguments to an array:
```
// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {

  let normalArray = Array.prototype.slice.call(arguments)
  // -- or --
  let normalArray = [].slice.call(arguments)
  // -- or --
  let normalArray = Array.from(arguments)

  let first = normalArray.shift()  // OK, gives the first argument
  let first = arguments.shift()    // ERROR (arguments is not a normal array)
}

// Now, you can easily gain access to a normal array using a rest parameter

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // OK, gives the first argument
}
```


Examples
Using rest parameters

In this example, the first argument is mapped to a and the second to b, so these named arguments are used as normal.

However, the third argument, manyMoreArgs, will be an array that contains the 3rd, 4th, 5th, 6th ... nth — as many arguments that the user includes.
```
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```
Below... even though there is just one value, the last argument still gets put into an array.
```
// using the same function definition from example above

myFun("one", "two", "three")

// a, one
// b, two
// manyMoreArgs, [three]
```
Below, the third argument isn't provided, but manyMoreArgs is still an array (albeit an empty one).
```
// using the same function definition from example above

myFun("one", "two")

// a, one
// b, two
// manyMoreArgs, []
```

Argument length

Since theArgs is an array, a count of its elements is given by the length property:
```
function fun1(...theArgs) {
  console.log(theArgs.length)
}

fun1()         // 0
fun1(5)        // 1
fun1(5, 6, 7)  // 3
```


Ordinary parameter and rest parameters

In the next example, a rest parameter is used to collect all parameters after the first into an array. Each one of them is then multiplied by the first parameter, and the array is returned:
```
function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => {
    return multiplier * element
  })
}

let arr = multiply(2, 1, 2, 3)
console.log(arr)  // [2, 4, 6]
```


Use with the arguments object

Array methods can be used on rest parameters, but not on the arguments object:
```
function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort()
  return sortedArgs
}

console.log(sortRestArgs(5, 3, 7, 1)) // 1, 3, 5, 7

function sortArguments() {
  let sortedArgs = arguments.sort()
  return sortedArgs  // this will never happen
}


console.log(sortArguments(5, 3, 7, 1))  
// throws a TypeError (arguments.sort is not a function)
```
To use Array methods on the arguments object, it must be converted to a real array first.
```
function sortArguments() {
  let args = Array.from(arguments)
  let sortedArgs = args.sort()
  return sortedArgs
}
console.log(sortArguments(5, 3, 7, 1))  // 1, 3, 5, 7
```