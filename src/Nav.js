import projectManager from "./ProjectManager";

export default class Nav{
    static populateNav(){
        const navWrapper = document.querySelector('header nav');
        const list = document.createElement('ul');
        let projectList = projectManager.getProjects();
        projectList.forEach((item, index) => {
            let listItem = document.createElement('li');
            listItem.textContent = item.title;
            listItem.setAttribute('index', index);
            list.appendChild(listItem);
        })
        navWrapper.appendChild(list);
    }

    static submitNewProject(){
        
    }
}