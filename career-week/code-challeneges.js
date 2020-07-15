//Create a function add that takes a date and diff and returns a new date with diff added to the original date.

//date is a Date object.
//diff is a string representing the amount of time to add to date
//diff is a number followed by an operator
//e.g. 10d would add ten days

// s = seconds 60
// m= minutes 60
// h = hours 24
// d = days 7
// w = weeks 4
// m = months 12
// y = years

function addToDate = (Date, diff) => {
  //date + diff
  s = 1;
  m = s * 60;
  h = m * 60;
  d = h * 24;
  w = d * 7;
  m = w * 4;
  y = m * 12;

 diff = Date + '';

 return new Date(diff);
};

addToDate(new Date(y));

console.log(new Date(y));


s = 1;
  m = s * 60;
  h = m * 60;
  d = h * 24;
  w = d * 7;
  m = w * 4;
  y = m * 12;

