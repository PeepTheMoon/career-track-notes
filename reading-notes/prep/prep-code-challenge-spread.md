# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```

Syntax
For function calls:
```
myFunction(...iterableObj);
```
For array literals or strings:
```
[...iterableObj, '4', 'five', 6];
```
For object literals (new in ECMAScript 2018):
```
let objClone = { ...obj };
```

Rest syntax (parameters)

Rest syntax looks exactly like spread syntax, but is used for destructuring arrays and objects.

In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters.

Spread in function calls
Replace apply()

It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.
```
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction.apply(null, args);
```
With spread syntax the above can be written as:
```
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction(...args);
```
Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.
```
function myFunction(v, w, x, y, z) { }
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

Apply for new

When calling a constructor with new it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]]). However, an array can be easily used with new thanks to spread syntax:
```
const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);
```

To use new with an array of parameters without spread syntax, you would have to do it indirectly through partial application:
```
function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}


function myConstructor () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

const myArguments = ["hi", "how", "are", "you", "mr", null];
const myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
//  (internal log of myConstructor):           arguments.length: 6
//  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
//  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

Spread in array literals
A more powerful array literal

Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct:
```
const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 
//  ["head", "shoulders", "knees", "and", "toes"]
```
Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.

Copy an array
```
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
```

Note: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows. (The same is true with Object.assign() and spread syntax.)
```
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift(); 
//  1

//  Oh no!  Now array 'a' is affected as well:
a
//  [[], [2], [3]]
```



A better way to concatenate arrays

Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:
```
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5]; 

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

With spread syntax this becomes:
```
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2]; 
//  arr1 is now [0, 1, 2, 3, 4, 5]
Note: Not to use const otherwise, it will give TypeError(invalid assignment)
```


Spread in object literals

The Rest/Spread Properties for ECMAScript proposal (ES2018) added spread properties to object literals. It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().
```
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```
Note that Object.assign() triggers setters, whereas spread syntax doesn't.

Note that you cannot replace or mimic the Object.assign() function:
```
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```
In the above example, the spread syntax does not work as one might expect: it spreads an array of arguments into the object literal, due to the rest parameter.



Only for iterables

Objects themselves are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign(). When merging 2 objects together with the spread operator, it is assumed another iterating function is used when the merging occurs.

Spread syntax (other than in the case of spread properties) can be applied only to iterable objects:
```
const obj = {'key1': 'value1'};
const array = [...obj]; // TypeError: obj is not iterable
```