Hooks have to be used at the top level of your componenent, unnested.  Only from functional components, not from class componenets or anywhere else.

independent v dependent state.

Independent state change doesn't care what the previous state was, whereas dependent state change does, as in a counter.

useEffect takes a callback function and is always invoked when a component forst mounts.

It will also be invoked at three other times depending on the 2nd argument.

If an empty array is pased, the callback wil only be invoked once on mount.

If nothing is passed useEffect callback will be invoked on every rerender.

Be careful of infinite loops!

If an array with value is passed, useEffect's callback will be invoked on mount and every time one of those values changes.

