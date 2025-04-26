import {projectManager} from './ProjectManager.js';
import ProjectUI from './ProjectUI.js';
import ModalUI from './ModalUI.js';
import Project from './Project.js';

export default class TodoUI{
    static submitNewTodo(){
        const container = document.querySelector('#todo-container');
        const form = document.querySelector('form.addTodo')
        const formData = new FormData(form);
        const title = formData.get('title');
        const desc = formData.get('description');
        const dueDate = formData.get('dueDate');
        const project = formData.get('projects');
        projectManager.projects[project].createTodo(title, desc, dueDate);
        projectManager.saveProjectsToStorage();
        container.setAttribute('project-index', project);
        ProjectUI.displayTodos(projectManager.projects[project]);
    }

    static editTodoContent(todo, project){
        const form = document.querySelector('form.editTodo')
        const formData = new FormData(form);
        const title = formData.get('newTitle');
        const desc = formData.get('newDescription');
        const dueDate = formData.get('newDueDate');
        project.todoArray[todo].editTodo({title, desc, dueDate});
        ProjectUI.displayTodos(project);
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

    static openTodoInterface(element, close, index, project){
        let todoClone = element.cloneNode(true);
        todoClone.classList.add('expanded');
        todoClone.appendChild(close);
        let removeBtn = this.generateDeleteBtn(todoClone);
        let editBtn = this.generateEditBtn(todoClone);
        element.appendChild(todoClone);
        close.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('close clicked');
            todoClone.remove();
            ProjectUI.displayTodos(project);
        })

        removeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('remove clicked');
            ProjectUI.removeTodoElement(index, project);
        })
        editBtn.addEventListener('click', (event) => {
            event.stopPropagation(); 
            console.log('edit clicked');
            let todoIndex = event.currentTarget.parentElement.dataset.index;
            ModalUI.showEditModal();
            const submitEditModal = document.querySelector('form.editTodo');
            submitEditModal.setAttribute('data-index', todoIndex);
            
            submitEditModal.addEventListener('submit', (event) => {
                todoIndex = submitEditModal.dataset.index;
                console.log('submit clicked');
                event.stopImmediatePropagation();
                this.editTodoContent(todoIndex, project);
            })
    
        })

        
    }

    static generateDeleteBtn(element){
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = "Delete";
        element.appendChild(removeBtn);
        return removeBtn;

    }

    static generateEditBtn(element){
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = "Edit";
        element.appendChild(editBtn);
        return editBtn;
    }
}