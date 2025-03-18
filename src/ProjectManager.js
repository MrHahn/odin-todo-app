import Project from './Project.js';

class ProjectManager{
    constructor(){
        this.projects = [];
    }

    addProject(title){
        const project = new Project(title);
        this.projects.push(project);
        return project;
    }

    getProjects(){
        console.log(this.projects);
        return this.projects;
    }
}

const projectManager = new ProjectManager();

projectManager.addProject('Default Project');

export default projectManager;

