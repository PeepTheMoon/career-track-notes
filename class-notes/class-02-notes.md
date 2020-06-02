node is less secure because of nmp, due to the dependencies required to use your npm packages.  
Deno is more secure becuase it doesn't use npm.

Object literals are useful for one time use objects.  They are prperties and methods in side curly braces.

Objects that you will use many times are :
constructor functions- useful when we want to have many objects that all have some properties in common.  Create with this.-- as the keys, then use the constructor function to create a New object. used only in JS

JS has a class keyword that allows devs to creat objects similar to constructor functions but in a more familiar syntax.  used in all languages, now also in jS.

Destructuring:

when you destructure an array, the original array remains unchanged.  You can change use ...rest(name it anything), which makes a new array, and you can change that one, but the original remains unchanged.

```
Array(10)
```
creates an array with 10 empty spaces.  can't use array menthods, so you can
```[...Array(10)]``` which will amke 10 undefined items in an array and now you can use array menthods on it.

You can destructure an object, avoids this.props!  Works the same as working with destructring arrays.

Spread:
you can append and prepend items to an array. same with objects!

Classes:
static menthods run on the class itself.  Instance methods run on an instance of a class.  Class constructors must be capitalized.  Instances of a class constructor are not capitalized.

static methods are when you want to run a method without creating an instance.
