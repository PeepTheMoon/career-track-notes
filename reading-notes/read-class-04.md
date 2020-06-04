*These readins were very similar to yeasterday, so I just answered the new stuff :)*

# Discussion:
1. Describe how NoSQL Databases scale horizontally:
They can handle increased traffic simply by adding more servers to the database, then it divides the data set and distributes the data over multiple servers, or shards.  Each shard is an independent database.
https://hackernoon.com/database-scaling-horizontal-and-vertical-scaling-85edd2fd9944

1. Give one strong argument for and against NoSQL Databases:
For:  With multiple servers, in the case of something like Instagram,  one server might store user profile information, another stores stories and highlights and another stores images.  The query is addressed to specific servers, which reduces the load on the server and gives better performance.
https://hackernoon.com/database-scaling-horizontal-and-vertical-scaling-85edd2fd9944

Against:  Making joins is difficult, as it may involve cross-server communication.

1. Name 3 cloud based NoSQL Databases:
Amazon DynamoDB, Azure Cosmos DB, MongoDB
https://en.wikipedia.org/wiki/Cloud_database#Vendors

## Resources:

1. https://dev.to/paulasantamaria/testing-node-js-mongoose-with-an-in-memory-database-32np

Advantages of using ``` npm i -D  mongodb-memory-server```: 
Your code is directly executed using the in-memory database, exactly the same as using your regular database, which makes for a faster development process.  The tests are more reliable since you're testing the actual code.  

Cons:  Uses more memory, takes longer to run, and the database needs to be seeded in order to test the code.


1. https://cubettech.com/resources/blog/introduction-to-repository-design-pattern/

A design pattern is a reusable solution to a general problem occurring in a given context in software design.  It is NOT transferred into code.

 Repository pattern is a kind of container where data access logic is stored. It hides the details of data access logic from business logic. In other words, we allow business logic to access the data object without having knowledge of underlying data access architecture.

Advantages:
    1. Centralization of the data access logic makes code easier to maintain
    1. Business and data access logic can be tested separately
    1. Reduces duplication of code
    1. A lower chance for making programming errors

Flexibility through Repositories

In order to separate our Controllers from the database in right manner, we are going to abstract that interaction into repositories. A repository is simply an interface between two things.

So instead of referencing Eloquent directly, we can reference UserRepository. We can then bind UserRepository to EloquentUserRepository so that Laravel knows that whenever we mention UserRepository we want an instance of EloquentUserRepository. Now that we have abstracted the database layer into repositories it makes it much easier to switch database ORM.

For example, if you wanted to use Mongo instead, you would simply create a MongoUserRepository and bind UserRepository to it rather than EloquentUserRepository.

Now, whenever Laravel wants a UserRepository it will return MongoUserRepository.
So you don’t have to change any of the code in your Controllers on a database technology change.

To have your app use Repositories, you will need to set up:
    1. UserRepository
    1. EloquentUserRepository
    1. A way to bind UserRepository and EloquentUserRepository
We can use Service Providers to bind things together. Service Providers are just like bootstrap classes that allow you to set things up in a certain way.

You will need to create a new directory called app/lib to store this.  To hve it included in your autoload, it needs to be added to the composer.json file.  Add the following to the clssmap array:
```
"autoload": {
"classmap": [
"app/lib"
]
}
```
The run this code from the termianl to update the autoload classmap:
```composer dump-autoload```



1. https://www.npmjs.com/package/mongodb-memory-server
npm package info

