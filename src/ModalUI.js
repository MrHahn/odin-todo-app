export default class ModalUI{
    static showModal(){
        const newTodoBox = document.querySelector('#addTodos');
        newTodoBox.showModal();
    }

    static closeModal(){
        const newTodoBox = document.querySelector('#addTodos');
        newTodoBox.close();
    }
}