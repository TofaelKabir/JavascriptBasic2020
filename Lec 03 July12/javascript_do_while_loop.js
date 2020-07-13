console.log('\n------------- for loop for example ---------------')
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('\n------------- while loop for example ---------------')
var i = 0;
while (i < 10) { //when the condition is true, the loop started
    console.log(i);
    i++;
}

console.log('\n------------- do while loop for example 01 ---------------')
var i = 1;
do { //when the condition is true or false, the first loop will start
    console.log(i);
    i++;
} while (i <= 10)

console.log('\n------------- do while loop (wrong condition) for example 02 ---------------')
var i = 1;
do {
    console.log(i);
    i++;
} while (i < 0);


console.log('\n------------- do while loop (wrong condition) for example 03 ---------------')
var i = 11;
do {
    console.log(i);
    i++;
} while (i <= 10);

console.log('\n------------- do while loop (wrong condition) for example 04 ---------------')
var i = 11;
do {
    console.log(i);
    i++;
} while (i <= 10);
console.log(i);


console.log('\n------------- do while loop for example 04 ---------------')
var i = 10;
do {
    console.log(i);
    i--;
} while (i >= 3);
console.log(i);