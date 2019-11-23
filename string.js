//This is String handling

var myString = "This is Mohammad Sharkar and Mr Sharkar is now learning Javascript";
//Finding out length of String
var res = myString.length; //it includes also space and start from 0
//length is a property, so no ()
console.log(res);
//console.log(myString.charAt(7));
//My substring exists in main String and locate it's index

console.log(myString.indexOf("Sharkar")); //it takes the first one of the duplicate word
//indexOf() is a method, so () is present
console.log(myString.indexOf("Harkar")); //what happen if index is absent, see the console for that
console.log("Index of Mohammad is: "+myString.indexOf("Mohammad"));
//
//find out last index of main String
console.log("Last Index of and is: "+myString.lastIndexOf("and"));
console.log("Last Index of And is: "+myString.lastIndexOf("And")); //must be case sensetive
console.log("Last Index of Sharkar is: "+myString.lastIndexOf("Sharkar"));
//convert my string to Upper case or lower case
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
var myString2 = "It seems like easy. Isn't it?"
//concatanation of 2 string
console.log(myString.concat(myString2)); //outcome is no space between them
console.log(myString.concat(". ").concat(myString2)); //outcome is ok now
//adding one more String, we can add as much as we want
var myString3 = " Then prove it by finishing it by one month."
console.log(myString.concat(". ").concat(myString2).concat(myString3));
//another way
console.log(myString+". "+myString2+myString3);
//charAt
console.log(myString.charAt(11)); //start from 0 and accept space too.
//substring from given string
console.log(myString.substring(8,13));
//replacing Mohammad Sharkar to Tofael Kabir
console.log(myString.replace("Mohammad Sharkar", " Tofael Kabir"));
console.log(myString.replace("mohammad Sharkar", " Tofael Kabir"));//CASE SENSITIVE
//replacing Sharkar
console.log(myString.replace('Sharkar', 'Kabir')); //so, it's not replacing both Sharkar to Kabir. how to do that?
//replacing all Sharkar?
console.log(myString.replace(/Sharkar/g, 'Kabir'));
//compare 2 string? Case sensitive.
var myString4 = "Mohammad Sharkar";
var myString5 = "mohammaD sHaRkar";
if(myString4==myString5)
{
	console.log('If condition is true, print String4 and String5 is same'); //if condition true, print this
}
else
{
	console.log('If condition is false, print String4 and String5 is not same'); //if condition false, print this
}
//compare 2 string? Case sensitive. We can solve it. see next one
var myString6 = 'Tofael Kabir';
var myString7 = 'toFael KaBiR';
if(myString6.toUpperCase()==myString7.toUpperCase());//if(myString6.toLowerCase==myString7.toLowerCase)
{
	console.log('If condition is true, print String6 and String7 is same');
}
//CHECK WHY 62-65 IS NOT WORKIG
// else //WHAT IS THE PROBLEM HERE, NOT EXECUTING
// {
// 	console.log('If condition is false, print String6 and String7 is not same');
// }


