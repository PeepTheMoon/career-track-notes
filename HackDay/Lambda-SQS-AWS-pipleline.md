Lambda-
only does something when you need it to.  Little functions that live in the cloud.  You can make a request to the function which invokes it and then it returns a response.  The function gets invoked only when the request comes in, it responds, then it gets shut down.  You can have multiple instances of this function running at the same time, and don't need a separate computer to run it.  You can make an HTTP request to trigger it, you can have/add a message in a queue trigger it, things like inserting a row in a database to trigger it (ex: adding a new user to a database triggers a welcome email to get sent), adding a video to s3, etc.  These events are called triggers that will invoke the cloud function.

SQS (simple queue service)-
(adding something to the queue will trigger a lambda function)
2 types:
1. batch mode(standard)- will send a a group of cloud functions to separate cloud functions which run at the same time.  Hard to determine order, no guarantee which will be processed first.  Good for when order doesn't matter, like creating thumbnails out of images.

2. FIFO(first-in, first-out) queue- once we send a batch of messages to a lambda cloud function, we will wait until they are finished, then process the second batch.  This is a good one for when you need to process something one at a time, like ticket sales.  maintains the order.  When making a fifo, you need to add '''.fifo''' tot he end of the filename.

SNS (simple notification service)-
sends notifications to different services, like analytics to update the data, an email to the user with their order info, a payment notification to enter payment data, notifying the order queue of a new order, etc.  This serves as a middleman from the API/BE to the SNS service, which notifies everyone who needs to be notified, which then triggers the queue and cloud function(lambda).  Keeps everything decoupled so each service operates independently of the other.  

These are all micorservices!  An event-driven architecture.

Amazon RDS is a cloud-based relation database service.  You can use several different types of database services, like postgres, with RDS.



