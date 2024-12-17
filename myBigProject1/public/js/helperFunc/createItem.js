export function createUser(user){
    const userItem = document.createElement('li');
    userItem.innerHTML = `
      <strong>${user.username}</strong> (${user.email}) - ${user.role}
      <br>Tasks: ${user.tasks.join(', ')}
      <br>Projects: ${user.projects.join(', ')}
    `;
    return userItem
  }
  
export function createProject(project) {
    const projectItem = document.createElement('li');
    projectItem.innerHTML = `
      <strong>${project.title}</strong><br>
      Description: ${project.description}<br>
      Owner: ${project.owner} <br>
      Collaborators: ${project.collaborators.join(', ')}<br>
      Start Date: ${project.startDate}<br>
      End Date: ${project.endDate ? project.endDate : 'Not set'}<br>
      Status: ${project.status}    
      <button class="delete-btn">delete User</button>

    `;
    return projectItem
  }
  
export function createTask(task) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <strong>${task.description}</strong><br>
      Due Date: ${task.dueDate}<br>
      Project: ${task.project}<br>
      Assigned To: ${task.assignedTo}<br>
      Status: ${task.status}
    `;
    return taskItem
  }

