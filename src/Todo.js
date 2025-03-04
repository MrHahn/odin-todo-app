export default class Todo{
    constructor(title, description, dueDate, completed = false, priority = 10){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed
    }

    editTodo(title, desc, dueDate, priority){
        if (title !== undefined){ this.title = title };
        if (desc !== undefined) { this.desc = desc};
        if (dueDate !== undefined) { this.dueDate = dueDate};
        if (priority !== undefined) { this.priority = priority};

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
};