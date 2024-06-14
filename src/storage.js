// Storage.js
import Project from './project';
import ToDo from './todo';


export default function Storage(){
  const saveUserName = function(userName){
    localStorage.setItem("user-name", JSON.stringify(userName));
  }; 

  const getUserName = function(){
    const userNameStored = JSON.parse(localStorage.getItem("user-name"));
    return userNameStored;
  }; 

  const saveProject = (project) => {
    localStorage.setItem(project.name, JSON.stringify(project));
  };
    
  const getProject = (projectName) => {
    const projectData = JSON.parse(localStorage.getItem(projectName));
    if (!projectData) return null; 

    const project = Project(projectData.name);

    projectData.toDos.forEach(todoData => {
        const todo = ToDo(todoData.task, todoData.detail, todoData.dueDate, todoData.priority);
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
      return projects.filter(project => project !== null); 
  };
    
  return {
    saveUserName,
    getUserName,
    saveProject,
    getProject,
    getProjects
  };
};
  