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

        projectManager.projects[0].createTodo(title, desc, dueDate);
        ProjectUI.displayTodos(projectManager.projects[0].todoArray);
    }
}