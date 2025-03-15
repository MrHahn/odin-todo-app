export default class ModalUI{
    static showTodoModal(){
        const newTodoBox = document.querySelector('#addTodos');
        newTodoBox.showModal();
    }

    static closeTodoModal(){
        const newTodoBox = document.querySelector('#addTodos');
        newTodoBox.close();
    }

    static showProjectModal(){
        const newProjectBox = document.querySelector('#addProjects');
        newProjectBox.showModal();
    }

    static closeProjectModal(){
        const newProjectBox = document.querySelector('#addProjects');
        newProjectBox.close();
    }
}