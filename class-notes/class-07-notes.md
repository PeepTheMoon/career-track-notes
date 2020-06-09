Unit testing class internal functions and sees if they're working properly. 

Integration testing connects to other services and makes sure the integration between the pieces are connected properly.

Acceptance tests are where your service is a dependency of some other test and makes sure it's working.

supertests which test routes are integration tests

REST is a software architecture or a set of constraints.  It details where we put out code and how the route should look.  Representational State Transfer.

res.send is best to use, because it knows if it's an object or text and acts accordingly.

middleware can be applied to specific paths and also specific routes, AND specific methods.

everything in express is middleware, actually.

npm init @alchemycodelab/app but pick node this time to use the new bootstrap

