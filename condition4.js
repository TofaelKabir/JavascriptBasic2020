/* If marks are less than 0 and more than 100, it's invalid
if between 0-30, you are failed
if between 31-60, you are passed
if between 61-100, pass with honor
*/

var marks = 61;
if(marks<0 || marks>100)
{
	console.log("This is invalid marks");
}
else if (marks >=0 && marks <=30)
{
	console.log("Sorry, you are failed");
}
else if (marks>=31 && marks <=60)
{
	console.log("You are passed");
}
else
{
	console.log("Pass with Honors");
}