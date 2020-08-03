*Method = a function that refers to an object (function defined as a property of an object)*

# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

```
const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// expected output: "foo"
```

Syntax:
```
let o = {}
let o = {a: 'foo', b: 42, c: {}}

let a = 'foo', b = 42, c = {}
let o = {a: a, b: b, c: c}

let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};
```

*// Need some help understanding the last example on line 35*

ECMAScript 2015 shorthand names:
```
// Shorthand property names (ES2015)
let a = 'foo', b = 42, c = {};
let o = {a, b, c}

// Shorthand method names (ES2015)
let o = {
  property(parameters) {}
}

// Computed property names (ES2015)
let prop = 'foo'
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}
```
*// I don't understand Computed property names in ES2015 in this example*

An object initializer is an expression that describes the initialization of an Object. Objects consist of properties, which are used to describe an object. Values of object properties can either contain primitive data types or other objects.

The advantage of the literal or initializer notation is, that you are able to quickly create objects with properties inside the curly braces. You simply notate a list of key: value pairs delimited by commas.

```
let object = {
  foo: 'bar',
  age: 42,
  baz: {myProp: 12}
}
```

Once you have created an object, you might want to read or change them. Object properties can be accessed by using the dot notation or the bracket notation. (See property accessors for detailed information.)

```
object.foo // "bar"
object['age'] // 42

object.foo = 'baz'
```
*// I don't understand how object.foo = 'baz', because it's being changed?.*

# Property definitions

We have already learned how to notate properties using the initializer syntax. Oftentimes, there are variables in your code that you would like to put into an object. You will see code like this:
```
let a = 'foo', 
    b = 42,
    c = {};

let o = { 
  a: a,
  b: b,
  c: c
}
```
With ECMAScript 2015, there is a shorter notation available to achieve the same:
```
let a = 'foo', 
    b = 42, 
    c = {};

// Shorthand property names (ES2015)
let o = {a, b, c}

// In other words,
console.log((o.a === {a}.a)) // true
```

# Duplicate property names

When using the same name for your properties, the second property will overwrite the first.
```
let a = {x: 1, x: 2}
console.log(a) // {x: 2}
```
But in ES2015 Script, the suplicate property name restriction has been removed.

# Method definitions

A property of an object can also refer to a function or a getter or setter method.
```
let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
}
```
In ECMAScript 2015, a shorthand notation is available, so that the keyword "function" is no longer necessary.
```
// Shorthand method names (ES2015)
let o = {
  property(parameters) {},
}
```
# Spread properties

The Rest/Spread Properties for ECMAScript proposal (stage 4) adds spread properties to object literals. It copies own enumerable properties from a provided object onto a new object.
```
let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }
```

# Prototype mutation

A property definition of the form __proto__: value or "__proto__": value does not create a property with the name __proto__.  Instead, if the provided value is an object or null, it changes the [[Prototype]] of the created object to that value.  (If the value is not an object or null, the object is not changed.)

*//not sure I understand this bit about prototype manipulation*

The object literal notation is not the same as the JavaScript Object Notation (JSON). Although they look similar, there are differences between them:

    JSON permits only property definition using "property": value syntax.  The property name must be double-quoted, and the definition cannot be a shorthand.
    In JSON the values can only be strings, numbers, arrays, true, false, null, or another (JSON) object.
    A function value (see "Methods" above) can not be assigned to a value in JSON.
    Objects like Date will be a string after JSON.parse().
    JSON.parse() will reject computed property names and an error will be thrown.
