console.log('\n------------- for loop for example ---------------')
for (var i =0; i<10; i++) {
    console.log(i)
}

console.log('\n------------- while loop for example 01 ---------------')
var i = 0;
while (i < 10){ //when the condition is true, the loop started
    console.log(i);
    i++;
}

console.log('\n------------- while loop for example 02 ---------------')
var i = 0;
while (i <= 10) {
    console.log("Table of 2 x " + i + " = " + i * 2);
    i++;
}

console.log('\n------------- while loop for example 03 ---------------')
var number = 3;
var i = 1;
while (i <= 10) {
    console.log(number * i);
    i++;
}

console.log('\n------------- while loop for example 04 ---------------')
var number = 2;
var i=10;
while(i>=1) {
    console.log(number * i);
    console.log(number+ "*" + i + "=" +number*i);
    i--;
}