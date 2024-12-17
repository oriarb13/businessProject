import { utils } from "./utils.js";

const employees_STORAGE_KEY = "employees";

let _gEmployees = utils.getFromStorage(employees_STORAGE_KEY) || [];



/////////filter
let filter = "all";
let filterEmployees = [..._gEmployees];




function getFilteredEmployees(filter,value) {
  if  (!filter||filter==="all") return _gEmployees

  else if (filter === "last name") {
    filterEmployees=[];
    for (let i = 0; i < _gEmployees.length; i++) {
      if(_gEmployees[i].lastName.toLowerCase() === value){
        filterEmployees.push(_gEmployees[i]) 
      }
    }  
    filter=filter;
    return filterEmployees   
  }
  else if (filter === "age") {
    filterEmployees=[];
    for (let i = 0; i < _gEmployees.length; i++) {
      if(_gEmployees[i].age >= Number(value)){
        filterEmployees.push(_gEmployees[i]) 
      }
    }  
    filter=filter;
    return filterEmployees   

  }
  else if (filter === "date") {
    filterEmployees=[];
    for (let i = 0; i < _gEmployees.length; i++) {
      if(_gEmployees[i].date <= value){
        filterEmployees.push(_gEmployees[i]) 
      }
    }  
    filter=filter;
    return filterEmployees   

  }
  else if (filter === "salary") {
    filterEmployees=[];
    for (let i = 0; i < _gEmployees.length; i++) {
      if(_gEmployees[i].salary >= Number(value)){
        filterEmployees.push(_gEmployees[i]) 
      }
    }  
    filter=filter;
    return filterEmployees   

  }
}


// Adding employee
function addEmployee(firstNameValue,lastNameValue,ageValue,departmentValue,salaryValue) {
  const employee = {
    id: utils.makeId(),
    firstName: firstNameValue,
    lastName: lastNameValue,
    age:ageValue,
    date:new Date(),
    department:departmentValue,
    salary:salaryValue,

  };
  _gEmployees.push(employee);

  utils.saveToStorage(employees_STORAGE_KEY, _gEmployees);
}


//delete
function deleteEmployee(id) {
  _gEmployees = _gEmployees.filter((currentEmployee) => currentEmployee.id !== id);
  utils.saveToStorage(employees_STORAGE_KEY, _gEmployees);
}

//edit
function editEmployee(id,ageValue,departmentValue,salaryValue) {
  for (let i = 0; i < _gEmployees.length; i++) {
    if(_gEmployees[i].id === id){
      _gEmployees[i].age=ageValue;
      _gEmployees[i].department=departmentValue;
      _gEmployees[i].salary=salaryValue;
      break
    }

  }  
  utils.saveToStorage(employees_STORAGE_KEY, _gEmployees);
}



//show the side bar
function hiddenSideBar(el){
  el.classList.remove("hidden");
}

function hiddenSideBar2(el){
  el.classList.add("hidden");
}






export const employeesService = {
  getFilteredEmployees,
  addEmployee,
  deleteEmployee,
  editEmployee,
  hiddenSideBar,
  hiddenSideBar2
};