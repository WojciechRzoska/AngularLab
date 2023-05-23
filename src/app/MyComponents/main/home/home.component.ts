import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  todos: Todo[] = [];
  newTodoText: string = '';

  addTodo(): void {
    if (this.newTodoText.trim().length === 0) {
      return; // Don't add empty todos
    }

    const newTodo: Todo = {
      text: this.newTodoText,
      completed: false,
    };

    this.todos.push(newTodo);
    this.newTodoText = '';
  }

  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  removeCompletedTodos(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}
