/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
// we declared a as variable and we assigned 10 to it as a value //
const x = (function () {
  // here we updated the value of (a) and the new value is 12//
  a = 12;

  // the value of x = 12 
  return function () {
    alert(a);
  };
})();
// the output for the function(x) = 12 
x();