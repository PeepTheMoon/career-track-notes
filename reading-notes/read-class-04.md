These readins were very similar to yeasterday, so I just answered the new stuff :)

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

1. 
