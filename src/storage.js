// Storage.js
import createProject from './createProject';
import createToDo from './createToDo';


export default function Storage(){
	const saveProject = (project) => {
	  localStorage.setItem(project.name, JSON.stringify(project));
	};
  
	const getProject = (projectName) => {
		const projectData = JSON.parse(localStorage.getItem(projectName));
        const project = createProject(projectData.name);

		projectData.toDos.forEach(todoData => {
            const todo = createToDo(todoData.task, todoData.detail, todoData.dueDate, todoData.priority);
            todo.completed = todoData.completed;
            project.addTodo(todo);
        });

        return project;
	};
  
	const getProjects = () => {
        const projects = [];
        for (let i = 0; i < localStorage.length; i++) {
            const projectName = localStorage.key(i);
            projects.push(getProject(projectName));
        }
        return projects;
    };
  
	return {
	  saveProject,
	  getProject,
	  getProjects
	};
  };
  