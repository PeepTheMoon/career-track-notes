flux and redux are the same design pattern!

mvc=
model are all of the services (data)
view are all of the presentational components (how things look)
controller are all of the containers (how things work/behave)

services look similar in all of the patterns

in mvc, containers ask the model for data, the model returns the data to the controller and then passes the data to the view, and the view displays it.

best for most small apps.



flux/redux=
in flux architecture, we have the same sort of service file to get data.  
we have a store (global state)
we grab info from the store in our components. (like the view of mvc)

The component(view) dispatches an action, which hits a reducer.  Then the reducer updates the store.  These are like the controller of mvc.

flux scales better, so use it for bigger apps and whenever you need global state


Probably best to go with mvc, using functional components and custom hooks.  



