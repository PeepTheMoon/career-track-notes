Properties can't be changed, they're read only.  Only the parent can change props.  But they shouldn't be changed.  

*remember that people are leaning way from class components and into functional components.*

state is a property of a component and only of that component.  

State can be transformed *independently* of the previous state (as in forms, or time) 

State can be changed *dependently*.  In order to figure out the next state, you need to know the previous state (as in toggles or a counter).  In this case you add a setState as an arrow function to 'this' and pass it the previous state, which will then return the updated state.

The owner of a piece of state can pass that state to toehr componenets via props, and as props, it becomes read only.  If the consumer wants to update or change state, it has to ask the provider or parent to change that state.  This is done by passing down a function like a handle change to the children who invoke it.

Data flows down from parent to children, events flow back up, like a handle change, then the updated state flows back down to the children as data.