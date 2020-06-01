# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
```
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5
```


Syntax
```
function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
   statements
}
```

Description

In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where default parameters can help.
```
function multiply(a, b = 1) {
  return a * b 
}

multiply(5, 2)          // 10
multiply(5)             // 5
multiply(5, undefined)  // 5
```



