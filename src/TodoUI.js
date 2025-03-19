import projectManager from './ProjectManager.js';
import ProjectUI from './ProjectUI.js';

export default class TodoUI{
    static submitNewTodo(){
        const form = document.querySelector('form.addTodo')
        const formData = new FormData(form);
        const title = formData.get('title');
        const desc = formData.get('description');
        const dueDate = formData.get('dueDate');
        const priority = formData.get('priority');
        const project = formData.get('projects');
        projectManager.projects[project].createTodo(title, desc, dueDate);
        ProjectUI.displayTodos(projectManager.projects[project]);
    }

    static populateProjectSelect(){
        const form = document.querySelector('.addTodo');
        const selectField = form.querySelector('#projects');
        const projectArr = projectManager.getProjects();
        let index = 0
        selectField.innerHTML = '';
        projectArr.forEach(element => {
            let title = element.title;
            let option = document.createElement('option');
            option.value = index;
            option.textContent = title;
            selectField.appendChild(option);
            index ++;
        });
    }
}