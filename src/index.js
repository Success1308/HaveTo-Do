import './style.css';
import DOM from './dom';

document.addEventListener('DOMContentLoaded', () => {
	DOM.loadProjects();

	// Event listeners for adding projects and todos

	document.querySelector('.add-project-btn').addEventListener('click', () => {
		const projectName = prompt('Enter project name:');
		if(projectName) {
		  DOM.addProject(projectName);
		}
	});

	document.querySelector('.add-todo-btn').addEventListener('click', () => {
		const projectName = prompt('Enter project name:');
		const title = prompt('Enter todo title:');
		const description = prompt('Enter todo description:');
		const dueDate = prompt('Enter due date (YYYY-MM-DD):');
		const priority = prompt('Enter priority:');
		if (projectName && title && description && dueDate && priority) {
		  const todoData = {
			title,
			description,
			dueDate,
			priority
		  };
		  DOM.addTodo(projectName, todoData);
		}
	  });

});