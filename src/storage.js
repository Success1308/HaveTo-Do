// Storage.js

export default function Storage() {
  const saveUserName = function (userName) {
    localStorage.setItem("user-name", JSON.stringify(userName));
  };

  const getUserName = function () {
    const userNameStored = JSON.parse(localStorage.getItem("user-name"));
    return userNameStored;
  };

  const saveProject = (project) => {
    localStorage.setItem(
      `project-${project.projectName}`,
      JSON.stringify(project)
    );
  };

  const getProject = (projectName) => {
    const gotProject = JSON.parse(
      localStorage.getItem(`project-${projectName}`)
    );
    return gotProject;
  };

  const loadProjects = () => {
    projects = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("project-")) {
        const project = JSON.parse(localStorage.getItem(key));
        if (project && project.projectName) {
          projects.push(project);
        }
      }
    }
    return projects;
  };

  const removeProject = (projectName) => {
    localStorage.removeItem(`project-${projectName}`);
    projects = projects.filter(
      (project) => project.projectName !== projectName
    );
  };

  return {
    saveUserName,
    getUserName,
    saveProject,
    getProject,
    loadProjects,
    removeProject,
  };
}
