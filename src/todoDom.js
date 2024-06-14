// todoDom.js
export function createTodoBody() {
	const bodyDiv = document.createElement('div');
	bodyDiv.classList.add('body');
  
	// Header
	const header = document.createElement('h4');
	header.textContent = "Have To Do's";
	bodyDiv.appendChild(header);
  
	// Todo List
	const todoList = document.createElement('div');
	todoList.classList.add('todo-list');
	
	const todo = document.createElement('div');
	todo.classList.add('todo');
	
	const todoContent = document.createElement('div');
	todoContent.classList.add('todo-content');
	
	const task = document.createElement('p');
	task.classList.add('task');
	task.textContent = 'Sample -todoSample';
	todoContent.appendChild(task);
	
	todo.appendChild(todoContent);
  
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
  
	todo.appendChild(bottomSection);
	todoList.appendChild(todo);
	bodyDiv.appendChild(todoList);
  
	// Todo Input
	const todoInput = document.createElement('div');
	todoInput.classList.add('todo-input');
  
	const inputTag = document.createElement('input');
	inputTag.type = 'text';
	inputTag.classList.add('input-tag');
	todoInput.appendChild(inputTag);
  
	const inputPrioritySelect = document.createElement('select');
	inputPrioritySelect.name = 'Priority';
	inputPrioritySelect.id = 'Priority';
  
	const inputOptionDefault = document.createElement('option');
	inputOptionDefault.value = 'Priority';
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
  
	bodyDiv.appendChild(todoInput);
  
	return bodyDiv;
  }
  