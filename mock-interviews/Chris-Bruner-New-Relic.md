Questions for Chris:

Can you give me an example of how New Relic employees live the company’s values?

where could I be with New Relic in 5 years?

I've heard that you have a mentorship program at New Relic.  Can you describe how the company pairs mentors and mentees?  

How are you supporting your employees as they transition to remote work?

What is a typical day for someone in this role?

What are the opportunities for growth within the company?

What would you say are the most important things you are looking for in a candidate?



Questions from Chris

What is node.js? 
A JavaScript runtime environment.  Includes everything needed to execute a JavaScript program and allows for server-side development.  Can be run on your machine as a standalone application and can now do things that other scripting languages can do.  Runs on the V8 JavaScript runtime engine which converts JavaScript code into faster machine code which the computer can run without needing to interpret it first.  Operates on a single-threaded event-based loop to make all executions non-blocking.

Advantages and disadvantages of node.js?

Advantages:
1. Includes everything you need to execute a program written in JavaScript.
2. Runs on the V8 JavaScript runtime engine which converts JavaScript code into faster machine code which the computer can run without needing to interpret it first, making it high-performing.
3. Has the largest ecosystem of open-source libraries in the world- npm.
4. Easy scalability, easy to learn.
5. Allows for caching so developers don't have to re-execute code, and allows for faster page loading and faster response to the user.
6. Single programming, full-stack- can write front-end and back-end, and makes deployment easy because almost all browsers support JS.
7. Non-blocking I/O systems allow for several requests to be processed concurrently.

Disadvantages:
1. API isn't stable, keeps changing, and forces devs to make changes in the accessible code base to match compatibility with the latest version of Node.js.
2. No strong library support system as compared to other languages and makes it difficult to handle the processing of images, handling database operations, ORM (Object-Relational-Mapping)[a technique for converting data between incompatible type systems using object-oriented programming], and XML parsing (a parser [takes a physical representation of some data and converts it into an in-memory form for the program as a whole to use] that is designed to read XML and create a way for programs to use XML [markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable]).
3. To make it more scalable, you have to adopt the asynchronous programming model, making programmers depend on nested calls.
4. More development time.

Advantages of NoSQL vs SQL?

NoSQL databases are horizontally scalable, which means that they can handle increased traffic simply by adding more servers to the database. NoSQL databases have the ability to become larger and much more powerful, making them the preferred choice for large or constantly evolving data sets.  They are non-relational, and have dynamic schemas for unstructured data.  NoSQL databases can be stored in many ways: document, key-value, graph or wide-column stores. NoSQL are better for unstructured data like documents or JSON.
- You can create documents without having to first define their structure
- Each document can have its own unique structure
- The syntax can vary from database to database, and
- You can add fields as you go.

SQL is relational, vertically scalable, so you increase the load on a single server by increasing CPU (central processing units), RAM (random access memory) or SSD(solid state drive- storage device taking the place of hard disks by using flash-based memory which is faster).
SQL databases use structured query language and have a predefined schema. SQL databases are table based.
SQL databases are better for multi-row transactions.  Great for complex queries, but can be restrictive due to the predefined schemas required to structure your data before you work with it.   All of your data must follow the same structure, and any changes can be difficult and disruptive to the whole system.