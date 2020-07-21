1. MVC- Model View Controller
Presentational container

2. MVVM Model view view model, custom hooks

Webpacks- javaScript bundle.


Map iterates through each item in an array.  
you pass map a callback function, and this callback function is invoked for eachitemin the array

Strongly prefer using map when you're creating a new array rather than forEach.

.filter returns a new array, but only the values that retune true/truthy

better to use .filter than ForEach!

PROMISES

A promise (or thenable) is a way to handle asynchronous actions.  Key feature in javascript, need to get comfortable with this

It is a promise to do some action or send some data at some future time.

Other languages ise the word future, etc.

Promises have 3 states: pending (initial state of promise)
Fulfilled state (when it successsfully resolves)
rejected- When it completes with a failure.

3 instance methods

then- takes a callback that will get invooked on a fulfilled promise
cathch- takes a callback that will get invoked when a promise is rejected
finally- takes a callback that will get invoked when a promise fulfills.  

Finally always gets invoked.

Promise.all (most important static methods to remember)

destructuring the fulfilled values off of a promise.all is a more modern looking way.  It's newer.

Promise chains vs async/await

Almost always use promis chains.  Async await is good is there's a variable you'll need later, as in writing our tests.

Webpack helps you to bundle multiple javascript file togehter.

*check class recording for error messages at time 1hr10min in*
