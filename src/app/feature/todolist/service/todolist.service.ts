import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';

@Injectable()
export class TodolistService {

  private todos: Todo[] = [];



  public getAllTodo(): Todo[] {
    return this.todos;
  }

  public getTodo(id): Todo {
    return this.todos.find(v => v.id === id);
  }



  public saveTodo(todo: Todo): void {
    if (!!todo.id) {
      this.editTodo(todo);
    } else {
      todo.id = '' + this.todos.length + 1;
      this.todos.push(todo);
    }
  }



  public removeTodo(id: string): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }



  public editTodo(note: Todo): void {
    const indexEditTodo = this.todos.findIndex(v => v.id === note.id);
    this.todos[indexEditTodo] = note;
  };

}

