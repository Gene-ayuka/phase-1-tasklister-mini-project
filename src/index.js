document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById(`create-task-form`);
  const taskInput = document.getElementById(`new-task-description`);
  const taskPriority = document.getElementById(`task-priority`);
  const taskList = document.getElementById(`tasks`);

  //Function to render tasks
  function renderTasks(task) {
    const li = document.createElement(`li`);
    li.textContent = task.description;

    //Set the color based on priority
    switch (task.priority) {
      case `high`:
        li.style.color = `red`;
        break;
        case `medium`:
        li.style.color = `yellow`;
        break;
        case `low`:
        li.style.color = `green`;
        break;
    };

    //Create a delete button
    const deleteButton = document.createElement(`button`);
    deleteButton.textContent = `x`;
    deleteButton.onclick = function() {
      //Remove the task from the list
      taskList.removeChild(li);
    };

    //Add the delete buttton to the list item
    li.appendChild(deleteButton);
    //Add the new task to the list
    taskList.appendChild(li);
  }

  //Function to handle form submission
  taskForm.addEventListener(`submit`, function(event) {
    event.preventDefault();

    const taskText = taskInput.ariaValueMax.trim();
    const priorityValue = taskPriority.value;

    if (taskText) {
      const newTask =m{
        description: taskText,
        priority: priorityValue
      };
      //Render the new task
      renderTasks(newTask);
      //Clear the form
      taskForm.requestFullscreen();
    }
  })
});
    
