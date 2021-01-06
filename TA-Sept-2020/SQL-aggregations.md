# Aggregation functions
- COUNT tells us how many of something.  It doesn't matter what you put inside of the () of count, it just counts the number of rows in the table.  Most people would out COUNT(*).
- SUM gets the sum of all of the columns in a table we want to add together.  SUM(amount).  If there are null values, this will ignore the nulls.  
- AVG gets the average of something from a column in a table
- MIN gives us the minimum value of a column in our table
- MAX gives us the maximum value of  column in a table
Grouping data with GROUP BY
- by columns
- rollup/cube

The GROUP BY clause can organize data into buckets (groups).

The GROUP BY clause is used to group together those rows in a table that hve the same values in all the columns listed.

The GROUP BY clause divides the rows returned from the SELECT statement into groups.  

You can rename columns by using AS.

You can only include stuff in your SELECT if it's included in the aggregation or the GROUP BY clause

ROLLUP creates a grouping set.  The order of which you use ROLLUP is important.  For example, if you're getting something like total payments from a timestamped column in a table, you can ROLLUP by year, month, day: year, month: and the entire year.

If a column contains nested data like an array, you can UNNEST that column.  Like the UNWIND feature in MongoDB.  It creates a row for each item in the array.  

CUBE gives you all possible combinations of groupings, as opposed to ROLLUP.

You can accomplish these aggregations using multiple tables when they're joined.

You can also manually add your GROUPING SETS which will work like ROLLUP where you specify your grouping sets yourself.


## Window aggregations

You can do aggregations OVER a particular window.  It adds an additional column of information.  You can PARTITION BY a specific field, like an id, to get values for something specific, or it can be left blank.

OVER() is how you construct another window (or column in the data) that goes OVER the entire length of the data.  

RANK()
DENSE_RANK()
