import "./styles.css";
import ProjectUI from './ProjectUI.js';
import ModalUI from './ModalUI.js';
import TodoUI from './TodoUI.js';
import { projectManager } from "./ProjectManager.js";
import Nav from './Nav.js';

const newTodo = document.querySelector('.new-todo');
const closeTodoModal = document.querySelector('#addTodos .close');
const newTodoSubmit = document.querySelector('form.addTodo')
const newProject = document.querySelector('.new-project');
const closeProjectModal = document.querySelector('#addProjects .close');
const newProjectSubmit = document.querySelector('form.addProject');
const removeProjectBtn = document.querySelector('.removeProject');
const container = document.querySelector('#todo-container');
const closeEditModal = document.querySelector('#editTodos .close');


if(localStorage.getItem('projects')){
    projectManager.loadProjectsFromStorage();
}else{
    projectManager.addProject('Misc. Todos');
}

ProjectUI.displayTodos(projectManager.projects[0]);

Nav.populateNav();
Nav.activeProjectHighight();

newTodo.addEventListener('click', () => {
    ModalUI.showTodoModal();
    TodoUI.populateProjectSelect();
})

closeTodoModal.addEventListener('click', () => {
    ModalUI.closeTodoModal();
})

newTodoSubmit.addEventListener('submit', () => {
    TodoUI.submitNewTodo();
})

newProject.addEventListener('click', () => {
    ModalUI.showProjectModal();
})

closeProjectModal.addEventListener('click', () => {
    ModalUI.closeProjectModal();
})

closeEditModal.addEventListener('click', () => {
    ModalUI.closeEditModal();
})

newProjectSubmit.addEventListener('submit', () => {
    ProjectUI.submitNewProject();
})

removeProjectBtn.addEventListener('click', () => {
    let currentProjectIndex = container.getAttribute('project-index');
    projectManager.deleteProject(currentProjectIndex);
    Nav.populateNav();
    if(projectManager.projects.length === 0){
        alert('No projects to remove');
    }else{
        ProjectUI.displayTodos(projectManager.projects[0]);
        projectManager.saveProjectsToStorage();
    }
    
})