/* Code is expected to receive a number (n) from the user.  The program
is to list all numbers starting at '1' in increments of 1 up until it
reaches the number the user inputted. Within the list, for every number
that is divisible by 3 with 0 as a remainder, it is listed as 'fizz'.
For every number that is divisible by 5 with a 0 as a remainder, it is
listed as 'buzz'.  For every number that is divisible by BOTH 3 and 5,
it is listed as 'fizzbuzz'. */

let getNumber = parseInt(prompt('Please enter a number:', ''));

for (let n = 1; n <= getNumber; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log('fizzbuzz');
  } else if (n % 3 === 0) {
    console.log('fizz');
  } else if (n % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(n);
  }
}