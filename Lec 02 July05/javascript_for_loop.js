//For Loop with increment/decremental value
// print a table of number

/*

for(initialized value; conditional value; incremental/decremental value){

}

*/

// 1st way:
console.log("\n---------- for loop 01 ---------")
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 2nd way:
console.log("\n---------- for loop 02 ---------")
var number = 8;

for (var i = 1; i <= 10; i++) {
    console.log(number * i);
}

// 3rd way:
console.log("\n---------- for loop 03 ---------")
var number = 24;
for (i = 10; i >= 1; i--) {
    console.log(i);
    console.log(number * i);
    console.log(number + "*" + i + "=" + number * i)
}