//all type of value [string, int, boolean] in array
var array = ["Testing", true, "Hi", 11, true, false]; //Better to use single quotation
console.log(array);

//display value of any specific index
console.log(array[2]);

//find number of items stored into array
console.log(array.length);

//update value in array
array[2] = "Hello"; //updated
console.log(array);
console.log(array[2]);

//add a new member to array
console.log(array.length); //to see previous length
array.push("Good Morning"); //new memeber added
console.log(array); //display all value
console.log(array.length); //to see new length

//Looping through an array
//for loop
array.push("Good Night");
var len = array.length;
for (i = 0; i < len; i++) {
  console.log(array[i]);
}

//we can also use line no 2 as
var arr = new Array("Testing", true, "Hi", 11, true, false);
//also like this way

var courses = new Array(3);
courses[0] = "Selenium";
courses[1] = "Protractor";
courses[2] = "Jasmin";
courses[3] = "Jmeter";
console.log(courses); //see the outcome

for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}
//for each loop
for (var course in courses) { //var course itterate in array courses
  console.log(courses[course]);
}
