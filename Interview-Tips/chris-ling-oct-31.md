Data structures and algorithms interviews

What?  An interview that tests computer science concepts through writing and/or executing code to perform some discrete task or to implement some algorithmic logic.  Requires a strong fundamental knowledge of vanilla coding, an understanding of optimization (big-O) and scalability, and the ability to plan and communicate your plan to an interviewer.  No need to create an app.  

Example formats:
- single coding challenge 30min-1hr
- rapid fire series of simple algorithms/coding (~10 questions) over an hour.
- multiple challenges that build on a single algorithms problem.

Tip: read Grokking Algorithms (written in Python) and sign up for Leet Code (can filter by data type or even company!) or Code Wars

Interview components:
- Scope: what is the algorithm we are trying to build?  What are the key facts and conditions?  What ambiguities need clarity?  Do I need to consider Big O (performance, operation, optimization)? 

- Road map: What are the big picture steps we need to do?  Can I discuss this conceptually without using code? Using psuedo code to think out the process.

- Code: Can I translate my big picture to specific code?  Can I switch work to different parts of the road map?  How do I refactor when I see an edge case?  Don't feel like you need to solve a problem as soon as you solve it, you can make a note to come back to it later.

- Retro: Does my algorithm execute and return a result?  Have I covered all edge cases?  How does my algorithm perform, and what could I improve?  What's the memory difference between ways to solve problems?  What would you have done if you had more time?  Does it scale well?  


Interview components:
How do these components apply to different time formats?
1. Lightning round (5-10 min): "Easy" questions involving a single, simple type of function; it may be obvious or may be "clever" (reverse a string, transform or filter an array).  Err toward writing code, explain as we write.  Don't worry about retro or writing most optimal code (we won't have time).

1. Half-time (30min):  "Easy to medium" questions which may test a straightforward implementation of a data structure/algorithm with minimal to no edge cases.  Scope and road map if necessary.  Try to code an optimal solution.  Reserve ~5 min to retro.

1. Full time (60min):  "Medium to hard" questions that provide some novel algorithmic problem with several possible algorithmic approaches and a number of hidden edge cases.  Scoping and road mapping are very important here; reserve 5-15 min.  Make sure we have a well-though out road map before committing to code (with discrete parts within which you can be flexible and switch contexts), and retro is super important here (reserve ~10 min).


General practice strategies:

Build deep knowledge and develop coding "muscle memory"
1. Get a structured resource and learn DS/algorithms:  We may be brilliant, but we may not be able to reverse engineer every concept from just brute force problems (e.g. recursion(to traverse a tree, for example), dynamic programming, Big O notation), and interviews will likely use CS lingo when giving you hints.

1. Practice with a volume of problems:  Whether it's LeetCode, CodeWars, a book, or some other resource, practice with a lot of questions, and don't just practice randomly.  If we're learning a concept, intentionally practice it and find overlapping problems (string v. array manipulation, etc.).

1. Strict time management and context switching:  Get a stopwatch/timer.  Practice hard time stops for each part of the coding.  Don't get sucked down the rabbit hole, no matter how close we think we are to solving the problem.  Good road mapping will allow you better time management when switching between different parts of the problem.


General practice strategies:

Always communicate with the interviewer
1. Communicate your contemplation: Sometimes we need to think and not talk, but indicate that to the interviewer ("I need a moment to think, if that's ok").

1. Communicate your plan:  Maybe it's obvious to us what our solution is, but it's not obvious to the interviewer that we have a solution.  Don't force the interviewer to be a mind reader.

1. Practice "hand-waving", "black boxing", and "side-noting":  If we catch an edge case that we don't want to distract ourselves with yet, or if we don't know how to implement a specific thing, identify it but indicate we want to hold off for now t work on the main focus of our attention.

1. Ask for clarification and hints:  DS/algorithms are sometimes designed to have gotchas and edge cases.  And sometimes we just brain fart.  The interviewer is a resource to get us on track.  If you ask for a hint-TAKE IT.  Implement it.


Solve thoughtfully, not quickly or with brute force
1. Use human language and psuedo code:  When we say the magic code word, we tend to lock ourselves into that code.  We want to iterate through each of the choices, not the "forEach array".

1. Write, don't type your code:  When we can spam the backspace/delete keys or console.log, we tend to debug as we go.  Erasing is tedious, so it forces us to be more deliberate in thinking ahead.

1. Saying "this reminds me of x" v "this is x":  This is the conceptual equivalent of "magic code words".  If we identify a similarity with another algorithm, we can acknowledge it, but don't say that it is the thing.

1. Explain why something is optimal vs. suboptimal:  In math class, we show our work, not just get the right answer. How does the interviewer know we're not just randomly guessing?



Case Study- Verifying an Alien Dictionary (LeetCode #953)

Questions to ask:
- HOw many words should I expect?
- How many letters should  expect?
- Do I have any limitations in terms of memory?
- How do I prefix words? (engineer v engineering, for example, how do you order the short v long one?)
- How do I handle capitalization?
- Should I consider improper values (number, nulls)?

In this case, we are comparing two things.  Compare the first item in an array to the item that comes after it.  If their order is correct, we can move on.  If the order isn't isn't correct, we can break out.  after going through the array entirely without breaking out, return true.

compare each corresponding letter at the same position until word 1 has no more letters

if word 1s letter is in order before word 2s letter pass!
if word 1s letter is not in order before word 2s letter, fail!

if word 1 and word 2s letter are the same, move onto the next position

if word 1 is longer than word 2 and al =l of word 2s letters match



