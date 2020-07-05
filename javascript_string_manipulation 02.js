//reverse string
var myStr = "Mohammad Sharkar";
var l = myStr.length;
console.log(l);
console.log("---*************************************---");
for(k=l-1;k>=0;k--) //(l-1) because k is index number which start from from zero
{
	console.log(myStr.charAt(k));
}
console.log("---$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$---");
//to bring it in one line
var myStr1 = "";
for(k=l-1;k>=0;k--)
{
	myStr1=myStr1+myStr.charAt(k);
	//console.log(myStr1+myStr.charAt(k)); //what is wrong here? can you understand? because it is looping
}
console.log(myStr1); //remove line 4 to 11 to get the real code

