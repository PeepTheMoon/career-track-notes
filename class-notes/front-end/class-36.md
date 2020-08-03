useReducer-
an alternative to useState.  Accepts a reducer of type (state, action) => newState

extremely testable.  Good for large sets of state, like in global state

the containers hold the state and pass it to the components.

When making global state, start with app.Context, then app.Provider, then add it to your index.js to wrap your app in it for access to state.  The move on to your reducer to switch cases, 

This is the flux architecture pattern.

can have a transparent background with a .png but not a .jpg