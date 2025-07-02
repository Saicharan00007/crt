function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <input type="checkbox" class="checkbox" onchange="toggleComplete(this)" />
    <span>${taskText}</span>
  `;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove'; // Changed from 'X' to 'Remove'
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
    deleteTask(this);
  };

  li.appendChild(deleteBtn);
  document.getElementById("task-list").appendChild(li);
  taskInput.value = "";
}

function toggleComplete(checkbox) {
  const li = checkbox.parentElement;
  li.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}
