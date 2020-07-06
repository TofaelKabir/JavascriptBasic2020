var number = 5;

for (var i = 1; i <= 10; i++) {
    console.log(number * i);
}
console.log("\n---------- Break it when you find 40 ----------");
for (var i = 1; i <= 10; i++) {
    if (number * i == 40) {
        break;
    }
    console.log(number * i);
}

console.log("\n---------- Break it when you find 39 ----------");
for (var i = 1; i <= 10; i++) {
    if (number * i == 39) {
        break;
    }
    console.log(number * i);
}
