
/*

We have a number, we need to check following conditions
-check if number is negative, display negative number
-if number is 0 then dislay it as 0
-if number is positive, then display it as Odd or Even
- ordering of the condition matter, if input number is 0, and we put
the condition of even number at first then then it will be a even number
*/

var inputNumber = -1;
if (inputNumber < 0)
{
    console.log("Ths is a Negative Number")
}
else if (inputNumber == 0)
{
	console.log("This is Zero")
}
else if (inputNumber %2 == 0)
{
	console.log("This is Even Number")
}
else if (inputNumber %2 == 1)
{
	console.log("This is odd Number")
}