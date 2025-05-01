import {projectManager} from "./ProjectManager";
import ProjectUI from "./ProjectUI";

export default class Nav{
    static populateNav(){
        const container = document.querySelector('#todo-container');
        const navWrapper = document.querySelector('header nav');
        navWrapper.innerHTML = '';
        const list = document.createElement('ul');
        let projectList = projectManager.getProjects();
        projectList.forEach((item, index) => {
            let listItem = document.createElement('li');
            listItem.textContent = item.title;
            listItem.setAttribute('index', index);
            listItem.addEventListener('click', () => {
                ProjectUI.displayTodos(projectManager.projects[index])
                container.setAttribute('project-index', index);
            })
            list.appendChild(listItem);

        })
        navWrapper.appendChild(list);
    }

    static activeProjectHighight(){
        const firstNavItem = document.querySelector('header nav ul li');
        const navItems = document.querySelectorAll('header nav ul li');
        firstNavItem.classList.add('active');
        navItems.forEach((item) => {
            item.addEventListener('click', function(){
                navItems.forEach((item => {
                    item.classList.remove('active');
                }))
                this.classList.add('active');
            });
        })
    }
}