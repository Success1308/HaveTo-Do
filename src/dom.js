import ToDo from './todo';
import Project from './project';
import Storage from './storage';
import { format } from 'date-fns';


export default function DOM(){
	const defaultProject = Project('Today');
	Storage.saveProject(defaultProject);


	// load Existing projects and todos
	const loadProjects = () => {
		const projects = Storage.getProjects();
		projects.forEach(project => {
			// Render project and its todos (Diplay project and todos)
		});
	};	
	  

	const addProject = (projectName) => {
		const project = Project(projectName);
		Storage.saveProject(project);
		// Render new project (Appened project)
	};


	const addTodo = (projectName, todoData) => {
		const createToDo = ToDo(
		  todoData.task,
		  todoData.detail,
		  todoData.dueDate,
		  todoData.priority,
		  todoData.completed
		);
		const project = Storage.getProject(projectName);
		project.addTodo(createToDo);
		Storage.saveProject(project);
		// Render new todo (Appened todo)
	};

	const editTodo = (projectName, todoTitle) => {

	}

	const deleteTodo = (projectName, todoTitle) => {
		const project = Storage.getProject(projectName);
		project.removeTodo(todoTitle);
		Storage.saveProject(project);
		// Remove todo from DOM
	  };
	
	  const userName = localStorage.getItem('userName');
	  if (!userName) {
		  Home(); // 
	  } else {
		  loadProjects(); 
	  }
  

	return {
		loadProjects,
		addProject,
		addTodo,
		deleteTodo
	};
  
};