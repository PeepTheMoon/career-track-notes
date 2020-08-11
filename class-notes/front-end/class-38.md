if a functional component is using global state, you don't need props

actions are a way of setting state, and selectors are a way of getting state.  the useSelector function takes a selector function as a value without invoking it, and that way if state changes, you just change the way state looks in the selector itself and not have to change every file where that state is used.