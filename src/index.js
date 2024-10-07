document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const tasksList = document.getElementById('tasks');
  let tasksArray = [];
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskDescription = document.getElementById('new-task-description').value;
      const priority = document.getElementById('task-priority').value;
      if (taskDescription === '') {
          alert('Task description cannot be empty!');
          return;
      }
      const task = {
          description: taskDescription,
          priority: priority,
      };
      tasksArray.push(task);
      renderTasks(tasksArray);
      form.reset();
      function renderTasks(tasks) {
          tasksList.innerHTML = '';
          tasks.forEach((task, index) => {
              const li = document.createElement('li');
              li.innerHTML = ` Task at hand :${task.description}  - Priority: ${task.priority}
                              <button class="delete-btn" data-index="${index}">Delete</button>`;
              tasksList.appendChild(li);
              });
              addDeleteListeners();
          }
          function addDeleteListeners() {
              const deleteButtons = document.querySelectorAll('.delete-btn');
              deleteButtons.forEach(button => {
              button.addEventListener('click', (e) => {
                  const taskIndex = e.target.getAttribute('data-index');
tasksArray.splice(taskIndex, 1);
renderTasks(tasksArray);
});
});
}
sortAscBtn.addEventListener('click', () => {
  tasksArray.sort((a, b) => a.description.localeCompare(b.description));
  renderTasks(tasksArray);
});
sortDescBtn.addEventListener('click', () => {
  tasksArray.sort((a, b) => b.description.localeCompare(a.description));
renderTasks(tasksArray);
});
  });










})