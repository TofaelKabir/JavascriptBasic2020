var number = 5;

for (var i = 1; i <= 10; i++) {
    console.log(number * i);
}
console.log("\n---------- Break it when you find 30 ----------");
for (var i = 1; i <= 10; i++) {
    if (number * i == 30) {
        break;
    }
    console.log(number * i);
}
