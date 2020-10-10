It’s the subtle difference between parameters and arguments. Parameters are used to Prepare the function…in the declaration…Arguments are the real things used to Act when you call the function. It takes some time to wrap your head around the distinction.

Arrow functions have implicit return, you don't need a return statement.

Function syntax allows for hoisting, meaning that javascript will read something before it's declared.

actual vs derived state:  track as little state as possible to reduce the opportunity for errors.  If you know the actual state you can calculate the derived state from the number of questions compared to the number of correct answers.

ARRAYS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

to get the last item in an array:
```let lastItem = array[array.length -1];```

add an item to the end of an array ```.push(item)```

remove an item from the end of an array ```.pop()```

remove an item from the beginning of an array ```.shift()```

add item to beginning of an array ```.unshift(item)```

find the index of an item in an array: ```itemIndex = array.indexOf(item)```

to make a copy of an array ```.slice()```

to remove an item from an indexed position: 
```
let pos = 1 (starting position)
let n = 2 (number of items to be removed)

let removedItems = array.splice(pos, n)
```

object.keys(arrayName) returns the indexes of the items in an array.   *they don't have to be sequential* 

OBJECTS:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


Objects represent “things” with characteristics (aka properties), while arrays create and store lists of data in a single variable. Both dot and bracket notation allow us to access, add, change, and remove items from an object, while zero-based indexing and a variety of built-in methods let us access and alter items in an array. Finally, we can iterate over object properties and array items using various loops (e.g. for, for…in, for…of, forEach()).

article on the difference between the iteration loops: https://bitsofco.de/for-in-vs-for-of/

