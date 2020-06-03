# Discussion:

1. Why would a developer choose to make data models?
Models promote consensus among developers, customers and other stakeholders. A data model also promotes agreement on vocabulary and jargon. The model highlights the chosen terms so that they can be driven forward into software artifacts. The resulting software becomes easier to maintain and extend.

1. What purpose do CRUD operations serve? 
Allows programmers to create, read, update, and delete code in a database and map well to the HTTP verbs that are frequently used in REST: create, post, put and delete.

1. What kind of database is Postgres? What kind of database is MongoDB?
Postgres is a relational database and relies on a scale-up architecture.  MongoDB is a document database, distributed on a scale-out structure, and is a clod-based platform.

1. What is Mongoose and why do we need it?
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

1. Define three related pieces of data in a possible application. An example for a store application might be Product, Category and Department. Describe the constraints and rules on each piece of data and how you would relate these pieces to each other. For example, each Product has a Category and belongs in a Department.
For a restaurant reviews application, you might have a restaurant listing, a food category, and a location.  Each restaurant has a listing of info about the restaurant itself (like address, website, phone number, menu), is in a location (to allow for searching in a neighborhood or within a certain radius of the user), has a food category (like thai to enable the user to search for all restaurants within a certain area that serve thai food).

## Vocabulary:

1. database- a structured set of data held in a computer, especially one that is accessible in various ways.

1. data model- A data model is an abstract model that organizes elements of data and standardizes how they relate to one another and to the properties of real-world entities.

1. CRUD- create, read, update, and delete (CRUD) are the four basic functions of persistent storage.

1. schema- the organization or structure for a database. The activity of data modeling leads to a schema. (The plural form is schemata.

1. sanitize- a way to protect the system from malicious data.

1. Structured Query Language (SQL)- a programming language designed to get information out of and put it into a relational database.

1. Non SQL (NoSQL)- A NoSQL originally referring to non SQL or non relational is a database that provides a mechanism for storage and retrieval of data. ... NoSQL systems are also sometimes called Not only SQL to emphasize the fact that they may support SQL-like query languages.

1. MongoDB- MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

1. Mongoose- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. 

1. record- (also called a structure, struct, or compound data) is a basic data structure. A record type is a data type that describes such values and variables.

1. document- Any written text, illustrations or video that describe a software or program to its users is called program or software document.

1. Object Relation Mapping (ORM)- Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

### Resources:

1. Cloud Databases:
MLab - remotely hosted mongoDB systems. Easily setup a free database (or pay for more horsepower). Works great with Heroku.  For use on AWS, Azure or Google
https://www.mlab.com/

Atlas - Cloud based, highly scalable Mongo DB.  Good security, it seems.
https://www.mongodb.com/cloud/atlas

DynamoDB - AWS NoSQL Database. Very highly scalable. Also provides a ‘mongoose’-like ORM called ‘dynamoose’.    
https://aws.amazon.com/dynamodb/

CosmosDB - The Microsoft Azure equivalent for Atlas and Dynamo
https://cosmos.azure.com/

1. Videos:
https://www.youtube.com/watch?v=ZS_kXvOeQ5Y


1. On NoSQL and Mongoose:
https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool

https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/

https://mongoosejs.com/docs/api.html#Model
Docs for Mongoose. 