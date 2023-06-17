/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
const employees = arr.filter((employe)=> employe.profession === "developer");
const developers = employees.map((developer) => developer.name);
console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if(employee.profession === "developer"){
      console.log(employee);
    }
})
}
function addData() {
  //Write your code here, just console.log
  const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"} 
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((employee) => {
    if( employee.profession !== "admin"){
    console.log (employee);
  }
})
}
function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 1, name: "Harish", age: "25", profession: "manager" },
    { id: 11, name: "Trilok", age: "25", profession: "CA" },
    { id: 13, name: "Gautam", age: "18", profession: "Student" }
    ]
  const concatedArray = arr.concat(newArr);
  console.log(concatedArray);
}
