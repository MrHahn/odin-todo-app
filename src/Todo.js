export default class Todo{
    constructor(title, description, dueDate, completed = false){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
    }

    editTodo({title, desc, dueDate}){
        if (title){ this.title = title };
        if (desc) { this.description = desc};
        if (dueDate) { this.dueDate = dueDate};
    }

    printTodo(){
        console.log(`
            Title: ${this.title}
            Description: ${this.description}
            Due Date: ${this.dueDate}
            Priority: ${this.priority}
            `);
    }

    markComplete(){
        this.completed = true;
    }

    static from(obj){
        return new Todo(obj.title, obj.description, obj.dueDate, obj.completed);
    }
};