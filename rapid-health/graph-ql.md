# GraphQL is an API standard by FB, and is a query language for APIs.

- enables declarative data fetching (client can specify what data it needs from the api

- responds with a single endpoint that provides the data requested, instead of multiple fetch calls.)

## A more efficient alternative to REST.  

1. increased mobile usage creates needs for efficient data loading.
    - graphql minimizes the amount of data that needs to be transferred over these mobile networks

1. variety of different front-end frameworks and platforms on the client-side- makes it difficult to build an api that meets all of the requirements for each client.
    - with graphql each client can access precisely the data it needs

1. Fast development speed and expectation for rapid feature development with continuous deployment
    - Data exposed from the server often needs to be modified to account for specific requirements and design changes.

REST offers stateless servers and structured access to resources

REST is a strict specification of how a server is to expose its data to the clients.

Has shown to be too inflexible with keeping up to the changing requirements of the clients that access them

Graph QL was developed to provide more flexibility and meet the needs of clients.
No more over- (downloading unnecessary data) or under- (an endpoint doesn't return the right information, and multiple API calls need to be made) fetching.

REST structures endpoints according to the data needs of the client (i.e. structures the endpoints according to the views of the client's application).

    - this doesn't allow for rapid product iterations on front end.
    - With every change to the UI there is a high risk of too much or not enough data.
    - back end needs to be adjusted to count for the data needs

Changes on the client side in graphQL can be made without any work on the server, increases feedback cycles and allows for rapid product iterations.

Insightful analytics through graphQL:

    - fine grained info/insights about what data is read by clients
        - it's possible to get a deep understanding of how the data is being used.
    - enables evolving API and deprecating unneeded APi features.
    - Great opportunities for instrumenting and performance monitoring.
        - can do low-level performance monitoring.

GraphQL uses strong type system to define capabilities of an API
 - all types are written down in a schema

Schema serves as contract between client and server
- tells the client how to access the data

Frontend and backend teams can work completely independent of each other.

### GraphQL uses the Schema Definition Language (SDL)
 ```
 type Person {
     name: String!
     age: Int!
     posts: [Post!]
 }

type Post {
    title: String!
    author: Person!
}
```
There is a one-to-many relationships between the Person schema and the Post schema above.

#### Fetching data with queries

REST APIs use data that is loaded from certain endpoints who have a clearly defined structure that it returns, with each endpoint the data requirements are encoded int he url of the client it connects to.

GraphQL typically uses only one endpoint.  It means the client needs to send more information to the server about the data it needs, which is called a query. The root field of the query is the first key, and everything else is called the payload. 

Each query can have 0 or more arguments if it's specified within the query.
```
{ 
    allPersons(last: 2) {
    name
    age
    }
}
```
GraphQL also allows for querying nested information.
```
{
    allPersons {
        name
            posts {
                title
            }
    }
}
```
#### Making changes to data with GraphQL

Changes are made using mutations:

    1. mutations create new data
    1. update existing data
    1. delete existing data

Mutations generally follow the same syntactical structure as queries, but must begin with the key mutation
```
mutation { 
    createPerson(name: "Bob", age: 36) {
        id
        name
        age
    }
}
```
GraphQL will automatically generate unique IDs through the server, so it can be added.

#### Get realtime updates through the server through subscriptions
```
subscription {
    newPerson {
        name
        age
    }
}
```
The client subscribes to server to receive updates on when new users added.   



