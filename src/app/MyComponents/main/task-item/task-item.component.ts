import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  todoText = '';
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() todoAdded = new EventEmitter<string>();

  submitForm(): void {
    if (this.todoText.trim() !== '') {
      this.todoAdded.emit(this.todoText);
      this.todoText = '';
    }
  }
}
