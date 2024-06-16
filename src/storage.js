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
    localStorage.setItem(project, JSON.stringify(project));
  };
    
  const getProject = (projectName) => {
    const projectData = localStorage.getItem(projectName);
    if (!projectData) return null; 

    const project = Project(projectData.projectName);

    project.toDos.forEach(todoData => {
        const todo = ToDo(todoData.title, todoData.priority); 
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
    
  const removeProject = (projectName) => {
    localStorage.removeItem(projectName);
    const keysToRemove = Object.keys(localStorage).filter(key => key.startsWith(`${projectName}-`));
    keysToRemove.forEach(key => {
        localStorage.removeItem(key);
    });
  };

  return {
    saveUserName,
    getUserName,
    saveProject,
    getProject,
    getProjects,
    removeProject
  };
};
  