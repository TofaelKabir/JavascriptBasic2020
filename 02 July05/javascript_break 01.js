//break - come out from the loop conditionally
//display table: but come out from loop and don't display rest values if we get 50
//anywhere in the ru

for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("\n---------- Break it when you find 7 ----------");
for (var i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}
