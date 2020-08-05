Start with presentational components at the smallest level, then everything that holds those components.  small pieces are usually functional components.

snapshot test your components.  These are how things look, and the snapshot makes sur things look the way you expect them to.  There is no state so the presentation should be static.

Hooks hook  the state into the component, 

you need proptypes in the components that take any properties.

the reducer manages the state used by the hook.  It holds initial state and all of the cases that will change/modify state.

the provider provides the state to all of the children via the reducer.  wrap everything in index.js in the provider so that state is available to everyone.

useEffect- anytime you're changing state!  with a condition.

