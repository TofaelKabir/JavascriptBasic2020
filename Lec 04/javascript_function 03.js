
//now we are going to create function with arguments and
// with returns value

function sum1(a, b) //don't need to write like (var d, var e)
{
	console.log(a+b); //why console.log not accepted inside return method after return//because it must be before return key word
	return a+b;
	
}
sum1(25,10);
//console.log(sum1(23,45)); //if we don't put the console inside then we can use here

function sum(a, b) //don't need to write like (var d, var e)
{
	var c = (a+b) ;
	return c;
}

function multiple (y, z)
{
	var x = (y*z);
	console.log(x);
}
y= sum(100,200);
multiple(y,30);

//we can also write like the following way

multiple(sum(100,200),30);