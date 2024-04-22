class Todo {
    title;
    completed;
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }
}
class TodoList {
    todos = [];
    addTodo(title) {
        this.todos.push(new Todo(title));
    }
    completeTodo() {
        let index = 0;
        while (index < this.todos.length) {
            if (!this.todos[index].completed) {
                this.todos[index].completed = true;
                break;
            }
            index++;
        }
    }
    removeTodo() {
        let index = 0;
        while (index < this.todos.length) {
            if (this.todos[index].completed) {
                this.todos.splice(index, 1);
                break;
            }
            index++;
        }
    }
    showTodos() {
        console.log("Todo List:");
        let index = 0;
        while (index < this.todos.length) {
            const todo = this.todos[index];
            const status = todo.completed ? "✔" : " ";
            console.log(`${index + 1}. [${status}] ${todo.title}`);
            index++;
        }
    }
}
const todoList = new TodoList();
todoList.addTodo("Buy groceries");
todoList.addTodo("Do laundry");
todoList.showTodos();
todoList.completeTodo();
todoList.removeTodo();
todoList.showTodos();
export {};
