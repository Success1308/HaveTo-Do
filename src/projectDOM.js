// projectDOm.js

import Storage from './storage';
import Project from './project';
import ToDo from './todo';

const storage = Storage();

// Create leftSide div
const leftSide = document.createElement('div');
leftSide.className = 'leftSide';

// Create h4 element for Projects
const h4 = document.createElement('h4');
h4.textContent = 'Projects';

// Create project-list div
const projectList = document.createElement('div');
projectList.className = 'project-list';


// create project
function addProject(projectName) {
    const project = Project(projectName);
    storage.saveProject(project);
    const projectElement = createProjectElement(project);
    projectList.appendChild(projectElement);
}

// append project
function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    const projectContent = document.createElement('p');
    projectContent.className = 'project-content';
    projectContent.textContent = project.name;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-project';
    removeButton.innerHTML = '<i class="fas fa-times"></i>';
    removeButton.addEventListener('click', () => removeProject(project.name));

    projectElement.appendChild(projectContent);
    projectElement.appendChild(removeButton);

    projectElement.addEventListener('click', () => {
        renderTodos(project);
    });


    return projectElement;
}

// remove projects
function removeProject(projectName) {
    // Remove from UI
    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach(element => {
        if (element.textContent.trim() === projectName) {
            element.remove();
        }
    });
    // Remove from storage
    storage.removeProject(projectName);
}

export function createLeftSide() {
    // Create default project div
    const projectDefault = document.createElement('div');
    projectDefault.className = 'project-default';
    const projectDefaultContent = document.createElement('p');
    projectDefaultContent.className = 'project-content';
    projectDefaultContent.textContent = 'Today';
    projectDefault.appendChild(projectDefaultContent);
    projectList.appendChild(projectDefault);
    
    // Create input-left div
    const inputLeft = document.createElement('div');
    inputLeft.className = 'input-left';
    const addIcon = document.createElement('i');
    addIcon.className = 'fa-solid fa-square-plus project-add-icon';
    addIcon.id = 'addProjectButton';
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container-p';
    inputContainer.style.display = 'none';
    const textarea = document.createElement('textarea');
    textarea.id = 'project-input';
    textarea.placeholder = 'Enter project name';
    const addButton = document.createElement('button');
    addButton.id = 'add-project-btn';
    addButton.textContent = 'Add';

    addIcon.addEventListener('click', () => {
        inputContainer.style.display = 'block';
        addButton.addEventListener('click', () => {
            const projectName = textarea.value.trim();
            if (projectName) {
                addProject(projectName);
                textarea.value = '';
                inputContainer.style.display = 'none';
            }
        });
    });


    document.addEventListener('click', (event) => {
        if (!inputLeft.contains(event.target) && !addIcon.contains(event.target)) {
            inputContainer.style.display = 'none';
        }
    });

    inputContainer.appendChild(textarea);
    inputContainer.appendChild(addButton);
    inputLeft.appendChild(addIcon);
    inputLeft.appendChild(inputContainer);
    // Append elements to leftSide div
    leftSide.appendChild(h4);
    leftSide.appendChild(projectList);
    leftSide.appendChild(inputLeft);
    return leftSide;
}



// render Todo

function renderTodos(project) {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = ''; 

    project.toDos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
    });
}


function createTodoElement(todo) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');
    const task = document.createElement('p');
    task.classList.add('task');
    task.textContent = todo.task;
    todoContent.appendChild(task);
    todoElement.appendChild(todoContent);

    const bottomSection = document.createElement('div');
    bottomSection.classList.add('bottom-section');
    const ago = document.createElement('p');
    ago.classList.add('ago');
    ago.textContent = '10 minutes ago';
    bottomSection.appendChild(ago);

    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'Priority';
    prioritySelect.id = 'Priority';
    const optionDefault = document.createElement('option');
    optionDefault.value = 'Priority';
    optionDefault.selected = true;
    optionDefault.disabled = true;
    optionDefault.textContent = 'Priority';
    prioritySelect.appendChild(optionDefault);

    const optionHigh = document.createElement('option');
    optionHigh.value = 'High';
    optionHigh.textContent = 'High';
    prioritySelect.appendChild(optionHigh);

    const optionMedium = document.createElement('option');
    optionMedium.value = 'Medium';
    optionMedium.textContent = 'Medium';
    prioritySelect.appendChild(optionMedium);

    const optionLow = document.createElement('option');
    optionLow.value = 'Low';
    optionLow.textContent = 'Low';
    prioritySelect.appendChild(optionLow);

    bottomSection.appendChild(prioritySelect);

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fas', 'fa-check');
    checkButton.appendChild(checkIcon);
    actions.appendChild(checkButton);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-times');
    removeButton.appendChild(removeIcon);
    actions.appendChild(removeButton);

    bottomSection.appendChild(actions);
    todoElement.appendChild(bottomSection);

    return todoElement;
}