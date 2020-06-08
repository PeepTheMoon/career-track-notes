
# Videos
https://www.youtube.com/watch?v=9HOem0amlyg
middleware = any number of functions that are invoked by the Express.js routing layer before the final request handler is made. (one a defined route, do something first, then pass it along to the next thing, like checking to make sure the user is authorized with an auth method for the next route).  The next parameter ensures that the function will move on to the next function in the middleware chain.

# Articles
## https://www.restapitutorial.com/httpstatuscodes.html
List of HTTP status codes

## https://expressjs.com/en/resources/middleware.html
express middleware list

## https://github.com/visionmedia/supertest
Supertest docs

## https://expressjs.com/en/guide/routing.html
Guide to using express routing:
Routing refers to how an application’s endpoints (URIs) respond to client requests.

## https://expressjs.com/en/guide/using-middleware.html
Guide to using middleware

## https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

Order of Middleware Calls
One of the most important things about middleware in Express is the order in which they are written/included in your file; the order in which they are executed, given that the route matches also needs to be considered.

For example, in the following code snippet, the first function executes first, then the route handler and then the end function. This example summarizes how to use middleware before and after route handler; also how a route handler can be used as a middleware itself.
```
var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);
```
Third Party Middleware
A list of Third party middleware for Express is available here. Following are some of the most commonly used middleware; we will also learn how to use/mount these −

body-parser
This is used to parse the body of requests which have payloads attached to them. To mount body parser, we need to install it using ```npm install --save body-parser``` and to mount it, include the following lines in your index.js −
```
var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())
```
To view all available options for body-parser, visit its github page.

cookie-parser
It parses Cookie header and populate req.cookies with an object keyed by cookie names. To mount cookie parser, we need to install it using ```npm install --save cookie-parser``` and to mount it, include the following lines in your index.js −
```
var cookieParser = require('cookie-parser');
app.use(cookieParser())
```
express-session
It creates a session middleware with the given options. We will discuss its usage in the Sessions section.

We have many other third party middleware in ExpressJS. However, we have discussed only a few important ones here.



Express Routing

Event driven system
```app.get('/thing', (req,res) => {})```
This is the same pattern we see in Vanilla JS, jQuery
‘When a get event happens in our server, on “/thing”, run this function…’

The Request Object
```(req,..)```
/:parameters
```app.get('/api/:thing',...) = req.params.thing```

Query Strings
```http://server/route?ball=round = req.query.ball```

The Response Object
```(..., res)```
Responsible for sending data back to the browser
Has methods like ```send()``` and ```status()``` that Express uses to format the output to the browser properly
Sends Headers
Cookies
Status Codes


Express Middleware
What does it do?
A series of functions that the request “goes through”
Each function receives ```request```, ```response``` and ```next``` as parameters
Types of middleware: Application and Route

Application Middleware
Error Handling
Bringing in other routes
Applies Defaults
JSON, Body and Form Parsing
Runs on every request

Route Middleware
Dealing with specific things for a route
Generally, things many routes would participate in
Are you logged in?
What is your IP?
Have we seen you here before?


How can we take advantage?
Logging
Dynamic Model Loading
Browser, Location, User specific content
Consistent Data Transition/Modeling/Preparation (Pre-Render)

Modularization & Separation of Concerns
Modularizing your code into logical chunks
Each thing should do the thing its best at
Dan Abramov: http://react-file-structure.surge.sh/
*move things around until it feel right*


CRUD Operations with REST and Express
CREATE
```app.post('/resource')``
READ
```app.get('/resource')```
UPDATE
```app.put('/resource/:id')```
DESTROY
```app.get('/resource/:id')```


Server Testing
Generally, avoid starting the actual server for testing
Instead, export your server as a module in a library
Then, you can use ```supertest``` to run your tests
This will hit your routes as though your server was running, without actually starting it
That’s one less thing to go wrong (eliminate variables when testing!)

Additionally, you can wrap ```superagent``` in a module (the demo code created an ```agent.js``` module that does this)
Doing this, allows you set up a “mock” of this new agent module
Create a folder called __mocks__ where the ```agent.js``` file is with an agent.js file in it
When you invoke ```jest.mock()``` on the agent file in your test, jest is smart enough to use that mocks version instead of the real one
Why is this cool? We can 100% fake every call to the API. Again – you don’t want your tests of the web server to be dependent on the API running, so mock (fake) it, so that you are testing only the interface to the API, not the actual data
You test the data/veracity of the API when you write your API tests, not web server tests…
Test Pyramid
Server Testing crosses boundaries
Units: Server Internal Functions
Mock any integrations (like data fetching)
Integration: How it connects to other services
Really connect to other services (hard dependencies)
Acceptance
The server might be a dependency of some other test