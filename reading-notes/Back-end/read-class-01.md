# https://docs.npmjs.com/about-npm/index.html

# https://docs.npmjs.com/

# https://www.programiz.com/article/difference-compiler-interpreter


## Discussion Questions:

1. Why would you want to run JavaScript code outside of a browser?
Node.js exposes APIs that are not available in a browser environment. These APIs have less restrictions to the operating system, and for security reasons, can't be done in a browser.  Makes JavaScript more powerful.

https://dev.to/somedood/nodejs-breaking-javascript-out-of-the-browser-since-2009-53cn
    
1. What is the difference between a module and a package?
A package is a module contining a package.json file which stores the metadata and keeps track of the depenedencies.  

1. What does the node package manager do? 
Puts modules in place so that node can find them, manages dependency conflicts, and is used to publish, discover, install, and develop node programs.
    
1. Provide code snippets showing 3 different ways to export a function from a node module
```
//Export by attaching an anonymous function:

module.exports = function (a, b) { 
  console.log(a + b); 
} 
```

```
// Export function as a class:

module.exports = function () { 
  this.name = 'GeeksforGeeks'; 
  this.website = 'https://geeksforgeeks.org'; 
  this.info = () => { 
    console.log(`Company name - ${this.name}`); 
    console.log(`Website - ${this.website}`); 
  } 
} 
```

```
// Expose an object with a function.  This example exposes and object with log function as a module:

module.exports.log = function (msg) { 
    console.log(msg);
};
```
https://www.geeksforgeeks.org/node-js-export-module/


### Vocabulary:

ecosystem- a collection of software packages, libraries, and other resources that facilitate development as they integrate with each other. A metaphor used in order to denote an analysis which takes into account multiple software systems.

Node.js- an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser and in any platform/system with node.js installed. Represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts. 

V8 Engine- open-source JavaScript engine developed by Google for use in Chrome written in C++.

module- A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.  Also sometimes called an npm package when they have a package.json file.  They are essentially reuseable code that can be reused across projects.  A building blockof solutions to specific problems that can be built upon. In the context of a Node program, the module is also the thing that was loaded from a file.
```
var req = require('request')
```

package- a file or directory containing modules, or reuseable code, that is described by a package.json file.  Packages can be unscoped or scoped to a user or Org, and scoped packages can be private or public.   

node package manager (npm)-
    world's largest software registry. Allows open source developers anywhere to share send borrow packages.  Used by organizations to manage private development as well.  Consists of three components:

        1. the website- used to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up Orgs (organizations) to manage access to public or private packages.

        2. the command line interface (CLI)- runs from a terminal, and is how most developers interact with npm.

        3. the registry- a large public database of JavaScript software and the meta-information surrounding it.
    
    NPM Allows you to:

        1. Adapt packages of code for your apps, or incorporate packages as they are.
        1. Download standalone tools you can use right away.
        1. Run packages without downloading using npx.
        1. Share code with any npm user, anywhere.
        1. Restrict code to specific developers.
        1. Create Orgs (organizations) to coordinate package maintenance, coding, and developers.
        1. Form virtual teams by using Orgs.
        1. Manage multiple versions of code and code dependencies.
        1. Update applications easily when underlying code is updated.
        1. Discover multiple ways to solve the same puzzle.
        1. Find other developers who are working on similar problems and projects.

server- A computer that provdes a service/data to other computers in the form of (response), and the user of the service is the client (request).

environment- can be organizational (a company), social (an open-source community), or technical (the Ruby ecosystem). 

interpreter- used to convert a program written in a high-level language (source-code) into machine code (binary) understood by computers. BUT translates program one statement at a time, execution is overall slower.  Is more memory efficient, easier to debug with.  Used by Python, Ruby.

compiler- used to convert a program written in a high-level language (source-code) into machine code (binary) understood by computers. BUT translates an entire program at the same time.  Overall execution is faster, but requires more memory.  Harder to debug.  Used by C, C++, and Java.
