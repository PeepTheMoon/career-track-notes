A database is a collection of related data.

relational database takes a format in columns and rows like an excel spreadsheet.

noSQl is basically anything that's not SQL.  SQL is a structured query language. 

SQL is faster to to read info from the database and slower to write info into the database.  

NoSQL is faster to write to the database but slower to read data from it.

We'll be using MongoDB and comparing it to PostgreSQL
PostgreSQL uses SQL and MongoDB uses 

PostgreSQL is a fixed system with rows and columns, scales vertically (you need to get bigger and bigger machines as you scale up).  Has a limit of 6TB

MongoDB is dynamic and has collections/documents, scales horizontally.  to scale up, you get another small machine and use them all concurrently.  Allows you to distrubute data optimally (i.e. one computer stores data in an area where those users will use it, ie users in europe get their data stored on the computer in europe)

If interested in databases, they are structured with b-treees (check it out if interested)

mongoose allows us to apply schemas to mongodb collections

When writing a model name for MongoDB, they should be Uppercase for the first character and singluar.  It will be like our table.

.findByIdAndUpdate returns the object pre update.  To get it returned post update, add ```{ new: true }``` to the update query.

.put when you want to change the entire object.
.patch when you want to edit a partial piece of the object.

The models for mongodb are classes.  You get built in static methods with mongoose and add aditional static menthods for the class you're creating.

```npm i -D mongodb-memory-server``` will start and run the mondo memory server in your tests file.
