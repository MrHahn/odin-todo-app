import Project from './Project.js';

export default class ProjectManager{
    constructor(){
        this.projects = [];
        this.currentProjectIndex = this.projects.length - 1; 
    }

    addProject(title){
        const project = new Project(title);
        this.projects.push(project);
        this.saveProjectsToStorage();
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

    loadProjectsFromStorage(){
        const projectArray = JSON.parse(localStorage.getItem('projects') || []);
        this.projects = projectArray.map(Project.from);
    }

    saveProjectsToStorage(){
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    findProject(title){
        return this.projects.find(project => project.title === title);
    }
}

export const projectManager = new ProjectManager();

