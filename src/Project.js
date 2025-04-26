import Todo from './Todo.js';

export default class Project{
    constructor(title, todoArray = []){
        this.title = title;
        // this.description = description;
        // this.dueDate = dueDate;
        // this.priority = priority;
        this.todoArray = todoArray;
    }

    createTodo(title, desc, dueDate, completed = false, priority = 10){
        let todo = new Todo(title, desc, dueDate, completed, priority );
        this.todoArray.push(todo);
        //this.saveTodosToStorage();
        return todo;
    }

    printTodos(){
        console.log(this.todoArray);
    }

    removeCompletedTodos(){
        this.todoArray = this.todoArray.filter(todo => !todo.completed);
    }

    deleteTodo(todoToRemove){
        this.todoArray.splice(todoToRemove, 1);
    }

    loadTodosFromStorage(){
        const rawTodo = JSON.parse(localStorage.getItem('todoArray'));
        this.todoArray = rawTodo.map(Todo.from);
    }

    saveTodosToStorage(){
        localStorage.setItem('todoArray', JSON.stringify(this.todoArray));
    }

    static from(obj){
        const todos = obj.todoArray.map(Todo.from);
        return new Project(obj.title, todos);
    }

}