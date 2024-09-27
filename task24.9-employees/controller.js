import { employeesService } from "./employees.service.js";

// DOM elmemets
const elEmployeeForm = document.getElementById("employee-form");
const elFilterBtns = document.querySelectorAll("#filter-buttons button");

// Handling event listeners
elEmployeeForm.addEventListener("submit", function (ev) {
  // Prevent from page refresh
  ev.preventDefault();

  // Get the input element
  const elFirstName = document.getElementById("employee-first-name-input");
  const elLastName = document.getElementById("employee-last-name-input");
  const elAge = document.getElementById("employee-age-input");
  const elDepartment = document.getElementById("employee-department-input");
  const elSalary = document.getElementById("employee-salary-input");

  // Calling add todo function
  todosService.addTodo(elFirstName.value,elLastName.value,elAge.value,elDepartment.value,elSalary.value);

  // Calling render function
  renderEmp();

  // Clearing the input field
  elFirstName.value = "";
  elLastName.value = "";
  elAge.value = "";
  // elDepartment.value = "";
  elSalary.value = "";
});

// Handling event listeners
elFilterBtns.forEach((currentBtn) =>
  currentBtn.addEventListener("click", function (ev) {
    const filter = ev.target.textContent.toLowerCase();
    todosService.handleFilterChange(filter);
    renderEmp();
  })
);

// Render the todos
function renderEmp() {
  const elEmployeeCards = document.getElementById("employees-cards");

  // Clearing the list
  elEmployeeCards.innerHTML = "";

  const employeesList = todosService.getFilteredTodos();

  // Append each li to the list
  for (let i = 0; i < employeesList.length; i++) {
    const currentEmployee = employeesList[i];

    // Creating todo element
    const elEmployee = document.createElement("div");
    elEmployee.firstName.textContent = currentEmployee.firstName;
    elEmployee.lastName.textContent = currentEmployee.lastName;
    elEmployee.age.textContent = currentEmployee.age;
    elEmployee.department.textContent = currentEmployee.department;
    elEmployee.salary.textContent = currentEmployee.lastName;

    // instead of doing if and else
    elEmployee.classList.toggle("completed", currentEmployee.isCompleted);

    // Creating button element
    const elDeleteBtn = document.createElement("button");
    elDeleteBtn.textContent = "Delete";

    // Adding event listener to toggle
    elEmployee.addEventListener("click", function () {
      todosService.toggleTodo(currentEmployee.id);
      renderEmp(); // this is not recursive
    });

    // Adding event listener to delete
    elDeleteBtn.addEventListener("click", function () {
      todosService.deleteTodo(currentEmployee.id);
      renderEmp(); // this is not recursive
    });

    // Appending elments
    elEmployee.appendChild(elDeleteBtn);
    elTodoList.appendChild(elEmployee);
  }
}

renderEmp();
