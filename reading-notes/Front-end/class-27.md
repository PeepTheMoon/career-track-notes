# https://css-tricks.com/understanding-react-setstate/

React components can, and often do, have state. State can be anything, but think of things like whether a user is logged in or not and displaying the correct username based on which account is active. Or an array of blog posts. Or if a modal is open or not and which tab within it is active.

React components with state render UI based on that state. When the state of components changes, so does the component UI.

Workings of `setState()`
setState() is the only legitimate way to update state after the initial state setup. Let’s say we have a search component and want to display the search term a user submits.

Here’s the setup:
```
import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    state = {
      searchTerm: ''
    }
  }
}
```
We’re passing an empty string as a value and, to update the state of searchTerm, we have to call setState().
```
setState({ searchTerm: event.target.value })
```
Here, we’re passing an object to setState(). The object contains the part of the state we want to update which, in this case, is the value of searchTerm. React takes this value and merges it into the object that needs it. It’s sort of like the Search component asks what it should use for the value of searchTerm and setState() responds with an answer.

This is basically kicking off a process that React calls reconciliation. The reconciliation process is the way React updates the DOM, by making changes to the component based on the change in state. When the request to setState() is triggered, React creates a new tree containing the reactive elements in the component (along with the updated state). This tree is used to figure out how the Search component’s UI should change in response to the state change by comparing it with the elements of the previous tree. React knows which changes to implement and will only update the parts of the DOM where necessary. This is why React is fast.

1. We have a search component that displays a search term
1. That search term is currently empty
1. The user submits a search term
1. That term is captured and stored by setState as a value
1. Reconciliation takes place and React notices the change in value
1. React instructs the search component to update the value and the search term is merged in

Reconciliation will only change the entire tree if the roo of the tree is changed.

The rule of thumb is to never mutate state directly. Always use setState() to change state. Modifying state directly will not cause the component to re-render.

You can pass setState() props and even functions.


Access Previous State Using Updater

When building React applications, there are times when you’ll want to calculate state based the component’s previous state. You cannot always trust this.state to hold the correct state immediately after calling setState(), as it is always equal to the state rendered on the screen.

An updater allows you access the current state and put it to use immediately to update other items.

setState() should be treated asynchronously — in other words, do not always expect that the state has changed after calling setState().

1. Update to a component state should be done using setState()
1. You can pass an object or a function to setState()
1. Pass a function when you can to update state multiple times
1. Do not depend on this.state immediately after calling setState() and make use of the updater function instead.

# https://reactjs.org/docs/reconciliation.html

Reconciliation

When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. Going from <a> to <img>, or from <Article> to <Comment>, or from <Button> to <div> - any of those will lead to a full rebuild.

When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive componentWillMount() and then componentDidMount(). Any state associated with the old tree is lost.

Any components below the root will also get unmounted and have their state destroyed.

When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.

When updating style, React also knows to update only the properties that changed.

Component Elements Of The Same Type

When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance.

Recursing On Children

By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.

*insert an element at the end to improve performance, or add a key to the children.  If the element you'll display already has a unique id, implement that as the key from your data*

The key only has to be unique among its siblings, not globally unique.

1. The algorithm will not try to match subtrees of different component types. If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven’t found this to be an issue.
1. Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.

# https://reactjs.org/docs/typechecking-with-proptypes.html

As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:
```
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```
PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

Requiring Single Child

With PropTypes.element you can specify that only a single child can be passed to a component as children.

Default Prop Values

You can define default values for your props by assigning to the special defaultProps property:

If you are using a Babel transform like transform-class-properties , you can also declare defaultProps as static property within a React component class. This syntax has not yet been finalized though and will require a compilation step to work within a browser. For more information, see the class fields proposal.

The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component. The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.
