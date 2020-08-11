store.subscribe takes a function and invokes it every time state changes.

const store = createStore(reducer, initialState) takes the place of const [state, dispatch] = useReducer();

store.getState gets the current state.

store.dispatch dispatches an action

the npm i react-redux library creates our Provider for us.