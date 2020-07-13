var myStr1 = "Mohammad Sharkar"
console.log(myStr1.length)

console.log("\n---------------------- reverse String -----------------------")
for (var k = myStr1.length - 1; k >= 0; k--) {
    console.log(myStr1.charAt(k));
}
console.log("\n--------------------- to bring reverse String in one line------------------------");
var myStr2 = " ";
for (var k = myStr1.length - 1; k >= 0; k--) {
    myStr2 = myStr2 + myStr1.charAt(k);
    //console.log(myStr1+myStr1.charAt(k)); //what is wrong here? can you understand? because it is looping
}
console.log(myStr2);

