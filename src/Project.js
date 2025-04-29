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

    static from(obj){
        const todos = obj.todoArray.map(Todo.from);
        return new Project(obj.title, todos);
    }

}