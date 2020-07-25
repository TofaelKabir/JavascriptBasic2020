console.log("\n------------------- Use of var --------------------")

function printout1() {
    for (var i = 1; i <= 5; i++) {  // var is used to recognize globally
        console.log(i);
    }
    console.log("\nValue of i outside the loop is : " + i);
}

printout1();


console.log("\n------------------- Use of let --------------------")

function printout2() {
    for (let i = 1; i <= 5; i++) { //let -- make the variable local, the scope is limited only here
        console.log(i);
    }
    //console.log("Value of i outside the loop is : " + i);
    // because of let, this line doesn't work
}

printout2();


console.log("\n------------------- Use of Constant --------------------")
var a = 20;
console.log(a);

var b = 25;
var b = 35;
console.log(b);

const c = 20; // constant value can't be changed, fixed value. like final
console.log(c);

const d = 25;
//const d = 45; //SyntaxError: Identifier 'd' has already been declared
//var d = 35;  //will show type error, SyntaxError: Identifier 'd' has already been declared
console.log(d);







