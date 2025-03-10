import "./styles.css";
import Project from './Project.js';
import ProjectUI from './ProjectUI.js';
import ModalUI from './ModalUI.js';

window.Project = Project;
window.ProjectUI = ProjectUI;

const newTodo = document.querySelector('.new-todo');
const close = document.querySelector('#addTodos .close');

 let projectTest = new Project('Title', 'Description', 'january' );

 projectTest.createTodo('Test', 'This is a test todo', '04/04/2025');

 ProjectUI.displayTodos(projectTest.todoArray);



newTodo.addEventListener('click', () => {
    ModalUI.showModal();
})

close.addEventListener('click', () => {
    ModalUI.closeModal();
})

