Always break down code into it's smallest parts.  Set expectations and see what the result is. (beginning tdd)

snippets: in an index.html, using the ! + tab auto fills.

understand the parent/child relationships.

add the live server extension!

folder = directory

cmd + shift + z = redo

cmd + a = selects whole page


CSS basics:
```
display: flex;    
flex-direction: column;    
justify-content: center;
align-items: center;
```

```npx create-alchemy-bootstrap .```

functions:
most of the time,
inputs = arguments = parameters

parameters refer to the abstract when declaring/writing a function, 
arguments refer to the actual thing being fed to a function when you call it.


pure functions functions take these in, then return an output or return value.  (no side effects).  Pure functions mean the same input === same output.  We can predict the output, therefore we can test it.  If you can set an expectation, then you can write a unit test.

declaring a function happens when you're making a blueprint of the actions you want to happen. 

When you're employing the function for use, you're calling/invoking.

impure functions return something different every time.  They are difficult to test.

.value to get the value of something from document.getElementById

modularity = single responsibility = separate tasks into their own files to divide up work.  Makes error handling easier and helps when you have several people looking at/working on one project.

side effects are when running function changes something in another place instead of returning something. 

Number(firstVal.value) -or- firstVal.valueAsNumber
