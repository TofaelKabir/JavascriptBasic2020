//describe(similar to test suite)
//we are going to create a test Suite
//inside describe 2 argument. 1) title of the test suite or the name of the test suite in side doubl equotation.
//2) function and function body

describe("Suite for validating Search functionality", function(){
//function body
//it(similar to test cases )	
//In jasmine, we call it specs (Test cases) where specs can be created by the it() block 
//which accept function () as second argument
	it("Verify Search with correct item code", function(){

		//any executable code inside the fucton
		console.log("This is Spec 1")

    });

	it("Verify Search with incorrect item code", function(){
		console.log("This is Spec 2")

	});

	});
