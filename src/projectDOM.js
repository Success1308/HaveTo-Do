

export function createLeftSide() {
    // Create leftSide div
    const leftSide = document.createElement('div');
    leftSide.className = 'leftSide';

    // Create h4 element for Projects
    const h4 = document.createElement('h4');
    h4.textContent = 'Projects';

    // Create project-list div
    const projectList = document.createElement('div');
    projectList.className = 'project-list';

    // Create default project div
    const projectDefault = document.createElement('div');
    projectDefault.className = 'project-default';

    const projectDefaultContent = document.createElement('p');
    projectDefaultContent.className = 'project-content';
    projectDefaultContent.textContent = 'Today';

    projectDefault.appendChild(projectDefaultContent);

    // Create another project div
    const project = document.createElement('div');
    project.className = 'project';

    const projectContent = document.createElement('p');
    projectContent.className = 'project-content';
    projectContent.textContent = 'Tomorrow';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-project';

    const removeIcon = document.createElement('i');
    removeIcon.className = 'fas fa-times';

    removeButton.appendChild(removeIcon);
    project.appendChild(projectContent);
    project.appendChild(removeButton);

    // Append projects to project-list
    projectList.appendChild(projectDefault);
    projectList.appendChild(project);

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