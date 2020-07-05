/*
- Number is odd or even
- If number is even then we have to check, it is divided by 10,
then its a perfect number
- example of Nested If
*/
var inputNumber = 8;

if (inputNumber % 2 == 0) {
    if (inputNumber % 10 == 0) {
        console.log("This is perfect number")
    } else {
        console.log("this is an even number")
    }
} else {
    console.log("This is an odd number")
}