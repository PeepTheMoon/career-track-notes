Time complexity- how long it takes a function to run based on how many operations it has to perform.

Constant time complexity will take the same amount of time no matter the number:

function bigoh(n) {
  const fruit = ['apple', 'banana', 'orange'];
  return fruit[n];
}

The above function is constant.  It takes the same amount of time because n is just accessing an item in the array.

