//This is String handling

var myString = 'This is Mohammad Sharkar and Mr Sharkar is now learning Javascript'


//Finding out length of String
//it includes also space and start from 0
//length is a property, so () is absent
console.log('The length is: ' + myString.length);

console.log(myString.charAt(8));
// Substring exists in main String and locate it's index

console.log(myString.indexOf('Mohammad')); //it takes the first one of the duplicate word
console.log(myString.indexOf('ohammad'));
console.log(myString.indexOf("Ohammad")); //what happen if index is absent, see the console for that
// above line show -1, because of case sensitive
console.log("Index of Mohammad is: " + myString.indexOf("Mohammad"));


//find out last index of main String
//Returns the last occurrence of a substring in the string.
var myString = 'This is Mohammad Sharkar and Mr Sharkar is now learning Javascript'
console.log("first Index of Sharkar is: " + myString.indexOf("Sharkar"));
console.log("Last Index of Sharkar is: " + myString.lastIndexOf("Sharkar"));
console.log("Last Index of and is: " + myString.lastIndexOf("and"));
console.log("Last Index of And is: " + myString.lastIndexOf("And")); //must be case sensetive


//convert my string to Upper case or lower case
var myString = 'This is Mohammad Sharkar and Mr Sharkar is now learning Javascript'
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());


//concatenation of 2 string
var myString = 'This is Mohammad Sharkar and Mr Sharkar is now learning Javascript'
var myString2 = "It seems like easy. Isn't it?"
console.log(myString + '. ' + myString2) // old style
console.log(myString.concat(myString2)); //outcome has -  no space between them
console.log(myString.concat('. ').concat(myString2)); //outcome is ok now


//adding one more String, we can add as much as we want
var myString3 = " Then prove it by finishing it by one month."  // it contain a space at the beginning
console.log(myString.concat('. ').concat(myString2).concat(myString3));


// regular way
console.log(myString + '. ' + myString2 + myString3);


//substring from given string
var myString = 'This is Mohammad Sharkar and Mr Sharkar is now learning Javascript'
console.log(myString.substring(8, 13)); // range: initialization block: start from 8, conditional block: shorter than 13


//replacing Mohammad Sharkar to Tofael Kabir
var myString = 'This is Mohammad Sharkar and Mohammad Sharkar is now learning Javascript'
console.log(myString.replace("Mohammad Sharkar", " Tofael Kabir")); // only happen on first place
console.log(myString.replace(/Mohammad Sharkar/g, " Tofael Kabir")); // also explained below to remove all the Mohammad Sharkar
console.log(myString.replace("mohammad Sharkar", " Tofael Kabir"));//CASE SENSITIVE

//replacing Sharkar
var myString = 'This is Mohammad Sharkar and Mr Sharkar is now learning Javascript'
console.log(myString.replace('Sharkar', 'Kabir')); //so, it's not replacing both Sharkar to Kabir. how to do that?


//replacing all Sharkar?
var myString = 'This is Mohammad Sharkar and Mr Sharkar is now learning Javascript'
console.log(myString.replace(/Sharkar/g, 'Kabir'));


//compare 2 string? Case sensitive.
var myString4 = "Mohammad Sharkar";
var myString5 = "mohammaD sHaRkar";

if (myString4 == myString5) {
    console.log('Condition is true, String4 and String5 is same');
} else {
    console.log('Condition is false, String4 and String5 is not same');
}


//compare 2 string? Case sensitive. We can solve it. see next one
var myString6 = 'Tofael Kabir';
var myString7 = 'toFael KaBiR';
if (myString6.toUpperCase() == myString7.toUpperCase()){ ;

    console.log('Condition is true, String6 and String7 is same');
}

var myString8 = 'Tofael';
var myString9 = 'toFael';
if (myString6.toLowerCase() == myString7.toLowerCase()){ ;

    console.log('Condition is true, String8 and String9 is same');
}

//CHECK WHY 62-65 IS NOT WORKIG
// else //WHAT IS THE PROBLEM HERE, NOT EXECUTING
// {
// 	console.log('If condition is false, print String6 and String7 is not same');
// }


