/*
- Number is odd or even
- If number is even then we have to check, it is divided by 10,
then its a perfect number
- example of Nested If

-In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. ... The sum of divisors of a number, excluding the number itself, is called its aliquot sum, so a perfect number is one that is equal to its aliquot sum.
*/


var number = 28;
var Sum=0;
for (var i = 1; i < number; i++) {
    if (number % i == 0) {
        Sum= Sum + i;
    }
}
if (Sum == number) {
    console.log(number+" is a perfect number");
} else {
    console.log(number+" is not a perfect number");
}

