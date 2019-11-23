// 1st way
function course1(){
	topic = "Protractor";
	duration = "20 hrs";
	console.log(topic+"  "+duration);
}
course1();
// 2nd way
function course2(topic,duration){
	console.log(topic+" "+duration);
}
course2("Protractor","28 hrs");
// 3rd way
function course(){  //put the cursor on name, --This constructor function may be converted to a class declaration.
	this.topic = "Protractor";
	this.duration = "20 hrs";
}
var obj_course = new course();
console.log(obj_course.topic+" course duration "+obj_course.duration);
//4th way
function student(Name, ID){
	this.Name = Name;
	this.ID = ID;
}
var obj_student = new student("Mohammad",218845);
console.log("Student Name: "+obj_student.Name+" and ID: "+obj_student.ID);