const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const activeTasksList = document.getElementById('active-tasks');
const pendingTasksList = document.getElementById('pending-tasks');


addButton.addEventListener('click', addTask);


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', toggleTaskStatus);

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        newTask.appendChild(checkbox);
        newTask.appendChild(taskLabel);
        activeTasksList.appendChild(newTask);

        taskInput.value = '';
    }
}

// Function to toggle the status of a task
function toggleTaskStatus(event) {
    const taskItem = event.target.parentNode;
    if (event.target.checked) {
        taskItem.classList.remove('active-task');
        taskItem.classList.add('pending-task');
        pendingTasksList.appendChild(taskItem);
    } else {
        taskItem.classList.remove('pending-task');
        taskItem.classList.add('active-task');
        activeTasksList.appendChild(taskItem);
    }
}