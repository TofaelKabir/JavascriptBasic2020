/*
= (assignment operator)
== (equality operator) -- compares the value
!= (not equal operator) 
=== (triple equal) -- compare the equality on both type.

*/

var i = 10;
var j = 20;
var k = 10;

console.log(
  '\n-------------------- Use of equality and non equality operator -----------------------'
);
console.log(i==j);
console.log(i!=j);

console.log(
  '\n-------------------- Use of equality and non equality operator -----------------------'
);
console.log(i==k);
console.log(i!=k);

console.log(
  '\n-------------------- Use of equality and non equality operator -----------------------'
);
var s1 = "Mohammad";  //String Value
var s2 = "mohAmmad"; //case sensetive, they are not equal

var s3 = new String("Mohammad"); //String object is created

console.log(s1==s2);  //comparing String value
console.log(s1===s3); // comparing between String Value and  Object, so this is false. Becaue === compare type

var s4 = new String("Mohammad"); //String object
console.log(s3===s4); // because comparing between 2 different Object, so shold be true //but I am still confused how it can be true?

var s5 = 20;
var s6 = 20;
console.log(s5===s6);
//TODO Need to know about it.

console.log(
  '\n-------------------- Use of equal operator -----------------------'
);
var Name1 = "Mohammad";
var Name2 = "Sharkar";
Name1 = Name2; //Because right hand side value is assigned to left hand side value


console.log(Name1);
console.log(Name2);


