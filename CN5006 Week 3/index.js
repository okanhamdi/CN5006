function EmployeeInfo(name,Salary)
{
    console.log("Welcome " + name+"," + " Your monthly Salary is "+ Salary)
}
console.log ("This is my first programe")

var EmpName="John"
var EmpSalary= 50000

EmployeeInfo(EmpName,EmpSalary)  

//Second Exercise code starts from here
const EmpSkills= (skills)=> {
    console.log("Expert in "+ skills)
}
EmpSkills("Java")

//import studentinfo and person

const student= require('./StudentInfo')
const person= require('./Person')

//we use () as getName is a function
console.log("Student Name: " + student.getName())
console.log(student.Location())
console.log(student.dob)
//because dob is a variable we dont use()
console.log(student.Studentgrade())
console.log("Grade is " +student.Studentgrade(55))
//creating new person
person1= new person("Jim", "USA", "myemail@gmail.com")
console.log("Using Person Module", person1.getPersonInfo())
console.log("Programme Ended")

//next steps
os=require("os")
const util= require('util')
const { userInfo } = require('os')
console.log("temporaty directory"+ os.tmpdir())
console.log("hostname: " + os.hostname())
console.log("OS : " + os.platform() + "release: "+os.release())
console.log("Uptime"+ (os.uptime())/3600 + "hours")
console.log("userInfo"+ util.inspect(os.userInfo()))
console.log("Memory " +os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
