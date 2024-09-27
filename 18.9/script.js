// Model (data)
let gTasks = [
    {
      id: makeId(),
      task: "make the dishes",
      isDone: "true",
    },
    {
        id: makeId(),
        task: "take the dog for a walk",
        isDone: "false",
      },
    {
        id: makeId(),
        task: "clean the floor",
        isDone: "false",
      },
  ];
  
  const elForm = document.querySelector("form");
  elForm.addEventListener("submit", function (ev) {
    ev.preventDefault();   ///////להתנהגות הדפדפן
    const taskValue = elForm.querySelector("#task").value;
    // const isDoneValue = parse(elForm.querySelector("#isDone").value);
    const isDoneValue = elForm.querySelector("#isDone").value;
  
    createTask(taskValue, isDoneValue);
    elForm.querySelector("#task").value=``;
    elForm.querySelector("#isDone").value=``;
  });
  
  function makeId() {
    let id = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }
  
  // READ
  function renderTasksList() {
    const elTaskList = document.getElementById("taskList");
  
    for (let i = 0; i < gTasks.length; i++) {
      const task1 = gTasks[i];
      const elTask = document.createElement("li");
      elTask.setAttribute("id", "el-" + task1.id);
       
      
      elTask.innerHTML = `
      <div>${task1.task}</div>
      <div>${task1.id}</div>
      <button onclick="deleteTask('${task1.id}')">Delete</button>
      `;
      if(gTasks[i].isDone==="true") elTask.classList.add('done'); 
      
      elTaskList.appendChild(elTask);
    }
  }
  
  // CREATE
  function createTask(task1, isDone1) {
    const newTask = {
      id: makeId(),
      task: task1,
      isDone: isDone1,
    };
  
    gTasks.push(newTask);
    saveTasksToLocalStorage();                 //////////////////////local storage

    const elTaskList = document.getElementById("taskList");
    elTaskList.innerHTML = "";
    renderTasksList();  //////////////////////////////////////////
  }
  
  // DELETE
  function deleteTask(taskId) {
    const newTasks = [];
  
    for (let i = 0; i < gTasks.length; i++) {
      const task = gTasks[i];
  
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
  
    gTasks = newTasks;
    saveTasksToLocalStorage();                    //////////////////////local storage

    const elTaskList = document.getElementById("taskList");
  
    const elTaskToDelete = elTaskList.querySelector("#el-" + taskId);
    elTaskList.removeChild(elTaskToDelete);
  }
  
  // renderTasksList();
  
  taskList.addEventListener("click", function (ev) {
    selectItem(ev.target);
  });
  
  function selectItem(selectedItem) {   
      selectedItem.classList.toggle("done");
    }




document.getElementById('showAll').addEventListener('click', function() {
        const tasks = taskList.getElementsByTagName('li');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].style.display = '';
        }
});
    
document.getElementById('showCompleted').addEventListener('click', function() {
        const tasks = taskList.getElementsByTagName('li');
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].classList.contains('done')) {
                tasks[i].style.display = ''; 
            } else {
                tasks[i].style.display = 'none';
            }
        }
});
    
document.getElementById('showUncompleted').addEventListener('click', function() {
        const tasks = taskList.getElementsByTagName('li');
        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].classList.contains('done')) {
                tasks[i].style.display = ''; 
            } else {
                tasks[i].style.display = 'none';
            }
        }
});


function saveTasksToLocalStorage() {           //////////////////////שמירה בלוקל סטוראג
  localStorage.setItem('tasks', JSON.stringify(gTasks));
}



function loadTasksFromLocalStorage() {     //////////////////////////////טעינת הרשימה הקיימת בלוקל סטוראג סמידה וריקה רשימה ריקה
  const tasksFromStorage = localStorage.getItem('tasks');
  if (tasksFromStorage) {
      gTasks = JSON.parse(tasksFromStorage);
  } else {
      gTasks = [];
  }
}

///////////////////////////////////////////////////////////////התחלה:
loadTasksFromLocalStorage();   //////////////////טעינת הרשימה מהסטוראג
renderTasksList();             ////////////////////// טעינה והצגת הרשימה