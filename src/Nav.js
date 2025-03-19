import projectManager from "./ProjectManager";
import Project from "./Project";
import ProjectUI from "./ProjectUI";

export default class Nav{
    static populateNav(){
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
            })
            list.appendChild(listItem);
        })
        navWrapper.appendChild(list);
    }
}