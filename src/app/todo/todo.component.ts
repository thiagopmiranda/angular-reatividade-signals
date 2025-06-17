import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  newTodo = signal('');

  constructor(public todoService: TodoService) {}

  add() {
    if (this.newTodo().trim()) {
      this.todoService.add(this.newTodo().trim());
      this.newTodo.set('');
    }
  }

  toggle(id: number) {
    this.todoService.toggle(id);
  }

  loadTodos() {
    this.todoService.load();
  }

  remove(id: number) {
    this.todoService.remove(id);
  }
}