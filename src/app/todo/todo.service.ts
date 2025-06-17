import { Injectable, computed, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos = signal<Todo[]>([]);
  private loading = signal(false);
  private error = signal<string | null>(null);

  total = computed(() => this.todos().length);
  completed = computed(() => this.todos().filter(t => t.done).length);

  constructor(private http: HttpClient) {
    effect(() => {
      console.log(`Total: ${this.total()}, Concluídas: ${this.completed()}`);
    });
  }

  getTodos = this.todos.asReadonly();
  isLoading = this.loading.asReadonly();
  getError = this.error.asReadonly();

  load() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Todo[]>('/api/todos')
      .pipe(
        catchError(err => {
          this.error.set('Erro ao carregar tarefas');
          return of([]);
        })
      )
      .subscribe(data => {
        this.todos.set(data);
        this.loading.set(false);
      });
  }

  toggle(id: number) {
    const updated = this.todos().map(t => 
      t.id === id ? { ...t, done: !t.done } : t
    );
    this.todos.set(updated);
  }

  add(title: string) {
    const newTodo: Todo = {
      id: Math.max(0, ...this.todos().map(t => t.id)) + 1,
      title,
      done: false
    };
    this.todos.set([...this.todos(), newTodo]);
  }

  remove(id: number) {
    const updated = this.todos().filter(t => t.id !== id);
    this.todos.set(updated);
  }
}