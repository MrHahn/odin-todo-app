import projectManager from './ProjectManager.js';
import Project from './Project.js';
import Nav from './Nav.js';

export default class ProjectUI{
    static displayTodos(todoArr){
        const container = document.querySelector('.todo-container');
        container.innerHTML = '';
        todoArr.forEach(item => {
            const todoWrapper = document.createElement('div');
            const todoTitle = document.createElement('h1');
            const todoDesc = document.createElement('p');

            todoTitle.textContent = item.title;
            todoDesc.textContent = item.description;
            todoWrapper.appendChild(todoTitle);
            todoWrapper.appendChild(todoDesc);

            container.appendChild(todoWrapper);
        })
    }
    static submitNewProject(){
        const form = document.querySelector('form.addProject');
        const formData = new FormData(form);
        const title = formData.get('projectTitle');
        console.log(title);
        projectManager.addProject(title);
        Nav.populateNav();
    }
}