//https://github.com/Microsoft/vscode/issues/27685
//for Windows: control+F5
//FOR mAC IT DOESN'T WORK: THE ABOVE LINK IS FOR TO KNOW MORE.
/*
1) Variable name can't start with number but can finish with number
2) Can not contain special character except some exception: $, _ 
3) predefined keyword can't be used: if, function
4) No Space between two words.


*/

console.log('Hello World!!');
console.log('First coding in Javascript');
i=14;
console.log(i);
console.log(typeof i);
var _name = 'Tofael Kabir';
console.log(_name);
console.log(typeof _name);
var $age = 45;
console.log($age);
var usaCitizen = true;
console.log('My Age: '+$age+', name: '+_name+', usCitizen: '+usaCitizen);
console.log(typeof usaCitizen);
var firstName = 'Mohammad';
var lastName = 'Sharkar';
console.log(firstName, _name, lastName); //this also concatanate with space in between them

console.log(firstName + lastName); //if + is use, no space between them is printed

console.log('My first Name is \'Mohammad\'');
console.log('My first Name is \'Mohammad\''+' And last Name \'Sharkar\'');

var s1 = "First";
var s2 = 4;
var s3 = "Way";
console.log(15+10);
console.log("15"+"10");
console.log(s1+15+10+s2+s3);
console.log(s1+(15+10)+s2+s3);
console.log(s1+(15+10+s2)+s3);
console.log(15+10+s1+s2+s3);

//use of operator: +(sum), -(sub), *(mul), /(div), %(remainder)

var num1 = 100;
var num2 = 20;
var num3 = 3;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num2%num3); 

/*
unary operators: ++(increment operator), --(decrement operator), !(logical compliment operator)

++operand    ---->    pre increment
operand++    ---->    post increment
--operand    ---->    pre decrement
operand--    ---->    post decrement



*/

var i = 15;
i++;
console.log(i);
console.log(i++);
console.log(++i);
console.log(++i);
console.log(i);
console.log(i++);
console.log(i)






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
console.log(k)



var l = 35;
l=l++;
console.log(l); //why it is 35? because first execution on right hand side, then the increnet
console.log(l);//same 35, describe in 13' of video, explained video 14




