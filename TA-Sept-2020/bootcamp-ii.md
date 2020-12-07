```npx create-react-app .```

No GO LIVE!  in terminal, run ```npm start```

A callback is a function that takes another function as a parameter.  

Array methods like forEach are callbacks:

Frameworks vs libraries:
1. Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
1. A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.
1. The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is.

webpack makes importing into files work! 

Classes/components in React must be capitalized.

primitives are stored by value, not by reference.  When you make a copy with a new variable, changing the original doesn't change the copy.  Primitives = strings, numbers, booleans.

Objects and arrays are stored by reference.  A new copy isn't made when you make a new variable, you just point to the object (reference it) in memory where the object lives.

map is the best way to create a list of things.


"this" refers to the component itself!

SORT METHOD

object
object.sort((a, b) => {
  return a - b
})

use localecompare method to sort strings.


Use callback to sent data from a component to a sibling or parent component.  
Distributed application: having both a backend and a front end.


learning SQL again: to varchar, use text instead.  still testing in jest.


```npm i superagent```:
Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features

node.js:
a js runtime- the environment that runs the code.  Consists of a compiler that turns human readable javascript into machine readable code.

```create-alchemy-sql-be .```
In your routes, use only nouns- no actions or verbs!
Use the plural: /api/students
Refine the resource as parts are added.

Servers are always used: they supply the front end with HTML, CSS, JS and image files.
They are request and response.
GET requests- usually read-only.
POST requests usually write something to the database
Back-end handles multiple requests from clients.  Front end sends data back in multiple formats.  
API usually stands in between front end and database.

console.log in node means you look at the terminal where you launched the server.

Environment variables in the computer, not the code, and are things that may change frequently or things that you don't want to put in github (like secret passwords and API keys).

node.js allows you to run both the front end and the back end.

mobX and Redux/Flux deal with react context.  

```npm init -y``` creates a package.json file
```npm i express``` a library that lets oyu make endpoints
```npm run setup-db```


Any time you make a change to the data.js file locally, you will need to rehydrate your database with ```npm run setup-db```

```git remote set-url origin <new repo url>``` to push code from computer to a new repo on github

CRUD Routes:
Create, Read, Update, Delete
in SQL= Insert, Select *, update, delete
in backend/HTTP= /POST, /GET, /PUT, /DELETE

RESTful API is an application architecture for an API that uses HTTP requests to access and use data.  It's the convention of using /GET, /POST, /PUT, /DELETE when we are talking to our SQL database to reading, creating, updating, or deleting data in our database.  


