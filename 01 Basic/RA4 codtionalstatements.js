var a = 4;
var b = 10;
var c = a+b;

console.log(c);

console.log('-------------------------------------------------'); //we can only use if
if (a<b){
    console.log("yes, smaller")
}

console.log('-------------------------------------------------'); // in general first condition is false

if (a>b){
    console.log('No, false')
}else{
    console.log('yes, true')
}

console.log('-------------------------------------------------')
if(a<b){
    console.log("a is shorter than b")
}else{
    console.log("a is greater than b")
}

console.log('-------------------------------------------------')
var c = 10;
var d = 10;

if(c<d){
    console.log("c is shorter than d")
}else if(c>d){
    console.log("c is greater than d")
}else{
    console.log("Both are equal")
}

console.log('-------------------------------------------------')
var c = 10;
var d = 10;

if(c<d){
    console.log("c is shorter than d")
}else if(c>d){
    console.log("c is greater than d")
}else if (c=d){
    console.log("Both are equal")
}
