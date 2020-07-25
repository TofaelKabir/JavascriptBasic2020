var lc = require('./LearningCalculator.js');

var calc = new lc();

//console.log(calc.num1);
calc.print();
calc.add(20, 30)
calc.sub(34, 12)
console.log(calc.sub(34, 12));  // why printing twice? strange
