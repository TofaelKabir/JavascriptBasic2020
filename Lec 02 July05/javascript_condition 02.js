/*

Que: We have a number, we need to check following conditions
-check if number is negative, display negative number
-if number is 0 then dislay it as 0
-if number is positive, then display it as Odd or Even

*/

var inputNumber = -5;

if (inputNumber == 0) {
    console.log("This is Zero")
} else if (inputNumber % 2 == 0) {
    console.log("This is an Even Number")
} else if (inputNumber % 2 == 1) {
    console.log("This is an odd Number")
} else if (inputNumber < 0) {
    console.log("This is a Negative Number")
}