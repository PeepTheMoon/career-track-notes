# https://reactjs.org/docs/hooks-custom.html

Building your own Hooks lets you extract component logic into reusable functions.

When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so it works for them, too!

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. For example, useFriendStatus below is our first custom Hook:
```
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

Just like in a component, make sure to only call other Hooks unconditionally at the top level of your custom Hook.

The purpose of our useFriendStatus Hook is to subscribe us to a friend’s status. This is why it takes friendID as an argument, and returns whether this friend is online:
```
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  return isOnline;
}
```

maybe you have a complex component that contains a lot of local state that is managed in an ad-hoc way. useState doesn’t make centralizing the update logic any easier so you might prefer to write it as a Redux reducer:
```
function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, {
        text: action.text,
        completed: false
      }];
    // ... other actions ...
    default:
      return state;
  }
}
```

Reducers are very convenient to test in isolation, and scale to express complex update logic. You can further break them apart into smaller reducers if necessary. 

So what if we could write a useReducer Hook that lets us manage the local state of our component with a reducer? A simplified version of it might look like this:
```
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
```
Now we could use it in our component, and let the reducer drive its state management:
```
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: 'add', text });
  }

  // ...
}
```
The need to manage local state with a reducer in a complex component is common enough that we’ve built the useReducer Hook right into React. 


# https://reactjs.org/docs/hooks-rules.html

Only Call Hooks at the Top Level
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

Only Call Hooks from React Functions
Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.
✅ Call Hooks from custom Hooks.
By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

ESLint Plugin
We released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules.

```npm install eslint-plugin-react-hooks --save-dev```

So how does React know which state corresponds to which useState call? The answer is that React relies on the order in which Hooks are called.

As long as the order of the Hook calls is the same between renders, React can associate some local state with each of them. But what happens if we put a Hook call (for example, the persistForm effect) inside a condition?
```
  // 🔴 We're breaking the first rule by using a Hook in a condition
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }
  ```
The name !== '' condition is true on the first render, so we run this Hook. However, on the next render the user might clear the form, making the condition false. Now that we skip this Hook during rendering, the order of the Hook calls becomes different:
```
useState('Mary')           // 1. Read the name state variable (argument is ignored)
// useEffect(persistForm)  // 🔴 This Hook was skipped!
useState('Poppins')        // 🔴 2 (but was 3). Fail to read the surname state variable
useEffect(updateTitle)     // 🔴 3 (but was 4). Fail to replace the effect
```
React wouldn’t know what to return for the second useState Hook call. React expected that the second Hook call in this component corresponds to the persistForm effect, just like during the previous render, but it doesn’t anymore. From that point, every next Hook call after the one we skipped would also shift by one, leading to bugs.

This is why Hooks must be called on the top level of our components. If we want to run an effect conditionally, we can put that condition inside our Hook:
```
  useEffect(function persistForm() {
    // 👍 We're not breaking the first rule anymore
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
  ```


# https://www.telerik.com/kendo-react-ui/react-hooks-guide/#toc-custom-react-hooks

Hooks are just functions! Anything that is a function can become a Hook.

there are two ways of using useEffect. You can use it without cleanup or with cleanup. 

useEffect tells React that our component needs to do something after the component renders. It runs after the first render and after every update. 

If you do need cleanup to run, you can return a function from useEffect. This is optional and it allows you to run some code after your effect and before any new effect runs. A situation where you subscribe to something may need an unsubscribe as part of the effects cleanup process. React will perform this cleanup on unmount.
```
useEffect(() => {
  console.log("Subscribe to Something);
  return function cleanup() {
    console.log("Unsubscribe to Something);
  };
});
```

We can also optimize performance by skipping effects with an optional argument. For instance, maybe we don't want to run the subscribe/unsubscribe effect unless some id has changed. 
```
useEffect(() => {
  console.log("Subscribe to Something);
  return () => {
    console.log("Unsubscribe to Something);
  };
}, [props.something.id]); // only if something.id changes
```

Hooks, and specifically useEffect, now allow you to split up code based on what it's doing rather than what lifecycle method it's in. When we only had classes and lifecycle methods, we would sometimes have to mix concerns. Now, using multiple useEffect methods, React can apply each effect in the order they are specified. This is a huge benefit for organizing code in your application.

Custom Hooks are JavaScript functions whose names are prefixed with the word use. A custom Hook is a normal function but we hold them to a different standard. By adding the word use to the beginning, it lets us know that this function follows the rules of Hooks.

```
import React, { Component, useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  useEffect(() => {
    document.title = `You clicked ${count} times`
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  )
}

export default Counter;
```
So what we would like to do here is to create a custom Hook that we pass a piece of text into and the Hook updates the document title for us. Let's first look just at the code required to create this custom Hook:
```
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
}
```
Above you see that all we need this Hook to take as an argument is a string of text which we will call title. Inside the Hook we call React Core's basic useEffect Hook and set the title so long as the title has changed. The second argument to useEffect will perform that check for us and only update the title if its local state is different than what we are passing in.


# https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d

1. useArray hook
Array manipulation is what a dev goes through every weekday. Adding elements to an array or removing an element at a given index is a daily routine for us. useArray reduces this burden by providing us with various array manipulation methods. This hook is a part of the react-hanger package.

yarn add react-hanger
import {useArray} from 'react-hanger'

2. react-use-form-state hook
Forms are everywhere, even in the smallest of applications we have to encounter forms and manage their state. Managing form state in React can be a bit unwieldy sometimes.
react-use-form-state is a small React Hook that attempts to simplify managing form state, using the native form input elements you are familiar with.

Installation:
npm i react-use-form-state

3. react-fetch-hook
Making ajax calls is like the most basic and most performed task for a frontend developer. And the React community is quick enough to create a hook for this purpose too.

Installation:
npm i react-fetch-hook

4. useMedia hook
useMedia is a React sensor hook that tracks the state of a CSS media query. We all know the importance of the media queries and how much important is responsiveness for any site.

5. react-useportal hook
React Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. And this hook helps us do that.

Installation:
yarn add react-useportal

6. react-firebase-hooks
We all appreciate the greatness of firebase and use it a lot in our projects, whether its for authentication or storage. And this hook is the one we really need.

Installation:
npm i react-firebase-hooks

7. use-onClickOutside hook
An outside click is a way to know if the user clicks everything but a specific component. You may have seen this behavior when opening a dropdown menu or a modal or a dropdown list.

8. useIntersectionObserver hook
A React hook for using intersection observers.
The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport.

Installation:
npm i react-use-intersection-observer

9. use-location hook
The name says it all, this hook is used for getting the location of the browser.

10. use-redux hook
This one is for my redux readers. This hook returns the store and dispatch property.

Installation:
yarn add use-redux
