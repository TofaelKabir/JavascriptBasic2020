//https://github.com/Microsoft/vscode/issues/27685
//for Windows: control+F5
//FOR mAC IT DOESN'T WORK: THE ABOVE LINK IS FOR TO KNOW MORE.
/*
1)
2)
3) predefined keyword can't be used: if, function
4) No Space between two words.


*/

console.log(
  '\n------------------------------ Printing String ----------------------------'
);
console.log('Hello World!!');
console.log('First coding in Javascript');

console.log(
  '\n----------------------------- Use of Variable -----------------------------'
);
i = 14;
console.log(i);
console.log(typeof i);

// Can not contain special character except some exception: $, _
//Variable name can't start with number but can finish with number

console.log(
  '\n---------------------- Use of String type variable -----------------------'
);
var _name = 'Tofael Kabir';
console.log(_name);
console.log(typeof _name);

console.log(
  '\n---------------------- Use of int type variable -----------------------'
);
var $age = 45;
console.log($age);
console.log(typeof $age);

console.log(
  '\n-------------------- Use of boolean type variable ----------------------'
);
var usaCitizen = true;
console.log(usaCitizen);
console.log(typeof usaCitizen);

console.log(
  '\n------------------ Use of String Concatenation -----------------------'
);
console.log('My Age: 45,' + ' name: Tofael Kabir,' + ' usCitizen: true');
console.log(
  'My Age: ' + $age + ', name: ' + _name + ', usCitizen: ' + usaCitizen
);

var firstName = 'Mohammad';
var lastName = 'Sharkar';
console.log(firstName, _name, lastName); //this also concatanate with space in between them

console.log(firstName + lastName); //if + is use with variables, no space between them is printed

console.log(
  '\n----------- Printing quotation inside String -------------------'
);
console.log("My first Name is 'Mohammad'");
console.log("My first Name is 'Mohammad'" + " And last Name 'Sharkar'");

console.log(
  '\n-------------------- String Manipulation -----------------------'
);
var s1 = 'First';
var s2 = 4;
var s3 = 'Way';
console.log(15 + 10);
console.log('15' + '10');
console.log(s1 + 15 + 10 + s2 + s3);
console.log(s1 + (15 + 10) + s2 + s3);
console.log(s1 + (15 + 10 + s2) + s3);
console.log(15 + 10 + s1 + s2 + s3);

console.log(
  '\n-------------------- Use of sign operator in Int -----------------------'
);
//use of operator: +(sum), -(sub), *(mul), /(div), %(remainder)
var num1 = 100;
var num2 = 20;
var num3 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num2 % num3);

console.log(
  '\n-------------------- Use of increment/decrement/logical operator 01 -----------------------'
);
/*
unary operators: ++(increment operator), --(decrement operator), !(logical compliment operator)
++ operand    ---->    pre increment
operand ++    ---->    post increment
-- operand    ---->    pre decrement
operand --    ---->    post decrement
*/

var i = 15;
console.log(i); //print 15
i++;
console.log(i); //print 16

console.log(i++); //print i, then make it increment --> 16 printed and incremented to 17
console.log(++i); // increment first, then print -- > incremnt to 18, then print 18
console.log(++i); //incremented to 19, then print 19
console.log(i); // no incremnt, print 19
console.log(i++); //print 19, then incremented to 20
console.log(i); //print 20

console.log(
  '\n-------------------- Use of increment/decrement/logical operator 02 -----------------------'
);
var k = 30;
k--;
console.log(k);

  console.log(k--);
console.log(k--);
console.log(--k);
console.log(k);
console.log(--k);
console.log(k);
console.log(k--);
console.log(k);

console.log(
  '\n-------------------- Use of increment/decrement/logical operator 03 -----------------------'
);
var l = 35;
l = l++;
console.log(l); //why it is 35? because first execution on right hand side, then the increnet
console.log(l); //same 35, describe in 13' of video, explained video 14
