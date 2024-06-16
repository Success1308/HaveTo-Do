// projectDOm.js

import Storage from './storage';
import Project from './project';
import {renderTodos} from './todoDom';


const storage = Storage();
let currentProject = "Today"; 


// Create project-list div
const projectList = document.createElement('div');
projectList.className = 'project-list';

// Create default project div
const projectDefault = document.createElement('div');


// create project
function addProject(projectName) {
    const projectcre = Project(projectName);
    storage.saveProject(projectcre.projectName);
    const projectElement = createProjectElement(projectcre);
    projectList.appendChild(projectElement);
}

// append project
function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    const projectContent = document.createElement('p');
    projectContent.className = 'project-content';
    projectContent.textContent = project.projectName;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-project';
    removeButton.innerHTML = '<i class="fas fa-times"></i>';
    removeButton.addEventListener('click', () => {
        removeProject(project.projectName);
        projectDefault.style.backgroundColor = "#e4d9f2";
        renderTodos('Today'); 
    });

    projectElement.appendChild(projectContent);
    projectElement.appendChild(removeButton);

    projectElement.addEventListener('click', () => {
        currentProject = project;

        const other1 = document.querySelectorAll('.project');  
        other1.forEach(element => {
            element.style.backgroundColor = "#fbf8ff";
        });
        projectElement.style.backgroundColor = "#e4d9f2";
        projectDefault.style.backgroundColor = "#fbf8ff";   
        
        renderTodos(currentProject.projectName);
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
    
    // Create leftSide div
    const leftSide = document.createElement('div');
    leftSide.className = 'leftSide';

    // Create h4 element for Projects
    const h4 = document.createElement('h4');
    h4.textContent = 'Projects';

    projectList.innerHTML = '';
    
    projectDefault.className = 'project-default';
    projectDefault.style.backgroundColor = "#e4d9f2"; 
    
    const projectDefaultContent = document.createElement('p');
    projectDefaultContent.className = 'project-content';
    projectDefaultContent.textContent = 'Today';
    

    const projectDef = Project("Today");
    storage.saveProject(projectDef);
    projectDefault.appendChild(projectDefaultContent); 
     
    projectDefault.addEventListener('click', () => {
        projectDefault.style.backgroundColor = "#e4d9f2"; 
        const other = document.querySelectorAll('.project');  
        other.forEach(element => {
            element.style.backgroundColor = "#fbf8ff";
        });    
        renderTodos('Today');
    });
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
        inputContainer.style.display = inputContainer.style.display === 'block' ? 'none' : 'block';
        addButton.addEventListener('click', () => {
            const projectName = textarea.value.trim();
            if (projectName) {
                addProject(projectName);
                textarea.value = '';
                inputContainer.style.display = 'none';
            }
        });
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