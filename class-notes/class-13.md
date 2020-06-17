async function always returns a promise.  You can .then off of any promise.

event loop is single threaded.  one process at a time.

It distributes work to the operating system and then queues up the promises.

promises used to be called a thenable!  its a way to handle asynchronous actons.

other languages may use 'future', 'delay', or 'deferred' and they're similar to javascript promises.

.then when a promise fulfills,
.catch if a promise rejects
.finally whenever a promise finishes, regardless of whether it fulfilled or errored.

each .then returns a promise and you can continue to chain them

the return value from a .then gets pssed to the next .then.

when returning a promise from .then, the next .then will wait for the promise to resolve and get its fulfilled value.

.race returns the first promise in an array of promises that finishes first and ignores the rest

.allSettled returns all of the promises with their value and status, even if one rejects, instead of getting an error message even if some were fulfilled.

