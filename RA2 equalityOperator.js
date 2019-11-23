/*
= (assignment operator)
== (equality operator) -- compares the value
!= (not equal operator) 
=== (triple equal) -- compare the equality on both type.

*/

var i = 10;
var j = 20;
var k = 10;

console.log(i==j);
console.log(i!=j);

console.log(i==k);
console.log(i!=k);


var s1 = "Mohammad";  //String Value
var s2 = "mohAmmad"; //case sensetive, they are not equal

var s3 = new String("Mohammad"); //String object

console.log(s1==s2);
console.log(s1===s3); // comparing between String Value and  Object, so this is false

var s4 = new String("Mohammad"); //String object
console.log(s3===s4); // because comparing between 2 different Object, so this is false //but I am still confused how it can be true?

var Name1 = "Mohammad";
var Name2 = "Sharkar";
Name1 = Name2; //Because right hand side value is assigned to left hand side value

console.log(Name1);
console.log(Name2);


