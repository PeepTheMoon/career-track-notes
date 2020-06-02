Name 3 advantages to Test Driven Development: 
1. writing the tests first makes you think more deeply about what you want the code to achieve.
1. Spend less time debugging
1. Able to identify errors and problems quickly; fast feedback.  
https://dzone.com/articles/20-benefits-of-test-driven-development

In what case would you need to use beforeEach() or afterEach() in a test suite?
When you have setup work that needs to be done before tests run or finishing work that needs to be done after tests run.

What is one downside of Test Driven Development?
Focusing on the simplest design now and not thinking ahead can mean major refactoring requirements.
https://leantesting.com/test-driven-development/

What’s the primary difference between ES6 Classes and Constructor/Prototype Classes?
Comes down to whether ES6 syntax was used or not.  A child of an ES6 class is another type definition which extends the parent with new properties and methods, which in turn can be instantiated at runtime. A child of a prototype is another object instance which delegates to the parent any properties that aren’t implemented on the child.
https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up

Name a use case for a static method: 
Use static when you want to provide class level access to a method, i.e. where the method should be callable without an instance of the class. Static methods don't need to be invoked on the object and that is when you use it.
https://stackoverflow.com/questions/2671496/java-when-to-use-static-methods#:~:text=Use%20static%20when%20you%20want,an%20instance%20of%20the%20class.&text=Static%20methods%20don't%20need,an%20object%20to%20call%20it.

Write an example of a Higher Order function and describe the use case it solves:
```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```
GreaterThan10() is a equal to the greaterThan function when it takes in the number 10.  It then reuses the logic of the greaterThan function, so that greaterThan10 can see if the number that it is fed is greater thn 10.

# Vocabulary

functional programming (FP)- process of building software by composing pure functions, avoiding shared state, mutable data and side-effects.  Is declarative.  Is more precise, predictable, and easier to test.

pure function- a function that, Given the same input, will always return the same output.  Produces no side-effects.

higher-order function- functions that orperate on other functions, either by taking them as arguments or by returning them.

immutable state- state that can't be changed.

object- a collection of properties, which are associations between a name (key) and a value.

object-oriented programming (OOP)- a programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

class- a special function with two components: class expressions and class declarations.

prototype- an object has a private property which holds a link to another object.  This is the prototype.  

super- The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.

inheritance- JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

constructor- a special method for creating and initializing an object created with a class.

instance-  an instance is a concrete occurrence of any object, existing usually during the runtime of a computer program. ... An object is an instance of a class, and may be called a class instance or class object; instantiation is then also known as construction.

context- the minimal set of data used by a task (which may be a process, thread, or fiber) that must be saved to allow a task to be interrupted, and later continued from the same point.

this- a keyword of a function.  Value is determined by how the function is called.

Test Driven Development (TDD)-

Jest- a JavaScript testing framework

Continuous Integration (CI)- ) is a development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration can then be verified by an automated build and automated tests.

unit test- testing individual units/ componenets of software.  Unit is the smallest testable part of any software.

Videos:
http://www.letscodejavascript.com/ -TDD in JS
https://www.youtube.com/watch?v=fjJoX9F_F5g -JS context tutorial


# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

Inside a function, the value of this depends on how the function is called.

# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Constructor
The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the super keyword to call the constructor of the super class.

# https://nodejs.org/dist/latest-v6.x/docs/api/errors.html

# https://jestjs.io/docs/en/getting-started

