/** 
 * javascript.info - Variables
 * https://javascript.info/variables
 * 
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).


let name = "John";
let admin = name;
alert(admin);


Create a variable with the name of our planet. 
How would you name such a variable?
Create a variable to store the name of a current visitor
 to a website. How would you name that variable?


let planetName = "earth";
let currentVisitor = "you";


Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);

Here we have a constant birthday date and the age 
is calculated from birthday with the help of some code 
(it is not provided for shortness, and because details
     don’t matter here).

Would it be right to use upper case for birthday?
 For age? Or even for both?

 - Probably birthDay or even dateOfBirth would be better.
 - I found out that because the dob is a constant before
 - the code - it could indeed be named BIRTHDATE
 - for age, I would keep it all lowercase.

const BIRTHDAY = '18.04.1982'; // make uppercase?

The variable doesn't change, but it isn't known prior to
the code.

const AGE = someCode(BIRTHDAY); // make uppercase?
*/

/**
 * javascript.info - Functions
 * https://javascript.info/function-basics
 *
 

 Is "else" required?
 importance: 4
 The following function returns true if 
 the parameter age is greater than 18.
 
 Otherwise it asks for a confirmation and returns its result:


 function checkAge(age) {
   if (age > 18) {
     return true;
   } else {
     // ...
     return confirm('Did parents allow you?');
   }
 }
 Will the function work differently if else is removed?
 
 - No the function will either return if true OR move
 to the next return if not or falsy


 function checkAge(age) {
   if (age > 18) {
     return true;
   }
   // ...
   return confirm('Did parents allow you?');
 }
 Is there any difference in the behavior of 
 these two variants?

 The two variants are functionally identical despite 
 the difference in syntax 
 


 Rewrite the function using '?' or '||'
importance: 4

The following function returns true if the parameter 
age is greater than 18.

Otherwise it asks for a confirmation and returns its 
result.



function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}


function checkAge(age) {
  age > 18 ? true : confirm("Did your parents allow you?");
}


function checkAge(age) {
    age > 18 ? true : confirm("Did your parents allow you?")
}

function checkAge(age) {
  return age > 18 || confirm("Did your parents allow you?");
}

console.log(checkAge(21));
*/
/*

Rewrite it, to perform the same, but without if, in a 
single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||



Function min(a, b)
importance: 1
Write a function min(a,b) which returns the 
least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1



function getMin(a, b) {
  return a > b ? b : a;
}

console.log(getMin(5, 2));


Function pow(x,n)
importance: 4

Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times 
and returns the result.


pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

/*
Create a web-page that prompts for x and n, and then
 shows the result of pow(x,n).

*/

document.querySelector("#submitCalc").addEventListener("click", setPower);

function setPower() {
  let num = document.querySelector("#getNum").value;
  let power = document.querySelector("#getPower").value;

  let powerOutput = calcPower(num, power);

  function calcPower(x, n) {
    return x < 1 ? console.log("Choose a valid integer") : x ** n;
  }

  document.querySelector(
    "#output"
  ).innerHTML = ` ${num} to the power of ${power} is: ${powerOutput}`;
}

/*



Run the demo

P.S. In this task the function should support only 
natural values of n: integers up from 1.
*/
