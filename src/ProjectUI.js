import projectManager from './ProjectManager.js';
import Project from './Project.js';
import Nav from './Nav.js';

export default class ProjectUI{
    static displayTodos(project){
        const container = document.querySelector('.todo-container');
        let todoArr = project.todoArray;
        container.innerHTML = '';
        todoArr.forEach((item, index) => {
            const todoWrapper = document.createElement('div');
            const todoTitle = document.createElement('h1');
            const todoDesc = document.createElement('p');
            const removeBtn = document.createElement('button');

            todoWrapper.classList.add('todo');
            removeBtn.textContent = 'Delete';
            todoTitle.textContent = item.title;
            todoDesc.textContent = item.description;

            removeBtn.addEventListener('click', () => {
                project.deleteTodo(index);
                this.displayTodos(project);
            })

            todoWrapper.appendChild(todoTitle);
            todoWrapper.appendChild(todoDesc);
            todoWrapper.appendChild(removeBtn);

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