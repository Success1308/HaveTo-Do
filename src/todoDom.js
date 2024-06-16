
// todoDom.js

import Storage from './storage';

const storage = Storage();
let project = storage.getProject("Today");
let currentProject = "Today"; 

function renderTodos(project1) {

    const project = storage.getProject(project1);
    if (!project) return;

    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = ''; 

    project.toDos.forEach(todo => {
        const todoElement = createTodoElement(todo.title, todo.priority);
        todoList.appendChild(todoElement);
    });
}



function createTodoBody() {
	const bodyDiv = document.createElement('div');
	bodyDiv.classList.add('body');

	// Header
	const header = document.createElement('h4');
	header.textContent = "Have To Do's";
	bodyDiv.appendChild(header);
  
	// Todo List
	const todoList = document.createElement('div');
	todoList.classList.add('todo-list');
	bodyDiv.appendChild(todoList);	
	
	// Todo Input
	const todoInput = document.createElement('div');
	todoInput.classList.add('todo-input');
  
	const inputTag = document.createElement('input');
	inputTag.type = 'text';
	inputTag.classList.add('input-tag');
	inputTag.required = true; 
	todoInput.appendChild(inputTag);
  
	const inputPrioritySelect = document.createElement('select');
	inputPrioritySelect.name = 'Priority';
	inputPrioritySelect.id = 'Priority';
	inputPrioritySelect.required = true; 
  
	const inputOptionDefault = document.createElement('option');
	inputOptionDefault.value = 'Priority';
	inputOptionDefault.required = true; 
	inputOptionDefault.selected = true;
	inputOptionDefault.disabled = true;
	inputOptionDefault.textContent = 'Priority';
	inputPrioritySelect.appendChild(inputOptionDefault);
  
	const inputOptionHigh = document.createElement('option');
	inputOptionHigh.value = 'High';
	inputOptionHigh.textContent = 'High';
	inputPrioritySelect.appendChild(inputOptionHigh);
  
	const inputOptionMedium = document.createElement('option');
	inputOptionMedium.value = 'Medium';
	inputOptionMedium.textContent = 'Medium';
	inputPrioritySelect.appendChild(inputOptionMedium);
  
	const inputOptionLow = document.createElement('option');
	inputOptionLow.value = 'Low';
	inputOptionLow.textContent = 'Low';
	inputPrioritySelect.appendChild(inputOptionLow);
  
	todoInput.appendChild(inputPrioritySelect);
  
	const plusIcon = document.createElement('i');
	plusIcon.classList.add('fa-solid', 'fa-square-plus');
	todoInput.appendChild(plusIcon);
  

	plusIcon.addEventListener('click', function() {
		const textValue = inputTag.value;
		const priorityValue = inputPrioritySelect.value;

		if (textValue && priorityValue) {

			const newTodo = createTodoElement(textValue, priorityValue);
			todoList.appendChild(newTodo);

			const todoObject = { title: textValue, priority: priorityValue };
			const project = storage.getProject(currentProject.name);
			project.addTodo(todoObject);
			storage.saveProject(project);

			inputTag.value = ''; 
			inputPrioritySelect.value = inputOptionDefault.value;			
		} else {
			alert('Please fill out both the text and priority fields.');
		}
	});

	bodyDiv.appendChild(todoInput);  
	return bodyDiv;

}
  

  
function createTodoElement(textValue, priorityValue) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');
    const task = document.createElement('p');
    task.classList.add('task');
    task.textContent = textValue;
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
	optionDefault.selected = !priorityValue;
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

	if (priorityValue) {
        prioritySelect.value = priorityValue;
    }


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


	checkButton.addEventListener('click', function() {
        todoElement.classList.toggle('completed');
    });

    removeButton.addEventListener('click', function() {
        todoElement.remove();
    });

    return todoElement;
}


export{
	createTodoBody,
	createTodoElement,
	renderTodos
};