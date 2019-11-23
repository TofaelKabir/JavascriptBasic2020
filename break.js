//break - come out from the loop conditionally
//display table: but come out from loop and don't display rest values if we get 50
//anywhere in the run
var number = 5;

for (var i = 1; i <= 10; i++) {
  console.log(number * i);
}
console.log("**Break it when you find 50**");
for (var i = 1; i <= 10; i++) {
  if (number * i == 50) {
    break;
  }
  console.log(number * i);
}
