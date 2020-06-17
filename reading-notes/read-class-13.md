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




