/*
https://www.tutorialspoint.com/java/java_basic_operators.htm

conditional operator:
<   Less than
>   Greather than
<=  Less than equal to 
>=  Greather than equal to

logical operator:
&& and || are called short circuit operators.

&& -- logical And operator -- needs two operand -- both of the operand must be type of boolean
&& return true if both operand are true
if the first operand evaluates to false , the rest of them don't get evaluated at all.

|| -- Logical or operator -- needs two operand -- both of the operand must be type of boolean
if the first operand evaluates to true , then the rest of the operands are not evaluated.



boolean a, b;

Operation     Meaning                       Note
---------     -------                       ----
   a && b     logical AND                    short-circuiting
   a || b     logical OR                     short-circuiting
   a &  b     boolean logical AND            not short-circuiting
   a |  b     boolean logical OR             not short-circuiting
   a ^  b     boolean logical exclusive OR
  !a          logical NOT



 https://stackoverflow.com/questions/5564410/what-is-the-difference-between-and-in-java
*/

var i = 20;
var j = 30;

var k = 40;
var l = 35;

var result1 = i<j;
var result2 = i>j;
var result3 = i<=j; 
var result4 = i>=j; //first condition is false, so second one ignored
var result5 = k<=l; 
var result6 = k>=l;


//console.log(typeof result1);
console.log(result1);  //T
console.log(result2);  //F
console.log(result3);  //T
console.log(result4);  //F
console.log(result5);  //F
console.log(result6);  //T

console.log(result3 && result4); //true and false = false
console.log(result4 && result3); //false and true = false
console.log(result3 && result6); //true and true = true
console.log(result4 && result5); //false and false = false

console.log(result3 || result4); //true OR false = true
console.log(result4 || result3); //false OR true = true
console.log(result3 || result6); //true OR true = true
console.log(result4 || result5); //false OR false = false

//Javascript Data Type
//5 different data type which can contain values:
//string, number, boolean,object, function
//There are 3 types of Objects: Object, Data, Array
//2 data types that cannot contain vale: Null and undefined

