import { employeesService } from "./employees.service.js";

const elEmployeeForm = document.getElementById("employee-form");
const elSideBar = document.getElementById("side-bar");
const elEmployeeEdit = document.getElementById("employee-edit");

// Edit
const elEditFirstName = document.getElementById("edit-first-name");
const elEditLastName = document.getElementById("edit-last-name");
let elEditAge = document.getElementById("employee-age-edit");
const elEditDate = document.getElementById("edit-date");
let elEditDepartment = document.getElementById("employee-department-edit");
let elEditSalary = document.getElementById("employee-salary-edit");

elEmployeeForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const elFirstName = document.getElementById("employee-first-name-input");
    const elLastName = document.getElementById("employee-last-name-input");
    const elAge = document.getElementById("employee-age-input");
    const elDepartment = document.getElementById("employee-department-input");
    const elSalary = document.getElementById("employee-salary-input");

    employeesService.addEmployee(elFirstName.value, elLastName.value, elAge.value, elDepartment.value, elSalary.value);
    renderEmp();  // 

    elFirstName.value = "";
    elLastName.value = "";
    elAge.value = "";
    elDepartment.value = "option1";
    elSalary.value = "";
});


//show all btn
const elShowAllBtn = document.getElementById("all-btn");
elShowAllBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    const getFilteredEmployees1 = employeesService.getFilteredEmployees("all",null);
    renderEmp(getFilteredEmployees1);  
});


// Last name filter
const elFilterLastNameBtn = document.getElementById("name-btn");
elFilterLastNameBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    const elFilterLastName = document.getElementById("filter-last-name1");

    let lName = elFilterLastName.value.toLowerCase();
    const getFilteredEmployees1 = employeesService.getFilteredEmployees("last name", lName);
    renderEmp(getFilteredEmployees1);  
});

// Age filter
const elFilterAgeBtn = document.getElementById("age-btn");  
elFilterAgeBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    const elFilterAge = document.getElementById("filter-age1");

    let value1 = Number(elFilterAge.value);
    const getFilteredEmployees1 = employeesService.getFilteredEmployees("age", value1);
    renderEmp(getFilteredEmployees1);  
});

// Date filter
const elFilterDateBtn = document.getElementById("date-btn");
elFilterDateBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    const elFilterDate = document.getElementById("filter-date1");

    let date1 = elFilterDate.value;
    const getFilteredEmployees1 = employeesService.getFilteredEmployees("date", date1);
    renderEmp(getFilteredEmployees1); 
});

// Salary filter
const elFilterSalaryBtn = document.getElementById("salary-btn");
const elFilterSalary = document.getElementById("filter-salary1");
elFilterSalaryBtn.addEventListener("click", function (ev) {
    ev.preventDefault();

    let salary11 = Number(elFilterSalary.value);
    const getFilteredEmployees1 = employeesService.getFilteredEmployees("salary", salary11);
    renderEmp(getFilteredEmployees1);  
});

function renderEmp(filteredEmployees = null) {  
    const elEmployeeCards = document.getElementById("employees-cards");
    elEmployeeCards.innerHTML = "";

    const employeesList = filteredEmployees || employeesService.getFilteredEmployees();

    for (let i = 0; i < employeesList.length; i++) {
        let currentEmployee = employeesList[i];

        // Creating emp element
        const elEmployee = document.createElement("div");
        elEmployee.classList.add("card");

        const elFirstName = document.createElement("div");
        elFirstName.textContent = `first name: ${currentEmployee.firstName}`;

        const elLastName = document.createElement("div");
        elLastName.textContent = `last name: ${currentEmployee.lastName}`;

        const elAge = document.createElement("div");
        elAge.textContent = `age: ${currentEmployee.age}`;

        const elDate = document.createElement("div");
        elDate.textContent = `start date: ${currentEmployee.date}`;

        const elDepartment = document.createElement("div");
        elDepartment.textContent = `department: ${currentEmployee.department}`;

        const elSalary = document.createElement("div");
        elSalary.textContent = `salary: ${currentEmployee.salary}`;

        // Creating delete element
        const elDeleteBtn = document.createElement("button");
        elDeleteBtn.className = "delete-btn";
        elDeleteBtn.textContent = "Delete employee";

        elDeleteBtn.addEventListener("click", function () {
            employeesService.deleteEmployee(currentEmployee.id);
            renderEmp();  
        });

        // Creating edit button element
        const elEditBtn = document.createElement("button");
        elEditBtn.className = "edit-btn";
        elEditBtn.textContent = "Edit employee data";

        elEditBtn.addEventListener("click", function () {
            elEditFirstName.textContent = currentEmployee.firstName;
            elEditLastName.textContent = currentEmployee.lastName;
            elEditAge.value = currentEmployee.age;
            elEditDate.textContent = currentEmployee.date;
            elEditDepartment.value = currentEmployee.department;
            elEditSalary.value = currentEmployee.salary;

            //hide the cards

            employeesService.hiddenSideBar2(elEmployeeCards);
            //show the edit card
            employeesService.hiddenSideBar(elSideBar);

            // Submit the edit button
            elEmployeeEdit.addEventListener("submit", function (ev) {
                ev.preventDefault();
                employeesService.editEmployee(currentEmployee.id, elEditAge.value, elEditDepartment.value, elEditSalary.value);

                //show the cards
                employeesService.hiddenSideBar(elEmployeeCards);

                //hide the edit 
                employeesService.hiddenSideBar2(elSideBar);
                renderEmp();  
            })  
        });

        // Appending elements
        elEmployeeCards.appendChild(elEmployee);
        elEmployee.appendChild(elFirstName);
        elEmployee.appendChild(elLastName);
        elEmployee.appendChild(elAge);
        elEmployee.appendChild(elDate);
        elEmployee.appendChild(elDepartment);
        elEmployee.appendChild(elSalary);
        elEmployee.appendChild(elDeleteBtn);
        elEmployee.appendChild(elEditBtn);
    }
}

renderEmp();