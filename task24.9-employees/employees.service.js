import { utils } from "./utils.js";

const employees_STORAGE_KEY = "employees";

let _gEmployees = utils.getFromStorage(employees_STORAGE_KEY) || [];
let _gFilter = "all";

function handleFilterChange(filter) {
  console.log(filter);
  _gFilter = filter;
}

// Get todos
function getFilteredEmployees() {
  let filterEmployees = [..._gEmployees];

  if (_gFilter === "active") {
    filterEmployees = _gEmployees.filter((currentEmployee) => !currentEmployee.isCompleted);
  } else if (_gFilter === "completed") {
    filterEmployees = _gEmployees.filter((currentEmployee) => currentEmployee.isCompleted);
  }

  return filterEmployees;
}


// Adding todo
function addEmployee(firstNameValue,lastNameValue,ageValue,departmentValue,salaryValue) {
  // Create new todo object and set its title
  const employee = {
    id: utils.makeId(),
    firstName: firstNameValue,
    lastName: lastNameValue,
    age:ageValue,
    date:new Date(),
    department:departmentValue,
    salary:salaryValue,

  };

  // Push the new todo to the todo gTodos array
  _gEmployees.push(employee);

  utils.saveToStorage(employees_STORAGE_KEY, _gEmployees);
}

// Delete todo
function deleteEmployee(id) {
  _gEmployees = _gEmployees.filter((currentEmployee) => currentEmployee.id !== id);
  utils.saveToStorage(employees_STORAGE_KEY, _gEmployees);
}

// Toggle Todo
function toggleEmployee(id) {////////////////////////////////////////////
  // Find the todo that you want to toggle
  const employee = _gEmployees.find((currentEmployee) => currentEmployee.id === id);

  // // Toggle isCompleted value (false if true, true if false)
  // if (!employee) return;
  // employee.isCompleted = !employee.isCompleted;

  utils.saveToStorage(employees_STORAGE_KEY, _gEmployees);
}

export const employeesService = {
  getFilteredEmployees,
  addEmployee,
  deleteEmployee,
  toggleEmployee,
  handleFilterChange,
};
