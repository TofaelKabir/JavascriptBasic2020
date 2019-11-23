
//now we are going to create function with arguments but no return value

function sum()
{
	var a = 10;
	var b = 20;
	var c = (a+b) ;
	console.log("total is: "+c);
}
sum();

//above code can't be use by everyone
//so we can follow this way

function sum1(d, e) //don't need to write like (var d, var e)
{
	var f = (d+e) ;
	console.log("total is: "+f);
}
sum1(19, 45); //what happen if you give only 19, no 45, check it
sum1(19); //The NaN property represents "Not-a-Number" value
//isNaN("Hi");  //not working