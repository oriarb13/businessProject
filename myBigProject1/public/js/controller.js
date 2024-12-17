import { createProject, createTask, createUser } from "./helperFunc/createItem.js";
import { fetchUsers, fetchRandomUser, fetchUserById, addUser, editUser } from "./fetch.js";
document.addEventListener("DOMContentLoaded", () => {
    const showAllBtn = document.getElementById("show-all-btn");
    const showRandomBtn = document.getElementById("show-random-btn");
    const createBtn = document.getElementById("createBtn");
    const editBtn = document.getElementById("editBtn");
    
    const formElement = document.getElementById("create-user-form");
    const usersSituationElement = document.getElementById("users-situation");
const formErrorMessage = document.createElement("p");
const userListElement = document.getElementById("user-list");

// show all
showAllBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const users = await fetchUsers();
    console.log(users);
    
    if (Array.isArray(users) && users.length > 0) {
    userListElement.innerHTML = '';
    users.forEach(user => {
        userListElement.appendChild(createUser(user));
    });
} else {
    userListElement.innerHTML = "<li>No users found.</li>";
  }
});

// show random
showRandomBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const user = await fetchRandomUser();
  if (user && user._id) {
    userListElement.innerHTML = '';
    userListElement.appendChild(createUser(user));
} else {
    userListElement.innerHTML = "<li>No user found.</li>";
}
});

// get user by id
document.getElementById("getByIdBtn").addEventListener("click", async (event) => {
  event.preventDefault(); 
  const id = document.getElementById("id").value;
  const user = await fetchUserById(id);
  if (user && user._id) {
    userListElement.innerHTML = '';
    userListElement.appendChild(createUser(user));
  } else {
      userListElement.innerHTML = "<li>No user found.</li>";
    }
});

// add user
createBtn.addEventListener("click", async (event) => {
    event.preventDefault(); 

  const newUser = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    role: document.getElementById("role").value,
    tasks: document.getElementById("user-tasks").value.split(',').map(task => task.trim()),
    projects: document.getElementById("user-projects").value.split(',').map(project => project.trim())
  };

  formElement.appendChild(formErrorMessage);
  formErrorMessage.style.color = 'red';
  formErrorMessage.style.display = 'none';
  
  if (!newUser.username || !newUser.email || !newUser.password || !newUser.tasks.length || !newUser.projects.length) {
    formErrorMessage.textContent = 'Please fill in all required fields: Username, Email, Password, Tasks, and Projects.';
    formErrorMessage.style.display = 'block';
    return;
  }

  const data = await addUser(newUser);
  
  if (data && data.message) {
    alert(data.message);
    fetchUsers();
    usersSituationElement.textContent = "User created successfully!";
    usersSituationElement.style.color = 'green';
} else {
    usersSituationElement.textContent = data.error || "An error occurred.";
    usersSituationElement.style.color = 'red';
  }

  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("role").value = "";
  document.getElementById("user-tasks").value = "";
  document.getElementById("user-projects").value = "";
});

// edit user
editBtn.addEventListener("click", async (event) => {
    event.preventDefault(); 

  const newUser = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    role: document.getElementById("role").value,
    tasks: document.getElementById("user-tasks").value.split(',').map(task => task.trim()),
    projects: document.getElementById("user-projects").value.split(',').map(project => project.trim())
  };

  const userId = document.getElementById("user-id").value;
  
  formElement.appendChild(formErrorMessage);
  formErrorMessage.style.color = 'red';
  formErrorMessage.style.display = 'none';
  
  if (!newUser.username || !newUser.email || !newUser.password || !newUser.tasks.length || !newUser.projects.length) {
    formErrorMessage.textContent = 'Please fill in all required fields: Username, Email, Password, Tasks, and Projects.';
    formErrorMessage.style.display = 'block';
    return;
  }

  const data = await editUser(userId, newUser);

  if (data && data.message) {
    alert(data.message);
    fetchUsers();
    usersSituationElement.textContent = "User updated successfully!";
    usersSituationElement.style.color = 'green';
} else {
    usersSituationElement.textContent = data.error || "An error occurred.";
    usersSituationElement.style.color = 'red';
}

document.getElementById("username").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";
document.getElementById("role").value = "";
document.getElementById("user-tasks").value = "";
document.getElementById("user-projects").value = "";
});

})