## https://docs.mongodb.com/manual/core/aggregation-pipeline/
Mongo Aggregations:

The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into aggregated results.

```
db.orders.aggregate([
   { $match: { status: "A" } },
   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
])
```
First Stage: The $match stage filters the documents by the status field and passes to the next stage those documents that have status equal to "A".

Second Stage: The $group stage groups the documents by the cust_id field to calculate the sum of the amount for each unique cust_id

Pipeline:

The MongoDB aggregation pipeline consists of stages. Each stage transforms the documents as they pass through the pipeline. Pipeline stages do not need to produce one output document for every input document; e.g., some stages may generate new documents or filter out documents.

Pipeline stages can appear multiple times in the pipeline with the exception of $out, $merge, and $geoNear stages

```db.collection.aggregate() ```  method to run the aggregation pipeline

In MongoDB, the aggregate command operates on a single collection, logically passing the entire collection into the aggregation pipeline. To optimize the operation, wherever possible, use the following strategies to avoid scanning the entire collection.

$match
The $match stage can use an index to filter documents if it occurs at the beginning of a pipeline.
$sort
The $sort stage can use an index as long as it is not preceded by a $project, $unwind, or $group stage.
$group
The $group stage can sometimes use an index to find the first document in each group if all of the following criteria are met:

The $group stage is preceded by a $sort stage that sorts the field to group by,
There is an index on the grouped field which matches the sort order and
The only accumulator used in the $group stage is $first.

$geoNear
The $geoNear pipeline operator takes advantage of a geospatial index. When using $geoNear, the $geoNear pipeline operation must appear as the first stage in an aggregation pipeline.

## https://www.compose.com/articles/aggregations-in-mongodb-by-example/
Aggregation examples:

```
{
  "id": "1",
  "firstName": "Jane",
  "lastName": "Doe",
  "phoneNumber": "555-555-1212",
  "city": "Beverly Hills",
  "state: "CA",
  "zip": 90210
  "email": "Jane.Doe@compose.io"
}

> db.customers.aggregate([ ... aggregation steps go here ...]);
```
The aggregate function accepts an array of data transformations which are applied to the data in the order they're defined. This makes aggregation a lot like other data flow pipelines: the transformations that are defined first will be executed first and the result will be used by the next transformation in the sequence.

```
> db.customers.aggregate([ 
  { $match: { "zip": 90210 }}
]);
```
to match documents
```
> db.customers.aggregate([ 
  { $match: {"zip": "90210"}}, 
  { 
    $group: {
      _id: null, 
      count: {
        $sum: 1
      }
    }
  }
]);
```
to group in a subset after a match

```
> db.transactions.aggregate([
  { 
    $match: {
      transactionDate: {
        $gte: ISODate("2017-01-01T00:00:00.000Z"),
        $lt: ISODate("2017-01-31T23:59:59.000Z")
      }    
    }
  }, {
    $group: {
      _id: null,
      total: {
        $sum: "$amount"
      },
      average_transaction_amount: {
        $avg: "$amount"
      },
      min_transaction_amount: {
        $min: "$amount"
      },
      max_transaction_amount: {
        $max: "$amount"
      }
    }
  }
]);
```
Our final result gives us an interesting picture of what monthly sales looked like in our fictitious cookie shop:
```
{ 
  _id: null, 
  total: 20333.00, 
  average_transaction_amount: 8.50,
  min_transaction_amount: 2.99,
  max_transaction_amount: 347.22
}
```
