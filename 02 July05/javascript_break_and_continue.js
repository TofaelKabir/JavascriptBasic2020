/*
break --> used in Switch/Loops - will stop the execution or transfer the execution outside the loop
Continue --> used in Loops -- it skip that condition and transfers the execution to the next iteration
*/

console.log("\n------------ for loop ------------")
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\n------------ Use of Break ------------")
loop: for (var i = 1; i <= 5; i++) {
    //we can also use loop at the beginning of for loop but generally used when use more loop to identify then as loop1, loop2 ....
    if (i == 4) {
        break loop;
    }
    console.log(i);
}

console.log("\n------------ Use of Break ------------")
for (var i = 1; i <= 5; i++) {
    if (i != 4) {
        //no execution through the loop
        break;
    }
    console.log(i);
}

console.log("\n------------ Use of Continue ------------")
for (var i = 1; i <= 5; i++) {
    if (i == 4) {
        continue;
    }
    console.log("i -- > " + i);
}

console.log("\n------------ nested loop 01 ------------")
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log("i -- > " + i + "  j -- > " + j);
    }
}

console.log("\n------------ nested loop 02 ------------")
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 3; j++) {
        //nested loop

        if (j == 2) {
            continue;
        }
        console.log("i -- > " + i + "  j -- > " + j);
    }
}

console.log("\n------------ nested loop 03 ------------")
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 3; j++) {
        //nested loop

        if (j == 3) {
            break;
        }
        console.log("i -- > " + i + "  j -- > " + j);
    }
}

//we can also use break and continue for while and do while loop
//#8 nested loop
loop1: for (var i = 1; i <= 5; i++) {
    loop2: for (var j = 1; j <= 3; j++) {
        //nested loop

        if (i == 3) {
            //we can use condition of j and break loop 1 too, we can use continue instead of break
            break loop1;
        }
        console.log("i -- > " + i + "  j -- > " + j);
    }
}
