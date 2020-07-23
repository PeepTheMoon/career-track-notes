layered architecture is a way of separating conerns.  seperating concerns makes code easier to write, able to be reused, easier to maintain, and easier to test.


models
manage data
responsible for the shape of our data
and retrieving data from the data store.
handle the crud routes

view
responsible for presenting data
made up of presentational(functional) components

controller
decides how to handle UI
orchestrates our react applications and are made up of container(class) components

In the MVP or Model View Presenter architecture,
everything goes through the presenter.  The model has no access to the view as it does in the MVC architecture.  

The model is essentially our services in the MVP architecture.

Whenever dealing with express, alway add a header with the content-type for your CRUD routes on the front-end.