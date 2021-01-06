Primitives:
string (character), number, boolean (undefined, bigint, symbol)
in binary, a boolean: 0=false, 1=true

Big O:

constant time (linear, print)

A promise (or thenable) is a way to handle asynchronous actions.

It's a promise to do some action or send data at some future time.  "represents the eventual completion of a task"

async/await
promise.all
.then
any time we have a promise, we have to await it.  

//for the originURL portion of the fetch lab:
const fetch = require('node-fetch');

fetch('https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(({ results }) => {
    return results.map(character => character.origin.url)
  })
  .then(originUrls => Promise.all(originUrls.filter(url => url).map(url => fetch(url).then(res => res.json()))))
  .then(origins => console.log(origins));


async function allOrigins() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const { results } = await res.json();
  const originUrls = results.map(character => character.origin.url).filter(url => url);
  const origins = await Promise.all(originUrls.map(url => fetch(url).then(res => res.json())));

  return origins;
}

PostgreSQL
Linked lists
you have an array-like structure where the first item is a node which contains the info AND a reference to the next item.  The beginning is called the head and everything after it is called the tail.  

When you want to insert something at the beginning of the array, you need to use an O(n) operation, where the beginning is an O(1).  O(1) is called constant time.

It's the same type of operation to insert something in the middle.

To remove an item from the middle, you change the pointer in front of it to the item after it and it effectively removed, since nothing is pointing to it.  

career track bootstrap:
```npm init @alchemycodelab/app@latest```

nodemon -r dotenv/config index.js

local host address for signing into pgadmin 127.0.0.1
