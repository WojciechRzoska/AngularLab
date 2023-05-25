import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(todoText: string): void {
    const newTodo = {
      text: todoText,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  updateCompletion(todo: { text: string; completed: boolean }): void {
    console.log('complited');
  }

  deleteTodo(todo: { text: string; completed: boolean }): void {
    const index = this.todos.indexOf(todo);

    if (todo.completed && index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
