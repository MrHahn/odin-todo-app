import Project from './Project.js';

class ProjectManager{
    constructor(){
        this.projects = [];
        this.currentProjectIndex = this.projects.length - 1; 
    }

    addProject(title){
        const project = new Project(title);
        this.projects.push(project);
        return project;
    }

    getProjects(){
        return this.projects;
    }

    getCurrentProject() {
        return this.projects[this.currentProjectIndex] || null;
    }

    deleteProject(projectToRemove){
        this.projects.splice(projectToRemove, 1);
    }
}

const projectManager = new ProjectManager();

projectManager.addProject('Default Project');

export default projectManager;

