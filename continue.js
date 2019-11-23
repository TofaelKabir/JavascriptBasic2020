//#1
var i = 1;
for (i=1;i<=10;i++)
{
	console.log(i);
}
console.log("After avoiding number which are multiple of 2 or even number");

//continue: skip remaining part of the loop
//display table but in result if we are getting any number
// multiple of 10 then don't display it

var i = 1;
for (i=1;i<=10;i++)
{
	if(i%2==0)
	{
		continue;
	}
	console.log(i);
}

