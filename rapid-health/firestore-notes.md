# Cloud Firestore Notes

## Quick Reminders:
1. documents have limits
2. you can't retrieve a partial document
3. queries are shallow
4. you're billed byt he number of reads and writes you perform
5. queries find documents in collections
6. arrays are weird

# Database Indexes in Firestore
[Index Type Docs](https://firebase.google.com/docs/firestore/query-data/index-overview)

A database index maps the items in a database to their locations in the database. When you send a database a query, the database can use an index to quickly look up the locations of the items you requested.

### Cloud Firestore uses indexes for all queries, 
thus query performance depends on the size of the results set and not on the number of items in the database.   Scales well, keeps performance fast for queries.

### The indexes required for the most basic queries are auto created. 
As the app is used and tested, Firestore helps identify and created additional indexes automatically.

## Cloud firestore uses two types of indexes:
  - single field index
  - composite index

Besides the number of fields indexed, single-field and composite indexes differ in how you manage them.

### Single Field Indexes


