import "./styles.css";
import Project from './Project.js';
import ProjectUI from './ProjectUI.js';
import ModalUI from './ModalUI.js';
import TodoUI from './TodoUI.js';
//import defaultProject from './ProjectManager.js';
import projectManager from './ProjectManager.js';

// window.Project = Project;
// window.ProjectUI = ProjectUI;

const newTodo = document.querySelector('.new-todo');
const close = document.querySelector('#addTodos .close');
const newTodoSubmit = document.querySelector('form.addTodo')

ProjectUI.displayTodos(projectManager.projects[0].todoArray);



newTodo.addEventListener('click', () => {
    ModalUI.showModal();
    TodoUI.populateProjectSelect();
})

close.addEventListener('click', () => {
    ModalUI.closeModal();
})

newTodoSubmit.addEventListener('submit', () => {
    TodoUI.submitNewTodo();
})

