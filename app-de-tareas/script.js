// script.js

// Variables
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');

// Función para actualizar el contador de tareas
function updateTaskCounter() {
    const tasks = taskList.getElementsByTagName('li');
    taskCounter.textContent = `Tareas pendientes: ${tasks.length}`;
}

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        // Crear un nuevo elemento li
        const li = document.createElement('li');
        
        // Crear el texto de la tarea
        li.textContent = taskText;

        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('deleteButton');
        
        // Función para eliminar tarea
        deleteButton.addEventListener('click', () => {
            li.remove();
            updateTaskCounter();
        });

        // Añadir el botón de eliminar al li
        li.appendChild(deleteButton);
        
        // Añadir el li a la lista
        taskList.appendChild(li);
        
        // Limpiar el input
        taskInput.value = "";

        // Actualizar el contador
        updateTaskCounter();
    }
}

// Evento para el botón "Agregar tarea"
addTaskButton.addEventListener('click', addTask);

// Permitir agregar tarea al presionar Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});