//all type of value [string, int, boolean] in array
// best to use a single data type in on array

console.log("\n---------------------------------------------")
var array = [100, 'Testing', true, "Hi", 11, true, false]; //Better to use single quotation
console.log(array);
console.log(typeof array);


//display value of any specific index
console.log("\n---------------------------------------------")
console.log(array[2]);
console.log(array[1]);
console.log(array[0]);


//find number of items stored into array
var array = [100, 'Testing', true, "Hi", 11, true, false];
console.log("\n---------------------------------------------")
console.log("The length of Array is: ", array.length);


//update value in array
var array = [100, 'Testing', true, "Hi", 11, true, false];
console.log("\n---------------------------------------------")
array[2] = "Hello"; //update or replace
console.log(array);
console.log(array[2]);


//add a new member to array
console.log("\n---------------------------------------------")
var array = [100, 'Testing', 'Hello', "Hi", 11, true, false];
console.log(array.length); //to see previous length
array.push("Good Morning"); //new member added
console.log(array); //display all value
console.log(array.length); //to see new length


//Looping through an array
//for loop
console.log("\n---------------------------------------------")
var array = [100, 'Testing', 'Hello', 'Hi', 11, true, false, 'Good Morning']
array.push("Good Night");
var len = array.length;
for (i = 0; i < len; i++) {
    console.log(array[i]);
}


console.log("\n---------------------------------------------")
//we can also use the below line  as Array
var arr = new Array("Testing", true, "Hi", 11, true, false); // we can also express thi sway
//also like this way, line 54 is an example


var courses = new Array(3);
courses[0] = "Selenium";
courses[1] = "Protractor";
courses[2] = "Jasmin";
courses[3] = "Jmeter";
console.log(courses); //see the outcome

console.log("\n---------------------------------------------")
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}


//for each loop
console.log("\n---------------------------------------------")
var courses = ['Selenium', 'Protractor', 'Jasmin', 'Jmeter']
for (var x in courses) { //var x iterate in array courses
    console.log(courses[x]);
}
