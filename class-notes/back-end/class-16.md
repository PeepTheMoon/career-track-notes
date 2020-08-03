HTTP REQUESTS:

You get the data in chuncks and add it to a variable instantiated to store the data.  When you are finished recieving the data, you need to ```res.on('end', () => {});``` to do something when it's finished GETing the data (nice to JSON.parse it into an object so you can dot notate within the data easily), then ```request.end();```

You need to wrap the hhtp request into a requestPromise in order to .then off of it.

*in example code, there is a big in the headers in subpar service.*

SEED DATA/DATA HELPERS:

Good for helping with testing.  Allows you to create seed data so that you don't have to create (as in our voting app) a user, then a vote, then a poll.

AGGREGATIONS:

A way to derive specific info/data out of a data set.  A data processing pipeline(steps) to get specific info out of it.  Mapping through, filtering out things you don't want, reducing, etc.  Array methods.

Whenever you have a $ on the lefthand side of a colon, it's a mongoose operator taking the field value (like a function).  A way to think of operators are like functions that take in a number and adds numbers (taking a sum).  When a $ is on the right of a colon, it's an operator function.

-1 for descending order under the $sort stage.  1 for ascending order.

unwind stage takes an object out of the array.

You can export the pipeline to node to use it in your code.

$strLenCP = string length code points (ie how many characters in a string).

look up mongoDB docs for pipeline stages and operators to see what you can do with the data on the backend.

KAGGLE.COM to find data sets!!!







