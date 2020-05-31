# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
```
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```
The object and array literal expressions provide an easy way to create ad hoc packages of data.

The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
```
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

# Array destructuring

Basic variable assignment:
```
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

Assignment separate from declaration:

A variable can be assigned its value via destructuring separate from the variable's declaration.
```
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

Default values:

A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
```
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

Swapping variables:

Two variables values can be swapped in one destructuring expression.
```
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```
*The console.log on line 73 doesn't make sense to me.  WHy is the return not [2,1,3]?*


Parsing an array returned from a function:

It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.

In this example, f() returns the values [1, 2] as its output, which can be parsed in a single line with destructuring.
```
function f() {
  return [1, 2];
}

let a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2
```

Ignoring some returned values:

You can ignore return values that you're not interested in:
```
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```

You can also ignore all returned values:
```
[,,] = f();
```

Assigning the rest of an array to a variable:

When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:
```
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

Unpacking values from a regular expression match:

When the regular expression exec() method finds a match, it returns an array containing first the entire matched portion of the string and then the portions of the string that matched each parenthesized group in the regular expression. Destructuring assignment allows you to unpack the parts out of this array easily, ignoring the full match if it is not needed.
```
function parseProtocol(url) { 
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"
```

*I don't understand this (regex) at all.  Mental note to investigate deeper*


## Object destructuring
Basic assignment:

```
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true 
```

