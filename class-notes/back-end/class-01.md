=== must be same value and same type, as in 5 === 5
== are more loose, as in '5' == 5

logical operators are things like && and ||

&& both sides must be true

|| only one side must be true

short circuiting:
breaks early.  
You only need to evaluate the left hand side because if it's false, the rest will always be false.  So when ```false && false``` it will break early, or short circuit because it will never get to the right hnd side.

When using || if the left hand side is true it will never evaluate the right hand side.  If it's false, it will.  So this is good for using default values.

One problem with || is that if the value is falsey, like 0, the value will be reassigned to the 


?? nullish coalescing operator.  May be more appropriate than ||


Functional programming is a declarative programming paradigm.  

npm init @alchemycodelab/app

HOF(higher order function)

functions that take functions (like event listeners, .map, anything with a callback...) as arguments
or 
functions that return functions
-add later function (thunk)


`node index.js` in the terminal 

Maybe get a refurbished mac?  will check out.

npm i -D jest eslint
to set up jest test environment