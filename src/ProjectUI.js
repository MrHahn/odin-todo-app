import {projectManager} from './ProjectManager.js';
import Nav from './Nav.js';
import TodoUI from './TodoUI.js';

export default class ProjectUI{
    static displayTodos(project){
        const container = document.querySelector('#todo-container');
        let todoArr = project.todoArray;
        container.innerHTML = '';
        
        todoArr.forEach((item, index) => {
            const todoWrapper = document.createElement('div');
            const todoTitle = document.createElement('h1');
            const todoDesc = document.createElement('p');
            const close = document.createElement('span');

            todoWrapper.classList.add('todo');
            todoWrapper.setAttribute('data-index', index);
            todoTitle.textContent = item.title;
            todoDesc.textContent = item.description;
            close.classList.add('close');
            close.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>';

            todoWrapper.addEventListener('click', (event) => {
                event.stopPropagation();
                console.log('todo wrapper clicked');
                TodoUI.openTodoInterface(todoWrapper, close, index, project);
            },{ once: true });

            todoWrapper.appendChild(todoTitle);
            todoWrapper.appendChild(todoDesc);

            container.appendChild(todoWrapper);
        })
    }
    static submitNewProject(){
        const container = document.querySelector('#todo-container');
        const form = document.querySelector('form.addProject');
        const formData = new FormData(form);
        const title = formData.get('projectTitle');
        let newIndex;
        projectManager.addProject(title);
        newIndex = projectManager.projects.length - 1;
        container.setAttribute('project-index', newIndex);
        Nav.populateNav();
        form.reset();

    }

    static removeTodoElement(index, project){
        project.deleteTodo(index);
        projectManager.saveProjectsToStorage();
        this.displayTodos(project);
    }
}