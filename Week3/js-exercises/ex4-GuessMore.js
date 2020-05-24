/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
// when the function f() will be executed it will increase the value of x by 1 so the result will be x = 10//
f1(x);
// the function will not change the variable of x so the value will be the same so the output = 9//
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
// when we call the function it will increase the obj y so the output will be 10 
f2(y);
console.log(y);

/* 
when (x) is passed as an argument of (f1) it will not change the original value of (x) becouse the function will only get to know the value not the argument location.
but when (y) object passed as an argument to (f2) function (that the argument key value ) it will alson change the value of (y) becouse if the function changes an object property it will chaange the orignail value as well .
*/
