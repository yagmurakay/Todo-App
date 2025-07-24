import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo = '';
  nextId = 1;

  addTodo(): void {
    const trimmed = this.newTodo.trim();
    if (trimmed) {
      this.todos.push({ id: this.nextId++, title: trimmed, completed: false });
      this.newTodo = '';
    }
  }

  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}
